from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
  return "hello ecommerce site!"

if __name__ == "__main__":
  app.run(debug=True)

 @app.route("/cars")
 def search():
 		return "This is a test"