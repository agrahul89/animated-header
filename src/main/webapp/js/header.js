$(document).ready(function(){
	
	// Toggle Active State for Navigation Tabs
	$('div.inner').click(function(){
		if($(this).hasClass("inactive"))
		{
			$(this).toggleClass("inactive",false);
			$(this).toggleClass("active",true);

			// Change CSS for siblings
			$($(this).siblings()).each(function(){
				$(this).toggleClass("active",false);
				$(this).toggleClass("inactive",true);
			});
		}				
	});
	
	
});