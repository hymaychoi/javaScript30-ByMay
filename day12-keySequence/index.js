const pressed = [];
const secretCode = "maythebest"

// key sequence detection!
window.addEventListener('keyup', (e)=>{

    pressed.push(e.key)
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)

    if(pressed.join('').includes(secretCode)){
        console.log('UNICORN!')
        cornify_add();
    }
    console.log(pressed)
})

// Array.splice(start, removeCount, newItem, newItem, newItem, ...)