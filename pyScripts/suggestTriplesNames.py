'''
@auther: samiscoding@github
'''
import pandas as pd
import sys
import os
import json
import csv

#################################################################################

def extractTriplesMapsNames(file):
    TList = []
    with open(file, "r") as namesFile:
        names_json = json.load(namesFile)
    for num in names_json["Names"]["TriplesMap"].keys():
        TList.append(names_json["Names"]["TriplesMap"][num])
    T_json = json.dumps(TList)
    return T_json

def extractFunctionMapsNames(file):
    FList = []
    with open(file, "r") as namesFile:
        names_json = json.load(namesFile)
    for num in names_json["Names"]["FunctionMap"].keys():
        FList.append(names_json["Names"]["FunctionMap"][num])
    F_json = json.dumps(FList)
    return F_json

def handler():
    F_json = extractFunctionMapsNames("/mnt/e/GitHub/easyRML/sources/TriplesMapsNames_example.json")

if __name__ == "__main__":
        handler()
