from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

from flask import Flask
from flask_cors import CORS, cross_origin
import copy

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET', 'POST'])
def welcome():
    import os
    import subprocess

    subprocess.Popen("python AITrainerProject.py" , shell=True)
    return ("AITrainerProject")

if __name__ == '__main__':
    app.run()
