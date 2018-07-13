from flask import request
from app import app
from .import home
import tweepy
import os
import json
app.config.from_object('config')
from config import consumer_key
from config import consumer_secret
from config import access_token,access_token_secret
app.config.update({"consumer_key":consumer_key})
app.config.update({"consumer_secret":consumer_secret})
app.config.update({"access_token":access_token})
app.config.update({"access_token_secret":access_token_secret})
auth=tweepy.OAuthHandler(app.config['consumer_key'],app.config['consumer_secret'])
auth.set_access_token(app.config['access_token'],app.config['access_token_secret'])
api = tweepy.API(auth)
user=api.get_user('@ShrihariShastry')
print("Name:",user.name)
print("Location:",user.location)
print("Following:",user.friends_count)
print("Followers:",user.id)
id=user.screen_name
for friend in user.friends():
   print(friend.screen_name)
data = api.statuses_lookup(id)
name ={}
for i in api.user_timeline(id):

    name.update({'tweet':i.text})
    name.update({'created_at':i.created_at})
    print(i.text)
    print(i.created_at)

print("hello world")
print(name)



@home.route('/search',methods=['GET','POST'])
def search():

    if request.method=='POST':
        print(request.is_json)
        print(request.get_json())
        return
    return('hello world')
