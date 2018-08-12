$(document).ready(function(){
    var count = 0;
    $(".decBlockchainWrapper .decredblockWrap").click(function(){
        $(this).toggleClass("expanded");
        count++;

        if (count > 1) {
            $(".decBlockchainWrapper .decredblockWrap").removeClass("expanded");
            count = 0;
        }
        console.log(count);
    });

    $(".tableRowCheck").click(function(){
        $(this).toggleClass("clicked");
    });

    $(".searchbox img").click(function(){
        $(".searchbox input").toggleClass("hide");
    });


    $(".decredblockWrap").click(
        function() {
            if ($( ".decredblockWrap" ).hasClass( "expanded" )) {
                $( ".decredblockWrap" ).siblings().addClass("fade");
            } else {
                $( ".decredblockWrap" ).siblings().removeClass("fade");
            }
        }
    )
});
