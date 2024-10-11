let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game is started");
    started=true;

    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;


    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
     console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(Idx){
    // let idx=level-1;

    if(userSeq[Idx]===gameSeq[Idx]){
        if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
        }
        console.log("same value");
    }else{
        h2.innerHTML=`Game Over!your score was<b>${level}</b> <br> press any key to start. `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
          document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}  
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}



































































// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");

// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=inp.value;
//     let delBtn=document.createElement("button");
//     delBtn.innerText="delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value="";
// });
// ul.addEventListener("click",function(event){
//      if (event.target.nodeName=="BUTTON"){
//      let listItem=event.target.parentElement;
//      listItem.remove();
//       console.log("delete");
//     }
// });












// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//          par.remove();
//     });

// }

















































//mini project part 1
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });
// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked"); 
//     });
// }
























































// let btn=document.querySelector("button");


// // btn.addEventListener("click",function(event){
// //     console.log(event);
// //     console.log("button clicked");
// // });
    
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });
    

























// let p=document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("parah was clicked");
// });
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box");
// })
// let btn=document.querySelector("button");


// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor()
//     h3.innerText=randomColor;

//     let div=document.querySelector("div");
//     div.style.background=randomColor;

//     console.log("color updated");
// });
// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }

     