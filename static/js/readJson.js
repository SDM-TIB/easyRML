$.ajax({
  url: "/receivePrefix",
  type: "GET",
  contentType: "application/json",
  dataType: "json",
  success: function (json) {
    var value;

    console.log(this);
    $.each(json, function (file) {
      if (this == "http://www.w3.org/ns/r2rml#") {
        value = "rr";
      } else if (this == "http://semweb.mmlab.be/ns/rml#") {
        value = "rml";
      } else if (this == "http://semweb.mmlab.be/ns/ql#") {
        value = "ql";
      } else if (this == "http://www.w3.org/2000/01/rdf-schema#") {
        value = "rdfs";
      } else if (this == "http://www.w3.org/1999/02/22-rdf-syntax-ns#") {
        value = "rdf";
      } else if (this == "http://purl.org/stuff/rev#") {
        value = "rev";
      } else if (this == "http://schema.org/") {
        value = "schema";
      } else if (this == "http://www.w3.org/2001/XMLSchema#") {
        value = "xsd";
      } else {
        value = "";
      }
      $("#inputGroupSelect02").append(
        $('<option value="' + value + '">' + this + "</option>")
      );
    });
  },
});
