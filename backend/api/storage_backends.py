from django.core.files.storage import Storage
from vercel_storage import VercelBlobStorage
import os

class VercelBlobStorageBackend(Storage):
    def __init__(self, *args, **kwargs):
        self.client = VercelBlobStorage(token=os.environ.get('VERCEL_BLOB_TOKEN'))

    def _open(self, name, mode='rb'):
        return self.client.open(name, mode)

    def _save(self, name, content):
        return self.client.save(name, content)

    def url(self, name):
        return self.client.url(name)
