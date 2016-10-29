////////////////////////////////////
// Initialize Input Handler
////////////////////////////////////
function theFunction(){
    process_handler.table_creator = table_creator;
    process_handler.display_holder = document.getElementById('process_display_holder');
    process_handler.input = input_handler;
};
window.addEventListener("load", theFunction);



////////////////////////////////////
// Define Input Handler
////////////////////////////////////
var process_handler = {
    //////////////////////
    // Static, externally defined, constants
    //////////////////////
    table_creator : null,
    display_holder : null,
    input : null,
    
    //////////////////////
    // Display CSV
    //////////////////////
    display_csv : function(){
        console.log(this.headers);
        var full_data = [this.headers];
        //full_data.push(this.headers);
        full_data = full_data.concat(this.data);
        full_data = full_data.filter(function(val){return val});
        table = table_creator.create_table(full_data);
        this.input_display_holder.appendChild(table);
    },
    
    //////////////////////
    // analyze
    //////////////////////
    analyze : function(){
        console.log('--------');
        /////////////////
        // For every Header element, check if any Functional Dependencies can be denied
        /* -- How to check if a functional dependency can be denied:
                1) Identify each row containing equivalent values of that column element
                2) For each row with equivalent values, check if there are any differences in any of the other columns in the row.
                    - For each column:
                        - If there is a difference between any of the rows with equal values, this column does not determine that column. Mark the two rows as a result
                        - If there is no difference between any of the rows with equal values, this FD can not be denied. Mark 'G'
        */
        /////////////////
        //////////////////////////////////
        // Analyze what columns a single column determines, one column at a time.
        //////////////////////////////////
        var headers = this.input.headers;
        var col_count = headers.length;
        var conclusionHeader = ['-'];
        conclusionHeader = conclusionHeader.concat(headers);
        console.log(conclusionHeader);
        var conclusions = [conclusionHeader];
        for(var index = 0; index < col_count; index++){
            var thisColumnIndex = index;
            var thisHeader = headers[thisColumnIndex];
            /////////////////////////////////////////////////////
            // Evaluate which columns thisColumn determines
            /////////////////////////////////////////////////////
            //////////
            // Group rows by thisColumn
            //////////
            row_groups = this.group_by(thisColumnIndex); // array of arrays : indexes of rows grouped by equal value in column thisColumnIndex
            //console.log(row_groups);
            
            
            ///////////
            // array of arrays ; For every column, find whether the row groups can deny the FD. Returns index of two rows that deny or 'G' for each column
            ///////////
            results = this.attempt_denials_by_rowgroups(row_groups, index);
            
            
            //////////
            // Append this conclusion to conclusions
            //////////
            columnConclusion = [thisHeader];
            columnConclusion = columnConclusion.concat(results);
            //console.log(columnConclusion);
            conclusions.push(columnConclusion);
        }
        
        //console.log(conclusions);
        
        table = table_creator.create_table(conclusions, true);
        this.display_holder.appendChild(table);
        
    },
    
    
    //////////////////////
    // attempt denials by rowgroups
    //////////////////////
    attempt_denials_by_rowgroups : function(row_groups, sourceCol){
        // For every column, find whether the row groups can deny the FD
        var col_count = this.input.headers.length;
        var data = this.input.data;
        results = [];
        for(var index = 0; index < col_count; index++){
            ///////////////////////////////////////////
            // For this column, if row_group.length > 1, check that every row group has equivalient data
            ///////////////////////////////////////////
            if(index == sourceCol){
                var thisResult = '-';   
            } else {
                var thisResult = this.attempt_denial_for_row_groups_on_column(row_groups, index);
            }
            //console.log(thisResult);
            results.push(thisResult);
        }
        //console.log(results);
        return results;
    },
    
    /////////////////////
    // Attempt denial for row groups on column 
    /////////////////////
    attempt_denial_for_row_groups_on_column : function(row_groups, columnIndex){
        // For this column, if row_group.length > 1, check that every row group has equivalient data
        var row_groups_count = row_groups.length;
        var result = 'G';
        for(var index = 0; index < row_groups_count; index++){
            var thisGroup = row_groups[index];
            ///////////////////
            // Check that this group is equivalent, if it is not return where it is denied
            ///////////////////
            var thisResult = this.is_group_equivalent_on_column(thisGroup, columnIndex);
            if(thisResult !== true){
                return thisResult;   
            }
        }
        return result;
    },
    
    //////////////////////
    // Is thisGroup equivalent on column id
    ///////////////////////
    is_group_equivalent_on_column : function(thisGroup, columnIndex){
        // if row_group.length > 1, check that all data is equivalent
        if(thisGroup.length == 1){
            return true;    
        }
        //console.log(thisGroup);
        //console.log('running');
        var data = this.input.data;
        var groupIndex = null;
        var groupValue = null;
        //console.log(thisGroup.length);
        for(var index = 0; index < thisGroup.length; index++){
            // For this group, make sure that every value in column_index is equivalent
            var thisRowIndex = thisGroup[index];
            var thisRow = data[thisRowIndex];
            var thisValue = thisRow[columnIndex];
            if(groupValue == null){
                groupIndex = thisRowIndex;
                groupValue = thisValue;
                continue;
            }
            //console.log('group:', groupValue, 'this:', thisValue);
            if(thisValue !== groupValue){
               //console.log('F');
               return groupIndex + ', ' + thisRowIndex; 
            }
            //console.log('G');
        }
        return true;
    },
    
    //////////////////////
    // group_by
    //////////////////////
    group_by : function(columnIndex) {
        //array of arrays : indexes of rows grouped by equal value in column thisColumnIndex
        var data = this.input.data;
        var data_count = data.length;
        var row_groups = {};
        //console.log(data);
        for(var index = 0; index < data_count; index++){
            //////////////////
            // Get all values already found
            //////////////////
            var keys = Object.keys(row_groups);
            //console.log(keys);
            
            ///////////////////
            // Get this value
            ///////////////////
            var thisValue = data[index][columnIndex];
            //console.log(thisValue)
            
            ///////////////////
            // Put this row into the row groups
            ///////////////////
            //console.log(keys.indexOf(thisValue) != -1);
            //console.log(keys);
            //console.log(thisValue);
            if(keys.indexOf(thisValue) == -1){
                // Does not exist in array
                row_groups[thisValue] = [index];
            } else {
                // Already exists in array
                row_groups[thisValue].push(index);
            }
            //console.log(row_groups);
        }
        row_groups = Object.keys(row_groups).map(function (key) { return row_groups[key]; });
        return row_groups;
    },
    
    
}