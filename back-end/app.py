from flask import Flask
from flask_sqlalchemy import SQLAlchemy 
from models import db, CarModel


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://<username>:<password>@<server>:5432/<ecommerce_site>"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False



@app.route("/")
def index():
  return "hello ecommerce site!"

if __name__ == "__main__":
  app.run(debug=True)

 @app.route("/cars")
 def search():
 		return "This is a test"