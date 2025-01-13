from django.contrib import admin
from .models import Project, Introduction, About, MyService, Contact, Logo, Skill

# Register the model with the custom admin interface
admin.site.register(Introduction)
admin.site.register(Project)
admin.site.register(About)
admin.site.register(MyService)
admin.site.register(Contact)
admin.site.register(Logo)
admin.site.register(Skill)


