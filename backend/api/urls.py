from django.urls import path
from .views import ProjectList, IntroductionList, AboutList, MyServiceList, ContactList,logoList,SkillList

urlpatterns = [
    path('', IntroductionList.as_view(), name='introduction'),
    path('about/', AboutList.as_view(), name='about'),
    path('myservices/', MyServiceList.as_view(), name='myservices'),
    path('projects/', ProjectList.as_view(), name='projects'),
    path('contact/', ContactList.as_view(), name='contact'),
    path('logo/', logoList.as_view(), name='logo'),
    path('skills/', SkillList.as_view(), name='skills'),
]

