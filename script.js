//function to run digital clock
function displayTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var period = document.getElementById('period');

    //Set time period (AM/PM)
    if(hours >= 12){
        period.innerHTML = 'PM';
    }else{
        period.innerHTML = 'AM';
    }

    //Set 12 hour clock format
    if(hours > 12){
        hours = hours - 12;
    }

    //Add 0 for number less than 10
    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }


    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(displayTime, 10);

//get today's date
var dateDay = new Date();
var weekday = dateDay.toLocaleString("default", {weekday: "long"});
var month = dateDay.toLocaleString("default", {month: "long"});
var day = dateDay.getDate();
var year = dateDay.getFullYear();

document.getElementById('weekday').innerHTML = weekday;
document.getElementById('month').innerHTML = month;
document.getElementById('day').innerHTML = day;
document.getElementById('year').innerHTML = year;