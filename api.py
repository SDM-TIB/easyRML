# -*- coding: utf-8 -*-
import sys
from flask import Flask, abort, request, make_response
import json
app = Flask(__name__)
import MappingGenerator

@app.route('/generate', methods=['POST'])
def generate():
    input_data = request.data
    input_data = input_data.decode("utf-8") 
    if input_data == "":
        r = "{results: 'Error'}"
    else:
        response = MappingGenerator.process_config(input_data)
        r = json.dumps(response, indent=4)            
    response = make_response(r, 200)
    #response.mimetype = "application/json"
    return response


def main(*args):
    if len(args) == 1:
        myhost = args[0]
    else:
        myhost = "0.0.0.0"
    app.run(debug=False, host=myhost)
    
if __name__ == '__main__':
     main(*sys.argv[1:])

