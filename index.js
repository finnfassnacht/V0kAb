function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function getRandomArbitrary() {
    return Math.random() * (5 - 0) + 0;
}
s_vokab = ["la cama","el hombre","el padre"]
ger_vokab = ["the bed","the man", "the father"]
var vokab_num = 0
var pro_bar_add_xx = s_vokab.length;
var pro_bar_add_x = (100 / pro_bar_add_xx)
var pro_bar_add = 0

document.getElementById("report_card").style.visibility = "hidden";
document.getElementById("x_info_card").style.visibility = "hidden";
document.getElementById("vokab_card").innerText = (s_vokab[vokab_num])

document.getElementById("user_in")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});

function submit() {
    document.getElementById("report_card").style.visibility = "hidden";
    document.getElementById("x_info_card").style.visibility = "hidden";
    var user_in = document.getElementById("user_in").value;
    var user_in = user_in.trim()
    document.getElementById("report_card").style.visibility = "visible";
    if (user_in != (ger_vokab[vokab_num])) {
        s_vokab.push(s_vokab[vokab_num])
        ger_vokab.push(ger_vokab[vokab_num])
        document.getElementById("report").innerText = "Wrong";
        document.getElementById("report").style.color = "red";
        document.getElementById("x_info_card").style.visibility = "visible";
        document.getElementById("x_info").innerText = (ger_vokab[vokab_num])
    }
    else {
        document.getElementById("report").innerText = "Correct";
        document.getElementById("report").style.color = "#5cdb95";
        pro_bar_add += pro_bar_add_x
        document.getElementById("progress-bar").style = ("width: " + (parseInt(pro_bar_add)) + "%") 
    }
    vokab_num = (vokab_num + 1)
    document.getElementById("vokab_card").innerText = (s_vokab[vokab_num])
    document.getElementById("user_in").value = ""
    if (typeof s_vokab[vokab_num] == "undefined") {
        document.getElementById("progress-bar").style = ("width: 100%") 
        document.getElementById("vokab_card").innerText = ("Fertig !") 
    }
}
console.log("Devd by Finn")
