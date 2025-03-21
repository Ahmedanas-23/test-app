document.addEventListener("keydown", (event) => {
    const car = document.getElementById("car");
    const road = document.querySelector(".road");
    const roadRect = road.getBoundingClientRect();
    const carRect = car.getBoundingClientRect();
  
    // Move car left or right within the road boundaries
    if (event.key === "ArrowLeft" && carRect.left > roadRect.left) {
      car.style.left = car.offsetLeft - 20 + "px";
    } else if (event.key === "ArrowRight" && carRect.right < roadRect.right) {
      car.style.left = car.offsetLeft + 20 + "px";
    }
  });
  
  function detectCollision() {
    const car = document.getElementById("car");
    const obstacle = document.getElementById("obstacle");
  
    const carRect = car.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
  
    return !(
      carRect.bottom < obstacleRect.top ||
      carRect.top > obstacleRect.bottom ||
      carRect.right < obstacleRect.left ||
      carRect.left > obstacleRect.right
    );
  }
  
  function gameLoop() {
    if (detectCollision()) {
      alert("Game Over!");
      resetGame();
    }
  
    requestAnimationFrame(gameLoop);
  }
  
  function resetGame() {
    const car = document.getElementById("car");
    const obstacle = document.getElementById("obstacle");
  
    car.style.left = "50%";
    obstacle.style.animation = "none";
    setTimeout(() => {
      obstacle.style.animation = "moveObstacle 3s linear infinite";
    }, 10);
  }
  
  gameLoop();
  