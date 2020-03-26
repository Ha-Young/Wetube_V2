const videoContainer = document.getElementById("jsVideoPlayer");
let videoPlayer,
  playBtn,
  volumnBtn,
  fullScreenBtn,
  currentTime,
  totalTime,
  volumeRange,
  controls;

let timeout;

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumnClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumnBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    volumeRange.value = videoPlayer.volume;
  } else {
    videoPlayer.muted = true;
    volumnBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    volumeRange.value = 0;
  }
}

function exitFullScreen() {
  fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScreenBtn.addEventListener("click", handleFullScreenClick);
  document.webkitExitFullscreen();
}

function handleFullScreenClick() {
  if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.mozRequestFullscreen) {
    videoContainer.mozRequestFullscreen();
  } else if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }
  fullScreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScreenBtn.removeEventListener("click", handleFullScreenClick);
  fullScreenBtn.addEventListener("click", exitFullScreen);
}

const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};

function setTotalTime() {
  const totalTimeString = formatDate(videoPlayer.duration);
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 1000);
}

function getCurrentTime() {
  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
}

function handleEnded() {
  videoPlayer.currentTime = 0;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function handleVolumeRange(event) {
  const {
    target: { value }
  } = event;
  videoPlayer.volume = value;
  if (value >= 0.6) {
    volumnBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if (value >= 0.2) {
    volumnBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else {
    volumnBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
}

function handleMouseMove(event) {
  clearTimeout(timeout);
  videoContainer.style.cursor = "auto";
  controls.style.display = "grid";
  timeout = setTimeout(function() {
    videoContainer.style.cursor = "none";
    controls.style.display = "none";
  }, 2000);
}

function handleKeyDown(event) {
  const { code } = event;

  if (code === "Space") handlePlayClick();
}

function init() {
  document.addEventListener("mousemove", handleMouseMove);
  videoPlayer = videoContainer.querySelector("video");
  videoPlayer.volume = 0.5;
  playBtn = document.getElementById("jsPlayButton");
  volumnBtn = document.getElementById("jsVolumeBtn");
  fullScreenBtn = document.getElementById("jsFullScreen");
  currentTime = document.getElementById("currentTime");
  totalTime = document.getElementById("totalTime");
  volumeRange = document.getElementById("jsVolume");
  controls = videoContainer.querySelector(".videoPlayer__controls");

  videoPlayer.addEventListener("loadeddata", setTotalTime);
  videoPlayer.addEventListener("ended", handleEnded);
  playBtn.addEventListener("click", handlePlayClick);
  volumnBtn.addEventListener("click", handleVolumnClick);
  fullScreenBtn.addEventListener("click", handleFullScreenClick);
  volumeRange.addEventListener("input", handleVolumeRange);
  document.addEventListener("keydown", handleKeyDown);
}

if (videoContainer) {
  init();
}
