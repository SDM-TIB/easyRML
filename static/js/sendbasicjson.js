$(document).ready(function(){




        

    $("#sendjson").on('click',function(){


      var jsonFile = {"output":[]};
      var output_file_path =  $("#outputfilepath").val();
      var output_file_name =  $("#outputfilename").val();

      jsonFile.output.push({
        output_file_path: output_file_path,
        output_file_name: output_file_name
      });

      

      
      // console.log(jsonString);


      var jsonObj = {"newPrefixes":[]};

      $('#inputGroupSelect02 option:selected').each(function(){
        // console.log(this);
        // console.log(this.value);
        if(this.getAttribute("isnewprefix")){
        jsonObj.newPrefixes.push({
          prefix: this.value,
          url: this.text
        });}
      });

      // var jsonString = JSON.stringify(jsonObj);





      var jsonOb = {"defaultPrefixes":[]};

      $('#inputGroupSelect02 option:selected').each(function(){
        // console.log(this);
        // console.log(this.value);
        if(!this.getAttribute("isnewprefix")){
        jsonOb.defaultPrefixes.push({
          prefix: this.value,
          url: this.text
        });}
      });


      // var jsonstr = JSON.stringify(jsonOb);

      // console.log(jsonstr)


      var final = []

      final.push(jsonFile);
      final.push(jsonOb);
      final.push(jsonObj);
      console.log(final);

      var finaljson = JSON.stringify(final);
      console.log(finaljson);


      // let dataURI= 'data:application/json;charset=utf-8,' + encodeURIComponent(finaljson);

      // let exportfilename = '/templates/input.json';
     

      // let linkelement = document.createElement('a');
      // linkelement.setAttribute('href', dataURI);
      // linkelement.setAttribute('download', exportfilename);
      // linkelement.click();

      $.ajax({
        type: "POST",
        url: "/readUserInput_preliminary",
        data: JSON.stringify(final),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
          alert(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
        },

      });
      
    
      
    });
  });