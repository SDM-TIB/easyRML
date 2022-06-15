
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

      var first_element = document.getElementById("first-element-1-1").cloneNode(true);
      first_element.id = `first-element${clicked}`

      var first_element_more_btn = first_element.querySelector("#more-btn-1-1");
      first_element_more_btn.id = `more-btn-1-${clicked}`;

      var first_element_less_btn = first_element.querySelector("#less-btn-1-1");
      first_element_less_btn.id = `less-btn-1-${clicked}`;

      first_element.querySelector("#first-predicate-element-1-1").id = `first-predicate-element-1-${clicked}`;
      first_element.querySelector("#selectproperty-1-1").id = `selectproperty-1-${clicked}`;

      first_element.querySelector("#second-predicate-element-1-1").id = `second-predicate-element-1-${clicked}`;
      first_element.querySelector("#selectobjecttype-1-1").id = `selectobjecttype-1-${clicked}`;

      //box 1
      first_element.querySelector("#selectclasssuggestionbox-1-1").id = `selectclasssuggestionbox-1-${clicked}`;
      first_element.querySelector("#selectclasssuggestion-1-1").id = `selectclasssuggestion-1-${clicked}`;

      //box 2
      first_element.querySelector("#selectdatafieldsuggestionbox-1-1").id = `selectdatafieldsuggestionbox-1-${clicked}`;
      first_element.querySelector("#selectdatafieldsuggestion-1-1").id = `selectdatafieldsuggestion-1-${clicked}`;

      //box 3
      first_element.querySelector("#predicatedatauribox-1-1").id = `predicatedatauribox-1-${clicked}`;
      first_element.querySelector("#predicateselectdatafield-1-1").id = `predicateselectdatafield$-1-{clicked}`;
      first_element.querySelector("#predicateselectclass-1-1").id = `predicateselectclass-1-${clicked}`;

      //box 4
      first_element.querySelector("#predicateselecttriplesmapbox-1-1").id = `predicateselecttriplesmapbox-1-${clicked}`;
      first_element.querySelector("#predicateselecttriplesmap-1-1").id = `predicateselecttriplesmap-1-${clicked}`;

      //box 5
      first_element.querySelector("#predicateselecttriplesmapboxdifferent-1-1").id = `predicateselecttriplesmapboxdifferent-1-${clicked}`;
      first_element.querySelector("#predicateselecttriplesmapdifferentdata-1-1").id = `predicateselecttriplesmapdifferentdata-1-${clicked}`;
      first_element.querySelector("#joinconditionchild-1-1").id = `joinconditionchild-1-${clicked}`;
      first_element.querySelector("#joinconditionparent-1-1").id = `joinconditionparent-1-${clicked}`;

      //box 6
      first_element.querySelector("#predicateselectfunctionmapbox-1-1").id = `predicateselectfunctionmapbox-1-${clicked}`;
      first_element.querySelector("#predicateselectfunctionmap-1-1").id = `predicateselectfunctionmap-1-${clicked}`;

      first_element.querySelector("#third-predicate-element-1-1").id = `third-predicate-element-1-${clicked}`;
      first_element.querySelector("#selecttermtypepredicateobjectmap-1-1").id = `selecttermtypepredicateobjectmap-1-${clicked}`;


      first_container.appendChild(first_element);

      //updating chosen effect to clone element
      // $(`#predicateselectdatafield${clicked}`).removeClass("chzn-done").css("display", "block").next().remove();
      $(`#predicateselectdatafield-1-${clicked}`).removeClass("chzn-done").css("display", "block").next().remove();
      $(`#predicateselectdatafield-1-${clicked}`).chosen({ no_results_text: "Oops, nothing found!", width: "100%" });
      $(`#predicateselectdatafield-1-${clicked}`).trigger("chosen:updated");



      document.querySelector(`#selectobjecttype-1-${clicked}`).value = "default";
      document.querySelector(`#selectclasssuggestion-1-${clicked}`).value = "default";

      document.querySelector(`#selectproperty-1-${clicked}`).value = "default";

      if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == "default") {
        document.querySelector(`#selectclasssuggestionbox-1-${clicked}`).style.display =
          "none";
        document.querySelector(`#selectdatafieldsuggestionbox-1-${clicked}`).style.display =
          "none";
        document.querySelector(`#predicatedatauribox-1-${clicked}`).style.display =
          "none";
        document.querySelector(`#predicateselecttriplesmapbox-1-${clicked}`).style.display =
          "none";
        document.querySelector(`#predicateselecttriplesmapboxdifferent-1-${clicked}`).style.display =
          "none";
      }

      for (var i = 1; i <= clicked; i++) {

        $(`#selectclasssuggestion-1-${i}`)
          .select2({
            tags: true,
            theme: "bootstrap-5",
          });

      }


      document.querySelector(`#more-btn-1-${clicked}`).addEventListener("click", function () {

        document.querySelector(`#less-btn-1-${clicked}`).style.display =
          "block";
        document.querySelector(`#more-btn-1-${clicked}`).style.display = "none";
        document.querySelector(`#first-predicate-element-1-${clicked}`).style.display = "block";


        if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == 1) {
          document.querySelector(`#selectclasssuggestionbox-1-${clicked}`).style.display =
            "block";
          document.querySelector(`#selectclasssuggestion-1-${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == 2) {
          document.querySelector(`#selectdatafieldsuggestionbox-1-${clicked}`).style.display =
            "block";
          document.querySelector(`#selectdatafieldsuggestion-1-${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == 3) {
          document.querySelector(`#predicatedatauribox-1-${clicked}`).style.display =
            "block";
          // document.querySelector(`#predicateselectdatafield${clicked}`).style.display =
          //   "block";

          document.querySelector(`#predicateselectclass-1-${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == 4) {
          document.querySelector(`#predicateselecttriplesmapbox-1-${clicked}`).style.display =
            "block";
          document.querySelector(`#predicateselecttriplesmap-1-${clicked}`).style.display =
            "block";
        } else if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == 5) {
          document.querySelector(`#predicateselecttriplesmapboxdifferent-1-${clicked}`).style.display =
            "block";
          document.querySelector(`#predicateselecttriplesmapdifferentdata-1-${clicked}`).style.display =
            "block";
          document.querySelector(`#joinconditionchild-1-${clicked}`).style.display =
            "block";
          document.querySelector(`#joinconditionparent-1-${clicked}`).style.display =
            "block";
        }


        document.querySelector(`#second-predicate-element-1-${clicked}`).style.display = "block";
        document.querySelector(`#third-predicate-element-1-${clicked}`).style.display = "block";
      });



      document.querySelector(`#less-btn-1-${clicked}`).addEventListener("click", function () {


        document.querySelector(`#more-btn-1-${clicked}`).style.display =
          "block";
        document.querySelector(`#less-btn-1-${clicked}`).style.display = "none";


        document.querySelector(`#first-predicate-element-1-${clicked}`).style.display = "none";
        document.querySelector(`#second-predicate-element-1-${clicked}`).style.display = "none";

        if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == 1) {
          document.querySelector(`#selectclasssuggestionbox-1-${clicked}`).style.display =
            "none";
          document.querySelector(`#selectclasssuggestion-1-${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == 2) {
          document.querySelector(`#selectdatafieldsuggestionbox-1-${clicked}`).style.display =
            "none";
          document.querySelector(`#selectdatafieldsuggestion-1-${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == 3) {
          document.querySelector(`#predicatedatauribox-1-${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselectdatafield-1-${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselectclass-1-${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == 4) {
          document.querySelector(`#predicateselecttriplesmapbox-1-${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselecttriplesmap-1-${clicked}`).style.display =
            "none";
        } else if (document.querySelector(`#selectobjecttype-1-${clicked}`).value == 5) {
          document.querySelector(`#predicateselecttriplesmapboxdifferent-1-${clicked}`).style.display =
            "none";
          document.querySelector(`#predicateselecttriplesmapdifferentdata-1-${clicked}`).style.display =
            "none";
          document.querySelector(`#joinconditionchild-1-${clicked}`).style.display =
            "none";
          document.querySelector(`#joinconditionparent-1-${clicked}`).style.display =
            "none";
        }

        document.querySelector(`#third-predicate-element-1-${clicked}`).style.display = "none";
      });

    }


    //remove button disable if last element is remaining
    function disableremovebutton() {
      if (click > 1) {
        $(`#remove-minus`).prop("disabled", false);
      }
      else {
        $(`#remove-minus`).prop("disabled", true);
      }
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