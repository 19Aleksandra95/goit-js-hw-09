const reference = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

reference.startBtn.addEventListener('click', onStart);
reference.stopBtn.addEventListener('click', onStop);

let intervalId = null;

function onStart() {
    reference.startBtn.disabled = true;

    intervalId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000)
}


function onStop(){
    reference.startBtn.disabled = false;
    clearInterval(intervalId);
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }