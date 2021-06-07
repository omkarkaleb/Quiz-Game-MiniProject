const quizdata = [
    {
        question: "Kharg, the largest warship of which country, has recently caught fire and sank in the Gulf of Oman",
        a: 'Iraq',
        b: 'Iran',
        c: 'Oman',
        d: 'Qatar',
        correct: 'b'
    },
    {
        question: "‘Red Tourism’, which was seen in the news, is associated with which country?",
        a: 'Indonesia',
        b: 'India',
        c: 'China',
        d: 'France',
        correct: 'c'
    },
    {
        question: "Offshore patrol vessel “Sajag” has been commissioned to which armed force?",
        a: 'Indian Coast Guard',
        b: 'Indian Navy',
        c: 'Indian Army',
        d: 'CRPF',
        correct: 'a'
    },
    {
    question: '“Tianzhou-2” is a spacecraft of which country?',
        a: 'Japan',
        b: 'Russia',
        c: 'China',
        d: 'South Korea',
        correct: 'd'
    }    
    ]

const question = document.getElementById('question');

let score = 0;

const getanswer = document.querySelectorAll(".answer");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const quiz = document.getElementById("quiz");

let currentquestion = 0;

loadquiz();


function loadquiz(){

    getdeselected();

    const currentquizdata = quizdata[currentquestion]
    question.innerText = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;

}


function getdeselected(){
    getanswer.forEach((getanswer) => {
        getanswer.checked = false;
    });
}

const answersubmitted = document.getElementById('submit');

function getselected(){
    let answer = undefined;

    getanswer.forEach((getanswer) =>{
        if (getanswer.checked){
            answer = getanswer.id;
            console.log(getanswer)
        }
    })

    return answer;
}

answersubmitted.addEventListener('click', () =>{

    const answer = getselected();

    if(answer){

        if (answer === quizdata[currentquestion].correct){
            score++;
        }

        currentquestion++;
        if(currentquestion < quizdata.length){
            loadquiz();
        }else{
            quiz.innerHTML = `
            <h2>Your Score is ${score}/${quizdata.length}</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }

    
    
});

console.log(score)