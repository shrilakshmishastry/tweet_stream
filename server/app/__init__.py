from flask import Flask,render_template
app=Flask(__name__,static_folder='/home/shri/tweeter_project/client/dist',template_folder='/home/shri/tweeter_project/client')
@app.route('/')
def data():
    return render_template('home.html')
