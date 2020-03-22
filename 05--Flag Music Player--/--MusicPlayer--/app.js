let musicContainer = document.querySelector('#music-container');
let progressContainer = document.querySelector('#progress-container');
let progressBar = document.querySelector('#progress');
let musicTitle = document.querySelector('#title');
let audioSrc = document.querySelector('#audio');
let musicCover = document.querySelector('#cover');
let prevBtn = document.querySelector('#prev');
let nexBtn = document.querySelector('#next');
let playBtn = document.querySelector('#play');
let iconPlay = document.querySelector('.fa-play');
let songsArray = ['hey', 'summer', 'ukulele'];
let songIndex = 0;

audio.volume = 0.2;

function init() {
    loadSong(songsArray[songIndex]);

    playBtn.addEventListener('click', setPlaySong);
    prevBtn.addEventListener('click', setPreviousSong);
    nexBtn.addEventListener('click', setNextSong);
    progressContainer.addEventListener('click', setProgressHandler);

    audio.addEventListener('timeupdate', updateProgressHandler);
    audio.addEventListener('ended', setNextSong);
};

function isPlaying() {
    return musicContainer.classList.contains('play');
};

function setPlaySong() {
    if (isPlaying()) {
        stopSong();
    } else {
        playSong();
    }
};

function playSong() {

    musicContainer.classList.add('play');

    trocaClasses(iconPlay, 'fa-play', 'fa-pause');

    audio.play();
};

function stopSong() {
    musicContainer.classList.remove('play');

    trocaClasses(iconPlay, 'fa-pause', 'fa-play');

    audio.pause();
};

function trocaClasses(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
};

function loadSong(songsArray) {

    musicTitle.textContent = songsArray;

    audio.src = `music/${songsArray}.mp3`;
    cover.src = `images/${songsArray}.jpg`;
}

function setPreviousSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songsArray.length - 1;
    }

    loadSong(songsArray[songIndex]);

    playSong();
}

function setNextSong() {

    songIndex++;

    if (songIndex > songsArray.length - 1) {
        songIndex = 0;
    }

    loadSong(songsArray[songIndex]);

    playSong();

}

function setProgressHandler(e) {
    const width = progressContainer.clientWidth;

    const clickX = e.offsetX;

    const duration = audioSrc.duration;

    audioSrc.currentTime = (clickX / width) * duration;
}

function updateProgressHandler() {

    const { duration, currentTime } = audio;

    const progressPercent = (currentTime / duration) * 100;

    progressBar.style.width = `${progressPercent}%`;
};

window.addEventListener('load', init);
