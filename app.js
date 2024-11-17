let gameSeq = [];
let userSeq = [];

//hello world

let btns = ["yellow" , "red" , "purple", "green"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    
    if(started == false)
    {
        console.log("game has started");
        started = true;

        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");

    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userflash(btn) {
    btn.classList.add("userflash");

    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameflash(randbtn);

}

function checkSeq(idx){
  //level

  if(userSeq[idx] === gameSeq[idx]){

    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
        
    }
    console.log("same value");
  }

  else{
  h2.innerHTML = `Game Over! your score was <b>${level} </b> <br> Press any key to start again `;
  document.querySelector("body").style.backgroundColor = "red";

  setTimeout(function() {
    document.querySelector("body").style.backgroundColor = "white";
  },175);
  
  reset();
  }
}

function btnPress(){
console.log("btn was pressed");
let btn = this;
userflash(btn);

userColor = btn.getAttribute("id");
console.log(userColor);
userSeq.push(userColor);

checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;


}

let url = "https://catfact.ninja/fact";
    