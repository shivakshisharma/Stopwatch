let timer;
let hour=0;
let min=0;
let sec=0;

function startStopwatch() {
    console.log("Start button clicked");
    timer = setInterval(incrementTimer, 1000);
}

function pauseStopwatch(){
    clearInterval(timer);
}
function resetStopwatch(){
    clearInterval(timer);
    hour=0;
    sec=0;
    min=0;
    document.getElementById("stopwatch").innerText="00:00:00";

}

function incrementTimer(){
    sec++;
    if(sec===60)
        {
            min++;
            sec=0;

        }
        if(min===60)
            {
                hour++;
                min=0;
            }
      const formattedTime = `${pad(hour)}:${pad(min)}:${pad(sec)}`;
     document.getElementById("stopwatch").innerText = formattedTime;
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}