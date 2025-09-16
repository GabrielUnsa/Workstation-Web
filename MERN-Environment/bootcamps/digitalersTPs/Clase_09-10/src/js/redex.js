//Prueba de validez con lenguaje regular para numero de telefono
/* const re = /\(\d{3}\)\s\d{4}\s\d{2}-\d{2}/;
console.log(re.test('(011) 2233 44-75')); */

const nameRe = /^[A-Za-z]{4,25}$/;
const emailRe = /\w+\@\w+\.\w+/;
const passRe = /^[A-Za-z0-9_\-*\.]{8,16}/;

/**
 * Validate Name
 * @date 2025-04-08
 * @param {string} name the name to be validated
 * @return {boolean} The name validation
 */
const validateName = (name) => {
    return nameRe.test(name);
};
/**
 * Validate Email
 * @date 2025-04-08
 * @param {string} email the email to be validated
 * @return {boolean} The email validation
 */
const validateEmail = (email) => {
    return emailRe.test(email);
};
/**
 * Validate Password
 * @date 2025-04-08
 * @param {string} pass the password to be validated
 * @return {boolean} The password validation
 */
const validatePassword = (pass) => {
    return passRe.test(pass);
};