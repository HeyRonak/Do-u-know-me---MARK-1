var readlineSync = require("readline-sync");
console.log("Lets see do you know about Ronak or not...\n");
var username = readlineSync.question("Please enter your name : ");

console.log("Welcome "  + username + "\n");

console.log("For every correct answer you got 1 point.\n");

var userScore = 0;

var myQuestions = [
  {
    question:"What is my nick name ? : ",
    option1: "(1)Raj",
    option2: "(2)Roni",
    option3:"(3)Rahul",
    answer:"Roni",
    otherAns:"2"
  },

  {
    question:"My favourite game ? : ",
    option1: "(1)Cricket",
    option2: "(2)Football",
    option3:"(3)Chess",
    answer:"Chess",
    otherAns:"3"
  },

  {
    question:"What is my favourite song ? : ",
    option1: "(1)Bandeya",
    option2: "(2)Judai",
    option3:"(3)humsafar",
    answer:"humsafar",
    otherAns:"3"
  },

  {
    question:"My favourite place ? : ",
    option1: "(1)Kankariya",
    option2: "(2)Riverfront",
    option3:"(3)ManekChowk",
    answer:"Kankariya",
    otherAns:"1"
  },

  {
    question:"My favourite color ? : ",
    option1: "(1)White",
    option2: "(2)Black",
    option3:"(3)Yellow",
    answer:"Black",
    otherAns:"2"
  }

];

function knowMe(myquestion  , myanswer , otherAns , option1 , option2 , option3){
    // input from user

    // var userAnswer = readlineSync.question(myquestion);
    console.log(myquestion);
    console.log(option1);
    console.log(option2);
    console.log(option3);
    var userAnswer = readlineSync.question("Enter your answer : ");


    if(userAnswer.toUpperCase() === myanswer.toUpperCase() || userAnswer === otherAns){
        console.log("hurray ! You got 1 point.\n");
        userScore++;
    }else{
      console.log("\nSorry , You are wrong ! Current Score : " + userScore);
      console.log("\nCorrect answer is : " + myanswer + "\n");
    }

}


for(i=0; i<myQuestions.length;++i){
  knowMe( myQuestions[i].question , myQuestions[i].answer, myQuestions[i].otherAns , myQuestions[i].option1,myQuestions[i].option2 , myQuestions[i].option3);
}

if(userScore === 0){
  console.log("you don't know me :( ");
}

 console.log("\nYour final score is : " + userScore);

