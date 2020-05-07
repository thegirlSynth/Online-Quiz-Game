let options=document.querySelectorAll('.options')  


let currentQuestionNumber=document.querySelector('#currentQuestionNumber');

let question=document.querySelector('#questionBox');

let op1=document.querySelector('#option1');
let op2=document.querySelector('#option2');
let op3=document.querySelector('#option3');
let op4=document.querySelector('#option4');

let questionIndex;
let index=0;


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
 eventListener()
};


function eventListener() {
  //for (let i=0;i<questions.length;i++){ 
   options.forEach(item=>{item.addEventListener('click',event=>{
    if (item.id == questions[questionIndex].answer) {
      item.classList.add('correct')
    }
    else { 
      item.classList.add('wrong')
    };
 disabledOptions();
 })  
 })
  
}
 
function disabledOptions() {
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add('disabled');
  }
}
  
function randomQuestion(){
  let randomNumber=Math.floor(Math.random()*questions.length);
  questionIndex=randomNumber;
  load();
}
  
window.onload=function(){
  randomQuestion()
};

//I forgive you, JS.

//for (let i = 0; i < options.length; i++){
  
 //options[i].addEventListener('click', function(){
 //  if option.[i]==
   
  // options[i].classList.toggle("correct");
// })
  
//  };
  
  



