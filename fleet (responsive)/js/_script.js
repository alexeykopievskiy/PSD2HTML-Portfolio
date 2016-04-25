$(document).ready(function(){
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(150);
	});
	$('.chat_wrap .section').hide();
	$('.chat_wrap .section').find('a.close').click(function(e){
		$('.chat_wrap .section').slideUp(400);
		e.preventDefault();
	});
	$('.chat_wrap .chat_btn').click(function(e){
		$('.chat_wrap .section').slideDown(400);
	e.preventDefault();
	});
	$('.show_sb').click(function(){
		$(this).toggleClass('open');
		$('.sidebar_menu').find('ul').toggleClass('open_bar');
	});
	$('ul.menu.flex').flexMenu();
    $('.planet-change #non_click').click(function(non_click){
    	non_click.preventDefault();
    	$('.planet_popup').toggleClass('planet_on');
    	$(document).find(".sidebar_menu").toggleClass('sidebar_menu_planet_on');
    });
    $(function(){
		$('.scroll-pane').jScrollPane();
	});
    $('.sidebar_menu').addClass('do_not_show');
	$('.planet_popup').addClass('do_not_show');
	$('#non_click').click(function(){
		var menu = $('.sidebar_menu');
		var ul = $('.sidebar_menu ul');
		var planet = $('.planet_popup');
		var button = $('.show_sb');
		if ($(menu).hasClass('do_not_show')) {
			$(menu).removeClass('do_not_show');
			$(planet).addClass('do_not_show');
			$(button).addClass('do_not_show');
			$(ul).addClass('do_not_show');
		}
		else {
			$(planet).removeClass('do_not_show');
			$(menu).addClass('do_not_show');
			$(button).removeClass('do_not_show');
			$(ul).removeClass('do_not_show');
		}
	
	});

	if ($(window).width() < 620) {
		$('.planet_popup').addClass('planet_popup_mob');
	}
	else {
		$('.planet_popup').removeClass('planet_popup_mob');
	}



	if ($(window).width() < 960) {
		$('.top_panel .planet-change #non_click').unbind("click");
		$('.planet_popup').addClass('planet_on');
   		$('.sidebar_menu').addClass('sidebar_menu_planet_on');
   		
	}

	else {
		$('.planet_popup').removeClass('planet_on');
   		$('.sidebar_menu').removeClass('sidebar_menu_planet_on');
	}



});

$(window).resize(function() {
	if ($(window).width() < 620) {
		$('.planet_popup').addClass('planet_popup_mob');
	}
	else {
		$('.planet_popup').removeClass('planet_popup_mob');
	}


	if ($(window).width() < 960) {
		$('.top_panel .planet-change #non_click').unbind("click");
		$('.planet_popup').addClass('planet_on');
   		$('.sidebar_menu').addClass('sidebar_menu_planet_on');
	}

	else {
		$('.planet_popup').removeClass('planet_on');
   		$('.sidebar_menu').removeClass('sidebar_menu_planet_on');
	}

	if ($(window).width() > 960) { 
		$('.top_panel .planet-change #non_click').bind("click");
	}



});