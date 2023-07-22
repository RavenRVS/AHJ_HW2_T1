import createField from "../create_field";

describe("createField", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="container"></div>';
  });

  test("should create the specified number of cells in the container", () => {
    createField(16);

    const container = document.querySelector(".container");
    const cells = container.querySelectorAll(".cell");

    expect(cells.length).toBe(16);
  });

  test("should set the correct id attribute for each cell", () => {
    createField(3);

    const container = document.querySelector(".container");
    const cells = container.querySelectorAll(".cell");

    cells.forEach((cell, index) => {
      expect(cell.getAttribute("id")).toBe(index.toString());
    });
  });
});
