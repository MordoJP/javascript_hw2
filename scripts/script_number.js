let rand, you, c;
c = 0;
game()

function game() {
    rand = randomInteger(1, 9999);
    you = + prompt ('Угадайте число, загаданное компьютером!');
    numb_check();
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function numb_check() {
    if (rand === you){
        alert ('молодец, угадал. Число попыток ' + c);
        game();
    } else if (you > rand){
        you = + prompt('ваше число больше загаданного, попробуйте еще раз');
        c++;
        numb_check();
    } else {
        you = + prompt('ваше число меньше загаданного, попробуйте еще раз');
        c++;
        numb_check();
    }
}