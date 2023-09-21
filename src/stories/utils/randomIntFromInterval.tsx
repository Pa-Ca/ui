/**
 * Generates a random integer within a given interval [min, max].
 * @param {number} min - The lower bound of the interval.
 * @param {number} max - The upper bound of the interval.
 * @returns {number} A random integer within the interval [min, max].
 *
 * Example:
 * let min = 1, max = 10;
 * console.log(randomIntFromInterval(min, max));  // Output: Random integer between 1 and 10
 */
export default function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
