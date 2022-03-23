from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from EmployeeApp import serializers
from EmployeeApp.models import Departments, Employees
from EmployeeApp.serializers import DepartmentSerializer, EmployeeSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

# Create your views here.


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Departments.objects.all()
    serializer_class = DepartmentSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication,)


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employees.objects.all()
    serializer_class = EmployeeSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication,)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# API methods for Department Table


# @csrf_exempt
# def departmentApi(request, id=0):
#     if request.method == 'GET':
#         departments = Departments.objects.all()
#         departments_serializer = DepartmentSerializer(departments, many=True)
#         return JsonResponse(departments_serializer.data, safe=False)
#     elif request.method == 'POST':
#         department_data = JSONParser().parse(request)
#         departments_serializer = DepartmentSerializer(data=department_data)
#         if departments_serializer.is_valid():
#             departments_serializer.save()
#             return JsonResponse("Added Successfully!", safe=False)
#         return JsonResponse("Failed to Add!", safe=False)
#     elif request.method == 'PUT':
#         department_data = JSONParser().parse(request)
#         department = Departments.objects.get(
#             DepartmentId=department_data['DepartmentId'])
#         departments_serializer = DepartmentSerializer(
#             department, data=department_data)
#         if departments_serializer.is_valid():
#             departments_serializer.save()
#             return JsonResponse("Update Successfully!", safe=False)
#         return JsonResponse("Failed to Update!")
#     elif request.method == 'DELETE':
#         department = Departments.objects.get(DepartmentId=id)
#         department.delete()
#         return JsonResponse("Delated Successfully!", safe=False)

# # API methods for Employee Table


# @csrf_exempt
# def employeeApi(request, id=0):
#     if request.method == 'GET':
#         employees = Employees.objects.all()
#         employees_serializer = EmployeeSerializer(employees, many=True)
#         return JsonResponse(employees_serializer.data, safe=False)
#     elif request.method == 'POST':
#         employee_data = JSONParser().parse(request)
#         employees_serializer = EmployeeSerializer(data=employee_data)
#         if employees_serializer.is_valid():
#             employees_serializer.save()
#             return JsonResponse("Added Successfully!", safe=False)
#         return JsonResponse("Failed to Add!", safe=False)
#     elif request.method == 'PUT':
#         employee_data = JSONParser().parse(request)
#         employee = Employees.objects.get(
#             EmployeeId=employee_data['EmployeeId'])
#         employees_serializer = EmployeeSerializer(
#             employee, data=employee_data)
#         if employees_serializer.is_valid():
#             employees_serializer.save()
#             return JsonResponse("Update Successfully!", safe=False)
#         return JsonResponse("Failed to Update!")
#     elif request.method == 'DELETE':
#         employee = Employees.objects.get(EmployeeId=id)
#         employee.delete()
#         return JsonResponse("Delated Successfully!", safe=False)
