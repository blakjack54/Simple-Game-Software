const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  width: 50,
  height: 50,
  speed: 5
};

function drawPlayer() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'blue';
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function updateGame() {
  drawPlayer();
  requestAnimationFrame(updateGame);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && player.x > 0) {
    player.x -= player.speed;
  } else if (event.key === 'ArrowRight' && player.x + player.width < canvas.width) {
    player.x += player.speed;
  }
});

updateGame();
