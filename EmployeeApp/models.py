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

from django.db import models

# Create your models here
# ***** Art of Engineer (2021) [1] - START


class Departments(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=500)


class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=500)
    Department = models.CharField(max_length=500)
    DateOfJoining = models.DateField()
# ***** Art of Engineer (2021) [1] - END
