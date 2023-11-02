function player(name, marker) {
  let score = 0;
  const scoreLevel = () => {
    score++;
    return score;
  };
  return { name, marker, scoreLevel, score };
}

const playerOne = player("Player One", "X");

const playerTwo = player("Player Two", "O");

const gameBoard = (function () {
  const board = document.querySelectorAll(".game-box");
  const resetGameBnt = document.querySelector(".rest-game");
  let clickCount = 0;
  board.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (item.textContent !== "") {
        return;
      }
      clickCount++;
      if (clickCount % 2 !== 0) {
        item.textContent = playerOne.marker;
      } else {
        item.textContent = playerTwo.marker;
      }
    });
    resetGameBnt.addEventListener("click", (event) => {
      item.textContent = "";
      clickCount = 0;
    });
  });
  return { board };
})();

const game = {
  checkForWinner: function () {
    const dataBoard = document.querySelectorAll("[data-index]");
    const winsArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const winCombination of winsArr) {
      const [a, b, c] = winCombination;
      const elements = [dataBoard[a], dataBoard[b], dataBoard[c]];

      if (
        elements[0].textContent === elements[1].textContent &&
        elements[1].textContent === elements[2].textContent
      ) {
        return elements[0].textContent;
      }
    }

    return "tie";
  },
};

const winner = (function () {
  const { board } = gameBoard;
  board.forEach((item) => {
    item.addEventListener("click", (e) => {
      const h2 = document.querySelector(".message");
      h2.innerHTML = "Lets Play";
      const winner = game.checkForWinner();

      if (winner === "tie") {
        // Handle tie
        h2.textContent = "It's a tie!";
      } else if (winner === playerOne.marker) {
        // Handle player one win
        playerOne.scoreLevel();
        h2.innerHTML = "Player One wins!";
      } else if (winner === playerTwo.marker) {
        // Handle player two win
        playerTwo.scoreLevel();
        h2.innerHTML = "Player Two wins!";
        console.log("Player Two wins!");
      }
    });
  });
})();
const displayController = function () {
  // i dont knbow what to do here
};
