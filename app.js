let board = document.querySelector(".board");
let block = document.querySelectorAll("block");
let button = document.querySelector(".btn-start");
let playAgain_button = document.querySelector(".btn-end")
let modal = document.querySelector(".modal");
const startGame = document.querySelector(".start-game");
const playAgain = document.querySelector(".play-again");
const highscore = document.querySelector("#high-score");
highscore.textContent = localStorage.getItem('HighScore');

const score = document.querySelector("#score");
const time = document.querySelector("#time");

let count = 0;

const blockHeight = 50;
const blockWidth = 50;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let blocks = [];
let snake = [{
    x: 1, y: 3
}];

let intervalID = null;

// Coordinate of the random food.
let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };

let direction = 'down'
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let add_block = document.createElement("div");
        add_block.classList.add("block");
        board.appendChild(add_block);
        blocks.push(add_block);
        // add_block.innerHTML = `${row}-${col}`
        blocks[`${row}-${col}`] = add_block;
    }
}

// checking for the high score.
function savingToLocalStorage() {
    if (count > Number(highscore.textContent)) {
        highscore.textContent = count;
        localStorage.setItem('HighScore', count);
    }
}

// function to start timer
function startTimer() {
    let current_time = Number(time.innerHTML);
    current_time++;
    time.textContent = current_time;
}

// Real Game Engine.
function render() {

    let head = null;

    if (direction === 'left') {
        head = { x: snake[0].x, y: snake[0].y - 1 }
    } else if (direction === 'right') {
        head = { x: snake[0].x, y: snake[0].y + 1 }
    } else if (direction === 'up') {
        head = { x: snake[0].x - 1, y: snake[0].y }
    } else if (direction === 'down') {
        head = { x: snake[0].x + 1, y: snake[0].y }
    }

    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        alert("You Lost!!!!");
        clearInterval(intervalID);
        modal.style.display = "";
        startGame.style.display = "none";
        playAgain.style.display = "initial";
        // document.querySelector(".play-again").style.display="initial";
        // document.querySelector(".start-game").style.display="";
    }

    // Random food box colouring.
    blocks[`${food.x}-${food.y}`].classList.add("food");

    // snake cathed the food.
    if (head.x == food.x && head.y == food.y) {

        blocks[`${food.x}-${food.y}`].classList.remove("food");
        food = {
            x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)
        };
        blocks[`${food.x}-${food.y}`].classList.add("food");

        // added snake length.
        snake.unshift(head);
        count += 5;
        score.innerHTML = count;
        savingToLocalStorage();

    }

    // removed the current box colour
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    });

    // shifting the heap upward to the direction and deleting the end tail
    snake.unshift(head);
    snake.pop();

    // Adding the upward head div background colour.
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    });

}

button.addEventListener("click", () => {
    modal.style.display = "none";
    // Time interval is running
    intervalID = setInterval(() => {
        // Game Engine is Rendering
        render();
        startTimer();
    }, 200);
})


// Adding keyboard control
// ArrowUp
// ArrowDown
// ArrowLeft
// ArrowRight

window.addEventListener("keydown", function (dets) {
    console.log(dets.key);
    if (dets.key === "ArrowUp") {
        direction = 'up';
    } else if (dets.key === "ArrowDown") {
        direction = 'down';
    } else if (dets.key === "ArrowLeft") {
        direction = 'left';
    } else if (dets.key === "ArrowRight") {
        direction = 'right';
    }
})

