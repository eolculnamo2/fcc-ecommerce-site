from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemy()

class CarModel(db.Model):
	__tablename__ = "car_table"

	id = db.Column(db.Integer, primary_key = True)
	Year = db.Column(db.Integer)
	Make = db.Column(db.String)
	Model = db.Column(db.String)

	def __init__(self, Year, Make, Model):
		self.Year = Year
		self.Make = Make
    self.Model = Model

  def __repr__(self):
  	return f"{self.Year}:{self.Make}:{self.Model}"