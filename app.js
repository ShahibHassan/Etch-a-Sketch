const resetbtn = document.getElementById("reset");
const container = document.getElementById("container");
const sizebtn = document.getElementById("sizebtn");
// create a 16 x 16 grid
function createGrid(x) {
  container.style.gridTemplateColumns = `repeat(${x}, ${700 / x}px)`;
  container.style.gridTemplateRows = `repeat(${x}, ${700 / x}px)`;
  for (var row = 1; row <= x; row++) {
    for (var column = 1; column <= x; column++) {
      // create div
      const newDiv = document.createElement("div");
      // add element to div
      newDiv.classList.add("grid");
      // eventListner monitors hover
      newDiv.addEventListener("mouseover", changeColour);
      // append div
      container.appendChild(newDiv);
      //----console test ----
      console.log(newDiv);
      console.log(row + "+" + column);
      //---------------------
    }
  }
}

const changeColour = (event) => {
  event.target.style.backgroundColor = "black";
};

resetbtn.addEventListener("click", function () {
  const boxes = document.querySelectorAll(".grid");
  boxes.forEach((box) => (box.style.backgroundColor = "white"));
});

sizebtn.addEventListener("click", function () {
  let x = prompt("enter the size of grid");
  if (!isNaN(x) && x <= 100) {
    // clear contents of the container
    container.innerHTML = "";
    createGrid(x);
  } else {
    alert("please enter a valid number");
  }
});

createGrid(16);
