<script src = '/analyzer/input/input_handler.js'></script>
<div style = 'width:100%; text-align:center;'>
    Select a CSV file containing a Universal Relation to analyze function dependencies on.
    <br> <span style = 'font-size:14px;'> Ensure that it is comma seperated. </span>
</div>    
    <br><Br>
<div class = 'flexme ' style = 'width:100%;'>
    <div id = 'CSVSelector-button' 
         class = 'flexme unselectable sandButton' 
         style = 'min-width:175px; max-width:300px; width:100%; height:35px; padding:5px; margin:auto;'>
        <div style = 'margin:auto;' class = '' id = 'CSVSelector-buttonDefaultText'>  Select CSV </div>
        <div style = 'margin:auto;' class = 'disnon' id = 'CSVSelector-buttonSelectedText'>   </div>
        <div style = 'margin:auto;' class = 'disnon' id = 'CSVSelector-buttonloadingImageHolder'>
            <div style = 'margin:auto;'>
                <div class="spinner" style = 'margin-top:7px;'>
                  <div class="dot1"></div>
                  <div class="dot2"></div>
                </div>
            </div>
        </div>
    </div>
    <script>
        theID = 'CSVSelector';
        (function(id){
            thisButton_handler = new global_buttonHandler();
            thisButton_handler.classes = {default : "tileButtonText", disabled : "tileButtonText_disabled", root : "flexme unselectable hoverImgChange "};
            thisButton_handler.DOM = {
                main : document.getElementById(id+"-button"), 
                defaultText : document.getElementById(id+"-buttonDefaultText"),
                selectedText : document.getElementById(id+"-buttonSelectedText"),
                loadingImageHolder : document.getElementById(id+"-buttonloadingImageHolder"),
            };
            thisButton_handler.devmode = false;
            if(window["buttonHandler"] == undefined){
                window["buttonHandler"] = {};   
            }
            window["buttonHandler"][id] = thisButton_handler;
        })(theID);
        
        window['buttonHandler']['CSVSelector'].DOM.main.onclick = function(){
            document.getElementById('csv_file_selector').click();
        }
    </script>
    
    
    <input class = 'disnon' type="file" name="file" id="csv_file_selector">
    <script>
        document.getElementById('csv_file_selector').onchange = function(){
          var file = this.files[0];
          input_handler.read_file(file);
        };
    </script>
    
</div>

    <Br><Br>
    
<div style = 'width:100%;'>
    <div id = 'input_display_holder'>
    </div>
</div>