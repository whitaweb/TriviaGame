$(document).ready(function(){



//counter that will change on stats page
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

  // Create 30 Second Countdown Timer

    var number = 30;
    var intervalId;

$("#start").on("click", function() {

    	Countdown();

    function Countdown() {
      intervalId = setInterval(decrement, 1000);



    }

    });

    function decrement() {

      number--;

 
      $("#timer").html("<h2>" + number + "</h2>");


      if (number === 0) {

        
        stop();

        alert("Time Up!");
      }
    }

    function stop() {

      
      clearInterval(intervalId);
    }

     
     function QCheck () {

     	var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();



		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Schnapps"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Toxic Envelops"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Kramer's rooster"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Vandalay Industries"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Cartwright"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		console.log(QCheck);
     }


  });