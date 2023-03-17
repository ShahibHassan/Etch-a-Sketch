// Get the reset, container, size, and color buttons and assign them to variables
const resetbtn = document.getElementById("reset");
const container = document.getElementById("container");
const sizebtn = document.getElementById("sizebtn");
const rdmcolor = document.getElementById("colorbtn");

// Initialize the default color to black
var randomColor = "black";

// Function to create a grid with a specified number of rows and columns
function createGrid(x) {
  // Set the grid template columns and rows to be x number of equally sized cells within the container
  container.style.gridTemplateColumns = `repeat(${x}, ${700 / x}px)`;
  container.style.gridTemplateRows = `repeat(${x}, ${700 / x}px)`;

  // Create x number of rows and columns of cells within the container
  for (var row = 1; row <= x; row++) {
    for (var column = 1; column <= x; column++) {
      // Create a new div element
      const newDiv = document.createElement("div");

      // Add the "grid" class to the div element
      newDiv.classList.add("grid");

      // Add an event listener to the div element that changes its background color when hovered over
      newDiv.addEventListener("mouseover", changeColour);

      // Append the new div element to the container
      container.appendChild(newDiv);

      // Console log the new div element and its row and column coordinates
      console.log(newDiv);
      console.log(row + "+" + column);
    }
  }
}

// Function to change the color of a cell to the current random color when hovered over
const changeColour = (event) => {
  event.target.style.backgroundColor = randomColor;
};

// Add an event listener to the reset button that changes the background color of all cells to white
resetbtn.addEventListener("click", function () {
  const boxes = document.querySelectorAll(".grid");
  boxes.forEach((box) => (box.style.backgroundColor = "white"));
});

// Add an event listener to the size button that prompts the user to enter a new grid size and creates a new grid with the specified size
sizebtn.addEventListener("click", function () {
  let x = prompt("enter the size of grid");
  if (!isNaN(x) && x <= 100) {
    // Clear the contents of the container
    container.innerHTML = "";
    // Create a new grid with the specified size
    createGrid(x);
  } else {
    alert("please enter a valid number");
  }
});

// Add an event listener to the random color button that generates a new random color and sets it as the current color
rdmcolor.addEventListener("click", function () {
  // Generate a new random color
  randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(randomColor);
  // Add an event listener to all cells in the grid that changes their color to the new random color when hovered over
  const grdboxes = document.querySelectorAll(".grid");
  console.log(grdboxes);
  grdboxes.forEach((box) => box.addEventListener("mouseover", changeColour));
});

// Create an initial grid with 16 rows and columns
createGrid(16);
