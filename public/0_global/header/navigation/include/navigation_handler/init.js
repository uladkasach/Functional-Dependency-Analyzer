function theFunction(){
    header_navigationHandler.hiddenNavButtonsHolder = document.getElementById("navigationHoverButtons");
    document.getElementById("navigationToggleButton-button").onclick = function(){
        header_navigationHandler.displayHiddenNavButtons();     
    };
    
    
    /* init toggleNavButton */
    var header_toggleNavigationButton = new global_buttonHandler();
    header_toggleNavigationButton.classes = {default : "sandButton", static : "sandButtonStatic", root : "flexme unselectable"};
    header_toggleNavigationButton.DOM = {
        main : document.getElementById("navigationToggleButton-button"), 
        defaultText : document.getElementById("navigationToggleButton-buttonDefaultText"),
        selectedText : document.getElementById("navigationToggleButton-buttonSelectedText"),
        loadingImageHolder : document.getElementById("navigationToggleButton-buttonloadingImageHolder"),
    };
    header_toggleNavigationButton.devmode = false;
    /* give reference to header_navHandler */
    header_navigationHandler.toggleButtonHandler = header_toggleNavigationButton;
    
    if(document.getElementById("navigation-dashboard-button") !== null){
        document.getElementById("navigation-dashboard-button").onclick = function(){
            header_navigationHandler.toggleButtonHandler.displayLoading();     
            window.location.href = '/my/dashboard/';
        };
    }
    
    document.getElementById("navigation-signout-button").onclick = function(){
        header_navigationHandler.toggleButtonHandler.displayLoading();   
        window.location.href = '/signout/';  
    };
    
    
};
window.addEventListener("load", theFunction);

