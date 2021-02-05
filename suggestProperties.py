'''
@auther: samiscoding@github
'''
from configparser import ConfigParser, ExtendedInterpolation
import pandas as pd
import sys
import os
from SPARQLWrapper import SPARQLWrapper,JSON
import json

#################################################################################

def readOntology(endpoint):

    sparql = SPARQLWrapper(endpoint)
      
    ## retrieve properties from the ontology
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

def handler():
    user_input = input("Enter the ontology endpoint: ")
    properties = readOntology(user_input)
    print (json.dumps(properties,indent=2))

if __name__ == "__main__":
        handler()
