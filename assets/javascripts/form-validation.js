$(function() {
	
	$("#formdata").validate({

		rules:{

			fname: {required: true},
			lname: {required: true},
			donation: {required: true, number: true},
			choldername: {required: true},
			ccardnumber: {required: true, number: true},
			ccardcode: {required: true, number: true},
			exdate: {required: true},
			message: {required: true},

			email:{

				required: true,
				email: true
			},

			mnumber: {

				required: true,
				number: true
			}
		},

		messages:{

			fname: "Please enter First Name",
			lname: "Please enter Last Name",
			email: "Please enter valid email",
			mnumber: "Please enter number",
			donation: "Please enter some amount",
			choldername: "Please enter card holder's name",
			ccardnumber: "Please enter card number",
			ccardcode: "Please enter card code",
			exdate: "Please enter date",
			message: "Please do not leave it blank"
		},

		submitHandler: function(form){

			form.next();
			
		}

	});
});