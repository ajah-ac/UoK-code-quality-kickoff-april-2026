export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * YOUR CODE GOES IN HERE ... * * *
  /*
    if (password is not exactly 10 digits or characters...) {
     return ...;
   }
   *
   * if (is not composed by digits and numbers) {
   *   return ...;
   * }
   */
  const regex=/[a-zA-z0-9]/gi
const tested=regex.test(password)

if(password.length!==10){
  return false
}

if(tested!==true){
  return false

}
if(forbiddenPasswords.includes(password)) return false

if(password.split('').every(e=>e===e.toLowerCase() || e===e.toUpperCase())) return false

  const setOfPassword = new Set(password.split(''));
  if (setOfPassword.size < 4) return false;
  return true;
}

