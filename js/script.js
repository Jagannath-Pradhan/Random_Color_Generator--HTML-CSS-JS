const getColor = () => {
    // HEX Code 
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#" + randomNumber.toString(16)                  // 16 -> Hexadecomal code
    document.body.style.backgroundColor = randomCode
    document.getElementById("color-code").innerText = randomCode

    // copy the randomCode automatically to the clipboard
    navigator.clipboard.writeText(randomCode)
}

// event call
document.getElementById("btn").addEventListener("click", getColor)

// initial call
getColor()





// info


// we need a random no. which can give us a hexadecimal code and that random no. is -  16777215

// to get hex code we have passed "16 in toString()"            16 = Hexadecimal unit  