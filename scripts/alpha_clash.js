console.log(`Alpha Clash Running`);

document.addEventListener('keyup',function handleKeyPress(event){
    const pressed = event.key;

    if(pressed === 'Escaped'){
        gameOver();
    }

    const currentAlphabet = document.getElementById('current-alphabet').innerText;
    if(pressed === currentAlphabet){
        console.log(`You get a point :)`);
        let currentScore = getElementValue('current-score');
        currentScore++;
        setElementValue('current-score',currentScore);

        removeBanckgroundColorById(currentAlphabet);
        continueGame();
    }
    else{
        console.log(`You lost a life :(`);
        let currentLife = getElementValue('current-life');
        currentLife--;
        setElementValue('current-life',currentLife);

        if(currentLife === 0){
            console.log(`Game Over -_- `);
            gameOver();
        }

        removeBanckgroundColorById(currentAlphabet);
        continueGame();
    }
})

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBanckgroundColorById(alphabet);
}

function play(){
    changeInterface('home','score','play');
    setElementValue('current-life',5);
    setElementValue('current-score',0);
    continueGame();
}

function gameOver(){
    changeInterface('play','home','score');
    const lastScore = getElementValue('current-score');
    setElementValue('last-score',lastScore);

    const currentAlphabet = getElementText('current-alphabet');
    removeBanckgroundColorById(currentAlphabet);
}
