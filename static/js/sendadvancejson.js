$(document).ready(function () {
  var final = [];
  var jsonPredicateObjectMap = { predicateObjectMap: [] };
  var jsonTripleMap = { triplesMap: [] };
  var jsonSubjectMap = { subjectMap: [] };
  $("#addanothertriples").on("click", function () {
    
    var triplemapname = $("#triplemapname").val();
    var datasourcepath = $("#datasourcepath").val();

    jsonTripleMap.triplesMap.push({
      name: triplemapname,
      logicalSource_path: datasourcepath,
    });

    

    var valueofSubjectMap = $("#selectsubject option:selected").val();

    if (valueofSubjectMap == 0) {
      var subjectType = "class";
      var subject = $("#selectfirstclass option:selected").text();
      var termtype = $("#selecttermtype option:selected").text();

      jsonSubjectMap.subjectMap.push({
        subjectType: subjectType,
        subject: subject,
        termType: termtype,
      });
    } else if (valueofSubjectMap == 1) {
      var subjectType = "Ref_to_data_as_uri";
      var subject = $("#selectdatafield option:selected").text();
      var subjectClass = $("#selectclass option:selected").text();
      var termtype = $("#selecttermtype option:selected").text();

      jsonSubjectMap.subjectMap.push({
        subjectType: subjectType,
        subject: subject,
        subjectClass: subjectClass,
        termType: termtype,
      });
    }


    var valueofPredicateObjectMap = $(
      "#selectobjecttype option:selected"
    ).val();

    if (valueofPredicateObjectMap == 1) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "class";
      var object = $("#selectclasssuggestion option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 2) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_data";
      var object = $("#selectdatafieldsuggestion option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 3) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_data_as_uri";
      var object = $("#predicateselectdatafield option:selected").text();
      var objectClass = $("#predicateselectclass option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        objectClass: objectClass,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 4) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_TM_same_source";
      var object = $("#predicateselecttriplesmap option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 5) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_TM_different_source";
      var object = $(
        "#predicateselecttriplesmapdifferentdata option:selected"
      ).text();
      var child = $("#joinconditionchild option:selected").text();
      var parent = $("#joinconditionparent").val();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        child: child,
        parent: parent,
        termType: termType,
      });
    }

    // final.push(jsonTripleMap);
    // final.push(jsonSubjectMap);
    // final.push(jsonPredicateObjectMap);
    // console.log(final);

    var finaljson = JSON.stringify(final);
    console.log(finaljson);

    $("#predicateselecttriplesmap").append($('<option>', {
      text: triplemapname
      }));


    $("#triplemapname").val("");
    $("#datasourcepath").val("");
    $("#selectsubject").val("default").change();
    $("#selectfirstclass").val("default").change();
    $("#selectdatafield").val("default").change();
    $("#selectclass").val("default").change();
    $("#selecttermtype").val("default").change();
    $("#selectproperty").val("default").change();
    $("#selectobjecttype").val("default").change();
    $("#selectclasssuggestion").val("default").change();
    $("#selectdatafieldsuggestion").val("default").change();
    $("#predicateselectdatafield").val("default").change();
    $("#predicateselectclass").val("default").change();
    $("#predicateselecttriplesmap").val("default").change();
    $("#predicateselecttriplesmapdifferentdata").val("default").change();
    $("#joinconditionchild").val("default").change();
    $("#selecttermtypepredicateobjectmap").val("default").change();
    $("#joinconditionparent").val("");
  });

  $("#addanotherpredicate").on("click", function () {
    

    var valueofPredicateObjectMap = $(
      "#selectobjecttype option:selected"
    ).val();

    if (valueofPredicateObjectMap == 1) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "class";
      var object = $("#selectclasssuggestion option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 2) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_data";
      var object = $("#selectdatafieldsuggestion option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 3) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_data_as_uri";
      var object = $("#predicateselectdatafield option:selected").text();
      var objectClass = $("#predicateselectclass option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        objectClass: objectClass,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 4) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_TM_same_source";
      var object = $("#predicateselecttriplesmap option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 5) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_TM_different_source";
      var object = $(
        "#predicateselecttriplesmapdifferentdata option:selected"
      ).text();
      var child = $("#joinconditionchild option:selected").text();
      var parent = $("#joinconditionparent").val();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        child: child,
        parent: parent,
        termType: termType,
      });
    }

    // final.push(jsonPredicateObjectMap);
    // console.log(final);

    console.log(jsonPredicateObjectMap);

    var finaljson = JSON.stringify(final);
    console.log(finaljson);

    $("#selectproperty").val("default").change();
    $("#selectobjecttype").val("default").change();
    $("#selectclasssuggestion").val("default").change();
    $("#selectdatafieldsuggestion").val("default").change();
    $("#predicateselectdatafield").val("default").change();
    $("#predicateselectclass").val("default").change();
    $("#predicateselecttriplesmap").val("default").change();
    $("#predicateselecttriplesmapdifferentdata").val("default").change();
    $("#joinconditionchild").val("default").change();
    $("#selecttermtypepredicateobjectmap").val("default").change();
    $("#joinconditionparent").val("");
  });

  $("#sendjsonMap").on("click", function () {
    var triplemapname = $("#triplemapname").val();
    var datasourcepath = $("#datasourcepath").val();

    jsonTripleMap.triplesMap.push({
      name: triplemapname,
      logicalSource_path:datasourcepath,
    });

    // var jsonSubjectMap = { subjectMap: [] };

    var valueofSubjectMap = $("#selectsubject option:selected").val();

    if (valueofSubjectMap == 0) {
      var subjectType = "class";
      var subject = $("#selectfirstclass option:selected").text();
      var termtype = $("#selecttermtype option:selected").text();

      jsonSubjectMap.subjectMap.push({
        subjectType: subjectType,
        subject: subject,
        termType: termtype,
      });
    } else if (valueofSubjectMap == 1) {
      var subjectType = "Ref_to_data_as_uri";
      var subject = $("#selectdatafield option:selected").text();
      var subjectClass = $("#selectclass option:selected").text();
      var termtype = $("#selecttermtype option:selected").text();

      jsonSubjectMap.subjectMap.push({
        subjectType: subjectType,
        subject: subject,
        subjectClass: subjectClass,
        termType: termtype,
      });
    }

    var valueofPredicateObjectMap = $(
      "#selectobjecttype option:selected"
    ).val();

    if (valueofPredicateObjectMap == 1) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "class";
      var object = $("#selectclasssuggestion option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 2) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_data";
      var object = $("#selectdatafieldsuggestion option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 3) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_data_as_uri";
      var object = $("#predicateselectdatafield option:selected").text();
      var objectClass = $("#predicateselectclass option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        objectClass: objectClass,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 4) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_TM_same_source";
      var object = $("#predicateselecttriplesmap option:selected").text();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        termType: termType,
      });
    } else if (valueofPredicateObjectMap == 5) {
      var predicate = $("#selectproperty option:selected").text();
      var objectType = "Ref_to_TM_different_source";
      var object = $(
        "#predicateselecttriplesmapdifferentdata option:selected"
      ).text();
      var child = $("#joinconditionchild option:selected").text();
      var parent = $("#joinconditionparent").val();
      var termType = $(
        "#selecttermtypepredicateobjectmap option:selected"
      ).text();

      jsonPredicateObjectMap.predicateObjectMap.push({
        predicate: predicate,
        objectType: objectType,
        object: object,
        child: child,
        parent: parent,
        termType: termType,
      });
    }

    final.push(jsonTripleMap);
    final.push(jsonSubjectMap);
    final.push(jsonPredicateObjectMap);
    // console.log(final);



    var finaljson = JSON.stringify(final);
    console.log(finaljson);

    // let dataURI= 'data:application/json;charset=utf-8,' + encodeURIComponent(finaljson);

    // let exportfilename = '/templates/input.json';

    // let linkelement = document.createElement('a');
    // linkelement.setAttribute('href', dataURI);
    // linkelement.setAttribute('download', exportfilename);
    // linkelement.click();

    $.ajax({
      type: "POST",
      url: "/readUserInput_triplesMap",
      data: JSON.stringify(final),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function (data) {
        alert(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      },
    });
  });
});
