////////////////////////////////////
// Initialize Input Handler
////////////////////////////////////
function theFunction(){
    input_handler.table_creator = table_creator;
    input_handler.input_display_holder = document.getElementById('input_display_holder');
};
window.addEventListener("load", theFunction);



////////////////////////////////////
// Define Input Handler
////////////////////////////////////
var input_handler = {
    //////////////////////
    // Static, externally defined, constants
    //////////////////////
    table_creator : null,
    input_display_holder : null,
    
    
    //////////////////////
    // Internal Data Storage
    //////////////////////
    headers : null,
    data : null,
    
    
    
    //////////////////////
    // Display CSV
    //////////////////////
    display_csv : function(){
        console.log(this.headers);
        var full_data = [this.headers];
        //full_data.push(this.headers);
        full_data = full_data.concat(this.data);
        //full_data = full_data.filter(function(val){return val});
        table = table_creator.create_table(full_data);
        this.input_display_holder.appendChild(table);
    },
    
    //////////////////////
    // Read File
    //////////////////////
    read_file : function(file){
        var reader = new FileReader();
        reader.onload = function(progressEvent){
            // Entire file
            //console.log(this.result);
            
            
            // By lines
            var lines = this.result.split('\n');
            var data = [];
            for(var line = 1; line < lines.length; line++){
              //console.log(lines[line]);
                data.push(window['input_handler'].smart_split(lines[line]));
            }
            
            window['input_handler'].headers = window['input_handler'].smart_split(lines[0]);
            window['input_handler'].data = data;
            //(lines[0].split(','));
            
            //console.log(window['input_handler'].data);
            window['input_handler'].display_csv();
        };
        reader.readAsText(file);   
    },
    
    ////////////////////////
    // Split by commas, except when commas are inside double quotes
    ////////////////////////
    smart_split : function(string){
        //return string.split(',');
        var str = string;
        var arr = str.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);
        // Source : http://stackoverflow.com/questions/11456850/split-a-string-by-commas-but-ignore-commas-within-double-quotes-using-javascript
        /* will match:

            (
                ".*?"       double quotes + anything but double quotes + double quotes
                |           OR
                [^",\s]+    1 or more characters excl. double quotes or comma
            )
            (?=             FOLLOWED BY
                \s*,        0 or more empty spaces and a comma
                |           OR
                \s*$        0 or more empty spaces and nothing else (end of string)
            )

        */
        arr = arr || [];  // this will prevent JS from throwing an error in the below loop when there are no matches
        //for (var i = 0; i < arr.length; i++) console.log('arr['+i+'] =',arr[i]);
        return arr;
    }
}

