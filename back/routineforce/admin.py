from django.contrib import admin

# Register your models here.
from routineforce.models import User, Challenge, Certification
admin.site.register(User)
admin.site.register(Challenge)
admin.site.register(Certification)

