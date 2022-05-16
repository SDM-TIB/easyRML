$(document).ready(function () {
    var final = [];
    var jsonPredicateObjectMap = { predicateObjectMap: [] };
    var jsonTripleMap = { triplesMap: [] };
    var jsonSubjectMap = { subjectMap: [] };
    var jsonLogicalSource = { logicalSource: [] };
  
  
    $("#sendjsonMapNew").on("click", function () {
  
      console.log(document.querySelector('#first-container'))
  
      const childrenCount = $('#first-container').children().length;

      for (var i = 1; i<=childrenCount;i++){
        let valueofObjectType = document.querySelector(`#selectobjecttype${i}`).value;

        if(valueofObjectType == 1){
            console.log("wrkig")
        }
        if(valueofObjectType == 2){
            console.log("not wrkig")
        }

        console.log(valueofObjectType);
// 
      }
  
      var triplemapname = $("#triplemapname").val();
      var datasourcepath = $("#datasourcepath").val();
  
      //datalist for database
      var databasename = $('#databasename').val();
      var databaseurl = $('#databaseurl').val();
      var databasedriver = $('#databasedriver').val();
      var databaseusername = $('#databaseusername').val();
      var databasepassword = $("#databasepassword").val();
      var databasetable = $('#databasetable').val();
      var databasequery = $('#databasequery').val();
  
      var valueofDataType = $("#selecttypedatasource option:selected").val();
  
  
      var typeofDataType = $("#selecttypedatasource option:selected").text();
  
      if (valueofDataType == 0) {
  
        jsonLogicalSource.logicalSource.push({
          sourceType: typeofDataType,
          logicalSource_path: datasourcepath
        });
  
      } else if (valueofDataType == 1) {
  
        jsonLogicalSource.logicalSource.push({
          sourceType: typeofDataType,
          databasename: databasename,
          databaseurl: databaseurl,
          databasedriver: databasedriver,
          databaseusername: databaseusername,
          databasepassword: databasepassword,
          databasetable: databasetable,
          databasequery: databasequery
        });
  
      }
  
  
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
  
        var subject = []
  
        $("#selectdatafield option:selected").each(function () {
          subject.push({
            data: this.text
          });
        });
  
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
  
        var object = []
  
        $("#predicateselectdatafield option:selected").each(function () {
          object.push({
            data: this.text
          });
        });
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
  
  
      jsonTripleMap.triplesMap.push({
        name: triplemapname,
        logicalSource: jsonLogicalSource.logicalSource,
        subjectMap: jsonSubjectMap.subjectMap,
        predicateObjectMap: jsonPredicateObjectMap.predicateObjectMap
      });
  
  
  
      final.push(jsonTripleMap);
  
  
  
      $.ajax({
        type: "POST",
        url: "/readUserInput_triplesMap",
        data: JSON.stringify(final),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
          // alert(data);
          alert("Mapping file has been generated successfully");
          $("#triplemapname").val("");
          $("#datasourcepath").val("");
          $("#selectsubject").val("default").change();
          $("#selectfirstclass").val("default").change();
          // $("#selectdatafield").val("default").change();
  
          $('#selectdatafield option:selected').prop("selected", false);
          $("#selectdatafield").trigger("chosen:updated");
  
          $("#selectclass").val("default").change();
          $("#selecttermtype").val("default").change();
          $("#selectproperty").val("default").change();
          $("#selectobjecttype").val("default").change();
          $("#selectclasssuggestion").val("default").change();
          $("#selectdatafieldsuggestion").val("default").change();
  
  
          // $("#predicateselectdatafield").val("default").change();
          $('#predicateselectdatafield option:selected').prop("selected", false);
          $("#predicateselectdatafield").trigger("chosen:updated");
  
          $("#predicateselectclass").val("default").change();
          $("#predicateselecttriplesmap").val("default").change();
          $("#predicateselecttriplesmapdifferentdata").val("default").change();
          $("#joinconditionchild").val("default").change();
          $("#selecttermtypepredicateobjectmap").val("default").change();
          $("#joinconditionparent").val("");
  
          $('#databasename').val("");
          $('#databaseurl').val("");
          $('#databasedriver').val("");
          $('#databaseusername').val("");
          $('#databasepassword').val("");
          $('#databasetable').val("");
          $('#databasequery').val("");
          $('#databaseqeryversion').val("");
          $('#databasehost').val("");
          $('#databaseport').val("");
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
        },
      });
    });
  });
  