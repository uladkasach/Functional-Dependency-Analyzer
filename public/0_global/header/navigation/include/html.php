


<?php
    $data = [
        "topOffset" => "15px",
        "title" => "",
        
        "hoverImgChangeBool" => true,
        "img" => [
            "default" => [
                "src" => "/img/navigation.png",
                "leftOffset" => "",
                "dimensions" => "25",
            ],
            "hover" => [
                "src" => "",
                "leftOffset" => "",
                "dimensions" => "",
            ],
        ],
        
        "id" => "navigationToggleButton",
        "faded" => true,
        ];
    print returnFloatingMenuButton($data);
?>


<div id = 'navigationHoverButtons' class = 'disnon'>
    
    
    <?php
        $data = [
            "topOffset" => "15px",
            "imgSrc" => "/img/beachbar.png",    
            "title" => "Dashboard",
            "id" => "navigation-dashboard",
            ];
        print returnFloatingMenuButton($data);
    ?>


    <?php
        $data = [
            "topOffset" => "90px",
            "imgSrc" => "/img/beachtime.png",    
            "title" => "Sign Out",
            "id" => "navigation-signout",
            ];
        print returnFloatingMenuButton($data);
    ?>
</div>

