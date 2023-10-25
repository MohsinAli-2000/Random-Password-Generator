let pwdInput = document.getElementById("password");
let popUp = document.getElementById("popUp");
let length = 11;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
let lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
let numbers = "0123456789" ;
let symbols = "!@#$%^&*()?/~`><:" ;
let allChars = upperCase + lowerCase + numbers + symbols ;
let generatePassword = ()=>{
    let password = "" ;
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    pwdInput.value = password
}
let copyPassword = ()=>{
    pwdInput.select();
    document.execCommand("copy")
    popUp.style.display = "block";
    setTimeout(()=>{
        popUp.style.display = "none";
    }  , 1000);
}