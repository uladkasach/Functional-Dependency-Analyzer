////////////////////////////////
// Table Creator returns a DOM table given an N by M matrix, given as an array of rows.
////////////////////////////////

var table_creator = {
    create_table : function(matrix, color) {
        var tbl  = document.createElement('table');
        tbl.style.minWidth  = '100%';
        tbl.style.border = '1px solid black';
        tbl.style.backgroundColor = 'white';

        //console.log(matrix);
        var row_count = matrix.length;
        var col_count = matrix[0].length;
        console.log(matrix);
        
        for(var i = 0; i < row_count; i++){
            var tr = document.createElement('tr');
            for(var j = -1; j < col_count; j++){
                var td = document.createElement('td');
                
                value = matrix[i][j];
                if(j == -1) value = i;
                
                if(color === true && value == 'G'){
                    td.style.backgroundColor = 'rgba(0, 128, 0, 0.58)';
                }
                
                var text = document.createTextNode(value);
                if(j != -1) td.style.borderLeft = '1px solid black';
                if(i != -1) td.style.borderBottom = '1px dashed gray'; 
                if(i == 0) td.style.borderBottom = '1px solid black';
                td.style.minWidth = '50px;';
                td.appendChild(text);
                
                tr.appendChild(td);
            }
            
            tbl.appendChild(tr);
        }
        return tbl;   
    },
}