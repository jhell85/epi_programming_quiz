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
    q3complete();
    spiritAnimal = 2;
  });
  $("#spirit3").click(function() {
    q3complete();
    spiritAnimal = 3;
  });
  $("#spirit4").click(function() {
    q3complete();
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
    let answer = $("#answer").val();
    evaluateResults(answer, mathAnswer, question4, spiritAnimal, frontEnd);
  });
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
  $("#firstInt").append(`${int1}`);
  $("#secondInt").append(`+ ${int2}`);
  return int1 + int2;
};

let evaluateResults = function(
  userAnswer,
  mathAnswer,
  question4,
  spiritAnimal,
  frontEnd
) {
  console.log(
    `userAnswer; ${userAnswer} mathAnswer: ${mathAnswer} question4: ${question4} spiritAnimal: ${spiritAnimal} frontEnd: ${frontEnd}`
  );
  $("#q5").addClass("hidden")
  if (mathAnswer != userAnswer && spiritAnimal === 3) {
    console.log("special slide");
  } else if (frontEnd === true && question4 === 1) {
    $("#results").replaceWith(`<div id="results" class="container"><h3 class="text-center">Frontend design best matches you, start with learning web fundamental languages: <br> HTML JavaScript & CSS</h3><div class="container d-flex justify-content-center"><img class="badges" src="img/html5-css-javascript.png"><div class="row"></div></div></div>`);
  } else if (frontEnd === false && question4 === 2) {
    $("#results").replaceWith(`<div id="results" class="container"><h3 class="text-center">Your first language should be Python a good choice for beginners and advanced programers alike</h3><div class="container d-flex justify-content-center"><img class="badges" src="img/python.png"><div class="row"></div></div></div>`)
  } else if (frontEnd === false && question4 === 3) {
    $("#results").replaceWith(`<div id="results" class="container"><h3 class="text-center">Your first language should be C sharp a good choice for beginners and advanced programers alike</h3><div class="container d-flex justify-content-center"><img class="badges" src="img/csharp.png"><div class="row"></div></div></div>`)
  } else if (frontEnd === true && (spiritAnimal === 1 || spiritAnimal === 2)) {
    $("#results").replaceWith(`<div id="results" class="container"><h3 class="text-center">You should learn C sharp as well as some JavaScript for your first programming language.</h3><div class="container d-flex justify-content-center"><img class="badges" src="img/csharp.png"><img class="badges" src="img/js.png"><div class="row"></div></div></div>`)
  } else {
    $("#results").replaceWith(`<div id="results" class="container"><h3 class="text-center">You should learn Ruby as well as some JavaScript for your first programming language.</h3><div class="container d-flex justify-content-center"><img class="badges" src="img/ruby.png"><img class="badges" src="img/js.png"><div class="row"></div></div></div>`)
  }
};
