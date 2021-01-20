let a = + prompt('введите значение a');
let b = + prompt('введите значение b');

alert('Результат сложения a и b равняется ' + add(a, b) +
'\nРезультат вычитания a и b равняется ' + sub(a, b)  +
'\nРезультат умножения a и b равняется ' + mult(a, b) +
'\nРезультат деления a и b равняется ' + des(a, b) );

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function des(a, b) {
    return a / b;
}