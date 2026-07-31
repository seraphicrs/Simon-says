// start the game 
let gameSeq = [];
let userSeq = [];
let h = document.querySelector("h3");
let level = 0;
let button = document.querySelectorAll(".box");

let btn = ["brown", "plum","bisque","darkolivegreen"];

let start = false;


// to keep increasing the levels 
function levelUp()
{   level ++;
     h.innerText = `Level ${level}`;
    flash();
};

document.addEventListener("keypress", function()
{
   
   
    if(!start)
    {
   start = true;
    levelUp();
    }
});
function btnFlash(btn)
{
btn.classList.add("flash");

setTimeout(function()
{
    btn.classList.remove("flash")
},1000);

};

function flash()
{
let randIdx = Math.floor(Math.random()*4);
console.log(randIdx);
let randClr = btn[randIdx];
let randBtn = document.querySelector(`.${randClr}`);
// randBtn.classList.add("flash");

// setTimeout(function()
// {
//     randBtn.classList.remove("flash")
// },1000);
btnFlash(randBtn);

gameSeq.push(randBtn);


};

// add flash to all buttons but make it work only when user clicks it


function Press(btn)
{


 btnFlash(btn);

};

function checkAns()
{
    let id = userSeq.length-1;
    if(gameSeq[id] === userSeq[id])
    {
        // now will put if correct , move to next level
        if(gameSeq.length === userSeq.length)
        {
                        userSeq = [];   
        levelUp();

    }
    }
    else 
          h.innerText = `Game Over`;
        
}


function allBtn()
{ 
    
    for( let btn of button)
    {
   btn.addEventListener("click",function(event)
{
    console.log(event.target);
     Press(event.target);
   userSeq.push(event.target);
   checkAns()
})

    }
    
};
allBtn();




// console.log("game start");