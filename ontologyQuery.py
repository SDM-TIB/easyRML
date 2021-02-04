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
    sparql.setQuery("""SELECT ?class 
        WHERE { 
        ?class <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> 
        <http://www.w3.org/2002/07/owl#Class>. }""")
    sparql.setReturnFormat(JSON)
    predicates = sparql.query().convert()
    return predicates

def handler():
    user_input = input("Enter the path of your file: ")
    print (user_input)
    config = ConfigParser(interpolation=ExtendedInterpolation())
    config.read(user_input)
    predicates = readOntology(config['main']['ontology_endpoint'])
    print (json.dumps(predicates,indent=2))

if __name__ == "__main__":
        handler()
