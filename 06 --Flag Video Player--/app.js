let videoObjects = [
    { id: 1, name: 'Basel Overview', video: 'basel-overview.mp4', image: 'basel-overview.jpg' },
    { id: 2, name: 'Panning Shot of Sunset', video: 'panning-shot-of-sunset.mp4', image: 'panning-shot-of-sunset.jpg' },
    { id: 3, name: 'Plane Over Manhattan', video: 'plane-over-manhattan.mp4', image: 'plane-over-manhattan.jpg' },
    { id: 4, name: 'Pua Vida', video: 'pura-vida.mp4', image: 'pura-vida.jpg' },
    { id: 5, name: 'Gone', video: 'gone.mp4', image: 'poster.png' },
];

const playButton = document.querySelector('#play');
const video = document.querySelector('#video');
const stopButton = document.querySelector('#stop');
const title = document.querySelector('#title');
const progress = document.querySelector('#progress');
const videosList = document.querySelector('#my-v-list');

let currentIndex = 4;


//função para quando iniciar a página, carregar os vídeos, criar os botões onclick play, forward e backward.
function init() {

    playButton.addEventListener('click', videoStatusHtml);
    video.addEventListener('click', videoStatusHtml);
    stopButton.addEventListener('click', stopVideo);
    // forwardButton.addEventListener('click', nextVideo);
    // backwardButton.addEventListener('click', prevVideo)
    progress.addEventListener('change', setVideoProgress);
    video.addEventListener('timeupdate', updateProgress);
    video.volume = 1;

    loadVideo();
    createPlaylist ();
};

//funcao de troca, play pause e botoes
function videoStatusHtml () {
    if (video.paused) {
        video.play();        
        playButton.querySelector('i').classList.remove('fa-play');
        playButton.querySelector('i').classList.add('fa-pause');
    } else {
        video.pause();
        playButton.querySelector('i').classList.remove('fa-pause');
        playButton.querySelector('i').classList.add('fa-play');
    }
};

function stopVideo () {
    video.currentTime = 0;
    video.pause();
};

function loadVideo() {
    const videoLoad = videoObjects[currentIndex];
    title.textContent = videoLoad.name;
    video.src = `/videos/${videoLoad.video}`;
    video.setAttribute('poster', `/img/${videoLoad.image}`);

    stopVideo();
};

function setVideoProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}

function videoID (){
    const id = this.dataset.id;
    currentIndex = videoObjects.findIndex(item => item.id == id);
    loadVideo();
    videoStatusHtml();
};

function updateProgress () {
    if (!isNaN(video.currentTime) && !isNaN(video.duration)) {
        progress.value = (video.currentTime / video.duration) * 100;

        let mins = Math.floor(video.currentTime / 60);
        mins = mins < 10 ? '0' + mins : mins;

        let secs = Math.floor(video.currentTime % 60);
        secs = secs < 10 ? '0' + secs : secs;

        let minsTotal = Math.floor(video.duration / 60);
        minsTotal = minsTotal < 10 ? '0' + minsTotal : minsTotal;

        let secsTotal = Math.floor(video.duration % 60);
        secsTotal = secsTotal < 10 ? '0' + secsTotal : secsTotal;

        timestamp.innerHTML = `${mins}:${secs} / ${minsTotal}:${secsTotal}`;
    }
}

function createPlaylist () {
    videoObjects.forEach(item => renderEl(item));
    loadVideo();
}

function renderEl(item) {
    const li = document.createElement('li');
    li.dataset.id = item.id;

    const img = document.createElement('img');
    img.src = `/img/${item.image}`;

    const span = document.createElement('span');
    span.appendChild(document.createTextNode(item.name));

    li.appendChild(img);
    li.appendChild(span);

    li.addEventListener('click', videoID);

    videosList.appendChild(li);
}

window.addEventListener('load', init);