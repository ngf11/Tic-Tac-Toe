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

const playerOne = player("Player One", "X");
const PlayerTwo = player("Player Two", "O");

const game = (function () {
  const boardBoxes = document.querySelectorAll("[data-index]");
  const boardArray = Array.from(boardBoxes).reduce((acc, box, index) => {
    const rowIndex = Math.floor(index / 3);
    const columnIndex = index % 3;

    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }

    acc[rowIndex][columnIndex] = box;

    return acc;
  }, []);
  console.table(boardArray);
  console.log(boardArray[0][0]);
})();

function winnerOfGame() {
  const { name, marker, score } = player(name, marker, score);
  if (player.score === 3) {
    return `${player.name} is the Winner`;
  }
}
