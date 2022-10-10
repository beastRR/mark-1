var readlineSync = require("readline-sync");
var userName = readlineSync.question("What's your Name? ");
console.log("Welcome  "  + userName
 +  " Do you know Rahul ?");
 score=0;

 console.log("welcome to the Quiz")

 function play(question,answer){
   var userAnswer =readlineSync.question(question);
    userAnswer = userAnswer.toLowerCase();
   if(userAnswer === answer){
     console.log("You are right")
     score = score+1;

   }
   else{
     console.log("You are Wrong");
     score = score-1;
   }
 console.log("Your currentscore is:" ,score);
 }

 var questions  = [
   {question:"Where do he Iive ?",answer:"ranchi"},

 {question:"where did he  go to summer camp? ", answer:"goa"},
 {question:" Is he an Android or iPhone person?",answer:"android"},
 {question:"What is his favorite place?",answer:"ranchi"},
 
 {question:"What is his favorite series?",answer:"breaking bad"},
 {question:"Do he have any addictions?", answer:"no"}];


for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  
}
if(score >3){
    console.log("You know him very well")
  }
  else{


    console.log("As your currentscore is very low you do not know him very well")
      }
