$(document).ready(function () {
    var final = [];
    var jsonPredicateObjectMap = { predicateObjectMap: [] };
    var jsonTripleMap = { triplesMap: [] };
    var jsonSubjectMap = { subjectMap: [] };
    var jsonLogicalSource = { logicalSource: [] };


    $("#sendjsonMapNew").on("click", function () {

        console.log(document.querySelector('#first-container'))

        const childrenCount = $('#first-container').children().length;

        for (var i = 1; i <= childrenCount; i++) {
            let valueofObjectType = document.querySelector(`#selectobjecttype${i}`).value;

            if (valueofObjectType == 1) {
                var predicate = $(`#selectproperty${i} option:selected`).text().trim();
                var objectType = "class";
                var object = $(`#selectclasssuggestion${i} option:selected`).text().trim();
                var termType = $(
                    `#selecttermtypepredicateobjectmap${i} option:selected`
                ).text().trim();

                jsonPredicateObjectMap.predicateObjectMap.push({
                    predicate: predicate,
                    objectType: objectType,
                    object: object,
                    termType: termType,
                });
            }else if (valueofObjectType == 2) {
                var predicate = $(`#selectproperty${i} option:selected`).text().trim();
                var objectType = "Ref_to_data";
                var object = $(`#selectdatafieldsuggestion${i} option:selected`).text().trim();
                var termType = $(
                    `#selecttermtypepredicateobjectmap${i} option:selected`
                ).text().trim();
    
                jsonPredicateObjectMap.predicateObjectMap.push({
                    predicate: predicate,
                    objectType: objectType,
                    object: object,
                    termType: termType,
                });
            } else if (valueofObjectType == 3) {
                var predicate = $(`#selectproperty${i} option:selected`).text().trim();
                var objectType = "Ref_to_data_as_uri";
    
                var object = []
    
                $(`#predicateselectdatafield${i} option:selected`).each(function () {
                    object.push({
                        data: this.text
                    });
                });
                var objectClass = $(`#predicateselectclass${i} option:selected`).text().trim();
                var termType = $(
                    `#selecttermtypepredicateobjectmap${i} option:selected`
                ).text().trim();
    
                jsonPredicateObjectMap.predicateObjectMap.push({
                    predicate: predicate,
                    objectType: objectType,
                    object: object,
                    objectClass: objectClass,
                    termType: termType,
                });
            } else if (valueofObjectType == 4) {
                var predicate = $(`#selectproperty${i} option:selected`).text().trim();
                var objectType = "Ref_to_TM_same_source";
                var object = $(`#predicateselecttriplesmap${i} option:selected`).text().trim();
                var termType = $(
                    `#selecttermtypepredicateobjectmap${i} option:selected`
                ).text().trim();
    
                jsonPredicateObjectMap.predicateObjectMap.push({
                    predicate: predicate,
                    objectType: objectType,
                    object: object,
                    termType: termType,
                });
            } else if (valueofObjectType == 5) {
                var predicate = $(`#selectproperty${i} option:selected`).text().trim();
                var objectType = "Ref_to_TM_different_source";
                var object = $(
                    `#predicateselecttriplesmapdifferentdata${i} option:selected`
                ).text().trim();
                var child = $(`#joinconditionchild${i} option:selected`).text().trim();
                var parent = $(`#joinconditionparent${i}`).val();
                var termType = $(
                    `#selecttermtypepredicateobjectmap${i} option:selected`
                ).text().trim();
    
                jsonPredicateObjectMap.predicateObjectMap.push({
                    predicate: predicate,
                    objectType: objectType,
                    object: object,
                    child: child,
                    parent: parent,
                    termType: termType,
                });
            }

            console.log(JSON.stringify(jsonPredicateObjectMap));
            
    jsonPredicateObjectMap = { predicateObjectMap: [] };
        }
    })
});