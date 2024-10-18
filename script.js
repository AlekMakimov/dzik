const timeouts = {
    easy: 1000,
    medium: 500,
    hard: 250,
    goat: 100,
}
let scoreboard = []
const scoreboardList = document.querySelector('#scoreb')

document.querySelectorAll(".mode").forEach((e) => 
    e.addEventListener('click', startGame)
);

function startGame(e) {
    hideMenu();
    
    const timeout = timeouts[e.target.id];   
    
    game(timeout);
}
function game(timeout){
    
    
    const countup = document.querySelector("#countup");
    let number = 0;
    let click = false;
    let score = 0;
    document.getElementById('dzik').addEventListener('click', function() {
        click = true;
    });
    interval = setInterval(() => {
        
        
        number++;
        countup.innerText = number + 1;
        
        
            if((number % 7 == 0 || number.toString().includes('7'))){
                if(click == true){
                 score++
                 
                }
                else{
                    clearInterval(interval)
                     lose(score,interval)
                    addToScoreBoard(score)
                }
                
            }
            else{
                if(click == true){
                    clearInterval(interval)
                     lose(score,interval)
                     addToScoreBoard(score)
                 }
                }
                
                
                

        click = false;
    },timeout)
    
}
function addToScoreBoard(score){
    if(scoreboard.length === 0 || score>scoreboard[0])
    {
        scoreboard.unshift(score);
    }
    updateScoreBoardList()
    
}
function updateScoreBoardList(){
    scoreboardList.innerHTML =`Najwyższy wynik: ${scoreboard[0]}`
   
}

function lose(score,interval){
alert("Przegrałeś! twój wynik to " +score)
clearInterval(interval)
number=1;
ShowMenu()
}

    




    function hideMenu(){
        const menu = document.querySelector("#mainMenu");
        const gameContainer = document.querySelector("#game");
        gameContainer.style.display = "flex";
        menu.style.display = "none";

    
}
function ShowMenu(){
    const menu = document.querySelector("#mainMenu");
    const gameContainer = document.querySelector("#game");
    gameContainer.style.display = "none";
    menu.style.display = "flex";
}

const background = document.querySelector('#background');

document.addEventListener('mousemove', (e) => {
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;

   
    const bgX = (mouseX / window.innerWidth * 5);
    const bgY = (mouseY / window.innerHeight * 10); 
   
    background.style.backgroundPosition = `${100 - bgX}% ${100 - bgY}%`;
});
