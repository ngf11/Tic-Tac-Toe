const gameBoard = (function () {
  const gameBox = document.querySelectorAll(".game-box");
  const bordBoxes = document.querySelectorAll("[data-index]");
  const resetGame = document.querySelector(".rest-game");
  let clickCount = 0;
  gameBox.forEach((item) => {
    item.addEventListener("click", (event) => {
      clickCount++;

      if (clickCount % 2 !== 0) {
        item.innerHTML = "X";
      } else {
        item.innerHTML = "O";
      }
    });
    resetGame.addEventListener("click", (event) => {
      item.innerHTML = " ";
    });
  });

  return { bordBoxes, gameBox };
})();

function player(name, marker) {
  let score = 0;
  const scoreLevel = () => {
    score++;
    return score;
  };
  return { name, marker, scoreLevel, score };
}

function winnerOfGame() {
  const { name, marker, score } = player(name, marker, score);
  if (player.score === 3) {
    return `${player.name} is the Winner`;
  }
}
