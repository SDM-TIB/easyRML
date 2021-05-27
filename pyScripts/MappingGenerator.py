'''
@auther: samiscoding@github
'''
from configparser import ConfigParser, ExtendedInterpolation
import pandas as pd
import json
#import sys
#import os
import SPARQLWrapper

#################################################################################
global prefixDict
prefixDict = {"http://www.w3.org/ns/r2rml#":"rr", "http://semweb.mmlab.be/ns/rml#":"rml",
"http://www.w3.org/2000/01/rdf-schema#":"rdfs", "http://www.w3.org/1999/02/22-rdf-syntax-ns#":"rdf",
"http://semweb.mmlab.be/ns/ql#":"ql", "http://schema.org/":"schema", "http://www.w3.org/2001/XMLSchema#":"xsd",
"http://semweb.mmlab.be/ns/fnml#":"fnml", "https://w3id.org/function/ontology#":"fno"}

def fileManagement(file):

	## output configuration
	mappingFile = str(file["mapping"]["FileManagement"]["output"]["outputPath"]) + "/" +\
						str(file["mapping"]["FileManagement"]["output"]["outputName"]) + ".ttl"
	##read prefix
	prefixes = ""
	for entry in file["mapping"]["FileManagement"]["prefix"]["defaultPrefixes"]:
		prefix = str(prefixDict.get(str(entry["URL"]))) 
		prefixString = "@prefix "+ prefix + ": <" + str(entry["URL"]) + "> ."
		prefixes = prefixes + prefixString + "\n"
	for entry in file["mapping"]["FileManagement"]["prefix"]["newPrefixes"]:
		prefix = str(entry["prefix"])
		prefixString = "@prefix "+ prefix + ": <" + str(entry["URL"]) + "> ."
		prefixes = prefixes + prefixString + "\n"
	return (mappingFile,prefixes)


#def triplesMap(file):

def generator():
	with open ("../sources/mapping_example.json") as file:
		userInput = json.load(file)
		mappingFile,prefixes = fileManagement(userInput)
	mappingFile = open(mappingFile, "w")
	mappingFile.write(prefixes)
	mappingFile.close()
	return (mappingFile)


if __name__ == "__main__":
        generator()