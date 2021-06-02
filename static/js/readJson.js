$.ajax({
    url:'/suggestPrefix',
    type:'GET',
    contentType: "application/json",
    dataType: 'json',
      success: function( json ) {
        $.each(json, function(file) {
            $('#inputGroupSelect02').append($('<option value="' + this + '">' + this + '</option>'));
          });
        }
      });

///////////

$.ajax({
  url:'/suggestDataField',
  type:'GET',
  contentType: "application/json",
  dataType: 'json',
    success: function( json ) {
      $.each(json, function(file) {
          $('#selectdatafield').append($('<option value="' + this + '">' + this + '</option>'));
        });
      }
    });