
//**************************************Query for flipped play pause button****************************
$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 1000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    // carouselButton.children span. it means that, for this carousel button, inside there if there is an element with the span tag, 
    //so we obviously know that in our carousel button, we had the span tag which contained the Font Awesome icon there.
    // So for that span tag, we're going to check hasClass.
})
// ***************************************************************************************************** 

// ******************* data-* attributes of javascript **************** 
$("#loginButton").click(function () {
    $("#loginModal").modal('show');
});
$("#reserveTableButton").click(function () {
    $("#reserveTableModal").modal('show');
});
//****************************************************************