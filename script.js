// Asssigning variable names to the selectors.

let container = document.querySelector("#container");
let startbtn = document.querySelector(".start");
let secondcontainer = document.querySelector("#second-container");
let section1 = document.getElementById("section1");
let nextbtn = document.querySelector(".next");
let button1 = document.querySelector(".option-a");
let button2 = document.querySelector(".option-b");
let button3 = document.querySelector(".option-c");
let button4 = document.querySelector(".option-d");
let options = document.querySelector("#options").children;
let question =  document.querySelector(".questions");
let endquiz = document.querySelector("#end1");
let section3 = document.getElementById('section3');


// The event listeners.

startbtn.addEventListener("click", gameon);
nextbtn.addEventListener("click", next)


// The questions and answers.

const questions = [
    { 
        question : 'Who is the president of Nigeria?',
        answer: [
            "Parosident Bubu", "President Buhari", "President Sinzu", "Jide Sanwoolu"
        ],
        correct: 1
    },
    {
        question : 'Who is the greatest pop-star?',
        answer: [ 'Michael Jackson' , 'Beyonce' , 'Davido', 'wizkid'],
        correct: 0
    },
    {
        question : 'What caused a pandemic in 2020?',
        answer: [ 'COVID 1.9', 'CONVID19', 'COVID-19',  'COVIK 1-9'],
        correct: 2
    },
    {
        question : 'Which is the best programming language?',
        answer: ['Java',  'Python', 'C++',  'JavaScript'],
        correct: 3
    },
    {
        question : 'Who is the G.O.A.T?',
        answer: ['C Ronaldo', 'Lionel Messi', 'Mikel Obi', 'Eden Hazard'],
        correct: 1
    }
];
let myQuestion;
let myAnswer;

// functions for the event listeners.

function gameon(){
    startbtn.classList.add('disappear');
    secondcontainer.classList.remove('disappear');
    section1.classList.remove('disappear');
    nextbtn.classList.remove('disappear');
    quizQuestions(countQuestions);
}

let score;
let scoreCount = 0;
let answeredQuestions;
let countQuestions = 0;

function quizQuestions(num) {
    myQuestions = question.innerHTML = questions[num].question;
    myAnswer = button1.innerHTML =  questions[num].answer[0]
    myAnswer = button2.innerHTML =  questions[num].answer[1];
    myAnswer = button3.innerHTML =  questions[num].answer[2];
    myAnswer = button4.innerHTML =  questions[num].answer[3];
    score = document.querySelector('#countscore').innerHTML = 'Score: ' + scoreCount;
    answeredQuestions = document.querySelector('#countquestion').innerHTML = 'Question ' + countQuestions + ' of ' + questions.length;
}

function clickeffect(element) {
    for (let i = 0; i < questions.length; i++) {
        if (countQuestions == i && element.id == questions[i].correct){
            scoreCount += 1;
            score = document.querySelector('#countscore').innerHTML = 'Score : ' + scoreCount;
        } else {
            element.classList.remove('btn');
            element.classList.add('wrong');
            score = document.querySelector('#countscore').innerHTML = 'Score: ' + scoreCount;
        }
        optionClickProof();
    }};
    
function  optionClickProof(){
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add('noclick');
        if (options[i].id == questions[countQuestions].correct) {
            options[i].classList.add('right');
            options[i].classList.remove('wrong');
        }
    }
}

function next() {
    if (countQuestions == questions.length - 1) {
        quizOver();
        scoreCount = 0;
    } else if (countQuestions < questions.length - 1) {
        nextbtn.classList.add('hide');
        countQuestions += 1;
        quizQuestions(countQuestions);
    }
    document.getElementById('0').classList.remove('right', 'wrong', 'noclick');
    document.getElementById('0').classList.add('btn');
    document.getElementById('1').classList.remove('right', 'wrong', 'noclick');
    document.getElementById('1').classList.add('btn');
    document.getElementById('2').classList.remove('right', 'wrong', 'noclick');
    document.getElementById('2').classList.add('btn');
    document.getElementById('3').classList.remove('right', 'wrong', 'noclick');
    document.getElementById('3').classList.add('btn');
};

function quizOver() {
    secondcontainer.classList.add('disappear');
    section1.classList.add('disappear');
    section3.classList.remove('disappear');
    nextbtn.classList.add("disappear");
    document.querySelector('#end').classList.remove('disappear');
    if (scoreCount <= 2) {
        endquiz.innerHTML = ' Awwn :( Your score is ' + scoreCount;
    } else if (scoreCount <= 4) {
        endquiz.innerHTML = ' Nice! your score is  ' + scoreCount;
    } else {
        endquiz.innerHTML = 'Excellent! Your score is ' + scoreCount;
    }
}
