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
prefixDict = dict()
mapping = ""
output = ""


def generateOutput(outputInfo):
	#output_file_path = outputInfo["output"][0]["output_file_path"]
	output_file_path = "/Users/sam/Documents/GitHub/easyRML/sources/"
	output_file_name = outputInfo["output"][0]["output_file_name"]
	ouputFile = str(output_file_path) + str(output_file_name) + ".ttl"
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

def generateTriplesMap(data):
	#sourceName = data["triplesMap"][0]["logicalSource_path"]
	sourceName = "temp_value"
	TM_name = data["triplesMap"][0]["name"]
	TM = "<" + TM_name + ">\n"
	TM = TM + "\trml:logicalSource [ rml:source \"" + sourceName + \
				"\";\n\t\t\t\t\trml:referenceFormulation ql:CSV ];\n"
	return TM

def generateSubjectMap(data):
	subjectType = data["subjectMap"][0]["subjectType"]
	subject = data["subjectMap"][0]["subject"]
	termType = data["subjectMap"][0]["termType"]
	if subjectType == "class":
		SM = "\trr:subjectMap [\n\t\trr:constant \"" + subject + \
		"\";\n\t\trr:termType " + termType + ";\n\t]"
	elif subjectType == "Ref_to_data_as_uri":
		subjectClass = data["subjectMap"][0]["subjectClass"]
		SM = "\trr:subjectMap [\n\t\trr:template \"" + subjectClass + \
		"{" + subject + "}\";\n\t\trr:termType " + termType + ";\n\t]"	
	return SM

def generatePOM(data):
	### Predicate ###	
	global pomDict
	global prefixDict
	pomList = data["predicateObjectMap"]
	POM = ""
	for j in range (0,len(pomList)):
		predicateURL = str(data["predicateObjectMap"][j]["predicate"])
		if "#" in predicateURL:
			predicate_url = predicateURL.split("#")[0]
			predicate_value = predicateURL.split("#")[1]
		else:
			predicate_url = predicateURL.rsplit("/",1)[0]
			predicate_value = predicateURL.rsplit("/",1)[1]
		predicate_prefix = ""
		for p,u in prefixDict.items():
			if u == predicate_url:
				predicate_prefix = p
		if predicate_prefix != "":
			predicate = predicate_prefix + ":" + predicate_value
		else:
			predicate = predicateURL
		print (predicate)
		### Object ###
		objectType = data["predicateObjectMap"][j]["objectType"]
		objectValue = data["predicateObjectMap"][j]["object"]
		termType = data["predicateObjectMap"][j]["termType"]

		if objectType == "class":
			objectMap = "rr:constant \"" + objectValue + "\";" + \
			"\n\t\t\trr:termType " + termType + ";\n\t\t];"

		elif objectType == "Ref_to_data":
			objectMap = "rml:reference \"" + objectValue + "\";" + \
			"\n\t\t\trr:termType " + termType + ";\n\t\t];"

		elif objectType == "Ref_to_data_as_uri":
			objectClass = data["predicateObjectMap"][j]["objectClass"]
			objectMap = "rr:template \"" + objectClass + "/{" + objectValue + \
			"}\";" + "\n\t\t\trr:termType " + termType + ";\n\t\t];"

		elif objectType == "Ref_to_TM_same_source":
			objectMap = "rr:parentTriplesMap <" + objectValue + ">;" + \
			"\n\t\t\trr:termType " + termType + ";\n\t\t];"

		elif objectType == "Ref_to_TM_different_source":
			childValue = data["predicateObjectMap"][j]["child"]
			parentValue = data["predicateObjectMap"][j]["parent"]
			joinValue = "rr:joinCondition [\n\t\t\trr:child \"" + childValue + \
			"\";\n\t\t\trr:parent \"" + parentValue + "\";];"
			objectMap = "rr:parentTriplesMap <" + objectValue + ">;" +\
			"\n\t\t\t" + "rr:termType " + termType + ";\n\t\t\t"+ joinValue + " ];"
		POM = POM + ";\n\trr:predicateObjectMap [\n\t\trr:predicate " + predicate + \
		";\n\t\trr:objectMap [\n\t\t\t" + objectMap + "\n\t]"
	POM = POM + "."
	return POM

def generator_preliminary(userInputData):
	global output
	output = generateOutput(userInputData[0])
	prefixes = generatePrefix(userInputData[1],userInputData[2])
	global mapping
	mapping = prefixes
	return ""

def generator_tripleMap(userInputData):
	TM = generateTriplesMap(userInputData[0])
	SM = generateSubjectMap(userInputData[1])
	POM = generatePOM(userInputData[2])
	global mapping
	mapping = mapping + str(TM) + str(SM) + str(POM)
	global output
	mappingFile = open(output, "w+")
	mappingFile.write(mapping)
	mappingFile.close()
	return ""
	return ""



if __name__ == "__main__":
        generator()