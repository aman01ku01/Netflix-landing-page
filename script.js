//======================language button====================

let langbtn = document.getElementsByClassName("bttn")[0]
let lang = document.getElementsByClassName("log")[0];
let drop = document.getElementsByClassName("drop-language")[0];


lang.addEventListener("click", ()=>{
    drop.classList.toggle("drop-language-show")
  
})

document.addEventListener('click', (event) => {
    if (!event.target.closest('.language')) {
        const dropdown = document.querySelector('.drop-language');
        dropdown.classList.remove('drop-language-show');
    }
});

langbtn.addEventListener("click", ()=>{
    langbtn.classList.toggle("bttn-toggle")
})

document.addEventListener('click', (event) => {
    if (!event.target.closest('.language')) {
        const btn = document.querySelector('.bttn');
        btn.classList.remove('bttn-toggle');
    }
});

// =======================for Ques=============================

$("#plus").click(function () {
    $("#q1").slideDown(500)
})

$("#cross").click(function () {
    $("#q1").slideUp(500)
})

document.getElementById("plus").addEventListener("click", chng)
document.getElementById("cross").addEventListener("click", chng2)

function chng(){
    this.style.display="none"
    document.getElementById("cross").style.display="block"
}

function chng2(){
    this.style.display="none"
    document.getElementById("plus").style.display="block"
}

// ========================for quess2  1==========================

$("#plus2").click(function () {
    $("#q2").slideDown(500)
})

$("#cross2").click(function () {
    $("#q2").slideUp(500)
})

document.getElementById("plus2").addEventListener("click", ch1)
document.getElementById("cross2").addEventListener("click", ch2)

function ch1(){
    this.style.display="none"
    document.getElementById("cross2").style.display="block"
}

function ch2(){
    this.style.display="none"
    document.getElementById("plus2").style.display="block"
}

// ========================for quess2  2===========================

$("#plus3").click(function () {
    $("#q3").slideDown(500)
})

$("#cross3").click(function () {
    $("#q3").slideUp(500)
})

document.getElementById("plus3").addEventListener("click", ch3)
document.getElementById("cross3").addEventListener("click", ch4)

function ch3(){
    this.style.display="none"
    document.getElementById("cross3").style.display="block"
}

function ch4(){
    this.style.display="none"
    document.getElementById("plus3").style.display="block"
}

// ========================for quess2  3===========================

$("#plus4").click(function () {
    $("#q4").slideDown(500)
})

$("#cross4").click(function () {
    $("#q4").slideUp(500)
})

document.getElementById("plus4").addEventListener("click", ch5)
document.getElementById("cross4").addEventListener("click", ch6)

function ch5(){
    this.style.display="none"
    document.getElementById("cross4").style.display="block"
}

function ch6(){
    this.style.display="none"
    document.getElementById("plus4").style.display="block"
}

// ========================for quess2  4===========================

$("#plus5").click(function () {
    $("#q5").slideDown(500)
})

$("#cross5").click(function () {
    $("#q5").slideUp(500)
})

document.getElementById("plus5").addEventListener("click", ch7)
document.getElementById("cross5").addEventListener("click", ch8)

function ch7(){
    this.style.display="none"
    document.getElementById("cross5").style.display="block"
}

function ch8(){
    this.style.display="none"
    document.getElementById("plus5").style.display="block"
}

// ========================for quess2  5===========================

$("#plus6").click(function () {
    $("#q6").slideDown(500)
})

$("#cross6").click(function () {
    $("#q6").slideUp(500)
})

document.getElementById("plus6").addEventListener("click", ch9)
document.getElementById("cross6").addEventListener("click", ch10)

function ch9(){
    this.style.display="none"
    document.getElementById("cross6").style.display="block"
}

function ch10(){
    this.style.display="none"
    document.getElementById("plus6").style.display="block"
}