## easyRML

EasyRML aims to facilitate the creation of declarative mapping rules. EasyRML provides a platform where users upload the two components of their data integration systems, i.e., data sources [schema] and an ontology, and define the mapping rules to integrate data sources considering the ontology.

![easyRML Architecture](https://github.com/SDM-TIB/easyRML/blob/master/static/images/Architecture.png "easyRML Architecture")

# Exploring Data Integration System 
As shown in the figure of the architecture, easyRML receives the ontology and the header of the tabular data sources from users. Facilitating the exploration of the ontology and data sources for users, easyRML provide classes, properties, and the data attributes to be explored in separated steps where they are required. Correspondingly, classes of the ontology and data attributes can be explored while defining subjects and objects of triples while the properties are explored during the definition of predicates.  


# Mapping Rules Generation 
Once users finish defining the mappings between their data sources and their ontology, easyRML create the triplesMaps following the correct structure and syntaxes of the [R2]RML. It should be noted that easyRML prevent users to define semantically incorrect rules. For instance, defining the object of a triple based on the subject of another triple that is not previously defined, is not allowed. Therefore, easyRML ensures that the generated mapping rules are syntactically and semantically validated. 
