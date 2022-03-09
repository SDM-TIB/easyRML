$(document).on("change", "#uploadsourcefile", function () {
    event.preventDefault();
    var form_data1 = new FormData($("#formsource")[0]);
    
  
    $.ajax({
      type: "POST",
      url: "/readDataSource_csv",
      data: form_data1,
      contentType: false,
      cache: false,
      processData: false,
      async: false,
      success: function (data1) {
        alert("File succesfully uploded");

        $('#selectdatafield').empty();
        $('#selectdatafield').append($('<option>' , {value: "default", text: "--select the data field--" }).prop('disabled',true));
        $("#selectdatafield").trigger("chosen:updated");

        $('#selectdatafieldsuggestion').empty();
        $('#selectdatafieldsuggestion').append($('<option>' , {value: "default", text: "--select the data field--" }).prop({'selected':true, 'disabled':true}));
        
        $('#predicateselectdatafield').empty();
        $('#predicateselectdatafield').append($('<option>' , {value: "default", text: "--select the data field--" }).prop('disabled',true));
        $("#predicateselectdatafield").trigger("chosen:updated");

        $('#joinconditionchild').empty();
        $('#joinconditionchild').append($('<option>' , {value: "default", text: "--joinCondition child--" }).prop({'selected':true, 'disabled':true}));

        $.ajax({
          url:'/receiveDataFields_csv',
          type:'GET',
          contentType: "application/json",
          dataType: 'json',
            success: function( json ) {
              $.each(json, function(file) {
                  $('#selectdatafield').append($('<option value="' + this + '">' + this + '</option>'));
                  $("#selectdatafield").trigger("chosen:updated");
                  
                  $('#selectdatafieldsuggestion').append($('<option value="' + this + '">' + this + '</option>'));

                  $('#predicateselectdatafield').append($('<option value="' + this + '">' + this + '</option>'));
                  $("#predicateselectdatafield").trigger("chosen:updated");
                  
                  $('#joinconditionchild').append($('<option value="' + this + '">' + this + '</option>'));
                });
              }
            });
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("format of file is wrong or error in upload");
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      },
    });
  
    return false;
  });