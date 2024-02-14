console.log(`Alpha Clash Running`);

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet;
    setBanckgroundColorById(alphabet);
}

function play(){
    changeInterface('home','play');
    continueGame();
}

