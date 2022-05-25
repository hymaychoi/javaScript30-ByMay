const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const sortedBands = bands.sort(compare)
const bandsUl = document.getElementById("bands")

function compare(a, b){
    return removeArticle(a)> removeArticle(b) ? 1 : -1
}
function removeArticle(str){
    // let words = str.split(" ")
    // if(words.length <=1) return str
    // if(words[0] ==="a" || words[0] ==="an" || words[0]==="the")
    //     return words.splice(1).join(" ");
    // return str
    // this one line (using reg expression) replace the last descriptive codes I wrote earlier 
    return str.replace(/^(a |an |the )/i, '').trim()
}

function renderList(arr){
    const listItemsHtml = arr.map(title => `<li>${title}</li>`).join('')
    bandsUl.innerHTML = listItemsHtml
}

renderList(sortedBands)