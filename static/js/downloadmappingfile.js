$(document).ready(function () {

    $("#downloadjsonfile").on("click", function () {
        $.ajax({
            url: '/receiveMappingFile',
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
    })
});