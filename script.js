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

let giveaway = document.querySelector(".giveaway");

let future = new Date(2022,2,27,10,0,0,0);
let year = future.getFullYear();
let month = future.getMonth();
let day = future.getDay();
let hour = future.getHours();
giveaway.innerHTML = "gift ends on " + weekDays[day]+ " " + months[month]+" "+ year + " " + hour+":00";

