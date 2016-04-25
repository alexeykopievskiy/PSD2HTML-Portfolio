
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