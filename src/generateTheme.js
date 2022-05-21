/**
 * Author: dendrobiumoniliforme.
 * Date: 2022, 05, 13.
 * This file is used to generate a theme based off of a provided swatches.theme file.
 * Simply 
 * 	1. Create a swatches.theme file in ./ of your theme's directory.
 * 		I) Example swatches.theme:
 * 			#344D6B
 *			#3F4C81
 *			#140D36
 *			#B3B2C0
 * 	2. run `npm run theme` while in theme editing mode.
 */
import * as fs from 'fs';
import * as ri from './randomInt.js'
import * as t from './theme.js'

/**
 * @function log()
 * @description is a wrapper on console.log(). It is a utility for 
 * a common JSON display solution.
 * @param {string} value 
 * @see https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object
 */
const log = (value) => { 
    console.log(
        JSON.stringify(value, null, 4)
    );
}
 
/**
 * @function getSwatches()
 * @description Sets the file for swatches and splits it into an array.
 * @param {string} fileDirectory 
 * @returns An array of strings.
 */
const getSwatches = (fileDirectory) => {
    return (fs.readFileSync(fileDirectory, 'utf8')).split('\n');
}

/**
 * @function removeSwatchHex()
 * @description removes the swatch that is set 
 * for the editor background from the swatches array.
 * @param {string[]} swatches 
 * @param {string} swatchHex 
 * @returns An array of strings.
 */
const removeSwatchHex = (swatches, swatchHex) => {
     // Make editor.background unique.
    // This _at least_ prevents text from landing on the same color as the background.
    const response = [];
    for (let i = 0; i < swatches.length; i++) {
        if (swatches[i] != swatchHex) {
            response.push(swatches[i]);
        }
    }
    return response;
}

/**
 * @function getProcessedSwatches()
 * @description reads in the swatches file present in your src/ directory.
 * It then generates and extracts the background editor swatch from the swatches file.
 * @param {string[]} swatches
 * @param maxIntegerValue - The maximum number of values to use from the swatches array.
 * @returns An array of strings representing the swatches after processing out the backgroun editor hex.
 */
export const getProcessedSwatches = (swatches, maxIntegerValue) => {
    // 1. Get the swatches.
    // 2. Extract the background swatch from the original swatches array.
    // 3. Log the output.
    const editorBackground = swatches[ri.getRandomInt(maxIntegerValue)];
    return removeSwatchHex(swatches, editorBackground);
}

const swatches = getSwatches(process.cwd() + "/src/swatches.theme");
const maxIntegerValue = swatches.length;
const processedSwatches = getProcessedSwatches(swatches);
const theme = t.randomizeTheme(processedSwatches, maxIntegerValue);

// Log to stdout; this can be piped.
log(theme);