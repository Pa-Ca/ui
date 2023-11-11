/**
 * Formats a Date object into a 12-hour format string.
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted time in 12-hour format.
 *
 * Example:
 * let date = new Date("2023-09-14T12:46:05Z");
 * console.log(formatAMPM(date));  // Output: "12:46 PM"
 */
export default function formatAMPM(date: Date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let strMinutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + strMinutes + " " + ampm;
    return strTime;
}
