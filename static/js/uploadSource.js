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
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      },
    });
  
    return false;
  });