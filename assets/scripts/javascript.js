$(document).ready(function() {

	$(".navbar-brand").click(function() {
		
			$('html, body').animate({
   			scrollTop: ($('#about').offset().top)},500);	

		});

	$("#nav-about").click(function() {
		
			$('html, body').animate({
   			scrollTop: ($('#about').offset().top)},500);	

		});

	$("#nav-portfolio").click(function() {
		
			$('html, body').animate({
   			scrollTop: ($('#portfolio').offset().top)},500);	

		});

	$("#nav-contact").click(function() {
		
			$('html, body').animate({
   			scrollTop: ($('#contact').offset().top)},500);	

		});
	
});