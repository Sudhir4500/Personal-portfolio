# creating the serializers for the api
# serializers are used to convert complex data types, such as querysets and model instances, to native Python data types that can then be easily rendered into JSON, XML or other content types.

from rest_framework import serializers
from .models import Project, Introduction, About, MyService, Contact,Logo,Skill

# creating the serializers for the logo
class logoserializer(serializers.ModelSerializer):
    logo = serializers.SerializerMethodField()

    class Meta:
        model = Logo
        fields = '__all__'

    def get_logo(self, obj):  # Use get_logo to match the 'logo' field
        if obj.logo:
            return obj.logo.url  # Ensure the full Cloudinary URL is returned
        return None

# creating the serializers for the introduction
class IntroductionSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    class Meta:
        model = Introduction
        fields = '__all__'

    def get_image(self, obj):
        if obj.image:
            return obj.image.url  # Ensures full Cloudinary URL is returned
        return None

class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    class Meta:
        model = Project
        fields = '__all__'
    
    def get_image(self, obj):
        if obj.image:
            return obj.image.url  # Ensures full Cloudinary URL is returned
        return None

# creating the serializers for the About me
class AboutSerializer(serializers.ModelSerializer):
    image= serializers.SerializerMethodField()
    class Meta:
        model = About
        fields = '__all__'

    def get_image(self, obj):
        if obj.image:
            return obj.image.url  # Ensures full Cloudinary URL is returned
        return None

# creating the serializers for the myservices
class MyServiceSerializer(serializers.ModelSerializer):
    service_image = serializers.SerializerMethodField()

    class Meta:
        model = MyService
        fields = '__all__'

    def get_service_image(self, obj):  # Ensure method name matches the field name 'service_image'
        if obj.service_image:
            return obj.service_image.url  # Ensures full Cloudinary URL is returned
        return None

# creating the serializers for the contact
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

# creating the serializers for the skills
class SkillSerializer(serializers.ModelSerializer):
    logo = serializers.SerializerMethodField()
    class Meta:
        model = Skill
        fields = '__all__'

    def get_logo(self, obj):  # Use get_logo to match the 'logo' field
        if obj.logo:
            return obj.logo.url  # Ensure the full Cloudinary URL is returned
        return None



