// Lógica para controle do player de música
document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector(".controls button:nth-child(2)");
    let isPlaying = false;
  
    playButton.addEventListener("click", function() {
      if (isPlaying) {
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
      } else {
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
      }
    });
  });
  