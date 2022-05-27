const timeNodes = Array.from(document.querySelectorAll('[data-time]'))
const seconds = timeNodes
                .map(node=>node.dataset.time)
                .map(timeCode=> {
                    const [mins, secs] = timeCode.split(":").map(parseFloat)
                    return (mins*60) + secs
                })
                .reduce((total, vidSeconds)=> total + vidSeconds)



const seconds2 = timeNodes.reduce((total, seconds)=>{
    const [mins, secs] = seconds.dataset.time.split(':').map(parseFloat)
    return (mins*60) + secs + total

}, 0)

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600)
secondsLeft = seconds - (hours *3600)

const mins = Math.floor(secondsLeft/ 60)
secondsLeft = secondsLeft % 60


console.log(hours, mins, secondsLeft)