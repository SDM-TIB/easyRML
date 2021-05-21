function readURL(input) {
    if(input.files && input.files[0]){
        var reader = new FileReader();

        reader.onload = function(e){
            $(`.image-upload-wrap`).hide();
            $(`.file-upload-image`).attr(`src`,e.target.result);
            $(`.file-upload-content`).show();
            $(`.image-title`).html(input.files[0].name);

        };

        reader.readAsDataURL(input.files[0]);

    }
}


//add input value to dropdown list

function addoption() {




    var url = $("#manualUrl").val();

    var selectedvalue = [];
    $('#inputGroupSelect02 option:selected').each(function(){
        selectedvalue.push($(this).text());
    });
    // selectedvalue = $('#inputGroupSelect02 option:selected').text();

    alert($('#inputGroupSelect02 option:selected').text());

    var total = []
    total = selectedvalue.push(url);

    // var selectedvalue = $('#inputGroupSelect02').val();
    // var total = selectedvalue + "," + url
    
    alert(selectedvalue);

    $('#inputGroupSelect02').each(function() {
        $('#inputGroupSelect02 option').attr('selected', false);

}); 

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


// function addoption() {
//     var url = $("#manualUrl").val();

//     // selectedvalue = [];
//     // $('#inputGroupSelect02').each(function(){
//     //     selectedvalue.push($(this).val())
//     // });

//     // total = []
//     // total = selectedvalue.push(url);

//     var selectedvalue = $('#inputGroupSelect02').val();
//     var total = selectedvalue + "," + url
    
//     // alert(total);
//     var option = '';

//     // $("#inputGroupSelect02 selected").val(url);
//     $.each(total.split(","),function(index, value){
//         option = '<option selected value = "'+ index + '">' + value + '</option>';

//         // $('#inputGroupSelect02').append($('<option selected value = "'+ index + '">' + value + '</option>'));
//         // $("#inputGroupSelect02").val(total).trigger("chosen:updated");
//         // $("#inputGroupSelect02 option[value='" + index + "']").prop("selected", true);

//     });

//     alert(option);
//     $('#inputGroupSelect02').append(option);
//     // $("#inputGroupSelect02").val(option).trigger("chosen:updated");


   


//     // $('#inputGroupSelect02').append($('<option selected>' + total + '</option>'));
//     // $("#inputGroupSelect02").val(total).trigger("chosen:updated");
//     $("#manualUrl").val("");
//     $("#manualPrefix").val("");
// }



