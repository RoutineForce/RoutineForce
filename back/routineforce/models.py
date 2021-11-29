# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Certification(models.Model):
    routine_id = models.IntegerField()
    user_id = models.IntegerField()
    date_and_time = models.DateTimeField(blank=True, null=True)
    image_path = models.CharField(max_length=4096, blank=True, null=True)
    result = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'certification'


class Routine(models.Model):
    title = models.CharField(max_length=128)
    status = models.CharField(max_length=10)
    type = models.CharField(max_length=10)
    day_run = models.TextField()
    dues = models.IntegerField(blank=True, null=True)
    penalty = models.IntegerField(blank=True, null=True)
    headcount_min = models.IntegerField()
    headcount_max = models.IntegerField()
    location = models.CharField(max_length=128)
    certification_type = models.CharField(max_length=10)
    intro = models.CharField(max_length=128)
    body = models.CharField(max_length=4096)
    body_type = models.CharField(max_length=10)
    image_path = models.CharField(max_length=4096, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'routine'


class RoutineRegistration(models.Model):
    user = models.OneToOneField('User', models.DO_NOTHING, primary_key=True)
    user_login = models.ForeignKey('User', models.DO_NOTHING, db_column='user_login', related_name='registration')
    routine = models.ForeignKey(Routine, models.DO_NOTHING)
    status = models.CharField(max_length=10)
    result = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'routine_registration'
        unique_together = (('user', 'user_login', 'routine'),)


class Comment(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    user_login = models.ForeignKey('User', models.DO_NOTHING, db_column='user_login', related_name='usercomment')
    body = models.CharField(max_length=4096, blank=True, null=True)
    target = models.IntegerField()
    date_and_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'comment'


class CommonCode(models.Model):
    value = models.CharField(primary_key=True, max_length=10)
    type = models.CharField(max_length=10)
    name = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'common_code'
        unique_together = (('value', 'type'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Heart(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    user_login = models.ForeignKey('User', models.DO_NOTHING, db_column='user_login', related_name='userheart')
    routine = models.ForeignKey(Routine, models.DO_NOTHING)
    date_and_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'heart'


class LogPoint(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    user_login = models.ForeignKey('User', models.DO_NOTHING, db_column='user_login', related_name='point')
    routine = models.ForeignKey(Routine, models.DO_NOTHING)
    change_in_point = models.IntegerField()
    change_reason = models.CharField(max_length=10)
    date_and_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'log_point'


class User(models.Model):
    id = models.IntegerField(primary_key=True)
    login = models.CharField(max_length=10)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=320, blank=True, null=True)
    image_path = models.CharField(max_length=4096, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'
        unique_together = (('id', 'login'),)
