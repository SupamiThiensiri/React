"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.overview, name='API-Overview'),
    path('user/', views.userList, name='user-list'),
    path('categories/', views.categoryList, name='category-list'),
    path('categories/<int:pk>/', views.categoryDetail, name='category-detail'),
    path('product/', views.productList, name='product-list'),
    path('transaction/', views.productList, name='transaction-list'),

  
]