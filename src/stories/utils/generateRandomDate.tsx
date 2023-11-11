/**
 * Generates a random Date object within the last 5 days.
 * @returns {Date} The generated random date.
 *
 * Example:
 * console.log(generateRandomDate());  // Output: Random date within the last 5 days
 */
export default function generateRandomDate(): Date {
    const from = new Date();
    from.setDate(from.getDate() - 5);
    return new Date(from.getTime() + Math.random() * (new Date().getTime() - from.getTime()));
}

