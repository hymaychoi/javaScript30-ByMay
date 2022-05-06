const inputs = document.querySelectorAll('.controls input')
const file = document.querySelector('#file')
const image = document.getElementById('img');

function handleUpdate() {
    //'this' refers the DOM element that triggers change event 
    const suffix = this.dataset.sizing || ''; // for the input that don't have suffix (color picker input)
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
    
}

function loadFile() {
    console.log(this.files[0])
	image.src = URL.createObjectURL(this.files[0]);
}

file.addEventListener("change", loadFile, false);

inputs.forEach(input=>input.addEventListener('change', handleUpdate))
inputs.forEach(input=>input.addEventListener('mousemove', handleUpdate))
