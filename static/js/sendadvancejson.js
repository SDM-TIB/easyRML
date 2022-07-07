
$(document).ready(function () {




  var final = [];
  var jsonPredicateObjectMap = { predicateObjectMap: [] };
  var jsonTripleMap = { triplesMap: [] };
  var jsonSubjectMap = { subjectMap: [] };
  var jsonLogicalSource = { logicalSource: [] };
  $("#addanothertriples").on("click", function () {



    //datalist for database
    var databasename = $('#databasename').val();
    var databaseurl = $('#databaseurl').val();
    var databasedriver = $('#databasedriver').val();
    var databaseusername = $('#databaseusername').val();
    var databasetable = $('#databasetable').val();
    var databasequery = $('#databasequery').val();
    var databasepassword = $("#databasepassword").val();
    var databasequeryversion = $('#databaseqeryversion').val();
    var databasehost = $('#databasehost').val();
    var databaseport = $('#databaseport').val();

    var namedatalist = document.getElementById('namedatalist');
    var urldatalist = document.getElementById('urldatalist');
    var driverdatalist = document.getElementById('driverdatalist');
    var usernamedatalist = document.getElementById('usernamedatalist');
    var tabledatalist = document.getElementById('tabledatalist');
    var querydatalist = document.getElementById('querydatalist');
    var queryversiondatalist = document.getElementById('queryversiondatalist');
    var rdbhostdatalist = document.getElementById('rdbhostdatalist');
    var rdbportdatalist = document.getElementById('rdbportdatalist');


    var optionname = document.createElement('option');
    optionname.value = databasename;
    namedatalist.append(optionname);

    var optionurl = document.createElement('option');
    optionurl.value = databaseurl;
    urldatalist.append(optionurl);

    var optiondriver = document.createElement('option');
    optiondriver.value = databasedriver;
    driverdatalist.append(optiondriver);

    var optionusername = document.createElement('option');
    optionusername.value = databaseusername;
    usernamedatalist.append(optionusername);

    var optiontable = document.createElement('option');
    optiontable.value = databasetable;
    tabledatalist.append(optiontable);

    var optionquery = document.createElement('option');
    optionquery.value = databasequery;
    querydatalist.append(optionquery);

    var optionqueryversion = document.createElement('option');
    optionqueryversion.value = databasequeryversion;
    queryversiondatalist.append(optionqueryversion);

    var optionrdbhost = document.createElement('option');
    optionrdbhost.value = databasehost;
    rdbhostdatalist.append(optionrdbhost);

    var optionrdbport = document.createElement('option');
    optionrdbport.value = databaseport;
    rdbportdatalist.append(optionrdbport);




    var valueofDataType = $("#selecttypedatasource option:selected").val();

    var typeofDataType = $("#selecttypedatasource option:selected").text();

    var triplemapname = $("#triplemapname").val();

    var datasourcepath = $("#datasourcepath").val();


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
        databasequery: databasequery,
      });

    }


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

      var subject = [];

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



    // var valueofPredicateObjectMap = $(
    //   "#selectobjecttype option:selected"
    // ).val();

    // if (valueofPredicateObjectMap == 1) {
    //   var predicate = $("#selectproperty option:selected").text();
    //   var objectType = "class";
    //   var object = $("#selectclasssuggestion option:selected").text();
    //   var termType = $(
    //     "#selecttermtypepredicateobjectmap option:selected"
    //   ).text();

    //   jsonPredicateObjectMap.predicateObjectMap.push({
    //     predicate: predicate,
    //     objectType: objectType,
    //     object: object,
    //     termType: termType,
    //   });
    // } else if (valueofPredicateObjectMap == 2) {
    //   var predicate = $("#selectproperty option:selected").text();
    //   var objectType = "Ref_to_data";
    //   var object = $("#selectdatafieldsuggestion option:selected").text();
    //   var termType = $(
    //     "#selecttermtypepredicateobjectmap option:selected"
    //   ).text();

    //   jsonPredicateObjectMap.predicateObjectMap.push({
    //     predicate: predicate,
    //     objectType: objectType,
    //     object: object,
    //     termType: termType,
    //   });
    // } else if (valueofPredicateObjectMap == 3) {
    //   var predicate = $("#selectproperty option:selected").text();
    //   var objectType = "Ref_to_data_as_uri";

    //   var object = [];

    //   $("#predicateselectdatafield option:selected").each(function () {
    //     object.push({
    //       data: this.text
    //     });
    //   });

    //   var objectClass = $("#predicateselectclass option:selected").text();
    //   var termType = $(
    //     "#selecttermtypepredicateobjectmap option:selected"
    //   ).text();

    //   jsonPredicateObjectMap.predicateObjectMap.push({
    //     predicate: predicate,
    //     objectType: objectType,
    //     object: object,
    //     objectClass: objectClass,
    //     termType: termType,
    //   });
    // } else if (valueofPredicateObjectMap == 4) {
    //   var predicate = $("#selectproperty option:selected").text();
    //   var objectType = "Ref_to_TM_same_source";
    //   var object = $("#predicateselecttriplesmap option:selected").text();
    //   var termType = $(
    //     "#selecttermtypepredicateobjectmap option:selected"
    //   ).text();

    //   jsonPredicateObjectMap.predicateObjectMap.push({
    //     predicate: predicate,
    //     objectType: objectType,
    //     object: object,
    //     termType: termType,
    //   });
    // } else if (valueofPredicateObjectMap == 5) {
    //   var predicate = $("#selectproperty option:selected").text();
    //   var objectType = "Ref_to_TM_different_source";
    //   var object = $(
    //     "#predicateselecttriplesmapdifferentdata option:selected"
    //   ).text();
    //   var child = $("#joinconditionchild option:selected").text();
    //   var parent = $("#joinconditionparent").val();
    //   var termType = $(
    //     "#selecttermtypepredicateobjectmap option:selected"
    //   ).text();

    //   jsonPredicateObjectMap.predicateObjectMap.push({
    //     predicate: predicate,
    //     objectType: objectType,
    //     object: object,
    //     child: child,
    //     parent: parent,
    //     termType: termType,
    //   });
    // }

    const childrenCount = $('#first-container').children().length;

    for (var i = 1; i <= childrenCount; i++) {
      let valueofPredicateObjectMap = document.querySelector(`#selectobjecttype${i}`).value;

      if (valueofPredicateObjectMap == 1) {
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
      } else if (valueofPredicateObjectMap == 2) {
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
      } else if (valueofPredicateObjectMap == 3) {
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
      } else if (valueofPredicateObjectMap == 4) {
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
      } else if (valueofPredicateObjectMap == 5) {
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
    }



    jsonTripleMap.triplesMap.push({
      name: triplemapname,
      logicalSource: jsonLogicalSource.logicalSource,
      subjectMap: jsonSubjectMap.subjectMap,
      predicateObjectMap: jsonPredicateObjectMap.predicateObjectMap
    });


    console.log(JSON.stringify(jsonTripleMap));


    $(".predicateselecttriplesmap").append($('<option>', {
      text: triplemapname
    }));

    $(".predicateselecttriplesmapdifferentdata").append($('<option>', {
      text: triplemapname
    }));

    for (let i = childrenCount; i > 1; --i) {
      click = 1;
      disableremovebutton();
      $("#first-container").children().last().remove();
    }



    $("#triplemapname").val("");
    $("#datasourcepath").val("");
    $("#selectsubject").val("default").change();
    $("#selectfirstclass").val("default").change();
    $("#selecttypedatasource").val("default").change();

    $('#selectdatafield option:selected').prop("selected", false);
    $("#selectdatafield").trigger("chosen:updated");

    $("#selectclass").val("default").change();
    $("#selecttermtype").val("default").change();
    $(".selectpropertyvalue").val("default").change();
    $(".selectobjecttype").val("default").change();
    $("#selectclasssuggestion").val("default").change();
    $("#selectdatafieldsuggestion").val("default").change();


    // $("#predicateselectdatafield").val("default").change();
    $('#predicateselectdatafield option:selected').prop("selected", false);
    $("#predicateselectdatafield").trigger("chosen:updated");

    $("#predicateselectclass").val("default").change();
    $("#predicateselecttriplesmap").val("default").change();
    $("#predicateselecttriplesmapdifferentdata").val("default").change();
    $("#joinconditionchild").val("default").change();
    $(".selecttermtypepredicateobjectmap").val("default").change();
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

    jsonPredicateObjectMap = { predicateObjectMap: [] };
    jsonSubjectMap = { subjectMap: [] };
    jsonLogicalSource = { logicalSource: [] };
  });




  //old button to add another predicate object map

  // $("#addanotherpredicate").on("click", function () {


  //   var valueofPredicateObjectMap = $(
  //     "#selectobjecttype option:selected"
  //   ).val();

  //   if (valueofPredicateObjectMap == 1) {
  //     var predicate = $("#selectproperty option:selected").text();
  //     var objectType = "class";
  //     var object = $("#selectclasssuggestion option:selected").text();
  //     var termType = $(
  //       "#selecttermtypepredicateobjectmap option:selected"
  //     ).text();

  //     jsonPredicateObjectMap.predicateObjectMap.push({
  //       predicate: predicate,
  //       objectType: objectType,
  //       object: object,
  //       termType: termType,
  //     });
  //   } else if (valueofPredicateObjectMap == 2) {
  //     var predicate = $("#selectproperty option:selected").text();
  //     var objectType = "Ref_to_data";
  //     var object = $("#selectdatafieldsuggestion option:selected").text();
  //     var termType = $(
  //       "#selecttermtypepredicateobjectmap option:selected"
  //     ).text();

  //     jsonPredicateObjectMap.predicateObjectMap.push({
  //       predicate: predicate,
  //       objectType: objectType,
  //       object: object,
  //       termType: termType,
  //     });
  //   } else if (valueofPredicateObjectMap == 3) {
  //     var predicate = $("#selectproperty option:selected").text();
  //     var objectType = "Ref_to_data_as_uri";

  //     var object = []

  //     $("#predicateselectdatafield option:selected").each(function () {
  //       object.push({
  //         data: this.text
  //       });
  //     });
  //     var objectClass = $("#predicateselectclass option:selected").text();
  //     var termType = $(
  //       "#selecttermtypepredicateobjectmap option:selected"
  //     ).text();

  //     jsonPredicateObjectMap.predicateObjectMap.push({
  //       predicate: predicate,
  //       objectType: objectType,
  //       object: object,
  //       objectClass: objectClass,
  //       termType: termType,
  //     });
  //   } else if (valueofPredicateObjectMap == 4) {
  //     var predicate = $("#selectproperty option:selected").text();
  //     var objectType = "Ref_to_TM_same_source";
  //     var object = $("#predicateselecttriplesmap option:selected").text();
  //     var termType = $(
  //       "#selecttermtypepredicateobjectmap option:selected"
  //     ).text();

  //     jsonPredicateObjectMap.predicateObjectMap.push({
  //       predicate: predicate,
  //       objectType: objectType,
  //       object: object,
  //       termType: termType,
  //     });
  //   } else if (valueofPredicateObjectMap == 5) {
  //     var predicate = $("#selectproperty option:selected").text();
  //     var objectType = "Ref_to_TM_different_source";
  //     var object = $(
  //       "#predicateselecttriplesmapdifferentdata option:selected"
  //     ).text();
  //     var child = $("#joinconditionchild option:selected").text();
  //     var parent = $("#joinconditionparent").val();
  //     var termType = $(
  //       "#selecttermtypepredicateobjectmap option:selected"
  //     ).text();

  //     jsonPredicateObjectMap.predicateObjectMap.push({
  //       predicate: predicate,
  //       objectType: objectType,
  //       object: object,
  //       child: child,
  //       parent: parent,
  //       termType: termType,
  //     });
  //   }


  //   $("#selectproperty").val("default").change();
  //   $("#selectobjecttype").val("default").change();
  //   $("#selectclasssuggestion").val("default").change();
  //   $("#selectdatafieldsuggestion").val("default").change();

  //   // $("#predicateselectdatafield").val("default").change();
  //   $('#predicateselectdatafield option:selected').prop("selected", false);
  //   $("#predicateselectdatafield").trigger("chosen:updated");

  //   $("#predicateselectclass").val("default").change();
  //   $("#predicateselecttriplesmap").val("default").change();
  //   $("#predicateselecttriplesmapdifferentdata").val("default").change();
  //   $("#joinconditionchild").val("default").change();
  //   $("#selecttermtypepredicateobjectmap").val("default").change();
  //   $("#joinconditionparent").val("");
  // });




















  $("#sendjsonMap").on("click", function () {

    console.log(document.querySelector('#first-container'))

    console.log($('#first-container').children().length)

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






    // var valueofPredicateObjectMap = $(
    //   "#selectobjecttype option:selected"
    // ).val();

    // if (valueofPredicateObjectMap == 1) {
    //   var predicate = $("#selectproperty option:selected").text();
    //   var objectType = "class";
    //   var object = $("#selectclasssuggestion option:selected").text();
    //   var termType = $(
    //     "#selecttermtypepredicateobjectmap option:selected"
    //   ).text();

    //   jsonPredicateObjectMap.predicateObjectMap.push({
    //     predicate: predicate,
    //     objectType: objectType,
    //     object: object,
    //     termType: termType,
    //   });
    // } else if (valueofPredicateObjectMap == 2) {
    //   var predicate = $("#selectproperty option:selected").text();
    //   var objectType = "Ref_to_data";
    //   var object = $("#selectdatafieldsuggestion option:selected").text();
    //   var termType = $(
    //     "#selecttermtypepredicateobjectmap option:selected"
    //   ).text();

    //   jsonPredicateObjectMap.predicateObjectMap.push({
    //     predicate: predicate,
    //     objectType: objectType,
    //     object: object,
    //     termType: termType,
    //   });
    // } else if (valueofPredicateObjectMap == 3) {
    //   var predicate = $("#selectproperty option:selected").text();
    //   var objectType = "Ref_to_data_as_uri";

    //   var object = []

    //   $("#predicateselectdatafield option:selected").each(function () {
    //     object.push({
    //       data: this.text
    //     });
    //   });
    //   var objectClass = $("#predicateselectclass option:selected").text();
    //   var termType = $(
    //     "#selecttermtypepredicateobjectmap option:selected"
    //   ).text();

    //   jsonPredicateObjectMap.predicateObjectMap.push({
    //     predicate: predicate,
    //     objectType: objectType,
    //     object: object,
    //     objectClass: objectClass,
    //     termType: termType,
    //   });
    // } else if (valueofPredicateObjectMap == 4) {
    //   var predicate = $("#selectproperty option:selected").text();
    //   var objectType = "Ref_to_TM_same_source";
    //   var object = $("#predicateselecttriplesmap option:selected").text();
    //   var termType = $(
    //     "#selecttermtypepredicateobjectmap option:selected"
    //   ).text();

    //   jsonPredicateObjectMap.predicateObjectMap.push({
    //     predicate: predicate,
    //     objectType: objectType,
    //     object: object,
    //     termType: termType,
    //   });
    // } else if (valueofPredicateObjectMap == 5) {
    //   var predicate = $("#selectproperty option:selected").text();
    //   var objectType = "Ref_to_TM_different_source";
    //   var object = $(
    //     "#predicateselecttriplesmapdifferentdata option:selected"
    //   ).text();
    //   var child = $("#joinconditionchild option:selected").text();
    //   var parent = $("#joinconditionparent").val();
    //   var termType = $(
    //     "#selecttermtypepredicateobjectmap option:selected"
    //   ).text();

    //   jsonPredicateObjectMap.predicateObjectMap.push({
    //     predicate: predicate,
    //     objectType: objectType,
    //     object: object,
    //     child: child,
    //     parent: parent,
    //     termType: termType,
    //   });
    // }

    const childrenCount = $('#first-container').children().length;

    for (var i = 1; i <= childrenCount; i++) {
      let valueofPredicateObjectMap = document.querySelector(`#selectobjecttype${i}`).value;

      if (valueofPredicateObjectMap == 1) {
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
      } else if (valueofPredicateObjectMap == 2) {
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
      } else if (valueofPredicateObjectMap == 3) {
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
      } else if (valueofPredicateObjectMap == 4) {
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
      } else if (valueofPredicateObjectMap == 5) {
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


    }


    jsonTripleMap.triplesMap.push({
      name: triplemapname,
      logicalSource: jsonLogicalSource.logicalSource,
      subjectMap: jsonSubjectMap.subjectMap,
      predicateObjectMap: jsonPredicateObjectMap.predicateObjectMap
    });


    // console.log(JSON.stringify(jsonTripleMap));

    final.push(jsonTripleMap);

    console.log(JSON.stringify(final))



    $.ajax({
      type: "POST",
      url: "/readUserInput_triplesMap",
      data: JSON.stringify(final),
      contentType: "application/json; charset=utf-8",
      success: function (data) {
        // alert(data);
        alert("Mapping file has been generated successfully");

        $.ajax({
          url: '/downloadMappingFile',
          type: 'GET',
          contentType: "application/json",
          dataType: 'json',
          success: function (json) {
            alert("Mapping file hase been download to your folder")
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
          }
        })


        for (let i = childrenCount; i > 1; --i) {
          click = 1;
          disableremovebutton();
          $("#first-container").children().last().remove();
        }

        $("#triplemapname").val("");
        $("#datasourcepath").val("");
        $("#selectsubject").val("default").change();
        $("#selectfirstclass").val("default").change();
        $("#selecttypedatasource").val("default").change();

        $('#selectdatafield option:selected').prop("selected", false);
        $("#selectdatafield").trigger("chosen:updated");

        $("#selectclass").val("default").change();
        $("#selecttermtype").val("default").change();
        $(".selectpropertyvalue").val("default").change();
        $(".selectobjecttype").val("default").change();
        $("#selectclasssuggestion").val("default").change();
        $("#selectdatafieldsuggestion").val("default").change();


        // $("#predicateselectdatafield").val("default").change();
        $('#predicateselectdatafield option:selected').prop("selected", false);
        $("#predicateselectdatafield").trigger("chosen:updated");

        $("#predicateselectclass").val("default").change();
        $("#predicateselecttriplesmap").val("default").change();
        $("#predicateselecttriplesmapdifferentdata").val("default").change();
        $("#joinconditionchild").val("default").change();
        $(".selecttermtypepredicateobjectmap").val("default").change();
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

        jsonPredicateObjectMap = { predicateObjectMap: [] };
        jsonSubjectMap = { subjectMap: [] };
        jsonLogicalSource = { logicalSource: [] };

      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      },
    });
  });
});
