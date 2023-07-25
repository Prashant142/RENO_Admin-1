from App import app, db, bcrypt, login_manager
from flask import request, jsonify
from flask_login import UserMixin, login_user, logout_user, current_user, login_required
from bson import ObjectId
import smtplib
from random import randint
from werkzeug.utils import secure_filename
import os
import json
import time


# ================================================= Auth ================================================

UPLOAD_FOLDER = '/var/www/html/Renoadmin'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/addcategoryList", methods=["POST"])
def addcategoryList():
    try:
        categoty_db = db["categoryList"]
        category_id = int(round(time.time() * 1000))
        category_id = str(category_id)

        if request.method == 'POST':
            if 'pic_url' not in request.files:
                    return 'No file part'
            pic_url = request.files['pic_url']
            if pic_url.filename == '':
                return 'No selected file'
            if pic_url and allowed_file(pic_url.filename):
                ofn = pic_url.filename
                a = ofn.split('.')
                ext = a[-1]
                fn = str(category_id)+"."+ext
                filename = secure_filename(fn)
                UPLOAD_FOLDER_NAME = UPLOAD_FOLDER+"/categoryList"
                pic_url.save(os.path.join(UPLOAD_FOLDER_NAME, filename))

        if categoty_db.find_one({"category_name": request.form['category_name']}):
            return f"Categoty already exists for {request.form['category_name']}"
        
        data = {
            "category_name": request.form['category_name'],
            "pic_url": "http://139.59.236.50/Renoadmin/categoryList/"+filename,
            "category_id":str(category_id)
        }

        categoty_db.insert_one(data)
        return json.dumps({'success':True}), 200, {'ContentType':'application/json'}
    except Exception as e:
         return json.dumps({'success':False, "msg":"Something Went Wrong.", "reason":str(e)}), 402, {'ContentType':'application/json'}
    

@app.route("/getAllCategoryList", methods=["GET"])
def getAllCategoryList():
    try:
        categoryList = db["categoryList"]
        ans = []
        for category in categoryList.find({}):
            ans.append({
                "category_name":  category['category_name'],
                "pic_url":  category['pic_url'],
                "category_id": category['category_id']
            }) 
        return json.dumps(ans)
    except:
        return json.dumps({'success':False, "msg":"Something Went Wrong."}), 402, {'ContentType':'application/json'}
    

@app.route("/editCategoryList", methods=["PUT"])
def editCategoryList():
    categoryList = db["categoryList"]

    category_id = request.form['category_id']

    if categoryList.find_one({"category_id": category_id}) is None:
        return f"Category with category_id {category_id} does not exists in the database"
    
    category_info_obj = categoryList.find_one({"category_id": category_id})

    if request.method == 'POST' or request.method == 'PUT':
        if 'pic_url' not in request.files:
            pic_url_str = category_info_obj["pic_url"]
        else:
            pic_url = request.files['pic_url']
            if pic_url.filename == '':
                return 'No selected file'
            if pic_url and allowed_file(pic_url.filename):
                ofn = pic_url.filename
                a = ofn.split('.')
                ext = a[-1]
                fn = str(category_id)+"."+ext
                filename = secure_filename(fn)
                UPLOAD_FOLDER_NAME = UPLOAD_FOLDER+"/categoryList"
                pic_url.save(os.path.join(UPLOAD_FOLDER_NAME, filename))
                pic_url_str = "http://139.59.236.50/Renoadmin/categoryList/"+filename

        if 'category_name' not in request.form:
            category_name = category_info_obj["category_name"]
        else:
            category_name = request.form['category_name']
    data = {
        "pic_url" : pic_url_str,
        "category_name" : category_name
    }
    new_values = {"$set": data}
    categoryList.update_one({"category_id": category_id}, new_values)
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}