
//add input value to dropdown list

function addoption() {


    var url = $("#manualUrl").val();

    var selectedvalue = [];
    $('#inputGroupSelect02 option:selected').each(function(){
        selectedvalue.push($(this).text());
    });

    // alert($('#inputGroupSelect02 option:selected').text());

    var total = [];
    total = selectedvalue.push(url);
    
    // alert(selectedvalue);

    var elements = document.getElementById("inputGroupSelect02").options;
    for(var i = 0; i < elements.length; i++){
      if(elements[i].selected)
	    elements[i].selected = false;
    }


    // alert($('#inputGroupSelect02 option:selected').text());

    $.each(selectedvalue.slice(","),function(key,value){
        $('#inputGroupSelect02').append($("<option selected></option>").attr("value",key).text(value));
        $("#inputGroupSelect02").trigger("chosen:updated");
    });

    selectedvalue = [];

    // $.each(selectedvalue,function(index, value){
    //     $('#inputGroupSelect02').append($('<option selected value = "'+ index + '">' + value + '</option>'));
    //     $("#inputGroupSelect02").val(value).trigger("chosen:updated");

    // });


    // $('#inputGroupSelect02').append($('<option selected>' + total + '</option>'));

    // $("#inputGroupSelect02").val(total).trigger("chosen:updated");
    $("#manualUrl").val("");
    $("#manualPrefix").val("");

    $('#addprefixbutton').prop('disabled', true);

}