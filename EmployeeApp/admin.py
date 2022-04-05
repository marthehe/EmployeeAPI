from django.contrib import admin
from .models import Departments
from .models import Employees
# Register your models here.

admin.site.register(Departments)  # registers model with admin panel

admin.site.register(Employees)  # registers model with admin panel
