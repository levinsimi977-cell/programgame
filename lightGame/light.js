let interval=null;
let mark=0;
function getrandomInt(max){
    return Math.floor(Math.random()*max);
}
document.querySelector("#btnStart").onclick=MyGame;
document.querySelector("#btnStop").onclick=MyGame;
document.querySelector("#mymark").innerHTML=mark;
document.querySelectorAll(".game").forEach((game)=>{
    game.addEventListener("click",checkColor);
})
function checkColor(event){
    if(event.currentTarget.classList.contains("B")){
        mark-=5;
    }
    else{   
        mark+=5; 
        clearInterval(interval)  ;
        changeColor(event);
        startGame();
    }   
         document.querySelector("#mymark").innerHTML=mark;

}
function changeColor(event){
    if(event==undefined){
         mark-=5;
         document.querySelector("#mymark").innerHTML=mark;
    }
   let games=document.querySelectorAll('.game');
   let rand=getrandomInt(games.length);
   for (let i = 0; i < games.length; i++) {
        games[i].classList=null;
        if(i==rand){
           games[i].classList.add('game','G');
        }
    else{
        games[i].classList.add('game','B');
    }
}
}
function startGame(){
interval=setInterval(changeColor,1000);
}
function stopGame(){
    clearInterval(interval);
    mark=0;
    document.querySelector("#mymark").innerHTML=mark;
}
function MyGame(event){
if(event.currentTarget.id=="btnStart"){
    startGame();
}
else{
    stopGame();
}
}