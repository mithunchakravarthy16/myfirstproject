window.onload = function (){
const quizData = [
    {
        question: "Capital of India?",
        a: "New Delhi",
        b: "Chennai",
        c: "Mumbai",
        d: "Bangalore",
        correct: "ob_a",
    },
    {
        question: "What is the most used programming language in 2020?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "ob_d",  
    },
    {
        question: "Who is the Presient of US?",
        a: "Joe Bidden",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Kamala Harrish",
        correct: "ob_a",  
    },
    {
        question: "What does HTML Stands for?",
        a: "Cascading Style Sheet",
        b: "Hyper Text Markup Language",
        c: "Jason Object Notation",
        d: "Himaliyan Terminal Multi Lingual",
        correct: "ob_b",   
    },
    {
        question: "What year was JavaScript Launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "ob_b", 
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("qt");
const ot_a = document.getElementById("ot_a");
const ot_b = document.getElementById("ot_b");
const ot_c = document.getElementById("ot_c");
const ot_d = document.getElementById("ot_d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    
    
    questionEl.innerText = currentQuizData.question;

    ot_a.innerText = currentQuizData.a;
    ot_b.innerText = currentQuizData.b;
    ot_c.innerText = currentQuizData.c;
    ot_d.innerText = currentQuizData.d;
}


function getSelected()
{
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked)
        {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers()
{
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer)
    {
         if(answer === quizData[currentQuiz].correct){
              score++;
         }

         currentQuiz++;
         if (currentQuiz < quizData.length)
        { 
          loadQuiz();
        }
        else
        {
          quiz.innerHTML = `<h2>You Answered correctly ar ${score}/${quizData.length}</h2>`;
        }
       
    }
    
});
}



