let time = document.getElementById("timer");
let qdisplay = document.getElementById("quoteDisplay");
let qinput = document.getElementById("quoteInput");
let sbtn = document.getElementById("submitBtn");
let res = document.getElementById("result");
let rbtn = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

function req() {
    spinnerEl.classList.add("d-none");
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData.content);

            qdisplay.textContent = jsonData.content;
        });
}
let counter = 0;
let uni = setInterval(function() {
    time.textContent = counter;
    counter = counter + 1;
}, 1000);
req();
rbtn.onclick = function() {
    clearInterval(uni);
    req();
    qinput.value = "";
    res.textContent = "";
    counter = 0;
    uni = setInterval(function() {
        time.textContent = counter;
        counter = counter + 1;
    }, 1000);
}
sbtn.onclick = function() {
    spinnerEl.classList.remove("d-none");
    setTimeout(function(){
        spinnerEl.classList.add("d-none");
    },1000);
    clearInterval(uni);
    if (qdisplay.textContent === qinput.value) {
        console.log(qdisplay.textContent);
        console.log(qinput.textContent);
        spinnerEl.classList.add("d-none");
        res.textContent = "You typed in " + counter + " seconds";
    } else {
        res.textContent = "You typed incorrect sentence";
    }
}