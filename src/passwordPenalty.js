/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  //

const consecCount={}
let count=0
for(let i=0;i<password.length;i++){
  if(password[i]===password[i+1]){
    count++
  }
  else{
    const key=`${password[i]}${i}`
    consecCount[key]=(consecCount[key] ||count)+1
    count=0
  }


}
 console.log(consecCount)

const points=Object.values(consecCount).reduce((a,c)=>a +(c===1?0:c===2?2:3),0)
return points
}
