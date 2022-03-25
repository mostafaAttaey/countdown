let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septamber",
    "October",
    "November",
    "December"
]
let weekDays=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday"
]

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
let items = document.querySelectorAll(".deadline-format h4");


let futureDate = new Date(2022,2,25,7,30,0,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minute = futureDate.getMinutes();
const date = futureDate.getDate();

let month = months[futureDate.getMonth()];
let weekday = weekDays[futureDate.getDay()];

giveaway.textContent = `gifts ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minute}am`;

function getRemaindingTime(){
    // get us the present time in miliseconds
    let today = new Date().getTime();

    let t = futureDate - today;
    // we have to store a day a hour a minute in miliseconds unit.
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t %oneMinute )/ 1000);

    // console.log(days)
    // console.log(hours)
    // console.log(minutes)
    // console.log(seconds)

    let values = [days, hours, minutes, seconds]

    // this is just a prototype for foramting our timer.
    function format(item){
        if(item < 10){
            item = `0${item}`
            return item;
        }
        return item;
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index])
    });

    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class = "expired">sorry, this giveaway has expired!</h4>`;
    }
}
let countdown = setInterval(getRemaindingTime, 1000);

getRemaindingTime()