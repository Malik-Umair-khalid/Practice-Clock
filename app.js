

function time() {
    var tohours = document.getElementById("hours")
    var tomins = document.getElementById("minuts")
    var tosecs = document.getElementById("seconds")
    var sessions = document.getElementById("session")

    var date = new Date()
    var hours = date.getHours();
    var secs = date.getSeconds();
    var mins = date.getMinutes();

    if(hours > 12){
        hours = hours - 12;
        sessions.innerText = "PM" 
    }
    if(hours < 12){
        sessions.innerText = "AM"
    }

    secs = (secs < 10) ? '0' + secs : secs;
    mins = (mins < 10) ? '0' + mins : mins;
    hours = (hours < 10) ? '0' + hours : hours;


    tohours.innerText = hours;
    tomins.innerText = mins;
    tosecs.innerText = secs;


    setTimeout(time, 1000)
}
time()







