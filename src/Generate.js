/**
 * @author dendrobiummoniliforme.
 * @since 2022, 05, 13.
 * @description This file is used to generate a theme based off of a provided swatches.theme file.
 * @usage `npm run --silent theme > "./themes/<NAME_OF_YOUR_NEW_THEME>.json"`
 * @see https://github.com/dendrobiummoniliforme/whisper-of-the-worm/blob/main/CONTRIBUTING.md.
 */
import { randomizeTheme, removeSwatchHex, getPaletteFromImage, getRGBSwatchesFromPalette } from "./Theme.js";
import { getRandomInt } from "./Math.js";
import { log } from "./Log.js";
import * as fs from "fs";

/**
 * Simple CLI.
 */
const defaultLog = `Usage: npm run theme <path_to_shader>`;
const argv = process.argv;
const path = argv[2];

// Guard clauses.
if (argv.length > 3) {
    log(`${defaultLog}: Expecting 1 argument.`);
}
if (typeof path !== 'string') {
    log(`${defaultLog}: Expecting a String (path).`);
}
if (fs.existsSync(path) !== true) {
    log(`${defaultLog}: File does not exist.`);
}

/**
 * Pipeline.
 */
const palette = await getPaletteFromImage(path);
const swatches = getRGBSwatchesFromPalette(palette);

// const maxIntegerValue = swatches.length - 1; // Index from 0.
// const editorBackground = swatches[getRandomInt(maxIntegerValue)];
// const processedSwatches = removeSwatchHex(swatches, editorBackground);
// const generatedTheme = randomizeTheme(processedSwatches, maxIntegerValue, editorBackground);


// Log to stdout; this can be piped.
log(swatches);
