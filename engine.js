// This is a code for making game engine.


// function render() {

//     let head = null;

//     if (direction === 'left') {
//         head = { x: snake[0].x, y: snake[0].y - 1 }
//     } else if (direction === 'right') {
//         head = { x: snake[0].x, y: snake[0].y + 1 }
//     } else if (direction === 'up') {
//         head = { x: snake[0].x - 1, y: snake[0].y }
//     } else if (direction === 'down') {
//         head = { x: snake[0].x + 1, y: snake[0].y }
//     }

//     if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
//         alert("You Lost!!!!");
//         clearInterval(intervalID);
//         modal.style.display = "";
//         startGame.style.display = "none";
//         playAgain.style.display = "initial";
//         // document.querySelector(".play-again").style.display="initial";
//         // document.querySelector(".start-game").style.display="";
//     }

//     // Random food box colouring.
//     blocks[`${food.x}-${food.y}`].classList.add("food");

//     // snake cathed the food.
//     if (head.x == food.x && head.y == food.y) {

//         blocks[`${food.x}-${food.y}`].classList.remove("food");
//         food = {
//             x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)
//         };
//         blocks[`${food.x}-${food.y}`].classList.add("food");

//         // added snake length.
//         snake.unshift(head);
//         count += 5;
//         score.innerHTML = count;
//         savingToLocalStorage();

//     }

//     // removed the current box colour
//     snake.forEach(segment => {
//         blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
//     });

//     // shifting the heap upward to the direction and deleting the end tail
//     snake.unshift(head);
//     snake.pop();

//     // Adding the upward head div background colour.
//     snake.forEach(segment => {
//         blocks[`${segment.x}-${segment.y}`].classList.add("fill");
//     });

// }


