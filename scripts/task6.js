let arg1 = + prompt('Введите значение a');
let arg2 = + prompt('Введите значение b');
let operation = + prompt('Введите одну, из 4х доступных операций: \n +, -, * или /');

alert('a ' + operation + ' b = ' + mathOperation(arg1, arg2, operation));

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '*':
            return arg1 * arg2;
        case '/':
            return arg1 / arg2;
    }
}