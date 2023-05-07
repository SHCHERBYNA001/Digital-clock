window.addEventListener('load', colculateTime) //для отображения 

function colculateTime(){
    let date = new Date();
    let dayNumber = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    let dayNames = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(colculateTime, 200); //вызывавет эту фун. каждые 200 милисекунд а не 1 раз
}
