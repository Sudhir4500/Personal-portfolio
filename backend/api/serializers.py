# creating the serializers for the api
# serializers are used to convert complex data types, such as querysets and model instances, to native Python data types that can then be easily rendered into JSON, XML or other content types.

from rest_framework import serializers
from .models import Project, Introduction, About, MyService, Contact,Logo,Skill

# creating the serializers for the logo
class logoserializer(serializers.ModelSerializer):
    class Meta:
        model = Logo
        fields = '__all__'
# creating the serializers for the introduction
class IntroductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Introduction
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

# creating the serializers for the About me
class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'

# creating the serializers for the myservices
class MyServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyService
        fields = '__all__'

# creating the serializers for the contact
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

# creating the serializers for the skills
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'



