from rest_framework import serializers
from EmployeeApp.models import Departments, Employees
from django.contrib.auth.models import User


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentId', 'DepartmentName')


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId', 'EmployeeName', 'Department', 'DateOfJoining')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
