var min = 0;

var sec = 0;

var count = 0;

var timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("min").innerHTML= "00"
    document.getElementById("sec").innerHTML= "00"
    document.getElementById("count").innerHTML= "00"
}

function stopwatch() {
    if (timer == true) {
         count = count + 1;

         if(count == 100){
            sec = sec + 1;
            count = 0;
         }
         if(sec == 60){
            min = min + 1;
            sec = 0;
            count = 0;
         }
        document.getElementById("min").innerHTML=min< 10 ? "0" + min : min;;
        document.getElementById("sec").innerHTML=sec< 10 ? "0" + sec : sec;;
        document.getElementById("count").innerHTML=count< 10 ? "0" + count : count;;
        setTimeout ( stopwatch, 10 );
    }
}