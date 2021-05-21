
function showSelectBlock(nameSelect)
{
    if(nameSelect){
        if(nameSelect.value == 1){
            document.getElementById("datauribox").style.display = 'block';
            document.getElementById("functionmapbox").style.display = 'none';
        }
        else if(nameSelect.value == 2){
            
            document.getElementById("functionmapbox").style.display = 'block';
            document.getElementById("datauribox").style.display = 'none';
        }
        else{
            document.getElementById("datauribox").style.display = 'none';
            document.getElementById("functionmapbox").style.display = 'none';
        }
    }
    else{
        document.getElementById("datauribox").style.display = 'none';
        document.getElementById("functionmapbox").style.display = 'none';
    }
};