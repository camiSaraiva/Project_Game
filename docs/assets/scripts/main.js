const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let player 
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        player = new Player (50, 50, 100, 175, ctx);
        let game = new Game(ctx, 1200, 580, player);
        game.start()
    };
   
};

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowRight':
        player.x += 10;
        break;
        case 'ArrowLeft':
        player.x -= 10;
        break;
        case 'ArrowUp':
        player.img.src = "docs/assets/images/Rupaul_lying.png"
        if (player.speedY < -5){
            player.speedY = player.speedY
        } else {
            player.speedY += -3;   
        }

        break;
    }
  });

  window.addEventListener('keyup', (e) => {
    //player.gravity = 2;
    player.img.src = "docs/assets/images/Rupaul_standing.png"
    player.speedY = 0;
  });