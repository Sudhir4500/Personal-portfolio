import requests
from django.core.files.storage import Storage
from django.conf import settings

class VercelBlobStorage(Storage):
    def _save(self, name, content):
        """Upload the file to Vercel Blob Storage."""
        token = settings.BLOB_READ_WRITE_TOKEN
        url = "https://blob.vercel-storage.com/api/blob"

        headers = {
            "Authorization": f"Bearer {token}"
        }

        files = {
            "file": (content.name, content.read(), content.content_type)
        }

        response = requests.post(url, headers=headers, files=files)

        if response.status_code == 200:
            return response.json()["url"]  # Store the URL of the uploaded file
        else:
            raise Exception(f"Failed to upload file: {response.text}")

    def url(self, name):
        """Return the URL of the uploaded file."""
        return name

    def exists(self, name):
        """Return False to force upload of files with the same name."""
        return False
