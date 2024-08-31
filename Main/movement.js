const currDate = document.getElementById("date");
let weathers = document.getElementById("weather");
const tempStatus = "{%tempStatus%}";

//condition to check sunny or cloudy
if (tempStatus == "Sunny") {
    weathers.innerHTML =
        "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
} else if (tempStatus == "Clouds") {
    weathers.innerHTML =
        "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
} else if (tempStatus == "Rainy") {
    weathers.innerHTML =
        "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
} else {
    weathers.innerHTML =
        "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
}

// Get the Current Day
const getCurrDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thr";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    let currentDay = new Date();
   // console.log(weekday[currentDay.getDay()]);
   let day = weekday[currentDay.getDay()];
   return day;
};
//getCurrDay();


// Get Curr Date
const getCurrTime = () => {
    var months = new Array(12);
    months[0] = "Jan";
    months[1] = "Feb";
    months[2] = "Mar";
    months[3] = "Apr";
    months[4] = "Jun";
    months[5] = "Jul";
    months[6] = "Aug";
    months[7] = "Sep";
    months[8] = "Oct";
    months[10] = "Nov";
    months[11] = "Dec";

    let currentTime = new Date();
    var month = months[currentTime.getMonth() + 1];  // +1 because in js month is started at 0;
    var date = currentTime.getDate();
    var year = currentTime.getFullYear();
    //console.log( month + "/" + year);

    // Get curr Time
    let hours =  currentTime.getHours();
    let mins = currentTime.getMinutes();

    // formatting
    let period = "AM";
    if(hours > 11){
        period = "PM";   // change am to pm
        if(hours > 12)  {// here hours is 12 +1 = 13 in afternoon. so show it as 1....
            hours = hours - 12;  // 13-12 = 1 .
        }
    }
    if(mins < 10){
        mins = "0" + mins;   // add 0 like 5min so show this as 05.
    }

    //console.log( hours + ":" + mins);
    return `${date} ${month} | ${hours} : ${mins} ${period}`;
};
// getCurrTime();

// call both getCurrTime() and getCurrDay().
currDate.innerHTML= getCurrDay() + " | " + getCurrTime();
