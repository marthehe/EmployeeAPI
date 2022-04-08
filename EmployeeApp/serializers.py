"""
Course: Digital and Technology Solutions
Module: Software Engineering & Agile
Project Name: Development & Employee Information Management System
Author: Marta Hendel
Version: 1
Date: 08.04.22

References used within this application:
Art Of Engineer (12 July 2021) React JS + Python Django + SQLite. Available at:
https://github.com/ArtOfEngineer/ReactJs-Django-SQLite (Accessed at: 2 February 2022) [1]
"""


from rest_framework import serializers
from EmployeeApp.models import Departments, Employees
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

# ***** Art of Engineer (2021) [1] - START


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentId', 'DepartmentName')


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId', 'EmployeeName', 'Department', 'DateOfJoining')
# ***** Art of Engineer (2021) [1] - END


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
