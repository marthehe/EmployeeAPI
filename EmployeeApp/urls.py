from django.urls import path, include
from pkg_resources import DefaultProvider
from EmployeeApp import views
from .views import DepartmentViewSet, EmployeeViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('department', DepartmentViewSet, basename='department')
router.register('employee', EmployeeViewSet, basename='employee')
router.register('user', UserViewSet)

urlpatterns = [

    path('', include(router.urls)),
    # url(r'^department$', views.DepartmentViewSet),
    # url(r'^department/([0-9]+)$', views.DepartmentViewSet),

    # url(r'^employee$', views.EmployeeViewSet),
    # url(r'^employee/([0-9]+)$', views.EmployeeViewSet)
]
