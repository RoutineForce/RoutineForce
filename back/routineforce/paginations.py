from rest_framework import pagination

class Pagination(pagination.LimitOffsetPagination):
# class UserPagination(pagination.PageNumberPagination):
    pagination.LimitOffsetPagination.limit_query_param = 'count'
    pagination.LimitOffsetPagination.offset_query_param = 'start'
