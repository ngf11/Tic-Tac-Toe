const gameBoard = (function () {
  const gameBox = document.querySelectorAll(".game-box");
  const bordBoxes = document.querySelectorAll("[data-index]");

  gameBox.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(event);

      item.innerHTML = "X";
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

function winner() {
  const { name, marker, score } = player(name, marker, score);
  if (player.score === 3) {
    return `${player.name} is the Winner`;
  }
}
