<?php
/////////////////////////////////////////////
// Sets Global Variables and Functions
///////////////
require_once($_SERVER["DOCUMENT_ROOT"] . "/../notpublic/config.php");
///////////////
/////////////////////////////////////////////

if(true){
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}

define("PUBLIC_ROOT", $_SERVER["DOCUMENT_ROOT"]);
define("NOTPUBLIC_ROOT", $_SERVER["DOCUMENT_ROOT"]."/../notpublic/");
