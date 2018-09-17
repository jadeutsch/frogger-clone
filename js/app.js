// Score element
var score = document.getElementById('score');

// Gems to be collected by Player
var Gem = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/Gem Blue.png';
}

// Check whether player collects gem and gives Score
Gem.prototype.checkCollection = function() {
  if ((player.x < this.x + 80) &&
  (player.x + 80 > this.x) &&
  (player.y < this.y + 60) &&
  (60 + player.y > this.y)) {
    this.x = 900;
    this.y = 900;
    player.score += 100;
    score.textContent = player.score;
  }
};

// Draw gem on screen
Gem.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;
  this.y = this.y;
  this.checkCollision();
  // Updates the Enemy location
  if (this.x > 505) {
      this.x = 0;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Check collision of enemy with Player
// If collided player is reset
Enemy.prototype.checkCollision = function () {
  if ((player.x < this.x + 80) &&
  (player.x + 80 > this.x) &&
  (player.y < this.y + 60) &&
  (60 + player.y > this.y)) {
    player.x = 200;
    player.y = 400;
  }
};

// Now write your own player class
var Player = function(x, y) {
  // Setting the Player initial location
  this.x = x;
  this.y = y;
  this.score = 0;
  score.textContent = this.score;
  // Loading image by setting 'this.sprite' to appropriate image in img folder
  this.sprite = 'images/char-boy.png';
};

// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {
  this.x = this.x;
  this.y = this.y;
  console.log("The value of this.y is " + this.y);
};

Player.prototype.render = function() {
  // Use code from render method for the Enemy
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Display score for Player
Player.prototype.render = function () {
  score.textContent = this.score;
};

// Update player movements based on keyboard inputs
// Player can move up, down, left, and right
// Limits movement within canvas
Player.prototype.handleInput = function(keypress) {
  this.keypress = keypress;
  if (this.keypress == 'left' && this.x > 0) {
    console.log("I am inside left");
    this.x -= 102;
  };
  if (this.keypress == 'right' && this.x < 350) {
    this.x += 102;
  };
  if (this.keypress == 'up' && this.y > 0) {
    this.y -= 83;
  };
  if (this.keypress == 'down' && this.y < 380) {
    this.y += 83;
  };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var e1 = new Enemy(10, 60, 85);
var e2 = new Enemy(10, 145, 65);
var e3 = new Enemy(10, 225, 165);
var e4 = new Enemy(10, 225, 85);
var player = new Player(202, 405);
console.log(player);
var gem = new Gem(202, 145);
allEnemies.push(e1);
allEnemies.push(e2);
allEnemies.push(e3);
allEnemies.push(e4);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
