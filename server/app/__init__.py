from flask import Flask,render_template,request,send_file,json
from flask import Blueprint



app=Flask(__name__,static_url_path='/home/shri/tweet_stream/client/dist',static_folder='/home/shri/tweet_stream/client/dist',template_folder='/home/shri/tweet_stream/client')
app.config['STATIC_FOLDER']='/home/shri/tweet_stream/client/images'
from .home_view import home
app.register_blueprint(home)
@app.route('/')
def data():
    return render_template('home.html')
