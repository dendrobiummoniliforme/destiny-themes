/**
  * @function getRandomInt()
  * @param number maxIntegerValue 
  * @returns A random integer.
  * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  */
 export const getRandomInt = (maxIntegerValue) => { 
    return Math.floor(Math.random() * maxIntegerValue);
}