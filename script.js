var num = [];
var pLength = parseInt(prompt("how long you want your password between 8 to 128 ?"));
alert("Click ok if you agree!");
var password = ("");

var num = [];
var pLength = parseInt(prompt("How long do you need your Password be?(Enter number from 8-128)"));
alert("Press Generate Password to go!");
var password = ("");

//Generate random special
function ranSpec() {
    var sStr = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ '"
    return sStr[Math.floor(sStr.length * Math.random())];
};

//Generate random lowercase character
function ranLChar() {
    var cStr = "abcdefghijklmnopqrstuvwxyz";
    return cStr[Math.floor(cStr.length * Math.random())];
}

//generate random uppercase character
function ranUChar() {
    var CaStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return CaStr[Math.floor(CaStr.length * Math.random())];
}

//generate random number
function ranNum() {
    var numStr = "0123456789";
    return numStr[Math.floor(numStr.length * Math.random())];
}


//confirm logic for the numbers of needed types
function passType() {
    if (confirm("include Special characters?")) {
        num.push(1);
    }

    if (confirm("include lowercase character?")) {
        num.push(2);
    }
    if (confirm("include uppercase character?")) {
        num.push(3);
    }
    if (confirm("include numbers?")) {
        num.push(4);
    }
}


//generate random function calls for given times
function generate() {
    for (i = 0; i < pLength; i++) {
        var temp = Math.floor(num.length * Math.random());
        var ge = num[temp];

        if (ge == 1) {
            password += ranSpec();
        } else if (ge == 2) {
            password += ranUChar();
        } else if (ge == 3) {
            password += ranLChar();
        } else if (ge == 4) {
            password += ranNum();
        }

    }
}

//Called from outside
var buttonT = document.querySelector("#generate");
var tag = document.querySelector("#password");
var copyC = document.querySelector("#copy");

buttonT.addEventListener("click", function() {
    tag.innerHTML = "";
    password = ("");
    num = [];
    passType();
    while (num.length == 0) {
        alert("Must select at least one character type for password")
        passType();
    }

    generate();
    tag.textContent = password;
});
copyC.addEventListener("click", function() {
    var copyText = document.getElementById("password");
    copyText.select();
    //copyText.setSelectionRange(0, 99999);
    document.execCommand("copy")
    alert(
        "Your password " + passwordText.value + " was copied to your clipboard.")
    
});

  
  

