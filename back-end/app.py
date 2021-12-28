from dataclasses import dataclass
from enum import unique
from flask import Flask, request, Response, jsonify
from flask_sqlalchemy import SQLAlchemy
import uuid
import json

# TODO: we should organize a lot of this into different modules
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost:3306/ecommerce'

db = SQLAlchemy(app)

@dataclass
class UserEntity(db.Model):

  __tablename__ = 'user'

  uuid = db.Column(db.String, primary_key = True)
  email = db.Column(db.String(200), unique = True)
  password = db.Column(db.String(500), nullable=False)
  first_name = db.Column(db.String(200), default = None)
  last_name = db.Column(db.String(200), default = None)
  enabled = db.Column(db.Boolean, default = True)

  def __repr__(self) -> str:
      return '<Task %r>' % self.uuid

@app.route("/")
def index():
  return "hello ecommerce site!"

@app.route('/user', methods = ['POST', 'GET'])
def user():
  if request.method == 'POST':
    id = str(uuid.uuid4())
    new_user = UserEntity(
      uuid = id,
      email = 'rob@rob2.com',
      password = 'secret',
      first_name = 'first',
      last_name = 'last',
      enabled = True
    )
    try:
      db.session.add(new_user)
      db.session.commit()
      return 'great success'
    except:
      return 'oh no'
  else: 
    users = UserEntity.query.all()
    return jsonify(users)

if __name__ == "__main__":
  app.run(debug=True)