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

class Mappings():

	def __init__(self):
		self.prefixDict = dict()
		self.ui_file = ""

	def defaultPrefixes(self,file):
		prefix_df = pd.read_csv("../sources/defaultPrefixes.csv")
		for i in range(0,len(prefix_df)):
			self.prefixDict.update({prefix_df["URL"][i]:prefix_df["prefix"][i]})

	def usersPrefixes(self):
		prefixes = ""
		for entry in self.ui_file["mapping"]["FileManagement"]["prefix"]["defaultPrefixes"]:
			prefix = str(prefixDict.get(str(entry["URL"]))) 
			prefixString = "@prefix "+ prefix + ": <" + str(entry["URL"]) + "> ."
			prefixes = prefixes + prefixString + "\n"
		for entry in self.ui_file["mapping"]["FileManagement"]["prefix"]["newPrefixes"]:
			prefix = str(entry["prefix"])
			prefixString = "@prefix "+ prefix + ": <" + str(entry["URL"]) + "> ."
			prefixes = prefixes + prefixString + "\n"
		return (mappingFile,prefixes)



	def fileManagement(file):

		## output configuration
		mappingFile = str(self.ui_file["mapping"]["FileManagement"]["output"]["outputPath"]) + "/" +\
							str(self.ui_file["mapping"]["FileManagement"]["output"]["outputName"]) + ".ttl"
		##read prefix


	def generator():
		with open ("../sources/mapping_example.json") as self.ui_file:
			userInput = json.load(self.ui_file)
			mappingFile,prefixes = fileManagement(userInput)
		mappingFile = open(mappingFile, "w")
		mappingFile.write(prefixes)
		mappingFile.close()
		return (mappingFile)


if __name__ == "__main__":
        generator()