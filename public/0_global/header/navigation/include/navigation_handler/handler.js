var header_navigationHandler = {
    hiddenNavButtonsHolder : null,
    eventListenerHolder : null,
    
    displayHiddenNavButtons : function(){
        this.hiddenNavButtonsHolder.className = "";   
        this.eventListenerHolder = window.addEventListener("click", header_navigationHandler.hideHiddenNavButtons.bind(header_navigationHandler), true);
    },
    hideHiddenNavButtons : function(){
        this.hiddenNavButtonsHolder.className = "disnon";  
        this.eventListenerHolder = window.removeEventListener("click", header_navigationHandler.hideHiddenNavButtons, true);
    }
    
}