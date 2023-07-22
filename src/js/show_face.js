export default function showFace(interval) {
  const persImage = document.querySelector(".face-image");
  const container = document.querySelector(".container");
  const cellList = container.querySelectorAll(".cell");

  setInterval(() => {
    let index = Math.floor(Math.random() * (cellList.length - 1));
    let currentPositionImage = container.querySelector("img");
    if (currentPositionImage) {
      let activeCell = currentPositionImage.closest(".cell");
      if (activeCell === cellList[index]) {
        index += 1;
        if (index >= cellList.length) {
          index = 0;
        }
      }
      cellList[index].appendChild(currentPositionImage);
    } else {
      cellList[index].appendChild(persImage);
      persImage.classList.remove("hidden");
    }
  }, interval);
}
