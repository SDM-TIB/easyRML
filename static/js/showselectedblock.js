function showSelectBlock(nameSelect) {
  if (nameSelect) {
    if (nameSelect.value == 0) {
      document.getElementById("classbox").style.display = "block";
      document.getElementById("datauribox").style.display = "none";
      document.getElementById("functionmapbox").style.display = "none";
    } else if (nameSelect.value == 1) {
      document.getElementById("classbox").style.display = "none";
      document.getElementById("datauribox").style.display = "block";
      document.getElementById("functionmapbox").style.display = "none";
    } else if (nameSelect.value == 2) {
      document.getElementById("classbox").style.display = "none";
      document.getElementById("datauribox").style.display = "none";
      document.getElementById("functionmapbox").style.display = "block";
    } else {
      document.getElementById("classbox").style.display = "none";
      document.getElementById("datauribox").style.display = "none";
      document.getElementById("functionmapbox").style.display = "none";
    }
  } else {
    document.getElementById("classbox").style.display = "none";
    document.getElementById("datauribox").style.display = "none";
    document.getElementById("functionmapbox").style.display = "none";
  }
}


function showSelectDataSource(nameDataSource) {
  if (nameDataSource) {
    if (nameDataSource.value == 0) {
      document.getElementById("csvbox").style.display = "block";
      document.getElementById("rdbbox").style.display = "none";
    } else if (nameDataSource.value == 1) {
      document.getElementById("csvbox").style.display = "none";
      document.getElementById("rdbbox").style.display = "block";
    } else {
      document.getElementById("csvbox").style.display = "none";
      document.getElementById("rdbbox").style.display = "none";
    }
  } else {
    document.getElementById("csvbox").style.display = "none";
    document.getElementById("rdbbox").style.display = "none";
  }
}





function showSelectPredicateBlock(predicateNameSelect) {
  // console.log(predicateNameSelect.id)
  // predicateNameSelect.id.split("-").pop();
  const clicked = predicateNameSelect.id.match(/\d+/)[0];
  if (predicateNameSelect) {
    if (predicateNameSelect.value == 1) {
      document.getElementById(`selectclasssuggestionbox${clicked}`).style.display =
        "block";
      document.getElementById(`selectdatafieldsuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox${clicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox${clicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent${clicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox${clicked}`).style.display =
        "none";
    } else if (predicateNameSelect.value == 2) {
      document.getElementById(`selectclasssuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox${clicked}`).style.display =
        "block";
      document.getElementById(`predicatedatauribox${clicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox${clicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent${clicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox${clicked}`).style.display =
        "none";
    } else if (predicateNameSelect.value == 3) {
      document.getElementById(`selectclasssuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox${clicked}`).style.display = "block";
      document.getElementById(`predicateselecttriplesmapbox${clicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent${clicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox${clicked}`).style.display =
        "none";
    } else if (predicateNameSelect.value == 4) {
      document.getElementById(`selectclasssuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox${clicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox${clicked}`).style.display =
        "block";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent${clicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox${clicked}`).style.display =
        "none";
    } else if (predicateNameSelect.value == 5) {
      document.getElementById(`selectclasssuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox${clicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox${clicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent${clicked}`
      ).style.display = "block";
      document.getElementById(`predicateselectfunctionmapbox${clicked}`).style.display =
        "none";
    } else if (predicateNameSelect.value == 6) {
      document.getElementById(`selectclasssuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox${clicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox${clicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent${clicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox${clicked}`).style.display =
        "block";
    } else {
      document.getElementById(`selectclasssuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`selectdatafieldsuggestionbox${clicked}`).style.display =
        "none";
      document.getElementById(`predicatedatauribox${clicked}`).style.display = "none";
      document.getElementById(`predicateselecttriplesmapbox${clicked}`).style.display =
        "none";
      document.getElementById(
        `predicateselecttriplesmapboxdifferent${clicked}`
      ).style.display = "none";
      document.getElementById(`predicateselectfunctionmapbox${clicked}`).style.display =
        "none";
    }
  } else {
    document.getElementById(`selectclasssuggestionbox${clicked}`).style.display = "none";
    document.getElementById(`selectdatafieldsuggestionbox${clicked}`).style.display =
      "none";
    document.getElementById(`predicatedatauribox${clicked}`).style.display = "none";
    document.getElementById(`predicateselecttriplesmapbox${clicked}`).style.display =
      "none";
    document.getElementById(
      `predicateselecttriplesmapboxdifferent${clicked}`
    ).style.display = "none";
    document.getElementById(`predicateselectfunctionmapbox${clicked}`).style.display =
      "none";
  }
}

