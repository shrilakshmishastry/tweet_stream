from flask import Blueprint
home = Blueprint('home',__name__,static_folder='/home/shri/tweet_stream/client/dist',template_folder='/home/shri/tweeter_project/client')
from .import views
