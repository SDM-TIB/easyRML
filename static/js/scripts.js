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
    
    alert(url);

    $("#inputGroupSelect02 selected").val(url);

    $('#inputGroupSelect02 : selected').append($('<option selected>' + url + '</option>'));
    // $("#inputGroupSelect02").val(url).trigger("chosen:updated");
    $("#manualUrl").val("");
    $("#manualPrefix").val("");

}