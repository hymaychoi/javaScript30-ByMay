//JavaScript30 - Day1 - Drum Kit
//added musical scales to it

const keys= document.querySelectorAll(".key")

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return //  this stops the function
    audio.currentTime =0; // this rewind to theh start
    audio.play();
    key.classList.add("playing")
}

function removeTransition(e){
    if(e.propertyName!=='transform') return; // skip it if it's not a transform
    e.target.classList.remove("playing")   
    // e.target === this
}

window.addEventListener("keydown", playSound)
keys.forEach(key=>key.addEventListener("transitionend", removeTransition))