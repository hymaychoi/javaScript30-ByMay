const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
// all the elements that have an attribute "data-skip"
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullScreenBtn = player.querySelector('.full__screen')

function togglePlay(){
    const method = video.paused ? 'play' : 'pause'
    // video has play and pause property so that you can use this syntax
    // same as video.play() and video.pause()
    video[method]();
}

function updateButton(){
    const icon = this.paused ? "►" : "❚ ❚"
    toggle.innerText = icon
}

function skip(){
    const skipTime = this.dataset.skip
    video.currentTime += parseFloat(skipTime)
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime;
    console.log(scrubTime)
}

function handleFullScreen(){
    video.requestFullscreen()
	.catch(function(error) {
		console.log(error)
	});
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)

//skip buttons event
skipButtons.forEach(skipBtn=> skipBtn.addEventListener('click', skip))

//ranges update event
ranges.forEach(range=> range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range=> range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e)=> mousedown && scrub(e))
progress.addEventListener('mousedown', ()=> mousedown=true )
progress.addEventListener('mouseup', ()=> mousedown=false)

fullScreenBtn.addEventListener('click', handleFullScreen)
