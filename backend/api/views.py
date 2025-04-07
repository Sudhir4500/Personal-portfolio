
from rest_framework import generics
from django.core.mail import send_mail
from .models import Project, Introduction, About, MyService, Contact,Logo,Skill
from .serializers import ProjectSerializer, IntroductionSerializer, AboutSerializer, MyServiceSerializer, ContactSerializer,logoserializer,SkillSerializer
from django.conf import settings


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

    def perform_create(self, serializer):
        contact = serializer.save()

        # Email content
        subject = f"{contact.name} Wants to connect with you"
        message = f"""The following person wants to connect with you\n\n
        Name: {contact.name}
        Email: {contact.email}
        Service Type: {contact.service_type}
        Message: {contact.message}
        """

        # Sending email to Sudhir
        send_mail(
            subject,
            message,
            # 'sharmasudhir04500@gmail.com',  # Sender email (must match EMAIL_HOST_USER)
            settings.EMAIL_HOST_USER,  # Sender email (must match EMAIL_HOST_USER)
            [settings.EMAIL_RECEIVING_USER],  # Recipient email
            fail_silently=False,
        )


# creating the view for the project
class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# creating the view for the skills
class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

