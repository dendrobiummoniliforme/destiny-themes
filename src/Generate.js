/**
 * @author dendrobiummoniliforme.
 * @since 2022, 05, 13.
 * @description This file is used to generate a theme based off of a provided swatches.theme file.
 * @usage `npm run --silent theme > "./themes/<NAME_OF_YOUR_NEW_THEME>.json"`
 * @see https://github.com/dendrobiummoniliforme/whisper-of-the-worm/blob/main/CONTRIBUTING.md.
 */

import { randomizeTheme, getSwatches, removeSwatchHex } from "./Theme.js";
import { getRandomInt } from "./Math.js";
import { log } from "./Debug.js";

const swatches = getSwatches(process.cwd() + "/src/swatches.theme");
const maxIntegerValue = swatches.length - 1; // Index from 0.
const editorBackground = swatches[getRandomInt(maxIntegerValue)];
const processedSwatches = removeSwatchHex(swatches, editorBackground);
const generatedTheme = randomizeTheme(processedSwatches, maxIntegerValue, editorBackground);

// Log to stdout; this can be piped.
log(generatedTheme);
