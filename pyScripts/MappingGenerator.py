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
prefixDict = dict()
global sourceName
sourceName = ""
global TM
TM = ""

def generateOutput(outputInfo):
	output_file_path = outputInfo["output"]["output_file_path"]
	output_file_name = outputInfo["output"]["output_file_name"]
	### writing ###
	ouputFile = str(output_file_path) + str(output_file_name)
	return ouputFile

def generatePrefix(default,new):
	global prefixDict
	defaultList = default["defaultPrefixes"]
	for i in range (0,len(defaultList)):
		prefixDict.update({defaultList[i]["prefix"]:defaultList[i]["url"]})
	userList = new["newPrefixs"]
	for i in range (0,len(userList)):
		prefixDict.update({userList[i]["prefix"]:userList[i]["url"]})
	### writing ###
	prefixes = ""
	for prefix in prefixDict.keys():
		prefixString = "@prefix "+ prefix + ": <" + str(prefixDict[prefix]) + "> ."
		prefixes = prefixes + prefixString + "\n"
	print (prefixes)
	return prefixes

def receiveSource(source):
	global sourceName
	sourceName = source

def generateTriplesMap(data):
	TM_name = data["triplesMap"]["name"]
	### writing ###
	TM = "< " + TM_name + " >\n"
	TM = TM + "\trml:logicalSource [ rml:source\"" + sourceName + \
				"\";\n\t\t\t\t\trml:referenceFormulation ql:CSV ];\n"
	return TM

def generateSubjectMap(data):
	subjectType = data["subjectMap"]["subjectType"]
	if subjectType = "Ref_to_data_as_uri":
		subject = data["subjectMap"]["subject"]
		subjectClass = data["subjectMap"]["subjectClass"]
		termType = data["subjectMap"]["termType"]
	### writing ###
	SM = "\trr:subjectMap [\n\t\trr:template \"" + subjectClass + \
	"{" + subject + "}\";\n\t\trr:termType " + termType + ";\n\t];"
	return SM

def generatePOM(data):
	### Predicate ###	
	predicateURL = str(data["predicateObjectMap"]["predicate"])
	if "#" in predicateURL:
		url = predicateURL.split("#")[0]
		value = predicateURL.split("#")[1]
	else:
		url = predicateURL.rplit("/")[0]
		value = predicateURL.rplit("/")[1]
	for p,u in prefixDict:
		if u = url:
			predicate_prefix = p
	if p != "":
		predicate = p + value
	else:
		predicate = predicateURL
	### Object ###
	objectType = data["predicateObjectMap"]["objectType"]



	### writing ###
	POM = "\trr:predicateObjectMap [\n\t\trr:predicate" + predicate + \
	";\n\t\trr:objectMap [\n\t\t\t" ...

def generator(userInputData):
	#ouputFile = generateOutput(userInputData[0])
	#prefixes = generatePrefix(userInputData[1],userInputData[2])
	#= generateTriplesMap(userInputData[3])
	#= generateSubjectMap(userInputData[4])
	#= generatePOM(userInputData[5])
	#mapping = prefixes + TM + SM + POM
	prefixes = generatePrefix(userInputData[0],userInputData[1])


	#mappingFile = open(ouputFile, "w")
	#mappingFile.write(prefixes)

	#mappingFile.close()
	return ""


if __name__ == "__main__":
        generator()