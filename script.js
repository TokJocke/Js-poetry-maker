let words = [ 
    "jag",
    "kan",
    "det",
    "var",
    "vara",
    "en",
    "och",
    "gång",
    "dag",
    "solig",
    "regning",
    "hemsk",
    "ros",
    "sol"
]

let poemWords = []
let wordContainer = document.getElementById("wordContainer")
let poemContainer = document.getElementById("poemContainer")
let printButton = document.getElementById("printButton")
let clearButton = document.getElementById("clearButton")


for (i=0; i < words.length; i++) {
    let printWords = document.createElement("button")
    printWords.innerText = words[i]
    let myButton = wordContainer.appendChild(printWords)
    
    console.log(words[i])
    
    printWords.addEventListener("click", function(){

        poemWords.push(myButton.innerText)
        console.log(poemWords)
    })
    
}

printButton.addEventListener("click", function printPoem(){
    if (poemWords != "") {
        let printPoemWords = document.createElement("div")
        printPoemWords.innerText = poemWords.join(" ")

        poemContainer.appendChild(printPoemWords)
        console.log(printPoemWords)    
        poemWords.length = 0
    }
    else {
        alert("you must choose words")
    }
})

clearButton.addEventListener("click", function(){
    poemWords.length = 0
    poemContainer.removeChild(poemContainer.lastElementChild)
})
