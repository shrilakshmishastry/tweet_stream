from flask import Flask,render_template,request,send_file,json
from flask import Blueprint



app=Flask(__name__,static_folder='/home/shri/tweeter_project/client/dist',template_folder='/home/shri/tweeter_project/client')

from .home_view import home
app.register_blueprint(home)
@app.route('/')
def data():
    return render_template('home.html')
