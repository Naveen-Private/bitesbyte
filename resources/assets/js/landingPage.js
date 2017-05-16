$(document).ready(function($) {
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});

	var navoffeset=$(".agileits_header").offset().top;
	 $(window).scroll(function(){
		var scrollpos=$(window).scrollTop(); 
		if(scrollpos >=navoffeset){
			$(".agileits_header").addClass("fixed");
		}else{
			$(".agileits_header").removeClass("fixed");
		}
	 });
});