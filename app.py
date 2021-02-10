from flask import Flask, render_template, request, Response, send_file, send_from_directory, redirect, url_for
from flask.json import jsonify
import json
import MappingGenerator
import suggestClasses
from configparser import ConfigParser, ExtendedInterpolation
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './'
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
responseConfig = {}


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/api/readOnto', methods=['GET','POST'])

def api_readOnto():
#     if request.method == 'POST':
#         file = request.files['file']
#         filename = secure_filename(file.filename)
#         file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        #return redirect(url_for('uploaded_file', filename=filename))
        #class_list = suggestClasses.readOntoTurtle(file)
        #print (class_list)
        #class_json = json.dumps(class_list)

    #return Response(class_json,  mimetype="application/json")
    print("connect to readOnto")
#     return render_template('index.html')

@app.route('/api/verifying', methods=['POST'])
def api_verifying():

    print('request') 
    


@app.route('/api/mappings', methods=['POST'])
def api_mappings():
    try:
        user_input = request.get_data().decode("utf-8")
        config = ConfigParser(interpolation=ExtendedInterpolation())
        config.read_string(user_input)
        outputPath = config['main']['output_folder']
        prefixList,TM = MappingGenerator.readConfig(config)
        mappingFileName = str(outputPath) + str(config['main']['mapping_file_name']) + ".ttl"
        mappingFile = open(mappingFileName, "w")
        for p in prefixList:
            mappingFile.write(p+"\n")
        mappingFile.write(TM)
        mappingFile.close()
        print(mappingFileName)
        print(prefixList,TM)
     
    except KeyError:
        print('request args/form exception ... ', request.args, request.form)
        return Response(json.dumps({}),  mimetype="application/json")
    
    prefixes = ''
    for prefix in prefixList:
        prefixes += ''.join(prefix) + '\n'
    responseConfig['answer'] = prefixes + TM
   
    return Response(prefixes + TM, mimetype='text/plain')


    return Response(json.dumps({}),  mimetype="application/json")
    

if __name__ == "__main__":
    app.run(port=5522, host="0.0.0.0")
