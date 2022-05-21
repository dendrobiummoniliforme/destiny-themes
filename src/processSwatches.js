/**
 * Author: dendrobiumoniliforme.
 * Date: 2022, 05, 21.
 * This file is used to generate a processed swatches array based off of a provided swatches.theme file.
 */
import * as log from "./log.js"
import * as fs from 'fs';

/**
 * @param {number} maxIntegerValue 
 * @returns A random integer.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
const getRandomInt = (maxIntegerValue) => { 
    log.print("getRandomInt()\n");
    return Math.floor(Math.random() * maxIntegerValue);
}
 
/**
 * @function getSwatches() Sets the file for swatches and splits it into an array.
 * @param {string} fileDirectory 
 * @returns An array of strings.
 */
const getSwatches = (fileDirectory) => {
    log.print("getSwatches()\n");
    return (fs.readFileSync(fileDirectory, 'utf8')).split('\n');
}

/**
 * @function removeSwatchHex() removes the swatch that is set 
 * for the editor background from the swatches array.
 * @param {string[]} swatches 
 * @param {string} swatchHex 
 * @returns An array of strings.
 */
const removeSwatchHex = (swatches, swatchHex) => {
    log.print("removeSwatchHex()\n");
    // Make editor.background unique.
    // This _at least_ prevents text from landing on the same color as the background.
    return swatches.map((entity) => {
        if (entity != swatchHex) {
            return entity;
        }
    });
}

/**
 * @function getProcessedSwatches() reads in the swatches file present in your src/ directory.
 * It then generates and extracts the background editor swatch from the swatches file.
 * @returns An array of strings representing the swatches after processing out the backgroun editor hex.
 */
export const get = () => {
    log.print("getProcessedSwatches()\n");
    // 1. Get the swatches.
    // 2. Extract the background swatch from the original swatches array.
    // 3. Log the output.
    const swatches =  getSwatches(process.cwd() + "/src/swatches.theme");
    const maxIntegerValue = swatches.length;
    const editorBackground = swatches[getRandomInt(maxIntegerValue)];

    return removeSwatchHex(swatches, editorBackground);
}
