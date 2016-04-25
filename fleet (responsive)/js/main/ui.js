$( document ).ready(function() {

$(".sidebar_menu a").click( function () {
$(".fleet").hide();
$(".shipyard").hide();
$(".shipyard-responsive").hide();
return false;
});

$(".shipyard").hide();
$("a.shipyard-link").click( function () {
$(".click_flot").fadeIn(800).show();
return false;
});

$(".shipyard").hide();
$("a.shipyard-responsive-link").click( function () {
$(".shipyard-responsive").fadeIn(800).show();
return false;
});

$(".fleet").hide();
$("a.fleet-link").click( function () {
$(".fleet").fadeIn(800).show();
return false;
});

$('li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
	return false;
});

$('.fleet-select-link').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
	return false;
});

$('.clickme').click(function() {
    $(this).addClass('deactivate').siblings().removeClass('deactivate');
	return false;
});

			$("#click_all").click(function(){
				$(".ship_cont").children().css("display", "block");
			});
			$("#click_has").click(function(){
				$(".click_has").css("display", "block");
				$(".click_non").css("display", "none");
			});
			$("#click_non").click(function(){
				$(".click_non").css("display", "block");
				$(".click_has").css("display", "none");
			});

			$("#shipyard_1").click(function(){
				$("#shipyard_1_open, #shipyard_1 .view-layer").removeClass("display_none").toggleClass("display_block");
			});
			$(".block-close").click(function(){
				$("#shipyard_1_open, #shipyard_1 .view-layer").addClass("display_none");
			});

});