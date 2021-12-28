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


class Comment(models.Model):
    user_id = models.ForeignKey('User', on_delete=models.CASCADE, db_column='user_id', related_name='user_id')
    target_code = models.ForeignKey('CommonCode', on_delete=models.SET_NULL, db_column='target_code', null=True)
    target_id = models.ForeignKey('User', on_delete=models.CASCADE, db_column='target_id', related_name='target_id')
    body = models.CharField(max_length=4096, blank=True, null=True)
    created_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'comment'


class CommonCode(models.Model):
    code_id = models.CharField(unique=True, max_length=10)
    common_id = models.CharField(max_length=10, blank=True, null=True)
    label = models.CharField(max_length=128)

    class Meta:
        managed = False
        db_table = 'common_code'


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
    user_id = models.ForeignKey('User', on_delete=models.CASCADE, db_column='user_id')
    routine_id = models.ForeignKey('Routine', on_delete=models.CASCADE, db_column='routine_id')
    pushed_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'heart'


class LogPoint(models.Model):
    user_id = models.ForeignKey('User', on_delete=models.CASCADE, db_column='user_id')
    change_code = models.ForeignKey(CommonCode, on_delete=models.SET_NULL, db_column='change_code', null=True)
    change_in_point = models.IntegerField()
    created_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'log_point'


class Point(models.Model):
    user_id = models.ForeignKey('User', on_delete=models.CASCADE, db_column='user_id')
    current_point = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'point'


class Routine(models.Model):
    title = models.CharField(max_length=128, db_collation='utf8mb4_general_ci')
    status = models.ForeignKey(CommonCode, on_delete=models.SET_NULL, db_column='status', related_name='status', null=True)
    type = models.ForeignKey(CommonCode, on_delete=models.SET_NULL, db_column='type', related_name='type', null=True)
    day_run = models.TextField()
    dues = models.IntegerField()
    penalty = models.IntegerField()
    headcount_min = models.IntegerField()
    headcount_max = models.IntegerField()
    location = models.CharField(max_length=128, db_collation='utf8mb4_general_ci')
    certification_type = models.ForeignKey(CommonCode, on_delete=models.SET_NULL, db_column='certification_type', related_name='certification_type', null=True)
    intro = models.CharField(max_length=4096, db_collation='utf8mb4_general_ci')
    body = models.CharField(max_length=4096, db_collation='utf8mb4_general_ci')
    body_type = models.ForeignKey(CommonCode, on_delete=models.SET_NULL, db_column='body_type', related_name='body_type', null=True)
    image_path = models.CharField(max_length=4096, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'routine'


class RoutineCertification(models.Model):
    routine_id = models.ForeignKey(Routine, on_delete=models.CASCADE, db_column='routine_id')
    user_id = models.ForeignKey('User', on_delete=models.CASCADE, db_column='user_id')
    uploaded_at = models.DateTimeField()
    image_path = models.CharField(max_length=4096)
    result = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'routine_certification'


class RoutineRegistration(models.Model):
    user_id = models.ForeignKey('User', on_delete=models.CASCADE, db_column='user_id')
    routine_id = models.ForeignKey(Routine, on_delete=models.CASCADE, db_column='routine_id')
    user_auth = models.ForeignKey(CommonCode, to_field='code_id', on_delete=models.SET_NULL, db_column='user_auth', null=True)
    result = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'routine_registration'
        unique_together = (('user_id', 'routine_id'),)


class User(models.Model):
    uid = models.CharField(max_length=128)
    provider = models.CharField(max_length=10)
    name = models.CharField(max_length=255, db_collation='utf8mb4_general_ci')
    #name = models.CharField(max_length=255)
    email = models.CharField(max_length=320, blank=True, null=True)
    image_path = models.CharField(max_length=4096, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'user'
        unique_together = (('uid', 'provider'),)


class Login(models.Model):
    code = models.CharField(max_length=128)
    provider = models.CharField(max_length=10)
