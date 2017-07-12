$(".next").click(function(e){

	e.preventDefault();


     current_fs = $(this).parent();
     next_fs = $  (this).parent().next();

     $("#ul-prog li").eq($("fieldset").index(next_fs)).addClass("active");
     $("article").eq($("fieldset").index(next_fs)).addClass("show");


    next_fs.hide();
    current_fs.hide("slide", { direction: "right" }, function() {
        next_fs.show("slide", { direction: "left" });
    });
    
});


$(".back").click(function(){

   
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();


    $("#ul-prog li").eq($("fieldset").index(current_fs)).removeClass("active");
    $("#art").eq($("fieldset").index(current_fs)).html("hide");

    current_fs.hide("slide", { direction: "left" }, function() {
        previous_fs.show("slide", { direction: "right" });
    });

});
