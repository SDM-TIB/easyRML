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
	output_file_path = outputInfo["output"][0]["output_file_path"]
	output_file_name = outputInfo["output"][0]["output_file_name"]
	ouputFile = str(output_file_path) + str(output_file_name)
	return ouputFile

def generatePrefix(default,new):
	global prefixDict
	defaultList = default["defaultPrefixes"]
	for i in range (0,len(defaultList)):
		prefixDict.update({defaultList[i]["prefix"]:defaultList[i]["url"]})
	userList = new["newPrefixes"]
	for i in range (0,len(userList)):
		prefixDict.update({userList[i]["prefix"]:userList[i]["url"]})
	### writing ###
	prefixes = ""
	for prefix in prefixDict.keys():
		prefixString = "@prefix "+ prefix + ": <" + str(prefixDict[prefix]) + "> ."
		prefixes = prefixes + prefixString + "\n"
	#print (prefixes)
	return prefixes

def receiveSource(source):
	global sourceName
	sourceName = source

def generateTriplesMap(data):
	TM_name = data["triplesMap"][0]["name"]
	TM = "< " + TM_name + " >\n"
	TM = TM + "\trml:logicalSource [ rml:source\"" + sourceName + \
				"\";\n\t\t\t\t\trml:referenceFormulation ql:CSV ];\n"
	return TM

def generateSubjectMap(data):
	subjectType = data["subjectMap"][0]["subjectType"]
	subject = data["subjectMap"][0]["subject"]
	termType = data["subjectMap"][0]["termType"]
	if subjectType == "class":
		SM = "\trr:subjectMap [\n\t\trr:constant \"" + subject + \
		"\";\n\t\trr:termType " + termType + ";\n\t];"
	elif subjectType == "Ref_to_data_as_uri":
		subjectClass = data["subjectMap"]["subjectClass"]
		SM = "\trr:subjectMap [\n\t\trr:template \"" + subjectClass + \
		"{" + subject + "}\";\n\t\trr:termType " + termType + ";\n\t];"	
	return SM

def generatePOM(data):
	### Predicate ###	
	global pomDict
	pomList = data["predicateObjectMap"]
	for i in range (0,len(pomList)):
		predicateURL = str(data["predicateObjectMap"][j]["predicate"])
		if "#" in predicateURL:
			url = predicateURL.split("#")[0]
			value = predicateURL.split("#")[1]
		else:
			url = predicateURL.rplit("/")[0]
			value = predicateURL.rplit("/")[1]
		for p,u in prefixDict:
			if u == url:
				predicate_prefix = p
		if p != "":
			predicate = p + value
		else:
			predicate = predicateURL
		### Object ###
		objectType = data["predicateObjectMap"]["objectType"]
		objectValue = data["predicateObjectMap"]["object"]
		termType = data["predicateObjectMap"]["termType"]

		if objectType == "class":
			objectMap = "rr:constant \"" + objectValue + "\";" + \
			"\n\t\trr:termType " + termType + ";\n\t];"

		elif objectType == "Ref_to_data":
			objectMap = "rml:reference \"" + objectValue + "\";" + \
			"\n\t\trr:termType " + termType + ";\n\t];"

		elif objectType == "Ref_to_data_as_uri":
			objectClass = data["predicateObjectMap"]["objectClass"]
			objectMap = "rr:template \"" + objectClass + "/{" + objectValue + \
			"}\";" + "\n\t\trr:termType " + termType + ";\n\t];"

		elif objectType == "Ref_to_TM_same_source":
			objectMap = "rr:parentTriplesMap <" + objectValue + ">;" + \
			"\n\t\trr:termType " + termType + ";\n\t];"

		elif objectType == "Ref_to_TM_different_source":
			childValue = data["predicateObjectMap"]["child"]
			parentValue = data["predicateObjectMap"]["parent"]
			joinValue = "rr:joinCondition [\n\t\t\trr:child \"" + childValue + \
			"\";\n\t\t\trr:parent \"" + parentValue + "\";];"
			objectMap = "rr:parentTriplesMap <" + objectValue + ">;" +\
			"\n\t\t" + "rr:termType " + termType + ";\n\t\t\t"+ joinValue + " ];"

		POM = POM + "\trr:predicateObjectMap [\n\t\trr:predicate" + predicate + \
		";\n\t\trr:objectMap [\n\t\t\t" + objectMap + "\n]"

def generator_preliminary(userInputData):
	output = generateOutput(userInputData[0])
	prefixes = generatePrefix(userInputData[1],userInputData[2])
	#print (prefixes + TM + SM + POM)

def generator_tripleMap(userInputData):
	TM = generateTriplesMap(userInputData[3])
	SM = generateSubjectMap(userInputData[4])
	POM = generatePOM(userInputData[5])
	#mappingFile = open(ouputFile, "w")
	#mappingFile.write(prefixes)

	#mappingFile.close()
	return ""


if __name__ == "__main__":
        generator()