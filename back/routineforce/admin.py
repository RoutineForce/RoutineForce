from django.contrib import admin

# Register your models here.
from routineforce.models import User, Challenge, Certification, LogPoint, CommonCode, ChallengeRegistration, Heart, Comment
admin.site.register(User)
admin.site.register(Challenge)
admin.site.register(Certification)
admin.site.register(LogPoint)
admin.site.register(CommonCode)
admin.site.register(ChallengeRegistration)
admin.site.register(Heart)
admin.site.register(Comment)

