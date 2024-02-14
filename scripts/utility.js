function changeInterface(hideElementId, showElementId){
    const hideElement = document.getElementById(hideElementId);
    hideElement.classList.add('hidden');

    const showElement = document.getElementById(showElementId);
    showElement.classList.remove('hidden');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const index = Math.round(Math.random()*25);
    return alphabets[index];
}

function setBanckgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}