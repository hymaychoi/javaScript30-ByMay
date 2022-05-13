//html canvas behaves like microsoft paint
const canvas = document.querySelector("#draw")
const ctx = canvas.getContext('2d')

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0;
let direction = true;

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55'
ctx.lineWidth = 30
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
// ctx.globalCompositeOperation ='multiply'

function draw(e){
    if (!isDrawing) return  // this will stop the function from running when they are not moused down
    // this will run if the above condition is not satisfied (isDrawing===true)
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    // start from
    ctx.beginPath()
    // go to
    ctx.moveTo(lastX, lastY);

    //this comes from the actual event 
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    lastX = e.offsetX
    lastY = e.offsetY

    hue++
    if(hue>=360){
        hue=0;
    }
    if(ctx.lineWidth >=100 || ctx.lineWidth<=1){
        direction = !direction
    }

    if(direction){
        ctx.lineWidth++
    }
    else{
        ctx.lineWidth--
    }
}

canvas.addEventListener('mousedown', (e)=> {
    console.log(isDrawing)
    isDrawing= true;
    console.log(isDrawing)
    lastX = e.offsetX
    lastY = e.offsetY

})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', ()=> isDrawing= false )
canvas.addEventListener('mouseleave', ()=> isDrawing= false )