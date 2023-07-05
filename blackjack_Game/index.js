// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11


// 2. Create a variable, sum, and set it to the sum of the two cards

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

//Create an empty string called message
let message = ""


//Create a variable for message-el
let messageEl = document.getElementById("message-el")

//if-else conditionals for the game
// Reassign message variable to the string we're logging out

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player =
    {
        name: "Java",
        chips: 145
    }

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
//cardsEl.textContent += "Cards: "

function getRandomCard()
{
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1)
    {
        return 11
    }
    else if (randomNumber > 10)
    {
        return 10
    }
    return randomNumber
}


function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]

    sum = firstCard + secondCard


    renderGame()
}




function renderGame() 
{
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
   // console.log(sumEl.textContent)
   // console.log(cardsEl.textContent)

   for (let i = 0; i < cards.length; i++)
   {
    cardsEl.textContent += cards[i] + " "
   }

    if (sum <= 20) 
    {
        message = "Do you want to draw another card?"
    }
    else if (sum === 21) 
    {
        message = "Congratulations! You've got Blackjack!"
        hasBlackJack = true
    }
    else 
    {
        message = "Sorry, you're out"
        isAlive = false
    }

    messageEl.textContent = message
    
}

function newCard()
{
    if (sum < 21)
    {
        console.log("Drawing a new card from the deck!")
    
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
    
        console.log(cards)

        renderGame()
    }

}