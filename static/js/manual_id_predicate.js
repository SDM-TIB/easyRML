
  var click = 1;

  
    //remove button disable if last element is remaining
    function disableremovebutton() {
      if (click > 1) {
        $(`#remove-minus`).prop("disabled", false);
      }
      else {
        $(`#remove-minus`).prop("disabled", true);
      }
    }
$(document).ready(function () {

    $('#more-btn1').click(function () {
      document.getElementById("less-btn1").style.display =
        "block";
      document.getElementById("more-btn1").style.display = "none";
      document.getElementById("first-predicate-element1").style.display = "block";
      document.getElementById("second-predicate-element1").style.display = "block";

      if (document.getElementById("selectobjecttype1").value == 1) {
        document.getElementById("selectclasssuggestionbox1").style.display =
          "block";
        document.getElementById("selectclasssuggestion1").style.display =
          "block";
      } else if (document.getElementById("selectobjecttype1").value == 2) {
        document.getElementById("selectdatafieldsuggestionbox1").style.display =
          "block";
        document.getElementById("selectdatafieldsuggestion1").style.display =
          "block";
      } else if (document.getElementById("selectobjecttype1").value == 3) {
        document.getElementById("predicatedatauribox1").style.display =
          "block";
        // document.getElementById("predicateselectdatafield1").style.display =
        //   "block";
        document.getElementById("predicateselectclass1").style.display =
          "block";
      } else if (document.getElementById("selectobjecttype1").value == 4) {
        document.getElementById("predicateselecttriplesmapbox1").style.display =
          "block";
        document.getElementById("predicateselecttriplesmap1").style.display =
          "block";
      } else if (document.getElementById("selectobjecttype1").value == 5) {
        document.getElementById("predicateselecttriplesmapboxdifferent1").style.display =
          "block";
        document.getElementById("predicateselecttriplesmapdifferentdata1").style.display =
          "block";
        document.getElementById("joinconditionchild1").style.display =
          "block";
        document.getElementById("joinconditionparent1").style.display =
          "block";
      }

      document.getElementById("third-predicate-element1").style.display = "block";
    });


    $('#less-btn1').click(function () {
      document.getElementById("more-btn1").style.display =
        "block";
      document.getElementById("less-btn1").style.display = "none";
      document.getElementById("first-predicate-element1").style.display = "none";
      document.getElementById("second-predicate-element1").style.display = "none";

      if (document.getElementById("selectobjecttype1").value == 1) {
        document.getElementById("selectclasssuggestionbox1").style.display =
          "none";
        document.getElementById("selectclasssuggestion1").style.display =
          "none";
      } else if (document.getElementById("selectobjecttype1").value == 2) {
        document.getElementById("selectdatafieldsuggestionbox1").style.display =
          "none";
        document.getElementById("selectdatafieldsuggestion1").style.display =
          "none";
      } else if (document.getElementById("selectobjecttype1").value == 3) {
        document.getElementById("predicatedatauribox1").style.display =
          "none";
        document.getElementById("predicateselectdatafield1").style.display =
          "none";
        document.getElementById("predicateselectclass1").style.display =
          "none";
      } else if (document.getElementById("selectobjecttype1").value == 4) {
        document.getElementById("predicateselecttriplesmapbox1").style.display =
          "none";
        document.getElementById("predicateselecttriplesmap1").style.display =
          "none";
      } else if (document.getElementById("selectobjecttype1").value == 5) {
        document.getElementById("predicateselecttriplesmapboxdifferent1").style.display =
          "none";
        document.getElementById("predicateselecttriplesmapdifferentdata1").style.display =
          "none";
        document.getElementById("joinconditionchild1").style.display =
          "none";
        document.getElementById("joinconditionparent1").style.display =
          "none";
      }

      document.getElementById("third-predicate-element1").style.display = "none";
    });



    function add_plus() {

      const clicked = ++click;

      //remove button disable if last element is remaining
      disableremovebutton();

      var first_container = document.getElementById("first-container");

      for (var i = 1; i < clicked; i++) {
        $(`#selectclasssuggestion${i}`)
          // call destroy to revert the changes made by Select2
          .select2("destroy")
          .end();
      }

      var first_element = document.getElementById("first-element1").cloneNode(true);
      first_element.id = `first-element${clicked}`

      var first_element_more_btn = first_element.querySelector("#more-btn1");
      first_element_more_btn.id = `more-btn${clicked}`;

      var first_element_less_btn = first_element.querySelector("#less-btn1");
      first_element_less_btn.id = `less-btn${clicked}`;

      first_element.querySelector("#first-predicate-element1").id = `first-predicate-element${clicked}`;
      first_element.querySelector("#selectproperty1").id = `selectproperty${clicked}`;

      first_element.querySelector("#second-predicate-element1").id = `second-predicate-element${clicked}`;
      first_element.querySelector("#selectobjecttype1").id = `selectobjecttype${clicked}`;

      //box 1
      first_element.querySelector("#selectclasssuggestionbox1").id = `selectclasssuggestionbox${clicked}`;
      first_element.querySelector("#selectclasssuggestion1").id = `selectclasssuggestion${clicked}`;

      //box 2
      first_element.querySelector("#selectdatafieldsuggestionbox1").id = `selectdatafieldsuggestionbox${clicked}`;
      first_element.querySelector("#selectdatafieldsuggestion1").id = `selectdatafieldsuggestion${clicked}`;

      //box 3
      first_element.querySelector("#predicatedatauribox1").id = `predicatedatauribox${clicked}`;
      first_element.querySelector("#predicateselectdatafield1").id = `predicateselectdatafield${clicked}`;
      first_element.querySelector("#predicateselectclass1").id = `predicateselectclass${clicked}`;

      //box 4
      first_element.querySelector("#predicateselecttriplesmapbox1").id = `predicateselecttriplesmapbox${clicked}`;
      first_element.querySelector("#predicateselecttriplesmap1").id = `predicateselecttriplesmap${clicked}`;

      //box 5
      first_element.querySelector("#predicateselecttriplesmapboxdifferent1").id = `predicateselecttriplesmapboxdifferent${clicked}`;
      first_element.querySelector("#predicateselecttriplesmapdifferentdata1").id = `predicateselecttriplesmapdifferentdata${clicked}`;
      first_element.querySelector("#joinconditionchild1").id = `joinconditionchild${clicked}`;
      first_element.querySelector("#joinconditionparent1").id = `joinconditionparent${clicked}`;

      //box 6
      first_element.querySelector("#predicateselectfunctionmapbox1").id = `predicateselectfunctionmapbox${clicked}`;
      first_element.querySelector("#predicateselectfunctionmap1").id = `predicateselectfunctionmap${clicked}`;

      first_element.querySelector("#third-predicate-element1").id = `third-predicate-element${clicked}`;
      first_element.querySelector("#selecttermtypepredicateobjectmap1").id = `selecttermtypepredicateobjectmap${clicked}`;


      first_container.appendChild(first_element);

      //updating chosen effect to clone element
      // $(`#predicateselectdatafield${clicked}`).removeClass("chzn-done").css("display", "block").next().remove();
      $(`#predicateselectdatafield${clicked}`).removeClass("chzn-done").css("display", "block").next().remove();
      $(`#predicateselectdatafield${clicked}`).chosen({ no_results_text: "Oops, nothing found!", width: "100%" });
      $(`#predicateselectdatafield${clicked}`).trigger("chosen:updated");



      document.querySelector(`#selectobjecttype${clicked}`).value = "default";
      document.querySelector(`#selectclasssuggestion${clicked}`).value = "default";

      document.querySelector(`#selectproperty${clicked}`).value = "default";

      if (document.querySelector(`#selectobjecttype${clicked}`).value == "default") {
        document.querySelector(`#selectclasssuggestionbox${clicked}`).style.display =
          "none";
        document.querySelector(`#selectdatafieldsuggestionbox${clicked}`).style.display =
          "none";
        document.querySelector(`#predicatedatauribox${clicked}`).style.display =
          "none";
        document.querySelector(`#predicateselecttriplesmapbox${clicked}`).style.display =
          "none";
        document.querySelector(`#predicateselecttriplesmapboxdifferent${clicked}`).style.display =
          "none";
      }

      for (var i = 1; i <= clicked; i++) {

        $(`#selectclasssuggestion${i}`)
          .select2({
            tags: true,
            theme: "bootstrap-5",
          });

      }


      document.querySelector(`#more-btn${clicked}`).addEventListener("click", function () {

        document.querySelector(`#less-btn${clicked}`).style.display =
          "block";
        document.querySelector(`#more-btn${clicked}`).style.display = "none";
        document.querySelector(`#first-predicate-element${clicked}`).style.display = "block";


        if (document.querySelector(`#selectobjecttype${clicked}`).value == 1) {
          document.querySelector(`#selectclasssuggestionbox${clicked}`).style.display =
            "block";
          document.querySelector(`#selectclasssuggestion${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype${clicked}`).value == 2) {
          document.querySelector(`#selectdatafieldsuggestionbox${clicked}`).style.display =
            "block";
          document.querySelector(`#selectdatafieldsuggestion${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype${clicked}`).value == 3) {
          document.querySelector(`#predicatedatauribox${clicked}`).style.display =
            "block";
          // document.querySelector(`#predicateselectdatafield${clicked}`).style.display =
          //   "block";

          document.querySelector(`#predicateselectclass${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype${clicked}`).value == 4) {
          document.querySelector(`#predicateselecttriplesmapbox${clicked}`).style.display =
            "block";
          document.querySelector(`#predicateselecttriplesmap${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype${clicked}`).value == 5) {
          document.querySelector(`#predicateselecttriplesmapboxdifferent${clicked}`).style.display =
            "block";
          document.querySelector(`#predicateselecttriplesmapdifferentdata${clicked}`).style.display =
            "block";
          document.querySelector(`#joinconditionchild${clicked}`).style.display =
            "block";
          document.querySelector(`#joinconditionparent${clicked}`).style.display =
            "block";
        }


        document.querySelector(`#second-predicate-element${clicked}`).style.display = "block";
        document.querySelector(`#third-predicate-element${clicked}`).style.display = "block";
      });



      document.querySelector(`#less-btn${clicked}`).addEventListener("click", function () {


        document.querySelector(`#more-btn${clicked}`).style.display =
          "block";
        document.querySelector(`#less-btn${clicked}`).style.display = "none";


        document.querySelector(`#first-predicate-element${clicked}`).style.display = "none";
        document.querySelector(`#second-predicate-element${clicked}`).style.display = "none";

        if (document.querySelector(`#selectobjecttype${clicked}`).value == 1) {
          document.querySelector(`#selectclasssuggestionbox${clicked}`).style.display =
            "none";
          document.querySelector(`#selectclasssuggestion${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype${clicked}`).value == 2) {
          document.querySelector(`#selectdatafieldsuggestionbox${clicked}`).style.display =
            "none";
          document.querySelector(`#selectdatafieldsuggestion${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype${clicked}`).value == 3) {
          document.querySelector(`#predicatedatauribox${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselectdatafield${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselectclass${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype${clicked}`).value == 4) {
          document.querySelector(`#predicateselecttriplesmapbox${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselecttriplesmap${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype${clicked}`).value == 5) {
          document.querySelector(`#predicateselecttriplesmapboxdifferent${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselecttriplesmapdifferentdata${clicked}`).style.display =
            "none";
          document.querySelector(`#joinconditionchild${clicked}`).style.display =
            "none";
          document.querySelector(`#joinconditionparent${clicked}`).style.display =
            "none";
        }

        document.querySelector(`#third-predicate-element${clicked}`).style.display = "none";
      });

    }





    function remove_minus() {
      --click;
      //remove button disable if last element is remaining
      disableremovebutton();
      $("#first-container").children().last().remove();

    }


    $('#add-plus').click(add_plus);
    $('#remove-minus').click(remove_minus);


  });