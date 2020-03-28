$(document).ready(function() {
  let frontEnd;
  let spiritAnimal;
  let question4;
  let mathAnswer;
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
  $("#frontend").click(function() {
    $("#q2").addClass("hidden");
    $("#q3").removeClass("hidden");
    frontEnd = true;
  });
  $("#backend").click(function() {
    $("#q2").addClass("hidden");
    $("#q3").removeClass("hidden");
    frontEnd = false;
  });
  $("#spirit1").click(function() {
    q3complete();
    spiritAnimal = 1;
  });
  $("#spirit2").click(function() {
    q3complete(2);
    spiritAnimal = 2;
  });
  $("#spirit3").click(function() {
    q3complete(3);
    spiritAnimal = 3;
  });
  $("#spirit4").click(function() {
    q3complete(4);
    spiritAnimal = 4;
  });
  $("#q4o1").click(function() {
    mathAnswer = q4complete();
    question4 = 3;
  });
  $("#q4o2").click(function() {
    mathAnswer = q4complete();
    question4 = 2;
  });
  $("#q4o3").click(function() {
    mathAnswer = q4complete();
    question4 = 1;
  });

  $("form").submit(function(event) {
    event.preventDefault();
    console.log(
      `frontEnd: ${frontEnd} spiritAnimal: ${spiritAnimal} question4:${question4} mathAnswer: ${mathAnswer} `
    );
  })
});

let changeColor = function(colors) {
  $("body").removeClass();
  $("body").addClass(colors);
};

let q3complete = function() {
  $("#q3").addClass("hidden");
  $("#q4").removeClass("hidden");
};

let q4complete = function() {
  $("#q4").addClass("hidden");
  $("#q5").removeClass("hidden");
  mathAnswer = getRandomInts();
  return mathAnswer;
};

let getRandomInts = function() {
  let int1 = Math.floor(Math.random() * 10);
  let int2 = Math.floor(Math.random() * 10);
  $("#firstInt").append(`   ${int1}`);
  $("#secondInt").append(`+ ${int2}`);
  return int1 + int2;
};
