$(document).on("keyup", "#triplemapname", function (e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
      {
        var triplemapname = $("#triplemapname").val();
        alert(triplemapname);

        $("#predicateselecttriplesmap").append($('<option>', {
           text: triplemapname
        }));

        $("#triplemapname").val("");
      }
      
});