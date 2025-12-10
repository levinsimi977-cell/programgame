const colors=["red","yellow","green","blue","orange","brown","pink","purple"];
let arrChosen=[];
let arrButton=document.querySelectorAll('.guess-color');
let arrRes=document.querySelectorAll('.result-color');
let arrColors = document.querySelectorAll(".color")
let color
let current=0;
function startGame(){
     arrChosen=randomcomputer();
     let randomColor=document.querySelectorAll('.select-guess .guess-color');
     for(let i=0;i<randomColor.length;i++){
        randomColor[i].style.backgroundColor=arrChosen[i];
     }
}

function randomcomputer(){
    color=[];
    let notSelect=["red","yellow","green","blue","orange","brown","pink","purple"];
    let index;
    for(let i=0;i<4;i++){
        index=getRandomInt(notSelect.length);
        color.push(notSelect[index]);
        notSelect.splice(index,1);
    }
    console.log(color);
    return color;
}
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
function select(event){
    console.log(event.currentTarget.style.backgroundColor)
    arrButton[current].style.backgroundColor = event.currentTarget.style.backgroundColor;
    current++; 
    event.currentTarget.onclick = null
    if(current%4 ==0)   
        check();
}
function check(){
    let bools = 0, pgiot = 0
    let selection = [arrButton[current-4].style.backgroundColor, arrButton[current-3].style.backgroundColor, arrButton[current-2].style.backgroundColor, arrButton[current-1].style.backgroundColor]
    console.log(selection)
    for(let i = 0; i < 4; i++){
        if(color[i] == selection[i]){
            bools++
        }
        else{
            for(let j = 0; j < 4; j++){
                if(color[j] == selection[i])
                    pgiot++
            }
        }
    }
    console.log(bools)
    console.log(pgiot)
    arrColors.forEach(c =>
        c.onclick = select
    )
    let resultion = [arrRes[current-4], arrRes[current-3], arrRes[current-2], arrRes[current-1]]
    let i = 0
    for(; i<bools; i++){
        resultion[i].style.backgroundColor='black';
    }
    for(; i<bools + pgiot; i++){
        resultion[i].style.backgroundColor='white';
    }
    if(bools == 4)
        alert("ניצחת")
    if(current == 40)
        alert("game over")
}
