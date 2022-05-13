characters = ["!","@","#","$","%","^","&","*","(",")",":",";"]
numbers = [1,2,3,4,5,6,7,8,9,0,]
smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
capitalizedLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
password = ""

function getRandomNumber(item) {
    return Math.floor(Math.random() * item.length) 
}

function getPasswords() {
    document.getElementById('pw1').style.color = "#10B981"
    document.getElementById('pw2').style.color = "#10B981"
    document.getElementById('pw3').style.color = "#10B981"
    document.getElementById('pw4').style.color = "#10B981"
    document.getElementById("pw1").value = makePassword()
    document.getElementById("pw2").value = makePassword()
    document.getElementById("pw3").value = makePassword()
    document.getElementById("pw4").value = makePassword()
}

function makePassword() {
    password = ""
    for (let c = 0; c < 3; c++) {
        password += smallLetters[getRandomNumber(smallLetters)]
        password += characters[getRandomNumber(characters)]
        password += capitalizedLetters[getRandomNumber(capitalizedLetters)]
        password += numbers[getRandomNumber(numbers)]
    }
    return password
}