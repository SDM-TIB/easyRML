$(document).on("change", "#uploadttlfile", function () {
  event.preventDefault();
  var form_data = new FormData($("#formttl")[0]);
  // $("#formttl").submit();

  $.ajax({
    type: "POST",
    url: "/readOntology",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    async: false,
    success: function (data) {
      alert(data);

      $('#selectclass').empty();
      $('#selectclass').append($('<option>' , { text: "--select the corresponding class from the suggestion (based on the Ontology)--" }).prop('selected',true));

      $('#selectclasssuggestion').empty();
      $('#selectclasssuggestion').append($('<option>' , { text: "--select the corresponding class from the suggestion (based on the Ontology)--" }).prop('selected',true));
        
      $('#predicateselectclass').empty();
      $('#predicateselectclass').append($('<option>' , { text: "--select the corresponding class from the suggestion (based on the Ontology)--" }).prop('selected',true));

      $.ajax({
        url:'/receiveClasses',
        type:'GET',
        contentType: "application/json",
        dataType: 'json',
          success: function( json ) {
            $.each(json, function(file) {
                $('#selectclass').append($('<option value="' + this + '">' + this + '</option>'));
                $('#selectclasssuggestion').append($('<option value="' + this + '">' + this + '</option>'));
                $('#predicateselectclass').append($('<option value="' + this + '">' + this + '</option>'));
              });
            }
          });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
  });

  return false;
});
