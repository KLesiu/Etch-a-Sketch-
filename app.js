const containerSmall = document.querySelector(".container__small");
const containerMedium = document.querySelector(".container__medium");
const containerBig = document.querySelector(".container__big");
const changeButton = document.querySelector(".change__grid");
const smallGrid = document.querySelector(".small");
const mediumGrid = document.querySelector(".medium");
const largeGrid = document.querySelector(".large");
const listbutton = document.querySelector(".reset");

const createGridBig = () => {
  for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("puzzle");
    div.classList.add("puzzleBig");
    containerBig.appendChild(div);
  }
  draw();
};
const createGridSmall = () => {
  for (i = 0; i < 10000; i++) {
    const div = document.createElement("div");
    div.classList.add("puzzle");
    div.classList.add("puzzleSmall");
    containerSmall.appendChild(div);
  }
  draw();
};
const createGridMedium = () => {
  for (i = 0; i < 2500; i++) {
    const div = document.createElement("div");
    div.classList.add("puzzle");
    div.classList.add("puzzleMedium");
    containerMedium.appendChild(div);
  }
  draw();
};
const chooseSize = () => {
  smallGrid.addEventListener("click", createGridSmall);
  mediumGrid.addEventListener("click", createGridMedium);
  largeGrid.addEventListener("click", createGridBig);
};
const reset = () => {
  smallGrid.classList.add("hidden");
  mediumGrid.classList.add("hidden");
  largeGrid.classList.add("hidden");
  listbutton.addEventListener("click", resetItems);
};

const resetItems = () => {
  smallGrid.classList.remove("hidden");
  mediumGrid.classList.remove("hidden");
  largeGrid.classList.remove("hidden");
  smallGrid.addEventListener("click", () => {
    containerSmall.classList.remove("hidden");
    containerMedium.classList.add("hidden");
    containerBig.classList.add("hidden");
    reset();
  });
  mediumGrid.addEventListener("click", () => {
    containerMedium.classList.remove("hidden");
    containerSmall.classList.add("hidden");
    containerBig.classList.add("hidden");
    reset();
  });
  largeGrid.addEventListener("click", () => {
    containerBig.classList.remove("hidden");
    containerSmall.classList.add("hidden");
    containerMedium.classList.add("hidden");
    reset();
  });
};
const draw = () => {
  let div = document.querySelectorAll(".puzzle");

  for (let i = 0; i < div.length; i++) {
    const divChangeColor = () => {
      div[i].classList.add("puzzleChange");
    };
    div[i].addEventListener("mouseover", divChangeColor);
  }
};

// createGridSmall();
// createGridBig();
// createGridMedium();

chooseSize();

reset();
// rules();
