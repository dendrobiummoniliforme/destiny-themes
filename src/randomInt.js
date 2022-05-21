import * as log from "./log.js";

/**
* @param {number} maxIntegerValue 
* @returns A random integer.
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
export const get = (maxIntegerValue) => { 
    log.print("getRandomInt()\n");
    return Math.floor(Math.random() * maxIntegerValue);
}
