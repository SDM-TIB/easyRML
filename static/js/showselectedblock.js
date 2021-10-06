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
  if (predicateNameSelect) {
    if (predicateNameSelect.value == 1) {
      document.getElementById("selectclasssuggestionbox").style.display =
        "block";
      document.getElementById("selectdatafieldsuggestionbox").style.display =
        "none";
      document.getElementById("predicatedatauribox").style.display = "none";
      document.getElementById("predicateselecttriplesmapbox").style.display =
        "none";
      document.getElementById(
        "predicateselecttriplesmapboxdifferent"
      ).style.display = "none";
      document.getElementById("predicateselectfunctionmapbox").style.display =
        "none";
    } else if (predicateNameSelect.value == 2) {
      document.getElementById("selectclasssuggestionbox").style.display =
        "none";
      document.getElementById("selectdatafieldsuggestionbox").style.display =
        "block";
      document.getElementById("predicatedatauribox").style.display = "none";
      document.getElementById("predicateselecttriplesmapbox").style.display =
        "none";
      document.getElementById(
        "predicateselecttriplesmapboxdifferent"
      ).style.display = "none";
      document.getElementById("predicateselectfunctionmapbox").style.display =
        "none";
    } else if (predicateNameSelect.value == 3) {
      document.getElementById("selectclasssuggestionbox").style.display =
        "none";
      document.getElementById("selectdatafieldsuggestionbox").style.display =
        "none";
      document.getElementById("predicatedatauribox").style.display = "block";
      document.getElementById("predicateselecttriplesmapbox").style.display =
        "none";
      document.getElementById(
        "predicateselecttriplesmapboxdifferent"
      ).style.display = "none";
      document.getElementById("predicateselectfunctionmapbox").style.display =
        "none";
    } else if (predicateNameSelect.value == 4) {
      document.getElementById("selectclasssuggestionbox").style.display =
        "none";
      document.getElementById("selectdatafieldsuggestionbox").style.display =
        "none";
      document.getElementById("predicatedatauribox").style.display = "none";
      document.getElementById("predicateselecttriplesmapbox").style.display =
        "block";
      document.getElementById(
        "predicateselecttriplesmapboxdifferent"
      ).style.display = "none";
      document.getElementById("predicateselectfunctionmapbox").style.display =
        "none";
    } else if (predicateNameSelect.value == 5) {
      document.getElementById("selectclasssuggestionbox").style.display =
        "none";
      document.getElementById("selectdatafieldsuggestionbox").style.display =
        "none";
      document.getElementById("predicatedatauribox").style.display = "none";
      document.getElementById("predicateselecttriplesmapbox").style.display =
        "none";
      document.getElementById(
        "predicateselecttriplesmapboxdifferent"
      ).style.display = "block";
      document.getElementById("predicateselectfunctionmapbox").style.display =
        "none";
    } else if (predicateNameSelect.value == 6) {
      document.getElementById("selectclasssuggestionbox").style.display =
        "none";
      document.getElementById("selectdatafieldsuggestionbox").style.display =
        "none";
      document.getElementById("predicatedatauribox").style.display = "none";
      document.getElementById("predicateselecttriplesmapbox").style.display =
        "none";
      document.getElementById(
        "predicateselecttriplesmapboxdifferent"
      ).style.display = "none";
      document.getElementById("predicateselectfunctionmapbox").style.display =
        "block";
    } else {
      document.getElementById("selectclasssuggestionbox").style.display =
        "none";
      document.getElementById("selectdatafieldsuggestionbox").style.display =
        "none";
      document.getElementById("predicatedatauribox").style.display = "none";
      document.getElementById("predicateselecttriplesmapbox").style.display =
        "none";
      document.getElementById(
        "predicateselecttriplesmapboxdifferent"
      ).style.display = "none";
      document.getElementById("predicateselectfunctionmapbox").style.display =
        "none";
    }
  } else {
    document.getElementById("selectclasssuggestionbox").style.display = "none";
    document.getElementById("selectdatafieldsuggestionbox").style.display =
      "none";
    document.getElementById("predicatedatauribox").style.display = "none";
    document.getElementById("predicateselecttriplesmapbox").style.display =
      "none";
    document.getElementById(
      "predicateselecttriplesmapboxdifferent"
    ).style.display = "none";
    document.getElementById("predicateselectfunctionmapbox").style.display =
      "none";
  }
}
