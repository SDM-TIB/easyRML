$(document).on("keyup", "#functionmapname", function (e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
      {
        var functionmapname = $("#functionmapname").val();
        alert(functionmapname);

        $("#predicateselectfunctionmap").append($('<option>', {
           text: functionmapname
        }));

        $("#functionmapname").val("");
      }
      
});

