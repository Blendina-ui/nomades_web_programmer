// Canvas setup
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

// Constants
const BLOCK_SIZE = 10;

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;
const GAME_SPEED = 100; // in ms

const LEFT = "left";
const RIGHT = "right";
const UP = "up";
const DOWN = "down";

const SNAKE_COLOR = "green";
const FOOD_COLOR = "red";

// Game variables
let update_direction = true
let score = 0

const suggestedPoint = () => { // return a x,y postion randomly choosed in the canvas
  const maxBlocksX = canvasWidth / this.blockSize;
  const maxBlocksY = canvasHeight / this.blockSize;
  const x = Math.floor(Math.random()*maxBlocksX)*this.blockSize;
  const y = Math.floor(Math.random()*maxBlocksY)*this.blockSize;
  return [x, y];
}

// Snake class
class Snake {
  #body // list[{x, y}]
  #currentDirection
  constructor(blockSize) {
    // TODO: Initialize the snake with 3 blocks
      // - choose a position at random in the screen (canvas)
      // - check if the snake has enough space to be placed
      // - add the three block in the #body list, where body[0] is the head, body[1] is the head.x-blockSize, body[2] is the head.x-2*blockSize 
    // TODO: Initialize the current direction to a random value between RIGHT, UP, DOWN
  }
  move() {
    // TODO: Move the snake according to the current direction
      // - add a new block at the head of the snake
      // The new block position is calculated according to the current direction:
        // - if the direction is LEFT, the new block is at x-blockSize, y
        // - if the direction is UP, the new block is at x, y-blockSize
        // - if the direction is RIGHT, the new block is at x+blockSize, y
        // - if the direction is DOWN, the new block is at x, y+blockSize
    // TODO: remove the last block of the snake
    const newHead = {x: this.#body[0].x, y: this.#body[0].y}
  }
  grow() {
    // TODO: Add a new block at the end of the snake
    // pro-tip: the new block is the same as the last block of the snake
  }
  checkCollision(item) {
    // TODO: Check if the head of the snake is at the same position as the item
  }
  checkSelfCollision() {
    // TODO: Check if the head of the snake is at the same position as any other block of the snake (without the head)
  }
  checkBorderCollision(canvasWidth, canvasHeight) {
    // TODO: Check if the head of the snake is outside the canvas
      // - if the head.x position is less than 0 or greater than canvasWidth
      // - if the head.y position is less than 0 or greater than canvasHeight
  }
  checkGameOver(canvasWidth, canvasHeight) {
    // TODO: Check if the snake is in collision with itself or outside the canvas
  }
  setDirection(direction) {
    // TODO: Set the current direction to the new direction 
      // if the new direction is not the opposite of the current direction
  }
  draw(ctx) {
    ctx.fillStyle = SNAKE_COLOR
    this.#body.forEach(p => {
      ctx.fillRect(p.x, p.y, this.blockSize, this.blockSize)
    })
  }

  // GETTERS
  get body() {
    return this.#body;
  }
  get head() { // DO NOT CHANGE THIS FUNCTION
    return {...this.#body[0]}
  }
}
// Food class
class Food {
  #x
  #y
  constructor(blockSize, canvasWidth, canvasHeight) {
    this.blockSize = blockSize
    this.makeFoodItem(canvasWidth, canvasHeight)
  }
  makeFoodItem(canvasWidth, canvasHeight) {
    // TODO: Set the position of the food item to a random position in the canvas
    let p = suggestedPoint()
    // TODO: Check if the new food item is on the snake
  }
  draw(ctx) {
    ctx.fillStyle = FOOD_COLOR
    ctx.fillRect(this.#x, this.#y, this.blockSize, this.blockSize)
  }
  get x() {
    return this.#x
  }
  get y() {
    return this.#y
  }
}
// Snake setup
const snake = new Snake(BLOCK_SIZE);
snake.draw(ctx);

// Food setup
let food = new Food(BLOCK_SIZE, GAME_WIDTH, GAME_HEIGHT);
food.draw(ctx);

// Arrow key input handling
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  switch (event.key) {
    case "ArrowLeft":
      snake.setDirection(LEFT)
      break;
    case "ArrowUp":
      snake.setDirection(UP)
      break;
    case "ArrowRight":
      snake.setDirection(RIGHT)
      break;
    case "ArrowDown":
      snake.setDirection(DOWN)
      break;
  }
  update_direction = false
}

// Game loop
const intervalId = setInterval(() => {
  // Move snake
  snake.move()
  
  // Check for collision with food
  if (snake.checkCollision(food)) {
    snake.grow()
    food.makeFoodItem(GAME_WIDTH, GAME_HEIGHT)
    document.querySelector("#game-score").innerText = (++score).toString()
  }
  
  // Check for game over
  if(snake.checkGameOver(GAME_WIDTH, GAME_HEIGHT)){
    alert("Game over")
    clearInterval(intervalId)
  }
  
  // Clear canvas
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  // Draw snake and food
  snake.draw(ctx)
  food.draw(ctx)

  update_direction = true
}, GAME_SPEED);