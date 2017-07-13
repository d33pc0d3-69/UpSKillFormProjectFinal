	
	if(localStorage.getItem("data")){

		$("#data-container").addClass("hide");
		$(".end-message").addClass("ack-message").text("THANK YOU FOR SIGNING!");
		
		}

$(".finish").click(function(){

	$.ajax({

		data: $("#formdata").serialize(),
		type: "POST",
		dataType: "json",

		success: function(data){

		localStorage.setItem("data", "true");
		$("#data-container").addClass("hide");
		$(".end-message").addClass("ack-message").text("THANK YOU FOR SIGNING!");
		console.log(data);
		},

		error: function(){

			alert("ERROR!!!");
			console.log(data);

		}

	});
});