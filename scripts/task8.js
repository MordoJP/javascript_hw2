let val = + prompt('Задайте число');
let pow = + prompt('Задайте степень числа');
let rez = val;

alert ('Результат равен' + power(val, pow));

function power(val, pow) {
    if (pow > 1) {
        pow = pow - 1;
        rez = rez * val;
        power(val, pow);
    }
        return rez;
}