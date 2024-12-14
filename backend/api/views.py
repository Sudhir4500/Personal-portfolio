
from rest_framework import generics
from .models import Project, Introduction, About, MyService, Contact,Logo,Skill
from .serializers import ProjectSerializer, IntroductionSerializer, AboutSerializer, MyServiceSerializer, ContactSerializer,logoserializer,SkillSerializer

# Create your views here
# crearing the view for the logo
class logoList(generics.ListCreateAPIView):
    queryset = Logo.objects.all()
    serializer_class = logoserializer

# creating the view for the introduction
class IntroductionList(generics.ListAPIView):
    queryset = Introduction.objects.all()
    serializer_class = IntroductionSerializer

# creating the view for the About me
class AboutList(generics.ListCreateAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

# creating the view for the myservices
class MyServiceList(generics.ListCreateAPIView):
    queryset = MyService.objects.all()
    serializer_class = MyServiceSerializer

# creating the view for the contact
class ContactList(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


# creating the view for the project
class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# creating the view for the skills
class SkillList(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

