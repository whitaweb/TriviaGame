


$(document).ready(function(){

// The only way I could get the end container to hide. 
	$("#endresults").hide(); 
	$("#questions").hide();
	$("#finished").hide();




//counter that will change on stats page
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

  // Create 30 Second Countdown Timer

    var number = 30;
    var intervalId;

    // Click function for start button. 30 Second countdown. 

function Countdown() {
      intervalId = setInterval(decrement, 1000);
    };

    // Sets coundtown to decrement by 1 second. 
    function decrement() {

      number--;

 
      $("#timer").html("<h2>" + number + "</h2>");


      if (number === 0) {

        
        stop();

        QCheck();

        $("#endresults").show();
        $("#questions").hide();

      }
    };

    function stop() {

      
      clearInterval(intervalId);
    };



$("#start").on("click", function() {

	$("#questions").show();

	$("#endresults").hide();

	$("#finished").show();

    	Countdown();
    

    });

$("#finished").on("click", function(){

    	stop();

    	QCheck();

    	$("#endresults").show();
    	$("#questions").hide(); 
    	

    });
    

     
     // Collect user answers. Use if else statement to log answer to count variables. 
     function QCheck () {

     	var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();

		// if($('input:radio[name="q1"]:checked').val() = "Schnapps"){
		// 	correctCount++;
		// }
		// else{
		// 	incorrectCount++;
		// }

		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Schnapps"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Toxic Envelopes"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Kramer's rooster"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Vandalay Industries"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Cartwright"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

     };


     QCheck();

     $('#questions').hide();

     
     	$('#correctanswers').html(correctCount);
		$('#wronganswers').html(incorrectCount);
		$('#unanswered').html(unansweredCount);


		
		


  });