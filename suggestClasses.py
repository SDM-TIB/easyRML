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
    ## retrieve classes from the ontology
    sparql.setQuery("""SELECT distinct ?class 
        WHERE { 
        ?class <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> 
        <http://www.w3.org/2002/07/owl#Class>. }""")
    sparql.setReturnFormat(JSON)
    classes = sparql.query().convert()  
    return classes

def handler():
    user_input = input("Enter the ontology endpoint: ")
    classes = readOntology(user_input)
    print (json.dumps(classes,indent=2))

if __name__ == "__main__":
        handler()
