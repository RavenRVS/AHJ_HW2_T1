import showFace from "../show_face";

describe("showFace start", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="container">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <img class="face-image hidden">
    `;
  });

  test("should move the face image a random cell", () => {
    jest.useFakeTimers();

    showFace(1000);

    jest.advanceTimersByTime(1000);

    const container = document.querySelector(".container");
    const cells = container.querySelectorAll(".cell");
    const persImage = document.querySelector(".face-image");

    let hasImageMoved = false;

    cells.forEach((cell) => {
      if (cell.contains(persImage)) {
        hasImageMoved = true;
      }
    });

    expect(hasImageMoved).toBe(true);
  });

  test("should show the face image when it is not present in any cell", () => {
    jest.useFakeTimers();

    showFace(1000);

    jest.advanceTimersByTime(1000);

    const persImage = document.querySelector(".face-image");

    expect(persImage.classList.contains("hidden")).toBe(false);
  });
});

describe("showFace", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div class="container">
          <div class="cell" id="0"></div>
          <div class="cell" id="1">
            <img class="face-image">
          </div>
        </div>
      `;
  });

  test("should move the face image from last cell", () => {
    jest.useFakeTimers();

    showFace(1000);

    jest.advanceTimersByTime(1000);

    const container = document.querySelector(".container");
    const cells = container.querySelectorAll(".cell");
    const persImage = document.querySelector(".face-image");

    let index;

    cells.forEach((cell) => {
      if (cell.contains(persImage)) {
        index = cell.id;
      }
    });

    expect(index).toBe("0");
  });
});
