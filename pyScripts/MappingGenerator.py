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


def generateOutput(output):
	outputInfo = userInputData[0]
	output_file_path = outputInfo["output"]["output_file_path"]
	output_file_name = outputInfo["output"]["output_file_name"]
	ouputFile = str(output_file_path) + str(output_file_name)
	return ouputFile

def generatePrefix(default,new):
	defaultList = default["defaultPrefixes"]
	for i in range (1,len(defaultList)):
		prefixDict.update({defaultList[i]["prefix"]:defaultList[i]["URL"]})
	userList = new["newPrefixs"]
	for i in range (0,len(userList)):
		prefixDict.update({userList[i]["prefix"]:userList[i]["url"]})
	prefixes = ""
	for prefix in prefixDict.keys():
		prefixString = "@prefix "+ prefix + ": <" + str(prefixDict[prefix]) + "> ."
		prefixes = prefixes + prefixString + "\n"
	return prefixes

#def generateTriplesmap():

def generator(userInputData):
	#ouputFile = generateOutput(userInputData[0])
	prefixes = generatePrefix(userInputData[1],userInputData[2])

	mappingFile = open(ouputFile, "w")
	mappingFile.write(prefixes)

	mappingFile.close()
	return (mappingFile)


if __name__ == "__main__":
        generator()