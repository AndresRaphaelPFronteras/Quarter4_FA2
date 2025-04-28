
function main()
{  
    var tableHeightInput = document.getElementById("tableHeight").value;
    var tableWidthInput = document.getElementById("tableWidth").value;
    
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    
    table.appendChild(tbody);
    document.getElementById("body").appendChild(table);
    
    
    for (var i = 1; i <= tableHeightInput; i++) { // Creates new row.
        
        var tr = document.createElement("tr"); 
        
        for (var j = 1; j <= tableWidthInput; j++) { // Creates respective data for each row.
            
            var td = document.createElement("td");
            td.innerHTML = i * j;
            tr.appendChild(td);
        }
        
        tbody.appendChild(tr);
    }
    
    return false;
}

