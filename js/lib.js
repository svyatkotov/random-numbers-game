(function() {
  function getRandomNum() {
    return Math.floor(Math.random() * 100);
  }

  function ask(number, attempts) {
    if (attempts === 0) {
      return alert('Попытки закончились :(');
    }

    let answer = prompt('Я загадал число от 0 до 100. Попробуй угадать! Попыток: ' + attempts);

    if (answer === null) {
      return;
    } else if (answer === '' || isNaN(answer)) {
      alert('Введи число!');
      ask(number, attempts);
    } else if (answer > number) {
      alert('Меньше!');
      ask(number, attempts - 1);
    } else if (answer < number) {
      alert('Больше!');
      ask(number, attempts - 1);
    } else {
      alert('Правильно!');
    }
  }

  function makeGame() {
    let randomNum = getRandomNum();
    let attempts = 10;

    return function() {
      ask(randomNum, attempts);
      let again = confirm('Отгадаешь другое число?');

      if (again) {
        window.game = makeGame();
        window.game();
      }
    }
  }

  window.game = makeGame();
})();
