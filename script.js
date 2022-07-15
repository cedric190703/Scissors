let games = document.getElementById("games");
let points = document.getElementById("points");
let robotGames = document.getElementById("robotGames");
let robotPoints = document.getElementById("robotPoints");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const result = document.getElementById("result");

let gameCpt = 0;
let pointCpt = 0;
let robotG = 0;
let robotP = 0;

let elements = ["Rock","Papper","Scissors"];

rock.addEventListener("click", Rock);
paper.addEventListener("click", Papper);
scissors.addEventListener("click", Scissors);

function getAiChoice () {
    
    return Math.round(Math.random()*2);
}

function Win () {
    result.style.color = "green";
    alert("You've won this game !!");
    result.innerHTML = `<h1>You've won this game !!</h1><div id="stats"><h1>Your stats : (One game = 3 points)</h1></div><div class="game"><h1 id="games">Games : ${gameCpt}</h1><h1 id="points">Points : ${pointCpt}</h1></div>`;
}

function Lose () {
    result.style.color = "red";
    alert("You've lost this game !!");
    result.innerHTML = `<h1>You've lost this game !!</h1><div id="stats"><h1>Your stats : (One game = 3 points)</h1></div><div class="game"><h1 id="games">Games : ${gameCpt}</h1><h1 id="points">Points : ${pointCpt}</h1></div>`;
}

function Rock () {
    if(gameCpt == 3) {
        Reset();
    }
    let AI = getAiChoice();
    switch(AI) {
        case(0):
            result.innerHTML = `<h1>You : ${elements[0]} / 🤖 : ${elements[0]}</h1><h1>It's a tie on this point</h1>`;
            break;
        case(1):
            robotP++;
            if(robotP > 3) {
                robotP = 0;
                robotG++;
                if(robotG == 3) {
                    Lose();
                }
            }
            else {
                result.innerHTML = `<h1>You : ${elements[0]} / 🤖 : ${elements[1]}</h1><h1>You've lost that Point</h1>`;
            }
            break;
        case(2):
            pointCpt++;
            if(pointCpt > 3) {
                pointCpt = 0;
                gameCpt++;
                if(gameCpt == 3) {
                    Win();
                }
            }
            else {
                result.innerHTML = `<h1>You : ${elements[0]} / 🤖 : ${elements[2]}</h1><h1>You've won that Point</h1>`;
            }
            break;
    }
    games.innerHTML = `Games : ${gameCpt}`;
    points.innerHTML = `Points : ${pointCpt}`;
    robotGames.innerHTML = `Games : ${robotG}`;
    robotPoints.innerHTML = `Points : ${robotP}`;
}

function Papper () {
    if(gameCpt == 3) {
        Reset();
    }
    let AI = getAiChoice();
    switch(AI) {
        case(0):
            pointCpt++;
            if(pointCpt > 3) {
                pointCpt = 0;
                gameCpt++;
                if(gameCpt == 3) {
                    Win();
                }
            }
            else {
                result.innerHTML = `<h1>You : ${elements[1]} / 🤖 : ${elements[0]}</h1><h1>You've won that Point</h1>`;
            }
            break;
        case(1):
            result.innerHTML = `<h1>You : ${elements[1]} / 🤖 : ${elements[1]}</h1><h1>It's a tie on this point</h1>`;
            break;
        case(2):
            robotP++;
            if(robotP > 3) {
                robotP = 0;
                robotG++;
                if(robotG == 3) {
                    Lose();
                }
            }
            else {
                result.innerHTML = `<h1>You : ${elements[1]} / 🤖 : ${elements[2]}</h1><h1>You've lost that Point</h1`;
            }
            break;
    }
    games.innerHTML = `Games : ${gameCpt}`;
    points.innerHTML = `Points : ${pointCpt}`;
    robotGames.innerHTML = `Games : ${robotG}`;
    robotPoints.innerHTML = `Points : ${robotP}`;
}

function Scissors () {
    if(gameCpt == 3) {
        Reset();
    }
    let AI = getAiChoice();
    switch(AI) {
        case(0):
            robotP++;
            if(robotP > 3) {
                robotP = 0;
                robotG++;
                if(robotG == 3) {
                    Lose();
                }
            }
            else{
                result.innerHTML = `<h1>You : ${elements[0]} / 🤖 : ${elements[0]}</h1><h1>You've lost that Point</h1`;
            } 
            break;
        case(1):
            pointCpt++;
            if(pointCpt > 3) {
                pointCpt = 0;
                gameCpt++;
                if(gameCpt == 3) {
                    Win();
                }
            }
            else {
                result.innerHTML = `<h1>You : ${elements[0]} / 🤖 : ${elements[1]}</h1><h1>You've won that Point</h1>`;
            }
            break;
        case(2):
            result.innerHTML = `<h1>You : ${elements[0]} / 🤖 : ${elements[2]}</h1><h1>It's a tie on this point</h1>`;
            break;
    }
    games.innerHTML = `Games : ${gameCpt}`;
    points.innerHTML = `Points : ${pointCpt}`;
    robotGames.innerHTML = `Games : ${robotG}`;
    robotPoints.innerHTML = `Points : ${robotP}`;
}

function Reset () {
    console.log("Hey")
    gameCpt = 0;
    pointCpt = 0;
    robotG = 0;
    robotP = 0;
    games.innerHTML = `Games : 0`;
    points.innerHTML = `Points : 0`;
    robotGames.innerHTML = "Games : 0";
    robotPoints.innerHTML = `Points : 0`;
    result.style.color = "white";
}

const reset = document.getElementById("reset");
reset.addEventListener("click",Reset);
