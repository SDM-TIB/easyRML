'''
@auther: samiscoding@github
'''
from configparser import ConfigParser, ExtendedInterpolation
import pandas as pd
import sys
import os
import SPARQLWrapper

#################################################################################

def readConfig(config):

    ##read prefix
    prefixList = ["@PREFIX rr: <http://www.w3.org/ns/r2rml#> .","@PREFIX rml: <http://semweb.mmlab.be/ns/rml#> .",
    "@PREFIX ql: <http://semweb.mmlab.be/ns/ql#> .","@PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> .",
    "@PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .","@PREFIX rev: <http://purl.org/stuff/rev#> .",
    "@PREFIX schema: <http://schema.org/> .","@PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> ."]
    
    prefixDict = {"rr":"http://www.w3.org/ns/r2rml#", "rml":"http://semweb.mmlab.be/ns/rml#",
    "ql":"http://semweb.mmlab.be/ns/ql#","rdfs":"http://www.w3.org/2000/01/rdf-schema#",
    "rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#", "rev":"http://purl.org/stuff/rev#",
    "schema":"http://schema.org/", "xsd":"http://www.w3.org/2001/XMLSchema#"}
    
    p = config['main']['number_of_prefixes']
    for z in range(1,(int(p)+1)):
        pre = "pre" + str(z)
        prefix = "prefix"+ str(z)
        prefixDict[str(config['prefixes'][pre])] = str(config['prefixes'][prefix])
        finalString = "@PREFIX "+ config['prefixes'][pre] + ": <" + config['prefixes'][prefix] + "> ."
        prefixList.append(finalString)

    #read TMs
    TM = ""
    for t in range (1,int(config['main']['number_of_TMs'])+1):

    ##read source and subject
        TM = TM + "\n<TM"+ str(t) + ">\n\trml:logicalSource [ rml:source \"" + config['TM'+str(t)]['source'] + "\";\n\t\t\t\t\t\t" + \
        "rml:sourceFormat ql:" + config['TM'+str(t)]['sourceFormat'] + " ];\n\trr:subjectMap "
        if config['TM'+str(t)]['subjectType'] == "class":
            TM = TM + "[\n\t\t" + "rr:template" + " \"" + config['TM'+str(t)]['subjectMap'] + "/{" + config['TM'+str(t)]['dataField'] + "}\""
            if config['TM'+str(t)]['termType'] != "no":
                TM = TM + ";\n\t\trr:termType " + config['TM'+str(t)]['termType'] + ";\n\t]"
            else:
                TM = TM + "\n\t]"
        elif config['TM'+str(t)]['subjectType'] == "reference to functionMap":
            TM = TM + " <" + config['TM'+str(t)]['subjectMap'] + ">" 
            if config['TM'+str(t)]['termType'] != "no":
                TM = TM + ";\n\t\trr:termType " + config['TM'+str(t)]['termType'] + ";\n\t]"
            else:
                TM = TM + "\n\t" 

    ##read predicate objects
        for i in range(1,int(config['TM'+str(t)]['number_of_POM'])+1):
            prefix_value = ""
            prefix_abrv = ""
            for value in prefixDict.values():
                if value in str(config[str("TM"+str(t)+"_POM"+str(i))]['predicate']):
                    prefix_value = value
                for k, v in prefixDict.items():
                    if prefix_value == v:
                        prefix_abrv = k   
                predicate_value = str(config[str("TM"+str(t)+"_POM"+str(i))]['predicate']).replace(prefix_value,"")
            TM = TM + ";\n\trr:predicateObjectMap [\n\t\trr:predicate " + prefix_abrv + ":" + predicate_value
            TM = TM + ";\n\t\t" + "rr:objectMap "
            objectType = config[str("TM"+str(t)+"_POM"+str(i))]['objectType']
            if  objectType == "class":
                TM = TM + "[\n\t\t\trr:template"
                TM = TM + " " + "\"" + config[str("TM"+str(t)+"_POM"+str(i))]['objectMap'] +"\"\n\t\t\t]\n\t]"
            elif objectType == "reference to data":
                TM = TM + "[\n\t\t\trml:reference"
                TM = TM + " " + "\"" + config[str("TM"+str(t)+"_POM"+str(i))]['objectMap'] +"\"\n\t\t\t]\n\t]"
            elif objectType == "reference to functionMap":
                TM = TM + " <" + config[str("TM"+str(t)+"_POM"+str(i))]['objectMap'] + ">;\n\t]"   
            elif objectType == "reference to triplesMap" : 
                TM = TM + "[\n\t\t\trr:parentTriplesMap"
                TM = TM + " <" + config[str("TM"+str(t)+"_POM"+str(i))]['objectMap'] +">;"
                ## check joinCondition
                if config[str("TM"+str(t)+"_POM"+str(i))]['joinCondition'] == "yes":
                    TM = TM + "\n\t\t\trr:joinCondition [\n\t\t\t\trr:child \"" \
                    + config[str("TM"+str(t)+"_POM"+str(i))]['child'] + "\";\n\t\t\t\trr:parent \"" + config[str("TM"+str(t)+\
                    "_POM"+str(i))]['parent'] + "\";\n\t\t\t];\n\t\t]\n\t]"  
                else: 
                    TM = TM + "\n\t\t]\n\t]"                
            else:
                print ("object type is not correct!!")   
        TM = TM + ".\n"        
    ##read functionMap    
    for f in range (1,int(config['main']['number_of_FMs'])+1):
        FM = "\n<" + config[str("F"+str(f))]['functionMapName'] + \
        ">\n\tfnml:functionValue [\n\t\trml:logicalSource [ rml:source \"" + \
        config[str("F"+str(f))]['source'] + "\";\n\t\trml:referenceFormulation ql:" + config[str("F"+str(f))]['sourceFormat'] + \
        "\n\t\t];\n\t\trr:predicateObjectMap [\n\t\t\trr:predicate fno:executes ;\n\t\t\trr:objectMap [\n\t\t\t\trr:constant ex:" + \
        config[str("F"+str(f))]['functionName'] + "\n\t\t\t]\n\t\t];"
        for z in range(1,int(config[str("F"+str(f))]['numberOfParameters'])+1):
            FM = FM + "\n\t\trr:predicateObjectMap [\n\t\t\trr:predicate ex:" + \
            config[str("F"+str(f)+"P"+str(z))]['parameter'] + ";\n\t\t\t"
            if config[str("F"+str(f)+"P"+str(z))]['parameterType'] == "reference to functionMap":
                FM = FM + "rr:objectMap <" + config[str("F"+str(f)+"P"+str(z))]['value'] + ">\n\t\t];"             
            elif config[str("F"+str(f)+"P"+str(z))]['parameterType'] == "reference to data":
                FM = FM + "rr:objectMap [\n\t\t\t\trml:reference \"" + config[str("F"+str(f)+"P"+str(z))]['value'] + "\"\n\t\t\t]\n\t\t];"
            elif config[str("F"+str(f)+"P"+str(z))]['parameterType'] == "constant":
                FM = FM + "rr:objectMap [\n\t\t\t\trr:constant \"" + config[str("F"+str(f)+"P"+str(z))]['value'] + "\"\n\t\t\t]\n\t\t];"
        FM = FM + "\n\t].\n"        
        TM = TM + FM                
    return prefixList,TM


def handler():
    user_input = input("Enter the path of your file: ")
    config = ConfigParser(interpolation=ExtendedInterpolation())
    config.read(user_input)
    #print (config['main']['number_of_prefixes'])
    #p = config['main']['number_of_prefixes']
    prefixList,TM = readConfig(config)
    mappingFileName = str(config['main']['output_folder']) + "/" + str(config['main']['mapping_file_name']) + ".ttl"
    mappingFile = open(mappingFileName, "w")
    for p in prefixList:
        mappingFile.write(p+"\n")
    mappingFile.write(TM)
    mappingFile.close()

if __name__ == "__main__":
        handler()
