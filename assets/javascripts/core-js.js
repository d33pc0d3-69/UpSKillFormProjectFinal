if(localStorage.getItem("data")){

	$("#data-container").addClass("hide");
	$(".end-message").addClass("ack-message").text("THANK YOU FOR SIGNING!");
	
	}

$("#btn-finish").click(function(){

	localStorage.setItem("data", "true");

	$("#data-container").addClass("hide");
		
	$(".end-message").addClass("ack-message").text("THANK YOU FOR SIGNING!");

});


