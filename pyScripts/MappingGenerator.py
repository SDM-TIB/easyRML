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
Tnames_list = []


def generateOutput(outputInfo):
	#output_file_path = outputInfo["output"][0]["output_file_path"]
	output_file_path = "/mnt/e/GitHub/easyRML/sources/"
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
	triplesList = data["triplesMap"]
	TM_list = []
	global Tnames_list
	for t in range (0,len(triplesList)):
		Tnames_list.append(data["triplesMap"][t]["name"])
		sourceName = data["triplesMap"][t]["logicalSource_path"]
		#sourceName = "temp_value"
		TM_name = data["triplesMap"][t]["name"]
		TM = "\n<" + TM_name + ">\n"
		TM = TM + "\trml:logicalSource [ rml:source \"" + sourceName + \
					"\";\n\t\t\t\t\trml:referenceFormulation ql:CSV ];\n"
		TM_list.append(TM)
	return TM_list

def generateSubjectMap(data):
	subjectList = data["subjectMap"]
	SM_list = []
	for s in range (0,len(subjectList)):
		subjectType = data["subjectMap"][s]["subjectType"]
		subject = data["subjectMap"][s]["subject"]
		termType = data["subjectMap"][s]["termType"]
		if subjectType == "class":
			SM = "\trr:subjectMap [\n\t\trr:constant \"" + subject + \
			"\";\n\t\trr:termType " + termType + ";\n\t]"
		elif subjectType == "Ref_to_data_as_uri":
			subjectClass = data["subjectMap"][s]["subjectClass"]
			SM = "\trr:subjectMap [\n\t\trr:template \"" + subjectClass + \
			"{" + subject + "}\";\n\t\trr:termType " + termType + ";\n\t]"
		SM_list.append(SM)
	return SM_list

def generatePOM(data):
	### Predicate ###	
	global pomDict
	global prefixDict
	global Tnames_list
	pomList = data["predicateObjectMap"]
	POM = ""
	for n in Tnames_list:
		pomName = "predicateObjectMap" + str(n)
		for j in range (0,len(pomList)):
			predicateURL = str(data[pomName][j]["predicate"])
			if "#" in predicateURL:
				predicate_url = "".join((predicateURL.split("#")[0],"#"))
				predicate_value = predicateURL.split("#")[1]
			else:
				predicate_url = "".join((predicateURL.rsplit("/",1)[0],"/"))
				predicate_value = predicateURL.rsplit("/",1)[1]
			predicate_prefix = ""
			for p,u in prefixDict.items():
				if u == predicate_url:
					predicate_prefix = p
			if predicate_prefix != "":
				predicate = predicate_prefix + ":" + predicate_value
			else:
				predicate = predicateURL
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