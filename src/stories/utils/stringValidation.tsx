// Functions to validate strings

export function validateEmail(email: string | any) {
    const regex = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}){1,}$/;
    return regex.test(email);
  }

export function validatePhoneNumber(phoneNumber: string | any) {
    const regex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    return regex.test(phoneNumber);
}

export function validateUrl(url: string | any) {
    const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return regex.test(url);
}