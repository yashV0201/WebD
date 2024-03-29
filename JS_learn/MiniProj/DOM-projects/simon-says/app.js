let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["red","yellow","green","purple"];

document.addEventListener("keypress",function(){
    if(!started){
        console.log("game started");
        started = true;

        levelUp();
    }
    
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random()*4);
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level: ",level);
    // let idx = level-1;
    if(userSeq[idx]===gameSeq[idx]){
        console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
            userSeq=[];
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },100);
        started = false;
        level=0;
        gameSeq=[];
        userSeq=[];
    }
}

function btnPressed(){
    if(started){
        console.log(this);
        let btn = this;
        userFlash(btn);
        
        userColor = btn.getAttribute("id");
        userSeq.push(userColor);

        checkAns(userSeq.length-1);
    }
    
}    

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPressed);
}
