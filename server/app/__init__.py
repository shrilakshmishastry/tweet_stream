from flask import Flask,render_template,request
app=Flask(__name__,static_folder='/home/shri/tweeter_project/client/dist',template_folder='/home/shri/tweeter_project/client')
@app.route('/')
def data():
    return render_template('home.html')
@app.route('/search',methods=['GET','POST'])
def search():
    if request.method=='POST':
        print(request.is_json)
        print(request.get_json())
        return('hello world')
    return('hello world')
