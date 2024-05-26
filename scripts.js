
const quizdata=[
    {
        qustion:"3*9=...",
        a:"27",
        b:"24",
        c:"29",
        d:"37",
        correct:"a",
    },
    {
        qustion:"Who's the founder of SpaceX",
        a:"Elon Mask",
        b:"ME",
        c:"Bale Gates",
        d:"Hosny Mohammed",
        correct:"a",
    },
    {
        qustion:"20*5=...",
        a:"100",
        b:"10",
        c:"200",
        d:"1000",
        correct:"a",
    }
]
// DOM
const quiz=document.getElementById('quiz');
const answerEls =document.querySelectorAll('.answer');
const questionEl=document.getElementById('qustion');
const Username = document.getElementById('username_text');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitbtn =document.getElementById('submit');


let score=0;
let currentQuestion=0;

onloadquiz();

//tO INTIALIZE THE ELEMNT
function onloadquiz(){

    reset(); 

    let currentQuestion_data=quizdata[currentQuestion];
    questionEl.innerHTML=currentQuestion_data.qustion;
    a_text.innerHTML=currentQuestion_data.a;
    b_text.innerHTML=currentQuestion_data.b;
    c_text.innerHTML=currentQuestion_data.c;
    d_text.innerHTML=currentQuestion_data.d;

 
}
// to reset check
function reset(){
    answerEls.forEach(x =>x.checked=false)
}

// to get the user wich answer he selected
function getselect(){
    let answer ;
    answerEls.forEach(x=>{
        if(x.checked){
            answer=x.id;
        }
    })
    return answer
}
// to display and calculate the score
submitbtn.addEventListener('click',function(){
    const answer =getselect();
    if(answer){
        if(answer ===quizdata[currentQuestion].correct){
            score++
        }
        currentQuestion++
        if(currentQuestion<quizdata.length){
            onloadquiz();
        }
        else{
                quiz.innerHTML=`
                <h2>your score ${score}/${quizdata.length} ya ${Username.value}</h2>
                <button onclick="location.reload()">reload</button>
            `
        }
    }
})


