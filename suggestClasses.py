'''
@auther: samiscoding@github
'''
from configparser import ConfigParser, ExtendedInterpolation
import pandas as pd
import sys
import os
from SPARQLWrapper import SPARQLWrapper,JSON
import json
from rdflib import Graph


#################################################################################

#### ontology as an endpoint
def readOntologyEndpoint(endpoint):
    sparql = SPARQLWrapper(endpoint)
    sparql.setQuery("""SELECT distinct ?class 
        WHERE { 
        ?class <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> 
        <http://www.w3.org/2002/07/owl#Class>. }""")
    sparql.setReturnFormat(JSON)
    classes = sparql.query().convert()  
    return classes

#### ontology as an turtle file
def readOntologyTurtle(file):
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


def handler():

    #### ontology as an endpoint
    #user_input = input("Enter the ontology endpoint: ")
    #classes = readOntologyEndpoint(user_input)
    #print (json.dumps(classes,indent=2))

    #### ontology as an turtle file
    owlClassList = readOntologyTurtle("/Users/sam/Documents/GitHub/CLARIFYUnifiedSchema/clarify_v2.ttl")
    owlClassSeries = pd.Series(owlClassList, name="Classes")
    owlClassSeries.to_csv("/Users/sam/Documents/GitHub/easyRML/output/classSuggestionOutput.csv",sep=",")


if __name__ == "__main__":
        handler()
