
from rest_framework import generics
from .models import Project, Introduction, About, MyService, Contact,Logo,Skill
from .serializers import ProjectSerializer, IntroductionSerializer, AboutSerializer, MyServiceSerializer, ContactSerializer,logoserializer,SkillSerializer


# crearing the view for the logo


class logoList(generics.ListAPIView):
    queryset = Logo.objects.all()
    serializer_class = logoserializer

# creating the view for the introduction
class IntroductionList(generics.ListAPIView):
    queryset = Introduction.objects.all()
    serializer_class = IntroductionSerializer

# creating the view for the About me
class AboutList(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

# creating the view for the myservices
class MyServiceList(generics.ListAPIView):
    queryset = MyService.objects.all()
    serializer_class = MyServiceSerializer

# creating the view for the contact
class ContactList(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


# creating the view for the project
class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# creating the view for the skills
class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

