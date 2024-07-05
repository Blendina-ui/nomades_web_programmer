// Canvas setup
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

// Constants
const BLOCK_SIZE = 10;

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;
const GAME_SPEED = 100; // in ms

const LEFT = "LEFT";
const RIGHT = "RIGHT";
const UP = "UP";
const DOWN = "DOWN";

const SNAKE_COLOR = "green";
const SNAKE_COLOR2 = "blue";
const FOOD_COLOR = "red";

// Game variables
let update_direction = true
let score = 0

const suggestedPoint = (gameWidth, gameHeight, blockSize) => { // return a x,y postion randomly choosed in the canvas
  const maxBlocksX = gameWidth / blockSize;
  const maxBlocksY = gameHeight / blockSize;
  const x = Math.floor(Math.random()*maxBlocksX)*blockSize;
  const y = Math.floor(Math.random()*maxBlocksY)*blockSize;
  return { x, y };
}

// Snake class
class Snake {
  #body = [] // list[{x, y}]
  #currentDirection
  #color
  constructor(blockSize, color) {
    this.#color = color
    // TODO: Initialize the snake with 3 blocks
    let p = suggestedPoint(GAME_WIDTH, GAME_HEIGHT, BLOCK_SIZE)
    while (p.x >= GAME_WIDTH-3*blockSize || p.x <= 2*blockSize){
      p = suggestedPoint(GAME_WIDTH, GAME_HEIGHT, BLOCK_SIZE)
    }
    
    this.#body = [
      p,
      {...p, x: p.x-blockSize},
      {x: p.x-2*blockSize, y: p.y},
    ]
    // - choose a position at random in the screen (canvas)
    // - check if the snake has enough space to be placed
    // - add the three block in the #body list, where body[0] is the head, body[1] is the head.x-blockSize, body[2] is the head.x-2*blockSize 
    
    // TODO: Initialize the current direction to a random value between RIGHT, UP, DOWN
    const d = [RIGHT, UP, DOWN]
    this.#currentDirection = d[Math.floor(Math.random()*d.length)]
    this.blockSize = blockSize
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
    // const newHead = {...this.#body[0]}
    // const newHead = this.head
    switch(this.#currentDirection) {
      case LEFT:
        newHead.x -= this.blockSize
        break;
      case RIGHT:
        newHead.x += this.blockSize
        break;
      case UP:
        newHead.y -= this.blockSize
        break;
      case DOWN:
        newHead.y += this.blockSize
        break;
    }

    this.#body.unshift(newHead)
    this.#body.pop()
  }
  grow() {
    // TODO: Add a new block at the end of the snake
    // pro-tip: the new block is the same as the last block of the snake
    this.#body.push({...this.#body[this.#body.length-1]})
  }
  checkCollision(item) {
    // TODO: Check if the head of the snake is at the same position as the item
    const h = this.#body[0]
    return h.x === item.x && h.y === item.y
  }
  checkSelfCollision() {
    // TODO: Check if the head of the snake is at the same position as any other block of the snake (without the head)
    // for(let i=3; i<this.#body.length; i++) {
    //   if(this.checkCollision(this.#body[i])) {
    //     return true
    //   }
    // }
    // return false
    // return this.#body.slice(1).some(tailSegment => this.checkCollision(tailSegment))
    const [_, ...tail] = this.#body
    return tail.some(tailSegment => this.checkCollision(tailSegment))
  }
  checkBorderCollision(canvasWidth, canvasHeight) {
    // TODO: Check if the head of the snake is outside the canvas
      // - if the head.x position is less than 0 or greater than canvasWidth
      // - if the head.y position is less than 0 or greater than canvasHeight
    const h = this.#body[0] 
    return h.x < 0 || h.x > canvasWidth-this.blockSize || h.y < 0 || h.y > canvasHeight-this.blockSize
  }
  checkGameOver(canvasWidth, canvasHeight) {
    // TODO: Check if the snake is in collision with itself or outside the canvas
    return this.checkSelfCollision() || this.checkBorderCollision(canvasWidth, canvasHeight)
  }
  setDirection(direction) {
    // TODO: Set the current direction to the new direction 
      // if the new direction is not the opposite of the current direction
      // if(direction === RIGHT && this.#currentDirection !== LEFT){
      //   this.#currentDirection = direction
      // } else if(direction === LEFT && this.#currentDirection !== RIGHT) {
      //   this.#currentDirection = direction
      // } else if(direction === UP && this.#currentDirection !== DOWN) {
      //   this.#currentDirection = direction
      // } else if(direction === DOWN && this.#currentDirection !== UP) {
      //   this.#currentDirection = direction
      // }
      // if(direction === RIGHT && this.#currentDirection !== LEFT
      //   || direction === LEFT && this.#currentDirection !== RIGHT
      //   || direction === UP && this.#currentDirection !== DOWN
      //   || direction === DOWN && this.#currentDirection !== UP) {
      //   this.#currentDirection = direction
      // }

      const oppositeDirections = {
        [UP]: DOWN,
        [DOWN]: UP,
        [LEFT]: RIGHT,
        [RIGHT]: LEFT,
      }

      const oppositeDirections2 = {
        "UP": "DOWN",
        "DOWN": "UP",
        "LEFT": "RIGHT",
        "RIGHT": "LEFT",
      }

      if(direction !== oppositeDirections2[this.#currentDirection]){
        this.#currentDirection = direction
      }
    }
  draw(ctx) {
    ctx.fillStyle = this.#color
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
    // return {x: this.#body[0].x, y: this.#body[0].y}
  }
}
// Food class
class Food {
  #x
  #y
  constructor(blockSize, canvasWidth, canvasHeight, snake) {
    this.blockSize = blockSize
    this.makeFoodItem(canvasWidth, canvasHeight, snake)
  }
  makeFoodItem(canvasWidth, canvasHeight, snake) {
    // TODO: Set the position of the food item to a random position in the canvas
    let p = suggestedPoint(canvasWidth, canvasHeight, this.blockSize)
    // TODO: Check if the new food item is on the snake
    while(snake.body.some(sbs => p.x === sbs.x && p.y === sbs.y))
      p = suggestedPoint

    this.#x = p.x
    this.#y = p.y
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
const snake = new Snake(BLOCK_SIZE, SNAKE_COLOR);
const snake2 = new Snake(BLOCK_SIZE, SNAKE_COLOR2);
snake.draw(ctx);
snake2.draw(ctx);

// Food setup
const foods = []
for(let i=0; i<10; i++){
 foods.push(new Food(BLOCK_SIZE, GAME_WIDTH, GAME_HEIGHT, snake)) 
}
// let food = new Food(BLOCK_SIZE, GAME_WIDTH, GAME_HEIGHT, snake);
for(f of foods)
  f.draw(ctx);

// Arrow key input handling
document.addEventListener("keydown", handleKeyDown);

let started = false

function handleKeyDown(event) {
  if(!update_direction) return;

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

    case "a":
      snake2.setDirection(LEFT)
      break;
    case "w":
      snake2.setDirection(UP)
      break;
    case "d":
      snake2.setDirection(RIGHT)
      break;
    case "s":
      snake2.setDirection(DOWN)
      break;
  }
  started = true
  update_direction = false
}

// Game loop
const intervalId = setInterval(() => {
  if(!started) return;
  // Move snake
  snake.move()
  snake2.move()
  
  // Check for collision with food
  for  (f of foods){
    if (snake.checkCollision(f)) {
      snake.grow()
      f.makeFoodItem(GAME_WIDTH, GAME_HEIGHT, snake)
      document.querySelector("#game-score").innerText = (++score).toString()
    }
    if (snake2.checkCollision(f)) {
      snake2.grow()
      f.makeFoodItem(GAME_WIDTH, GAME_HEIGHT, snake)
      document.querySelector("#game-score").innerText = (++score).toString()
    }
  }
  
  // Check for game over
  if(snake.checkGameOver(GAME_WIDTH, GAME_HEIGHT) || snake2.checkGameOver(GAME_WIDTH, GAME_HEIGHT)){
    const t = prompt("Game over -  Retry ?")
    console.log(t)
    clearInterval(intervalId)
  }
  
  // Clear canvas
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  // Draw snake and food
  snake.draw(ctx)
  snake2.draw(ctx)
  for(f of foods)
    f.draw(ctx)

  update_direction = true
}, GAME_SPEED);