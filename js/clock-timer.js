"use strict";

window.onload = function(){
    setInterval(myTimer, 1000);

    function myTimer(){
        const date = new Date();
        const displayDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

        document.getElementById("dateTimeShow").innerHTML = displayDate;
      
    }
}