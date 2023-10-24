export default class Loading_page {
  constructor() {
    var body = document.body;
    let newDiv = document.createElement("div");
    let htmlContent =
      '<div class="banter-loader"><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div></div>';
    newDiv.innerHTML = htmlContent;

    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    body.appendChild(newDiv);
    const gameBoard = document.getElementById("game-board");

    setTimeout(function () {
      console.log("h");
      const grid = new Grid(gameBoard);
      grid.randomEmptyCell().tile = new Tile(gameBoard);
      grid.randomEmptyCell().tile = new Tile(gameBoard);
      setupInput();
    }, 5000);
  }
}
