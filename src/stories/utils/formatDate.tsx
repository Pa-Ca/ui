
import padTo2Digits from "./pad2Digits"
/**
 * Formats a Date object into a string in the format DD/MM/YYYY.
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted date string.
 *
 * Example:
 * date = new Date("2023-09-14T12:46:05Z");
 * console.log(formatDate(date));  // Output: "14/09/2023"
 */
export default function formatDate(date: Date) {
    return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join(
        "/"
    );
}

