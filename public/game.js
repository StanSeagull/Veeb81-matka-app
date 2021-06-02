

const loom = document.getElementById("loom");
const puu = document.getElementById("kivi");

document.addEventListener("keyup", function(event) {
    jump();
})

function jump() {
    if (loom.classList != "jump") {
        loom.classList.add ("jump")
    }
    setTimeout(function() {
        loom.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval (function() {
    let loomTop = parseInt(window.getComputedStyle(loom).getPropertyValue("top"));
    let puuLeft = parseInt(window.getComputedStyle(kivi).getPropertyValue("left"));

    if (puuLeft <90 && puuLeft > 0 && loomTop >= 250) {
        alert ("GAME OVER!!!")
    }
}, 30)

console.log("test")


document.addEventListener("DOMContentLoaded", function() {
    fields.Name = document.getElementById('Nname');
    fields.Mail = document.getElementById('Mmail');
    fields.Question = document.getElementById('Question');
   })

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }   

function isEmail(mail) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(mail).toLowerCase());
   }   

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }   

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.Nname, isNotEmpty);
    valid &= fieldValidation(fields.Mmail, isEmail);
    valid &= fieldValidation(fields.Question, isNotEmpty);
   
    return valid;
   }

class User {
    constructor(Nname, Mmail, Question) {
    this.Nname = Nname;
    this.Mmail = Mmail;
    this.Question = Question;
    }
   }

 function sendContact() {
     if (isValid()) {
        let usr = new User(Nname.value, Mmail.value, Question.checked);

        alert(`${usr.Nname} thanks for your message.`)

     } else {
         alert("Error")
     
    }
}