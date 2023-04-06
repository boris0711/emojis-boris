let myEmojis = ["👩‍💻", "⛹🏻", "⛹🏻", "🚴🏼‍♂️"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

//localStorage.clear()
let emojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"))
console.log(emojisFromLocalStorage)

if(emojisFromLocalStorage){
    myEmojis = emojisFromLocalStorage
    render(myEmojis)
}

function render(emojis) {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < emojis.length; i++) {
        
        emojiContainer.innerHTML += `<span>${emojis[i]}</span>`
    }
}

render(myEmojis)

function lazyAss(){
    //if (emojiInput.value) {
        //myEmojis.push(emojiInput.value)
         //myEmojis.unshift(emojiInput.value)
     emojiInput.value = ""
         localStorage.setItem("myEmojis", JSON.stringify(myEmojis) )
        render(myEmojis)
    //}
}

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
            myEmojis.push(emojiInput.value)

        lazyAss()
    }
    
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
       myEmojis.unshift(emojiInput.value)
        lazyAss()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    render(myEmojis)
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    render(myEmojis)
})

