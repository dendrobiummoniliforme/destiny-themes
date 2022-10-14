/**
 * @description is a wrapper on console.log(). It is a utility for 
 * a common JSON display solution.
 * @param string value 
 * @see https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object
 */
export const log = (value) => { 
    console.log(
        JSON.stringify(value, null, 4)
    );
}

/**
 * 
 * @param {*} value 
 */
export const error = (value) => {
    throw new Error(
        JSON.stringify(value, null, 4)
    );
}
