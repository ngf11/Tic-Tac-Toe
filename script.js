const gameBoard = (function () {
  const gameBox = document.querySelectorAll(".game-box");
  const resetGame = document.querySelector(".rest-game");
  let clickCount = 0;
  gameBox.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (item.textContent !== "") {
        return;
      }
      clickCount++;
      if (clickCount % 2 !== 0) {
        item.textContent = "X";
      } else {
        item.textContent = "O";
      }
    });
    resetGame.addEventListener("click", (event) => {
      item.innerHTML = "";
      clickCount = 0;
    });
  });

  return { gameBox };
})();

function player(name, marker) {
  let score = 0;
  const scoreLevel = () => {
    score++;
    return score;
  };
  return { name, marker, scoreLevel, score };
}

const game = (function () {
  const bordBoxes = document.querySelectorAll("[data-index]");
})();

function winnerOfGame() {
  const { name, marker, score } = player(name, marker, score);
  if (player.score === 3) {
    return `${player.name} is the Winner`;
  }
}
