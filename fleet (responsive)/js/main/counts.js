

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
