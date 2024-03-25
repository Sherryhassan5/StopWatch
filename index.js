let time = 0;
let interval;
let altBtn = document.getElementById("altBtn");
let resetBtn = document.getElementById("resetBtn");
let display = document.getElementById("display");

startTime = () => {
    altBtn.innerHTML = "Stop";
    altBtn.style.background = "blue";
    if(interval){
        clearInterval(interval);
    }
    
    interval = setInterval(()=>{
        time += 1;
        display.innerHTML = Math.floor(time / 3600).toString().padStart(2,"0") + ":" + Math.floor((time%3600)/60).toString().padStart(2,"0") + ":" + Math.floor(time%60).toString().padStart(2,"0")
    },1000);
    
}
stopTime = () => {
    altBtn.innerHTML = "Start";
    altBtn.style.background = "rgb(1, 75, 1)";
    clearInterval(interval);
    interval = null;
}
altBtn.onclick = () => {
    if(interval){
        stopTime();
    }
    else{
        startTime();
    }
}
resetBtn.onclick = () => {
    altBtn.innerHTML = "start";
    altBtn.background = "rgb(1, 75, 1)";
    if(interval){
        clearInterval(interval);
    }
    interval = null;
    time = 0;
    display.innerHTML = "00:00:00";
}