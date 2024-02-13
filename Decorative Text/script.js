/// RESULTS LIST (UL)
const resultsList = document.getElementById('results');
//// INPUT 
const inputContent = document.getElementById('input-content');
//// BUTTONS
var red = document.getElementById('btn-red');
var green = document.getElementById('btn-green');
var blue = document.getElementById('btn-blue');

red.addEventListener('click', () => {
    let li = document.createElement('li');
    li.classList.add('red');
    resultsList.append(li);
    li.innerHTML = inputContent.value;
    inputContent.value = "";
})
blue.addEventListener('click', () => {
    let li = document.createElement('li');
    li.classList.add('blue');
    resultsList.append(li);
    li.innerHTML = inputContent.value;
    inputContent.value = "";
})
green.addEventListener('click', () => {
    let li = document.createElement('li');
    li.classList.add('green');
    resultsList.append(li);
    li.innerHTML = inputContent.value;
    inputContent.value = "";
})