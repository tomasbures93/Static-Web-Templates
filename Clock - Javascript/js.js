function darkmode(){
    if (document.querySelector("body").classList != "dark"){
        document.querySelector("body").classList.add("dark");
        document.querySelector(".switch").innerHTML = '<i class="fas fa-sun" onclick="darkmode()"></i>';
    } else {
        document.querySelector("body").classList.remove("dark");
        document.querySelector(".switch").innerHTML = '<i class="fas fa-moon" onclick="darkmode()"></i>';
    }
}

function showTime(){
    var time = new Date();
    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hours = time.getHours();
    document.querySelector(".second").innerHTML = seconds;
    document.querySelector(".minute").innerHTML = minutes;
    document.querySelector(".hour").innerHTML = hours;

    if (seconds < 10){
        document.querySelector(".second").innerHTML = "0" + seconds; 
    }
    if (minutes < 10){
        document.querySelector(".minute").innerHTML = "0" + minutes; 
    }
    if (hours < 10){
        document.querySelector(".hour").innerHTML = "0" + hours; 
    }
}

setInterval(showTime, 1000);