let a;
a = + prompt('введите значение от 0 до 15');

function sw(numb) {
    switch (numb) {
        case 15:
            console.log(15);
            break;
        default:
            console.log(numb);
            numb++;
            sw(numb);
            break;
    }
}

sw(a)