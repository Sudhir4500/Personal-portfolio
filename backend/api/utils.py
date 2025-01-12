import os
import requests
from django.core.files.uploadedfile import InMemoryUploadedFile

VERCEL_BLOB_TOKEN ="vercel_blob_rw_E9aiDY8gd2VqNbi5_2EOqfIrD2i024fWDIggAB4Fi0zPAUL"

def upload_to_vercel_blob(file_obj, filename):
    try:
        if isinstance(file_obj, InMemoryUploadedFile):
            # For in-memory files, read the content directly
            file_content = file_obj.read() 
        else:
            # For temporary files, open and read as before
            with open(file_obj, 'rb') as f:
                file_content = f.read()

        response = requests.put(
            f'https://api.vercel.com/v1/blob/put?token={VERCEL_BLOB_TOKEN}&filename={filename}',
            headers={'Content-Type': 'application/octet-stream'},
            data=file_content
        )
        response.raise_for_status()
        return response.json()['url']
    except requests.exceptions.RequestException as e:
        print(f"Error uploading file: {e}")
        return None