let easy=["1","1","2","2","3","3","4","4"];
let regular=["1","1","2","2","3","3","4","4","5","5","6","6","7","7"]
let hard=["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10","11","11","12","12","13","13","14","14"];
let game=[];
let first=null;
let second=null;
let mark=0;
function startGame(event){
    game=[]
    let left=[]
     if(event.currentTarget.value=="קל"){
        mark=0;
        left=[...easy];
     }
   if(event.currentTarget.value=="בינוני"){
    mark=0;
     left=[...regular];
   }
if(event.currentTarget.value=="קשה"){
    mark=0; 
    left=[...hard];
}
  while(left.length!=0){
        let index=getRandomInt(left.length);
        game.push(left[index]);
        left.splice(index,1);
    }
    let board=document.querySelector('.board')
    board.innerHTML="";
    mark=0;
    for(let i=0;i<game.length;i++){
          let divNew=document.createElement('div');
          divNew.classList.add('card');
          divNew.id=game[i];
          divNew.onclick=selectCard    
          board.append(divNew);
      }
}
function selectCard(event){
    if(first == null){
        first = event.currentTarget
    }
    else if(second ==null){
        second = event.currentTarget
        setTimeout(() => {
            checkIsPair()
        }, 1500);
    }
    else{
        return
    }
    event.currentTarget.style.backgroundImage = `url("./images/`+event.currentTarget.id+`.png")`
}function checkIsPair(){
if(first.id==second.id)
    {
        first.onclick=null;
        second.onclick=null;
        mark++;
    }
    else{
        first.style.backgroundImage=` url('./images/card.png')`
        second.style.backgroundImage=` url('./images/card.png')`
    }
    first=null;
    second=null;
    document.querySelector('h1').innerHTML=" :מספר הנקודות שלך"+mark
}
function getRandomInt(max){
return Math.floor(Math.random()*max);
}