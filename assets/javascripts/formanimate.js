$(".next").click(function(){
    current_fs = $(this).parent();
	next_fs = $(this).parent().next();
    next_fs.hide();
    current_fs.hide("slide", { direction: "right" }, function() {
        next_fs.show("slide", { direction: "left" });
    });
});

$(".back").click(function(){
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
    current_fs.hide("slide", { direction: "left" }, function() {
        previous_fs.show("slide", { direction: "right" });
    });
});