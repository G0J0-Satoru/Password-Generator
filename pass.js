const passwordBox = document.getElementById("password");
//select input box 

const length = 12;
//password length to be generated

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";


const number = "0123456789";

const symbol = "@#$%^&*()_+`|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;




function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


    while(length > password.length){

        password += allChars[Math.floor(Math.random() * allChars.length)];

    }

    passwordBox.value = password;




}


function copyPassword() {


    passwordBox.select();
    document.execCommand("copy");

}

    
/*
let sw = 2;

switch (sw) {

    case 1:


    console.log('THE VALUE IS 1');

    break;
    
    case 2:
        console.log("Case 2");

    break;

    default:

    console.log(`${sw}, IS NOT A MATCHIG CASE`);


}*/
/*
sum(total, 1, 5);


function sum(callback, x , y) {

    let result = x + y;
    callback(result);

}


function total(result){

    console.log(result);


}*/