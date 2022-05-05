const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    let hours = now.getHours();

    const secondsDegrees = (seconds/60)* 360 + 90;
    secondHand.style.transform =`rotate(${secondsDegrees}deg)`;

    //adding seconds/60 is for making the hour hand gradually moving
    const minsDegrees = (mins/60)* 360 + 90 + (seconds/60);
    minHand.style.transform =`rotate(${minsDegrees}deg)`

    
    if(hours>12 && hours <24){
        hours= hours-12
    }
    const hoursDegrees = (hours/12)* 360 + 90 + (mins/60);
    hourHand.style.transform=`rotate(${hoursDegrees}deg)`
    
}

setInterval(() => {
    setDate()
    
}, 1000);