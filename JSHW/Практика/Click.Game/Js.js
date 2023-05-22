function start_game() {
  object.classList.toggle('start');
  document.title = "Score: 0";
  score = 0;
}

function miss(event) {
  if (event.target.id == "area") {
    score--;
    document.title = `Score: ${score}`;
  }
  if (score <= 0) {
    overGame();
  }
  function overGame() {
    alert(`You lose ${score}`);
    start_game();
  }
}



function hit() {
 score++;
 document.title = `Score: ${score}`;

 object.classList.remove('start');
 void object.offsetWidth;
 object.classList.add('start');

 let random_offset = Math.floor(Math.random() * 340);
 object.style.left = `${random_offset}px`;
 hit_sound.currentTime = 0;
 hit_sound.play();
}

let score = 0;

let object = document.querySelector("#object")

const hit_sound = new Audio('sounds/new.mp3')