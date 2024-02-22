let audio = document.getElementById('monAudio');
let volumeControl = document.getElementById('volumeControl');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
});


let slideElement = document.querySelector(".slide");
let topPageElement = document.querySelector('.top-page');

let nombreDeCopies = 3; 

for (let i = 0; i < nombreDeCopies; i++) {
    let copy = slideElement.cloneNode(true);
    topPageElement.appendChild(copy);
}
