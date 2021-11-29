from django.contrib import admin

# Register your models here.
from routineforce.models import User, Routine, Certification, LogPoint, CommonCode, RoutineRegistration, Heart, Comment
admin.site.register(User)
admin.site.register(Routine)
admin.site.register(Certification)
admin.site.register(LogPoint)
admin.site.register(CommonCode)
admin.site.register(RoutineRegistration)
admin.site.register(Heart)
admin.site.register(Comment)

