let timer;
let reaction,answer=1;
let length,length2;
let timerInterval;//שומר את הפונקציהשל הטיימר כדי לעצור
let point=0;
let correct;
let easy = ["1", "2", "3", "4", "5", "6", "7", "8","9","10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21","22", "23", "24", "25"]
let medium = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21","22", "23", "24", "25", "26", "27", "28",  "29", "30", "31"]
let hard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28",  "29", "30", "31", "32", "33", "34","35", "36", "37", "38", "39", "40", "41"]
let circle1 ;
let circle2;
function StartGame(event){
    let left = []
    if(event.currentTarget.innerText== "Easy")
        {
            timer=15;
            length=easy.length;

        }
    if(event.currentTarget.innerText== "Medium")
        {
        timer=10;
        length=medium.length;

        }
    if(event.currentTarget.innerText== "Hard")
        {
        timer=5;
        length=hard.length;

        }
    StartPush(length)//מכניסה את האיברים למערך
    StartTimer(timer)
}
function StartPush(length)
{
    length2=length/2;
    StartTimer(timer)
    let left = []

    if(length==easy.length)
    {
        left=[...easy]  
        timer=15;
    }
    if(length==medium.length)
        {
            left=[...medium]  
            timer=10;
        }
    if(length==hard.length)
   {
        left=[...hard]  
        timer=5;
    }
    circle1=[];
    circle2=[];
    index = getRandomInt(left.length);
    circle1.push(left[index]);
    circle2.push(left[index]);
    correct=left[index];
    left.splice(index, 1);
    while ( (length2-1)>0) {
        index = getRandomInt(left.length);
        circle1.push(left[index]);
        left.splice(index, 1);
        length2--;
    }
    while (left.length>0) {
         index = getRandomInt(left.length);
        circle2.push(left[index]);
        left.splice(index, 1);
    }

    createCircles(circle1,circle2);
}
function createCircles(c1, c2) {
    let board1 = document.querySelector("#circle1");
    let board2 = document.querySelector("#circle2");
    board1.innerHTML='';
    board2.innerHTML='';
    const circleRadius = 190; // רדיוס המעגל
    const numberOfButtons = c1.length; // מספר הכפתורים
    for (let i = 0; i < numberOfButtons; i++) {
        // חישוב הזווית עבור הכפתור הנוכחי
        const angle = (i / numberOfButtons) * 2 * Math.PI; // מחלק את העיגול במספר הכפתורים
        // חישוב המיקום
        const x = circleRadius * Math.cos(angle) + circleRadius; // מיקום אופקי
        const y = circleRadius * Math.sin(angle) + circleRadius; // מיקום אנכי
        let bn = document.createElement('button'); 
        bn.classList.add('button'); 
        bn.id = c1[i]; 
        bn.onclick = chekIsCorrect; 
        bn.style.backgroundImage = `url("../image/${bn.id}.png")`;
        bn.style.left = `${x}px`; 
        bn.style.top = `${y}px`; 
        board1.append(bn); 
        let bn2 = document.createElement('button'); 
        bn2.classList.add('button'); 
        bn2.id = c2[i]; 
        bn2.onclick = chekIsCorrect; 
        bn2.style.backgroundImage = `url("../image/${bn2.id}.png")`; 
        bn2.style.left = `${x}px`; 
        bn2.style.top = `${y}px`; 
        board2.append(bn2); 
    }
}
function chekIsCorrect(event){
if(event.currentTarget.id===correct)
{       
    answer=0;
    Answer(answer)
    point+=1;
    document.querySelector('p').innerHTML="מספר הנקודות שלך"+point;
}
else{
    Answer(answer)
}
StartPush(length);
answer=1
}
function Answer(answer){
 reaction=document.createElement('div')
    reaction.classList.add('answer')
    if(answer==0)
      reaction.innerHTML = "GOOD!!😊"
    else
    reaction.innerHTML = "WRONG!!😑"
   document.body.appendChild(reaction)
   setTimeout(() => {
    if (reaction) { // אם האלמנט קיים
        reaction.remove(); //ממסיר את האלמנט ה-
    }
}, 3000); // 3 שניות, תואם את משך האנימציה
}
setTimeout(finish,500000);// אחרי 5 דקות נגמר המשחק
function StartTimer(temp_timer)
{
    clearInterval(timerInterval)
    timerInterval=setInterval(() => {
        let time = document.querySelector("#timer");
        time.innerHTML =temp_timer;
        if (temp_timer <= 0) {
            clearInterval(timerInterval);
            StartPush(length);
        }
        temp_timer--;
    }, 1000);
}   
function finish()
{
    alert("your points is"+point);
   alert("--GAME OVER---");                   
    window.location.href="../index/index.html";
    window.location.href="../DoubleGame/doubleGame.html";

}
function getRandomInt(max){
    return Math.floor(Math.random()*max);
    }