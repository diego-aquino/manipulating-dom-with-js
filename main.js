const keys = document.querySelectorAll('.key');

window.addEventListener('load', registerEvents);

function registerEvents() {
    window.addEventListener('keydown', playNote);

    for (let key of keys) {
        key.addEventListener('click', playNote);
        key.addEventListener('transitionend', removePlayingClass);
    }
}

function playNote(event) {
    const audioKeyCode = getKeyCode(event);
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

    if (!key) return;

    playAudio(audioKeyCode);
    addPlayingClass(key);
}

function getKeyCode(event) {
    const fromKeyboard = event.type == 'keydown';

    if (fromKeyboard) {
        return event.keyCode + '';
    } else {
        return event.target.dataset.key;
    }
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}

function addPlayingClass(key) {
    key.classList.add('playing');
}

function removePlayingClass(event) {
    const key = event.target;

    key.classList.remove('playing');
}
