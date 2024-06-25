const Alphanumerics = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const allcharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let checkbox = document.getElementById("Charecters")

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let passLenght = document.getElementById("PassLength")

function randomchar() {
    if (checkbox.checked == false)
        return Alphanumerics[Math.floor(Math.random() * Alphanumerics.length)]
    else
        return allcharacters[Math.floor(Math.random() * allcharacters.length)]
}

function generate() {
    password1.textContent = ""
    password2.textContent = ""
    
    if (passLenght.value > 20 || passLenght.value < 8) {
        password1.textContent = "Enter Length between 8 & 20"
        password2.textContent = "Enter Length between 8 & 20"
        return
    }

    
    for (let i = 0; i < passLenght.value; i++) {
        password1.textContent += randomchar()
    }
    for (let i = 0; i < passLenght.value; i++) {
        password2.textContent += randomchar()
    }

}

function copy(buttonId) {
    if(buttonId === "copybtn1")
        navigator.clipboard.writeText(password1.textContent)
    else {
        navigator.clipboard.writeText(password2.textContent)
    }
}

function theme() {
    document.body.classList.toggle('dark-mode');
}