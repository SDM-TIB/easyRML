
//add input value to dropdown list

$(document).on("click", "#addprefixbutton", function (e) {


    var url = $("#manualUrl").val();
    var prefix=$("#manualPrefix").val();



   

    $("#inputGroupSelect02").append($('<option>', {
        text: url,
        value: prefix,
        isnewprefix: true
     }).prop('selected', true));
    $("#inputGroupSelect02").trigger("chosen:updated");

    
    
	$("#manualUrl").val("");
    $("#manualPrefix").val("");

    $('#addprefixbutton').prop('disabled', true);

});