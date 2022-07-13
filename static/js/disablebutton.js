$(document).ready(function () {
  $('#addprefixbutton').prop('disabled', true);
  

  function validateNextButton() {
    var buttonDisabled = $('#manualPrefix').val().trim() === '' || $('#manualUrl').val().trim() === '';
    $('#addprefixbutton').prop('disabled', buttonDisabled);
  }

  $('#manualPrefix').on('keyup', validateNextButton);
  $('#manualUrl').on('keyup', validateNextButton);

  
});



function checkbutton(){
    validateButton();
}


$(document).ready(function () {



  $('#sendjsonMap').prop('disabled', true);


  
    //tooltip while button disable or enable
  function changetooltip(){
  
  if($('#sendjsonMap').is(':disabled')){

    document.getElementById("tooltipfinal").setAttribute("data-bs-original-title", "Fill required data to generate file");
    $('[data-toggle="tooltip"]').tooltip();

  }
  else if($('#sendjsonMap').is(':enabled')){
    document.getElementById("tooltipfinal").setAttribute("data-bs-original-title", "Click to generate mapping file");
    $('[data-toggle="tooltip"]').tooltip();
  }
  }
 
  changetooltip();

  function validateButton() {

    //triplesmap name
    var triplesmapname = $('#triplemapname').val().trim() === '';



    //selectsubject type
    var selectsubject = true;

    if ($('#selectsubject option:selected').val() == 0) {
      selectsubject = $('#selectfirstclass option:selected').val() === 'default';
    }
    else if ($('#selectsubject option:selected').val() == 1) {
      selectsubject = $('#selectdatafield option:selected').val() === 'default' || $('#selectclass option:selected').val() === 'default';
    }

    //select type of data source
    var selecttypedatasource = true;

    if ($('#selecttypedatasource option:selected').val() == 0) {
      selecttypedatasource = $('#datasourcepath').val().trim() === '';
    }
    else if ($('#selecttypedatasource option:selected').val() == 1) {
      selecttypedatasource = $('#databasename').val().trim() === '' ||
                              $('#databaseusername').val().trim() === '' ||
                              $('#databasepassword').val().trim() === '' ||
                              $('#databasetable').val().trim() === '' ||
                              $('#databaseqeryversion').val().trim() === '' ||
                              $('#databasehost').val().trim() === '' ||
                              $('#databaseport').val().trim() === '';
    }


    //select term type for first time
    var selecttermtype = $('#selecttermtype option:selected').val() === 'default';



    //select property in predicate
    var selectproperty = $('.selectpropertyvalue option:selected').val() === 'default';


    //select object type
    var selectobjecttype = true;


    if($('#selectobjecttype option:selected').val() == 1) {
      selectobjecttype = $('.selectclasssuggestion option:selected').val() === 'default';
    }
    else if($('#selectobjecttype option:selected').val() == 2) {
      selectobjecttype = $('.selectdatafieldsuggestion option:selected').val() === 'default';
    }
    else if($('#selectobjecttype option:selected').val() == 3) {
      selectobjecttype = $('.predicateselectdatafield option:selected').val() === 'default' || $('.predicateselectclass option:selected').val() === 'default';
    }
    else if($('#electobjecttype option:selected').val() == 4) {
      selectobjecttype = $('.predicateselecttriplesmap option:selected').val() === 'default';
    }
    else if($('#selectobjecttype option:selected').val() == 5) {
      selectobjecttype = $('.predicateselecttriplesmapdifferentdata option:selected').val() === 'default' ||
                          $('.joinconditionchild option:selected').val() === 'default' || 
                          $('.joinconditionparent').val().trim() === '';
    }else{
      selectobjecttype=false;
    }
    


    
    //select term type for second time
    var selecttermtypepredicateobjectmap = $('.selecttermtypepredicateobjectmap option:selected').val() === 'default';




    var buttonDisabled = triplesmapname || selectsubject || selecttypedatasource || selecttermtype || selectproperty || selectobjecttype || selecttermtypepredicateobjectmap;

    $('#sendjsonMap').prop('disabled', buttonDisabled);
    changetooltip();
  }











  $('#triplemapname').on('keyup', validateButton);
  $('#selectsubject').on('change', validateButton);
  $('#selectfirstclass').on('change', validateButton);
  $('#selectdatafield').on('change', validateButton);
  $('#selectclass').on('change', validateButton);
  $('#selecttermtype').on('change', validateButton);
  $('#selecttypedatasource').on('change', validateButton);
  $('#datasourcepath').on('keyup', validateButton);
  $('#databasename').on('keyup', validateButton);
  $('#databaseurl').on('keyup', validateButton);
  $('#databasedriver').on('keyup', validateButton);
  $('#databaseusername').on('keyup', validateButton);
  $('#databasepassword').on('keyup', validateButton);
  $('#databasetable').on('keyup', validateButton);
  $('#databasequery').on('keyup', validateButton);
  $('#databaseqeryversion').on('keyup', validateButton);
  $('#databasehost').on('keyup', validateButton);
  $('#databaseport').on('keyup', validateButton);
  $('#selectobjecttype').on('change', validateButton);
  $('.selectclasssuggestion').on('change', validateButton);
  $('.selectdatafieldsuggestion').on('change', validateButton);
  $('.predicateselectdatafield').on('change', validateButton);
  $('.predicateselectclass').on('change', validateButton);
  $('.predicateselecttriplesmap').on('change', validateButton);
  $('.predicateselecttriplesmapdifferentdata').on('change', validateButton);
  $('.joinconditionchild').on('change', validateButton);
  $('.joinconditionparent').on('keyup', validateButton);
  $('.selectpropertyvalue').on('change', validateButton);
  $('.selecttermtypepredicateobjectmap').on('change', validateButton);
});