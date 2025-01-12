from django.core.files.storage import Storage
from django.conf import settings

class VercelBlobStorage(Storage):
    # ... other methods ...

    def _save(self, name, content):
        settings.vercel_blob.put(name, content.read(), {}) 
        return name

    def url(self, name):
        return f"https://portfolio-web.public.blob.vercel-storage.com/{name}"