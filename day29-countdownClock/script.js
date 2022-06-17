let countdown
const timeDisplay = document.querySelector('.display__time-left')
const endTimeDisplay = document.querySelector('.display__end-time')
const timerButtons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown)
    const now = Date.now()
    const then = Date.now() + seconds * 1000 
    // run it immediately once
    displayTimeLeft(seconds)
    displayEndTime(then)

    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        // check if we should stop it
        if(secondsLeft<0){
            clearInterval(countdown)
            return 
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
}

function displayTimeLeft(seconds) {
    //lower down the minutes
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60 
    const display = `${minutes}:${remainderSeconds<10 ? '0' : ''}${remainderSeconds}`
    document.title = display
    timeDisplay.textContent = display
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours()
    const minutes = end.getMinutes()
    endTimeDisplay.textContent =`Be Back At ${hour > 12 ? hour-12 : hour}:${minutes< 10 ? '0': ''}${minutes}`
}

function startTimer(){
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

timerButtons.forEach(btn=>btn.addEventListener("click", startTimer))
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const seconds = parseInt(this.minutes.value) * 60
    timer(seconds)
    this.reset()
})
