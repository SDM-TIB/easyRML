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


def readingData(userInputData):
#	defaultPrefixData = userInputData[0]
#	defaultList = defaultPrefixData["defaultPrefixes"]
#	for i in range (1,len(defaultList)):
#		prefixDict.update({defaultList[i]["prefix"]:defaultList[i]["URL"]})
	usersPrefixData = userInputData[1]
	userList = usersPrefixData["newPrefixs"]
	for i in range (0,len(userList)):
		prefixDict.update({userList[i]["prefix"]:userList[i]["url"]})

##################### to continue with writing
	for item in prefixDict.items():
		print (item)

def usersPrefixes():
	prefixes = ""
	for entry in prefixDict.items():
		print (entry)
	for entry in ui_file["mapping"]["FileManagement"]["prefix"]["defaultPrefixes"]:
		prefix = str(prefixDict.get(str(entry["URL"]))) 
		prefixString = "@prefix "+ prefix + ": <" + str(entry["URL"]) + "> ."
		prefixes = prefixes + prefixString + "\n"
	for entry in ui_file["mapping"]["FileManagement"]["prefix"]["newPrefixes"]:
		prefix = str(entry["prefix"])
		prefixString = "@prefix "+ prefix + ": <" + str(entry["URL"]) + "> ."
		prefixes = prefixes + prefixString + "\n"
	return (mappingFile,prefixes)

def fileManagement(file):

	## output configuration
	mappingFile = str(ui_file["mapping"]["FileManagement"]["output"]["outputPath"]) + "/" +\
						str(ui_file["mapping"]["FileManagement"]["output"]["outputName"]) + ".ttl"
	##read prefix


def generator():
	with open ("../sources/mapping_example.json") as self.ui_file:
		userInput = json.load(ui_file)
		mappingFile,prefixes = fileManagement(userInput)
	mappingFile = open(mappingFile, "w")
	mappingFile.write(prefixes)
	mappingFile.close()
	return (mappingFile)


if __name__ == "__main__":
        generator()