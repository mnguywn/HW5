var inputNum = prompt("Please enter five numbers separated by spaces (from 1-48), no duplicates:", "");
var inputBall = prompt("Please enter a Lucky Ball number (from 1-18):", "");

//function to randomize numbers
var randomNumber = function(min, max) {
    var num = Math.floor(Math.random()*(max-min +1)+min);
    return num;
}
//put the numbers into an array while randomizing
var lotNums = [randomNumber(01,48), randomNumber(01,48), randomNumber(01,48), randomNumber(01,48), 
    randomNumber(01,48)];

function sortLotNums() {
    lotNums.sort((a,b) => a-b);
}

var luckyNum = [randomNumber(01,18)];

//create loop to go through entered numbers to match with array numbers
var inputLot = inputNum.split(" ");
var count = 0; //count the number of number that are the same

//loop to compare lottery numbers
for (var i = 0; i < lotNums.length; i++) { //goes through randomized array
    for (var j = 0; j < inputLot.length; j++) { //goes through input string
        if (lotNums[i] == inputLot[j]) {
            count += 1;
            break;
        }
    }
}

function winnings() {
    if((count == 5) && (inputBall == luckyNum)) {
        document.write("You win: $7000 a week for LIFE");
    }
    else if(count == 5) {
        document.write("You win: $25000 a year for LIFE");
    }
    else if((count == 4) && (inputBall == luckyNum)) {
        document.write("You win: $5000");
    }
    else if(count == 4){
        document.write("You win: $200");
    }
    else if((count==3) && (inputBall == luckyNum)) {
        document.write("You Win: $150");
    }
    else if(count==3) {
        document.write("You win: $20");
    }
    else if((count==2) && (inputBall == luckyNum)) {
        document.write("You win: $25");
    }
    else if(count==2) {
        document.write("You win: $3");
    }
    else if((count==1) && (inputBall == luckyNum)) {
        document.write("You win: $6");
    }
    else if((inputBall == luckyNum)) {
        document.write("You win: $4");
    }
    else{
        document.write("I guess you're just not lucky. You win nothing. <br>");
    }
}