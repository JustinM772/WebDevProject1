var numChecked = 0
var score = 0
var cardsFlipped = []
var originalImage = '<img src="card back red.png" width="200" height="200">'
let cards = document.getElementsByTagName("td")
for (let i = 0; i < 16; i++) {
    cards[i].innerHTML = originalImage
}
function check() {
    let card = document.getElementById(number)
    card.innerHTML = img
    numChecked += 1
    cardsFlipped.push(card)
    score += 1
}
function change() {
    if (!(cardsFlipped[0] === cardsFlipped[1])) {
        cardsFlipped[0].innerHTML = originalImage
        cardsFlipped[1].innerHTML = originalImage
        cardsFlipped.pop(1)
        cardsFlipped.pop(0)
    }
}
function resetGrid() {
    for (let i = 0; i < 16; i++) {
        cards[i].innerHTML = originalImage
    }
    score = 0
}
if (numChecked === 2) {
    change()
    numChecked = 0
}