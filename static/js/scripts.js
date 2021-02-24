
var config = "";
var responseConfig = "";
var filename = "";




/* Selecting Number of Prefixes */
function GetNumberPre() {
  var pref = document.getElementById("pref").value;
  if (pref == 0) {
    pref01.style.display = "none";
    pref02.style.display = "none";
    pref03.style.display = "none";
    pref04.style.display = "none";
    pref05.style.display = "none";
    pref06.style.display = "none";
    pref07.style.display = "none";
    pref08.style.display = "none";
    pref09.style.display = "none";
    pref010.style.display = "none";
    pref011.style.display = "none";
  } else if (pref == 1) {
    pref01.style.display = "block";
    pref02.style.display = "none";
    pref03.style.display = "none";
    pref04.style.display = "none";
    pref05.style.display = "none";
    pref06.style.display = "none";
    pref07.style.display = "none";
    pref08.style.display = "none";
    pref09.style.display = "none";
    pref010.style.display = "none";
    pref011.style.display = "none";
  } else if (pref == 2) {
    pref01.style.display = "block";
    pref02.style.display = "block";
    pref03.style.display = "none";
    pref04.style.display = "none";
    pref05.style.display = "none";
    pref06.style.display = "none";
    pref07.style.display = "none";
    pref08.style.display = "none";
    pref09.style.display = "none";
    pref010.style.display = "none";
    pref011.style.display = "none";
  } else if (pref == 3) {
    pref01.style.display = "block";
    pref02.style.display = "block";
    pref03.style.display = "block";
    pref04.style.display = "none";
    pref05.style.display = "none";
    pref06.style.display = "none";
    pref07.style.display = "none";
    pref08.style.display = "none";
    pref09.style.display = "none";
    pref010.style.display = "none";
    pref011.style.display = "none";
  } else if (pref == 4) {
    pref01.style.display = "block";
    pref02.style.display = "block";
    pref03.style.display = "block";
    pref04.style.display = "block";
    pref05.style.display = "none";
    pref06.style.display = "none";
    pref07.style.display = "none";
    pref08.style.display = "none";
    pref09.style.display = "none";
    pref010.style.display = "none";
    pref011.style.display = "none";
  } else if (pref == 5) {
    pref01.style.display = "block";
    pref02.style.display = "block";
    pref03.style.display = "block";
    pref04.style.display = "block";
    pref05.style.display = "block";
    pref06.style.display = "none";
    pref07.style.display = "none";
    pref08.style.display = "none";
    pref09.style.display = "none";
    pref010.style.display = "none";
    pref011.style.display = "none";
  } else if (pref == 6) {
    pref01.style.display = "block";
    pref02.style.display = "block";
    pref03.style.display = "block";
    pref04.style.display = "block";
    pref05.style.display = "block";
    pref06.style.display = "block";
    pref07.style.display = "none";
    pref08.style.display = "none";
    pref09.style.display = "none";
    pref010.style.display = "none";
    pref011.style.display = "none";
  } else if (pref == 7) {
    pref01.style.display = "block";
    pref02.style.display = "block";
    pref03.style.display = "block";
    pref04.style.display = "block";
    pref05.style.display = "block";
    pref06.style.display = "block";
    pref07.style.display = "block";
    pref08.style.display = "none";
    pref09.style.display = "none";
    pref010.style.display = "none";
    pref011.style.display = "none";
  } else if (pref == 8) {
    pref01.style.display = "block";
    pref02.style.display = "block";
    pref03.style.display = "block";
    pref04.style.display = "block";
    pref05.style.display = "block";
    pref06.style.display = "block";
    pref07.style.display = "block";
    pref08.style.display = "block";
    pref09.style.display = "none";
    pref010.style.display = "none";
    pref011.style.display = "none";
  } else if (pref == 9) {
    pref01.style.display = "block";
    pref02.style.display = "block";
    pref03.style.display = "block";
    pref04.style.display = "block";
    pref05.style.display = "block";
    pref06.style.display = "block";
    pref07.style.display = "block";
    pref08.style.display = "block";
    pref09.style.display = "block";
    pref010.style.display = "none";
    pref011.style.display = "none";
  } else if (pref == 10) {
    pref01.style.display = "block";
    pref02.style.display = "block";
    pref03.style.display = "block";
    pref04.style.display = "block";
    pref05.style.display = "block";
    pref06.style.display = "block";
    pref07.style.display = "block";
    pref08.style.display = "block";
    pref09.style.display = "block";
    pref010.style.display = "block";
    pref011.style.display = "none";
  } else if (pref == 11) {
    pref01.style.display = "block";
    pref02.style.display = "block";
    pref03.style.display = "block";
    pref04.style.display = "block";
    pref05.style.display = "block";
    pref06.style.display = "block";
    pref07.style.display = "block";
    pref08.style.display = "block";
    pref09.style.display = "block";
    pref010.style.display = "block";
    pref011.style.display = "block";
  }
}



/* Generating Mapping Rule*/
function GenerateMR() {
  
	var downloadlink = document.getElementById('downloadlink');
	downloadlink.style.display = "block";
  
  var conc = "You can download the generated RML.";
  document.getElementById("demo").innerHTML = conc;
   filename = document.getElementById('filename');
  var pref = document.getElementById('pref'),
    output = document.getElementById('output'),
    labpre1 = document.getElementById('labpre1'),
    prefix1 = document.getElementById("prefix1"),
    labpre2 = document.getElementById('labpre2'),
    prefix2 = document.getElementById("prefix2"),
    labpre3 = document.getElementById('labpre3'),
    prefix3 = document.getElementById("prefix3"),
    labpre4 = document.getElementById('labpre4'),
    prefix4 = document.getElementById("prefix4"),
    labpre5 = document.getElementById('labpre5'),
    prefix5 = document.getElementById("prefix5"),
    labpre6 = document.getElementById('labpre6'),
    prefix6 = document.getElementById("prefix6"),
    labpre7 = document.getElementById('labpre7'),
    prefix7 = document.getElementById("prefix7"),
    labpre8 = document.getElementById('labpre8'),
    prefix8 = document.getElementById("prefix8"),
    labpre9 = document.getElementById('labpre9'),
    prefix9 = document.getElementById("prefix9"),
    labpre10 = document.getElementById('labpre10'),
    prefix10 = document.getElementById("prefix10"),
    labpre11 = document.getElementById('labpre11'),
    prefix11 = document.getElementById("prefix11");


 var forms = document.getElementsByTagName("form");
 var TM = document.getElementById("loopTM");
 var fun = document.getElementById("loopFun");
  var inputs;
  var selects;
  var tempResult = {};
  resultTM = [];
  for (var i = 0; i < forms.length; i++) {
    inputs = forms[i].getElementsByTagName("input");
    tempResult = {};
    for (var j = 0; j < inputs.length; j++) 
     tempResult[inputs[j].name] = inputs[j].value;    
    selects = forms[i].getElementsByTagName("select");
    for (var k = 0; k < selects.length; k++)
    tempResult[selects[k].name] = selects[k].value;
    resultTM.push(tempResult);
  
  }  
  // console.log(resultTM);
    
 for (var m = 0; m < forms.length; m ++) {
 // console.log(resultTM[m].sourceTM);
 // console.log(resultTM[m].sourceFormatTM);
 // console.log(resultTM[m].selectSubj);
 // console.log(resultTM[m].subjectMap);
 // console.log(resultTM[m].termType);
 console.log(resultTM[m]);

 // console.log(resultTM[m].predicate);
 // console.log(resultTM[m].selectObjType);
 // console.log(resultTM[m].object);
 // console.log(resultTM[m].dataType);
 // console.log(resultTM[m].termTypes);
 // console.log(resultTM[m].joinCondition);
 // console.log(resultTM[m].child);
 // console.log(resultTM[m].parent);

 // console.log(resultTM[m].functionMapName);
 // console.log(resultTM[m].source);
 // console.log(resultTM[m].sourceFormat);
 // console.log(resultTM[m].functionName);
 // console.log(resultTM[m].numParameter);

 // console.log(resultTM[m].parameter);
 // console.log(resultTM[m].selectParam);
 // console.log(resultTM[m].value);
 
// Adding index for POM, F, P!!!!!
	var k=1;
    var l=1;
    var n=1;
     for (var j=1; j <= forms.length; j++) {
        config = "[main]\nmapping_file_name : " + filename.value + "\nnumber_of_prefixes: " + pref.value + "\nnumber_of_TMs : " + TM.value + "\nnumber_of_FMs :" + fun.value + "\noutput_folder: " + output.value + "\n\n[prefixes]\npre1 : " + labpre1.value + "\nprefix1 : " + prefix1.value + "\npre2 : " + labpre2.value + "\nprefix2 : " + prefix2.value + "\npre3 : " + labpre3.value + "\nprefix3 : " + prefix3.value + "\npre4 : " + labpre4.value + "\nprefix4 : " + prefix4.value + "\npre5 : " + labpre5.value + "\nprefix5 :  " + prefix5.value + "\npre6 : " + labpre6.value + "\nprefix6 : " + prefix6.value + "\npre7 : " + labpre7.value + "\nprefix7 : " + prefix7.value + "\npre8 : " + labpre8.value + "\nprefix8 : " + prefix8.value + "\npre9 : " + labpre9.value + "\nprefix9 : " + prefix9.value + "\npre10 : " + labpre10.value + "\nprefix10 : " + prefix10.value + "\npre11 : " + labpre11.value + "\nprefix11 : " + prefix11.value + 
      "\n\n[TM"+j+"]\nname: TriplesMap1\nsource: " + resultTM[m].sourceTM + "\nsourceFormat: " + resultTM[m].sourceFormatTM + "\nsubjectType: " + resultTM[m].selectSubj + "\nsubjectMap: " + resultTM[m].subjectMap + "\ntermType: " + resultTM[m].termType + "\nnumber_of_POM: " + resultTM[m].numPoms + 
      "\n\n[TM"+j+"_POM"+k+"]\npredicate: " + resultTM[m].predicate + " \nobjectType: " + resultTM[m].selectObjType + "\nobject: " + resultTM[m].object + "\ndataType: " + resultTM[m].dataType + "\ntermType: " + resultTM[m].termTypes + "\njoinCondition: " + resultTM[m].joinCondition + "\nchild: " + resultTM[m].child + "\nparent: " + resultTM[m].parent +
      "\n\n[F"+l+"]\nfunctionMapName: " + resultTM[m].functionMapName + "\nsource: " + resultTM[m].source + "\nsourceFormat: " + resultTM[m].sourceFormat + "\nfunctionName: " + resultTM[m].functionName + "\nnumberOfParameters: " + resultTM[m].numParameter +
      "\n\n[F"+l+"P"+n+"]\nparameter: " + resultTM[m].parameter + "\nparameterType: " + resultTM[m].selectParam + "\nvalue: " + resultTM[m].value;
 }	
  }
  
  var settings = {
    //"url": "http://localhost:5000/easyRML/api.php",
    url: "/api/mappings",
    type: "POST",

    contenType: "text/plain",
    data : config,
   

    async: false,
  };
  $.ajax(settings).done(function (response) {
    if (response == true) {
      
    } else {
     
    }
    console.log(response);
    responseConfig = response;
  });
  
}


function getresponseConfig() {
  return responseConfig;
}


function nameOutput() {
  var outputLocal = document.getElementById('filename').value;
  return outputLocal;
}
