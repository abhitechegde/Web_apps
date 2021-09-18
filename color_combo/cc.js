//  show_colors div after 5 sec
function show() {
    document.getElementById("show_colors").style.visibility = "visible";
}
setTimeout("show()", 30); // after 3 secs


$(document).ready(function() {
  $('.box').bind('dragstart', function(event) {
    event.originalEvent.dataTransfer.setData('text/plain', event.target.getAttribute('id'));
  });

  $('.box-target, .color').bind('dragover', function(event) {
    event.preventDefault();
  });

  $('.box-target').bind('drop', function(event) {
    var src = event.originalEvent.dataTransfer.getData("text/plain");
    var bc = $('#' + src).css('background-color');
    $(this).css('background-color', bc);
  });

  $('.box').bind('drop', function(event) {
    var src = event.originalEvent.dataTransfer.getData("text/plain");
    swapNodes(document.getElementById(src), this);
  });

  function swapNodes(a, b) {
    var aparent= a.parentNode;
    var asibling= a.nextSibling===b? a : a.nextSibling;
    b.parentNode.insertBefore(a, b);
    aparent.insertBefore(b, asibling);
  }
});

 // change background color for specific id ..
function changebackground(){
	document.getElementById('cc').style.backgroundColor = 'green' ; 
}
    