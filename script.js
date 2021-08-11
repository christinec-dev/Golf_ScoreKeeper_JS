//------------------- Credentials -----------------------------------------------
// Author: Christine Coomans
// Date Created: 2020/09/11

//----------------------------------------------------------------------------------------------------------------------------------
//This function is for the prompt method, which will ask the user for input.
//Function that allows the user to terminate the prompt before launching.
function scoreConfirmation() {
    var proceed = confirm("Welcome to the Golf Score-Keeper app. Do you have all 10 Golf Scores Ready?");

    //If the user is ready to enter the data, this launches the prompt
    if (proceed) {

        //Establishing cell values and declaring a new array.
        var result = 0;
        var belowAvg = 0;
        var score = new Array(10);
        var i;

        //Function used to get the score input for the ten rounds
        function inputScores() {
            for (i = 0; i < 10; i++) {
                score[i] = eval(prompt("Test Score Keeper:",
                    "Enter your ten golf scores individually to continue :"));
                result = result + score[i];
            }
        }

        //Function used to get the average from the ten inputs
        function averageScores() {
            avg = result / 10;
        }

        //Function used to displat the scores when the prompt has finished running
        function displayScores() {
            document.write("<h1><strong>Congratulations on your scores! </strong></h1>" + "<br>");
            document.write("<h2><strong>The average of the scores entered were: </strong></h2>" + avg +
                "<br>");
            document.write("<h2><strong>The ten golf scores that were entered were: </strong></h2>" + score);

        }

        //Calls the above function when the user clicks on the button to execute the script
        inputScores();
        averageScores();
        displayScores();

        //For when the user is not ready to enter the ten values
    } else {
        alert("Okay, come back when you're ready. Goodbye!")
    }
}
//----------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------
//This function is for the tabular method, where the user can enter their data in cells manually instead of via prompts.
//Function that will execute when user clicks on button.
function average() {
    var scores = new Array(10);
    var result = 0;

    //This calculates the average of the data entered in the cells
    function calculateAvg() {
        for (var i = 0; i < scores.length; i++) {
            var input = document.getElementById('scores' + i);
            scores[i] = new Number(input.value);
            result = result + scores[i];
            avg = result / 10;
        }
    }

    //This displays the average of the data entered in the cells
    function showResults() {
        document.write("<h1><strong>Congratulations on your scores! </strong></h1>" + "<br>");
        document.write("<h2><strong>The average of the scores entered were: </strong></h2>" + avg + "<br>");
        document.write("<h2><strong>The ten golf scores that were entered were: </strong></h2>" + scores);
    }
    //Calls the above function when the user clicks on the button to execute the script
    calculateAvg();
    showResults();
}
//----------------------------------------------------------------------------------------------------------------------------------