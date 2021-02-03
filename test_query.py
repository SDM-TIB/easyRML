'''
@auther: samiscoding@github
'''
from configparser import ConfigParser, ExtendedInterpolation
import pandas as pd
import sys
import os
import SPARQLWrapper

#################################################################################

def readOntology(endpoint):

    if str(endpoint).lower() not "":
        sparql = SPARQLWrapper(str(endpoint).lower())
        sparql.setQuery("""PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
                    SELECT ?s 
                    WHERE { ?s rdf:type owl:ObjectProperty. }""")
        predicates = sparql.query()
        return predicates

    else:
        return ("")


def handler():
    user_input = input("Enter the path of your file: ")
    print (user_input)
    config = ConfigParser(interpolation=ExtendedInterpolation())
    config.read(user_input)
    predicates = readOntology(config['main']['ontology_endpoint'])
    print (predicates)

if __name__ == "__main__":
        handler()
