

function timer(){
let d=new Date();
let time_hours=d.getHours();
let time_minutes=d.getMinutes();
let time_seconds=d.getSeconds();


hours=document.getElementById("hour");
minutes=document.getElementById("minute");
seconds=document.getElementById("second");
    seconds.style=`transform: rotate(${time_seconds*6}deg)`;
    minutes.style=`transform: rotate(${time_minutes*6}deg)`;
    hours.style=`transform: rotate(${time_hours*30}deg)`;

d_hours=document.getElementById("d_hour")    
d_minutes=document.getElementById("d_minute")    
d_seconds=document.getElementById("d_second")
d_hours.innerText=`${time_hours}`    
d_minutes.innerText=`${time_minutes}`    
d_seconds.innerText=`${time_seconds}`    
}

setInterval(timer,1000);