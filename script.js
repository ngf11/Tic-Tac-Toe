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
        game();
      } else {
        item.textContent = PlayerTwo.marker;
        game();
      }
    });
    resetGameBnt.addEventListener("click", (event) => {
      item.textContent = "";
      clickCount = 0;
    });
  });
  return board;
})();

const game = (function () {
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

  const checkForWinner = () => {
    for (const winCombination of winsArr) {
      const [a, b, c] = winCombination;
      const elements = [dataBoard[a], dataBoard[b], dataBoard[c]];

      if (
        elements[0].textContent === elements[1].textContent &&
        elements[1].textContent === elements[2].textContent
      ) {
        // We have a winner

        return elements[0].textContent;
      }
    }

    // No winner found
    return "tie";
  };
  return checkForWinner();
})();

const displayController = function () {
  // i dont knbow what to do here
};
