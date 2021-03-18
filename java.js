const input = document.getElementById("input-area")

const button = document.getElementById("button")

const tag = document.getElementById("name-area")

const color = document.getElementById("color")

const colorButton = document.getElementById("color-button")


//This is for changing the tag text
button.addEventListener("click", () => {
tag.textContent = input.value;
})


//This is for changing the tag color
colorButton.addEventListener("click", () => {
    color.style.backgroundColor = "blue"

})

