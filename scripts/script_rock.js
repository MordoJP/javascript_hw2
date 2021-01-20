// 1 - Камень,
// 2 - Ножницы,
// 3 - Бумага,
// 4 - Ящерица,
// 5 - Спок.

let you, randPC;
randPC = randomInteger(1, 5);
you = + prompt ('Выберите значение один из вариантов. \nВарианты соответствуют следующим числовым значениям: \n 1 - Камень \n 2 - Ножницы \n 3 - Бумага \n 4 - Ящерица \n 5 - Спок \nВведите от 1 до 5');
texting()
if (((you === 1) && ((randPC === 2) || (randPC === 4)))
    || ((you === 2) && ((randPC === 3) || (randPC === 4)))
    || ((you === 3) && ((randPC === 1) || (randPC === 5)))
    || ((you === 4) && ((randPC === 5) || (randPC === 3)))
    || ((you === 5) && ((randPC === 2) || (randPC === 1)))
) {
    alert('Вы победили! Компьютер загадал: ' + texting(randPC) + ', а вы загадали: ' + texting(you) + '.');
    window.location.reload();
} else if (you === randPC) {
    alert('НИЧЬЯШЕЧКА!!!');
    window.location.reload();
} else {
    alert('Вы проиграли! Компьютер загадал: ' + texting(randPC) + ', а вы загадали: ' + texting(you) + '.');
    window.location.reload();
}

function texting(number) {
    switch (number) {
        case 1:
            return 'Камень';
            break;
        case 2:
            return 'Ножницы';
            break;
        case 3:
            return 'Бумага';
            break;
        case 4:
            return 'Ящерица';
            break;
        case 5:
            return 'Спок';
            break;
    }
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
