import os
import requests
from django.core.files.uploadedfile import InMemoryUploadedFile

VERCEL_BLOB_TOKEN = os.environ.get('VERCEL_BLOB_TOKEN')


def upload_to_vercel_blob(file_obj, filename):
    try:
        if isinstance(file_obj, InMemoryUploadedFile):
            file_content = file_obj.read()
        else:
            with open(file_obj, 'rb') as f:
                file_content = f.read()

        response = requests.put(
            f'https://api.vercel.com/v1/blob/put?token={VERCEL_BLOB_TOKEN}&filename={filename}',
            headers={'Content-Type': 'application/octet-stream'},
            data=file_content
        )
        response.raise_for_status()  # Raise an exception for bad status codes
        return response.json()['url']
    except requests.exceptions.RequestException as e:
        print(f"Error uploading file: {e}")  # Print the error for debugging
        return None