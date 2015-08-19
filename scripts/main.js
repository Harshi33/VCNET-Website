$(function(){
	
	$('#main_nav').on('mouseover','a',function(){
		$('.submenu-wp').fadeIn(250);
	
	});
	
	$('#main_nav').on('mouseout','a',function(){
		$('.submenu-wp').fadeOut(1000);
	})
});