function player(name, marker) {
  return {
    name,
    marker,
    score: 0,
    scoreLevel: function () {
      this.score++;
    },
    resetScore: function () {
      this.score = 0;
    },
  };
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
      resetGameBnt.addEventListener("click", (event) => {
        board.innerHTML = " ";
        clickCount = 0;
      });
    });
  });

  return { board, clickCount };
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
  const boardGame = gameBoard.board;
  boardGame.forEach((item) => {
    item.addEventListener("click", (e) => {
      const h2 = document.querySelector(".message");
      const h3 = document.querySelector(".gameScoreTally");
      h2.innerHTML = "Lets Play";
      const winner = game.checkForWinner();

      if (winner === "tie") {
        // Handle tie
        h2.textContent = "It's a tie!";
        h3.textContent = `Player One: ${playerOne.score} | ${playerTwo.score}  :Player Two`;
        clearBoard();
      } else if (winner === playerOne.marker) {
        // Handle player one win
        h2.innerHTML = "Player One wins!";
        playerOne.scoreLevel();
        h3.textContent = `Player One: ${playerOne.score} | ${playerTwo.score}  :Player Two`;
        clearBoard();
      } else if (winner === playerTwo.marker) {
        // Handle player two win
        h2.innerHTML = "Player Two wins!";
        playerTwo.scoreLevel();
        h3.textContent = `Player One: ${playerOne.score} | ${playerTwo.score}  :Player Two`;
        clearBoard();
      }

      if (playerOne.score == 3 || playerTwo.score == 3) {
        alert(`${player.name} Won!!!`);

        h3.textContent = "";
        playerOne.resetScore();
        playerTwo.resetScore();
      }
    });
    function clearBoard() {
      boardGame.forEach((item) => {
        item.textContent = "";
      });
    }
  });
})();
const displayController = function () {
  // i dont knbow what to do here
};
