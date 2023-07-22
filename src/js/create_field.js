export default function createField(size) {
  const container = document.querySelector(".container");
  for (let i = 0; i < size; i += 1) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", i);

    container.appendChild(cell);
  }
}
