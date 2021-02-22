'''
@auther: samiscoding@github
'''
import pandas as pd
import sys
import os
import json
import csv

#################################################################################

#### ontology as an turtle file
def readDataSource(file):

    fileName = file.split('/')[-1]
    if fileName.rsplit('.', 1)[1].lower() == 'csv':
        with open(file, newline='') as dataFile:
            reader = csv.reader(dataFile)
            dataFields = next(reader)
        dataFields_json = json.dumps(dataFields) 
    elif fileName.rsplit('.', 1)[1].lower() == 'json':
        with open(file, "r") as dataFile:
            data_json = json.load(dataFile,indent=2)
        for key in data_json.keys():
            print(key)
    else:
        dataFields_json = {}

    #return dataFields_json



def handler():

    readDataSource("/Users/sam/Documents/GitHub/easyRML/fileExamples/json_dataSource.json")

if __name__ == "__main__":
        handler()
