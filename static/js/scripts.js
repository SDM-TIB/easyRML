
var config = "";
var responseConfig = "";
var filename = "";
var tripleColor = "";
var mapColor = mapColor2 = mapColor3 = mapColor4 = mapColor5 = mapColor6 = mapColor7 = mapColor8 = mapColor9 = "";
var functionColor = fun = FUN1 = FUN2 = FUN3 = FUN4 = FUN5 = FUN6 = FUN7 = FUN8 = FUN9 =
 propertyColor = nop = F11P1 = F11P2 = F11P3 = F11P4 = F11P5 = F11P6 = F11P7 = F11P8 = F11P9 = propertyColor2 = nop2 =  F21P1 = F21P2 = F21P3 = F21P4 = F21P5 = F21P6 = F21P7 = F21P8 = F21P9 = propertyColor3 = nop3 =  F31P1 = F31P2 = F31P3 = F31P4 = F31P5 = F31P6 = F31P7 = F31P8 = F31P9 = propertyColor4 = nop4 =  F41P1 = F41P2 = F41P3 = F41P4 = F41P5 = F41P6 = F41P7 = F41P8 = F41P9 = propertyColor5 = nop5 =  F51P1 = F51P2 = F51P3 = F51P4 = F51P5 = F51P6 = F51P7 = F51P8 = F51P9 =
 propertyColor6 = nop6 = F61P1 = F61P2 = F61P3 = F61P4 = F61P5 = F61P6 = F61P7 = F61P8 = F61P9 = propertyColor7 = nop7 =  F71P1 = F71P2 = F71P3 = F71P4 = F71P5 = F71P6 = F71P7 = F71P8 = F71P9 = propertyColor8 = nop8 =  F81P1 = F81P2 = F81P3 = F81P4 = F81P5 = F81P6 = F81P7 = F81P8 = F81P9 = propertyColor9 = nop =  F91P1 = F91P2 = F91P3 = F91P4 = F91P5 = F91P6 = F91P7 = F91P8 = F91P9 =
"";



function GetVariables() {
mapColor = document.getElementById("mapColor");
mapColor2 = document.getElementById("mapColor2");
mapColor3 = document.getElementById("mapColor3");
mapColor4 = document.getElementById("mapColor4");
mapColor5 = document.getElementById("mapColor5");
mapColor6 = document.getElementById("mapColor6");
mapColor7 = document.getElementById("mapColor7");
mapColor8 = document.getElementById("mapColor8");
mapColor9 = document.getElementById("mapColor9");
functionColor = document.getElementById("functionColor");
fun = document.getElementById("fun").value;
FUN1 = document.getElementById("F11-1");
FUN2 = document.getElementById("F21-1");
FUN3 = document.getElementById("F31-1");
FUN4 = document.getElementById("F41-1");
FUN5 = document.getElementById("F51-1");
FUN6 = document.getElementById("F61-1");
FUN7 = document.getElementById("F71-1");
FUN8 = document.getElementById("F81-1");
FUN9 = document.getElementById("F91-1");
propertyColor = document.getElementById("propertyColor");
nop = document.getElementById("nop").value;
F11P1 = document.getElementById("F1-1P1");
F11P2 = document.getElementById("F1-1P2");
F11P3 = document.getElementById("F1-1P3");
F11P4 = document.getElementById("F1-1P4");
F11P5 = document.getElementById("F1-1P5");
F11P6 = document.getElementById("F1-1P6");
F11P7 = document.getElementById("F1-1P7");
F11P8 = document.getElementById("F1-1P8");
F11P9 = document.getElementById("F1-1P9");
propertyColor2 = document.getElementById("propertyColor2");
nop2 = document.getElementById("nop2").value;
F21P1 = document.getElementById("F2-1P1");
F21P2 = document.getElementById("F2-1P2");
F21P3 = document.getElementById("F2-1P3");
F21P4 = document.getElementById("F2-1P4");
F21P5 = document.getElementById("F2-1P5");
F21P6 = document.getElementById("F2-1P6");
F21P7 = document.getElementById("F2-1P7");
F21P8 = document.getElementById("F2-1P8");
F21P9 = document.getElementById("F2-1P9");
propertyColor3 = document.getElementById("propertyColor3");
nop3 = document.getElementById("nop3").value;
F31P1 = document.getElementById("F3-1P1");
F31P2 = document.getElementById("F3-1P2");
F31P3 = document.getElementById("F3-1P3");
F31P4 = document.getElementById("F3-1P4");
F31P5 = document.getElementById("F3-1P5");
F31P6 = document.getElementById("F3-1P6");
F31P7 = document.getElementById("F3-1P7");
F31P8 = document.getElementById("F3-1P8");
F31P9 = document.getElementById("F3-1P9");
propertyColor4 = document.getElementById("propertyColor4");
nop4 = document.getElementById("nop4").value;
F41P1 = document.getElementById("F4-1P1");
F41P2 = document.getElementById("F4-1P2");
F41P3 = document.getElementById("F4-1P3");
F41P4 = document.getElementById("F4-1P4");
F41P5 = document.getElementById("F4-1P5");
F41P6 = document.getElementById("F4-1P6");
F41P7 = document.getElementById("F4-1P7");
F41P8 = document.getElementById("F4-1P8");
F41P9 = document.getElementById("F4-1P9");
propertyColor5 = document.getElementById("propertyColor5");
nop5 = document.getElementById("nop5").value;
F51P1 = document.getElementById("F5-1P1");
F51P2 = document.getElementById("F5-1P2");
F51P3 = document.getElementById("F5-1P3");
F51P4 = document.getElementById("F5-1P4");
F51P5 = document.getElementById("F5-1P5");
F51P6 = document.getElementById("F5-1P6");
F51P7 = document.getElementById("F5-1P7");
F51P8 = document.getElementById("F5-1P8");
F51P9 = document.getElementById("F5-1P9");
propertyColor6 = document.getElementById("propertyColor6");
nop6 = document.getElementById("nop6").value;
F61P1 = document.getElementById("F6-1P1");
F61P2 = document.getElementById("F6-1P2");
F61P3 = document.getElementById("F6-1P3");
F61P4 = document.getElementById("F6-1P4");
F61P5 = document.getElementById("F6-1P5");
F61P6 = document.getElementById("F6-1P6");
F61P7 = document.getElementById("F6-1P7");
F61P8 = document.getElementById("F6-1P8");
F61P9 = document.getElementById("F6-1P9");
propertyColor7 = document.getElementById("propertyColor7");
nop7 = document.getElementById("nop7").value;
F71P1 = document.getElementById("F7-1P1");
F71P2 = document.getElementById("F7-1P2");
F71P3 = document.getElementById("F7-1P3");
F71P4 = document.getElementById("F7-1P4");
F71P5 = document.getElementById("F7-1P5");
F71P6 = document.getElementById("F7-1P6");
F71P7 = document.getElementById("F7-1P7");
F71P8 = document.getElementById("F7-1P8");
F71P9 = document.getElementById("F7-1P9");
propertyColor8 = document.getElementById("propertyColor8");
nop8 = document.getElementById("nop8").value;
F81P1 = document.getElementById("F8-1P1");
F81P2 = document.getElementById("F8-1P2");
F81P3 = document.getElementById("F8-1P3");
F81P4 = document.getElementById("F8-1P4");
F81P5 = document.getElementById("F8-1P5");
F81P6 = document.getElementById("F8-1P6");
F81P7 = document.getElementById("F8-1P7");
F81P8 = document.getElementById("F8-1P8");
F81P9 = document.getElementById("F8-1P9");
propertyColor9 = document.getElementById("propertyColor9");
nop9 = document.getElementById("nop9").value;
F91P1 = document.getElementById("F9-1P1");
F91P2 = document.getElementById("F9-1P2");
F91P3 = document.getElementById("F9-1P3");
F91P4 = document.getElementById("F9-1P4");
F91P5 = document.getElementById("F9-1P5");
F91P6 = document.getElementById("F9-1P6");
F91P7 = document.getElementById("F9-1P7");
F91P8 = document.getElementById("F9-1P8");
F91P9 = document.getElementById("F9-1P9");
}



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

/* Counting Triples Map */
function countNumberTM() {
  GetVariables();
  var tm = document.getElementById("tm").value;
  tripleColor = document.getElementById("tripleColor");
  var TM1 = document.getElementById("TM1");
  var TM2 = document.getElementById("TM2");
  var TM3 = document.getElementById("TM3");
  var TM4 = document.getElementById("TM4");
  var TM5 = document.getElementById("TM5");
  var TM6 = document.getElementById("TM6");
  var TM7 = document.getElementById("TM7");
  var TM8 = document.getElementById("TM8");
  var TM9 = document.getElementById("TM9");

  if (tm == 0) {
    tripleColor.style.display = "none";
    TM1.style.display = "none";
    TM2.style.display = "none";
    TM3.style.display = "none";
    TM4.style.display = "none";
    TM5.style.display = "none";
    TM6.style.display = "none";
    TM7.style.display = "none";
    TM8.style.display = "none";
    TM9.style.display = "none";
  } else if (tm == 1) {
    tripleColor.style.display = "block";
    TM1.style.display = "block";
    TM2.style.display = "none";
    TM3.style.display = "none";
    TM4.style.display = "none";
    TM5.style.display = "none";
    TM6.style.display = "none";
    TM7.style.display = "none";
    TM8.style.display = "none";
    TM9.style.display = "none";
    mapColor2.style.display = "none";
    mapColor3.style.display = "none";
    mapColor4.style.display = "none";
    mapColor5.style.display = "none";
    mapColor6.style.display = "none";
    mapColor7.style.display = "none";
    mapColor8.style.display = "none";
    mapColor9.style.display = "none";
  } else if (tm == 2) {
    tripleColor.style.display = "block";
    TM1.style.display = "block";
    TM2.style.display = "block";
    TM3.style.display = "none";
    TM4.style.display = "none";
    TM5.style.display = "none";
    TM6.style.display = "none";
    TM7.style.display = "none";
    TM8.style.display = "none";
    TM9.style.display = "none";
    mapColor3.style.display = "none";
    mapColor4.style.display = "none";
    mapColor5.style.display = "none";
    mapColor6.style.display = "none";
    mapColor7.style.display = "none";
    mapColor8.style.display = "none";
    mapColor9.style.display = "none";
  } else if (tm == 3) {
    tripleColor.style.display = "block";
    TM1.style.display = "block";
    TM2.style.display = "block";
    TM3.style.display = "block";
    TM4.style.display = "none";
    TM5.style.display = "none";
    TM6.style.display = "none";
    TM7.style.display = "none";
    TM8.style.display = "none";
    TM9.style.display = "none";
    mapColor4.style.display = "none";
    mapColor5.style.display = "none";
    mapColor6.style.display = "none";
    mapColor7.style.display = "none";
    mapColor8.style.display = "none";
    mapColor9.style.display = "none";
  } else if (tm == 4) {
    tripleColor.style.display = "block";
    TM1.style.display = "block";
    TM2.style.display = "block";
    TM3.style.display = "block";
    TM4.style.display = "block";
    TM5.style.display = "none";
    TM6.style.display = "none";
    TM7.style.display = "none";
    TM8.style.display = "none";
    TM9.style.display = "none";
    mapColor5.style.display = "none";
    mapColor6.style.display = "none";
    mapColor7.style.display = "none";
    mapColor8.style.display = "none";
    mapColor9.style.display = "none";
  } else if (tm == 5) {
    tripleColor.style.display = "block";
    TM1.style.display = "block";
    TM2.style.display = "block";
    TM3.style.display = "block";
    TM4.style.display = "block";
    TM5.style.display = "block";
    TM6.style.display = "none";
    TM7.style.display = "none";
    TM8.style.display = "none";
    TM9.style.display = "none";
    mapColor6.style.display = "none";
    mapColor7.style.display = "none";
    mapColor8.style.display = "none";
    mapColor9.style.display = "none";
  } else if (tm == 6) {
    tripleColor.style.display = "block";
    TM1.style.display = "block";
    TM2.style.display = "block";
    TM3.style.display = "block";
    TM4.style.display = "block";
    TM5.style.display = "block";
    TM6.style.display = "block";
    TM7.style.display = "none";
    TM8.style.display = "none";
    TM9.style.display = "none";
    mapColor7.style.display = "none";
    mapColor8.style.display = "none";
    mapColor9.style.display = "none";
  } else if (tm == 7) {
    tripleColor.style.display = "block";
    TM1.style.display = "block";
    TM2.style.display = "block";
    TM3.style.display = "block";
    TM4.style.display = "block";
    TM5.style.display = "block";
    TM6.style.display = "block";
    TM7.style.display = "block";
    TM8.style.display = "none";
    TM9.style.display = "none";
    mapColor8.style.display = "none";
    mapColor9.style.display = "none";
  } else if (tm == 8) {
    tripleColor.style.display = "block";
    TM1.style.display = "block";
    TM2.style.display = "block";
    TM3.style.display = "block";
    TM4.style.display = "block";
    TM5.style.display = "block";
    TM6.style.display = "block";
    TM7.style.display = "block";
    TM8.style.display = "block";
    TM9.style.display = "none";
    mapColor9.style.display = "none";
  } else if (tm == 9) {
    tripleColor.style.display = "block";
    TM1.style.display = "block";
    TM2.style.display = "block";
    TM3.style.display = "block";
    TM4.style.display = "block";
    TM5.style.display = "block";
    TM6.style.display = "block";
    TM7.style.display = "block";
    TM8.style.display = "block";
    TM9.style.display = "block";
  }

}

/* Counting Triples Map */
function countNumberPOM() {  
  GetVariables();
  var pom = document.getElementById("pom").value;
  var POM11 = document.getElementById("POM1-1");
  var POM21 = document.getElementById("POM2-1");
  var POM31 = document.getElementById("POM3-1");
  var POM41 = document.getElementById("POM4-1");
  var POM51 = document.getElementById("POM5-1");
  var POM61 = document.getElementById("POM6-1");
  var POM71 = document.getElementById("POM7-1");
  var POM81 = document.getElementById("POM8-1");
  var POM91 = document.getElementById("POM9-1");

  if (pom == 0) {
    mapColor.style.display = "none";
    POM11.style.display = "none";
    POM21.style.display = "none";
    POM31.style.display = "none";
    POM41.style.display = "none";
    POM51.style.display = "none";
    POM61.style.display = "none";
    POM71.style.display = "none";
    POM81.style.display = "none";
    POM91.style.display = "none";
  } else if (pom == 1) {
    mapColor.style.display = "block";
    POM11.style.display = "block";
    POM21.style.display = "none";
    POM31.style.display = "none";
    POM41.style.display = "none";
    POM51.style.display = "none";
    POM61.style.display = "none";
    POM71.style.display = "none";
    POM81.style.display = "none";
    POM91.style.display = "none";
  } else if (pom == 2) {
    mapColor.style.display = "block";
    POM11.style.display = "block";
    POM21.style.display = "block";
    POM31.style.display = "none";
    POM41.style.display = "none";
    POM51.style.display = "none";
    POM61.style.display = "none";
    POM71.style.display = "none";
    POM81.style.display = "none";
    POM91.style.display = "none";
  } else if (pom == 3) {
    mapColor.style.display = "block";
    POM11.style.display = "block";
    POM21.style.display = "block";
    POM31.style.display = "block";
    POM41.style.display = "none";
    POM51.style.display = "none";
    POM61.style.display = "none";
    POM71.style.display = "none";
    POM81.style.display = "none";
    POM91.style.display = "none";
  } else if (pom == 4) {
    mapColor.style.display = "block";
    POM11.style.display = "block";
    POM21.style.display = "block";
    POM31.style.display = "block";
    POM41.style.display = "block";
    POM51.style.display = "none";
    POM61.style.display = "none";
    POM71.style.display = "none";
    POM81.style.display = "none";
    POM91.style.display = "none";
  } else if (pom == 5) {
    mapColor.style.display = "block";
    POM11.style.display = "block";
    POM21.style.display = "block";
    POM31.style.display = "block";
    POM41.style.display = "block";
    POM51.style.display = "block";
    POM61.style.display = "none";
    POM71.style.display = "none";
    POM81.style.display = "none";
    POM91.style.display = "none";
  } else if (pom == 6) {
    mapColor.style.display = "block";
    POM11.style.display = "block";
    POM21.style.display = "block";
    POM31.style.display = "block";
    POM41.style.display = "block";
    POM51.style.display = "block";
    POM61.style.display = "block";
    POM71.style.display = "none";
    POM81.style.display = "none";
    POM91.style.display = "none";
  } else if (pom == 7) {
    mapColor.style.display = "block";
    POM11.style.display = "block";
    POM21.style.display = "block";
    POM31.style.display = "block";
    POM41.style.display = "block";
    POM51.style.display = "block";
    POM61.style.display = "block";
    POM71.style.display = "block";
    POM81.style.display = "none";
    POM91.style.display = "none";
  } else if (pom == 8) {
    mapColor.style.display = "block";
    POM11.style.display = "block";
    POM21.style.display = "block";
    POM31.style.display = "block";
    POM41.style.display = "block";
    POM51.style.display = "block";
    POM61.style.display = "block";
    POM71.style.display = "block";
    POM81.style.display = "block";
    POM91.style.display = "none";
  } else if (pom == 9) {
    mapColor.style.display = "block";
    POM11.style.display = "block";
    POM21.style.display = "block";
    POM31.style.display = "block";
    POM41.style.display = "block";
    POM51.style.display = "block";
    POM61.style.display = "block";
    POM71.style.display = "block";
    POM81.style.display = "block";
    POM91.style.display = "block";
  }
}


/* Selecting joinCondition*/
function GetSelectedjoinCondition() {

  var joinCondition = document.getElementById("joinCondition").value;
  var fieldchildparent = document.getElementById("field-child-parent");

  
  if (joinCondition == "yes") {
    
    fieldchildparent.style.display = joinCondition == "yes" ? "block" : "none";
    //GetChildParent();
  }
  else if (joinCondition == "no") {
    
    fieldchildparent.style.display = joinCondition == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
// function GetChildParent() {
//   document.getElementById("resultjoinCondition").innerHTML = "Select child and parent.";
//   var child = document.getElementById("child").value;
//   document.getElementById("resultChild").innerHTML = "child: " + child;
//   var parents = document.getElementById("parent").value;
//   document.getElementById("resultParent").innerHTML = "parent: " + parents;
// }

/* ====================POM2-1========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition2() {
  var joinCondition2 = document.getElementById("joinCondition2").value;
  var fieldchildparent2 = document.getElementById("field-child-parent2");


  if (joinCondition2 == "yes") {
    fieldchildparent2.style.display = joinCondition2 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition2 == "no") {
    fieldchildparent2.style.display = joinCondition2 == "no" ? "none" : "block";
  } 
}



/* ====================POM3-1========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition3() {
 var joinCondition3 = document.getElementById("joinCondition3").value;
  var fieldchildparent3 = document.getElementById("field-child-parent3");


  if (joinCondition3 == "yes") {
    fieldchildparent3.style.display = joinCondition3 == "yes" ? "block" : "none";
  
  }
  else if (joinCondition3 == "no") {
    fieldchildparent3.style.display = joinCondition3 == "no" ? "none" : "block";
  } 
}



/* Selecting joinCondition*/
function GetSelectedjoinCondition4() {
  var joinCondition4 = document.getElementById("joinCondition4").value;
  var fieldchildparent4 = document.getElementById("field-child-parent4");


  if (joinCondition4 == "yes") {
    fieldchildparent4.style.display = joinCondition4 == "yes" ? "block" : "none";
  }
  else if (joinCondition4 == "no") {
    fieldchildparent4.style.display = joinCondition4 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition5() {
  var joinCondition5 = document.getElementById("joinCondition5").value;
  var fieldchildparent5 = document.getElementById("field-child-parent5");


  if (joinCondition5 == "yes") {
    fieldchildparent5.style.display = joinCondition5 == "yes" ? "block" : "none";
  }
  else if (joinCondition5 == "no") {
    fieldchildparent5.style.display = joinCondition5 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition6() {
  var joinCondition6 = document.getElementById("joinCondition6").value;
  var fieldchildparent6 = document.getElementById("field-child-parent6");


  if (joinCondition6 == "yes") {
    fieldchildparent6.style.display = joinCondition6 == "yes" ? "block" : "none";
  }
  else if (joinCondition6 == "no") {
    fieldchildparent6.style.display = joinCondition6 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition7() {
  var joinCondition7 = document.getElementById("joinCondition7").value;
  var fieldchildparent7 = document.getElementById("field-child-parent7");


  if (joinCondition7 == "yes") {
    fieldchildparent7.style.display = joinCondition7 == "yes" ? "block" : "none";
  }
  else if (joinCondition7 == "no") {
    fieldchildparent7.style.display = joinCondition7 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition8() {
  var joinCondition8 = document.getElementById("joinCondition8").value;
  var fieldchildparent8 = document.getElementById("field-child-parent8");


  if (joinCondition8 == "yes") {
    fieldchildparent8.style.display = joinCondition8 == "yes" ? "block" : "none";
  }
  else if (joinCondition8 == "no") {
    fieldchildparent8.style.display = joinCondition8 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition9() {
  var joinCondition9 = document.getElementById("joinCondition9").value;
  var fieldchildparent9 = document.getElementById("field-child-parent9");


  if (joinCondition9 == "yes") {
    fieldchildparent9.style.display = joinCondition9 == "yes" ? "block" : "none";
  }
  else if (joinCondition9 == "no") {
    fieldchildparent9.style.display = joinCondition9 == "no" ? "none" : "block";
  } 
}





/* Selecting joinCondition*/
function GetSelectedjoinCondition42() {
  var joinCondition42 = document.getElementById("joinCondition4-2").value;
  var fieldchildparent42 = document.getElementById("field-child-parent4-2");


  if (joinCondition42 == "yes") {
    fieldchildparent42.style.display = joinCondition42 == "yes" ? "block" : "none";
  }
  else if (joinCondition42 == "no") {
    fieldchildparent42.style.display = joinCondition42 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition43() {
  var joinCondition43 = document.getElementById("joinCondition4-3").value;
  var fieldchildparent43 = document.getElementById("field-child-parent4-3");


  if (joinCondition43 == "yes") {
    fieldchildparent43.style.display = joinCondition43 == "yes" ? "block" : "none";
  }
  else if (joinCondition43 == "no") {
    fieldchildparent43.style.display = joinCondition43 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition44() {
  var joinCondition44 = document.getElementById("joinCondition4-4").value;
  var fieldchildparent44 = document.getElementById("field-child-parent4-4");


  if (joinCondition44 == "yes") {
    fieldchildparent44.style.display = joinCondition44 == "yes" ? "block" : "none";
  }
  else if (joinCondition44 == "no") {
    fieldchildparent44.style.display = joinCondition44 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition45() {
  var joinCondition45 = document.getElementById("joinCondition4-5").value;
  var fieldchildparent45 = document.getElementById("field-child-parent4-5");


  if (joinCondition45 == "yes") {
    fieldchildparent45.style.display = joinCondition45 == "yes" ? "block" : "none";
  }
  else if (joinCondition45 == "no") {
    fieldchildparent45.style.display = joinCondition45 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition46() {
  var joinCondition46 = document.getElementById("joinCondition4-6").value;
  var fieldchildparent46 = document.getElementById("field-child-parent4-6");


  if (joinCondition46 == "yes") {
    fieldchildparent46.style.display = joinCondition46 == "yes" ? "block" : "none";
  }
  else if (joinCondition46 == "no") {
    fieldchildparent46.style.display = joinCondition46 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition47() {
  var joinCondition47 = document.getElementById("joinCondition4-7").value;
  var fieldchildparent47 = document.getElementById("field-child-parent4-7");


  if (joinCondition47 == "yes") {
    fieldchildparent47.style.display = joinCondition47 == "yes" ? "block" : "none";
  }
  else if (joinCondition47 == "no") {
    fieldchildparent47.style.display = joinCondition47 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition48() {
  var joinCondition48 = document.getElementById("joinCondition4-8").value;
  var fieldchildparent48 = document.getElementById("field-child-parent4-8");


  if (joinCondition48 == "yes") {
    fieldchildparent48.style.display = joinCondition48 == "yes" ? "block" : "none";
  }
  else if (joinCondition48 == "no") {
    fieldchildparent48.style.display = joinCondition48 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition49() {
  var joinCondition49 = document.getElementById("joinCondition4-9").value;
  var fieldchildparent49 = document.getElementById("field-child-parent4-9");


  if (joinCondition49 == "yes") {
    fieldchildparent49.style.display = joinCondition49 == "yes" ? "block" : "none";
  }
  else if (joinCondition49 == "no") {
    fieldchildparent49.style.display = joinCondition49 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition52() {
  var joinCondition52 = document.getElementById("joinCondition5-2").value;
  var fieldchildparent52 = document.getElementById("field-child-parent5-2");


  if (joinCondition52 == "yes") {
    fieldchildparent52.style.display = joinCondition52 == "yes" ? "block" : "none";
  }
  else if (joinCondition52 == "no") {
    fieldchildparent52.style.display = joinCondition52 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition53() {
  var joinCondition53 = document.getElementById("joinCondition5-3").value;
  var fieldchildparent53 = document.getElementById("field-child-parent5-3");


  if (joinCondition53 == "yes") {
    fieldchildparent53.style.display = joinCondition53 == "yes" ? "block" : "none";
  }
  else if (joinCondition53 == "no") {
    fieldchildparent53.style.display = joinCondition53 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition54() {
  var joinCondition54 = document.getElementById("joinCondition5-4").value;
  var fieldchildparent54 = document.getElementById("field-child-parent5-4");


  if (joinCondition54 == "yes") {
    fieldchildparent54.style.display = joinCondition54 == "yes" ? "block" : "none";
  }
  else if (joinCondition54 == "no") {
    fieldchildparent54.style.display = joinCondition54 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition55() {
  var joinCondition55 = document.getElementById("joinCondition5-5").value;
  var fieldchildparent55 = document.getElementById("field-child-parent5-5");


  if (joinCondition55 == "yes") {
    fieldchildparent55.style.display = joinCondition55 == "yes" ? "block" : "none";
  }
  else if (joinCondition55 == "no") {
    fieldchildparent55.style.display = joinCondition55 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition56() {
  var joinCondition56 = document.getElementById("joinCondition5-6").value;
  var fieldchildparent56 = document.getElementById("field-child-parent5-6");


  if (joinCondition56 == "yes") {
    fieldchildparent56.style.display = joinCondition56 == "yes" ? "block" : "none";
  }
  else if (joinCondition56 == "no") {
    fieldchildparent56.style.display = joinCondition56 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition57() {
  var joinCondition57 = document.getElementById("joinCondition5-7").value;
  var fieldchildparent57 = document.getElementById("field-child-parent5-7");


  if (joinCondition57 == "yes") {
    fieldchildparent57.style.display = joinCondition57 == "yes" ? "block" : "none";
  }
  else if (joinCondition57 == "no") {
    fieldchildparent57.style.display = joinCondition57 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition58() {
  var joinCondition58 = document.getElementById("joinCondition5-8").value;
  var fieldchildparent58 = document.getElementById("field-child-parent5-8");


  if (joinCondition58 == "yes") {
    fieldchildparent58.style.display = joinCondition58 == "yes" ? "block" : "none";
  }
  else if (joinCondition58 == "no") {
    fieldchildparent58.style.display = joinCondition58 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition59() {
  var joinCondition59 = document.getElementById("joinCondition5-9").value;
  var fieldchildparent59 = document.getElementById("field-child-parent5-9");


  if (joinCondition59 == "yes") {
    fieldchildparent59.style.display = joinCondition59 == "yes" ? "block" : "none";
  }
  else if (joinCondition59 == "no") {
    fieldchildparent59.style.display = joinCondition59 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition62() {
  var joinCondition62 = document.getElementById("joinCondition6-2").value;
  var fieldchildparent62 = document.getElementById("field-child-parent6-2");


  if (joinCondition62 == "yes") {
    fieldchildparent62.style.display = joinCondition62 == "yes" ? "block" : "none";
  }
  else if (joinCondition62 == "no") {
    fieldchildparent62.style.display = joinCondition62 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition63() {
  var joinCondition63 = document.getElementById("joinCondition6-3").value;
  var fieldchildparent63 = document.getElementById("field-child-parent6-3");


  if (joinCondition63 == "yes") {
    fieldchildparent63.style.display = joinCondition63 == "yes" ? "block" : "none";
  }
  else if (joinCondition63 == "no") {
    fieldchildparent63.style.display = joinCondition63 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition64() {
  var joinCondition64 = document.getElementById("joinCondition6-4").value;
  var fieldchildparent64 = document.getElementById("field-child-parent6-4");


  if (joinCondition64 == "yes") {
    fieldchildparent64.style.display = joinCondition64 == "yes" ? "block" : "none";
  }
  else if (joinCondition64 == "no") {
    fieldchildparent64.style.display = joinCondition64 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition65() {
  var joinCondition65 = document.getElementById("joinCondition6-5").value;
  var fieldchildparent65 = document.getElementById("field-child-parent6-5");


  if (joinCondition65 == "yes") {
    fieldchildparent65.style.display = joinCondition65 == "yes" ? "block" : "none";
  }
  else if (joinCondition65 == "no") {
    fieldchildparent65.style.display = joinCondition65 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition66() {
  var joinCondition66 = document.getElementById("joinCondition6-6").value;
  var fieldchildparent66 = document.getElementById("field-child-parent6-6");


  if (joinCondition66 == "yes") {
    fieldchildparent66.style.display = joinCondition66 == "yes" ? "block" : "none";
  }
  else if (joinCondition66 == "no") {
    fieldchildparent66.style.display = joinCondition66 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition67() {
  var joinCondition67 = document.getElementById("joinCondition6-7").value;
  var fieldchildparent67 = document.getElementById("field-child-parent6-7");


  if (joinCondition67 == "yes") {
    fieldchildparent67.style.display = joinCondition67 == "yes" ? "block" : "none";
  }
  else if (joinCondition67 == "no") {
    fieldchildparent67.style.display = joinCondition67 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition68() {
  var joinCondition68 = document.getElementById("joinCondition6-8").value;
  var fieldchildparent68 = document.getElementById("field-child-parent6-8");


  if (joinCondition68 == "yes") {
    fieldchildparent68.style.display = joinCondition68 == "yes" ? "block" : "none";
  }
  else if (joinCondition68 == "no") {
    fieldchildparent68.style.display = joinCondition68 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition69() {
  var joinCondition69 = document.getElementById("joinCondition6-9").value;
  var fieldchildparent69 = document.getElementById("field-child-parent6-9");


  if (joinCondition69 == "yes") {
    fieldchildparent69.style.display = joinCondition69 == "yes" ? "block" : "none";
  }
  else if (joinCondition69 == "no") {
    fieldchildparent69.style.display = joinCondition69 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition72() {
  var joinCondition72 = document.getElementById("joinCondition7-2").value;
  var fieldchildparent72 = document.getElementById("field-child-parent7-2");


  if (joinCondition72 == "yes") {
    fieldchildparent72.style.display = joinCondition72 == "yes" ? "block" : "none";
  }
  else if (joinCondition72 == "no") {
    fieldchildparent72.style.display = joinCondition72 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition73() {
  var joinCondition73 = document.getElementById("joinCondition7-3").value;
  var fieldchildparent73 = document.getElementById("field-child-parent7-3");


  if (joinCondition73 == "yes") {
    fieldchildparent73.style.display = joinCondition73 == "yes" ? "block" : "none";
  }
  else if (joinCondition73 == "no") {
    fieldchildparent73.style.display = joinCondition73 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition74() {
  var joinCondition74 = document.getElementById("joinCondition7-4").value;
  var fieldchildparent74 = document.getElementById("field-child-parent7-4");


  if (joinCondition74 == "yes") {
    fieldchildparent74.style.display = joinCondition74 == "yes" ? "block" : "none";
  }
  else if (joinCondition74 == "no") {
    fieldchildparent74.style.display = joinCondition74 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition75() {
  var joinCondition75 = document.getElementById("joinCondition7-5").value;
  var fieldchildparent75 = document.getElementById("field-child-parent7-5");


  if (joinCondition75 == "yes") {
    fieldchildparent75.style.display = joinCondition75 == "yes" ? "block" : "none";
  }
  else if (joinCondition75 == "no") {
    fieldchildparent75.style.display = joinCondition75 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition76() {
  var joinCondition76 = document.getElementById("joinCondition7-6").value;
  var fieldchildparent76 = document.getElementById("field-child-parent7-6");


  if (joinCondition76 == "yes") {
    fieldchildparent76.style.display = joinCondition76 == "yes" ? "block" : "none";
  }
  else if (joinCondition76 == "no") {
    fieldchildparent76.style.display = joinCondition76 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition77() {
  var joinCondition77 = document.getElementById("joinCondition7-7").value;
  var fieldchildparent77 = document.getElementById("field-child-parent7-7");


  if (joinCondition77 == "yes") {
    fieldchildparent77.style.display = joinCondition77 == "yes" ? "block" : "none";
  }
  else if (joinCondition77 == "no") {
    fieldchildparent77.style.display = joinCondition77 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition78() {
  var joinCondition78 = document.getElementById("joinCondition7-8").value;
  var fieldchildparent78 = document.getElementById("field-child-parent7-8");


  if (joinCondition78 == "yes") {
    fieldchildparent78.style.display = joinCondition78 == "yes" ? "block" : "none";
  }
  else if (joinCondition78 == "no") {
    fieldchildparent78.style.display = joinCondition78 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition79() {
  var joinCondition79 = document.getElementById("joinCondition7-9").value;
  var fieldchildparent79 = document.getElementById("field-child-parent7-9");


  if (joinCondition79 == "yes") {
    fieldchildparent79.style.display = joinCondition79 == "yes" ? "block" : "none";
  }
  else if (joinCondition79 == "no") {
    fieldchildparent79.style.display = joinCondition79 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition82() {
  var joinCondition82 = document.getElementById("joinCondition8-2").value;
  var fieldchildparent82 = document.getElementById("field-child-parent8-2");


  if (joinCondition82 == "yes") {
    fieldchildparent82.style.display = joinCondition82 == "yes" ? "block" : "none";
  }
  else if (joinCondition82 == "no") {
    fieldchildparent82.style.display = joinCondition82 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition83() {
  var joinCondition83 = document.getElementById("joinCondition8-3").value;
  var fieldchildparent83 = document.getElementById("field-child-parent8-3");


  if (joinCondition83 == "yes") {
    fieldchildparent83.style.display = joinCondition83 == "yes" ? "block" : "none";
  }
  else if (joinCondition83 == "no") {
    fieldchildparent83.style.display = joinCondition83 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition84() {
  var joinCondition84 = document.getElementById("joinCondition8-4").value;
  var fieldchildparent84 = document.getElementById("field-child-parent8-4");


  if (joinCondition84 == "yes") {
    fieldchildparent84.style.display = joinCondition84 == "yes" ? "block" : "none";
  }
  else if (joinCondition84 == "no") {
    fieldchildparent84.style.display = joinCondition84 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition85() {
  var joinCondition85 = document.getElementById("joinCondition8-5").value;
  var fieldchildparent85 = document.getElementById("field-child-parent8-5");


  if (joinCondition85 == "yes") {
    fieldchildparent85.style.display = joinCondition85 == "yes" ? "block" : "none";
  }
  else if (joinCondition85 == "no") {
    fieldchildparent85.style.display = joinCondition85 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition86() {
  var joinCondition86 = document.getElementById("joinCondition8-6").value;
  var fieldchildparent86 = document.getElementById("field-child-parent8-6");


  if (joinCondition86 == "yes") {
    fieldchildparent86.style.display = joinCondition86 == "yes" ? "block" : "none";
  }
  else if (joinCondition86 == "no") {
    fieldchildparent86.style.display = joinCondition86 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition87() {
  var joinCondition87 = document.getElementById("joinCondition8-7").value;
  var fieldchildparent87 = document.getElementById("field-child-parent8-7");


  if (joinCondition87 == "yes") {
    fieldchildparent87.style.display = joinCondition87 == "yes" ? "block" : "none";
  }
  else if (joinCondition87 == "no") {
    fieldchildparent87.style.display = joinCondition87 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition88() {
  var joinCondition88 = document.getElementById("joinCondition8-8").value;
  var fieldchildparent88 = document.getElementById("field-child-parent8-8");


  if (joinCondition88 == "yes") {
    fieldchildparent88.style.display = joinCondition88 == "yes" ? "block" : "none";
  }
  else if (joinCondition88 == "no") {
    fieldchildparent88.style.display = joinCondition88 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition89() {
  var joinCondition89 = document.getElementById("joinCondition8-9").value;
  var fieldchildparent89 = document.getElementById("field-child-parent8-9");


  if (joinCondition89 == "yes") {
    fieldchildparent89.style.display = joinCondition89 == "yes" ? "block" : "none";
  }
  else if (joinCondition89 == "no") {
    fieldchildparent89.style.display = joinCondition89 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition92() {
  var joinCondition92 = document.getElementById("joinCondition9-2").value;
  var fieldchildparent92 = document.getElementById("field-child-parent9-2");


  if (joinCondition92 == "yes") {
    fieldchildparent92.style.display = joinCondition92 == "yes" ? "block" : "none";
  }
  else if (joinCondition92 == "no") {
    fieldchildparent92.style.display = joinCondition92 == "no" ? "none" : "block";
  } 
}

/* Selecting joinCondition*/
function GetSelectedjoinCondition93() {
  var joinCondition93 = document.getElementById("joinCondition9-3").value;
  var fieldchildparent93 = document.getElementById("field-child-parent9-3");


  if (joinCondition93 == "yes") {
    fieldchildparent93.style.display = joinCondition93 == "yes" ? "block" : "none";
  }
  else if (joinCondition93 == "no") {
    fieldchildparent93.style.display = joinCondition93 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition94() {
  var joinCondition94 = document.getElementById("joinCondition9-4").value;
  var fieldchildparent94 = document.getElementById("field-child-parent9-4");


  if (joinCondition94 == "yes") {
    fieldchildparent94.style.display = joinCondition94 == "yes" ? "block" : "none";
  }
  else if (joinCondition94 == "no") {
    fieldchildparent94.style.display = joinCondition94 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition95() {
  var joinCondition95 = document.getElementById("joinCondition9-5").value;
  var fieldchildparent95 = document.getElementById("field-child-parent9-5");


  if (joinCondition95 == "yes") {
    fieldchildparent95.style.display = joinCondition95 == "yes" ? "block" : "none";
  }
  else if (joinCondition95 == "no") {
    fieldchildparent95.style.display = joinCondition95 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition96() {
  var joinCondition96 = document.getElementById("joinCondition9-6").value;
  var fieldchildparent96 = document.getElementById("field-child-parent9-6");


  if (joinCondition96 == "yes") {
    fieldchildparent96.style.display = joinCondition96 == "yes" ? "block" : "none";
  }
  else if (joinCondition96 == "no") {
    fieldchildparent96.style.display = joinCondition96 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition97() {
  var joinCondition97 = document.getElementById("joinCondition9-7").value;
  var fieldchildparent97 = document.getElementById("field-child-parent9-7");


  if (joinCondition97 == "yes") {
    fieldchildparent97.style.display = joinCondition97 == "yes" ? "block" : "none";
  }
  else if (joinCondition97 == "no") {
    fieldchildparent97.style.display = joinCondition97 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition98() {
  var joinCondition98 = document.getElementById("joinCondition9-8").value;
  var fieldchildparent98 = document.getElementById("field-child-parent9-8");


  if (joinCondition98 == "yes") {
    fieldchildparent98.style.display = joinCondition98 == "yes" ? "block" : "none";
  }
  else if (joinCondition98 == "no") {
    fieldchildparent98.style.display = joinCondition98 == "no" ? "none" : "block";
  } 
}
/* Selecting joinCondition*/
function GetSelectedjoinCondition99() {
  var joinCondition99 = document.getElementById("joinCondition9-9").value;
  var fieldchildparent99 = document.getElementById("field-child-parent9-9");


  if (joinCondition99 == "yes") {
    fieldchildparent99.style.display = joinCondition99 == "yes" ? "block" : "none";
  }
  else if (joinCondition99 == "no") {
    fieldchildparent99.style.display = joinCondition99 == "no" ? "none" : "block";
  } 
}
/* ====================TM2========================== */

/* Counting Triples Map */
function countNumberPOM2() {
 
  var pom = document.getElementById("pom2").value;
  var POM12 = document.getElementById("POM1-2");
  var POM22 = document.getElementById("POM2-2");
  var POM32 = document.getElementById("POM3-2");
  var POM42 = document.getElementById("POM4-2");
  var POM52 = document.getElementById("POM5-2");
  var POM62 = document.getElementById("POM6-2");
  var POM72 = document.getElementById("POM7-2");
  var POM82 = document.getElementById("POM8-2");
  var POM92 = document.getElementById("POM9-2");

  if (pom == 0) {
    mapColor2.style.display = "none";
    POM12.style.display = "none";
    POM22.style.display = "none";
    POM32.style.display = "none";
    POM42.style.display = "none";
    POM52.style.display = "none";
    POM62.style.display = "none";
    POM72.style.display = "none";
    POM82.style.display = "none";
    POM92.style.display = "none";
  } else if (pom == 1) {
    mapColor2.style.display = "block";
    POM12.style.display = "block";
    POM22.style.display = "none";
    POM32.style.display = "none";
    POM42.style.display = "none";
    POM52.style.display = "none";
    POM62.style.display = "none";
    POM72.style.display = "none";
    POM82.style.display = "none";
    POM92.style.display = "none";
  } else if (pom == 2) {
    mapColor2.style.display = "block";
    POM12.style.display = "block";
    POM22.style.display = "block";
    POM32.style.display = "none";
    POM42.style.display = "none";
    POM52.style.display = "none";
    POM62.style.display = "none";
    POM72.style.display = "none";
    POM82.style.display = "none";
    POM92.style.display = "none";
  } else if (pom == 3) {
    mapColor2.style.display = "block";
    POM12.style.display = "block";
    POM22.style.display = "block";
    POM32.style.display = "block";
    POM42.style.display = "none";
    POM52.style.display = "none";
    POM62.style.display = "none";
    POM72.style.display = "none";
    POM82.style.display = "none";
    POM92.style.display = "none";
  } else if (pom == 4) {
    mapColor2.style.display = "block";
    POM12.style.display = "block";
    POM22.style.display = "block";
    POM32.style.display = "block";
    POM42.style.display = "block";
    POM52.style.display = "none";
    POM62.style.display = "none";
    POM72.style.display = "none";
    POM82.style.display = "none";
    POM92.style.display = "none";
  } else if (pom == 5) {
    mapColor2.style.display = "block";
    POM12.style.display = "block";
    POM22.style.display = "block";
    POM32.style.display = "block";
    POM42.style.display = "block";
    POM52.style.display = "block";
    POM62.style.display = "none";
    POM72.style.display = "none";
    POM82.style.display = "none";
    POM92.style.display = "none";
  } else if (pom == 6) {
    mapColor2.style.display = "block";
    POM12.style.display = "block";
    POM22.style.display = "block";
    POM32.style.display = "block";
    POM42.style.display = "block";
    POM52.style.display = "block";
    POM62.style.display = "block";
    POM72.style.display = "none";
    POM82.style.display = "none";
    POM92.style.display = "none";
  } else if (pom == 7) {
    mapColor2.style.display = "block";
    POM12.style.display = "block";
    POM22.style.display = "block";
    POM32.style.display = "block";
    POM42.style.display = "block";
    POM52.style.display = "block";
    POM62.style.display = "block";
    POM72.style.display = "block";
    POM82.style.display = "none";
    POM92.style.display = "none";
  } else if (pom == 8) {
    mapColor2.style.display = "block";
    POM12.style.display = "block";
    POM22.style.display = "block";
    POM32.style.display = "block";
    POM42.style.display = "block";
    POM52.style.display = "block";
    POM62.style.display = "block";
    POM72.style.display = "block";
    POM82.style.display = "block";
    POM92.style.display = "none";
  } else if (pom == 9) {
    mapColor2.style.display = "block";
    POM12.style.display = "block";
    POM22.style.display = "block";
    POM32.style.display = "block";
    POM42.style.display = "block";
    POM52.style.display = "block";
    POM62.style.display = "block";
    POM72.style.display = "block";
    POM82.style.display = "block";
    POM92.style.display = "block";
  } 
}

/* ====================POM1-2========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition12() {
  var joinCondition12 = document.getElementById("joinCondition1-2").value;
  var fieldchildparent12 = document.getElementById("field-child-parent1-2");


  if (joinCondition12 == "yes") {
    fieldchildparent12.style.display = joinCondition12 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition12 == "no") {
    fieldchildparent12.style.display = joinCondition12 == "no" ? "none" : "block";
  } 
}



/* ====================POM2-2========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition22() {
 var joinCondition22 = document.getElementById("joinCondition2-2").value;
  var fieldchildparent22 = document.getElementById("field-child-parent2-2");


  if (joinCondition22 == "yes") {
    fieldchildparent22.style.display = joinCondition22 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition22 == "no") {
    fieldchildparent22.style.display = joinCondition22 == "no" ? "none" : "block";
  } 
}



/* ====================POM3-2========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition32() {
  var joinCondition32 = document.getElementById("joinCondition3-2").value;
  var fieldchildparent32 = document.getElementById("field-child-parent3-2");


  if (joinCondition32 == "yes") {
    fieldchildparent32.style.display = joinCondition32 == "yes" ? "block" : "none";
   
  }
  else if (joinCondition32 == "no") {
    fieldchildparent32.style.display = joinCondition32 == "no" ? "none" : "block";
  } 
}



/* ====================TM3========================== */



/* Counting Triples Map */
function countNumberPOM3() {
 
  var pom = document.getElementById("pom3").value;
  var POM13 = document.getElementById("POM1-3");
  var POM23 = document.getElementById("POM2-3");
  var POM33 = document.getElementById("POM3-3");
  var POM43 = document.getElementById("POM4-3");
  var POM53 = document.getElementById("POM5-3");
  var POM63 = document.getElementById("POM6-3");
  var POM73 = document.getElementById("POM7-3");
  var POM83 = document.getElementById("POM8-3");
  var POM93 = document.getElementById("POM9-3");

  if (pom == 0) {
    mapColor3.style.display = "none";
    POM13.style.display = "none";
    POM23.style.display = "none";
    POM33.style.display = "none";
    POM43.style.display = "none";
    POM53.style.display = "none";
    POM63.style.display = "none";
    POM73.style.display = "none";
    POM83.style.display = "none";
    POM93.style.display = "none";
  } else if (pom == 1) {
    mapColor3.style.display = "block";
    POM13.style.display = "block";
    POM23.style.display = "none";
    POM33.style.display = "none";
    POM43.style.display = "none";
    POM53.style.display = "none";
    POM63.style.display = "none";
    POM73.style.display = "none";
    POM83.style.display = "none";
    POM93.style.display = "none";
  } else if (pom == 2) {
    mapColor3.style.display = "block";
    POM13.style.display = "block";
    POM23.style.display = "block";
    POM33.style.display = "none";
    POM43.style.display = "none";
    POM53.style.display = "none";
    POM63.style.display = "none";
    POM73.style.display = "none";
    POM83.style.display = "none";
    POM93.style.display = "none";
  } else if (pom == 3) {
    mapColor3.style.display = "block";
    POM13.style.display = "block";
    POM23.style.display = "block";
    POM33.style.display = "block";
    POM43.style.display = "none";
    POM53.style.display = "none";
    POM63.style.display = "none";
    POM73.style.display = "none";
    POM83.style.display = "none";
    POM93.style.display = "none";
  } else if (pom == 4) {
    mapColor3.style.display = "block";
    POM13.style.display = "block";
    POM23.style.display = "block";
    POM33.style.display = "block";
    POM43.style.display = "block";
    POM53.style.display = "none";
    POM63.style.display = "none";
    POM73.style.display = "none";
    POM83.style.display = "none";
    POM93.style.display = "none";
  } else if (pom == 5) {
    mapColor3.style.display = "block";
    POM13.style.display = "block";
    POM23.style.display = "block";
    POM33.style.display = "block";
    POM43.style.display = "block";
    POM53.style.display = "block";
    POM63.style.display = "none";
    POM73.style.display = "none";
    POM83.style.display = "none";
    POM93.style.display = "none";
  } else if (pom == 6) {
    mapColor3.style.display = "block";
    POM13.style.display = "block";
    POM23.style.display = "block";
    POM33.style.display = "block";
    POM43.style.display = "block";
    POM53.style.display = "block";
    POM63.style.display = "block";
    POM73.style.display = "none";
    POM83.style.display = "none";
    POM93.style.display = "none";
  } else if (pom == 7) {
    mapColor3.style.display = "block";
    POM13.style.display = "block";
    POM23.style.display = "block";
    POM33.style.display = "block";
    POM43.style.display = "block";
    POM53.style.display = "block";
    POM63.style.display = "block";
    POM73.style.display = "block";
    POM83.style.display = "none";
    POM93.style.display = "none";
  } else if (pom == 8) {
    mapColor3.style.display = "block";
    POM13.style.display = "block";
    POM23.style.display = "block";
    POM33.style.display = "block";
    POM43.style.display = "block";
    POM53.style.display = "block";
    POM63.style.display = "block";
    POM73.style.display = "block";
    POM83.style.display = "block";
    POM93.style.display = "none";
  } else if (pom == 9) {
    mapColor3.style.display = "block";
    POM13.style.display = "block";
    POM23.style.display = "block";
    POM33.style.display = "block";
    POM43.style.display = "block";
    POM53.style.display = "block";
    POM63.style.display = "block";
    POM73.style.display = "block";
    POM83.style.display = "block";
    POM93.style.display = "block";
  }
}

/* ====================POM1-3========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition13() {
  var joinCondition13 = document.getElementById("joinCondition1-3").value;
  var fieldchildparent13 = document.getElementById("field-child-parent1-3");


  if (joinCondition13 == "yes") {
    fieldchildparent13.style.display = joinCondition13 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition13 == "no") {
    fieldchildparent13.style.display = joinCondition13 == "no" ? "none" : "block";
  } 
}



/* ====================POM2-3========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition23() {
  var joinCondition23 = document.getElementById("joinCondition2-3").value;
  var fieldchildparent23 = document.getElementById("field-child-parent2-3");


  if (joinCondition23 == "yes") {
    fieldchildparent23.style.display = joinCondition23 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition23 == "no") {
    fieldchildparent23.style.display = joinCondition23 == "no" ? "none" : "block";
  } 
}



/* ====================POM3-3========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition33() {
  var joinCondition33 = document.getElementById("joinCondition3-3").value;
  var fieldchildparent33 = document.getElementById("field-child-parent3-3");


  if (joinCondition33 == "yes") {
    fieldchildparent33.style.display = joinCondition33 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition33 == "no") {
    fieldchildparent33.style.display = joinCondition33 == "no" ? "none" : "block";
  } 
}



/* ====================TM4========================== */



/* Counting Triples Map */
function countNumberPOM4() {
 
  var pom = document.getElementById("pom4").value;
  var POM14 = document.getElementById("POM1-4");
  var POM24 = document.getElementById("POM2-4");
  var POM34 = document.getElementById("POM3-4");
  var POM44 = document.getElementById("POM4-4");
  var POM54 = document.getElementById("POM5-4");
  var POM64 = document.getElementById("POM6-4");
  var POM74 = document.getElementById("POM7-4");
  var POM84 = document.getElementById("POM8-4");
  var POM94 = document.getElementById("POM9-4");

  if (pom == 0) {
    mapColor4.style.display = "none";
    POM14.style.display = "none";
    POM24.style.display = "none";
    POM34.style.display = "none";
    POM44.style.display = "none";
    POM54.style.display = "none";
    POM64.style.display = "none";
    POM74.style.display = "none";
    POM84.style.display = "none";
    POM94.style.display = "none";
  } else if (pom == 1) {
    mapColor4.style.display = "block";
    POM14.style.display = "block";
    POM24.style.display = "none";
    POM34.style.display = "none";
    POM44.style.display = "none";
    POM54.style.display = "none";
    POM64.style.display = "none";
    POM74.style.display = "none";
    POM84.style.display = "none";
    POM94.style.display = "none";
  } else if (pom == 2) {
    mapColor4.style.display = "block";
    POM14.style.display = "block";
    POM24.style.display = "block";
    POM34.style.display = "none";
    POM44.style.display = "none";
    POM54.style.display = "none";
    POM64.style.display = "none";
    POM74.style.display = "none";
    POM84.style.display = "none";
    POM94.style.display = "none";
  } else if (pom == 3) {
    mapColor4.style.display = "block";
    POM14.style.display = "block";
    POM24.style.display = "block";
    POM34.style.display = "block";
    POM44.style.display = "none";
    POM54.style.display = "none";
    POM64.style.display = "none";
    POM74.style.display = "none";
    POM84.style.display = "none";
    POM94.style.display = "none";
  } else if (pom == 4) {
    mapColor4.style.display = "block";
    POM14.style.display = "block";
    POM24.style.display = "block";
    POM34.style.display = "block";
    POM44.style.display = "block";
    POM54.style.display = "none";
    POM64.style.display = "none";
    POM74.style.display = "none";
    POM84.style.display = "none";
    POM94.style.display = "none";
  } else if (pom == 5) {
    mapColor4.style.display = "block";
    POM14.style.display = "block";
    POM24.style.display = "block";
    POM34.style.display = "block";
    POM44.style.display = "block";
    POM54.style.display = "block";
    POM64.style.display = "none";
    POM74.style.display = "none";
    POM84.style.display = "none";
    POM94.style.display = "none";
  } else if (pom == 6) {
    mapColor4.style.display = "block";
    POM14.style.display = "block";
    POM24.style.display = "block";
    POM34.style.display = "block";
    POM44.style.display = "block";
    POM54.style.display = "block";
    POM64.style.display = "block";
    POM74.style.display = "none";
    POM84.style.display = "none";
    POM94.style.display = "none";
  } else if (pom == 7) {
    mapColor4.style.display = "block";
    POM14.style.display = "block";
    POM24.style.display = "block";
    POM34.style.display = "block";
    POM44.style.display = "block";
    POM54.style.display = "block";
    POM64.style.display = "block";
    POM74.style.display = "block";
    POM84.style.display = "none";
    POM94.style.display = "none";
  } else if (pom == 8) {
    mapColor4.style.display = "block";
    POM14.style.display = "block";
    POM24.style.display = "block";
    POM34.style.display = "block";
    POM44.style.display = "block";
    POM54.style.display = "block";
    POM64.style.display = "block";
    POM74.style.display = "block";
    POM84.style.display = "block";
    POM94.style.display = "none";
  } else if (pom == 9) {
    mapColor4.style.display = "block";
    POM14.style.display = "block";
    POM24.style.display = "block";
    POM34.style.display = "block";
    POM44.style.display = "block";
    POM54.style.display = "block";
    POM64.style.display = "block";
    POM74.style.display = "block";
    POM84.style.display = "block";
    POM94.style.display = "block";
  }
}

/* ====================POM1-4========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition14() {
  var joinCondition14 = document.getElementById("joinCondition1-4").value;
  var fieldchildparent14 = document.getElementById("field-child-parent1-4");


  if (joinCondition14 == "yes") {
    fieldchildparent14.style.display = joinCondition14 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition14 == "no") {
    fieldchildparent14.style.display = joinCondition14 == "no" ? "none" : "block";
  } 
}



/* ====================POM2-4========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition24() {
   var joinCondition24 = document.getElementById("joinCondition2-4").value;
  var fieldchildparent24 = document.getElementById("field-child-parent2-4");


  if (joinCondition24 == "yes") {
    fieldchildparent24.style.display = joinCondition24 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition24 == "no") {
    fieldchildparent24.style.display = joinCondition24 == "no" ? "none" : "block";
  } 
}



/* ====================POM3-4========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition34() {
  var joinCondition34 = document.getElementById("joinCondition3-4").value;
  var fieldchildparent34 = document.getElementById("field-child-parent3-4");


  if (joinCondition34 == "yes") {
    fieldchildparent34.style.display = joinCondition34 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition34 == "no") {
    fieldchildparent34.style.display = joinCondition34 == "no" ? "none" : "block";
  } 
}



/* ====================TM5========================== */



/* Counting Triples Map */
function countNumberPOM5() {
  
  var pom = document.getElementById("pom5").value;
  var POM15 = document.getElementById("POM1-5");
  var POM25 = document.getElementById("POM2-5");
  var POM35 = document.getElementById("POM3-5");
  var POM45 = document.getElementById("POM4-5");
  var POM55 = document.getElementById("POM5-5");
  var POM65 = document.getElementById("POM6-5");
  var POM75 = document.getElementById("POM7-5");
  var POM85 = document.getElementById("POM8-5");
  var POM95 = document.getElementById("POM9-5");

  if (pom == 0) {
    mapColor5.style.display = "none";
    POM15.style.display = "none";
    POM25.style.display = "none";
    POM35.style.display = "none";
    POM45.style.display = "none";
    POM55.style.display = "none";
    POM65.style.display = "none";
    POM75.style.display = "none";
    POM85.style.display = "none";
    POM95.style.display = "none";
  } else if (pom == 1) {
    mapColor5.style.display = "block";
    POM15.style.display = "block";
    POM25.style.display = "none";
    POM35.style.display = "none";
    POM45.style.display = "none";
    POM55.style.display = "none";
    POM65.style.display = "none";
    POM75.style.display = "none";
    POM85.style.display = "none";
    POM95.style.display = "none";
  } else if (pom == 2) {
    mapColor5.style.display = "block";
    POM15.style.display = "block";
    POM25.style.display = "block";
    POM35.style.display = "none";
    POM45.style.display = "none";
    POM55.style.display = "none";
    POM65.style.display = "none";
    POM75.style.display = "none";
    POM85.style.display = "none";
    POM95.style.display = "none";
  } else if (pom == 3) {
    mapColor5.style.display = "block";
    POM15.style.display = "block";
    POM25.style.display = "block";
    POM35.style.display = "block";
    POM45.style.display = "none";
    POM55.style.display = "none";
    POM65.style.display = "none";
    POM75.style.display = "none";
    POM85.style.display = "none";
    POM95.style.display = "none";
  } else if (pom == 4) {
    mapColor5.style.display = "block";
    POM15.style.display = "block";
    POM25.style.display = "block";
    POM35.style.display = "block";
    POM45.style.display = "block";
    POM55.style.display = "none";
    POM65.style.display = "none";
    POM75.style.display = "none";
    POM85.style.display = "none";
    POM95.style.display = "none";
  } else if (pom == 5) {
    mapColor5.style.display = "block";
    POM15.style.display = "block";
    POM25.style.display = "block";
    POM35.style.display = "block";
    POM45.style.display = "block";
    POM55.style.display = "block";
    POM65.style.display = "none";
    POM75.style.display = "none";
    POM85.style.display = "none";
    POM95.style.display = "none";
  } else if (pom == 6) {
    mapColor5.style.display = "block";
    POM15.style.display = "block";
    POM25.style.display = "block";
    POM35.style.display = "block";
    POM45.style.display = "block";
    POM55.style.display = "block";
    POM65.style.display = "block";
    POM75.style.display = "none";
    POM85.style.display = "none";
    POM95.style.display = "none";
  } else if (pom == 7) {
    mapColor5.style.display = "block";
    POM15.style.display = "block";
    POM25.style.display = "block";
    POM35.style.display = "block";
    POM45.style.display = "block";
    POM55.style.display = "block";
    POM65.style.display = "block";
    POM75.style.display = "block";
    POM85.style.display = "none";
    POM95.style.display = "none";
  } else if (pom == 8) {
    mapColor5.style.display = "block";
    POM15.style.display = "block";
    POM25.style.display = "block";
    POM35.style.display = "block";
    POM45.style.display = "block";
    POM55.style.display = "block";
    POM65.style.display = "block";
    POM75.style.display = "block";
    POM85.style.display = "block";
    POM95.style.display = "none";
  } else if (pom == 9) {
    mapColor5.style.display = "block";
    POM15.style.display = "block";
    POM25.style.display = "block";
    POM35.style.display = "block";
    POM45.style.display = "block";
    POM55.style.display = "block";
    POM65.style.display = "block";
    POM75.style.display = "block";
    POM85.style.display = "block";
    POM95.style.display = "block";
  }
}

/* ====================POM1-5========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition15() {
   var joinCondition15 = document.getElementById("joinCondition1-5").value;
  var fieldchildparent15 = document.getElementById("field-child-parent1-5");


  if (joinCondition15 == "yes") {
    fieldchildparent15.style.display = joinCondition15 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition15 == "no") {
    fieldchildparent15.style.display = joinCondition15 == "no" ? "none" : "block";
  } 
}



/* ====================POM2-5========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition25() {
  var joinCondition25 = document.getElementById("joinCondition2-5").value;
  var fieldchildparent25 = document.getElementById("field-child-parent2-5");


  if (joinCondition25 == "yes") {
    fieldchildparent25.style.display = joinCondition25 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition25 == "no") {
    fieldchildparent25.style.display = joinCondition25 == "no" ? "none" : "block";
  } 
}



/* ====================POM3-5========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition35() {
  var joinCondition35 = document.getElementById("joinCondition3-5").value;
  var fieldchildparent35 = document.getElementById("field-child-parent3-5");


  if (joinCondition35 == "yes") {
    fieldchildparent35.style.display = joinCondition35 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition35 == "no") {
    fieldchildparent35.style.display = joinCondition35 == "no" ? "none" : "block";
  } 
}



/* ====================TM6========================== */



/* Counting Triples Map */
function countNumberPOM6() {
  
  var pom = document.getElementById("pom6").value;
  var POM16 = document.getElementById("POM1-6");
  var POM26 = document.getElementById("POM2-6");
  var POM36 = document.getElementById("POM3-6");
  var POM46 = document.getElementById("POM4-6");
  var POM56 = document.getElementById("POM5-6");
  var POM66 = document.getElementById("POM6-6");
  var POM76 = document.getElementById("POM7-6");
  var POM86 = document.getElementById("POM8-6");
  var POM96 = document.getElementById("POM9-6");

  if (pom == 0) {
    mapColor6.style.display = "none";
    POM16.style.display = "none";
    POM26.style.display = "none";
    POM36.style.display = "none";
    POM46.style.display = "none";
    POM56.style.display = "none";
    POM66.style.display = "none";
    POM76.style.display = "none";
    POM86.style.display = "none";
    POM96.style.display = "none";
  } else if (pom == 1) {
    mapColor6.style.display = "block";
    POM16.style.display = "block";
    POM26.style.display = "none";
    POM36.style.display = "none";
    POM46.style.display = "none";
    POM56.style.display = "none";
    POM66.style.display = "none";
    POM76.style.display = "none";
    POM86.style.display = "none";
    POM96.style.display = "none";
  } else if (pom == 2) {
    mapColor6.style.display = "block";
    POM16.style.display = "block";
    POM26.style.display = "block";
    POM36.style.display = "none";
    POM46.style.display = "none";
    POM56.style.display = "none";
    POM66.style.display = "none";
    POM76.style.display = "none";
    POM86.style.display = "none";
    POM96.style.display = "none";
  } else if (pom == 3) {
    mapColor6.style.display = "block";
    POM16.style.display = "block";
    POM26.style.display = "block";
    POM36.style.display = "block";
    POM46.style.display = "none";
    POM56.style.display = "none";
    POM66.style.display = "none";
    POM76.style.display = "none";
    POM86.style.display = "none";
    POM96.style.display = "none";
  } else if (pom == 4) {
    mapColor6.style.display = "block";
    POM16.style.display = "block";
    POM26.style.display = "block";
    POM36.style.display = "block";
    POM46.style.display = "block";
    POM56.style.display = "none";
    POM66.style.display = "none";
    POM76.style.display = "none";
    POM86.style.display = "none";
    POM96.style.display = "none";
  } else if (pom == 5) {
    mapColor6.style.display = "block";
    POM16.style.display = "block";
    POM26.style.display = "block";
    POM36.style.display = "block";
    POM46.style.display = "block";
    POM56.style.display = "block";
    POM66.style.display = "none";
    POM76.style.display = "none";
    POM86.style.display = "none";
    POM96.style.display = "none";
  } else if (pom == 6) {
    mapColor6.style.display = "block";
    POM16.style.display = "block";
    POM26.style.display = "block";
    POM36.style.display = "block";
    POM46.style.display = "block";
    POM56.style.display = "block";
    POM66.style.display = "block";
    POM76.style.display = "none";
    POM86.style.display = "none";
    POM96.style.display = "none";
  } else if (pom == 7) {
    mapColor6.style.display = "block";
    POM16.style.display = "block";
    POM26.style.display = "block";
    POM36.style.display = "block";
    POM46.style.display = "block";
    POM56.style.display = "block";
    POM66.style.display = "block";
    POM76.style.display = "block";
    POM86.style.display = "none";
    POM96.style.display = "none";
  } else if (pom == 8) {
    mapColor6.style.display = "block";
    POM16.style.display = "block";
    POM26.style.display = "block";
    POM36.style.display = "block";
    POM46.style.display = "block";
    POM56.style.display = "block";
    POM66.style.display = "block";
    POM76.style.display = "block";
    POM86.style.display = "block";
    POM96.style.display = "none";
  } else if (pom == 9) {
    mapColor6.style.display = "block";
    POM16.style.display = "block";
    POM26.style.display = "block";
    POM36.style.display = "block";
    POM46.style.display = "block";
    POM56.style.display = "block";
    POM66.style.display = "block";
    POM76.style.display = "block";
    POM86.style.display = "block";
    POM96.style.display = "block";
  }
}

/* ====================POM1-6========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition16() {
  var joinCondition16 = document.getElementById("joinCondition1-6").value;
  var fieldchildparent16 = document.getElementById("field-child-parent1-6");


  if (joinCondition16 == "yes") {
    fieldchildparent16.style.display = joinCondition16 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition16 == "no") {
    fieldchildparent16.style.display = joinCondition16 == "no" ? "none" : "block";
  } 
}



/* ====================POM2-6========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition26() {
  var joinCondition26 = document.getElementById("joinCondition2-6").value;
  var fieldchildparent26 = document.getElementById("field-child-parent2-6");


  if (joinCondition26 == "yes") {
    fieldchildparent26.style.display = joinCondition26 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition26 == "no") {
    fieldchildparent26.style.display = joinCondition26 == "no" ? "none" : "block";
  } 
}


/* ====================POM3-6========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition36() {
 var joinCondition36 = document.getElementById("joinCondition3-6").value;
  var fieldchildparent36 = document.getElementById("field-child-parent3-6");


  if (joinCondition36 == "yes") {
    fieldchildparent36.style.display = joinCondition36 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition36 == "no") {
    fieldchildparent36.style.display = joinCondition36 == "no" ? "none" : "block";
  } 
}



/* ====================TM7========================== */



/* Counting Triples Map */
function countNumberPOM7() {
  
  var pom = document.getElementById("pom7").value;
  var POM17 = document.getElementById("POM1-7");
  var POM27 = document.getElementById("POM2-7");
  var POM37 = document.getElementById("POM3-7");
  var POM47 = document.getElementById("POM4-7");
  var POM57 = document.getElementById("POM5-7");
  var POM67 = document.getElementById("POM6-7");
  var POM77 = document.getElementById("POM7-7");
  var POM87 = document.getElementById("POM8-7");
  var POM97 = document.getElementById("POM9-7");

  if (pom == 0) {
    mapColor7.style.display = "none";
    POM17.style.display = "none";
    POM27.style.display = "none";
    POM37.style.display = "none";
    POM47.style.display = "none";
    POM57.style.display = "none";
    POM67.style.display = "none";
    POM77.style.display = "none";
    POM87.style.display = "none";
    POM97.style.display = "none";
  } else if (pom == 1) {
    mapColor7.style.display = "block";
    POM17.style.display = "block";
    POM27.style.display = "none";
    POM37.style.display = "none";
    POM47.style.display = "none";
    POM57.style.display = "none";
    POM67.style.display = "none";
    POM77.style.display = "none";
    POM87.style.display = "none";
    POM97.style.display = "none";
  } else if (pom == 2) {
    mapColor7.style.display = "block";
    POM17.style.display = "block";
    POM27.style.display = "block";
    POM37.style.display = "none";
    POM47.style.display = "none";
    POM57.style.display = "none";
    POM67.style.display = "none";
    POM77.style.display = "none";
    POM87.style.display = "none";
    POM97.style.display = "none";
  } else if (pom == 3) {
    mapColor7.style.display = "block";
    POM17.style.display = "block";
    POM27.style.display = "block";
    POM37.style.display = "block";
    POM47.style.display = "none";
    POM57.style.display = "none";
    POM67.style.display = "none";
    POM77.style.display = "none";
    POM87.style.display = "none";
    POM97.style.display = "none";
  } else if (pom == 4) {
    mapColor7.style.display = "block";
    POM17.style.display = "block";
    POM27.style.display = "block";
    POM37.style.display = "block";
    POM47.style.display = "block";
    POM57.style.display = "none";
    POM67.style.display = "none";
    POM77.style.display = "none";
    POM87.style.display = "none";
    POM97.style.display = "none";
  } else if (pom == 5) {
    mapColor7.style.display = "block";
    POM17.style.display = "block";
    POM27.style.display = "block";
    POM37.style.display = "block";
    POM47.style.display = "block";
    POM57.style.display = "block";
    POM67.style.display = "none";
    POM77.style.display = "none";
    POM87.style.display = "none";
    POM97.style.display = "none";
  } else if (pom == 6) {
    mapColor7.style.display = "block";
    POM17.style.display = "block";
    POM27.style.display = "block";
    POM37.style.display = "block";
    POM47.style.display = "block";
    POM57.style.display = "block";
    POM67.style.display = "block";
    POM77.style.display = "none";
    POM87.style.display = "none";
    POM97.style.display = "none";
  } else if (pom == 7) {
    mapColor7.style.display = "block";
    POM17.style.display = "block";
    POM27.style.display = "block";
    POM37.style.display = "block";
    POM47.style.display = "block";
    POM57.style.display = "block";
    POM67.style.display = "block";
    POM77.style.display = "block";
    POM87.style.display = "none";
    POM97.style.display = "none";
  } else if (pom == 8) {
    mapColor7.style.display = "block";
    POM17.style.display = "block";
    POM27.style.display = "block";
    POM37.style.display = "block";
    POM47.style.display = "block";
    POM57.style.display = "block";
    POM67.style.display = "block";
    POM77.style.display = "block";
    POM87.style.display = "block";
    POM97.style.display = "none";
  } else if (pom == 9) {
    mapColor7.style.display = "block";
    POM17.style.display = "block";
    POM27.style.display = "block";
    POM37.style.display = "block";
    POM47.style.display = "block";
    POM57.style.display = "block";
    POM67.style.display = "block";
    POM77.style.display = "block";
    POM87.style.display = "block";
    POM97.style.display = "block";
  }
}

/* ====================POM1-7========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition17() {
  var joinCondition17 = document.getElementById("joinCondition1-7").value;
  var fieldchildparent17 = document.getElementById("field-child-parent1-7");


  if (joinCondition17 == "yes") {
    fieldchildparent17.style.display = joinCondition17 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition17 == "no") {
    fieldchildparent17.style.display = joinCondition17 == "no" ? "none" : "block";
  } 
}



/* ====================POM2-7========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition27() {
  var joinCondition27 = document.getElementById("joinCondition2-7").value;
  var fieldchildparent27 = document.getElementById("field-child-parent2-7");


  if (joinCondition27 == "yes") {
    fieldchildparent27.style.display = joinCondition27 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition27 == "no") {
    fieldchildparent27.style.display = joinCondition27 == "no" ? "none" : "block";
  } 
}



/* ====================POM3-7========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition37() {
   var joinCondition37 = document.getElementById("joinCondition3-7").value;
  var fieldchildparent37 = document.getElementById("field-child-parent3-7");


  if (joinCondition37 == "yes") {
    fieldchildparent37.style.display = joinCondition37 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition37 == "no") {
    fieldchildparent37.style.display = joinCondition37 == "no" ? "none" : "block";
  } 
}




/* ====================TM8========================== */



/* Counting Triples Map */
function countNumberPOM8() {
  
  var pom = document.getElementById("pom8").value;
  var POM18 = document.getElementById("POM1-8");
  var POM28 = document.getElementById("POM2-8");
  var POM38 = document.getElementById("POM3-8");
  var POM48 = document.getElementById("POM4-8");
  var POM58 = document.getElementById("POM5-8");
  var POM68 = document.getElementById("POM6-8");
  var POM78 = document.getElementById("POM7-8");
  var POM88 = document.getElementById("POM8-8");
  var POM98 = document.getElementById("POM9-8");

  if (pom == 0) {
    mapColor8.style.display = "none";
    POM18.style.display = "none";
    POM28.style.display = "none";
    POM38.style.display = "none";
    POM48.style.display = "none";
    POM58.style.display = "none";
    POM68.style.display = "none";
    POM78.style.display = "none";
    POM88.style.display = "none";
    POM98.style.display = "none";
  } else if (pom == 1) {
    mapColor8.style.display = "block";
    POM18.style.display = "block";
    POM28.style.display = "none";
    POM38.style.display = "none";
    POM48.style.display = "none";
    POM58.style.display = "none";
    POM68.style.display = "none";
    POM78.style.display = "none";
    POM88.style.display = "none";
    POM98.style.display = "none";
  } else if (pom == 2) {
    mapColor8.style.display = "block";
    POM18.style.display = "block";
    POM28.style.display = "block";
    POM38.style.display = "none";
    POM48.style.display = "none";
    POM58.style.display = "none";
    POM68.style.display = "none";
    POM78.style.display = "none";
    POM88.style.display = "none";
    POM98.style.display = "none";
  } else if (pom == 3) {
    mapColor8.style.display = "block";
    POM18.style.display = "block";
    POM28.style.display = "block";
    POM38.style.display = "block";
    POM48.style.display = "none";
    POM58.style.display = "none";
    POM68.style.display = "none";
    POM78.style.display = "none";
    POM88.style.display = "none";
    POM98.style.display = "none";
  } else if (pom == 4) {
    mapColor8.style.display = "block";
    POM18.style.display = "block";
    POM28.style.display = "block";
    POM38.style.display = "block";
    POM48.style.display = "block";
    POM58.style.display = "none";
    POM68.style.display = "none";
    POM78.style.display = "none";
    POM88.style.display = "none";
    POM98.style.display = "none";
  } else if (pom == 5) {
    mapColor8.style.display = "block";
    POM18.style.display = "block";
    POM28.style.display = "block";
    POM38.style.display = "block";
    POM48.style.display = "block";
    POM58.style.display = "block";
    POM68.style.display = "none";
    POM78.style.display = "none";
    POM88.style.display = "none";
    POM98.style.display = "none";
  } else if (pom == 6) {
    mapColor8.style.display = "block";
    POM18.style.display = "block";
    POM28.style.display = "block";
    POM38.style.display = "block";
    POM48.style.display = "block";
    POM58.style.display = "block";
    POM68.style.display = "block";
    POM78.style.display = "none";
    POM88.style.display = "none";
    POM98.style.display = "none";
  } else if (pom == 7) {
    mapColor8.style.display = "block";
    POM18.style.display = "block";
    POM28.style.display = "block";
    POM38.style.display = "block";
    POM48.style.display = "block";
    POM58.style.display = "block";
    POM68.style.display = "block";
    POM78.style.display = "block";
    POM88.style.display = "none";
    POM98.style.display = "none";
  } else if (pom == 8) {
    mapColor8.style.display = "block";
    POM18.style.display = "block";
    POM28.style.display = "block";
    POM38.style.display = "block";
    POM48.style.display = "block";
    POM58.style.display = "block";
    POM68.style.display = "block";
    POM78.style.display = "block";
    POM88.style.display = "block";
    POM98.style.display = "none";
  } else if (pom == 9) {
    mapColor8.style.display = "block";
    POM18.style.display = "block";
    POM28.style.display = "block";
    POM38.style.display = "block";
    POM48.style.display = "block";
    POM58.style.display = "block";
    POM68.style.display = "block";
    POM78.style.display = "block";
    POM88.style.display = "block";
    POM98.style.display = "block";
  }
}

/* ====================POM1-8========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition18() {
   var joinCondition18 = document.getElementById("joinCondition1-8").value;
  var fieldchildparent18 = document.getElementById("field-child-parent1-8");


  if (joinCondition18 == "yes") {
    fieldchildparent18.style.display = joinCondition18 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition18 == "no") {
    fieldchildparent18.style.display = joinCondition18 == "no" ? "none" : "block";
  } 
}



/* ====================POM2-8========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition28() {
  var joinCondition28 = document.getElementById("joinCondition2-8").value;
  var fieldchildparent28 = document.getElementById("field-child-parent2-8");


  if (joinCondition28 == "yes") {
    fieldchildparent28.style.display = joinCondition28 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition28 == "no") {
    fieldchildparent28.style.display = joinCondition28 == "no" ? "none" : "block";
  } 
}



/* ====================POM3-8========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition38() {
 var joinCondition38 = document.getElementById("joinCondition3-8").value;
  var fieldchildparent38 = document.getElementById("field-child-parent3-8");


  if (joinCondition38 == "yes") {
    fieldchildparent38.style.display = joinCondition38 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition38 == "no") {
    fieldchildparent38.style.display = joinCondition38 == "no" ? "none" : "block";
  } 
}




/* ====================TM9========================== */



/* Counting Triples Map */
function countNumberPOM9() {
  
  var pom = document.getElementById("pom9").value;
  var POM19 = document.getElementById("POM1-9");
  var POM29 = document.getElementById("POM2-9");
  var POM39 = document.getElementById("POM3-9");
  var POM49 = document.getElementById("POM4-9");
  var POM59 = document.getElementById("POM5-9");
  var POM69 = document.getElementById("POM6-9");
  var POM79 = document.getElementById("POM7-9");
  var POM89 = document.getElementById("POM8-9");
  var POM99 = document.getElementById("POM9-9");

  if (pom == 0) {
    mapColor9.style.display = "none";
    POM19.style.display = "none";
    POM29.style.display = "none";
    POM39.style.display = "none";
    POM49.style.display = "none";
    POM59.style.display = "none";
    POM69.style.display = "none";
    POM79.style.display = "none";
    POM89.style.display = "none";
    POM99.style.display = "none";
  } else if (pom == 1) {
    mapColor9.style.display = "block";
    POM19.style.display = "block";
    POM29.style.display = "none";
    POM39.style.display = "none";
    POM49.style.display = "none";
    POM59.style.display = "none";
    POM69.style.display = "none";
    POM79.style.display = "none";
    POM89.style.display = "none";
    POM99.style.display = "none";
  } else if (pom == 2) {
    mapColor9.style.display = "block";
    POM19.style.display = "block";
    POM29.style.display = "block";
    POM39.style.display = "none";
    POM49.style.display = "none";
    POM59.style.display = "none";
    POM69.style.display = "none";
    POM79.style.display = "none";
    POM89.style.display = "none";
    POM99.style.display = "none";
  } else if (pom == 3) {
    mapColor9.style.display = "block";
    POM19.style.display = "block";
    POM29.style.display = "block";
    POM39.style.display = "block";
    POM49.style.display = "none";
    POM59.style.display = "none";
    POM69.style.display = "none";
    POM79.style.display = "none";
    POM89.style.display = "none";
    POM99.style.display = "none";
  } else if (pom == 4) {
    mapColor9.style.display = "block";
    POM19.style.display = "block";
    POM29.style.display = "block";
    POM39.style.display = "block";
    POM49.style.display = "block";
    POM59.style.display = "none";
    POM69.style.display = "none";
    POM79.style.display = "none";
    POM89.style.display = "none";
    POM99.style.display = "none";
  } else if (pom == 5) {
    mapColor9.style.display = "block";
    POM19.style.display = "block";
    POM29.style.display = "block";
    POM39.style.display = "block";
    POM49.style.display = "block";
    POM59.style.display = "block";
    POM69.style.display = "none";
    POM79.style.display = "none";
    POM89.style.display = "none";
    POM99.style.display = "none";
  } else if (pom == 6) {
    mapColor9.style.display = "block";
    POM19.style.display = "block";
    POM29.style.display = "block";
    POM39.style.display = "block";
    POM49.style.display = "block";
    POM59.style.display = "block";
    POM69.style.display = "block";
    POM79.style.display = "none";
    POM89.style.display = "none";
    POM99.style.display = "none";
  } else if (pom == 7) {
    mapColor9.style.display = "block";
    POM19.style.display = "block";
    POM29.style.display = "block";
    POM39.style.display = "block";
    POM49.style.display = "block";
    POM59.style.display = "block";
    POM69.style.display = "block";
    POM79.style.display = "block";
    POM89.style.display = "none";
    POM99.style.display = "none";
  } else if (pom == 8) {
    mapColor9.style.display = "block";
    POM19.style.display = "block";
    POM29.style.display = "block";
    POM39.style.display = "block";
    POM49.style.display = "block";
    POM59.style.display = "block";
    POM69.style.display = "block";
    POM79.style.display = "block";
    POM89.style.display = "block";
    POM99.style.display = "none";
  } else if (pom == 9) {
    mapColor9.style.display = "block";
    POM19.style.display = "block";
    POM29.style.display = "block";
    POM39.style.display = "block";
    POM49.style.display = "block";
    POM59.style.display = "block";
    POM69.style.display = "block";
    POM79.style.display = "block";
    POM89.style.display = "block";
    POM99.style.display = "block";
  }
}

/* ====================POM1-9========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition19() {
  var joinCondition19 = document.getElementById("joinCondition1-9").value;
  var fieldchildparent19 = document.getElementById("field-child-parent1-9");


  if (joinCondition19 == "yes") {
    fieldchildparent19.style.display = joinCondition19 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition19 == "no") {
    fieldchildparent19.style.display = joinCondition19 == "no" ? "none" : "block";
  } 
}



/* ====================POM2-9========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition29() {
  var joinCondition29 = document.getElementById("joinCondition2-9").value;
  var fieldchildparent29 = document.getElementById("field-child-parent2-9");


  if (joinCondition29 == "yes") {
    fieldchildparent29.style.display = joinCondition29 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition29 == "no") {
    fieldchildparent29.style.display = joinCondition29 == "no" ? "none" : "block";
  } 
}



/* ====================POM3-9========================== */



/* Selecting joinCondition*/
function GetSelectedjoinCondition39() {
  var joinCondition39 = document.getElementById("joinCondition3-9").value;
  var fieldchildparent39 = document.getElementById("field-child-parent3-9");


  if (joinCondition39 == "yes") {
    fieldchildparent39.style.display = joinCondition39 == "yes" ? "block" : "none";
    
  }
  else if (joinCondition39 == "no") {
    fieldchildparent39.style.display = joinCondition39 == "no" ? "none" : "block";
  } 
}




/* Counting Functions Map */
function countNumberFun() {
  GetVariables();

  if (fun == 0) {
    functionColor.style.display = "none";
    FUN1.style.display = "none";
    FUN2.style.display = "none";
    FUN3.style.display = "none";
    FUN4.style.display = "none";
    FUN5.style.display = "none";
    FUN6.style.display = "none";
    FUN7.style.display = "none";
    FUN8.style.display = "none";
    FUN9.style.display = "none";
  } else if (fun == 1) {
    functionColor.style.display = "block";
    FUN1.style.display = "block";
    FUN2.style.display = "none";
    FUN3.style.display = "none";
    FUN4.style.display = "none";
    FUN5.style.display = "none";
    FUN6.style.display = "none";
    FUN7.style.display = "none";
    FUN8.style.display = "none";
    FUN9.style.display = "none";
    propertyColor2.style.display = "none";
    propertyColor3.style.display = "none";
    propertyColor4.style.display = "none";
    propertyColor5.style.display = "none";
    propertyColor6.style.display = "none";
    propertyColor7.style.display = "none";
    propertyColor8.style.display = "none";
    propertyColor9.style.display = "none";
  } else if (fun == 2) {
    functionColor.style.display = "block";
    FUN1.style.display = "block";
    FUN2.style.display = "block";
    FUN3.style.display = "none";
    FUN4.style.display = "none";
    FUN5.style.display = "none";
    FUN6.style.display = "none";
    FUN7.style.display = "none";
    FUN8.style.display = "none";
    FUN9.style.display = "none";
    propertyColor3.style.display = "none";
    propertyColor4.style.display = "none";
    propertyColor5.style.display = "none";
    propertyColor6.style.display = "none";
    propertyColor7.style.display = "none";
    propertyColor8.style.display = "none";
    propertyColor9.style.display = "none";
  } else if (fun == 3) {
    functionColor.style.display = "block";
    FUN1.style.display = "block";
    FUN2.style.display = "block";
    FUN3.style.display = "block";
    FUN4.style.display = "none";
    FUN5.style.display = "none";
    FUN6.style.display = "none";
    FUN7.style.display = "none";
    FUN8.style.display = "none";
    FUN9.style.display = "none";
    propertyColor4.style.display = "none";
    propertyColor5.style.display = "none";
    propertyColor6.style.display = "none";
    propertyColor7.style.display = "none";
    propertyColor8.style.display = "none";
    propertyColor9.style.display = "none";
  } else if (fun == 4) {
    functionColor.style.display = "block";
    FUN1.style.display = "block";
    FUN2.style.display = "block";
    FUN3.style.display = "block";
    FUN4.style.display = "block";
    FUN5.style.display = "none";
    FUN6.style.display = "none";
    FUN7.style.display = "none";
    FUN8.style.display = "none";
    FUN9.style.display = "none";
    propertyColor5.style.display = "none";
    propertyColor6.style.display = "none";
    propertyColor7.style.display = "none";
    propertyColor8.style.display = "none";
    propertyColor9.style.display = "none";
  } else if (fun == 5) {
    functionColor.style.display = "block";
    FUN1.style.display = "block";
    FUN2.style.display = "block";
    FUN3.style.display = "block";
    FUN4.style.display = "block";
    FUN5.style.display = "block";
    FUN6.style.display = "none";
    FUN7.style.display = "none";
    FUN8.style.display = "none";
    FUN9.style.display = "none";
    propertyColor6.style.display = "none";
    propertyColor7.style.display = "none";
    propertyColor8.style.display = "none";
    propertyColor9.style.display = "none";
  } else if (fun == 6) {
    functionColor.style.display = "block";
    FUN1.style.display = "block";
    FUN2.style.display = "block";
    FUN3.style.display = "block";
    FUN4.style.display = "block";
    FUN5.style.display = "block";
    FUN6.style.display = "block";
    FUN7.style.display = "none";
    FUN8.style.display = "none";
    FUN9.style.display = "none";
    propertyColor7.style.display = "none";
    propertyColor8.style.display = "none";
    propertyColor9.style.display = "none";
  } else if (fun == 7) {
    functionColor.style.display = "block";
    FUN1.style.display = "block";
    FUN2.style.display = "block";
    FUN3.style.display = "block";
    FUN4.style.display = "block";
    FUN5.style.display = "block";
    FUN6.style.display = "block";
    FUN7.style.display = "block";
    FUN8.style.display = "none";
    FUN9.style.display = "none";
    propertyColor8.style.display = "none";
    propertyColor9.style.display = "none";
  } else if (fun == 8) {
    functionColor.style.display = "block";
    FUN1.style.display = "block";
    FUN2.style.display = "block";
    FUN3.style.display = "block";
    FUN4.style.display = "block";
    FUN5.style.display = "block";
    FUN6.style.display = "block";
    FUN7.style.display = "block";
    FUN8.style.display = "block";
    FUN9.style.display = "none";
    propertyColor9.style.display = "none";
  } else if (fun == 9) {
    functionColor.style.display = "block";
    FUN1.style.display = "block";
    FUN2.style.display = "block";
    FUN3.style.display = "block";
    FUN4.style.display = "block";
    FUN5.style.display = "block";
    FUN6.style.display = "block";
    FUN7.style.display = "block";
    FUN8.style.display = "block";
    FUN9.style.display = "block";
  }

}

function countNumberNOP() {
  GetVariables();
  if (nop == 0) {
    propertyColor.style.display = "none";
    F11P1.style.display = "none";
    F11P2.style.display = "none";
    F11P3.style.display = "none";
    F11P4.style.display = "none";
    F11P5.style.display = "none";
    F11P6.style.display = "none";
    F11P7.style.display = "none";
    F11P8.style.display = "none";
    F11P9.style.display = "none";
    // functionMap2.style.display = "none";
  } else if (nop == 1) {
    propertyColor.style.display = "block";
    F11P1.style.display = "block";
    F11P2.style.display = "none";
    F11P3.style.display = "none";
    F11P4.style.display = "none";
    F11P5.style.display = "none";
    F11P6.style.display = "none";
    F11P7.style.display = "none";
    F11P8.style.display = "none";
    F11P9.style.display = "none";
   } else if (nop == 2) {
    propertyColor.style.display = "block";
    F11P1.style.display = "block";
    F11P2.style.display = "block";
    F11P3.style.display = "none";
    F11P4.style.display = "none";
    F11P5.style.display = "none";
    F11P6.style.display = "none";
    F11P7.style.display = "none";
    F11P8.style.display = "none";
    F11P9.style.display = "none";
   } else if (nop == 3) {
    propertyColor.style.display = "block";
     F11P1.style.display = "block";
     F11P2.style.display = "block";
     F11P3.style.display = "block";
    F11P4.style.display = "none";
    F11P5.style.display = "none";
    F11P6.style.display = "none";
    F11P7.style.display = "none";
    F11P8.style.display = "none";
    F11P9.style.display = "none";
  } else if (nop == 4) {
    propertyColor.style.display = "block";
    F11P1.style.display = "block";
    F11P2.style.display = "block";
    F11P3.style.display = "block";
    F11P4.style.display = "block";
    F11P5.style.display = "none";
    F11P6.style.display = "none";
    F11P7.style.display = "none";
    F11P8.style.display = "none";
    F11P9.style.display = "none";
  } else if (nop == 5) {
    propertyColor.style.display = "block";
    F11P1.style.display = "block";
    F11P2.style.display = "block";
    F11P3.style.display = "block";
    F11P4.style.display = "block";
    F11P5.style.display = "block";
    F11P6.style.display = "none";
    F11P7.style.display = "none";
    F11P8.style.display = "none";
    F11P9.style.display = "none";
  } else if (nop == 6) {
    propertyColor.style.display = "block";
    F11P1.style.display = "block";
    F11P2.style.display = "block";
    F11P3.style.display = "block";
    F11P4.style.display = "block";
    F11P5.style.display = "block";
    F11P6.style.display = "block";
    F11P7.style.display = "none";
    F11P8.style.display = "none";
    F11P9.style.display = "none";
  } else if (nop == 7) {
    propertyColor.style.display = "block";
    F11P1.style.display = "block";
    F11P2.style.display = "block";
    F11P3.style.display = "block";
    F11P4.style.display = "block";
    F11P5.style.display = "block";
    F11P6.style.display = "block";
    F11P7.style.display = "block";
    F11P8.style.display = "none";
    F11P9.style.display = "none";
  } else if (nop == 8) {
    propertyColor.style.display = "block";
    F11P1.style.display = "block";
    F11P2.style.display = "block";
    F11P3.style.display = "block";
    F11P4.style.display = "block";
    F11P5.style.display = "block";
    F11P6.style.display = "block";
    F11P7.style.display = "block";
    F11P8.style.display = "block";
    F11P9.style.display = "none";
  } else if (nop == 9) {
    propertyColor.style.display = "block";
    F11P1.style.display = "block";
    F11P2.style.display = "block";
    F11P3.style.display = "block";
    F11P4.style.display = "block";
    F11P5.style.display = "block";
    F11P6.style.display = "block";
    F11P7.style.display = "block";
    F11P8.style.display = "block";
    F11P9.style.display = "block";
   }

//    $("#nop").change(function () {
//     var direction = this.defaultValue < this.value
//     this.defaultValue = this.value;
//     if (direction) console.log("increase!");
//     else functionMap2.style.display = "none";
// });
 }
 function countNumberNOP2() {
 GetVariables();
  if (nop2 == 0) {
    propertyColor2.style.display = "none";
    F21P1.style.display = "none";
    F21P2.style.display = "none";
    F21P3.style.display = "none";
    F21P4.style.display = "none";
    F21P5.style.display = "none";
    F21P6.style.display = "none";
    F21P7.style.display = "none";
    F21P8.style.display = "none";
    F21P9.style.display = "none";
  } else if (nop2 == 1) {
    propertyColor2.style.display = "block";
     F21P1.style.display = "block";
    F21P2.style.display = "none";
    F21P3.style.display = "none";
    F21P4.style.display = "none";
    F21P5.style.display = "none";
    F21P6.style.display = "none";
    F21P7.style.display = "none";
    F21P8.style.display = "none";
    F21P9.style.display = "none";
   } else if (nop2 == 2) {
    propertyColor2.style.display = "block";
    F21P1.style.display = "block";
    F21P2.style.display = "block";
    F21P3.style.display = "none";
    F21P4.style.display = "none";
    F21P5.style.display = "none";
    F21P6.style.display = "none";
    F21P7.style.display = "none";
    F21P8.style.display = "none";
    F21P9.style.display = "none";
   } else if (nop2 == 3) {
    propertyColor2.style.display = "block";
      F21P1.style.display = "block";
    F21P2.style.display = "block";
    F21P3.style.display = "block";
    F21P4.style.display = "none";
    F21P5.style.display = "none";
    F21P6.style.display = "none";
    F21P7.style.display = "none";
    F21P8.style.display = "none";
    F21P9.style.display = "none";
  } else if (nop2 == 4) {
    propertyColor2.style.display = "block";
    F21P1.style.display = "block";
    F21P2.style.display = "block";
    F21P3.style.display = "block";
    F21P4.style.display = "block";
    F21P5.style.display = "none";
    F21P6.style.display = "none";
    F21P7.style.display = "none";
    F21P8.style.display = "none";
    F21P9.style.display = "none";
  } else if (nop2 == 5) {
    propertyColor2.style.display = "block";
    F21P1.style.display = "block";
    F21P2.style.display = "block";
    F21P3.style.display = "block";
    F21P4.style.display = "block";
    F21P5.style.display = "block";
    F21P6.style.display = "none";
    F21P7.style.display = "none";
    F21P8.style.display = "none";
    F21P9.style.display = "none";
  } else if (nop2 == 6) {
    propertyColor2.style.display = "block";
     F21P1.style.display = "block";
    F21P2.style.display = "block";
    F21P3.style.display = "block";
    F21P4.style.display = "block";
    F21P5.style.display = "block";
    F21P6.style.display = "block";
    F21P7.style.display = "none";
    F21P8.style.display = "none";
    F21P9.style.display = "none";
  } else if (nop2 == 7) {
    propertyColor2.style.display = "block";
   F21P1.style.display = "block";
    F21P2.style.display = "block";
    F21P3.style.display = "block";
    F21P4.style.display = "block";
    F21P5.style.display = "block";
    F21P6.style.display = "block";
    F21P7.style.display = "block";
    F21P8.style.display = "none";
    F21P9.style.display = "none";
  } else if (nop2 == 8) {
    propertyColor2.style.display = "block";
    F21P1.style.display = "block";
    F21P2.style.display = "block";
    F21P3.style.display = "block";
    F21P4.style.display = "block";
    F21P5.style.display = "block";
    F21P6.style.display = "block";
    F21P7.style.display = "block";
    F21P8.style.display = "block";
    F21P9.style.display = "none";
  } else if (nop2 == 9) {
    propertyColor2.style.display = "block";
     F21P1.style.display = "block";
    F21P2.style.display = "block";
    F21P3.style.display = "block";
    F21P4.style.display = "block";
    F21P5.style.display = "block";
    F21P6.style.display = "block";
    F21P7.style.display = "block";
    F21P8.style.display = "block";
    F21P9.style.display = "block";
   }

//    $("#nop2").change(function () {
//     var direction = this.defaultValue < this.value
//     this.defaultValue = this.value;
//     if (direction) console.log("increase!");
//     else functionMap3.style.display = "none";
// });
 }

function countNumberNOP3() {
 GetVariables();
  if (nop3 == 0) {
    propertyColor3.style.display = "none";
    F31P1.style.display = "none";
    F31P2.style.display = "none";
    F31P3.style.display = "none";
    F31P4.style.display = "none";
    F31P5.style.display = "none";
    F31P6.style.display = "none";
    F31P7.style.display = "none";
    F31P8.style.display = "none";
    F31P9.style.display = "none";
  } else if (nop3 == 1) {
    propertyColor3.style.display = "block";
     F31P1.style.display = "block";
    F31P2.style.display = "none";
    F31P3.style.display = "none";
    F31P4.style.display = "none";
    F31P5.style.display = "none";
    F31P6.style.display = "none";
    F31P7.style.display = "none";
    F31P8.style.display = "none";
    F31P9.style.display = "none";
   } else if (nop3 == 2) {
    propertyColor3.style.display = "block";
    F31P1.style.display = "block";
    F31P2.style.display = "block";
    F31P3.style.display = "none";
    F31P4.style.display = "none";
    F31P5.style.display = "none";
    F31P6.style.display = "none";
    F31P7.style.display = "none";
    F31P8.style.display = "none";
    F31P9.style.display = "none";
   } else if (nop3 == 3) {
    propertyColor3.style.display = "block";
      F31P1.style.display = "block";
    F31P2.style.display = "block";
    F31P3.style.display = "block";
    F31P4.style.display = "none";
    F31P5.style.display = "none";
    F31P6.style.display = "none";
    F31P7.style.display = "none";
    F31P8.style.display = "none";
    F31P9.style.display = "none";
  } else if (nop3 == 4) {
    propertyColor3.style.display = "block";
    F31P1.style.display = "block";
    F31P2.style.display = "block";
    F31P3.style.display = "block";
    F31P4.style.display = "block";
    F31P5.style.display = "none";
    F31P6.style.display = "none";
    F31P7.style.display = "none";
    F31P8.style.display = "none";
    F31P9.style.display = "none";
  } else if (nop3 == 5) {
    propertyColor3.style.display = "block";
    F31P1.style.display = "block";
    F31P2.style.display = "block";
    F31P3.style.display = "block";
    F31P4.style.display = "block";
    F31P5.style.display = "block";
    F31P6.style.display = "none";
    F31P7.style.display = "none";
    F31P8.style.display = "none";
    F31P9.style.display = "none";
  } else if (nop3 == 6) {
    propertyColor3.style.display = "block";
     F31P1.style.display = "block";
    F31P2.style.display = "block";
    F31P3.style.display = "block";
    F31P4.style.display = "block";
    F31P5.style.display = "block";
    F31P6.style.display = "block";
    F31P7.style.display = "none";
    F31P8.style.display = "none";
    F31P9.style.display = "none";
  } else if (nop3 == 7) {
    propertyColor3.style.display = "block";
   F31P1.style.display = "block";
    F31P2.style.display = "block";
    F31P3.style.display = "block";
    F31P4.style.display = "block";
    F31P5.style.display = "block";
    F31P6.style.display = "block";
    F31P7.style.display = "block";
    F31P8.style.display = "none";
    F31P9.style.display = "none";
  } else if (nop3 == 8) {
    propertyColor3.style.display = "block";
    F31P1.style.display = "block";
    F31P2.style.display = "block";
    F31P3.style.display = "block";
    F31P4.style.display = "block";
    F31P5.style.display = "block";
    F31P6.style.display = "block";
    F31P7.style.display = "block";
    F31P8.style.display = "block";
    F31P9.style.display = "none";
  } else if (nop3 == 9) {
    propertyColor3.style.display = "block";
     F31P1.style.display = "block";
    F31P2.style.display = "block";
    F31P3.style.display = "block";
    F31P4.style.display = "block";
    F31P5.style.display = "block";
    F31P6.style.display = "block";
    F31P7.style.display = "block";
    F31P8.style.display = "block";
    F31P9.style.display = "block";
   }

//    $("#nop3").change(function () {
//     var direction = this.defaultValue < this.value
//     this.defaultValue = this.value;
//     if (direction) console.log("increase!");
//     else functionMap4.style.display = "none";
// });
 }

function countNumberNOP4() {
 GetVariables();
  if (nop4 == 0) {
    propertyColor4.style.display = "none";
    F41P1.style.display = "none";
    F41P2.style.display = "none";
    F41P3.style.display = "none";
    F41P4.style.display = "none";
    F41P5.style.display = "none";
    F41P6.style.display = "none";
    F41P7.style.display = "none";
    F41P8.style.display = "none";
    F41P9.style.display = "none";
  } else if (nop4 == 1) {
    propertyColor4.style.display = "block";
     F41P1.style.display = "block";
    F41P2.style.display = "none";
    F41P3.style.display = "none";
    F41P4.style.display = "none";
    F41P5.style.display = "none";
    F41P6.style.display = "none";
    F41P7.style.display = "none";
    F41P8.style.display = "none";
    F41P9.style.display = "none";
   } else if (nop4 == 2) {
    propertyColor4.style.display = "block";
    F41P1.style.display = "block";
    F41P2.style.display = "block";
    F41P3.style.display = "none";
    F41P4.style.display = "none";
    F41P5.style.display = "none";
    F41P6.style.display = "none";
    F41P7.style.display = "none";
    F41P8.style.display = "none";
    F41P9.style.display = "none";
   } else if (nop4 == 3) {
    propertyColor4.style.display = "block";
      F41P1.style.display = "block";
    F41P2.style.display = "block";
    F41P3.style.display = "block";
    F41P4.style.display = "none";
    F41P5.style.display = "none";
    F41P6.style.display = "none";
    F41P7.style.display = "none";
    F41P8.style.display = "none";
    F41P9.style.display = "none";
  } else if (nop4 == 4) {
    propertyColor4.style.display = "block";
    F41P1.style.display = "block";
    F41P2.style.display = "block";
    F41P3.style.display = "block";
    F41P4.style.display = "block";
    F41P5.style.display = "none";
    F41P6.style.display = "none";
    F41P7.style.display = "none";
    F41P8.style.display = "none";
    F41P9.style.display = "none";
  } else if (nop4 == 5) {
    propertyColor4.style.display = "block";
    F41P1.style.display = "block";
    F41P2.style.display = "block";
    F41P3.style.display = "block";
    F41P4.style.display = "block";
    F41P5.style.display = "block";
    F41P6.style.display = "none";
    F41P7.style.display = "none";
    F41P8.style.display = "none";
    F41P9.style.display = "none";
  } else if (nop4 == 6) {
    propertyColor4.style.display = "block";
     F41P1.style.display = "block";
    F41P2.style.display = "block";
    F41P3.style.display = "block";
    F41P4.style.display = "block";
    F41P5.style.display = "block";
    F41P6.style.display = "block";
    F41P7.style.display = "none";
    F41P8.style.display = "none";
    F41P9.style.display = "none";
  } else if (nop4 == 7) {
    propertyColor4.style.display = "block";
   F41P1.style.display = "block";
    F41P2.style.display = "block";
    F41P3.style.display = "block";
    F41P4.style.display = "block";
    F41P5.style.display = "block";
    F41P6.style.display = "block";
    F41P7.style.display = "block";
    F41P8.style.display = "none";
    F41P9.style.display = "none";
  } else if (nop4 == 8) {
    propertyColor4.style.display = "block";
    F41P1.style.display = "block";
    F41P2.style.display = "block";
    F41P3.style.display = "block";
    F41P4.style.display = "block";
    F41P5.style.display = "block";
    F41P6.style.display = "block";
    F41P7.style.display = "block";
    F41P8.style.display = "block";
    F41P9.style.display = "none";
  } else if (nop4 == 9) {
    propertyColor4.style.display = "block";
     F41P1.style.display = "block";
    F41P2.style.display = "block";
    F41P3.style.display = "block";
    F41P4.style.display = "block";
    F41P5.style.display = "block";
    F41P6.style.display = "block";
    F41P7.style.display = "block";
    F41P8.style.display = "block";
    F41P9.style.display = "block";
   }

//    $("#nop4").change(function () {
//     var direction = this.defaultValue < this.value
//     this.defaultValue = this.value;
//     if (direction) console.log("increase!");
//     else functionMap5.style.display = "none";
// });
 }

function countNumberNOP5() {
 GetVariables();
  if (nop5 == 0) {
    propertyColor5.style.display = "none";
    F51P1.style.display = "none";
    F51P2.style.display = "none";
    F51P3.style.display = "none";
    F51P4.style.display = "none";
    F51P5.style.display = "none";
    F51P6.style.display = "none";
    F51P7.style.display = "none";
    F51P8.style.display = "none";
    F51P9.style.display = "none";
  } else if (nop5 == 1) {
    propertyColor5.style.display = "block";
     F51P1.style.display = "block";
    F51P2.style.display = "none";
    F51P3.style.display = "none";
    F51P4.style.display = "none";
    F51P5.style.display = "none";
    F51P6.style.display = "none";
    F51P7.style.display = "none";
    F51P8.style.display = "none";
    F51P9.style.display = "none";
   } else if (nop5 == 2) {
    propertyColor5.style.display = "block";
    F51P1.style.display = "block";
    F51P2.style.display = "block";
    F51P3.style.display = "none";
    F51P4.style.display = "none";
    F51P5.style.display = "none";
    F51P6.style.display = "none";
    F51P7.style.display = "none";
    F51P8.style.display = "none";
    F51P9.style.display = "none";
   } else if (nop5 == 3) {
    propertyColor5.style.display = "block";
      F51P1.style.display = "block";
    F51P2.style.display = "block";
    F51P3.style.display = "block";
    F51P4.style.display = "none";
    F51P5.style.display = "none";
    F51P6.style.display = "none";
    F51P7.style.display = "none";
    F51P8.style.display = "none";
    F51P9.style.display = "none";
  } else if (nop5 == 4) {
    propertyColor5.style.display = "block";
    F51P1.style.display = "block";
    F51P2.style.display = "block";
    F51P3.style.display = "block";
    F51P4.style.display = "block";
    F51P5.style.display = "none";
    F51P6.style.display = "none";
    F51P7.style.display = "none";
    F51P8.style.display = "none";
    F51P9.style.display = "none";
  } else if (nop5 == 5) {
    propertyColor5.style.display = "block";
    F51P1.style.display = "block";
    F51P2.style.display = "block";
    F51P3.style.display = "block";
    F51P4.style.display = "block";
    F51P5.style.display = "block";
    F51P6.style.display = "none";
    F51P7.style.display = "none";
    F51P8.style.display = "none";
    F51P9.style.display = "none";
  } else if (nop5 == 6) {
    propertyColor5.style.display = "block";
     F51P1.style.display = "block";
    F51P2.style.display = "block";
    F51P3.style.display = "block";
    F51P4.style.display = "block";
    F51P5.style.display = "block";
    F51P6.style.display = "block";
    F51P7.style.display = "none";
    F51P8.style.display = "none";
    F51P9.style.display = "none";
  } else if (nop5 == 7) {
    propertyColor5.style.display = "block";
   F51P1.style.display = "block";
    F51P2.style.display = "block";
    F51P3.style.display = "block";
    F51P4.style.display = "block";
    F51P5.style.display = "block";
    F51P6.style.display = "block";
    F51P7.style.display = "block";
    F51P8.style.display = "none";
    F51P9.style.display = "none";
  } else if (nop5 == 8) {
    propertyColor5.style.display = "block";
    F51P1.style.display = "block";
    F51P2.style.display = "block";
    F51P3.style.display = "block";
    F51P4.style.display = "block";
    F51P5.style.display = "block";
    F51P6.style.display = "block";
    F51P7.style.display = "block";
    F51P8.style.display = "block";
    F51P9.style.display = "none";
  } else if (nop5 == 9) {
    propertyColor5.style.display = "block";
     F51P1.style.display = "block";
    F51P2.style.display = "block";
    F51P3.style.display = "block";
    F51P4.style.display = "block";
    F51P5.style.display = "block";
    F51P6.style.display = "block";
    F51P7.style.display = "block";
    F51P8.style.display = "block";
    F51P9.style.display = "block";
   }

//    $("#nop5").change(function () {
//     var direction = this.defaultValue < this.value
//     this.defaultValue = this.value;
//     if (direction) console.log("increase!");
//     else functionMap6.style.display = "none";
// });
 }

 function countNumberNOP6() {
 GetVariables();
  if (nop6 == 0) {
    propertyColor6.style.display = "none";
    F61P1.style.display = "none";
    F61P2.style.display = "none";
    F61P3.style.display = "none";
    F61P4.style.display = "none";
    F61P5.style.display = "none";
    F61P6.style.display = "none";
    F61P7.style.display = "none";
    F61P8.style.display = "none";
    F61P9.style.display = "none";
  } else if (nop6 == 1) {
    propertyColor6.style.display = "block";
     F61P1.style.display = "block";
    F61P2.style.display = "none";
    F61P3.style.display = "none";
    F61P4.style.display = "none";
    F61P5.style.display = "none";
    F61P6.style.display = "none";
    F61P7.style.display = "none";
    F61P8.style.display = "none";
    F61P9.style.display = "none";
   } else if (nop6 == 2) {
    propertyColor6.style.display = "block";
    F61P1.style.display = "block";
    F61P2.style.display = "block";
    F61P3.style.display = "none";
    F61P4.style.display = "none";
    F61P5.style.display = "none";
    F61P6.style.display = "none";
    F61P7.style.display = "none";
    F61P8.style.display = "none";
    F61P9.style.display = "none";
   } else if (nop6 == 3) {
    propertyColor6.style.display = "block";
      F61P1.style.display = "block";
    F61P2.style.display = "block";
    F61P3.style.display = "block";
    F61P4.style.display = "none";
    F61P5.style.display = "none";
    F61P6.style.display = "none";
    F61P7.style.display = "none";
    F61P8.style.display = "none";
    F61P9.style.display = "none";
  } else if (nop6 == 4) {
    propertyColor6.style.display = "block";
    F61P1.style.display = "block";
    F61P2.style.display = "block";
    F61P3.style.display = "block";
    F61P4.style.display = "block";
    F61P5.style.display = "none";
    F61P6.style.display = "none";
    F61P7.style.display = "none";
    F61P8.style.display = "none";
    F61P9.style.display = "none";
  } else if (nop6 == 5) {
    propertyColor6.style.display = "block";
    F61P1.style.display = "block";
    F61P2.style.display = "block";
    F61P3.style.display = "block";
    F61P4.style.display = "block";
    F61P5.style.display = "block";
    F61P6.style.display = "none";
    F61P7.style.display = "none";
    F61P8.style.display = "none";
    F61P9.style.display = "none";
  } else if (nop6 == 6) {
    propertyColor6.style.display = "block";
     F61P1.style.display = "block";
    F61P2.style.display = "block";
    F61P3.style.display = "block";
    F61P4.style.display = "block";
    F61P5.style.display = "block";
    F61P6.style.display = "block";
    F61P7.style.display = "none";
    F61P8.style.display = "none";
    F61P9.style.display = "none";
  } else if (nop6 == 7) {
    propertyColor6.style.display = "block";
   F61P1.style.display = "block";
    F61P2.style.display = "block";
    F61P3.style.display = "block";
    F61P4.style.display = "block";
    F61P5.style.display = "block";
    F61P6.style.display = "block";
    F61P7.style.display = "block";
    F61P8.style.display = "none";
    F61P9.style.display = "none";
  } else if (nop6 == 8) {
    propertyColor6.style.display = "block";
    F61P1.style.display = "block";
    F61P2.style.display = "block";
    F61P3.style.display = "block";
    F61P4.style.display = "block";
    F61P5.style.display = "block";
    F61P6.style.display = "block";
    F61P7.style.display = "block";
    F61P8.style.display = "block";
    F61P9.style.display = "none";
  } else if (nop6 == 9) {
    propertyColor6.style.display = "block";
     F61P1.style.display = "block";
    F61P2.style.display = "block";
    F61P3.style.display = "block";
    F61P4.style.display = "block";
    F61P5.style.display = "block";
    F61P6.style.display = "block";
    F61P7.style.display = "block";
    F61P8.style.display = "block";
    F61P9.style.display = "block";
   }

//    $("#nop6").change(function () {
//     var direction = this.defaultValue < this.value
//     this.defaultValue = this.value;
//     if (direction) console.log("increase!");
//     else functionMap6.style.display = "none";
// });
 }

function countNumberNOP7() {
 GetVariables();
  if (nop7 == 0) {
    propertyColor7.style.display = "none";
    F71P1.style.display = "none";
    F71P2.style.display = "none";
    F71P3.style.display = "none";
    F71P4.style.display = "none";
    F71P5.style.display = "none";
    F71P6.style.display = "none";
    F71P7.style.display = "none";
    F71P8.style.display = "none";
    F71P9.style.display = "none";
  } else if (nop7 == 1) {
    propertyColor7.style.display = "block";
     F71P1.style.display = "block";
    F71P2.style.display = "none";
    F71P3.style.display = "none";
    F71P4.style.display = "none";
    F71P5.style.display = "none";
    F71P6.style.display = "none";
    F71P7.style.display = "none";
    F71P8.style.display = "none";
    F71P9.style.display = "none";
   } else if (nop7 == 2) {
    propertyColor7.style.display = "block";
    F71P1.style.display = "block";
    F71P2.style.display = "block";
    F71P3.style.display = "none";
    F71P4.style.display = "none";
    F71P5.style.display = "none";
    F71P6.style.display = "none";
    F71P7.style.display = "none";
    F71P8.style.display = "none";
    F71P9.style.display = "none";
   } else if (nop7 == 3) {
    propertyColor7.style.display = "block";
      F71P1.style.display = "block";
    F71P2.style.display = "block";
    F71P3.style.display = "block";
    F71P4.style.display = "none";
    F71P5.style.display = "none";
    F71P6.style.display = "none";
    F71P7.style.display = "none";
    F71P8.style.display = "none";
    F71P9.style.display = "none";
  } else if (nop7 == 4) {
    propertyColor7.style.display = "block";
    F71P1.style.display = "block";
    F71P2.style.display = "block";
    F71P3.style.display = "block";
    F71P4.style.display = "block";
    F71P5.style.display = "none";
    F71P6.style.display = "none";
    F71P7.style.display = "none";
    F71P8.style.display = "none";
    F71P9.style.display = "none";
  } else if (nop7 == 5) {
    propertyColor7.style.display = "block";
    F71P1.style.display = "block";
    F71P2.style.display = "block";
    F71P3.style.display = "block";
    F71P4.style.display = "block";
    F71P5.style.display = "block";
    F71P6.style.display = "none";
    F71P7.style.display = "none";
    F71P8.style.display = "none";
    F71P9.style.display = "none";
  } else if (nop7 == 6) {
    propertyColor7.style.display = "block";
     F71P1.style.display = "block";
    F71P2.style.display = "block";
    F71P3.style.display = "block";
    F71P4.style.display = "block";
    F71P5.style.display = "block";
    F71P6.style.display = "block";
    F71P7.style.display = "none";
    F71P8.style.display = "none";
    F71P9.style.display = "none";
  } else if (nop7 == 7) {
    propertyColor7.style.display = "block";
   F71P1.style.display = "block";
    F71P2.style.display = "block";
    F71P3.style.display = "block";
    F71P4.style.display = "block";
    F71P5.style.display = "block";
    F71P6.style.display = "block";
    F71P7.style.display = "block";
    F71P8.style.display = "none";
    F71P9.style.display = "none";
  } else if (nop7 == 8) {
    propertyColor7.style.display = "block";
    F71P1.style.display = "block";
    F71P2.style.display = "block";
    F71P3.style.display = "block";
    F71P4.style.display = "block";
    F71P5.style.display = "block";
    F71P6.style.display = "block";
    F71P7.style.display = "block";
    F71P8.style.display = "block";
    F71P9.style.display = "none";
  } else if (nop7 == 9) {
    propertyColor7.style.display = "block";
     F71P1.style.display = "block";
    F71P2.style.display = "block";
    F71P3.style.display = "block";
    F71P4.style.display = "block";
    F71P5.style.display = "block";
    F71P6.style.display = "block";
    F71P7.style.display = "block";
    F71P8.style.display = "block";
    F71P9.style.display = "block";
   }

//    $("#nop7").change(function () {
//     var direction = this.defaultValue < this.value
//     this.defaultValue = this.value;
//     if (direction) console.log("increase!");
//     else functionMap6.style.display = "none";
// });
 }

 function countNumberNOP8() {
 GetVariables();
  if (nop8 == 0) {
    propertyColor8.style.display = "none";
    F81P1.style.display = "none";
    F81P2.style.display = "none";
    F81P3.style.display = "none";
    F81P4.style.display = "none";
    F81P5.style.display = "none";
    F81P6.style.display = "none";
    F81P7.style.display = "none";
    F81P8.style.display = "none";
    F81P9.style.display = "none";
  } else if (nop8 == 1) {
    propertyColor8.style.display = "block";
     F81P1.style.display = "block";
    F81P2.style.display = "none";
    F81P3.style.display = "none";
    F81P4.style.display = "none";
    F81P5.style.display = "none";
    F81P6.style.display = "none";
    F81P7.style.display = "none";
    F81P8.style.display = "none";
    F81P9.style.display = "none";
   } else if (nop8 == 2) {
    propertyColor8.style.display = "block";
    F81P1.style.display = "block";
    F81P2.style.display = "block";
    F81P3.style.display = "none";
    F81P4.style.display = "none";
    F81P5.style.display = "none";
    F81P6.style.display = "none";
    F81P7.style.display = "none";
    F81P8.style.display = "none";
    F81P9.style.display = "none";
   } else if (nop8 == 3) {
    propertyColor8.style.display = "block";
      F81P1.style.display = "block";
    F81P2.style.display = "block";
    F81P3.style.display = "block";
    F81P4.style.display = "none";
    F81P5.style.display = "none";
    F81P6.style.display = "none";
    F81P7.style.display = "none";
    F81P8.style.display = "none";
    F81P9.style.display = "none";
  } else if (nop8 == 4) {
    propertyColor8.style.display = "block";
    F81P1.style.display = "block";
    F81P2.style.display = "block";
    F81P3.style.display = "block";
    F81P4.style.display = "block";
    F81P5.style.display = "none";
    F81P6.style.display = "none";
    F81P7.style.display = "none";
    F81P8.style.display = "none";
    F81P9.style.display = "none";
  } else if (nop8 == 5) {
    propertyColor8.style.display = "block";
    F81P1.style.display = "block";
    F81P2.style.display = "block";
    F81P3.style.display = "block";
    F81P4.style.display = "block";
    F81P5.style.display = "block";
    F81P6.style.display = "none";
    F81P7.style.display = "none";
    F81P8.style.display = "none";
    F81P9.style.display = "none";
  } else if (nop8 == 6) {
    propertyColor8.style.display = "block";
     F81P1.style.display = "block";
    F81P2.style.display = "block";
    F81P3.style.display = "block";
    F81P4.style.display = "block";
    F81P5.style.display = "block";
    F81P6.style.display = "block";
    F81P7.style.display = "none";
    F81P8.style.display = "none";
    F81P9.style.display = "none";
  } else if (nop8 == 7) {
    propertyColor8.style.display = "block";
   F81P1.style.display = "block";
    F81P2.style.display = "block";
    F81P3.style.display = "block";
    F81P4.style.display = "block";
    F81P5.style.display = "block";
    F81P6.style.display = "block";
    F81P7.style.display = "block";
    F81P8.style.display = "none";
    F81P9.style.display = "none";
  } else if (nop8 == 8) {
    propertyColor8.style.display = "block";
    F81P1.style.display = "block";
    F81P2.style.display = "block";
    F81P3.style.display = "block";
    F81P4.style.display = "block";
    F81P5.style.display = "block";
    F81P6.style.display = "block";
    F81P7.style.display = "block";
    F81P8.style.display = "block";
    F81P9.style.display = "none";
  } else if (nop8 == 9) {
    propertyColor8.style.display = "block";
     F81P1.style.display = "block";
    F81P2.style.display = "block";
    F81P3.style.display = "block";
    F81P4.style.display = "block";
    F81P5.style.display = "block";
    F81P6.style.display = "block";
    F81P7.style.display = "block";
    F81P8.style.display = "block";
    F81P9.style.display = "block";
   }

//    $("#nop8").change(function () {
//     var direction = this.defaultValue < this.value
//     this.defaultValue = this.value;
//     if (direction) console.log("increase!");
//     else functionMap6.style.display = "none";
// });
 }

 function countNumberNOP9() {
 GetVariables();
  if (nop9 == 0) {
    propertyColor9.style.display = "none";
    F91P1.style.display = "none";
    F91P2.style.display = "none";
    F91P3.style.display = "none";
    F91P4.style.display = "none";
    F91P5.style.display = "none";
    F91P6.style.display = "none";
    F91P7.style.display = "none";
    F91P8.style.display = "none";
    F91P9.style.display = "none";
  } else if (nop9 == 1) {
    propertyColor9.style.display = "block";
     F91P1.style.display = "block";
    F91P2.style.display = "none";
    F91P3.style.display = "none";
    F91P4.style.display = "none";
    F91P5.style.display = "none";
    F91P6.style.display = "none";
    F91P7.style.display = "none";
    F91P8.style.display = "none";
    F91P9.style.display = "none";
   } else if (nop9 == 2) {
    propertyColor9.style.display = "block";
    F91P1.style.display = "block";
    F91P2.style.display = "block";
    F91P3.style.display = "none";
    F91P4.style.display = "none";
    F91P5.style.display = "none";
    F91P6.style.display = "none";
    F91P7.style.display = "none";
    F91P8.style.display = "none";
    F91P9.style.display = "none";
   } else if (nop9 == 3) {
    propertyColor9.style.display = "block";
      F91P1.style.display = "block";
    F91P2.style.display = "block";
    F91P3.style.display = "block";
    F91P4.style.display = "none";
    F91P5.style.display = "none";
    F91P6.style.display = "none";
    F91P7.style.display = "none";
    F91P8.style.display = "none";
    F91P9.style.display = "none";
  } else if (nop9 == 4) {
    propertyColor9.style.display = "block";
    F91P1.style.display = "block";
    F91P2.style.display = "block";
    F91P3.style.display = "block";
    F91P4.style.display = "block";
    F91P5.style.display = "none";
    F91P6.style.display = "none";
    F91P7.style.display = "none";
    F91P8.style.display = "none";
    F91P9.style.display = "none";
  } else if (nop9 == 5) {
    propertyColor9.style.display = "block";
    F91P1.style.display = "block";
    F91P2.style.display = "block";
    F91P3.style.display = "block";
    F91P4.style.display = "block";
    F91P5.style.display = "block";
    F91P6.style.display = "none";
    F91P7.style.display = "none";
    F91P8.style.display = "none";
    F91P9.style.display = "none";
  } else if (nop9 == 6) {
    propertyColor9.style.display = "block";
     F91P1.style.display = "block";
    F91P2.style.display = "block";
    F91P3.style.display = "block";
    F91P4.style.display = "block";
    F91P5.style.display = "block";
    F91P6.style.display = "block";
    F91P7.style.display = "none";
    F91P8.style.display = "none";
    F91P9.style.display = "none";
  } else if (nop9 == 7) {
    propertyColor9.style.display = "block";
   F91P1.style.display = "block";
    F91P2.style.display = "block";
    F91P3.style.display = "block";
    F91P4.style.display = "block";
    F91P5.style.display = "block";
    F91P6.style.display = "block";
    F91P7.style.display = "block";
    F91P8.style.display = "none";
    F91P9.style.display = "none";
  } else if (nop9 == 8) {
    propertyColor9.style.display = "block";
    F91P1.style.display = "block";
    F91P2.style.display = "block";
    F91P3.style.display = "block";
    F91P4.style.display = "block";
    F91P5.style.display = "block";
    F91P6.style.display = "block";
    F91P7.style.display = "block";
    F91P8.style.display = "block";
    F91P9.style.display = "none";
  } else if (nop9 == 9) {
    propertyColor9.style.display = "block";
    F91P1.style.display = "block";
    F91P2.style.display = "block";
    F91P3.style.display = "block";
    F91P4.style.display = "block";
    F91P5.style.display = "block";
    F91P6.style.display = "block";
    F91P7.style.display = "block";
    F91P8.style.display = "block";
    F91P9.style.display = "block";
   }

//    $("#nop9").change(function () {
//     var direction = this.defaultValue < this.value
//     this.defaultValue = this.value;
//     if (direction) console.log("increase!");
//     else functionMap6.style.display = "none";
// });
 }


function onReadFinishOnto(result){
	filenames = result;
   console.log(filenames);
   var settings = {
    url: "/api/readOnto",
    type: "POST",

    contenType: 'application/json; charset=utf-8',
    data: JSON.stringify({"text" : value}),

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

function onReadFinishClass(result){
filenames = result;
var select = document.getElementById("classLists");
for(var i = 0; i < filenames.length; i++) {
    var opt = filenames[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
      }


function onReadFinish(result){
filenames = result;
var select = document.getElementById("filenames");
for(var i = 0; i < filenames.length; i++) {
    var opt = filenames[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
      }

      
/* Generating Mapping Rule*/
function GenerateMR() {
	var downloadlink = document.getElementById('downloadlink');
	downloadlink.style.display = "block";
  
  var conc = "You can download the generated RML.";
  document.getElementById("demo").innerHTML = conc;

  var pref = document.getElementById('pref'),
    filenames = document.getElementById("filenames"),
    resultFilename = filenames.options[filenames.selectedIndex],  
    tm = document.getElementById('tm'),
    fun = document.getElementById("fun"),
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
    prefix11 = document.getElementById("prefix11"),
	
	source = document.getElementById("source"),
	referenceFormulation = document.getElementById("referenceFormulationField"),
	subjects = document.getElementById("subjects"),
    resultSubj = subjects.options[subjects.selectedIndex],
	subjectMap = document.getElementById("subjmap"),
	
	term = document.getElementById("term"),
	pom = document.getElementById("pom"),
	
	predicate = document.getElementById("predicate"),
    objects = document.getElementById("objects"),
    selectedObjectType = objects.options[objects.selectedIndex],
	objmap = document.getElementById("objmap"),
	data = document.getElementById("data"),
	termPOM = document.getElementById("termPOM"),
	joinCondition = document.getElementById("joinCondition"),
	child = document.getElementById("child"),
	parents = document.getElementById("parent"),
	predicate2 = document.getElementById("predicate2"),
    objects2 = document.getElementById("objects2"),
    selectedObjectType2 = objects2.options[objects2.selectedIndex],
	objmap2 = document.getElementById("objmap2"),
	data2 = document.getElementById("data2"),
	termPOM2 = document.getElementById("termPOM2"),
	joinCondition2 = document.getElementById("joinCondition2"),
	child2 = document.getElementById("child2"),
	parents2 = document.getElementById("parent2"),
	predicate3 = document.getElementById("predicate3"),
    objects3 = document.getElementById("objects3"),
    selectedObjectType3 = objects3.options[objects3.selectedIndex],
	objmap3 = document.getElementById("objmap3"),
	data3 = document.getElementById("data3"),
	termPOM3 = document.getElementById("termPOM3"),
	joinCondition3 = document.getElementById("joinCondition3"),
	child3 = document.getElementById("child3"),
	parents3 = document.getElementById("parent3"),
  predicate4 = document.getElementById("predicate4"),
    objects4 = document.getElementById("objects4"),
    selectedObjectType4 = objects4.options[objects4.selectedIndex],
  objmap4 = document.getElementById("objmap4"),
  data4 = document.getElementById("data4"),
  termPOM4 = document.getElementById("termPOM4"),
  joinCondition4 = document.getElementById("joinCondition4"),
  child4 = document.getElementById("child4"),
  parents4 = document.getElementById("parent4"),
  predicate5 = document.getElementById("predicate5"),
    objects5 = document.getElementById("objects5"),
    selectedObjectType5 = objects5.options[objects5.selectedIndex],
  objmap5 = document.getElementById("objmap5"),
  data5 = document.getElementById("data5"),
  termPOM5 = document.getElementById("termPOM5"),
  joinCondition5 = document.getElementById("joinCondition5"),
  child5 = document.getElementById("child5"),
  parents5 = document.getElementById("parent5"),
  predicate6 = document.getElementById("predicate6"),
    objects6 = document.getElementById("objects6"),
    selectedObjectType6 = objects6.options[objects6.selectedIndex],
  objmap6 = document.getElementById("objmap6"),
  data6 = document.getElementById("data6"),
  termPOM6 = document.getElementById("termPOM6"),
  joinCondition6 = document.getElementById("joinCondition6"),
  child6 = document.getElementById("child6"),
  parents6 = document.getElementById("parent6"),
  predicate7 = document.getElementById("predicate7"),
    objects7 = document.getElementById("objects7"),
    selectedObjectType7 = objects7.options[objects7.selectedIndex],
  objmap7 = document.getElementById("objmap7"),
  data7 = document.getElementById("data7"),
  termPOM7 = document.getElementById("termPOM7"),
  joinCondition7 = document.getElementById("joinCondition7"),
  child7 = document.getElementById("child7"),
  parents7 = document.getElementById("parent7"),
  predicate8 = document.getElementById("predicate8"),
    objects8 = document.getElementById("objects8"),
    selectedObjectType8 = objects8.options[objects8.selectedIndex],
  objmap8 = document.getElementById("objmap8"),
  data8 = document.getElementById("data8"),
  termPOM8 = document.getElementById("termPOM8"),
  joinCondition8 = document.getElementById("joinCondition8"),
  child8 = document.getElementById("child8"),
  parents8 = document.getElementById("parent8"),
  predicate9 = document.getElementById("predicate9"),
    objects9 = document.getElementById("objects9"),
    selectedObjectType9 = objects9.options[objects9.selectedIndex],
  objmap9 = document.getElementById("objmap9"),
  data9 = document.getElementById("data9"),
  termPOM9 = document.getElementById("termPOM9"),
  joinCondition9 = document.getElementById("joinCondition9"),
  child9 = document.getElementById("child9"),
  parents9 = document.getElementById("parent9"),
	
	source2 = document.getElementById("source2"),
	referenceFormulation2 = document.getElementById("referenceFormulationField2"),
	subjects2 = document.getElementById("subjects2"),
    resultSubj2 = subjects2.options[subjects2.selectedIndex],
	subjectMap2 = document.getElementById("subjmap2"),

	term2 = document.getElementById("term2"),
	pom2 = document.getElementById("pom2"),
	
	predicate12 = document.getElementById("predicate1-2"),
    objects12 = document.getElementById("objects1-2"),
    selectedObjectType12 = objects12.options[objects12.selectedIndex],
	objmap12 = document.getElementById("objmap1-2"),
	data12 = document.getElementById("data1-2"),
	termPOM12 = document.getElementById("termPOM1-2"),
	joinCondition12 = document.getElementById("joinCondition1-2"),
	child12 = document.getElementById("child1-2"),
	parents12 = document.getElementById("parent1-2"),
	predicate22 = document.getElementById("predicate2-2"),
    objects22 = document.getElementById("objects2-2"),
    selectedObjectType22 = objects22.options[objects22.selectedIndex],
	objmap22 = document.getElementById("objmap2-2"),
	data22 = document.getElementById("data2-2"),
	termPOM22 = document.getElementById("termPOM2-2"),
	joinCondition22 = document.getElementById("joinCondition2-2"),
	child22 = document.getElementById("child2-2"),
	parents22 = document.getElementById("parent2-2"),
	predicate32 = document.getElementById("predicate3-2"),
    objects32 = document.getElementById("objects3-2"),
    selectedObjectType32 = objects32.options[objects32.selectedIndex],
	objmap32 = document.getElementById("objmap3-2"),
	data32 = document.getElementById("data3-2"),
	termPOM32 = document.getElementById("termPOM3-2"),
	joinCondition32 = document.getElementById("joinCondition3-2"),
	child32 = document.getElementById("child3-2"),
	parents32 = document.getElementById("parent3-2"),
  predicate42 = document.getElementById("predicate4-2"),
    objects42 = document.getElementById("objects4-2"),
    selectedObjectType42 = objects42.options[objects42.selectedIndex],
  objmap42 = document.getElementById("objmap4-2"),
  data42 = document.getElementById("data4-2"),
  termPOM42 = document.getElementById("termPOM4-2"),
  joinCondition42 = document.getElementById("joinCondition4-2"),
  child42 = document.getElementById("child4-2"),
  parents42 = document.getElementById("parent4-2"),
  predicate52 = document.getElementById("predicate5-2"),
    objects52 = document.getElementById("objects5-2"),
    selectedObjectType52 = objects52.options[objects52.selectedIndex],
  objmap52 = document.getElementById("objmap5-2"),
  data52 = document.getElementById("data5-2"),
  termPOM52 = document.getElementById("termPOM5-2"),
  joinCondition52 = document.getElementById("joinCondition5-2"),
  child52 = document.getElementById("child5-2"),
  parents52 = document.getElementById("parent5-2"),
  predicate62 = document.getElementById("predicate6-2"),
    objects62 = document.getElementById("objects6-2"),
    selectedObjectType62 = objects62.options[objects62.selectedIndex],
  objmap62 = document.getElementById("objmap6-2"),
  data62 = document.getElementById("data6-2"),
  termPOM62 = document.getElementById("termPOM6-2"),
  joinCondition62 = document.getElementById("joinCondition6-2"),
  child62 = document.getElementById("child6-2"),
  parents62 = document.getElementById("parent6-2"),
  predicate72 = document.getElementById("predicate7-2"),
    objects72 = document.getElementById("objects7-2"),
    selectedObjectType72 = objects72.options[objects72.selectedIndex],
  objmap72 = document.getElementById("objmap7-2"),
  data72 = document.getElementById("data7-2"),
  termPOM72 = document.getElementById("termPOM7-2"),
  joinCondition72 = document.getElementById("joinCondition7-2"),
  child72 = document.getElementById("child7-2"),
  parents72 = document.getElementById("parent7-2"),
  predicate82 = document.getElementById("predicate8-2"),
    objects82 = document.getElementById("objects8-2"),
    selectedObjectType82 = objects82.options[objects82.selectedIndex],
  objmap82 = document.getElementById("objmap8-2"),
  data82 = document.getElementById("data8-2"),
  termPOM82 = document.getElementById("termPOM8-2"),
  joinCondition82 = document.getElementById("joinCondition8-2"),
  child82 = document.getElementById("child8-2"),
  parents82 = document.getElementById("parent8-2"),
  predicate92 = document.getElementById("predicate9-2"),
    objects92 = document.getElementById("objects9-2"),
    selectedObjectType92 = objects92.options[objects92.selectedIndex],
  objmap92 = document.getElementById("objmap9-2"),
  data92 = document.getElementById("data9-2"),
  termPOM92 = document.getElementById("termPOM9-2"),
  joinCondition92 = document.getElementById("joinCondition9-2"),
  child92 = document.getElementById("child9-2"),
  parents92 = document.getElementById("parent9-2"),
	
	source3 = document.getElementById("source3"),
	referenceFormulation3 = document.getElementById("referenceFormulationField3"),
	subjects3 = document.getElementById("subjects3"),
    resultSubj3 = subjects3.options[subjects3.selectedIndex],
	subjectMap3 = document.getElementById("subjmap3"),
	
	term3 = document.getElementById("term3"),
	pom3 = document.getElementById("pom3"),

	predicate13 = document.getElementById("predicate1-3"),
    objects13 = document.getElementById("objects1-3"),
    selectedObjectType13 = objects13.options[objects13.selectedIndex],
	objmap13 = document.getElementById("objmap1-3"),
	data13 = document.getElementById("data1-3"),
	termPOM13 = document.getElementById("termPOM1-3"),
	joinCondition13 = document.getElementById("joinCondition1-3"),
	child13 = document.getElementById("child1-3"),
	parents13 = document.getElementById("parent1-3"),
	predicate23 = document.getElementById("predicate2-3"),
    objects23 = document.getElementById("objects2-3"),
    selectedObjectType23 = objects23.options[objects23.selectedIndex],
	objmap23 = document.getElementById("objmap2-3"),
	data23 = document.getElementById("data2-3"),
	termPOM23 = document.getElementById("termPOM2-3"),
	joinCondition23 = document.getElementById("joinCondition2-3"),
	child23 = document.getElementById("child2-3"),
	parents23 = document.getElementById("parent2-3"),
	predicate33 = document.getElementById("predicate3-3"),
    objects33 = document.getElementById("objects3-3"),
    selectedObjectType33 = objects33.options[objects33.selectedIndex],
	objmap33 = document.getElementById("objmap3-3"),
	data33 = document.getElementById("data3-3"),
	termPOM33 = document.getElementById("termPOM3-3"),
	joinCondition33 = document.getElementById("joinCondition3-3"),
	child33 = document.getElementById("child3-3"),
	parents33 = document.getElementById("parent3-3"),
  predicate43 = document.getElementById("predicate4-3"),
    objects43 = document.getElementById("objects4-3"),
    selectedObjectType43 = objects43.options[objects43.selectedIndex],
  objmap43 = document.getElementById("objmap4-3"),
  data43 = document.getElementById("data4-3"),
  termPOM43 = document.getElementById("termPOM4-3"),
  joinCondition43 = document.getElementById("joinCondition4-3"),
  child43 = document.getElementById("child4-3"),
  parents43 = document.getElementById("parent4-3"),
  predicate53 = document.getElementById("predicate5-3"),
    objects53 = document.getElementById("objects5-3"),
    selectedObjectType53 = objects53.options[objects53.selectedIndex],
  objmap53 = document.getElementById("objmap5-3"),
  data53 = document.getElementById("data5-3"),
  termPOM53 = document.getElementById("termPOM5-3"),
  joinCondition53 = document.getElementById("joinCondition5-3"),
  child53 = document.getElementById("child5-3"),
  parents53 = document.getElementById("parent5-3"),
  predicate63 = document.getElementById("predicate6-3"),
    objects63 = document.getElementById("objects6-3"),
    selectedObjectType63 = objects63.options[objects63.selectedIndex],
  objmap63 = document.getElementById("objmap6-3"),
  data63 = document.getElementById("data6-3"),
  termPOM63 = document.getElementById("termPOM6-3"),
  joinCondition63 = document.getElementById("joinCondition6-3"),
  child63 = document.getElementById("child6-3"),
  parents63 = document.getElementById("parent6-3"),
  predicate73 = document.getElementById("predicate7-3"),
    objects73 = document.getElementById("objects7-3"),
    selectedObjectType73 = objects73.options[objects73.selectedIndex],
  objmap73 = document.getElementById("objmap7-3"),
  data73 = document.getElementById("data7-3"),
  termPOM73 = document.getElementById("termPOM7-3"),
  joinCondition73 = document.getElementById("joinCondition7-3"),
  child73 = document.getElementById("child7-3"),
  parents73 = document.getElementById("parent7-3"),
  predicate83 = document.getElementById("predicate8-3"),
    objects83 = document.getElementById("objects8-3"),
    selectedObjectType83 = objects83.options[objects83.selectedIndex],
  objmap83 = document.getElementById("objmap8-3"),
  data83 = document.getElementById("data8-3"),
  termPOM83 = document.getElementById("termPOM8-3"),
  joinCondition83 = document.getElementById("joinCondition8-3"),
  child83 = document.getElementById("child8-3"),
  parents83 = document.getElementById("parent8-3"),
  predicate93 = document.getElementById("predicate9-3"),
    objects93 = document.getElementById("objects9-3"),
    selectedObjectType93 = objects93.options[objects93.selectedIndex],
  objmap93 = document.getElementById("objmap9-3"),
  data93 = document.getElementById("data9-3"),
  termPOM93 = document.getElementById("termPOM9-3"),
  joinCondition93 = document.getElementById("joinCondition9-3"),
  child93 = document.getElementById("child9-3"),
  parents93 = document.getElementById("parent9-3"),
	
	source4 = document.getElementById("source4"),
	referenceFormulation4 = document.getElementById("referenceFormulationField4"),
	subjects4 = document.getElementById("subjects4"),
    resultSubj4 = subjects4.options[subjects4.selectedIndex],
	subjectMap4 = document.getElementById("subjmap4"),
	
	term4 = document.getElementById("term4"),
	pom4 = document.getElementById("pom4"),  
	
	predicate14 = document.getElementById("predicate1-4"),
    objects14 = document.getElementById("objects1-4"),
    selectedObjectType14 = objects14.options[objects14.selectedIndex],
	objmap14 = document.getElementById("objmap1-4"),
	data14 = document.getElementById("data1-4"),
	termPOM14 = document.getElementById("termPOM1-4"),
	joinCondition14 = document.getElementById("joinCondition1-4"),
	child14 = document.getElementById("child1-4"),
	parents14 = document.getElementById("parent1-4"),
	predicate24 = document.getElementById("predicate2-4"),
    objects24 = document.getElementById("objects2-4"),
    selectedObjectType24 = objects24.options[objects24.selectedIndex],
	objmap24 = document.getElementById("objmap2-4"),
	data24 = document.getElementById("data2-4"),
	termPOM24 = document.getElementById("termPOM2-4"),
	joinCondition24 = document.getElementById("joinCondition2-4"),
	child24 = document.getElementById("child2-4"),
	parents24 = document.getElementById("parent2-4"),
	predicate34 = document.getElementById("predicate3-4"),
    objects34 = document.getElementById("objects3-4"),
    selectedObjectType34 = objects34.options[objects34.selectedIndex],
	objmap34 = document.getElementById("objmap3-4"),
	data34 = document.getElementById("data3-4"),
	termPOM34 = document.getElementById("termPOM3-4"),
	joinCondition34 = document.getElementById("joinCondition3-4"),
	child34 = document.getElementById("child3-4"),
	parents34 = document.getElementById("parent3-4"),
  predicate44 = document.getElementById("predicate4-4"),
    objects44 = document.getElementById("objects4-4"),
    selectedObjectType44 = objects44.options[objects44.selectedIndex],
  objmap44 = document.getElementById("objmap4-4"),
  data44 = document.getElementById("data4-4"),
  termPOM44 = document.getElementById("termPOM4-4"),
  joinCondition44 = document.getElementById("joinCondition4-4"),
  child44 = document.getElementById("child4-4"),
  parents44 = document.getElementById("parent4-4"),
  predicate54 = document.getElementById("predicate5-4"),
    objects54 = document.getElementById("objects5-4"),
    selectedObjectType54 = objects54.options[objects54.selectedIndex],
  objmap54 = document.getElementById("objmap5-4"),
  data54 = document.getElementById("data5-4"),
  termPOM54 = document.getElementById("termPOM5-4"),
  joinCondition54 = document.getElementById("joinCondition5-4"),
  child54 = document.getElementById("child5-4"),
  parents54 = document.getElementById("parent5-4"),
  predicate64 = document.getElementById("predicate6-4"),
    objects64 = document.getElementById("objects6-4"),
    selectedObjectType64 = objects64.options[objects64.selectedIndex],
  objmap64 = document.getElementById("objmap6-4"),
  data64 = document.getElementById("data6-4"),
  termPOM64 = document.getElementById("termPOM6-4"),
  joinCondition64 = document.getElementById("joinCondition6-4"),
  child64 = document.getElementById("child6-4"),
  parents64 = document.getElementById("parent6-4"),
  predicate74 = document.getElementById("predicate7-4"),
    objects74 = document.getElementById("objects7-4"),
    selectedObjectType74 = objects74.options[objects74.selectedIndex],
  objmap74 = document.getElementById("objmap7-4"),
  data74 = document.getElementById("data7-4"),
  termPOM74 = document.getElementById("termPOM7-4"),
  joinCondition74 = document.getElementById("joinCondition7-4"),
  child74 = document.getElementById("child7-4"),
  parents74 = document.getElementById("parent7-4"),
  predicate84 = document.getElementById("predicate8-4"),
    objects84 = document.getElementById("objects8-4"),
    selectedObjectType84 = objects84.options[objects84.selectedIndex],
  objmap84 = document.getElementById("objmap8-4"),
  data84 = document.getElementById("data8-4"),
  termPOM84 = document.getElementById("termPOM8-4"),
  joinCondition84 = document.getElementById("joinCondition8-4"),
  child84 = document.getElementById("child8-4"),
  parents84 = document.getElementById("parent8-4"),
  predicate94 = document.getElementById("predicate9-4"),
    objects94 = document.getElementById("objects9-4"),
    selectedObjectType94 = objects94.options[objects94.selectedIndex],
  objmap94 = document.getElementById("objmap9-4"),
  data94 = document.getElementById("data9-4"),
  termPOM94 = document.getElementById("termPOM9-4"),
  joinCondition94 = document.getElementById("joinCondition9-4"),
  child94 = document.getElementById("child9-4"),
  parents94 = document.getElementById("parent9-4"),
	
	source5 = document.getElementById("source5"),
	referenceFormulation5 = document.getElementById("referenceFormulationField5"),
	subjects5 = document.getElementById("subjects5"),
    resultSubj5 = subjects5.options[subjects5.selectedIndex],
	subjectMap5 = document.getElementById("subjmap5"),
	
	term5 = document.getElementById("term5"),
	pom5 = document.getElementById("pom5"),
	
	predicate15 = document.getElementById("predicate1-5"),
    objects15 = document.getElementById("objects1-5"),
    selectedObjectType15 = objects15.options[objects15.selectedIndex],
	objmap15 = document.getElementById("objmap1-5"),
	data15 = document.getElementById("data1-5"),
	termPOM15 = document.getElementById("termPOM1-5"),
	joinCondition15 = document.getElementById("joinCondition1-5"),
	child15 = document.getElementById("child1-5"),
	parents15 = document.getElementById("parent1-5"),
	predicate25 = document.getElementById("predicate2-5"),
    objects25 = document.getElementById("objects2-5"),
    selectedObjectType25 = objects25.options[objects25.selectedIndex],
	objmap25 = document.getElementById("objmap2-5"),
	data25 = document.getElementById("data2-5"),
	termPOM25 = document.getElementById("termPOM2-5"),
	joinCondition25 = document.getElementById("joinCondition2-5"),
	child25 = document.getElementById("child2-5"),
	parents25 = document.getElementById("parent2-5"),
	predicate35 = document.getElementById("predicate3-5"),
    objects35 = document.getElementById("objects3-5"),
    selectedObjectType35 = objects35.options[objects35.selectedIndex],
	objmap35 = document.getElementById("objmap3-5"),
	data35 = document.getElementById("data3-5"),
	termPOM35 = document.getElementById("termPOM3-5"),
	joinCondition35 = document.getElementById("joinCondition3-5"),
	child35 = document.getElementById("child3-5"),
	parents35 = document.getElementById("parent3-5"),
  predicate45 = document.getElementById("predicate4-5"),
    objects45 = document.getElementById("objects4-5"),
    selectedObjectType45 = objects45.options[objects45.selectedIndex],
  objmap45 = document.getElementById("objmap4-5"),
  data45 = document.getElementById("data4-5"),
  termPOM45 = document.getElementById("termPOM4-5"),
  joinCondition45 = document.getElementById("joinCondition4-5"),
  child45 = document.getElementById("child4-5"),
  parents45 = document.getElementById("parent4-5"),
  predicate55 = document.getElementById("predicate5-5"),
    objects55 = document.getElementById("objects5-5"),
    selectedObjectType55 = objects55.options[objects55.selectedIndex],
  objmap55 = document.getElementById("objmap5-5"),
  data55 = document.getElementById("data5-5"),
  termPOM55 = document.getElementById("termPOM5-5"),
  joinCondition55 = document.getElementById("joinCondition5-5"),
  child55 = document.getElementById("child5-5"),
  parents55 = document.getElementById("parent5-5"),
  predicate65 = document.getElementById("predicate6-5"),
    objects65 = document.getElementById("objects6-5"),
    selectedObjectType65 = objects65.options[objects65.selectedIndex],
  objmap65 = document.getElementById("objmap6-5"),
  data65 = document.getElementById("data6-5"),
  termPOM65 = document.getElementById("termPOM6-5"),
  joinCondition65 = document.getElementById("joinCondition6-5"),
  child65 = document.getElementById("child6-5"),
  parents65 = document.getElementById("parent6-5"),
  predicate75 = document.getElementById("predicate7-5"),
    objects75 = document.getElementById("objects7-5"),
    selectedObjectType75 = objects75.options[objects75.selectedIndex],
  objmap75 = document.getElementById("objmap7-5"),
  data75 = document.getElementById("data7-5"),
  termPOM75 = document.getElementById("termPOM7-5"),
  joinCondition75 = document.getElementById("joinCondition7-5"),
  child75 = document.getElementById("child7-5"),
  parents75 = document.getElementById("parent7-5"),
  predicate85 = document.getElementById("predicate8-5"),
    objects85 = document.getElementById("objects8-5"),
    selectedObjectType85 = objects85.options[objects85.selectedIndex],
  objmap85 = document.getElementById("objmap8-5"),
  data85 = document.getElementById("data8-5"),
  termPOM85 = document.getElementById("termPOM8-5"),
  joinCondition85 = document.getElementById("joinCondition8-5"),
  child85 = document.getElementById("child8-5"),
  parents85 = document.getElementById("parent8-5"),
  predicate95 = document.getElementById("predicate9-5"),
    objects95 = document.getElementById("objects9-5"),
    selectedObjectType95 = objects95.options[objects95.selectedIndex],
  objmap95 = document.getElementById("objmap9-5"),
  data95 = document.getElementById("data9-5"),
  termPOM95 = document.getElementById("termPOM9-5"),
  joinCondition95 = document.getElementById("joinCondition9-5"),
  child95 = document.getElementById("child9-5"),
  parents95 = document.getElementById("parent9-5"),
	
	source6 = document.getElementById("source6"),
	referenceFormulation6 = document.getElementById("referenceFormulationField6"),
	subjects6 = document.getElementById("subjects6"),
    resultSubj6 = subjects6.options[subjects6.selectedIndex],
	subjectMap6 = document.getElementById("subjmap6"),
	
	term6 = document.getElementById("term6"),
	pom6 = document.getElementById("pom6"),
	
	predicate16 = document.getElementById("predicate1-6"),
    objects16 = document.getElementById("objects1-6"),
    selectedObjectType16 = objects16.options[objects16.selectedIndex],
	objmap16 = document.getElementById("objmap1-6"),
	data16 = document.getElementById("data1-6"),
	termPOM16 = document.getElementById("termPOM1-6"),
	joinCondition16 = document.getElementById("joinCondition1-6"),
	child16 = document.getElementById("child1-6"),
	parents16 = document.getElementById("parent1-6"),
	predicate26 = document.getElementById("predicate2-6"),
    objects26 = document.getElementById("objects2-6"),
    selectedObjectType26 = objects26.options[objects26.selectedIndex],
	objmap26 = document.getElementById("objmap2-6"),
	data26 = document.getElementById("data2-6"),
	termPOM26 = document.getElementById("termPOM2-6"),
	joinCondition26 = document.getElementById("joinCondition2-6"),
	child26 = document.getElementById("child2-6"),
	parents26 = document.getElementById("parent2-6"),
	predicate36 = document.getElementById("predicate3-6"),
    objects36 = document.getElementById("objects3-6"),
    selectedObjectType36 = objects36.options[objects36.selectedIndex],
	objmap36 = document.getElementById("objmap3-6"),
	data36 = document.getElementById("data3-6"),
	termPOM36 = document.getElementById("termPOM3-6"),
	joinCondition36 = document.getElementById("joinCondition3-6"),
	child36 = document.getElementById("child3-6"),
	parents36 = document.getElementById("parent3-6"),
  predicate46 = document.getElementById("predicate4-6"),
    objects46 = document.getElementById("objects4-6"),
    selectedObjectType46 = objects46.options[objects46.selectedIndex],
  objmap46 = document.getElementById("objmap4-6"),
  data46 = document.getElementById("data4-6"),
  termPOM46 = document.getElementById("termPOM4-6"),
  joinCondition46 = document.getElementById("joinCondition4-6"),
  child46 = document.getElementById("child4-6"),
  parents46 = document.getElementById("parent4-6"),
  predicate56 = document.getElementById("predicate5-6"),
    objects56 = document.getElementById("objects5-6"),
    selectedObjectType56 = objects56.options[objects56.selectedIndex],
  objmap56 = document.getElementById("objmap5-6"),
  data56 = document.getElementById("data5-6"),
  termPOM56 = document.getElementById("termPOM5-6"),
  joinCondition56 = document.getElementById("joinCondition5-6"),
  child56 = document.getElementById("child5-6"),
  parents56 = document.getElementById("parent5-6"),
  predicate66 = document.getElementById("predicate6-6"),
    objects66 = document.getElementById("objects6-6"),
    selectedObjectType66 = objects66.options[objects66.selectedIndex],
  objmap66 = document.getElementById("objmap6-6"),
  data66 = document.getElementById("data6-6"),
  termPOM66 = document.getElementById("termPOM6-6"),
  joinCondition66 = document.getElementById("joinCondition6-6"),
  child66 = document.getElementById("child6-6"),
  parents66 = document.getElementById("parent6-6"),
  predicate76 = document.getElementById("predicate7-6"),
    objects76 = document.getElementById("objects7-6"),
    selectedObjectType76 = objects76.options[objects76.selectedIndex],
  objmap76 = document.getElementById("objmap7-6"),
  data76 = document.getElementById("data7-6"),
  termPOM76 = document.getElementById("termPOM7-6"),
  joinCondition76 = document.getElementById("joinCondition7-6"),
  child76 = document.getElementById("child7-6"),
  parents76 = document.getElementById("parent7-6"),
  predicate86 = document.getElementById("predicate8-6"),
    objects86 = document.getElementById("objects8-6"),
    selectedObjectType86 = objects86.options[objects86.selectedIndex],
  objmap86 = document.getElementById("objmap8-6"),
  data86 = document.getElementById("data8-6"),
  termPOM86 = document.getElementById("termPOM8-6"),
  joinCondition86 = document.getElementById("joinCondition8-6"),
  child86 = document.getElementById("child8-6"),
  parents86 = document.getElementById("parent8-6"),
  predicate96 = document.getElementById("predicate9-6"),
    objects96 = document.getElementById("objects9-6"),
    selectedObjectType96 = objects96.options[objects96.selectedIndex],
  objmap96 = document.getElementById("objmap9-6"),
  data96 = document.getElementById("data9-6"),
  termPOM96 = document.getElementById("termPOM9-6"),
  joinCondition96 = document.getElementById("joinCondition9-6"),
  child96 = document.getElementById("child9-6"),
  parents96 = document.getElementById("parent9-6"),
	
	source7 = document.getElementById("source7"),
	referenceFormulation7 = document.getElementById("referenceFormulationField7"),
	subjects7 = document.getElementById("subjects7"),
    resultSubj7 = subjects7.options[subjects7.selectedIndex],
	subjectMap7 = document.getElementById("subjmap7"),
	
	term7 = document.getElementById("term7"),
	pom7 = document.getElementById("pom7"),
	
	predicate17 = document.getElementById("predicate1-7"),
    objects17 = document.getElementById("objects1-7"),
    selectedObjectType17 = objects17.options[objects17.selectedIndex],
	objmap17 = document.getElementById("objmap1-7"),
	data17 = document.getElementById("data1-7"),
	termPOM17 = document.getElementById("termPOM1-7"),
	joinCondition17 = document.getElementById("joinCondition1-7"),
	child17 = document.getElementById("child1-7"),
	parents17 = document.getElementById("parent1-7"),
	predicate27 = document.getElementById("predicate2-7"),
    objects27 = document.getElementById("objects2-7"),
    selectedObjectType27 = objects27.options[objects27.selectedIndex],
	objmap27 = document.getElementById("objmap2-7"),
	data27 = document.getElementById("data2-7"),
	termPOM27 = document.getElementById("termPOM2-7"),
	joinCondition27 = document.getElementById("joinCondition2-7"),
	child27 = document.getElementById("child2-7"),
	parents27 = document.getElementById("parent2-7"),
	predicate37 = document.getElementById("predicate3-7"),
    objects37 = document.getElementById("objects3-7"),
    selectedObjectType37 = objects37.options[objects37.selectedIndex],
	objmap37 = document.getElementById("objmap3-7"),
	data37 = document.getElementById("data3-7"),
	termPOM37 = document.getElementById("termPOM3-7"),
	joinCondition37 = document.getElementById("joinCondition3-7"),
	child37 = document.getElementById("child3-7"),
	parents37 = document.getElementById("parent3-7"),
  predicate47 = document.getElementById("predicate4-7"),
    objects47 = document.getElementById("objects4-7"),
    selectedObjectType47 = objects47.options[objects47.selectedIndex],
  objmap47 = document.getElementById("objmap4-7"),
  data47 = document.getElementById("data4-7"),
  termPOM47 = document.getElementById("termPOM4-7"),
  joinCondition47 = document.getElementById("joinCondition4-7"),
  child47 = document.getElementById("child4-7"),
  parents47 = document.getElementById("parent4-7"),
  predicate57 = document.getElementById("predicate5-7"),
    objects57 = document.getElementById("objects5-7"),
    selectedObjectType57 = objects57.options[objects57.selectedIndex],
  objmap57 = document.getElementById("objmap5-7"),
  data57 = document.getElementById("data5-7"),
  termPOM57 = document.getElementById("termPOM5-7"),
  joinCondition57 = document.getElementById("joinCondition5-7"),
  child57 = document.getElementById("child5-7"),
  parents57 = document.getElementById("parent5-7"),
  predicate67 = document.getElementById("predicate6-7"),
    objects67 = document.getElementById("objects6-7"),
    selectedObjectType67 = objects67.options[objects67.selectedIndex],
  objmap67 = document.getElementById("objmap6-7"),
  data67 = document.getElementById("data6-7"),
  termPOM67 = document.getElementById("termPOM6-7"),
  joinCondition67 = document.getElementById("joinCondition6-7"),
  child67 = document.getElementById("child6-7"),
  parents67 = document.getElementById("parent6-7"),
  predicate77 = document.getElementById("predicate7-7"),
    objects77 = document.getElementById("objects7-7"),
    selectedObjectType77 = objects77.options[objects77.selectedIndex],
  objmap77 = document.getElementById("objmap7-7"),
  data77 = document.getElementById("data7-7"),
  termPOM77 = document.getElementById("termPOM7-7"),
  joinCondition77 = document.getElementById("joinCondition7-7"),
  child77 = document.getElementById("child7-7"),
  parents77 = document.getElementById("parent7-7"),
  predicate87 = document.getElementById("predicate8-7"),
    objects87 = document.getElementById("objects8-7"),
    selectedObjectType87 = objects87.options[objects87.selectedIndex],
  objmap87 = document.getElementById("objmap8-7"),
  data87 = document.getElementById("data8-7"),
  termPOM87 = document.getElementById("termPOM8-7"),
  joinCondition87 = document.getElementById("joinCondition8-7"),
  child87 = document.getElementById("child8-7"),
  parents87 = document.getElementById("parent8-7"),
  predicate97 = document.getElementById("predicate9-7"),
    objects97 = document.getElementById("objects9-7"),
    selectedObjectType97 = objects97.options[objects97.selectedIndex],
  objmap97 = document.getElementById("objmap9-7"),
  data97 = document.getElementById("data9-7"),
  termPOM97 = document.getElementById("termPOM9-7"),
  joinCondition97 = document.getElementById("joinCondition9-7"),
  child97 = document.getElementById("child9-7"),
  parents97 = document.getElementById("parent9-7"),
	
	
	source8 = document.getElementById("source8"),
	referenceFormulation8 = document.getElementById("referenceFormulationField8"),
	subjects8 = document.getElementById("subjects8"),
    resultSubj8 = subjects8.options[subjects8.selectedIndex],
	subjectMap8 = document.getElementById("subjmap8"),
	
	term8 = document.getElementById("term8"),
	pom8 = document.getElementById("pom8"),
	
	predicate18 = document.getElementById("predicate1-8"),
    objects18 = document.getElementById("objects1-8"),
    selectedObjectType18 = objects18.options[objects18.selectedIndex],
	objmap18 = document.getElementById("objmap1-8"),
	data18 = document.getElementById("data1-8"),
	termPOM18 = document.getElementById("termPOM1-8"),
	joinCondition18 = document.getElementById("joinCondition1-8"),
	child18 = document.getElementById("child1-8"),
	parents18 = document.getElementById("parent1-8"),
	predicate28 = document.getElementById("predicate2-8"),
    objects28 = document.getElementById("objects2-8"),
    selectedObjectType28 = objects28.options[objects28.selectedIndex],
	objmap28 = document.getElementById("objmap2-8"),
	data28 = document.getElementById("data2-8"),
	termPOM28 = document.getElementById("termPOM2-8"),
	joinCondition28 = document.getElementById("joinCondition2-8"),
	child28 = document.getElementById("child2-8"),
	parents28 = document.getElementById("parent2-8"),
	predicate38 = document.getElementById("predicate3-8"),
    objects38 = document.getElementById("objects3-8"),
    selectedObjectType38 = objects38.options[objects38.selectedIndex],
	objmap38 = document.getElementById("objmap3-8"),
	data38 = document.getElementById("data3-8"),
	termPOM38 = document.getElementById("termPOM3-8"),
	joinCondition38 = document.getElementById("joinCondition3-8"),
	child38 = document.getElementById("child3-8"),
	parents38 = document.getElementById("parent3-8"),
	predicate48 = document.getElementById("predicate4-8"),
    objects48 = document.getElementById("objects4-8"),
    selectedObjectType48 = objects48.options[objects48.selectedIndex],
  objmap48 = document.getElementById("objmap4-8"),
  data48 = document.getElementById("data4-8"),
  termPOM48 = document.getElementById("termPOM4-8"),
  joinCondition48 = document.getElementById("joinCondition4-8"),
  child48 = document.getElementById("child4-8"),
  parents48 = document.getElementById("parent4-8"),
  predicate58 = document.getElementById("predicate5-8"),
    objects58 = document.getElementById("objects5-8"),
    selectedObjectType58 = objects58.options[objects58.selectedIndex],
  objmap58 = document.getElementById("objmap5-8"),
  data58 = document.getElementById("data5-8"),
  termPOM58 = document.getElementById("termPOM5-8"),
  joinCondition58 = document.getElementById("joinCondition5-8"),
  child58 = document.getElementById("child5-8"),
  parents58 = document.getElementById("parent5-8"),
  predicate68 = document.getElementById("predicate6-8"),
    objects68 = document.getElementById("objects6-8"),
    selectedObjectType68 = objects68.options[objects68.selectedIndex],
  objmap68 = document.getElementById("objmap6-8"),
  data68 = document.getElementById("data6-8"),
  termPOM68 = document.getElementById("termPOM6-8"),
  joinCondition68 = document.getElementById("joinCondition6-8"),
  child68 = document.getElementById("child6-8"),
  parents68 = document.getElementById("parent6-8"),
  predicate78 = document.getElementById("predicate7-8"),
    objects78 = document.getElementById("objects7-8"),
    selectedObjectType78 = objects78.options[objects78.selectedIndex],
  objmap78 = document.getElementById("objmap7-8"),
  data78 = document.getElementById("data7-8"),
  termPOM78 = document.getElementById("termPOM7-8"),
  joinCondition78 = document.getElementById("joinCondition7-8"),
  child78 = document.getElementById("child7-8"),
  parents78 = document.getElementById("parent7-8"),
  predicate88 = document.getElementById("predicate8-8"),
    objects88 = document.getElementById("objects8-8"),
    selectedObjectType88 = objects88.options[objects88.selectedIndex],
  objmap88 = document.getElementById("objmap8-8"),
  data88 = document.getElementById("data8-8"),
  termPOM88 = document.getElementById("termPOM8-8"),
  joinCondition88 = document.getElementById("joinCondition8-8"),
  child88 = document.getElementById("child8-8"),
  parents88 = document.getElementById("parent8-8"),
  predicate98 = document.getElementById("predicate9-8"),
    objects98 = document.getElementById("objects9-8"),
    selectedObjectType98 = objects98.options[objects98.selectedIndex],
  objmap98 = document.getElementById("objmap9-8"),
  data98 = document.getElementById("data9-8"),
  termPOM98 = document.getElementById("termPOM9-8"),
  joinCondition98 = document.getElementById("joinCondition9-8"),
  child98 = document.getElementById("child9-8"),
  parents98 = document.getElementById("parent9-8"),
	
	source9 = document.getElementById("source9"),
	referenceFormulation9 = document.getElementById("referenceFormulationField9"),
	subjects9 = document.getElementById("subjects9"),
    resultSubj9 = subjects9.options[subjects9.selectedIndex],
	subjectMap9 = document.getElementById("subjmap9"),
	
	term9 = document.getElementById("term9"),
	pom9 = document.getElementById("pom9"),
  
	predicate19 = document.getElementById("predicate1-9"),
    objects19 = document.getElementById("objects1-9"),
    selectedObjectType19 = objects19.options[objects19.selectedIndex],
	objmap19 = document.getElementById("objmap1-9"),
	data19 = document.getElementById("data1-9"),
	termPOM19 = document.getElementById("termPOM1-9"),
	joinCondition19 = document.getElementById("joinCondition1-9"),
	child19 = document.getElementById("child1-9"),
	parents19 = document.getElementById("parent1-9"),
	predicate29 = document.getElementById("predicate2-9"),
    objects29 = document.getElementById("objects2-9"),
    selectedObjectType29 = objects29.options[objects29.selectedIndex],
	objmap29 = document.getElementById("objmap2-9"),
	data29 = document.getElementById("data2-9"),
	termPOM29 = document.getElementById("termPOM2-9"),
	joinCondition29 = document.getElementById("joinCondition2-9"),
	child29 = document.getElementById("child2-9"),
	parents29 = document.getElementById("parent2-9"),
	predicate39 = document.getElementById("predicate3-9"),
    objects39 = document.getElementById("objects3-9"),
    selectedObjectType39 = objects39.options[objects39.selectedIndex],
	objmap39 = document.getElementById("objmap3-9"),
	data39 = document.getElementById("data3-9"),
	termPOM39 = document.getElementById("termPOM3-9"),
	joinCondition39 = document.getElementById("joinCondition3-9"),
	child39 = document.getElementById("child3-9"),
	parents39 = document.getElementById("parent3-9");
  predicate49 = document.getElementById("predicate4-9"),
    objects49 = document.getElementById("objects4-9"),
    selectedObjectType49 = objects49.options[objects49.selectedIndex],
  objmap49 = document.getElementById("objmap4-9"),
  data49 = document.getElementById("data4-9"),
  termPOM49 = document.getElementById("termPOM4-9"),
  joinCondition49 = document.getElementById("joinCondition4-9"),
  child49 = document.getElementById("child4-9"),
  parents49 = document.getElementById("parent4-9"),
  predicate59 = document.getElementById("predicate5-9"),
    objects59 = document.getElementById("objects5-9"),
    selectedObjectType59 = objects59.options[objects59.selectedIndex],
  objmap59 = document.getElementById("objmap5-9"),
  data59 = document.getElementById("data5-9"),
  termPOM59 = document.getElementById("termPOM5-9"),
  joinCondition59 = document.getElementById("joinCondition5-9"),
  child59 = document.getElementById("child5-9"),
  parents59 = document.getElementById("parent5-9"),
  predicate69 = document.getElementById("predicate6-9"),
    objects69 = document.getElementById("objects6-9"),
    selectedObjectType69 = objects69.options[objects69.selectedIndex],
  objmap69 = document.getElementById("objmap6-9"),
  data69 = document.getElementById("data6-9"),
  termPOM69 = document.getElementById("termPOM6-9"),
  joinCondition69 = document.getElementById("joinCondition6-9"),
  child69 = document.getElementById("child6-9"),
  parents69 = document.getElementById("parent6-9"),
  predicate79 = document.getElementById("predicate7-9"),
    objects79 = document.getElementById("objects7-9"),
    selectedObjectType79 = objects79.options[objects79.selectedIndex],
  objmap79 = document.getElementById("objmap7-9"),
  data79 = document.getElementById("data7-9"),
  termPOM79 = document.getElementById("termPOM7-9"),
  joinCondition79 = document.getElementById("joinCondition7-9"),
  child79 = document.getElementById("child7-9"),
  parents79 = document.getElementById("parent7-9"),
  predicate89 = document.getElementById("predicate8-9"),
    objects89 = document.getElementById("objects8-9"),
    selectedObjectType89 = objects89.options[objects89.selectedIndex],
  objmap89 = document.getElementById("objmap8-9"),
  data89 = document.getElementById("data8-9"),
  termPOM89 = document.getElementById("termPOM8-9"),
  joinCondition89 = document.getElementById("joinCondition8-9"),
  child89 = document.getElementById("child8-9"),
  parents89 = document.getElementById("parent8-9"),
  predicate99 = document.getElementById("predicate9-9"),
    objects99 = document.getElementById("objects9-9"),
    selectedObjectType99 = objects99.options[objects99.selectedIndex],
  objmap99 = document.getElementById("objmap9-9"),
  data99 = document.getElementById("data9-9"),
  termPOM99 = document.getElementById("termPOM9-9"),
  joinCondition99 = document.getElementById("joinCondition9-9"),
  child99 = document.getElementById("child9-9"),
  parents99 = document.getElementById("parent9-9"),
	//functionMaps
  funMapN = document.getElementById("funMapN"),
  funsource = document.getElementById("funsource"),
  funsourceformat = document.getElementById("funsourceformat"),
  funN = document.getElementById("funN"),
  nop = document.getElementById("nop")
  parameter = document.getElementById("parameter"),
  parameters = document.getElementById("parameters"),
  value = document.getElementById("value"),
  parameter2 = document.getElementById("parameter2"),
  parameters2 = document.getElementById("parameters2"),
  value2 = document.getElementById("value2"),
  parameter3 = document.getElementById("parameter3"),
  parameters3 = document.getElementById("parameters3"),
  value3 = document.getElementById("value3"),
  parameter4 = document.getElementById("parameter4"),
  parameters4 = document.getElementById("parameters4"),
  value4 = document.getElementById("value4"),
  parameter5 = document.getElementById("parameter5"),
  parameters5 = document.getElementById("parameters5"),
  value5 = document.getElementById("value5"),
  parameter6 = document.getElementById("parameter6"),
  parameters6 = document.getElementById("parameters6"),
  value6 = document.getElementById("value6"),
  parameter7 = document.getElementById("parameter7"),
  parameters7 = document.getElementById("parameters7"),
  value7 = document.getElementById("value7"),
  parameter8 = document.getElementById("parameter8"),
  parameters8 = document.getElementById("parameters8"),
  value8 = document.getElementById("value8"),
  parameter9 = document.getElementById("parameter9"),
  parameters9 = document.getElementById("parameters9"),
  value9 = document.getElementById("value9"),

  funMapN2 = document.getElementById("funMapN2"),
  funsource2 = document.getElementById("funsource2"),
  funsourceformat2 = document.getElementById("funsourceformat2"),
  funN2 = document.getElementById("funN2"),
  nop2 = document.getElementById("nop2")
  parameter12 = document.getElementById("parameter12"),
  parameters12 = document.getElementById("parameters12"),
  value12 = document.getElementById("value12"),
  parameter22 = document.getElementById("parameter22"),
  parameters22 = document.getElementById("parameters22"),
  value22 = document.getElementById("value22"),
  parameter32 = document.getElementById("parameter32"),
  parameters32 = document.getElementById("parameters32"),
  value32 = document.getElementById("value32"),
  parameter42 = document.getElementById("parameter42"),
  parameters42 = document.getElementById("parameters42"),
  value42 = document.getElementById("value42"),
  parameter52 = document.getElementById("parameter52"),
  parameters52 = document.getElementById("parameters52"),
  value52 = document.getElementById("value52"),
  parameter62 = document.getElementById("parameter62"),
  parameters62 = document.getElementById("parameters62"),
  value62 = document.getElementById("value62"),
  parameter72 = document.getElementById("parameter72"),
  parameters72 = document.getElementById("parameters72"),
  value72 = document.getElementById("value72"),
  parameter82 = document.getElementById("parameter82"),
  parameters82 = document.getElementById("parameters82"),
  value82 = document.getElementById("value82"),
  parameter92 = document.getElementById("parameter92"),
  parameters92 = document.getElementById("parameters92"),
  value92 = document.getElementById("value92"),

  funMapN3 = document.getElementById("funMapN3"),
  funsource3 = document.getElementById("funsource3"),
  funsourceformat3 = document.getElementById("funsourceformat3"),
  funN3 = document.getElementById("funN3"),
  nop3 = document.getElementById("nop3")
  parameter13 = document.getElementById("parameter13"),
  parameters13 = document.getElementById("parameters13"),
  value13 = document.getElementById("value13"),
  parameter23 = document.getElementById("parameter23"),
  parameters23 = document.getElementById("parameters23"),
  value23 = document.getElementById("value23"),
  parameter33 = document.getElementById("parameter33"),
  parameters33 = document.getElementById("parameters33"),
  value33 = document.getElementById("value33"),
  parameter43 = document.getElementById("parameter43"),
  parameters43 = document.getElementById("parameters43"),
  value43 = document.getElementById("value43"),
  parameter53 = document.getElementById("parameter53"),
  parameters53 = document.getElementById("parameters53"),
  value53 = document.getElementById("value53"),
  parameter63 = document.getElementById("parameter63"),
  parameters63 = document.getElementById("parameters63"),
  value63 = document.getElementById("value63"),
  parameter73 = document.getElementById("parameter73"),
  parameters73 = document.getElementById("parameters73"),
  value73 = document.getElementById("value73"),
  parameter83 = document.getElementById("parameter83"),
  parameters83 = document.getElementById("parameters83"),
  value83 = document.getElementById("value83"),
  parameter93 = document.getElementById("parameter93"),
  parameters93 = document.getElementById("parameters93"),
  value93 = document.getElementById("value93"),

  funMapN4 = document.getElementById("funMapN4"),
  funsource4 = document.getElementById("funsource4"),
  funsourceformat4 = document.getElementById("funsourceformat4"),
  funN4 = document.getElementById("funN4"),
  nop4 = document.getElementById("nop4")
  parameter14 = document.getElementById("parameter14"),
  parameters14 = document.getElementById("parameters14"),
  value14 = document.getElementById("value14"),
  parameter24 = document.getElementById("parameter24"),
  parameters24 = document.getElementById("parameters24"),
  value24 = document.getElementById("value24"),
  parameter34 = document.getElementById("parameter34"),
  parameters34 = document.getElementById("parameters34"),
  value34 = document.getElementById("value34"),
  parameter44 = document.getElementById("parameter44"),
  parameters44 = document.getElementById("parameters44"),
  value44 = document.getElementById("value44"),
  parameter54 = document.getElementById("parameter54"),
  parameters54 = document.getElementById("parameters54"),
  value54 = document.getElementById("value54"),
  parameter64 = document.getElementById("parameter64"),
  parameters64 = document.getElementById("parameters64"),
  value64 = document.getElementById("value64"),
  parameter74 = document.getElementById("parameter74"),
  parameters74 = document.getElementById("parameters74"),
  value74 = document.getElementById("value74"),
  parameter84 = document.getElementById("parameter84"),
  parameters84 = document.getElementById("parameters84"),
  value84 = document.getElementById("value84"),
  parameter94 = document.getElementById("parameter94"),
  parameters94 = document.getElementById("parameters94"),
  value94 = document.getElementById("value94"),

  funMapN5 = document.getElementById("funMapN5"),
  funsource5 = document.getElementById("funsource5"),
  funsourceformat5 = document.getElementById("funsourceformat5"),
  funN5 = document.getElementById("funN5"),
  nop5 = document.getElementById("nop5")
  parameter15 = document.getElementById("parameter15"),
  parameters15 = document.getElementById("parameters15"),
  value15 = document.getElementById("value15"),
  parameter25 = document.getElementById("parameter25"),
  parameters25 = document.getElementById("parameters25"),
  value25 = document.getElementById("value25"),
  parameter35 = document.getElementById("parameter35"),
  parameters35 = document.getElementById("parameters35"),
  value35 = document.getElementById("value35"),
  parameter45 = document.getElementById("parameter45"),
  parameters45 = document.getElementById("parameters45"),
  value45 = document.getElementById("value45"),
  parameter55 = document.getElementById("parameter55"),
  parameters55 = document.getElementById("parameters55"),
  value55 = document.getElementById("value55"),
  parameter65 = document.getElementById("parameter65"),
  parameters65 = document.getElementById("parameters65"),
  value65 = document.getElementById("value65"),
  parameter75 = document.getElementById("parameter75"),
  parameters75 = document.getElementById("parameters75"),
  value75 = document.getElementById("value75"),
  parameter85 = document.getElementById("parameter85"),
  parameters85 = document.getElementById("parameters85"),
  value85 = document.getElementById("value85"),
  parameter95 = document.getElementById("parameter95"),
  parameters95 = document.getElementById("parameters95"),
  value95 = document.getElementById("value95"),

  funMapN6 = document.getElementById("funMapN6"),
  funsource6 = document.getElementById("funsource6"),
  funsourceformat6 = document.getElementById("funsourceformat6"),
  funN6 = document.getElementById("funN6"),
  nop6 = document.getElementById("nop6")
  parameter16 = document.getElementById("parameter16"),
  parameters16 = document.getElementById("parameters16"),
  value16 = document.getElementById("value16"),
  parameter26 = document.getElementById("parameter26"),
  parameters26 = document.getElementById("parameters26"),
  value26 = document.getElementById("value26"),
  parameter36 = document.getElementById("parameter36"),
  parameters36 = document.getElementById("parameters36"),
  value36 = document.getElementById("value36"),
  parameter46 = document.getElementById("parameter46"),
  parameters46 = document.getElementById("parameters46"),
  value46 = document.getElementById("value46"),
  parameter56 = document.getElementById("parameter56"),
  parameters56 = document.getElementById("parameters56"),
  value56 = document.getElementById("value56"),
  parameter66 = document.getElementById("parameter66"),
  parameters66 = document.getElementById("parameters66"),
  value66 = document.getElementById("value66"),
  parameter76 = document.getElementById("parameter76"),
  parameters76 = document.getElementById("parameters76"),
  value76 = document.getElementById("value76"),
  parameter86 = document.getElementById("parameter86"),
  parameters86 = document.getElementById("parameters86"),
  value86 = document.getElementById("value86"),
  parameter96 = document.getElementById("parameter96"),
  parameters96 = document.getElementById("parameters96"),
  value96 = document.getElementById("value96"),

  funMapN7 = document.getElementById("funMapN7"),
  funsource7 = document.getElementById("funsource7"),
  funsourceformat7 = document.getElementById("funsourceformat7"),
  funN7 = document.getElementById("funN7"),
  nop7 = document.getElementById("nop7")
  parameter17 = document.getElementById("parameter17"),
  parameters17 = document.getElementById("parameters17"),
  value17 = document.getElementById("value17"),
  parameter27 = document.getElementById("parameter27"),
  parameters27 = document.getElementById("parameters27"),
  value27 = document.getElementById("value27"),
  parameter37 = document.getElementById("parameter37"),
  parameters37 = document.getElementById("parameters37"),
  value37 = document.getElementById("value37"),
  parameter47 = document.getElementById("parameter47"),
  parameters47 = document.getElementById("parameters47"),
  value47 = document.getElementById("value47"),
  parameter57 = document.getElementById("parameter57"),
  parameters57 = document.getElementById("parameters57"),
  value57 = document.getElementById("value57"),
  parameter67 = document.getElementById("parameter67"),
  parameters67 = document.getElementById("parameters67"),
  value67 = document.getElementById("value67"),
  parameter77 = document.getElementById("parameter77"),
  parameters77 = document.getElementById("parameters77"),
  value77 = document.getElementById("value77"),
  parameter87 = document.getElementById("parameter87"),
  parameters87 = document.getElementById("parameters87"),
  value87 = document.getElementById("value87"),
  parameter97 = document.getElementById("parameter97"),
  parameters97 = document.getElementById("parameters97"),
  value97 = document.getElementById("value97"),

  funMapN8 = document.getElementById("funMapN8"),
  funsource8 = document.getElementById("funsource8"),
  funsourceformat8 = document.getElementById("funsourceformat8"),
  funN8 = document.getElementById("funN8"),
  nop8 = document.getElementById("nop8")
  parameter18 = document.getElementById("parameter18"),
  parameters18 = document.getElementById("parameters18"),
  value18 = document.getElementById("value18"),
  parameter28 = document.getElementById("parameter28"),
  parameters28 = document.getElementById("parameters28"),
  value28 = document.getElementById("value28"),
  parameter38 = document.getElementById("parameter38"),
  parameters38 = document.getElementById("parameters38"),
  value38 = document.getElementById("value38"),
  parameter48 = document.getElementById("parameter48"),
  parameters48 = document.getElementById("parameters48"),
  value48 = document.getElementById("value48"),
  parameter58 = document.getElementById("parameter58"),
  parameters58 = document.getElementById("parameters58"),
  value58 = document.getElementById("value58"),
  parameter68 = document.getElementById("parameter68"),
  parameters68 = document.getElementById("parameters68"),
  value68 = document.getElementById("value68"),
  parameter78 = document.getElementById("parameter78"),
  parameters78 = document.getElementById("parameters78"),
  value78 = document.getElementById("value78"),
  parameter88 = document.getElementById("parameter88"),
  parameters88 = document.getElementById("parameters88"),
  value88 = document.getElementById("value88"),
  parameter98 = document.getElementById("parameter98"),
  parameters98 = document.getElementById("parameters98"),
  value98 = document.getElementById("value98"),

  funMapN9 = document.getElementById("funMapN9"),
  funsource9 = document.getElementById("funsource9"),
  funsourceformat9 = document.getElementById("funsourceformat9"),
  funN9 = document.getElementById("funN9"),
  nop9 = document.getElementById("nop9")
  parameter19 = document.getElementById("parameter19"),
  parameters19 = document.getElementById("parameters19"),
  value19 = document.getElementById("value19"),
  parameter29 = document.getElementById("parameter29"),
  parameters29 = document.getElementById("parameters29"),
  value29 = document.getElementById("value29"),
  parameter39 = document.getElementById("parameter39"),
  parameters39 = document.getElementById("parameters39"),
  value39 = document.getElementById("value39"),
  parameter49 = document.getElementById("parameter49"),
  parameters49 = document.getElementById("parameters49"),
  value49 = document.getElementById("value49"),
  parameter59 = document.getElementById("parameter59"),
  parameters59 = document.getElementById("parameters59"),
  value59 = document.getElementById("value59"),
  parameter69 = document.getElementById("parameter69"),
  parameters69 = document.getElementById("parameters69"),
  value69 = document.getElementById("value69"),
  parameter79 = document.getElementById("parameter79"),
  parameters79 = document.getElementById("parameters79"),
  value79 = document.getElementById("value79"),
  parameter89 = document.getElementById("parameter89"),
  parameters89 = document.getElementById("parameters89"),
  value89 = document.getElementById("value89"),
  parameter99 = document.getElementById("parameter99"),
  parameters99 = document.getElementById("parameters99"),
  value99 = document.getElementById("value99");

   
  var settings = {
    //"url": "http://localhost:5000/easyRML/api.php",
    url: "/api/mappings",
    type: "POST",

    contenType: "text/plain",
    data: "[main]\nmapping_file_name : " + resultFilename.value + "\nnumber_of_prefixes: " + pref.value + "\nnumber_of_TMs : " + tm.value + "\nnumber_of_FMs :" + fun.value + "\noutput_folder: " + output.value + "\n\n[prefixes]\npre1 : " + labpre1.value + "\nprefix1 : " + prefix1.value + "\npre2 : " + labpre2.value + "\nprefix2 : " + prefix2.value + "\npre3 : " + labpre3.value + "\nprefix3 : " + prefix3.value + "\npre4 : " + labpre4.value + "\nprefix4 : " + prefix4.value + "\npre5 : " + labpre5.value + "\nprefix5 :  " + prefix5.value + "\npre6 : " + labpre6.value + "\nprefix6 : " + prefix6.value + "\npre7 : " + labpre7.value + "\nprefix7 : " + prefix7.value + "\npre8 : " + labpre8.value + "\nprefix8 : " + prefix8.value + "\npre9 : " + labpre9.value + "\nprefix9 : " + prefix9.value + "\npre10 : " + labpre10.value + "\nprefix10 : " + prefix10.value + "\npre11 : " + labpre11.value + "\nprefix11 : " + prefix11.value + "\n\n[TM1]\nname: TriplesMap1\nsource: " + source.value + "\nsourceFormat: " + referenceFormulation.value + "\nsubjectType: " + resultSubj.value + "\nsubjectMap: " + subjectMap.value + "\ntermType: " + term.value + "\nnumber_of_POM: " + pom.value + "\n\n[TM1_POM1]\npredicate: " + predicate.value + " \nobjectType: " + selectedObjectType.value + "\nobject: " + objmap.value + "\ndataType: " + data.value + "\ntermType: " + termPOM.value + "\njoinCondition: " + joinCondition.value + "\nchild: " + child.value + "\nparent: " + parents.value  + "\n\n[TM1_POM2]\npredicate: " + predicate2.value + "\nobjectType: " + selectedObjectType2.value + "\nobject: " + objmap2.value + "\ndataType: " + data2.value + "\ntermType: " + termPOM2.value + "\njoinCondition: " + joinCondition2.value + "\nchild: " + child2.value + "\nparent: " + parents2.value + "\n\n[TM1_POM3]\npredicate: " + predicate3.value + "\nobjectType: " + selectedObjectType3.value + "\nobject: " + objmap3.value + "\ndataType: " + data3.value + "\ntermType: " + termPOM3.value + "\njoinCondition: " + joinCondition3.value + "\nchild: " + child3.value + "\nparent: " + parents3.value + "\n\n[TM1_POM4]\npredicate: " + predicate4.value + "\nobjectType: " + selectedObjectType4.value + "\nobject: " + objmap4.value + "\ndataType: " + data4.value + "\ntermType: " + termPOM4.value + "\njoinCondition: " + joinCondition4.value + "\nchild: " + child4.value + "\nparent: " + parents4.value + "\n\n[TM1_POM5]\npredicate: " + predicate5.value + "\nobjectType: " + selectedObjectType5.value + "\nobject: " + objmap5.value + "\ndataType: " + data5.value + "\ntermType: " + termPOM5.value + "\njoinCondition: " + joinCondition5.value + "\nchild: " + child5.value + "\nparent: " + parents5.value +"\n\n[TM1_POM6]\npredicate: " + predicate6.value + "\nobjectType: " + selectedObjectType6.value + "\nobject: " + objmap6.value + "\ndataType: " + data6.value + "\ntermType: " + termPOM6.value + "\njoinCondition: " + joinCondition6.value + "\nchild: " + child6.value + "\nparent: " + parents6.value + "\n\n[TM1_POM7]\npredicate: " + predicate7.value + "\nobjectType: " + selectedObjectType7.value + "\nobject: " + objmap7.value + "\ndataType: " + data7.value + "\ntermType: " + termPOM7.value + "\njoinCondition: " + joinCondition7.value + "\nchild: " + child7.value + "\nparent: " + parents7.value + "\n\n[TM1_POM8]\npredicate: " + predicate8.value + "\nobjectType: " + selectedObjectType8.value + "\nobject: " + objmap8.value + "\ndataType: " + data8.value + "\ntermType: " + termPOM8.value + "\njoinCondition: " + joinCondition8.value + "\nchild: " + child8.value + "\nparent: " + parents8.value + "\n\n[TM1_POM9]\npredicate: " + predicate9.value + "\nobjectType: " + selectedObjectType9.value + "\nobject: " + objmap9.value + "\ndataType: " + data9.value + "\ntermType: " + termPOM9.value + "\njoinCondition: " + joinCondition9.value + "\nchild: " + child9.value + "\nparent: " + parents9.value + "\n\n[TM2]\nname: TriplesMap2\nsource: " + source2.value + "\nsourceFormat: " + referenceFormulation2.value + "\nsubjectType: " + resultSubj2.value + "\nsubjectMap: " + subjectMap2.value + "\ntermType: " + term2.value + "\nnumber_of_POM: " + pom2.value + "\n\n[TM2_POM1]\npredicate: " + predicate12.value + " \nobjectType: " + selectedObjectType12.value + "\nobject: " + objmap12.value + "\ndataType: " + data12.value + "\ntermType: " + termPOM12.value + "\njoinCondition: " + joinCondition12.value + "\nchild: " + child12.value + "\nparent: " + parents12.value + "\n\n[TM2_POM2]\npredicate: " + predicate22.value + "\nobjectType: " + selectedObjectType22.value + "\nobject: " + objmap22.value + "\ndataType: " + data22.value + "\ntermType: " + termPOM22.value + "\njoinCondition: " + joinCondition22.value + "\nchild: " + child22.value + "\nparent: " + parents22.value + "\n\n[TM2_POM3]\npredicate: " + predicate32.value + "\nobjectType: " + selectedObjectType32.value + "\nobject: " + objmap32.value + "\ndataType: " + data32.value + "\ntermType: " + termPOM32.value + "\njoinCondition: " + joinCondition32.value + "\nchild: " + child32.value + "\nparent: " + parents32.value + "\n\n[TM2_POM4]\npredicate: " + predicate42.value + "\nobjectType: " + selectedObjectType42.value + "\nobject: " + objmap42.value + "\ndataType: " + data42.value + "\ntermType: " + termPOM42.value + "\njoinCondition: " + joinCondition42.value + "\nchild: " + child42.value + "\nparent: " + parents42.value + "\n\n[TM2_POM5]\npredicate: " + predicate52.value + "\nobjectType: " + selectedObjectType52.value + "\nobject: " + objmap52.value + "\ndataType: " + data52.value + "\ntermType: " + termPOM52.value + "\njoinCondition: " + joinCondition52.value + "\nchild: " + child52.value + "\nparent: " + parents52.value + "\n\n[TM2_POM6]\npredicate: " + predicate62.value + "\nobjectType: " + selectedObjectType62.value + "\nobject: " + objmap62.value + "\ndataType: " + data62.value + "\ntermType: " + termPOM62.value + "\njoinCondition: " + joinCondition62.value + "\nchild: " + child62.value + "\nparent: " + parents62.value + "\n\n[TM2_POM7]\npredicate: " + predicate72.value + "\nobjectType: " + selectedObjectType72.value + "\nobject: " + objmap72.value + "\ndataType: " + data72.value + "\ntermType: " + termPOM72.value + "\njoinCondition: " + joinCondition72.value + "\nchild: " + child72.value + "\nparent: " + parents72.value + "\n\n[TM2_POM8]\npredicate: " + predicate82.value + "\nobjectType: " + selectedObjectType82.value + "\nobject: " + objmap82.value + "\ndataType: " + data82.value + "\ntermType: " + termPOM82.value + "\njoinCondition: " + joinCondition82.value + "\nchild: " + child82.value + "\nparent: " + parents82.value + "\n\n[TM2_POM9]\npredicate: " + predicate92.value + "\nobjectType: " + selectedObjectType92.value + "\nobject: " + objmap92.value + "\ndataType: " + data92.value + "\ntermType: " + termPOM92.value + "\njoinCondition: " + joinCondition92.value + "\nchild: " + child92.value + "\nparent: " + parents92.value +  "\n\n[TM3]\nname: TriplesMap3\nsource: " + source3.value + "\nsourceFormat: " + referenceFormulation3.value + "\nsubjectType: " + resultSubj3.value + "\nsubjectMap: " + subjectMap3.value + "\ntermType: " + term3.value + "\nnumber_of_POM: " + pom3.value + "\n\n[TM3_POM1]\npredicate: " + predicate13.value + " \nobjectType: " + selectedObjectType13.value + "\nobject: " + objmap13.value + "\ndataType: " + data13.value + "\ntermType: " + termPOM13.value + "\njoinCondition: " + joinCondition13.value + "\nchild: " + child13.value + "\nparent: " + parents13.value + "\n\n[TM3_POM2]\npredicate: " + predicate23.value + "\nobjectType: " + selectedObjectType23.value + "\nobject: " + objmap23.value + "\ndataType: " + data23.value + "\ntermType: " + termPOM23.value + "\njoinCondition: " + joinCondition23.value + "\nchild: " + child23.value + "\nparent: " + parents23.value + "\n\n[TM3_POM3]\npredicate: " + predicate33.value + "\nobjectType: " + selectedObjectType33.value + "\nobject: " + objmap33.value + "\ndataType: " + data33.value + "\ntermType: " + termPOM33.value + "\njoinCondition: " + joinCondition33.value + "\nchild: " + child33.value + "\nparent: " + parents33.value + "\n\n[TM3_POM4]\npredicate: " + predicate43.value + "\nobjectType: " + selectedObjectType43.value + "\nobject: " + objmap43.value + "\ndataType: " + data43.value + "\ntermType: " + termPOM43.value + "\njoinCondition: " + joinCondition43.value + "\nchild: " + child43.value + "\nparent: " + parents43.value + "\n\n[TM3_POM5]\npredicate: " + predicate53.value + "\nobjectType: " + selectedObjectType53.value + "\nobject: " + objmap53.value + "\ndataType: " + data53.value + "\ntermType: " + termPOM53.value + "\njoinCondition: " + joinCondition53.value + "\nchild: " + child53.value + "\nparent: " + parents53.value + "\n\n[TM3_POM6]\npredicate: " + predicate63.value + "\nobjectType: " + selectedObjectType63.value + "\nobject: " + objmap63.value + "\ndataType: " + data63.value + "\ntermType: " + termPOM63.value + "\njoinCondition: " + joinCondition63.value + "\nchild: " + child63.value + "\nparent: " + parents63.value + "\n\n[TM3_POM7]\npredicate: " + predicate73.value + "\nobjectType: " + selectedObjectType73.value + "\nobject: " + objmap73.value + "\ndataType: " + data73.value + "\ntermType: " + termPOM73.value + "\njoinCondition: " + joinCondition73.value + "\nchild: " + child73.value + "\nparent: " + parents73.value + "\n\n[TM3_POM8]\npredicate: " + predicate83.value + "\nobjectType: " + selectedObjectType83.value + "\nobject: " + objmap83.value + "\ndataType: " + data83.value + "\ntermType: " + termPOM83.value + "\njoinCondition: " + joinCondition83.value + "\nchild: " + child83.value + "\nparent: " + parents83.value + "\n\n[TM3_POM9]\npredicate: " + predicate93.value + "\nobjectType: " + selectedObjectType93.value + "\nobject: " + objmap93.value + "\ndataType: " + data93.value + "\ntermType: " + termPOM93.value + "\njoinCondition: " + joinCondition93.value + "\nchild: " + child93.value + "\nparent: " + parents93.value + "\n\n[TM4]\nname: TriplesMap4\nsource: " + source4.value + "\nsourceFormat: " + referenceFormulation4.value + "\nsubjectType: " + resultSubj4.value + "\nsubjectMap: " + subjectMap4.value + "\ntermType: " + term4.value + "\nnumber_of_POM: " + pom4.value + 
  "\n\n[TM4_POM1]\npredicate: " + predicate14.value + " \nobjectType: " + selectedObjectType14.value + "\nobject: " + objmap14.value + "\ndataType: " + data14.value + "\ntermType: " + termPOM14.value + "\njoinCondition: " + joinCondition14.value + "\nchild: " + child14.value + "\nparent: " + parents14.value + "\n\n[TM4_POM2]\npredicate: " + predicate24.value + "\nobjectType: " + selectedObjectType24.value + "\nobject: " + objmap24.value + "\ndataType: " + data24.value + "\ntermType: " + termPOM24.value + "\njoinCondition: " + joinCondition24.value + "\nchild: " + child24.value + "\nparent: " + parents24.value + "\n\n[TM4_POM3]\npredicate: " + predicate34.value + "\nobjectType: " + selectedObjectType34.value + "\nobject: " + objmap34.value + "\ndataType: " + data34.value + "\ntermType: " + termPOM34.value + "\njoinCondition: " + joinCondition34.value + "\nchild: " + child34.value + "\nparent: " + parents34.value + "\n\n[TM4_POM4]\npredicate: " + predicate44.value + "\nobjectType: " + selectedObjectType44.value + "\nobject: " + objmap44.value + "\ndataType: " + data44.value + "\ntermType: " + termPOM44.value + "\njoinCondition: " + joinCondition44.value + "\nchild: " + child44.value + "\nparent: " + parents44.value + "\n\n[TM4_POM5]\npredicate: " + predicate54.value + "\nobjectType: " + selectedObjectType54.value + "\nobject: " + objmap54.value + "\ndataType: " + data54.value + "\ntermType: " + termPOM54.value + "\njoinCondition: " + joinCondition54.value + "\nchild: " + child54.value + "\nparent: " + parents54.value + "\n\n[TM4_POM6]\npredicate: " + predicate64.value + "\nobjectType: " + selectedObjectType64.value + "\nobject: " + objmap64.value + "\ndataType: " + data64.value + "\ntermType: " + termPOM64.value + "\njoinCondition: " + joinCondition64.value + "\nchild: " + child64.value + "\nparent: " + parents64.value + "\n\n[TM4_POM7]\npredicate: " + predicate74.value + "\nobjectType: " + selectedObjectType74.value + "\nobject: " + objmap74.value + "\ndataType: " + data74.value + "\ntermType: " + termPOM74.value + "\njoinCondition: " + joinCondition74.value + "\nchild: " + child74.value + "\nparent: " + parents74.value + "\n\n[TM4_POM8]\npredicate: " + predicate84.value + "\nobjectType: " + selectedObjectType84.value + "\nobject: " + objmap84.value + "\ndataType: " + data84.value + "\ntermType: " + termPOM84.value + "\njoinCondition: " + joinCondition84.value + "\nchild: " + child84.value + "\nparent: " + parents84.value + "\n\n[TM4_POM9]\npredicate: " + predicate94.value + "\nobjectType: " + selectedObjectType94.value + "\nobject: " + objmap94.value + "\ndataType: " + data94.value + "\ntermType: " + termPOM94.value + "\njoinCondition: " + joinCondition94.value + "\nchild: " + child94.value + "\nparent: " + parents94.value + "\n\n[TM5]\nname: TriplesMap5\nsource: " + source5.value + "\nsourceFormat: " + referenceFormulation5.value + "\nsubjectType: " + resultSubj5.value + "\nsubjectMap: " + subjectMap5.value + "\ntermType: " + term5.value + "\nnumber_of_POM: " + pom5.value + "\n\n[TM5_POM1]\npredicate: " + predicate15.value + " \nobjectType: " + selectedObjectType15.value + "\nobject: " + objmap15.value + "\ndataType: " + data15.value + "\ntermType: " + termPOM15.value + "\njoinCondition: " + joinCondition15.value + "\nchild: " + child15.value + "\nparent: " + parents15.value + "\n\n[TM5_POM2]\npredicate: " + predicate25.value + "\nobjectType: " + selectedObjectType25.value + "\nobject: " + objmap25.value + "\ndataType: " + data25.value + "\ntermType: " + termPOM25.value + "\njoinCondition: " + joinCondition25.value + "\nchild: " + child25.value + "\nparent: " + parents25.value + "\n\n[TM5_POM3]\npredicate: " + predicate35.value + "\nobjectType: " + selectedObjectType35.value + "\nobject: " + objmap35.value + "\ndataType: " + data35.value + "\ntermType: " + termPOM35.value + "\njoinCondition: " + joinCondition35.value + "\nchild: " + child35.value + "\nparent: " + parents35.value + "\n\n[TM5_POM4]\npredicate: " + predicate45.value + "\nobjectType: " + selectedObjectType45.value + "\nobject: " + objmap45.value + "\ndataType: " + data45.value + "\ntermType: " + termPOM45.value + "\njoinCondition: " + joinCondition45.value + "\nchild: " + child45.value + "\nparent: " + parents45.value + "\n\n[TM5_POM5]\npredicate: " + predicate55.value + "\nobjectType: " + selectedObjectType55.value + "\nobject: " + objmap55.value + "\ndataType: " + data55.value + "\ntermType: " + termPOM55.value + "\njoinCondition: " + joinCondition55.value + "\nchild: " + child55.value + "\nparent: " + parents55.value + "\n\n[TM5_POM6]\npredicate: " + predicate65.value + "\nobjectType: " + selectedObjectType65.value + "\nobject: " + objmap65.value + "\ndataType: " + data65.value + "\ntermType: " + termPOM65.value + "\njoinCondition: " + joinCondition65.value + "\nchild: " + child65.value + "\nparent: " + parents65.value + "\n\n[TM5_POM7]\npredicate: " + predicate75.value + "\nobjectType: " + selectedObjectType75.value + "\nobject: " + objmap75.value + "\ndataType: " + data75.value + "\ntermType: " + termPOM75.value + "\njoinCondition: " + joinCondition75.value + "\nchild: " + child75.value + "\nparent: " + parents75.value + "\n\n[TM5_POM8]\npredicate: " + predicate85.value + "\nobjectType: " + selectedObjectType85.value + "\nobject: " + objmap85.value + "\ndataType: " + data85.value + "\ntermType: " + termPOM85.value + "\njoinCondition: " + joinCondition85.value + "\nchild: " + child85.value + "\nparent: " + parents85.value + "\n\n[TM5_POM9]\npredicate: " + predicate95.value + "\nobjectType: " + selectedObjectType95.value + "\nobject: " + objmap95.value + "\ndataType: " + data95.value + "\ntermType: " + termPOM95.value + "\njoinCondition: " + joinCondition95.value + "\nchild: " + child95.value + "\nparent: " + parents95.value + 
  "\n\n[TM6]\nname: TriplesMap6\nsource: " + source6.value + "\nsourceFormat: " + referenceFormulation6.value + "\nsubjectType: " + resultSubj6.value + "\nsubjectMap: " + subjectMap6.value + "\ntermType: " + term6.value + "\nnumber_of_POM: " + pom6.value + "\n\n[TM6_POM1]\npredicate: " + predicate16.value + " \nobjectType: " + selectedObjectType16.value + "\nobject: " + objmap16.value + "\ndataType: " + data16.value + "\ntermType: " + termPOM16.value + "\njoinCondition: " + joinCondition16.value + "\nchild: " + child16.value + "\nparent: " + parents16.value + "\n\n[TM6_POM2]\npredicate: " + predicate26.value + "\nobjectType: " + selectedObjectType26.value + "\nobject: " + objmap26.value + "\ndataType: " + data26.value + "\ntermType: " + termPOM26.value + "\njoinCondition: " + joinCondition26.value + "\nchild: " + child26.value + "\nparent: " + parents26.value + "\n\n[TM6_POM3]\npredicate: " + predicate36.value + "\nobjectType: " + selectedObjectType36.value + "\nobject: " + objmap36.value + "\ndataType: " + data36.value + "\ntermType: " + termPOM36.value + "\njoinCondition: " + joinCondition36.value + "\nchild: " + child36.value + "\nparent: " + parents36.value + "\n\n[TM6_POM4]\npredicate: " + predicate46.value + "\nobjectType: " + selectedObjectType46.value + "\nobject: " + objmap46.value + "\ndataType: " + data46.value + "\ntermType: " + termPOM46.value + "\njoinCondition: " + joinCondition46.value + "\nchild: " + child46.value + "\nparent: " + parents46.value + "\n\n[TM6_POM5]\npredicate: " + predicate56.value + "\nobjectType: " + selectedObjectType56.value + "\nobject: " + objmap56.value + "\ndataType: " + data56.value + "\ntermType: " + termPOM56.value + "\njoinCondition: " + joinCondition56.value + "\nchild: " + child56.value + "\nparent: " + parents56.value + "\n\n[TM6_POM6]\npredicate: " + predicate66.value + "\nobjectType: " + selectedObjectType66.value + "\nobject: " + objmap66.value + "\ndataType: " + data66.value + "\ntermType: " + termPOM66.value + "\njoinCondition: " + joinCondition66.value + "\nchild: " + child66.value + "\nparent: " + parents66.value + "\n\n[TM6_POM7]\npredicate: " + predicate76.value + "\nobjectType: " + selectedObjectType76.value + "\nobject: " + objmap76.value + "\ndataType: " + data76.value + "\ntermType: " + termPOM76.value + "\njoinCondition: " + joinCondition76.value + "\nchild: " + child76.value + "\nparent: " + parents76.value + "\n\n[TM6_POM8]\npredicate: " + predicate86.value + "\nobjectType: " + selectedObjectType86.value + "\nobject: " + objmap86.value + "\ndataType: " + data86.value + "\ntermType: " + termPOM86.value + "\njoinCondition: " + joinCondition86.value + "\nchild: " + child86.value + "\nparent: " + parents86.value + "\n\n[TM6_POM9]\npredicate: " + predicate96.value + "\nobjectType: " + selectedObjectType96.value + "\nobject: " + objmap96.value + "\ndataType: " + data96.value + "\ntermType: " + termPOM96.value + "\njoinCondition: " + joinCondition96.value + "\nchild: " + child96.value + "\nparent: " + parents96.value + "\n\n[TM7]\nname: TriplesMap7\nsource: " + source7.value + "\nsourceFormat: " + referenceFormulation7.value + "\nsubjectType: " + resultSubj7.value + "\nsubjectMap: " + subjectMap7.value + "\ntermType: " + term7.value + "\nnumber_of_POM: " + pom7.value + "\n\n[TM7_POM1]\npredicate: " + predicate17.value + " \nobjectType: " + selectedObjectType17.value + "\nobject: " + objmap17.value + "\ndataType: " + data17.value + "\ntermType: " + termPOM17.value + "\njoinCondition: " + joinCondition17.value + "\nchild: " + child17.value + "\nparent: " + parents17.value + "\n\n[TM7_POM2]\npredicate: " + predicate27.value + "\nobjectType: " + selectedObjectType27.value + "\nobject: " + objmap27.value + "\ndataType: " + data27.value + "\ntermType: " + termPOM27.value + "\njoinCondition: " + joinCondition27.value + "\nchild: " + child27.value + "\nparent: " + parents27.value + "\n\n[TM7_POM3]\npredicate: " + predicate37.value + "\nobjectType: " + selectedObjectType37.value + "\nobject: " + objmap37.value + "\ndataType: " + data37.value + "\ntermType: " + termPOM37.value + "\njoinCondition: " + joinCondition37.value + "\nchild: " + child37.value + "\nparent: " + parents37.value + "\n\n[TM7_POM4]\npredicate: " + predicate47.value + "\nobjectType: " + selectedObjectType47.value + "\nobject: " + objmap47.value + "\ndataType: " + data47.value + "\ntermType: " + termPOM47.value + "\njoinCondition: " + joinCondition47.value + "\nchild: " + child47.value + "\nparent: " + parents47.value + "\n\n[TM7_POM5]\npredicate: " + predicate57.value + "\nobjectType: " + selectedObjectType57.value + "\nobject: " + objmap57.value + "\ndataType: " + data57.value + "\ntermType: " + termPOM57.value + "\njoinCondition: " + joinCondition57.value + "\nchild: " + child57.value + "\nparent: " + parents57.value + "\n\n[TM7_POM6]\npredicate: " + predicate67.value + "\nobjectType: " + selectedObjectType67.value + "\nobject: " + objmap67.value + "\ndataType: " + data67.value + "\ntermType: " + termPOM67.value + "\njoinCondition: " + joinCondition67.value + "\nchild: " + child67.value + "\nparent: " + parents67.value + "\n\n[TM7_POM7]\npredicate: " + predicate77.value + "\nobjectType: " + selectedObjectType77.value + "\nobject: " + objmap77.value + "\ndataType: " + data77.value + "\ntermType: " + termPOM77.value + "\njoinCondition: " + joinCondition77.value + "\nchild: " + child77.value + "\nparent: " + parents77.value + "\n\n[TM7_POM8]\npredicate: " + predicate87.value + "\nobjectType: " + selectedObjectType87.value + "\nobject: " + objmap87.value + "\ndataType: " + data87.value + "\ntermType: " + termPOM87.value + "\njoinCondition: " + joinCondition87.value + "\nchild: " + child87.value + "\nparent: " + parents87.value + "\n\n[TM7_POM9]\npredicate: " + predicate97.value + "\nobjectType: " + selectedObjectType97.value + "\nobject: " + objmap97.value + "\ndataType: " + data97.value + "\ntermType: " + termPOM97.value + "\njoinCondition: " + joinCondition97.value + "\nchild: " + child97.value + "\nparent: " + parents97.value +
   "\n\n[TM8]\nname: TriplesMap8\nsource: " + source8.value + "\nsourceFormat: " + referenceFormulation8.value + "\nsubjectType: " + resultSubj8.value + "\nsubjectMap: " + subjectMap8.value + "\ntermType: " + term8.value + "\nnumber_of_POM: " + pom8.value + "\n\n[TM8_POM1]\npredicate: " + predicate18.value + " \nobjectType: " + selectedObjectType18.value + "\nobject: " + objmap18.value + "\ndataType: " + data18.value + "\ntermType: " + termPOM18.value + "\njoinCondition: " + joinCondition18.value + "\nchild: " + child18.value + "\nparent: " + parents18.value + "\n\n[TM8_POM2]\npredicate: " + predicate28.value + "\nobjectType: " + selectedObjectType28.value + "\nobject: " + objmap28.value + "\ndataType: " + data28.value + "\ntermType: " + termPOM28.value + "\njoinCondition: " + joinCondition28.value + "\nchild: " + child28.value + "\nparent: " + parents28.value + "\n\n[TM8_POM3]\npredicate: " + predicate38.value + "\nobjectType: " + selectedObjectType38.value + "\nobject: " + objmap38.value + "\ndataType: " + data38.value + "\ntermType: " + termPOM38.value + "\njoinCondition: " + joinCondition38.value + "\nchild: " + child38.value + "\nparent: " + parents38.value + "\n\n[TM8_POM4]\npredicate: " + predicate48.value + "\nobjectType: " + selectedObjectType48.value + "\nobject: " + objmap48.value + "\ndataType: " + data48.value + "\ntermType: " + termPOM48.value + "\njoinCondition: " + joinCondition48.value + "\nchild: " + child48.value + "\nparent: " + parents48.value + "\n\n[TM8_POM5]\npredicate: " + predicate58.value + "\nobjectType: " + selectedObjectType58.value + "\nobject: " + objmap58.value + "\ndataType: " + data58.value + "\ntermType: " + termPOM58.value + "\njoinCondition: " + joinCondition58.value + "\nchild: " + child58.value + "\nparent: " + parents58.value + "\n\n[TM8_POM6]\npredicate: " + predicate68.value + "\nobjectType: " + selectedObjectType68.value + "\nobject: " + objmap68.value + "\ndataType: " + data68.value + "\ntermType: " + termPOM68.value + "\njoinCondition: " + joinCondition68.value + "\nchild: " + child68.value + "\nparent: " + parents68.value + "\n\n[TM8_POM7]\npredicate: " + predicate78.value + "\nobjectType: " + selectedObjectType78.value + "\nobject: " + objmap78.value + "\ndataType: " + data78.value + "\ntermType: " + termPOM78.value + "\njoinCondition: " + joinCondition78.value + "\nchild: " + child78.value + "\nparent: " + parents78.value + "\n\n[TM8_POM8]\npredicate: " + predicate88.value + "\nobjectType: " + selectedObjectType88.value + "\nobject: " + objmap88.value + "\ndataType: " + data88.value + "\ntermType: " + termPOM88.value + "\njoinCondition: " + joinCondition88.value + "\nchild: " + child88.value + "\nparent: " + parents88.value + "\n\n[TM8_POM9]\npredicate: " + predicate98.value + "\nobjectType: " + selectedObjectType98.value + "\nobject: " + objmap98.value + "\ndataType: " + data98.value + "\ntermType: " + termPOM98.value + "\njoinCondition: " + joinCondition98.value + "\nchild: " + child98.value + "\nparent: " + parents98.value + "\n\n[TM9]\nname: TriplesMap9\nsource: " + source9.value + "\nsourceFormat: " + referenceFormulation9.value + "\nsubjectType: " + resultSubj9.value + "\nsubjectMap: " + subjectMap9.value + "\ntermType: " + term9.value + "\nnumber_of_POM: " + pom9.value + "\n\n[TM9_POM1]\npredicate: " + predicate19.value + " \nobjectType: " + selectedObjectType19.value + "\nobject: " + objmap19.value + "\ndataType: " + data19.value + "\ntermType: " + termPOM19.value + "\njoinCondition: " + joinCondition19.value + "\nchild: " + child19.value + "\nparent: " + parents19.value + "\n\n[TM9_POM2]\npredicate: " + predicate29.value + "\nobjectType: " + selectedObjectType29.value + "\nobject: " + objmap29.value + "\ndataType: " + data29.value + "\ntermType: " + termPOM29.value + "\njoinCondition: " + joinCondition29.value + "\nchild: " + child29.value + "\nparent: " + parents29.value + "\n\n[TM9_POM3]\npredicate: " + predicate39.value + "\nobjectType: " + selectedObjectType39.value + "\nobject: " + objmap39.value + "\ndataType: " + data39.value + "\ntermType: " + termPOM39.value + "\njoinCondition: " + joinCondition39.value + "\nchild: " + child39.value + "\nparent: " + parents39.value + "\n\n[TM9_POM4]\npredicate: " + predicate49.value + "\nobjectType: " + selectedObjectType49.value + "\nobject: " + objmap49.value + "\ndataType: " + data49.value + "\ntermType: " + termPOM49.value + "\njoinCondition: " + joinCondition49.value + "\nchild: " + child49.value + "\nparent: " + parents49.value + "\n\n[TM9_POM5]\npredicate: " + predicate59.value + "\nobjectType: " + selectedObjectType59.value + "\nobject: " + objmap59.value + "\ndataType: " + data59.value + "\ntermType: " + termPOM59.value + "\njoinCondition: " + joinCondition59.value + "\nchild: " + child59.value + "\nparent: " + parents59.value + "\n\n[TM9_POM6]\npredicate: " + predicate69.value + "\nobjectType: " + selectedObjectType69.value + "\nobject: " + objmap69.value + "\ndataType: " + data69.value + "\ntermType: " + termPOM69.value + "\njoinCondition: " + joinCondition69.value + "\nchild: " + child69.value + "\nparent: " + parents69.value + "\n\n[TM9_POM7]\npredicate: " + predicate79.value + "\nobjectType: " + selectedObjectType79.value + "\nobject: " + objmap79.value + "\ndataType: " + data79.value + "\ntermType: " + termPOM79.value + "\njoinCondition: " + joinCondition79.value + "\nchild: " + child79.value + "\nparent: " + parents79.value + "\n\n[TM9_POM8]\npredicate: " + predicate89.value + "\nobjectType: " + selectedObjectType89.value + "\nobject: " + objmap89.value + "\ndataType: " + data89.value + "\ntermType: " + termPOM89.value + "\njoinCondition: " + joinCondition89.value + "\nchild: " + child89.value + "\nparent: " + parents89.value + "\n\n[TM9_POM9]\npredicate: " + predicate99.value + "\nobjectType: " + selectedObjectType99.value + "\nobject: " + objmap99.value + "\ndataType: " + data99.value + "\ntermType: " + termPOM99.value + "\njoinCondition: " + joinCondition99.value + "\nchild: " + child99.value + "\nparent: " + parents99.value +
   "\n\n[F1]\nfunctionMapName: " + funMapN.value + "\nsource: " + funsource.value + "\nsourceFormat: " + funsourceformat.value+ "\nfunctionName: " + funN.value+ "\nnumberOfParameters: " + nop.value + "\n\n[F1P1]\nparameter: " + parameter.value + "\nparameterType: " + parameters.value + "\nvalue: " + value.value+ "\n\n[F1P2]\nparameter: " + parameter2.value + "\nparameterType: " + parameters2.value + "\nvalue: " + value2.value+ "\n\n[F1P3]\nparameter: " + parameter3.value + "\nparameterType: " + parameters3.value + "\nvalue: " + value3.value+ "\n\n[F1P4]\nparameter: " + parameter4.value + "\nparameterType: " + parameters4.value + "\nvalue: " + value4.value+ "\n\n[F1P5]\nparameter: " + parameter5.value + "\nparameterType: " + parameters5.value + "\nvalue: " + value5.value+ "\n\n[F1P6]\nparameter: " + parameter6.value + "\nparameterType: " + parameters6.value + "\nvalue: " + value6.value+ "\n\n[F1P7]\nparameter: " + parameter7.value + "\nparameterType: " + parameters7.value + "\nvalue: " + value7.value+ "\n\n[F1P8]\nparameter: " + parameter8.value + "\nparameterType: " + parameters8.value + "\nvalue: " + value8.value+ "\n\n[F1P9]\nparameter: " + parameter9.value + "\nparameterType: " + parameters9.value + "\nvalue: " + value9.value +
   "\n\n[F2]\nfunctionMapName: " + funMapN2.value + "\nsource: " + funsource2.value + "\nsourceFormat: " + funsourceformat2.value+ "\nfunctionName: " + funN2.value+ "\nnumberOfParameters: " + nop2.value + "\n\n[F2P1]\nparameter: " + parameter12.value + "\nparameterType: " + parameters12.value + "\nvalue: " + value12.value+ "\n\n[F2P2]\nparameter: " + parameter22.value + "\nparameterType: " + parameters22.value + "\nvalue: " + value22.value+ "\n\n[F2P3]\nparameter: " + parameter32.value + "\nparameterType: " + parameters32.value + "\nvalue: " + value32.value+ "\n\n[F2P4]\nparameter: " + parameter42.value + "\nparameterType: " + parameters42.value + "\nvalue: " + value42.value+ "\n\n[F2P5]\nparameter: " + parameter52.value + "\nparameterType: " + parameters52.value + "\nvalue: " + value52.value+ "\n\n[F2P6]\nparameter: " + parameter62.value + "\nparameterType: " + parameters62.value + "\nvalue: " + value62.value+ "\n\n[F2P7]\nparameter: " + parameter72.value + "\nparameterType: " + parameters72.value + "\nvalue: " + value72.value+ "\n\n[F2P8]\nparameter: " + parameter82.value + "\nparameterType: " + parameters82.value + "\nvalue: " + value82.value+ "\n\n[F2P9]\nparameter: " + parameter92.value + "\nparameterType: " + parameters92.value + "\nvalue: " + value92.value +
   "\n\n[F3]\nfunctionMapName: " + funMapN3.value + "\nsource: " + funsource3.value + "\nsourceFormat: " + funsourceformat3.value+ "\nfunctionName: " + funN3.value+ "\nnumberOfParameters: " + nop3.value + "\n\n[F3P1]\nparameter: " + parameter13.value + "\nparameterType: " + parameters13.value + "\nvalue: " + value13.value+ "\n\n[F3P2]\nparameter: " + parameter23.value + "\nparameterType: " + parameters23.value + "\nvalue: " + value23.value+ "\n\n[F3P3]\nparameter: " + parameter33.value + "\nparameterType: " + parameters33.value + "\nvalue: " + value33.value+ "\n\n[F3P4]\nparameter: " + parameter43.value + "\nparameterType: " + parameters43.value + "\nvalue: " + value43.value+ "\n\n[F3P5]\nparameter: " + parameter53.value + "\nparameterType: " + parameters53.value + "\nvalue: " + value53.value+ "\n\n[F3P6]\nparameter: " + parameter63.value + "\nparameterType: " + parameters63.value + "\nvalue: " + value63.value+ "\n\n[F3P7]\nparameter: " + parameter73.value + "\nparameterType: " + parameters73.value + "\nvalue: " + value73.value+ "\n\n[F3P8]\nparameter: " + parameter83.value + "\nparameterType: " + parameters83.value + "\nvalue: " + value83.value+ "\n\n[F3P9]\nparameter: " + parameter93.value + "\nparameterType: " + parameters93.value + "\nvalue: " + value93.value +
   "\n\n[F4]\nfunctionMapName: " + funMapN4.value + "\nsource: " + funsource4.value + "\nsourceFormat: " + funsourceformat4.value+ "\nfunctionName: " + funN4.value+ "\nnumberOfParameters: " + nop4.value + "\n\n[F4P1]\nparameter: " + parameter14.value + "\nparameterType: " + parameters14.value + "\nvalue: " + value14.value+ "\n\n[F4P2]\nparameter: " + parameter24.value + "\nparameterType: " + parameters24.value + "\nvalue: " + value24.value+ "\n\n[F4P3]\nparameter: " + parameter34.value + "\nparameterType: " + parameters34.value + "\nvalue: " + value34.value+ "\n\n[F4P4]\nparameter: " + parameter44.value + "\nparameterType: " + parameters44.value + "\nvalue: " + value44.value+ "\n\n[F4P5]\nparameter: " + parameter54.value + "\nparameterType: " + parameters54.value + "\nvalue: " + value54.value+ "\n\n[F4P6]\nparameter: " + parameter64.value + "\nparameterType: " + parameters64.value + "\nvalue: " + value64.value+ "\n\n[F4P7]\nparameter: " + parameter74.value + "\nparameterType: " + parameters74.value + "\nvalue: " + value74.value+ "\n\n[F4P8]\nparameter: " + parameter84.value + "\nparameterType: " + parameters84.value + "\nvalue: " + value84.value+ "\n\n[F4P9]\nparameter: " + parameter94.value + "\nparameterType: " + parameters94.value + "\nvalue: " + value94.value +
   "\n\n[F5]\nfunctionMapName: " + funMapN5.value + "\nsource: " + funsource5.value + "\nsourceFormat: " + funsourceformat5.value+ "\nfunctionName: " + funN5.value+ "\nnumberOfParameters: " + nop5.value + "\n\n[F5P1]\nparameter: " + parameter15.value + "\nparameterType: " + parameters15.value + "\nvalue: " + value15.value+ "\n\n[F5P2]\nparameter: " + parameter25.value + "\nparameterType: " + parameters25.value + "\nvalue: " + value25.value+ "\n\n[F5P3]\nparameter: " + parameter35.value + "\nparameterType: " + parameters35.value + "\nvalue: " + value35.value+ "\n\n[F5P4]\nparameter: " + parameter45.value + "\nparameterType: " + parameters45.value + "\nvalue: " + value45.value+ "\n\n[F5P5]\nparameter: " + parameter55.value + "\nparameterType: " + parameters55.value + "\nvalue: " + value55.value+ "\n\n[F5P6]\nparameter: " + parameter65.value + "\nparameterType: " + parameters65.value + "\nvalue: " + value65.value+ "\n\n[F5P7]\nparameter: " + parameter75.value + "\nparameterType: " + parameters75.value + "\nvalue: " + value75.value+ "\n\n[F5P8]\nparameter: " + parameter85.value + "\nparameterType: " + parameters85.value + "\nvalue: " + value85.value+ "\n\n[F5P9]\nparameter: " + parameter95.value + "\nparameterType: " + parameters95.value + "\nvalue: " + value95.value +
   "\n\n[F6]\nfunctionMapName: " + funMapN6.value + "\nsource: " + funsource6.value + "\nsourceFormat: " + funsourceformat6.value+ "\nfunctionName: " + funN6.value+ "\nnumberOfParameters: " + nop6.value + "\n\n[F6P1]\nparameter: " + parameter16.value + "\nparameterType: " + parameters16.value + "\nvalue: " + value16.value+ "\n\n[F6P2]\nparameter: " + parameter26.value + "\nparameterType: " + parameters26.value + "\nvalue: " + value26.value+ "\n\n[F6P3]\nparameter: " + parameter36.value + "\nparameterType: " + parameters36.value + "\nvalue: " + value36.value+ "\n\n[F6P4]\nparameter: " + parameter46.value + "\nparameterType: " + parameters46.value + "\nvalue: " + value46.value+ "\n\n[F6P5]\nparameter: " + parameter56.value + "\nparameterType: " + parameters56.value + "\nvalue: " + value56.value+ "\n\n[F6P6]\nparameter: " + parameter66.value + "\nparameterType: " + parameters66.value + "\nvalue: " + value66.value+ "\n\n[F6P7]\nparameter: " + parameter76.value + "\nparameterType: " + parameters76.value + "\nvalue: " + value76.value+ "\n\n[F6P8]\nparameter: " + parameter86.value + "\nparameterType: " + parameters86.value + "\nvalue: " + value86.value+ "\n\n[F6P9]\nparameter: " + parameter96.value + "\nparameterType: " + parameters96.value + "\nvalue: " + value96.value +
   "\n\n[F7]\nfunctionMapName: " + funMapN7.value + "\nsource: " + funsource7.value + "\nsourceFormat: " + funsourceformat7.value+ "\nfunctionName: " + funN7.value+ "\nnumberOfParameters: " + nop7.value + "\n\n[F7P1]\nparameter: " + parameter17.value + "\nparameterType: " + parameters17.value + "\nvalue: " + value17.value+ "\n\n[F7P2]\nparameter: " + parameter27.value + "\nparameterType: " + parameters27.value + "\nvalue: " + value27.value+ "\n\n[F7P3]\nparameter: " + parameter37.value + "\nparameterType: " + parameters37.value + "\nvalue: " + value37.value+ "\n\n[F7P4]\nparameter: " + parameter47.value + "\nparameterType: " + parameters47.value + "\nvalue: " + value47.value+ "\n\n[F7P5]\nparameter: " + parameter57.value + "\nparameterType: " + parameters57.value + "\nvalue: " + value57.value+ "\n\n[F7P6]\nparameter: " + parameter67.value + "\nparameterType: " + parameters67.value + "\nvalue: " + value67.value+ "\n\n[F7P7]\nparameter: " + parameter77.value + "\nparameterType: " + parameters77.value + "\nvalue: " + value77.value+ "\n\n[F7P8]\nparameter: " + parameter87.value + "\nparameterType: " + parameters87.value + "\nvalue: " + value87.value+ "\n\n[F7P9]\nparameter: " + parameter97.value + "\nparameterType: " + parameters97.value + "\nvalue: " + value97.value +
   "\n\n[F8]\nfunctionMapName: " + funMapN8.value + "\nsource: " + funsource8.value + "\nsourceFormat: " + funsourceformat8.value+ "\nfunctionName: " + funN8.value+ "\nnumberOfParameters: " + nop8.value + "\n\n[F8P1]\nparameter: " + parameter18.value + "\nparameterType: " + parameters18.value + "\nvalue: " + value18.value+ "\n\n[F8P2]\nparameter: " + parameter28.value + "\nparameterType: " + parameters28.value + "\nvalue: " + value28.value+ "\n\n[F8P3]\nparameter: " + parameter38.value + "\nparameterType: " + parameters38.value + "\nvalue: " + value38.value+ "\n\n[F8P4]\nparameter: " + parameter48.value + "\nparameterType: " + parameters48.value + "\nvalue: " + value48.value+ "\n\n[F8P5]\nparameter: " + parameter58.value + "\nparameterType: " + parameters58.value + "\nvalue: " + value58.value+ "\n\n[F8P6]\nparameter: " + parameter68.value + "\nparameterType: " + parameters68.value + "\nvalue: " + value68.value+ "\n\n[F8P7]\nparameter: " + parameter78.value + "\nparameterType: " + parameters78.value + "\nvalue: " + value78.value+ "\n\n[F8P8]\nparameter: " + parameter88.value + "\nparameterType: " + parameters88.value + "\nvalue: " + value88.value+ "\n\n[F8P9]\nparameter: " + parameter98.value + "\nparameterType: " + parameters98.value + "\nvalue: " + value98.value +
   "\n\n[F9]\nfunctionMapName: " + funMapN9.value + "\nsource: " + funsource9.value + "\nsourceFormat: " + funsourceformat9.value+ "\nfunctionName: " + funN9.value+ "\nnumberOfParameters: " + nop9.value + "\n\n[F9P1]\nparameter: " + parameter19.value + "\nparameterType: " + parameters19.value + "\nvalue: " + value19.value+ "\n\n[F9P2]\nparameter: " + parameter29.value + "\nparameterType: " + parameters29.value + "\nvalue: " + value29.value+ "\n\n[F9P3]\nparameter: " + parameter39.value + "\nparameterType: " + parameters39.value + "\nvalue: " + value39.value+ "\n\n[F9P4]\nparameter: " + parameter49.value + "\nparameterType: " + parameters49.value + "\nvalue: " + value49.value+ "\n\n[F9P5]\nparameter: " + parameter59.value + "\nparameterType: " + parameters59.value + "\nvalue: " + value59.value+ "\n\n[F9P6]\nparameter: " + parameter69.value + "\nparameterType: " + parameters69.value + "\nvalue: " + value69.value+ "\n\n[F9P7]\nparameter: " + parameter79.value + "\nparameterType: " + parameters79.value + "\nvalue: " + value79.value+ "\n\n[F9P8]\nparameter: " + parameter89.value + "\nparameterType: " + parameters89.value + "\nvalue: " + value89.value+ "\n\n[F9P9]\nparameter: " + parameter99.value + "\nparameterType: " + parameters99.value + "\nvalue: " + value99.value,
   
  

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


/* Verifying Mapping Rule*/
function verifyMR() {
    var downloadlink = document.getElementById('downloadlinkVerf');
    downloadlink.style.display = "block";
  
  var verfLink = "You can verify the RML.";
  document.getElementById("demoVerf").innerHTML = verfLink;

var settings = {
    url: "/api/verifying",
    type: "POST",

    contenType: "text/plain",
    data: "[main]",
   
  

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


/* Visualizing Mapping Rule*/
function visualizeMR() {
    var downloadlink = document.getElementById('downloadlinkVis');
    downloadlink.style.display = "block";
  
  var visLink = "You can download the visualization of RML.";
  document.getElementById("demoVis").innerHTML = visLink;
}

