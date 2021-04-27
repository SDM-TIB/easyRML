'''
@auther: samiscoding@github
'''
import pandas as pd
import sys
import os
from SPARQLWrapper import SPARQLWrapper,JSON
import json
from rdflib import Graph


#################################################################################

def readOntologyEndpoint(endpoint):

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

#### ontology as an turtle file
def readOntologyTurtle(filename):
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

def handler():

    #### ontology as an endpoint
    #user_input = input("Enter the ontology endpoint: ")
    #properties = readOntologyEndpoint(user_input)
    #print (json.dumps(properties,indent=2))

    #### ontology as an turtle file
    owlPropertyList = readOntologyTurtle("/Users/sam/Documents/GitHub/CLARIFYUnifiedSchema/clarify_v2.ttl")
    owlPropertySeries = pd.Series(owlPropertyList, name="Properties")
    owlPropertySeries.to_csv("/Users/sam/Documents/GitHub/easyRML/output/propertySuggestionOutput.csv",sep=",")


if __name__ == "__main__":
        handler()
