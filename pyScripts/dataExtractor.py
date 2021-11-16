'''
@auther: samiscoding@github
'''
import pandas as pd
import sys
import os
from SPARQLWrapper import SPARQLWrapper,JSON
import json
from rdflib import Graph
import csv
import mysql.connector

##############################################################################

##################### Extract Classes from the Ontology ######################
'''
#### ontology as an endpoint
def readClassesFromOntologyEndpoint(endpoint):
    sparql = SPARQLWrapper(endpoint)
    sparql.setQuery("""SELECT distinct ?class 
        WHERE { 
        ?class <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> 
        <http://www.w3.org/2002/07/owl#Class>. }""")
    sparql.setReturnFormat(JSON)
    classes = sparql.query().convert()  
    return classes
'''
#### ontology as an turtle file
def readClassesFromOntologyTurtle(file):
    ontologyGraph = Graph()
    ontologyGraph.parse(file, format='ttl')
    query = """SELECT distinct ?class 
        WHERE { 
        ?class <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> 
        <http://www.w3.org/2002/07/owl#Class>. }"""
    queryResult = ontologyGraph.query(query)
    owlClassList = []
    for c in queryResult:
        owlClass = str(c.asdict().values()).split("(")[2].replace(")])","").replace("\'","")
        owlClassList.append(owlClass)
    return owlClassList

#################### Extract Properties from the Ontology ######################
'''
#### ontology as an endpoint
def readPropertiesFromOntologyEndpoint(endpoint):
    sparql = SPARQLWrapper(endpoint)
    sparql.setQuery("""SELECT distinct ?protperty 
        WHERE {{ 
        ?protperty <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> 
        <http://www.w3.org/2002/07/owl#ObjectProperty>. }
        UNION { 
        ?protperty <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> 
        <http://www.w3.org/2002/07/owl#DatatypeProperty>. }}""")
    sparql.setReturnFormat(JSON)
    properties = sparql.query().convert()
    return properties
'''
#### ontology as an turtle file
def readPropertiesFromOntologyTurtle(filename):
    file = filename
    ontologyGraph = Graph()
    ontologyGraph.parse(file, format='ttl')
    query = """SELECT distinct ?protperty 
        WHERE {{ 
        ?protperty <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> 
        <http://www.w3.org/2002/07/owl#ObjectProperty>. }
        UNION { 
        ?protperty <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> 
        <http://www.w3.org/2002/07/owl#DatatypeProperty>. }}"""
    queryResult = ontologyGraph.query(query)
    owlPropertyList = []
    for c in queryResult:
        owlProperty = str(c.asdict().values()).split("(")[2].replace(")])","").replace("\'","")
        owlPropertyList.append(owlProperty)
    return owlPropertyList

###################### Extract Fields from Data Header ########################

def extractFields(file):
    fileName = file.split('/')[-1]
    if fileName.rsplit('.', 1)[1].lower() == 'csv':
        with open(file, newline='') as dataFile:
            reader = csv.reader(dataFile)
            dataFields = next(reader)
        dataFields_json = json.dumps(dataFields) 
    elif fileName.rsplit('.', 1)[1].lower() == 'json':
        with open(file, "r") as dataFile:
            data_json = json.load(dataFile)
        for dataFields in data_json.keys():
            dataFields_json = json.dumps(dataFields)
    else:
        dataFields_json = {}
    return dataFields_json

###################### Extract columns from RDB ########################
'''
def extractFields(file):
 
    mydb = mysql.connector.connect(
          host=file["RDB_host"],
          port=file["RDB_port"],
          user=file["databaseusername"],
          passwd=file["databasepassword"],
          database=file["databasename"]
        )
    table = file["databasetable"]
    query="""
    SELECT * from databasetable 
    """
    mycursor = mydb.cursor()
    mycursor.execute(query)
    myresult = mycursor.fetchall()
    print (myresult)
    return (myresult_json)

'''
############################# Extract Prefixes ##############################

def readURLs(filePath):
    file_df = pd.read_csv(filePath, low_memory=False)
    return (list(file_df["URL"]))

def readPrefix(filePath):
    file_df = pd.read_csv(filePath, low_memory=False)
    return (list(file_df["prefix"]))

########################## Extract Triples Names #############################

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






