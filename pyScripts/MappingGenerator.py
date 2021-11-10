'''
@auther: samiscoding@github
'''
import pandas as pd
import json

#################################################################################
prefixDict = dict()
mapping = ""
output = ""
Tnames_list = []


def generateOutput(outputInfo):
	output_file_path = outputInfo["output"][0]["output_file_path"]
	#output_file_path = "/mnt/e/GitHub/easyRML/sources/"
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
	return prefixes

def generateTriplesMap(data):
	triplesList = data
	TM_list = []
	for t in range (0,len(triplesList)):
		Tnames_list.append(data[t]["name"])
		sourceName = data[t]["logicalSource_path"]
		#sourceName = "temp_value"
		TM_name = data[t]["name"]
		TM = "\n<" + TM_name + ">\n"
		TM = TM + "\trml:logicalSource [ rml:source \"" + sourceName + \
					"\";\n\t\t\t\trml:referenceFormulation ql:CSV ];\n"
		TM_list.append(TM)
	return TM_list

def generateSubjectMap(data):
	subjectList = data
	SM_list = []
	for s in range (0,len(subjectList)):
		subjectType = data[s]["subjectMap"][0]["subjectType"]
		termType = data[s]["subjectMap"][0]["termType"]
		if subjectType == "class":
			subject = data[s]["subjectMap"][0]["subject"]
			SM = "\trr:subjectMap [\n\t\trr:constant \"" + subject + \
			"\";\n\t\trr:termType " + termType + ";\n\t]"
		elif subjectType == "Ref_to_data_as_uri":
			subjectClass = data[s]["subjectMap"][0]["subjectClass"]
			SM = "\trr:subjectMap [\n\t\trr:template \"" + subjectClass + "/"
			d_len = len(data[s]["subjectMap"][0]["subject"])
			for d in range(0,(d_len-1)):
				subject = data[s]["subjectMap"][0]["subject"][d]["data"]
				SM = SM + "{" + subject + "}_"
			SM = SM + "{" + data[s]["subjectMap"][0]["subject"][d_len-1]["data"] + "}"
			SM = SM + "\";\n\t\trr:termType " + termType + ";\n\t]"
		SM_list.append(SM)
	return SM_list

def generatePOM(data):
	### Predicate ###	
	global pomDict
	global prefixDict
	Tnames_list = data
	POM = ""
	POM_list = []
	for n in range(0,len(Tnames_list)):
		POM = ""
		pomList = data[n]["predicateObjectMap"]
		for j in range (0,len(pomList)):
			predicateURL = str(data[n]["predicateObjectMap"][j]["predicate"])
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
			objectType = data[n]["predicateObjectMap"][j]["objectType"]
			objectValue = data[n]["predicateObjectMap"][j]["object"]
			termType = data[n]["predicateObjectMap"][j]["termType"]

			if objectType == "class":
				objectValue = data[n]["predicateObjectMap"][j]["object"]
				objectMap = "rr:constant \"" + objectValue + "\";" + \
				"\n\t\t\trr:termType " + termType + ";\n\t\t];"

			elif objectType == "Ref_to_data":
				objectValue = data[n]["predicateObjectMap"][j]["object"]
				objectMap = "rml:reference \"" + objectValue + "\";" + \
				"\n\t\t\trr:termType " + termType + ";\n\t\t];"

			elif objectType == "Ref_to_data_as_uri":
				objectClass = data[n]["predicateObjectMap"][j]["objectClass"]
				objectMap = "rr:template \"" + objectClass + "/"
				d_len = len(data[n]["predicateObjectMap"][j]["object"])
				for d in range(0,(d_len-1)):
					objectValue = data[n]["predicateObjectMap"][j]["object"][d]["data"]
					objectMap = objectMap + "{" + objectValue + "}_"
				objectMap = objectMap + "{" + data[n]["predicateObjectMap"][j]["object"][d_len-1]["data"] + "}" 
				objectMap = objectMap + "\";" + "\n\t\t\trr:termType " + termType + ";\n\t\t];"

			elif objectType == "Ref_to_TM_same_source":
				objectValue = data[n]["predicateObjectMap"][j]["object"]
				objectMap = "rr:parentTriplesMap <" + objectValue + ">;" + \
				"\n\t\t\trr:termType " + termType + ";\n\t\t];"

			elif objectType == "Ref_to_TM_different_source":
				objectValue = data[n]["predicateObjectMap"][j]["object"]
				childValue = data[n]["predicateObjectMap"][j]["child"]
				parentValue = data[n]["predicateObjectMap"][j]["parent"]
				joinValue = "rr:joinCondition [\n\t\t\trr:child \"" + childValue + \
				"\";\n\t\t\trr:parent \"" + parentValue + "\";];"
				objectMap = "rr:parentTriplesMap <" + objectValue + ">;" +\
				"\n\t\t\t" + "rr:termType " + termType + ";\n\t\t\t"+ joinValue + " ];"
			POM = POM + ";\n\trr:predicateObjectMap [\n\t\trr:predicate " + predicate + \
			";\n\t\trr:objectMap [\n\t\t\t" + objectMap + "\n\t]"
		POM = POM + "."
		POM_list.append(POM)
	return POM_list

def generator_preliminary(userInputData):
	global output
	output = generateOutput(userInputData[0])
	prefixes = generatePrefix(userInputData[1],userInputData[2])
	global mapping
	mapping = prefixes
	return ""

def generator_tripleMap(userInputData):
	#with open("../sources/example_sent_from_UI_TM1.json") as inputFile:
	#	inputObject = json.load(inputFile)
	#	inputFile.close()
	#print (len(inputObject[0]['triplesMap']))
	TM_list = generateTriplesMap(userInputData[0]['triplesMap'])
	SM_list = generateSubjectMap(userInputData[0]['triplesMap'])
	POM_list = generatePOM(userInputData[0]['triplesMap'])
	global mapping
	for i in range(0,len(TM_list)):
		mapping = mapping + str(TM_list[i]) + str(SM_list[i]) + str(POM_list[i])
	global output
	mappingFile = open(output, "w+")
	mappingFile.write(mapping)
	mappingFile.close()
	return ""



if __name__ == "__main__":
        generator_tripleMap()
