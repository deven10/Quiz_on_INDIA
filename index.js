/* var readlineSync = require('readline-sync');
var questionone = readlineSync.question('Am i older than 18? ');
var score = 0;
if(questionone === "yes"){
  console.log("Correct answer. Well i'm 20 precisely.");
  score = score + 1;
}
else{
  console.log("Wrong answer. I'm 20 currently.");
}
*/
/* var readlineSync = require('readline-sync');
var score = 0;
function myfunc(question,answer){
  var QnA = readlineSync.question(question);
 if(QnA == answer){
   console.log("===============================");
   score = score + 1;
 }
 else{
   console.log("===============================");
   score = score - 1;
 }
}
myfunc("Where do i live? ", "India");
myfunc("Am i older than 18? ", "yes");
myfunc("What\'s my name? ", "Deven");
console.log("Score ",score);

var arr = ["football", "cricket", "tennis", "baseball"];

for(var i =0; i<arr.length; i++){
  console.log(arr[i]);
}

var superheroes = [
  {
      name: "superman",
      strength: "10000",
      stealth: "100"
  },
  {
      name: "batman",
      strength: "100",
      stealth: "1000"
  },
  {
      name: "hulk",
      strength: "1000",
      stealth: "0"
  }
]

for(var i=0; i<superheroes.length; i++){
  console.log(superheroes[i].name, superheroes[i].strength);
}
*/

//importing CHALK.js
const chalk = require('chalk');

// Importing user input package
 var readlineSync = require('readline-sync');

// Read user input
var user = readlineSync.question(chalk.green("What's your name? "));
console.log(("=================================================="));

// Welcoming user
var welcome = `Hi ${user}, Welcome for playing this Quiz!!`;
console.log(chalk.yellow(welcome));
console.log("==================================================");

//Beginning the quiz
console.log(chalk.yellow("How well do you know INDIA, let's check it out..."));
console.log("==================================================");

//Listing quesiton and its answers for Quiz
var QnA = [
  {
    question: "Who's the current president of India? \n a)Pranad Mukherjee \n b)Ram Nath Kovind \n c)Abhijit Mukherjee \n d)Pratibha Patil \n write down an option: ",
    answer: "b"
  },
  {
    question: "How many states India have? \n a)30 \n b)29 \n c)28 \n d)27 \n write down an option: ",
    answer: "c"
  },
  {
    question: "Which state has most population in India? \n a)MP \n b)Maharashtra \n c)Rajastan \n d)UP \n write down an option: ",   
    answer: "d"
  },
  {
    question: "Tallest statue in India? \n a)Statue of Unity \n b)Mangal Mahadev \n c)Statue of Lord hanuman \n d)Dhyana Buddha statue \n write down an option: ",   
    answer: "a"
  },
  {
    question: "Which is the Leading stock exchange in India? \n a)BSE \n b)India International Exchange \n c)NSE \n d)Bangalore St. Exchange \n write down an option: ",   
    answer: "c"
  },
  {
    question: "National Emblem of India? \n a)Lion Capital of Ashoka \n b)National Emblem of India \n c)Ashoka Chakra \n d)State Emblem of India \n write down an option: ",   
    answer: "d"
  },
  {
    question: "Which award is considered highest in India? \n a)Bharat Ratna \n b)Arjuna Award \n c)Padma Vibhushan \n d)Padma Bhushan \n write down an option: ",   
    answer: "a"
  },
  {
    question: "Who wrote Vande Mataram? \n a)Rabindranath Tagore \n b)Kabir Das \n c)Sarojini Naidu \n d)Bankim Chandra Chatterjee \n write down an option: ",   
    answer: "d"
  },
]

//Declaring Score
var score = 0;

// Defining the function
function myfunc(question,answer){
  var QnA = readlineSync.question(chalk.cyanBright(question));

 if(QnA.toUpperCase() == answer.toUpperCase()){
   console.log("==================================================");
   score = score + 1;
   console.log(chalk.green("Correct answer!!"));
   console.log(chalk.green("Total Score: ",score));
 }
 else{
   console.log("==================================================");
   score = score - 1;
   console.log(chalk.red("Wrong answer!! \nCorrect answer is option '" + answer + "'" ));
   console.log(chalk.red("Total Score: ",score));
 }
 
 console.log(chalk.blue("=================================================="));
}

//using for loop for each question
for(var i=0; i<QnA.length; i++){
  myfunc(QnA[i].question,QnA[i].answer);
}
//Thanking user for playing

console.log(chalk.green("Thankyou "+user+" for Playing!! \nYour total score is " + score));

//Highscorers
var topScorer = {
    name: "Deven",
    scored: 5
  }


if(score >= topScorer.scored){
  console.log(chalk.green("\nCongratulations you are our new High Scorer, Keep it up!"));
}
else{
  console.log(chalk.yellow("Well played, Try to beat our high scorer '"+topScorer.name+"' \nHis highest score is '"+topScorer.scored+"'"));
}
