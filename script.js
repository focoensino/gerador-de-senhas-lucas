const inputPassword = document.querySelector('#password')

const inputlength = document.querySelector('#password-length')

const uppercaseCheckEl = document.querySelector("#uppercase-check")

const numberCheckEl = document.querySelector("#number-check")

const simbolCheckEl = document.querySelector("#simbol-check")

const securityIndicatorBarEl = document.querySelector('#security-indicator-bar')

document.querySelector('#copy-1').addEventListener('click',copy)
document.querySelector('#copy-2').addEventListener('click',copy)


let inputlengthvalue = 16


function generatePassword(){
    let chars = "abcdefghjkmnpqrstuvwxyz"
    const uppercaseChar = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numberChar ="123456789"
    const simbolChar = "?!@&*()[]"

if(uppercaseCheckEl.checked){
chars += uppercaseChar
    
}
if(numberCheckEl.checked){
    chars += numberChar
        
    }
if(simbolCheckEl.checked){
            chars += simbolChar
            
        }



let password = ''

for(let i = 0; i < inputlengthvalue; i++){

    const randomNumber = Math.floor(Math.random()* chars.length)
    password += chars.substring(randomNumber,randomNumber+1)

}



inputPassword.value=password

calculateQuality()
calculateFontSize()

}

function calculateQuality(){
const percent = Math.round((inputlengthvalue / 64)*25 + (uppercaseCheckEl.checked ? 25: 0) + (numberCheckEl.checked ? 25: 0) + (simbolCheckEl.checked ? 25: 0))
securityIndicatorBarEl.style.width = ` ${percent}% ` 

if(percent > 70){
securityIndicatorBarEl.classList.add("safe")
securityIndicatorBarEl.classList.remove("warning")
securityIndicatorBarEl.classList.remove("critical")

}else if(percent > 50){
securityIndicatorBarEl.classList.remove('safe')
securityIndicatorBarEl.classList.add("warning")
securityIndicatorBarEl.classList.remove("critical")

}else{
securityIndicatorBarEl.classList.remove('safe')
securityIndicatorBarEl.classList.remove("warning")
securityIndicatorBarEl.classList.add("critical")




}

if(percent >= 100){
securityIndicatorBarEl.classList.add("completed")

}else{securityIndicatorBarEl.classList.remove("completed")

}

}

function calculateFontSize(){
if(inputlengthvalue > 45){
inputPassword.classList.add("font-xs")
inputPassword.classList.remove("font-sm")
inputPassword.classList.remove("font-md")
}else if(inputlengthvalue > 30){
    inputPassword.classList.remove("font-xs")
    inputPassword.classList.add("font-sm")
    inputPassword.classList.remove("font-md")
}else if(inputlengthvalue > 20){
inputPassword.classList.remove("font-xs")
inputPassword.classList.remove("font-sm")
inputPassword.classList.add("font-md")

}else {
    inputPassword.classList.remove("font-xs")
    inputPassword.classList.remove("font-sm")
    inputPassword.classList.remove("font-md")
}

}




uppercaseCheckEl.addEventListener('click',generatePassword)
numberCheckEl.addEventListener('click',generatePassword)
simbolCheckEl.addEventListener('click',generatePassword)



function copy(){

    navigator.clipboard.writeText(inputPassword.value)


    }


inputlength.addEventListener('input',function(){

    inputlengthvalue = inputlength.value

    generatePassword()
    calculateQuality()
    document.querySelector("#password-length-text").innerText = inputlengthvalue

    

} )


generatePassword()
calculateQuality()