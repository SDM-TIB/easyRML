$(document).on("change", "#uploadsourcefile", function () {
    event.preventDefault();
    var form_data1 = new FormData($("#formsource")[0]);
    
  
    $.ajax({
      type: "POST",
      url: "/readDataSource",
      data: form_data1,
      contentType: false,
      cache: false,
      processData: false,
      async: false,
      success: function (data1) {
        alert(data1);

        $('#selectdatafield').empty();
        $('#selectdatafield').append($('<option>' , { text: "--select the data field from the suggestion--" }).prop('selected',true));

        $('#selectdatafieldsuggestion').empty();
        $('#selectdatafieldsuggestion').append($('<option>' , { text: "--select the data field from the suggestion--" }).prop('selected',true));
        
        $('#predicateselectdatafield').empty();
        $('#predicateselectdatafield').append($('<option>' , { text: "--select the data field from the suggestion--" }).prop('selected',true));

        $('#joinconditionchild').empty();
        $('#joinconditionchild').append($('<option>' , { text: "--joinCondition child--" }).prop('selected',true));

        $.ajax({
          url:'/receiveDataFields',
          type:'GET',
          contentType: "application/json",
          dataType: 'json',
            success: function( json ) {
              $.each(json, function(file) {
                  $('#selectdatafield').append($('<option value="' + this + '">' + this + '</option>'));
                  $('#selectdatafieldsuggestion').append($('<option value="' + this + '">' + this + '</option>'));
                  $('#predicateselectdatafield').append($('<option value="' + this + '">' + this + '</option>'));
                  $('#joinconditionchild').append($('<option value="' + this + '">' + this + '</option>'));
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