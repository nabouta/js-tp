const quizData = [
    {
        question:"Quel tropique traverse le golfe du Mexique ?",

        a:"Tropique du cancer",
        b:"Tropique du Bélier",
        c:"Tropique du capricorne",
        d:"Tropique du sagittaire",
        correct:"a",
    },
    {
        question:"Combien de secondes constituent une journée ?",

        a:"3600s",
        b:"86400s",
        c:"21600s",
        d:"604800s",
        correct:"b",
    },
    { 
        question:"Quel est le mot manquant pour compléter cette expression populaire :Bayer aux ...?",

        a:"Rossignols",
        b:"Corneilles ",
        c:"Colverts",
        d:"Cormorants",
        correct:"b",

    },
    { 
        question:"Dans quel pays roule-t-on à gauche en voiture ?",

        a:"Le Gabon",
        b:"L'indonesie ",
        c:"L'Ukraine",
        d:"Le brésil",
        correct:"b",

    },
    { 
        question:"Sous quel nom est aussi connue Marie Sklodowska ?",

        a:"Marie De Medicis",
        b:"Marie Laforet",
        c:"Marie Curie",
        d:"Marie Stuart ",
        correct:"c",

    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Tu as repondu ${score}/${quizData.length}  correctement </h2>
           <button onclick="location.reload()">Rejouer</button>
           `
       }
    }
})