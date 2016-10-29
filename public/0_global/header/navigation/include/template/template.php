<?php
function returnFloatingMenuButton($data){
    $topOffset = $data["topOffset"];
    $title = $data["title"];
    $id = $data["id"];
    $faded = $data["faded"];
    $buttonDimension = 55;
    
    $hoverImgChangeBool = $data["hoverImgChangeBool"];
    $hoverClassMod = "";
    if($hoverImgChangeBool === true){
        $hoverClassMod = " hoverImgChange ";   
    }
    $img = $data["img"];
    $imgKeys = array_keys($img);
    for($index = 0; $index < count($imgKeys); $index++){
        $thisKey = $imgKeys[$index];
        $thisDimension = $img[$thisKey]["dimensions"];
        
        $thisOffset = ($buttonDimension - intval($thisDimension))/2;
        
        $img[$thisKey]["leftOffset"] = $thisOffset;
    }
    
    /*
        "hoverImgChangeBool" => true,
        "img" => [
            "default" => [
                "src" => "",
                "dimensions" => "",
            ],
            "hover" => [
                "src" => "",
                "dimensions" => "",
            ],
        ],
    */

    
    
    $class = "navButton";
    if($faded == true){
        $class .= "Faded";   
    }
    ob_start();
    ?>

<div id = '<?php print $id; ?>-button' style = 'position:absolute;  border-radius:<?php print $buttonDimension; ?>px; height:<?php print $buttonDimension; ?>px; min-width:<?php print $buttonDimension; ?>px; top:<?php print $topOffset; ?>; left:25px; z-index:9999; ' class = 'flexme <?php print $hoverClassMod; ?> unselectable <?php print $class; ?>'>
    <div id = '<?php print $id; ?>-buttonDefaultText' style = 'height:<?php print $buttonDimension; ?>px; min-width:<?php print $buttonDimension; ?>px;' class = 'flexme'>
        <div  class = 'hoverHide'  class = 'flexme'>
            <div style = 'margin:auto; margin-left:<?php print $img["default"]["leftOffset"]; ?>px;'>
                <img src = '<?php print $img["default"]["src"]; ?>' style = 'width:<?php print $img["default"]["dimensions"]; ?>px; '> 
            </div>
            <?php if($hoverImgChangeBool === true): ?>
                <div class = 'hoverShow' style = 'margin:auto; margin-left:<?php print $img["hover"]["leftOffset"]; ?>px;'>
                    <img src = '<?php print $img["hover"]["src"]; ?>' style = 'width:<?php print $img["hover"]["dimensions"]; ?>px;'> 
                </div>
            <?php endif; ?>
        </div>
        <?php if($hoverImgChangeBool === true): ?>
        <div  class = 'hoverShow'  class = 'flexme'>
            <div class = '' style = 'margin:auto; margin-left:<?php print $img["hover"]["leftOffset"]; ?>px;'>
                <img src = '<?php print $img["hover"]["src"]; ?>' style = 'width:<?php print $img["hover"]["dimensions"]; ?>px;'> 
            </div>
        </div>
        <?php endif; ?>
        <?php if($title !== "" || !isset($title)): ?>
            <div class = 'flexme'>
                <div style = 'margin:auto; margin-left:5px; margin-right:20px; font-size:14px;'>
                    <?php print $title; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
    <div id = '<?php print $id; ?>-buttonloadingImageHolder' style = 'height:<?php print $buttonDimension; ?>px; min-width:<?php print $buttonDimension; ?>px;' class = 'disnon'>
        <div style = 'margin:auto;'>
            <div class="spinner" style = 'margin-top:22px;'>
              <div class="dot1"></div>
              <div class="dot2"></div>
            </div>
        </div>
    </div>
</div>

    <?php
    $html = ob_get_contents();
    ob_end_clean();
    
    return $html;
    
}
