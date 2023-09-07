function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}


function getCurrentLocalTime() {
    const currentDate = new Date();
    const time = currentDate.getTime();
    return time;
}


document.addEventListener("DOMContentLoaded", function () {
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentDayElement.textContent = getCurrentDayOfWeek();
    currentUTCTimeElement.textContent = getCurrentLocalTime();
});
