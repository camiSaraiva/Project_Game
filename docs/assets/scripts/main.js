const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let player 
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        player = new Player (50, 300, 100, 190, ctx);
        let game = new Game(ctx, 1400, 860, player);
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
    player.img.src = "docs/assets/images/Rupaul_standing.png"
    player.speedY = 0;
  });