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


def handler():
	with open ("../sources/input_example.json") as file:
		userInput = json.load(file)
		for i in userInput['output']:
			print (i['path'], "----", i['name'])

if __name__ == "__main__":
        handler()