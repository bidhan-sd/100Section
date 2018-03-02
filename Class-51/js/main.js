$(document).ready(function(){	
	$(".listing-carousel").owlCarousel({	
		items:3,
        loop:true,
		dots:true,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        margin:30,
        autoplay:false,
	});
	
});
