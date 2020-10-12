from flask import Flask, render_template, request, Response, send_file, render_template, send_from_directory
from flask.json import jsonify
import json
import MappingGenerator
from configparser import ConfigParser, ExtendedInterpolation

app = Flask(__name__)
responseConfig = {}

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

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
#######################################################

if __name__ == "__main__":
    app.run(port=5161, host="0.0.0.0")