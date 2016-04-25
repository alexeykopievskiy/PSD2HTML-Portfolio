<script type="text/javascript">
$( document ).ready(function() {
// With options (defaults shown below)
$('.toggle').toggles({
 drag: true, // allow dragging the toggle between positions
  click: true, // allow clicking on the toggle
  text: {
    on: '', // text for the ON position
    off: '' // and off
  },
  on: false, // is the toggle ON on init
  animate: 350, // animation time
  transition: 'swing', // animation transition,
  checkbox: null, // the checkbox to toggle (for use in forms)
  clicker: $('.clickme'), // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
  width: 50, // width used if not set in css
  height: 20, // height if not set in css
  type: 'select' // if this is set to 'select' then the select style toggle will be used
});


// Getting notified of changes, and the new state:
$('.toggle').on('toggle', function (e, active) {
  if (active) {
    foo();
  } else {
    bar();
  }
});



$(function() {
  $(".block-close").click(function() {
    $(this).parent().fadeOut('400');
    return false;
  });
});

});
</script>

<script type="text/javascript">

$(function() {

  $(".select-counts").append('<div class="plus select-button">+</div><div class="minus select-button">-</div>');

  $(".select-button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else if($button.text() == "-") {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      	}
	  }
	  else if($button.text() == "0"){
	  	var newVal = 0;
	  }else{
	  	var newVal = parseInt($(".fleet-element-count").text());
	  }


    $button.parent().find("input").val(newVal);

  });

});
</script>





<script type="text/javascript">

$(function() {

  $(".select-counts2").append('<div class="plus select-button2">»</div><div class="minus select-button2">«</div>');

  $(".select-button2").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "»") {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	  }

    $button.parent().find("input").val(newVal);

  });

});
</script>

<script type="text/javascript">
$( document ).ready(function() {
$(".sidebar_menu a").click( function () {
$(".fleet").hide();
$(".shipyard").hide();
$(".shipyard-responsive").hide();
return false;
});
});
</script>

<script type="text/javascript">
$( document ).ready(function() {
$(".shipyard").hide();
$("a.shipyard-link").click( function () {
$(".click_flot").fadeIn(800).show();
return false;
});
});
</script>


<script type="text/javascript">
$( document ).ready(function() {
$(".shipyard").hide();
$("a.shipyard-responsive-link").click( function () {
$(".shipyard-responsive").fadeIn(800).show();
return false;
});
});
</script>

<script type="text/javascript">
$( document ).ready(function() {
$(".fleet").hide();
$("a.fleet-link").click( function () {
$(".fleet").fadeIn(800).show();
return false;
});
});
</script>


<script type="text/javascript">
$( document ).ready(function() {
$('li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
	return false;
});
});
</script>

<script type="text/javascript">
$( document ).ready(function() {
$('.fleet-select-link').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
	return false;
});
});
</script>


<script type="text/javascript">
$( document ).ready(function() {
$('.clickme').click(function() {
    $(this).addClass('deactivate').siblings().removeClass('deactivate');
	return false;
});
});
</script>