function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}


function getCurrentLocalTime() {
    const currentDate = new Date();
    const offsetMinutes = 60;
    currentDate.setUTCMinutes(currentDate.getUTCMinutes() + offsetMinutes);
    const hours = currentDate.getUTCHours();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const time = `${formattedHours}:${minutes} ${amOrPm}`;

    return time;
}


document.addEventListener("DOMContentLoaded", function () {
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentDayElement.textContent = getCurrentDayOfWeek();
    currentUTCTimeElement.textContent = getCurrentLocalTime();
});
