'''
@auther: samiscoding@github
'''
from flask import Flask, flash, render_template, request, Response, send_file, send_from_directory, redirect, url_for
from flask.json import jsonify
import json
#import MappingGenerator
#import suggestClasses
#import suggestProperties
import suggestPrefixes
from configparser import ConfigParser, ExtendedInterpolation
from werkzeug.utils import secure_filename

############################################################################

UPLOAD_FOLDER = './'
ontology_allowed_extensions = {'ttl'}
dataSource_allowed_extensions = {'csv','json'}
app = Flask(__name__, template_folder="../templates", static_folder="../static")
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
responseConfig = {}


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

'''
#### checking if the format of the ontology file uploaded by the user is correct ####
def ontology_allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ontology_allowed_extensions

### checking if the format of the data source file uploaded by the user is correct ###
def dataSource_allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in dataSource_allowed_extensions
'''
######## provide prefixes for suggestion to the user #########
@app.route('/suggestPrefix', methods=['GET'])
def api_suggestPrefix():
    prefix_list = suggestPrefixes.readURLs("../sources/defaultPrefixes.csv")     
    data = json.dumps(prefix_list)
    return flask.make_response(data,300)
    #return Response(prefix_json, mimetype="application/json")
    #return render_template('../templates/index.html', data=data)
'''
######## uploading the ontology file #########
@app.route('/readOntology', methods=['POST'])
def api_readOntology():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '' and ontology_allowed_file(uploaded_file.filename):
        filename = secure_filename(uploaded_file.filename)         
        uploaded_file.save('../output/' + filename)
    global ontologyFileAddress
    ontologyFileAddress = "../output/" + filename
    return ''   


######## suggest classes based on the uploaded ontology file #########
@app.route('/suggestClass', methods=['GET'])
def api_suggestClass():
    class_list = suggestClasses.readOntologyTurtle(ontologyFileAddress)
    #print (class_list)        
    class_json = json.dumps(class_list)
    return Response(class_json, mimetype="application/json")


######## suggest classes based on the uploaded ontology file #########
@app.route('/suggestProperties', methods=['GET'])
def api_suggestProperties():
    property_list = suggestProperties.readOntologyTurtle(ontologyFileAddress)
    #print (property_list)        
    property_json = json.dumps(property_list)
    return Response(property_json, mimetype="application/json")


################ uploading the data source file ##################
@app.route('/readDataSource', methods=['POST'])
def api_readDataSource():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '' and dataSource_allowed_file(uploaded_file.filename):
        filename = secure_filename(uploaded_file.filename)         
        uploaded_file.save('./output/' + filename) 
    global dataFileAddress
    dataFileAddress = "./output/" + filename
    return '' 


######## suggest data fields based on the uploaded data source file #########
@app.route('/suggestDataField', methods=['GET'])
def api_suggestDataField():
    dataFields_json = suggestDataField.readDataSource(dataFileAddress)       
    return Response(dataFields_json, mimetype="application/json")


######## generate turtle mapping file ############
'''
  

if __name__ == "__main__":
    app.run(port=5525, host="0.0.0.0")

