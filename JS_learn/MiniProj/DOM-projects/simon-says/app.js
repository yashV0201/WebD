let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["red","yellow","green","purple"];

//press any key to start wala part
document.addEventListener("keypress",function(){ //added event listner to whole document..and on keyPress..the started function gets executed which starts the game.
    if(!started){
        console.log("game started");
        started = true;

        levelUp();                           // on starting the game each time we call this level up function which generates a random color to flash it.
    }
    
})

function btnFlash(btn){                   // this function is used to flash the buttons we provide to it.
    btn.classList.add("flash");           // it does this by changing the background color of the button to white for a very short period of time
    setTimeout(function(){ 
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){                   // this function flashes the button pressed by the user to green
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){                         // level up funtion increases the level, generates a random color, flashes it, add the color to gameSeq
    level++;
    h2.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random()*4);
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

function checkAns(idx){                //most important function of this project
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

function btnPressed(){                        // this function records the colorof button pressed by the user and adds it to the userSeq list
    if(started){
        console.log(this);
        let btn = this;
        userFlash(btn);
        
        userColor = btn.getAttribute("id");
        userSeq.push(userColor);

        checkAns(userSeq.length-1);            // then checks of we pressed the button in right sequence
    }
    
}    

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPressed);
}
