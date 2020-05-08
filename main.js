let options=document.querySelectorAll('.options')  
let answerTrackerContainer=document.querySelector('#answerTracker')

let currentQuestionNumber=document.querySelector('#currentQuestionNumber');
let question=document.querySelector('#questionBox');

let totalCorrectAnswers=document.querySelector('.totalCorrect');

let percentage=document.querySelector('.percentage');


let op1=document.querySelector('#option1');
let op2=document.querySelector('#option2');
let op3=document.querySelector('#option3');
let op4=document.querySelector('#option4');

let questionIndex;
let index=0;
let myArray=[];
let anotherArray=[];
let scores=0;

let questions=[
  {
   q:'Who authored "Steal like an artist"?',
   options:['Robert Kiyosaki', 'Austin Kleon', 'Seth Godin', 'Stephen King'], 
   answer:'option2'
  },
  
  {
    q: 'What is the name of the novel inside the novel "The Fault in our Stars"?',
    options: ['An Imperial Affliction', 'The Red Tulip Man', 'Akata Witch', 'An American Marriage'],
    answer: 'option1'
  },
    
  {
    q: '"The fault is not in our Stars, dear Brutus, but in ourselves…" Who made this statement in Julius Ceasar?',
    options: ['Octavius', 'Mark Anthony', 'Cassius', 'Cicero'],
    answer: 'option3'
      },
  
  {
    q: 'Which of this is not among the unforgivable curses in "Harry Potter"?',
    options: ['Avada Kedreva', 'Expelliarmus', 'Crucio', 'Imperio'],
    answer: 'option2'
  },
  
  {
    q: '"Opportunity is a haughty goddess who wastes no time with those who are unprepared." This was excerpted from a book. Which is it?',
    options: ['No Excuses', 'Animal Farm', 'Think and Grow Rich', 'The Richest Man in Babylon'],
    answer: 'option4'
    }
  ];

/*The function*/
function load(){
  currentQuestionNumber.innerHTML=index+1;
  question.innerHTML=questions[questionIndex].q;
  op1.innerHTML=questions[questionIndex].options[0];
  op2.innerHTML=questions[questionIndex].options[1];
  op3.innerHTML=questions[questionIndex].options[2];
  op4.innerHTML=questions[questionIndex].options[3];
  index++;
 
};


function eventListener(element) {
  
    if (element.id == questions[questionIndex].answer) {
      element.classList.add('correct')
      updateAnswerTracker('scoreCorrect')
      scores++;
    }
    else { 
      element.classList.add('wrong')
      updateAnswerTracker('scoreWrong')
      
    };
 disableOptions();
 }
 
  
 
function disableOptions() {
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add('disabled');
    if (options[i].id==questions[questionIndex].answer)
     {
       options[i].classList.add('correct')
     }
  }
}

function enableOptions() {
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove('disabled','wrong','correct');
  }}

  
function randomQuestion(){
  let duplicates=0;
  let randomNumber=Math.floor(Math.random()*questions.length);
  if(index==questions.length){
    quizOver();
  }
  else{
  if(myArray.length>0){
    for(let i=0;i<myArray.length;i++)
    {if(myArray[i]==randomNumber){
      duplicates=1;
      break;
    }
    }
    if(duplicates==1){
      randomQuestion()
    } 
    else{
      questionIndex=randomNumber;
        load();
        anotherArray.push(questionIndex);
    }
  }
  
  
  if(myArray.length==0){
    questionIndex=randomNumber;
    load();
     anotherArray.push(questionIndex);
  }
  
  
  myArray.push(randomNumber);
  }
}

function answerTracker(){
  for (let i = 0; i < questions.length; i++){
    const div=document.createElement('div')
    answerTrackerContainer.appendChild(div).classList.add('score')
  }
}  

function updateAnswerTracker(className){
  answerTrackerContainer.children [index-1].classList.add(className);
}

function validate (){
  if(!options[0].classList.contains('disabled')){
    alert('Please, Select an Option!')
}
  else{
    enableOptions()
    randomQuestion()
}
}

function next(){
  validate()
}

function quizOver(){
  document.querySelector('.quizOver').classList.add('show');
  totalCorrectAnswers.innerHTML=scores;
  percentage.innerHTML=(scores/5)*100+"%!";
}

function playAgain(){
  window.location.reload()
}
  
window.onload=function(){
  randomQuestion()
  answerTracker()
  
};

//I forgive you, JS.😭😭


  
  



