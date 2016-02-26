$( document ).ready(function() {
	$("#nav-switch").on('click',function(){		
		$("#nav-switch").toggleClass("active");
		$('html,body').toggleClass('disable_scroll');
		$("#nav-mobile").toggleClass("active");	
	});	
});