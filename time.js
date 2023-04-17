let hour = document.getElementById("hour");
let mint = document.getElementById("mint");
let second = document.getElementById("second");
function getTime() {
    let today = new Date();
    hour.innerHTML = today.getHours();
    mint.innerHTML = today.getMinutes();
    second.innerHTML= today.getSeconds(); 
}
setInterval(getTime, 1000)