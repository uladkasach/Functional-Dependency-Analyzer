<script src = '/analyzer/process/process_handler.js'></script>
<div style = 'width:100%; text-align:center;'>
    After your data is loaded, press the Analyze button to analyze the Universal Relation for FD's
</div>    
    <br><Br>
<div class = 'flexme ' style = 'width:100%;'>
    <div id = 'Analyze-button' 
         class = 'flexme unselectable sandButton' 
         style = 'min-width:175px; max-width:300px; width:100%; height:35px; padding:5px; margin:auto;'>
        <div style = 'margin:auto;' class = '' id = 'Analyze-buttonDefaultText'>  Analyze </div>
        <div style = 'margin:auto;' class = 'disnon' id = 'Analyze-buttonSelectedText'>   </div>
        <div style = 'margin:auto;' class = 'disnon' id = 'Analyze-buttonloadingImageHolder'>
            <div style = 'margin:auto;'>
                <div class="spinner" style = 'margin-top:7px;'>
                  <div class="dot1"></div>
                  <div class="dot2"></div>
                </div>
            </div>
        </div>
    </div>
    <script>
        theID = 'Analyze';
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
        
        window['buttonHandler']['Analyze'].DOM.main.onclick = function(){
            process_handler.analyze();
        }
    </script>
    
    
    
</div>

    <Br><Br>
    
<div style = 'width:100%;'>
    <div id = 'process_display_holder'>
    </div>
</div>