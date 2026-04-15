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
const regex = /^[a-z0-9]+$/i
const tested=regex.test(password)


const ascedence=(pass)=>{
pass=pass.replace(/[^0-9]/g,'')
  let ascend=0;
  let descend=0
  for(let i=0;i<pass.length-1;i++){
    if(Number(pass[i])-1===Number(pass[i+1])){
      ascend++
      descend=0
    }
    else if(Number(pass[i])+1===Number(pass[i+1])){
      descend++
    ascend=0}
      else {
        descend=0
      ascend=0}
        if(ascend>=3 || descend>=3) return false

  }
    
    return true
}
if(!ascedence(password)) return false
if(password.length!==10)return false
if(tested!==true) return false 
if(forbiddenPasswords.includes(password)) return false
if(password.split('').every(char=>/[a-z]/gi.test(char))) return false
if (password === password.toLowerCase() || password === password.toUpperCase()) return false;  
const setOfPassword = new Set(password.split(''));
  if (setOfPassword.size < 4) return false;
  return true;
}


