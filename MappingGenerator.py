'''
@auther: samiscoding@github
'''
from configparser import ConfigParser, ExtendedInterpolation
import rdflib as rdf
import pandas as pd

#################################################################################

def readConfig(config):

    ##read prefix
    list_of_prefixes = readPrefix(config)
    TM = ""

    #read TMs
    for t in range (1,int(config['triplesMaps']['number_of_TMs'])+1):

    ##read source and subject
        TM = TM + "\n<TM"+ str(t) + ">\n\trml:logicalSource [ rml:source \"" + config['TM'+str(t)]['source'] + "\";\n\t\t\t\t\t\t" + \
        "rml:referenceFormulation ql:" + config['TM'+str(t)]['referenceFormulation'] + " ];\n\trr:subjectMap [\n\t\t" + config['TM'+str(t)]['subjectType'] + \
        " \"" + config['TM'+str(t)]['subjectMap'] + "\"\n\t]" 

    ##read predicate objects
        for i in range(1,int(config['TM'+str(t)]['number_of_POM'])+1):
            TM = TM + ";\n\trr:predicateObjectMap [\n\t\trr:predicate " + config[str("TM"+str(t)+"_POM"+str(i))]['predicate']
            TM = TM + ";\n\t\t" + "rr:objectMap [\n\t\t\t" + config[str("TM"+str(t)+"_POM"+str(i))]['objectType']
            ##check if "" or <> needs to be added around the object
            if config[str("TM"+str(t)+"_POM"+str(i))]['objectType'] == "rr:parentTriplesMap":
                ##join condition checking
                if config[str("TM"+str(t)+"_POM"+str(i))]['joinCondition'] == "yes":
                    TM = TM + " <" + config[str("TM"+str(t)+"_POM"+str(i))]['object'] +">;\n\t\t\trr:joinCondition [\n\t\t\t\trr:child \"" \
                    + config[str("TM"+str(t)+"_POM"+str(i))]['child'] + "\";\n\t\t\t\trr:parent \"" + config[str("TM"+str(t)+"_POM"+str(i))]['child'] \
                    + "\";\n\t\t\t];\n\t\t]\n\t]"
                else:
                    TM = TM + " <" + config[str("TM"+str(t)+"_POM"+str(i))]['object'] +">\n\t\t\t]\n\t]" 
            else:
                TM = TM + " " + "\"" + config[str("TM"+str(t)+"_POM"+str(i))]['object'] +"\"\n\t\t\t]\n\t]"
        TM = TM + ".\n"           
    return list_of_prefixes, TM

def readPrefix(config):
    prefix = open(config['triplesMaps']['prefixes_file'], "r")
    list_of_prefixes = prefix.readlines()
    return list_of_prefixes

def handler():
    config_path = "./mappingInput.ini"
    config = ConfigParser(interpolation=ExtendedInterpolation())
    config.read(config_path)
    prefix_df = pd.read_csv(str(config['triplesMaps']['prefixes_file']), low_memory=False)
    outputPath = config['default']['output_folder']
    for i in range(1,int(config['default']['number_of_mappingFiles'])+1):
        list_of_prefixes, TM = readConfig(config)
        mappingFileName = str(outputPath) + str(config['mappingFile'+str(i)]['name']) + ".ttl"
        mappingFile = open(mappingFileName, "w")
        for p in list_of_prefixes:
            mappingFile.write(p)
        mappingFile.write("\n"+TM)
        mappingFile.close()


if __name__ == "__main__":
        handler()
