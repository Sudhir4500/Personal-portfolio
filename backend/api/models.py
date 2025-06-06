from django.db import models

# Create your models here.
from cloudinary.models import CloudinaryField
from django.db import models

class Logo(models.Model):
    # The 'logo' field stores the image itself
    logo =CloudinaryField('image')
    
    # You can add other fields if needed, such as a name or description
    name = models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.name or f"Logo {self.id}"
    
# create a model for the introduction
class Introduction(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = CloudinaryField('image',blank=True)  # Temporary local upload
    title = models.CharField(max_length=200, blank=True)
    greet = models.CharField(max_length=200, blank=True)


    def __str__(self):
        return self.name


# create a model for the About me
class About(models.Model):
    description = models.TextField()
    image = CloudinaryField('image',blank=True)

    def __str__(self):
         return f"about {self.id}"


# create a model for the myservices
class MyService(models.Model):
    service_title=models.CharField(max_length=200)
    service_description = models.TextField()
    service_image = CloudinaryField('image',blank=True)

    def __str__(self):
        return self.service_title


# create a model for the project 
class Project(models.Model):
    image = CloudinaryField('image',blank=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    Github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    programming_languages = models.CharField(max_length=200)

    def __str__(self):
        return self.title

# create a model for the contact
class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()
    service_type = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
# creating a model for skills
class Skill(models.Model):
    name = models.CharField(max_length=200)
    logo= CloudinaryField('image',blank=True)
    percentage = models.IntegerField()

    def __str__(self):
        return self.name
