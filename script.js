const gameBoard = (function () {
  const bordBoxes = document.querySelectorAll("[data-index]");
  return { bordBoxes };
})();

function player(name, marker) {
  return { name, marker };
}
