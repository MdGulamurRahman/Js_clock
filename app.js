const secondHand = document.querySelectorAll(".hand")[2];
const minuteHand = document.querySelectorAll(".hand")[1];
const hourHand = document.querySelectorAll(".hand")[0];

setInterval(clock, 1000);
let a = 0;
function clock(){
    const date = new Date();
    const seccond = date.getSeconds() / 60;
    const minute = (seccond + date.getMinutes()) / 60;
    const hour = (minute + date.getHours()) / 12;
   
    secondHand.style.transform = `translate(-50%) rotate(${seccond * 360}deg)`;
    minuteHand.style.transform = `translate(-50%) rotate(${minute * 360}deg)`;
    hourHand.style.transform = `translate(-50%) rotate(${hour * 360}deg)`;
   
}