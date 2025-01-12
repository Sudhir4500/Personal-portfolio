from django.contrib import admin
from .models import Project, Introduction, About, MyService, Contact, Logo, Skill
from .utils import upload_to_vercel_blob
from django.core.files.uploadedfile import InMemoryUploadedFile


# Register your models here.
admin.site.register(Project)
class IntroductionAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        uploaded_file = form.cleaned_data.get('image')
        if uploaded_file:
            if isinstance(uploaded_file, InMemoryUploadedFile):
                blob_url = upload_to_vercel_blob(uploaded_file, uploaded_file.name)
            else:
                blob_url = upload_to_vercel_blob(
                    uploaded_file.temporary_file_path(),
                    uploaded_file.name
                )
            if blob_url:
                obj.image_url = blob_url
                obj.image = None  # Clear the ImageField
        super().save_model(request, obj, form, change)
admin.site.register(Introduction, IntroductionAdmin)
admin.site.register(About)
admin.site.register(MyService)
admin.site.register(Contact)
admin.site.register(Logo)
admin.site.register(Skill)


