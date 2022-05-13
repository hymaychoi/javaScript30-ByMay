const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

//only works at the console
// Regular
console.log('hello')

// Interpolated
console.log('hello I am a %s string', 'someString')

// Styled
console.log('%c I am some great text', 'font-size: 50px; background: red;')

// warning!
console.warn('OH NO!!!')
// Error :|
console.error('shit')

// Info
console.info('Crocodiles eat 3-4 people per year')

// Testing
// this will only fire when the given condition return false
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'That is wrong')

// // clearing
// console.clear();

// Viewing DOM Elements
console.dir(p)

// Grouping together
dogs.forEach(dog=>{
  // console.groupCollapsed(`${dog.name}`)
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} dog years old`)
  console.groupEnd(`${dog.name}`)
})
console.log()

// counting
console.count('May')
console.count('May')
console.count('May')
console.count('May')
console.count('May')

// timing
// you can track how long it takes the task
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
 .then(data=>data.json())
 .then(data=>{
  console.timeEnd('fetching data')

 })

 //object to table
 console.table(dogs)