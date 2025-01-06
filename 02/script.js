function getTime(){
    const now = new Date()
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();

    hour = hour < 10 ? "0"+hour : hour;
    minute = minute < 10 ? "0"+minute: minute;
    seconds = seconds < 10 ? "0"+seconds: seconds;

    const time = document.querySelector(".time").innerText = `${hour}:${minute}:${seconds}`

}
setInterval(getTime, 1000)
getTime()