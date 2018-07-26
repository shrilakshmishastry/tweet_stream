from flask import request,render_template
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
tweeted={}
retweets=[]

@home.route('/search',methods=['GET','POST'])
def search():

    if request.method=='POST':
        print(request.is_json)
        print(request.get_json())
        user=request.get_json()
        n=user.get('keyword')
        print(n)
        results = api.search(q=n, lang="en",count=10)
        for tweet in results:
            print tweet.user.screen_name,"Tweeted:",tweet.text
            screen_name=tweet.user.screen_name
            tweeted[tweet.text]=str(tweet.created_at)
            retweets.append(tweet.retweet_count)
            print(tweet.source_url)
        print(dir(tweet))

        return json.dumps({'t':tweeted,'retweets':retweets})
    return('hello world')
