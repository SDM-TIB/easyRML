'''
@auther: samiscoding@github
'''
from flask import Flask, flash, render_template, request, Response, send_file, send_from_directory, redirect, url_for
from flask.json import jsonify
import json
import MappingGenerator
import dataExtractor
from werkzeug.utils import secure_filename

############################################################################

UPLOAD_FOLDER = './'
ontology_allowed_extensions = {'ttl'}
dataSource_allowed_extensions = {'csv'}
userInput_allowed_extensions = {'json'}
#####$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
#####$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
new_allowed_extensions = {'csv','json'}
#####$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
#####$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
app = Flask(__name__, template_folder="../templates", static_folder="../static")
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
responseConfig = {}

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

################### redirecting to "RML Guidline" tab #####################
@app.route('/guideline_url', methods=['GET'])
def guideline_url():
    return render_template('rmlguideline.html')

################### redirecting to "About us" tab #####################
@app.route('/aboutUs_url', methods=['GET'])
def aboutUs_url():
    return render_template('contact.html')

#### checking if the format of the ontology file uploaded by the user is correct ####
def ontology_allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ontology_allowed_extensions

### checking if the format of the data source file uploaded by the user is correct ###
def dataSource_allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in dataSource_allowed_extensions

### checking if the format of the user input file sent from UI is correct ###
def userInput_allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in userInput_allowed_extensions

#####$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
#####$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
def new_allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in new_allowed_extensions
######$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
######$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
@app.route('/readNewFile', methods=['POST'])
def readNewFile():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '' and new_allowed_file(uploaded_file.filename):
        filename = secure_filename(uploaded_file.filename)         
        uploaded_file.save('../sources/' + filename)
  
    global newFileAddress
    newFileAddress = "../sources/" + filename
    return ''   
#####$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
#####$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
@app.route('/receiveNewFile', methods=['GET'])
def receiveNewFile():
    newFields_json = dataExtractor.extractNewFields(newFileAddress)       
    return Response(newFields_json, mimetype="application/json")  
######$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
######$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$              

############ extract and provide prefixes to the user #########
@app.route('/receivePrefix', methods=['GET'])
def receivePrefix():
    # directory = Path(os.path.abspath(os.path.join(os.getcwd(), os.path.dirname(__file__)))).parent.absolute()
    prefix_list = dataExtractor.readURLs("../sources/defaultPrefixes.csv") 
    prefix_json = json.dumps(prefix_list)
    return Response(prefix_json, mimetype="application/json")

######## uploading the ontology file #########
@app.route('/readOntology', methods=['POST'])
def readOntology():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '' and ontology_allowed_file(uploaded_file.filename):
        filename = secure_filename(uploaded_file.filename)         
        uploaded_file.save('../sources/' + filename)
#        flash('Successfully Uploaded!')
#    else:
#        error = 'Invalid File Format'   
    global ontologyFileAddress
    ontologyFileAddress = "../sources/" + filename
    return ''   

################ uploading the data source file ##################
@app.route('/readDataSource', methods=['POST'])
def readDataSource():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '' and dataSource_allowed_file(uploaded_file.filename):
        filename = secure_filename(uploaded_file.filename)         
        uploaded_file.save('../sources/' + filename)
#        flash('Successfully Uploaded!')
#    else:
#        error = 'Invalid File Format'
    global dataFileAddress
    dataFileAddress = "../sources/" + filename
    #MappingGenerator.receiveSource(dataFileAddress)
    return ""

######## extract and provide classes based on the uploaded ontology file #########
@app.route('/receiveClasses', methods=['GET'])
def receiveClasses():
    class_list = dataExtractor.readClassesFromOntologyTurtle(ontologyFileAddress)       
    class_json = json.dumps(class_list)
    return Response(class_json, mimetype="application/json")

######## extract and provide classes based on the uploaded ontology file #########
@app.route('/receiveProperties', methods=['GET'])
def receiveProperties():
    property_list = dataExtractor.readPropertiesFromOntologyTurtle(ontologyFileAddress)       
    property_json = json.dumps(property_list)
    return Response(property_json, mimetype="application/json")

######## extract and provide data fields based on the uploaded data source file #########
@app.route('/receiveDataFields', methods=['GET'])
def receiveDataFields():
    dataFields_json = dataExtractor.extractFields(dataFileAddress)       
    return Response(dataFields_json, mimetype="application/json")

################ Upload TriplesMaps Names ##################
@app.route('/readTriplesNames', methods=['POST'])
def readTriplesNames():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '' and userInput_allowed_file(uploaded_file.filename):
        filename = secure_filename(uploaded_file.filename)         
        uploaded_file.save('../sources/TriplesMapsNames.json') 
    return ''

################ extract and provide TriplesMaps Names ##################
@app.route('/receiveTriplesNames', methods=['GET'])
def receiveTriplesNames():
    property_list = dataExtractor.extractTriplesMapsNames("../sources/TriplesMapsNames.json")       
    property_json = json.dumps(property_list)       
    return Response(TriplesNames_json, mimetype="application/json")

################ extract and provide FunctionMaps Names ##################
@app.route('/receiveFunctionMapNames', methods=['GET'])
def receiveFunctionMapNames():
    property_list = dataExtractor.extractFunctionMapsNames("../sources/TriplesMapsNames.json")       
    property_json = json.dumps(property_list)       
    return Response(TriplesNames_json, mimetype="application/json")

################ receive user's input (preliminary) and store in a file ##################
@app.route('/readUserInput_preliminary', methods=['POST'])
def readUserInput_preliminary():
    if request.is_json:
        userInputData = request.get_json() 
        MappingGenerator.generator_preliminary(userInputData)
    else:
        print ("NOT JSON")
    return ''

################ receive user's input (triplesMap) and store in a file ##################
@app.route('/readUserInput_triplesMap', methods=['POST'])
def readUserInput_triplesMap():
    if request.is_json:
        userInputData = request.get_json() 
        MappingGenerator.generator_tripleMap(userInputData)
    else:
        print ("NOT JSON")
    return ''
'''
################ store the user input / generate the mapping file ##################
@app.route('/generateMapping', methods=['POST','GET'])
def generateMapping():
    if request.method == "POST":
        uploaded_file = request.files['file']
        if uploaded_file.filename != '' and userInput_allowed_file(uploaded_file.filename):
            filename = secure_filename(uploaded_file.filename)         
            uploaded_file.save('../sources/' + filename) 
        global userInputAddress
        userInputAddress = "../sources/" + filename
        return ''
    elif request.method == "GET":
        mappingFile = MappingGenerator.generator() 
        return Response(mappingFile, mimetype="application/json")
'''
############################################

if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0")

