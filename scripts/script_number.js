let rand, you;
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
        alert ('молодец, угадал');
        game();
    } else if (you > rand){
        you = + prompt('ваше число больше загаданного, попробуйте еще раз');
        numb_check();
    } else {
        you = + prompt('ваше число меньше загаданного, попробуйте еще раз');
        numb_check();
    }
}