
/**
 * Pads a number to two digits.
 * @param {number} num - The number to be padded.
 * @returns {string} The padded number as a string.
 *
 * Example:
 * let num = 5;
 * console.log(padTo2Digits(num));  // Output: "05"
 */
export default function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
}