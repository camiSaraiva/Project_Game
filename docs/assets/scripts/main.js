const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let player 
let player2


window.onload = () => {
    restartBtn.classList.add('hidden');
    gameover1.classList.add('hidden');
    gameover2.classList.add('hidden');
    let audio = new Audio('docs/assets/audios/hellox3.mp3');
    audio.play();
    document.getElementById('start-button').onclick = () => {
        player = new Player (200, 300, 100, 200, ctx, "docs/assets/images/Rupaul_standing_plr1.png");
        player2 = new Player (50, 300, 100, 200, ctx, "docs/assets/images/Rupaul_standing_plr2.png");
        let game = new Game(ctx, 1400, 860, player, player2);
        game.start()
        let audio = new Audio('docs/assets/audios/fUp.mp3');
        audio.play();
    };
   restartBtn.onclick = () => {
        gameover1.classList.add('hidden');
        gameover1.classList.add('hidden');
        restartBtn.classList.add('hidden');
        player = new Player (200, 300, 100, 190, ctx, "docs/assets/images/Rupaul_standing_plr1.png");
        player2 = new Player (50, 300, 100, 190, ctx, "docs/assets/images/Rupaul_standing_plr2.png");
        let game = new Game(ctx, 1400, 860, player, player2);
        game.start()
   }
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
        player.img.src = "docs/assets/images/Rupaul_lying_plr1.png"
        
        if (player.speedY < -5){
            player.speedY = player.speedY
        } else {
            player.speedY += -3;   
        }
        break;
    }
  });

  window.addEventListener('keyup', (e) => {
    player.img.src = "docs/assets/images/Rupaul_standing_plr1.png"
    player.speedY = 0;
  });

  window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyD':
        player2.x += 10;
        break;
        case 'KeyA':
        player2.x -= 10;
        break;
        case 'KeyW':
        player2.img.src = "docs/assets/images/Rupaul_lying_plr2.png"
        if (player2.speedY < -5){
            player2.speedY = player2.speedY
        } else {
            player2.speedY += -3;   
        }
        break;
    }
  });


  window.addEventListener('keyup', (e) => {
    player2.img.src = "docs/assets/images/Rupaul_standing_plr2.png"
    player2.speedY = 0;
  });