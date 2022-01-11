from django.db import models

# Create your models here.
class Vehicle(models.Model):
	year = models.PositiveSmallIntegerField()
	make = models.CharField(max_length=50)
	submodel = models.CharField(max_length=50)
	image = models.ImageField(default="default.png", blank=True)
	description = models.CharField(max_length=6000, blank=True)

	# year, make, etc. are columns in a table in the db
	# class Vehicle migrates to a table in the db
	# everytime we make a model:
	# do python3 manage.py makemigrations and manage.py migrate

	def __str__(self):
		return self.make

	def snippet(self):
		return self.description[:50] + '...'
