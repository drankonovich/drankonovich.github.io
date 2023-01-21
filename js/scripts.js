document.getElementById("playgame").style.display = "none";
document.getElementById("congratulation").style.display = "none";
document.getElementById("list").style.display = "none";


function submit_password() {
    passcode = document.getElementById("password").value;
    if (passcode == "1thangiuklinh") {
        alert("Hehe đúng rồi iu klinh nhiều 😘");
        document.getElementById("verification").style.display = "none";
        document.getElementById("playgame").style.display = "block";
    }
    else {
        alert("sai òi 😭 thử lại ik")
    }
}

function swap_text_1() {
    elem = document.getElementById("btn_1");
    pp = elem.innerText;
    if (pp == "Klinh") {
        document.getElementById("btn_1").innerHTML = "Phát"
        document.getElementById("btn_1").style.background = "darkslategray"
        document.getElementById("btn_1").style.color = "white"
        document.getElementById("btn_2").innerHTML = "Klinh"
        document.getElementById("btn_2").style.background = "whitesmoke"
        document.getElementById("btn_2").style.color = "black"

    }
}

function swap_text_2() {
    elem = document.getElementById("btn_2");
    pp = elem.innerText;
    if (pp == "Klinh") {
        document.getElementById("btn_2").innerHTML = "Phát"
        document.getElementById("btn_2").style.background = "darkslategray"
        document.getElementById("btn_2").style.color = "white"
        document.getElementById("btn_1").innerHTML = "Klinh"
        document.getElementById("btn_1").style.background = "whitesmoke"
        document.getElementById("btn_1").style.color = "black"
    }
}

function correct() {
    document.getElementById("playgame").style.display = "none";
    document.getElementById("congratulation").style.display = "block";
}

function load_list() {
    document.getElementById("congratulation").style.display = "none";
    document.getElementById("list").style.display = "block";

}