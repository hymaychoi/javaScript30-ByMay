const ITEMS_KEY = 'items'
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem(ITEMS_KEY)) ||  []
const selectAll = addItems.querySelector('input[type=checkbox]')

function saveData(items){
    localStorage.setItem(ITEMS_KEY, JSON.stringify(items))
}

function addItem(e){
    e.preventDefault()
    const text = this.querySelector('[name=item]').value
    const item = {
        text,
        done: false
    }

    items.push(item)
    populateList(items, itemsList)
    saveData([...items])
    // will reset the form
    this.reset();
}

//need two parameters (platesArray, where to put the list)
function populateList(plates=[], platesList){
    platesList.innerHTML = plates.map((plate, i)=> {
        return `<li>
            <input type='checkbox' data-index=${i} id='${i}' ${plate.done ? 'checked' : ''} />
            <label for='${i}'>${plate.text}</label>
        </li>`
    }).join('')
}

function toggleDone(e){
    if(!e.target.matches('input')) return // skip this unless it's an input (you are only getting input elements)
    const el = e.target
    const index = el.dataset.index
    // make it opposite
    items[index].done = !items[index].done 
    saveData(items)
    populateList(items,itemsList)
}

function selectAllItems(e){
    const toggleAllElems = e.target.checked
    let updatedArr=[]
    if(toggleAllElems){
        updatedArr = items.map(item=>{
        return {...item, done:true}
        })
        populateList(updatedArr, itemsList)
    }
    else {
        updatedArr = items.map(item=>{
        return {...item, done:false}
        })
        populateList(updatedArr, itemsList)
    }
    saveData(updatedArr)
}

addItems.addEventListener("submit", addItem )
itemsList.addEventListener('click', toggleDone)
selectAll.addEventListener('click', selectAllItems)
populateList(items, itemsList)