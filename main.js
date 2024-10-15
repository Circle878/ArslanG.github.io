const passwordLength = document.getElementById('password-length')
const includeNumbers = document.getElementById('includes-numbers')
const includeSpecial = document.getElementById('includes-special-characters')
const includeUppercase = document.getElementById('includes-uppercase')
const generateBtn = document.querySelector('.generate-btn')
const passwordBtnCopy = document.querySelector('.copy-btn')
const passwordOutput = document.getElementById('passwordOutput')

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChars = '1234567890'
const specialChars = '!@#$%^&*()_+=-[]{};:,.?<>'


const generatePassword = () => {
    let password = ''
    let possibleChars = lowercaseChars

    if (includeNumbers.checked ) {
        possibleChars += numberChars
    }

    if (includeSpecial.checked ) {
        possibleChars += specialChars
    }

    if (includeUppercase.checked ) {
        possibleChars += uppercaseChars
    }

    for (let i = 0; i < passwordLength.value; i++) {
        let s = possibleChars[Math.floor(Math.random() * possibleChars.length)]
        password += s
    }
    passwordOutput.textContent = password
}
passwordOutput.textContent = ''
generateBtn.addEventListener('click', () => {
    generatePassword()
    passwordBtnCopy.textContent = 'CopyPassword'
})
passwordBtnCopy.addEventListener('click', () => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordOutput.textContent)
        passwordBtnCopy.textContent = 'Password Copied!'
    }
})
