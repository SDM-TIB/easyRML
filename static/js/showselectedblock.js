function showSelectBlock(nameSelect) {
  const triplesclassboxclicked = nameSelect.id.match(/\d+/)[0];
  
  if (nameSelect) {
    if (nameSelect.value == 0) {
      document.getElementById(`classbox${triplesclassboxclicked}`).style.display = "block";
      document.getElementById(`datauribox${triplesclassboxclicked}`).style.display = "none";
      // document.getElementById("functionmapbox1").style.display = "none";
    } else if (nameSelect.value == 1) {
      document.getElementById(`classbox${triplesclassboxclicked}`).style.display = "none";
      document.getElementById(`datauribox${triplesclassboxclicked}`).style.display = "block";
      // document.getElementById("functionmapbox1").style.display = "none";
    } else if (nameSelect.value == 2) {
      document.getElementById(`classbox${triplesclassboxclicked}`).style.display = "none";
      document.getElementById(`datauribox${triplesclassboxclicked}`).style.display = "none";
      // document.getElementById("functionmapbox1").style.display = "block";
    } else {
      document.getElementById(`classbox${triplesclassboxclicked}`).style.display = "none";
      document.getElementById(`datauribox${triplesclassboxclicked}`).style.display = "none";
      // document.getElementById("functionmapbox1").style.display = "none";
    }
  } else {
    document.getElementById(`classbox${triplesclassboxclicked}`).style.display = "none";
    document.getElementById(`datauribox${triplesclassboxclicked}`).style.display = "none";
    // document.getElementById("functionmapbox1").style.display = "none";
  }
}


function showSelectDataSource(nameDataSource) {
  const triplesdataboxclicked = nameDataSource.id.match(/\d+/)[0];
  if (nameDataSource) {
    if (nameDataSource.value == 0) {
      document.getElementById(`csvbox${triplesdataboxclicked}`).style.display = "block";
      document.getElementById(`rdbbox${triplesdataboxclicked}`).style.display = "none";
    } else if (nameDataSource.value == 1) {
      document.getElementById(`csvbox${triplesdataboxclicked}`).style.display = "none";
      document.getElementById(`rdbbox${triplesdataboxclicked}`).style.display = "block";
    } else {
      document.getElementById(`csvbox${triplesdataboxclicked}`).style.display = "none";
      document.getElementById(`rdbbox${triplesdataboxclicked}`).style.display = "none";
    }
  } else {
    document.getElementById(`csvbox${triplesdataboxclicked}`).style.display = "none";
    document.getElementById(`rdbbox${triplesdataboxclicked}`).style.display = "none";
  }
}





function showSelectPredicateBlock(predicateNameSelect) {
  console.log(predicateNameSelect.id)
  // predicateNameSelect.id.split("-").pop();
  // const clicked = predicateNameSelect.id.match(/\d+/)[0];
  // console.log(clicked)
  const clicked = predicateNameSelect.id.split('-');
  const trimplsmapClicked=clicked[1];
  const predicatemapClicked=clicked[2];
  console.log(trimplsmapClicked,predicatemapClicked)
  if (predicateNameSelect) {
    if (predicateNameSelect.value == 1) {
      document.getElementById(`selectclasssuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "block";
      document.getElementById(`selectdatafieldsuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox-${trimplsmapClicked}-${predicatemapClicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent-${trimplsmapClicked}-${predicatemapClicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
    } else if (predicateNameSelect.value == 2) {
      document.getElementById(`selectclasssuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "block";
      document.getElementById(`predicatedatauribox-${trimplsmapClicked}-${predicatemapClicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent-${trimplsmapClicked}-${predicatemapClicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
    } else if (predicateNameSelect.value == 3) {
      document.getElementById(`selectclasssuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox-${trimplsmapClicked}-${predicatemapClicked}`).style.display = "block";
      document.getElementById(`predicateselecttriplesmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent-${trimplsmapClicked}-${predicatemapClicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
    } else if (predicateNameSelect.value == 4) {
      document.getElementById(`selectclasssuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox-${trimplsmapClicked}-${predicatemapClicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "block";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent-${trimplsmapClicked}-${predicatemapClicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
    } else if (predicateNameSelect.value == 5) {
      document.getElementById(`selectclasssuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox-${trimplsmapClicked}-${predicatemapClicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent-${trimplsmapClicked}-${predicatemapClicked}`
      ).style.display = "block";
      document.getElementById(`predicateselectfunctionmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
    } else if (predicateNameSelect.value == 6) {
      document.getElementById(`selectclasssuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox-${trimplsmapClicked}-${predicatemapClicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent-${trimplsmapClicked}-${predicatemapClicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "block";
    } else {
      document.getElementById(`selectclasssuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox-${trimplsmapClicked}-${predicatemapClicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent-${trimplsmapClicked}-${predicatemapClicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
        "none";
    }
  } else {
    document.getElementById(`selectclasssuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display = "none";
    document.getElementById(`selectdatafieldsuggestionbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
      "none";
    document.getElementById(`predicatedatauribox-${trimplsmapClicked}-${predicatemapClicked}`).style.display = "none";
    document.getElementById(`predicateselecttriplesmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
      "none";
    document.getElementById(
      `predicateselecttriplesmapboxdifferent-${trimplsmapClicked}-${predicatemapClicked}`
    ).style.display = "none";
    document.getElementById(`predicateselectfunctionmapbox-${trimplsmapClicked}-${predicatemapClicked}`).style.display =
      "none";
  }
}

