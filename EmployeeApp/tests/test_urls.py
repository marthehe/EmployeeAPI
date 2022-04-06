from django.test import TestCase
from django.urls import reverse, resolve
from EmployeeApp.views import DepartmentViewSet, EmployeeViewSet, UserViewSet
from rest_framework.test import APIRequestFactory, URLPatternsTestCase
from rest_framework.routers import DefaultRouter


class TestSimpleRouter(URLPatternsTestCase, TestCase):

    def setUp(self):
        self.router = DefaultRouter
