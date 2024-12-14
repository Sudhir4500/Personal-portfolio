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

# creating the urls file so that we can access the api
# from django.urls import path
# from rest_framework.routers import DefaultRouter
# from .views import ProjectList, IntroductionList, AboutList, MyServiceList, ContactList

# router_api = DefaultRouter()
# router_api.register('projects', ProjectList)
# router_api.register('introduction', IntroductionList)
# router_api.register('about', AboutList)
# router_api.register('myservices', MyServiceList)
# router_api.register('contact', ContactList)