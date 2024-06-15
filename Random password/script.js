function getPassword(){
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const digits = '0123456789'
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?'

    const characters = uppercaseLetters + lowercaseLetters + digits + specialCharacters
    
    length = Math.floor(Math.random()*(30-21))+20
    
    const getRandomCharacter = (characters) => {
        return characters[Math.floor(Math.random() * characters.length)]
    }

    let pass = [
        getRandomCharacter(uppercaseLetters),
        getRandomCharacter(lowercaseLetters),
        getRandomCharacter(digits),
        getRandomCharacter(specialCharacters)
    ]

    for (let i = 4; i < length; i++) {
        pass.push(getRandomCharacter(characters))
    }

    pass = pass.sort(() => Math.random() - 0.5)
    return pass.join('')
}

function ToggleVisibility() {
    var x = document.getElementById("output");
    x.style.display = "block";
}

function rstCopyButtons(){
    document.getElementById('cpy1').innerHTML = "content_copy"
    document.getElementById('cpy2').innerHTML = "content_copy"
    document.getElementById('cpy3').innerHTML = "content_copy"
    document.getElementById('cpy4').innerHTML = "content_copy"
}

function copy(id) {
    var copyText = document.getElementById('pass'+id).textContent;
    navigator.clipboard.writeText(copyText);
    rstCopyButtons()
    document.getElementById('cpy'+id).innerHTML = "library_add_check"
}

function generate(){
    ToggleVisibility()
    rstCopyButtons()
    document.querySelector("#pass1").textContent = getPassword()
    document.querySelector("#pass2").textContent = getPassword()
    document.querySelector("#pass3").textContent = getPassword()
    document.querySelector("#pass4").textContent = getPassword()
}
