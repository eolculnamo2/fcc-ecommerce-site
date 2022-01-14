from django.shortcuts import render, redirect
from .models import Vehicle
from django.http import HttpResponse

# Create your views here.
def articles(request):
	vehicles = Vehicle.objects.all().order_by("year")
	return render(request, "articles/articles.html", {'vehicles': vehicles})


def vehicle_detail(request, make):
	# return HttpResponse(make)
	vehicle = Vehicle.objects.get(make=make)
	return render(request, 'articles/vehicle_detail.html', {'vehicle':vehicle})