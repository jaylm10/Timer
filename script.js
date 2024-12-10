document.getElementById("time").innerText = "0";

let i = 0;
let intervalId = null; // To store the interval ID

document.querySelector(".start").addEventListener("click", () => {
    if (!intervalId) { 
        intervalId = setInterval(() => {
            document.getElementById("time").innerText = i;
            i++;
        }, 1000);
    }
});

document.querySelector(".stop").addEventListener("click", () => {
    if (intervalId) { 
        clearInterval(intervalId);
        intervalId = null; 
    }
});

document.querySelector(".reset").addEventListener("click", () => {
    i = 0;
    document.getElementById("time").innerText = "0";
    if (intervalId) {
        clearInterval(intervalId); 
        intervalId = null;
    }
});


document.getElementById("submit").addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    document.querySelector(".container").style.backgroundColor = input;
    document.getElementById("input").value=  ""
    
})
