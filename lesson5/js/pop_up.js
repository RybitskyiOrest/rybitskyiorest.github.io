const day = new Date();
console.log(day);
const dayNumber = day.getDay();
console.log(dayNumber);
const result = document.getElementById("pop_up");
if (dayNumber == 5) {
    result.classList.add("pop_up");
} else {
    result.classList.add("hide");
}