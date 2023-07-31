const colorDisplay = document.getElementById('color-display');
const aquaBtn = document.getElementById('aqua');
const tealBtn = document.getElementById('teal');
const pinkBtn = document.getElementById('pink');
const purpleBtn = document.getElementById('purple');
const colorlessBtn = document.getElementById('colorless');

aquaBtn.addEventListener('click', () => {
colorDisplay.style.backgroundColor = 'aqua';
});

tealBtn.addEventListener('click', () => {
colorDisplay.style.backgroundColor = 'teal';
});

pinkBtn.addEventListener('click', () => {
colorDisplay.style.backgroundColor = 'pink';
});

purpleBtn.addEventListener('click', () => {
colorDisplay.style.backgroundColor = 'purple';
});

colorlessBtn.addEventListener('click', () => {
colorDisplay.style.backgroundColor = 'white';
});