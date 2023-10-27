function gameBoard() {
  const board = [];
  return { board };
}

function player(name, marker) {
  return { name, marker };
}

const bordBoxes = document.querySelectorAll("[data-index]");
console.log(bordBoxes);
