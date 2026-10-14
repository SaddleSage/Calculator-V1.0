// Theme Toggle Handler
const themeToggle = document.getElementById('theme-toggle');
const themeName = document.getElementById('theme-name');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        themeName.textContent = 'LIGHT';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeName.textContent = 'DARK';
    }
});

// Tab Switching Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const targetTab = document.getElementById(`${btn.dataset.tab}-tab`);
        targetTab.classList.add('active');
    });
});

// Calculator Logic
const display = document.getElementById('calc-display');
let currentInput = '0';

function appendValue(val) {
    if (currentInput === '0' && val !== '.') {
        currentInput = val;
    } else {
        currentInput += val;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'ERR';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}

// Unit Converter Logic
function convertUnits() {
    const type = document.getElementById('conv-type').value;
    const val = parseFloat(document.getElementById('conv-input').value);
    const output = document.getElementById('conv-output');

    if (isNaN(val)) {
        output.textContent = 'ERR';
    } else {
        let result = 0;
        if (type === 'length') {
            result = val * 3.28084;
        } else if (type === 'weight') {
            result = val * 2.20462;
        } else if (type === 'temp') {
            result = (val * 9/5) + 32;
        }
        output.textContent = result.toFixed(2);
    }
}

// D&D Dice Roller Logic
function rollDice(sides) {
    const roll = Math.floor(Math.random() * sides) + 1;
    document.getElementById('dice-output').textContent = `d${sides}: [${roll}]`;
}
