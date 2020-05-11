// JavaScript File
function input() {
    let age = document.getElementById("textbox1").value;
    let day = document.getElementById("textbox2").value;
    if ((age >= 12 && age < 21) && (day == "Tuesday" || day == "Friday")) {
        alert("You are able to go to the museum with a 50% discount!");
    } else {
        alert("You must pay the regular price");
    }
}


