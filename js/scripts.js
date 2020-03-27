$(document).ready(function() {
$("#start").click(function(){
  $("#start-container").addClass("hidden");
  $("#q1").removeClass("hidden")
})
$("#color1").click(function(){
  changeColor("c1")
})
$("#color2").click(function(){
  changeColor("c2")
})
$("#color3").click(function(){
  changeColor("c3")
})
$("#color4").click(function(){
  changeColor("c4")
})

});
let changeColor = (function(colors){
  $("body").removeClass();
  $("body").addClass(colors);
})