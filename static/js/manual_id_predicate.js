
    var click = 1;

    var triplesmap_array = [1];
    
    
   //remove button disable if last element is remaining
    function disableremovebutton() {
      if (click > 1) {
        $(`#remove-minus`).prop("disabled", false);
      }
      else {
        $(`#remove-minus`).prop("disabled", true);
      }
    }


    function add_plus(evt) {

      var add_plus_btn=evt.target.closest("button");
      

      var triplesmapclicked = add_plus_btn.id.match(/\d+/)[0];

      const clicked = ++triplesmap_array[triplesmapclicked-1];

      // console.log(clicked)

      // console.log(triplesmapclicked)


      // const clicked = ++click;

      //remove button disable if last element is remaining
      disableremovebutton();

      var first_container = document.getElementById(`first-container${triplesmapclicked}`);

      for (var i = 1; i <= clicked; i++) {
        $(`#selectclasssuggestion-${triplesmapclicked}-${i}`)
          // call destroy to revert the changes made by Select2
          .select2("destroy")
          .end();
      }

      var first_element = document.getElementById(`first-element-1-1`).cloneNode(true);
      first_element.id = `first-element-${triplesmapclicked}-${clicked}`

      var first_element_more_btn = first_element.querySelector("#more-btn-1-1");
      first_element_more_btn.id = `more-btn-${triplesmapclicked}-${clicked}`;

      var first_element_less_btn = first_element.querySelector("#less-btn-1-1");
      first_element_less_btn.id = `less-btn-${triplesmapclicked}-${clicked}`;


      //first option in predicate
      first_element.querySelector("#first-predicate-element-1-1").id = `first-predicate-element-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#selectproperty-1-1").id = `selectproperty-${triplesmapclicked}-${clicked}`;

      //second option in predicate
      first_element.querySelector("#second-predicate-element-1-1").id = `second-predicate-element-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#selectobjecttype-1-1").id = `selectobjecttype-${triplesmapclicked}-${clicked}`;

      //box 1
      first_element.querySelector("#selectclasssuggestionbox-1-1").id = `selectclasssuggestionbox-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#selectclasssuggestion-1-1").id = `selectclasssuggestion-${triplesmapclicked}-${clicked}`;

      //box 2
      first_element.querySelector("#selectdatafieldsuggestionbox-1-1").id = `selectdatafieldsuggestionbox-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#selectdatafieldsuggestion-1-1").id = `selectdatafieldsuggestion-${triplesmapclicked}-${clicked}`;

      //box 3
      first_element.querySelector("#predicatedatauribox-1-1").id = `predicatedatauribox-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#predicateselectdatafield-1-1").id = `predicateselectdatafield-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#predicateselectclass-1-1").id = `predicateselectclass-${triplesmapclicked}-${clicked}`;

      //box 4
      first_element.querySelector("#predicateselecttriplesmapbox-1-1").id = `predicateselecttriplesmapbox-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#predicateselecttriplesmap-1-1").id = `predicateselecttriplesmap-${triplesmapclicked}-${clicked}`;

      //box 5
      first_element.querySelector("#predicateselecttriplesmapboxdifferent-1-1").id = `predicateselecttriplesmapboxdifferent-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#predicateselecttriplesmapdifferentdata-1-1").id = `predicateselecttriplesmapdifferentdata-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#joinconditionchild-1-1").id = `joinconditionchild-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#joinconditionparent-1-1").id = `joinconditionparent-${triplesmapclicked}-${clicked}`;

      //box 6
      first_element.querySelector("#predicateselectfunctionmapbox-1-1").id = `predicateselectfunctionmapbox-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#predicateselectfunctionmap-1-1").id = `predicateselectfunctionmap-${triplesmapclicked}-${clicked}`;

      //third option in predicate
      first_element.querySelector("#third-predicate-element-1-1").id = `third-predicate-element-${triplesmapclicked}-${clicked}`;
      first_element.querySelector("#selecttermtypepredicateobjectmap-1-1").id = `selecttermtypepredicateobjectmap-${triplesmapclicked}-${clicked}`;


      first_container.appendChild(first_element);

      //updating chosen effect to clone element
      // $(`#predicateselectdatafield${clicked}`).removeClass("chzn-done").css("display", "block").next().remove();
      $(`#predicateselectdatafield-${triplesmapclicked}-${clicked}`).removeClass("chzn-done").css("display", "block").next().remove();
      $(`#predicateselectdatafield-${triplesmapclicked}-${clicked}`).chosen({ no_results_text: "Oops, nothing found!", width: "100%" });
      $(`#predicateselectdatafield-${triplesmapclicked}-${clicked}`).trigger("chosen:updated");



      document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value = "default";
      document.querySelector(`#selectclasssuggestion-${triplesmapclicked}-${clicked}`).value = "default";

      document.querySelector(`#selectproperty-${triplesmapclicked}-${clicked}`).value = "default";

      if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == "default") {
        document.querySelector(`#selectclasssuggestionbox-${triplesmapclicked}-${clicked}`).style.display =
          "none";
        document.querySelector(`#selectdatafieldsuggestionbox-${triplesmapclicked}-${clicked}`).style.display =
          "none";
        document.querySelector(`#predicatedatauribox-${triplesmapclicked}-${clicked}`).style.display =
          "none";
        document.querySelector(`#predicateselecttriplesmapbox-${triplesmapclicked}-${clicked}`).style.display =
          "none";
        document.querySelector(`#predicateselecttriplesmapboxdifferent-${triplesmapclicked}-${clicked}`).style.display =
          "none";
      }

      for (var i = 1; i <= clicked; i++) {

        $(`#selectclasssuggestion-${triplesmapclicked}-${i}`)
          .select2({
            tags: true,
            theme: "bootstrap-5",
          });

      }


      document.querySelector(`#more-btn-${triplesmapclicked}-${clicked}`).addEventListener("click", function () {

        document.querySelector(`#less-btn-${triplesmapclicked}-${clicked}`).style.display =
          "block";
        document.querySelector(`#more-btn-${triplesmapclicked}-${clicked}`).style.display = "none";
        document.querySelector(`#first-predicate-element-${triplesmapclicked}-${clicked}`).style.display = "block";


        if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == 1) {
          document.querySelector(`#selectclasssuggestionbox-${triplesmapclicked}-${clicked}`).style.display =
            "block";
          document.querySelector(`#selectclasssuggestion-${triplesmapclicked}-${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == 2) {
          document.querySelector(`#selectdatafieldsuggestionbox-${triplesmapclicked}-${clicked}`).style.display =
            "block";
          document.querySelector(`#selectdatafieldsuggestion-${triplesmapclicked}-${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == 3) {
          document.querySelector(`#predicatedatauribox-${triplesmapclicked}-${clicked}`).style.display =
            "block";
          // document.querySelector(`#predicateselectdatafield${clicked}`).style.display =
          //   "block";

          document.querySelector(`#predicateselectclass-${triplesmapclicked}-${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == 4) {
          document.querySelector(`#predicateselecttriplesmapbox-${triplesmapclicked}-${clicked}`).style.display =
            "block";
          document.querySelector(`#predicateselecttriplesmap-${triplesmapclicked}-${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == 5) {
          document.querySelector(`#predicateselecttriplesmapboxdifferent-${triplesmapclicked}-${clicked}`).style.display =
            "block";
          document.querySelector(`#predicateselecttriplesmapdifferentdata-${triplesmapclicked}-${clicked}`).style.display =
            "block";
          document.querySelector(`#joinconditionchild-${triplesmapclicked}-${clicked}`).style.display =
            "block";
          document.querySelector(`#joinconditionparent-${triplesmapclicked}-${clicked}`).style.display =
            "block";
        }


        document.querySelector(`#second-predicate-element-${triplesmapclicked}-${clicked}`).style.display = "block";
        document.querySelector(`#third-predicate-element-${triplesmapclicked}-${clicked}`).style.display = "block";
      });



      document.querySelector(`#less-btn-${triplesmapclicked}-${clicked}`).addEventListener("click", function () {


        document.querySelector(`#more-btn-${triplesmapclicked}-${clicked}`).style.display =
          "block";
        document.querySelector(`#less-btn-${triplesmapclicked}-${clicked}`).style.display = "none";


        document.querySelector(`#first-predicate-element-${triplesmapclicked}-${clicked}`).style.display = "none";
        document.querySelector(`#second-predicate-element-${triplesmapclicked}-${clicked}`).style.display = "none";

        if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == 1) {
          document.querySelector(`#selectclasssuggestionbox-${triplesmapclicked}-${clicked}`).style.display =
            "none";
          document.querySelector(`#selectclasssuggestion-${triplesmapclicked}-${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == 2) {
          document.querySelector(`#selectdatafieldsuggestionbox-${triplesmapclicked}-${clicked}`).style.display =
            "none";
          document.querySelector(`#selectdatafieldsuggestion-${triplesmapclicked}-${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == 3) {
          document.querySelector(`#predicatedatauribox-${triplesmapclicked}-${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselectdatafield-${triplesmapclicked}-${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselectclass-${triplesmapclicked}-${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == 4) {
          document.querySelector(`#predicateselecttriplesmapbox-${triplesmapclicked}-${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselecttriplesmap-${triplesmapclicked}-${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype-${triplesmapclicked}-${clicked}`).value == 5) {
          document.querySelector(`#predicateselecttriplesmapboxdifferent-${triplesmapclicked}-${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselecttriplesmapdifferentdata-${triplesmapclicked}-${clicked}`).style.display =
            "none";
          document.querySelector(`#joinconditionchild-${triplesmapclicked}-${clicked}`).style.display =
            "none";
          document.querySelector(`#joinconditionparent-${triplesmapclicked}-${clicked}`).style.display =
            "none";
        }

        document.querySelector(`#third-predicate-element-${triplesmapclicked}-${clicked}`).style.display = "none";
      });

    }


$(document).ready(function () {

    $('#more-btn-1-1').click(function () {
      document.getElementById("less-btn-1-1").style.display =
        "block";
      document.getElementById("more-btn-1-1").style.display = "none";
      document.getElementById("first-predicate-element-1-1").style.display = "block";
      document.getElementById("second-predicate-element-1-1").style.display = "block";

      if (document.getElementById("selectobjecttype-1-1").value == 1) {
        document.getElementById("selectclasssuggestionbox-1-1").style.display =
          "block";
        document.getElementById("selectclasssuggestion-1-1").style.display =
          "block";
      } else if (document.getElementById("selectobjecttype-1-1").value == 2) {
        document.getElementById("selectdatafieldsuggestionbox-1-1").style.display =
          "block";
        document.getElementById("selectdatafieldsuggestion-1-1").style.display =
          "block";
      } else if (document.getElementById("selectobjecttype-1-1").value == 3) {
        document.getElementById("predicatedatauribox-1-1").style.display =
          "block";
        // document.getElementById("predicateselectdatafield1").style.display =
        //   "block";
        document.getElementById("predicateselectclass-1-1").style.display =
          "block";
      } else if (document.getElementById("selectobjecttype-1-1").value == 4) {
        document.getElementById("predicateselecttriplesmapbox1").style.display =
          "block";
        document.getElementById("predicateselecttriplesmap-1-1").style.display =
          "block";
      } else if (document.getElementById("selectobjecttype-1-1").value == 5) {
        document.getElementById("predicateselecttriplesmapboxdifferent-1-1").style.display =
          "block";
        document.getElementById("predicateselecttriplesmapdifferentdata-1-1").style.display =
          "block";
        document.getElementById("joinconditionchild-1-1").style.display =
          "block";
        document.getElementById("joinconditionparent-1-1").style.display =
          "block";
      }

      document.getElementById("third-predicate-element-1-1").style.display = "block";
    });


    $('#less-btn-1-1').click(function () {
      document.getElementById("more-btn-1-1").style.display =
        "block";
      document.getElementById("less-btn-1-1").style.display = "none";
      document.getElementById("first-predicate-element-1-1").style.display = "none";
      document.getElementById("second-predicate-element-1-1").style.display = "none";

      if (document.getElementById("selectobjecttype-1-1").value == 1) {
        document.getElementById("selectclasssuggestionbox-1-1").style.display =
          "none";
        document.getElementById("selectclasssuggestion-1-1").style.display =
          "none";
      } else if (document.getElementById("selectobjecttype-1-1").value == 2) {
        document.getElementById("selectdatafieldsuggestionbox-1-1").style.display =
          "none";
        document.getElementById("selectdatafieldsuggestion-1-1").style.display =
          "none";
      } else if (document.getElementById("selectobjecttype-1-1").value == 3) {
        document.getElementById("predicatedatauribox-1-1").style.display =
          "none";
        document.getElementById("predicateselectdatafield-1-1").style.display =
          "none";
        document.getElementById("predicateselectclass1-1-").style.display =
          "none";
      } else if (document.getElementById("selectobjecttype-1-1").value == 4) {
        document.getElementById("predicateselecttriplesmapbox-1-1").style.display =
          "none";
        document.getElementById("predicateselecttriplesmap-1-1").style.display =
          "none";
      } else if (document.getElementById("selectobjecttype-1-1").value == 5) {
        document.getElementById("predicateselecttriplesmapboxdifferent-1-1").style.display =
          "none";
        document.getElementById("predicateselecttriplesmapdifferentdata-1-1").style.display =
          "none";
        document.getElementById("joinconditionchild-1-1").style.display =
          "none";
        document.getElementById("joinconditionparent-1-1").style.display =
          "none";
      }

      document.getElementById("third-predicate-element-1-1").style.display = "none";
    });



   


    //remove button disable if last element is remaining
    function disableremovebutton() {
      if (click > 1) {
        $(`#remove-minus1`).prop("disabled", false);
      }
      else {
        $(`#remove-minus1`).prop("disabled", true);
      }
    }



    function remove_minus() {
      --click;
      //remove button disable if last element is remaining
      disableremovebutton();
      $("#first-container").children().last().remove();

    }


    $('#add-plus1').click(add_plus);
    $('#remove-minus1').click(remove_minus);


  });