const GameSelect = document.querySelector("#game-select")
const GameButtons = document.querySelectorAll("#game-select button")

let gameId = ""

const Form = document.querySelector("#form")
const FormButton = document.querySelector("#form button")

for (const GameButton of GameButtons){
    GameButton.addEventListener("click", (i) => {
        
        gameId = i.target.dataset.id

        GameSelect.classList.add("hide")
        Form.classList.remove("hide")
    })
}

FormButton.addEventListener("click", () => {
    const gameInput = document.querySelector("input[name=game]")
    gameInput.value = gameId
})