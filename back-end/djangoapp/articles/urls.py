# from django.contrib import admin
from django.urls import path
from . import views
# from django.conf.urls import url

app_name = "articles"

urlpatterns = [
    # path('admin/', admin.site.urls),
    path(r'', views.articles, name="list"),
    path(r'<str:make>/', views.vehicle_detail, name="detail"),
]
