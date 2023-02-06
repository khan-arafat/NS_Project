const Question= [
    "3+9*9/3+6",
    "5/5+5+5*5",
    "9+2*2/2+1",
    "13+4/2+5-3",
    "9+9*12/2-1",
    "87-1+45/5+1",
    "2*2*2/2+2*2",
    "56-28/7*3+30",
    "7-7+7/7+77-7",
    "1+10-1*1+10-1"
]
let score = 0;
let idx = -1;
function solve(){
    const timePresent= document.getElementById('time-left').innerText;
    if(idx>=9 || timePresent==0){
        const totalScore= document.getElementById('score').innerText;
        if(totalScore == 10){
            alert('Huuray!\nYou scored '+totalScore+' out of 10');
            return;
        }
        else if(totalScore>=7 && totalScore<10){
            alert('Congratulations Good work!\nYou scored '+totalScore+' out of 10');
            return;
        }
        else {
            alert('Good Attempt! Give it one more try\nYou scored '+totalScore+' out of 10');
            return;
        }
    }
    idx++;
    const board = document.getElementById('board');
    board.innerText = Question[idx];
    const options= document.querySelectorAll('.allOptions>*');
    options.forEach((opt)=>{
        opt.setAttribute('class', 'options');
    })
    let solution = eval(Question[idx]);
    let position= Math.floor(Math.random()*4);
    for(let i=0;i<4;i++){
        if(i==position){
            options[i].innerText = solution;
        }
        else{
            options[i].innerText = Math.floor(Math.random()*275);
        }
    }
    options.forEach((opt)=>{
        opt.addEventListener('click', function (){
            answer(solution);
        })
    })
}

function answer(args){
    const choices= document.querySelectorAll('.allOptions>*');
    choices.forEach((el)=>{
        if(el.textContent==args){
            el.setAttribute('class','correct');
            score++;
            document.getElementById('score').innerText = score;
        }
        else {
            el.setAttribute('class', 'incorrect');
        }
    })
}
const nextQuiz = document.getElementById('nextQ');
nextQuiz.addEventListener('click', function (){
    solve();
})
function playQuiz(){
    solve();
    timer();
    setTimeout(solve, 120*1000);
}
function timer(){
    const timer_id=setInterval(()=>{
        const timeLeft= document.getElementById('time-left')
        timeLeft.innerText = timeLeft.textContent-1;
    }, 1000);
    setTimeout(function (){
        clearInterval(timer_id);
    }, 120*1000);
}

