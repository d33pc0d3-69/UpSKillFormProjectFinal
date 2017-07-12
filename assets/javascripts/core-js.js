$("#btn-finish").click(function(){

localStorage.setItem("data", "true");

$("#data-container").addClass("hide");




if(localStorage.getItem("data")) {

$("#data-container").addClass("hide");


}