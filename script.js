'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!✌';
// document.querySelector('.number').textContent = 50;
// document.querySelector('.score').textContent = 15;
// document.querySelector('.highscore').textContent = 30;
// document.querySelector('.guess').value = 20;

// random the number
let Secret = Math.trunc(Math.random() * 20) + 1;

// change the score
let score = 20;
function check() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'enter the number';

    //when player wins
  } else if (guess === Secret) {
    document.querySelector('.message').textContent = 'Correct Number!✌';
    document.querySelector('.highscore').textContent = Secret;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = Secret;
  }
  //when player lost high guess
  else if (guess > Secret) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You are lost';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(247, 10, 10)';
    }
  }
  //when player lost low guess
  else if (guess < Secret) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You are lost';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(247, 10, 10)';
    }
  }
}
// function to try again
function again() {
  score = 20;
  Secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
}

document.querySelector('.check').addEventListener('click', check);

document.querySelector('.again').addEventListener('click', again);
