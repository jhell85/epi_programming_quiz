$(document).ready(function() {
  let frontEnd;
  let spiritAnimal;
  $("#start").click(function() {
    $("#start-container").addClass("hidden");
    $("#q1").removeClass("hidden");
  });
  $("#color1").click(function() {
    changeColor("c1");
  });
  $("#color2").click(function() {
    changeColor("c2");
  });
  $("#color3").click(function() {
    changeColor("c3");
  });
  $("#color4").click(function() {
    changeColor("c4");
  });
  $("#q1next").click(function() {
    $("#q1").addClass("hidden");
    $("#q2").removeClass("hidden");
  });
  $("#frontend").click(function(){
    $("#q2").addClass("hidden");
    $("#q3").removeClass("hidden");
    frontEnd = true
  })
  $("#backend").click(function(){
    $("#q2").addClass("hidden");
    $("#q3").removeClass("hidden");
    frontEnd = false
  })
  $("#spirit1").click(function(){
    q3complete(1)
  })
  $("#spirit2").click(function(){
    q3complete(2)
  })
  $("#spirit3").click(function(){
    q3complete(3)
  })
  $("#spirit4").click(function(){
    q3complete(4)
  })
});

let changeColor = function(colors) {
  $("body").removeClass();
  $("body").addClass(colors);
};

let q3complete = function(spiritNumber) {
  $("#q3").addClass("hidden");
  $("#q4").removeClass("hidden");
  spiritAnimal = spiritNumber
}
