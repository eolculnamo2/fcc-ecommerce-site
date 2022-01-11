from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
	path(r'signup/', views.signup_view, name="signup")
]