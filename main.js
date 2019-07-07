let a = "Hello ";
let b = prompt("What is your name?");
let c = ", nice to meet you. You are not in my database";

if(b === 'Eli') {
    c = ", you are in my database as a cool dude"
}

if(b === 'Oliver') {
    c = ", you are in my database so I am happy 😀"
}

if(b === 'Gwyn') {
    c = " you are in my database as a dude"
}

alert(a + b + c);