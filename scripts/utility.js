function changeInterface(hideElementId, hideElementId2, showElementId){
    const hideElement = document.getElementById(hideElementId);
    hideElement.classList.add('hidden');

    const hideElement2 = document.getElementById(hideElementId2);
    hideElement2.classList.add('hidden');

    const showElement = document.getElementById(showElementId);
    showElement.classList.remove('hidden');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const index = Math.round(Math.random()*25);
    return alphabets[index];
}

function getElementText(elementId){
    const currentElement = document.getElementById(elementId);
    return currentElement.innerText;
}

function getElementValue(elementId){
    const currentElement = document.getElementById(elementId);
    return parseInt(currentElement.innerText);
}

function setElementValue(elementId, elementValue){
    const currentElement = document.getElementById(elementId);
    currentElement.innerText = elementValue;
}

function setBanckgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBanckgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}