from posixpath import basename
from django.urls import path, include
from .views import DepartmentViewSet, EmployeeViewSet, UserViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('department', DepartmentViewSet, basename='department')
router.register('employee', EmployeeViewSet, basename='employee')
router.register('user', UserViewSet, basename='user')

urlpatterns = [

    path('api/', include(router.urls)),

]
