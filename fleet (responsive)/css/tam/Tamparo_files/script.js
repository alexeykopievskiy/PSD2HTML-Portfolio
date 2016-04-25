
  /*bx слайдер*/
  $(document).ready(function(){
  $('.bxslider').bxSlider({
    nextText:'',
      prevText:'',
  });
});



 
/*карусель*/
  $(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    pagination:false,
    navigationText:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
  
  
});

/*карусель*/
  $(document).ready(function(){
  $('.owl-carousel1').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    pagination:false,
    navigationText:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
  
  
});

 /*всплывающее окно*/
$(document).ready(function(){
    
        $("#parent_popup").css("height", $(document).height());
        
        $(".top .btn").click(function(){
          $("#parent_popup").fadeIn(50);
          return false;
      });
        
        $(".close").click(function(){
          $("#parent_popup").fadeOut();
          return false;
      });
      
    
    });
    
    $(window).bind("resize", function(){
      $("#parent_popup").css("height", $(window).height());
    });

/*табы*/
(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs_catalog').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);