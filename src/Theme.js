import * as fs from 'fs';
import { log } from './Debug.js';
import { getRandomInt } from './Math.js';

/**
 * @function getSwatches()
 * @description Sets the file for swatches and splits it into an array.
 * @param string fileDirectory 
 * @returns An array of strings.
 */
export const getSwatches = (fileDirectory) => {
    return (fs.readFileSync(fileDirectory, 'utf8')).split('\n');
}

/**
 * @function removeSwatchHex()
 * @description removes the swatch that is set 
 * for the editor background from the swatches array.
 * @param string[] swatches 
 * @param string swatchHex 
 * @returns An array of strings.
 */
export const removeSwatchHex = (swatches, swatchHex) => {
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
 * @function randomizeTheme
 * @description Provides a VSCode theme with random color values
 * based on the swatches array provided and the maxIntegervalue.
 * @param string[] swatches, the provided swatches for random generation.
 * @param number maxIntegerValue, the maximum number of values to use from the swatches array.
 * @returns a VSCode theme.
 */
 export const randomizeTheme = (swatches, maxIntegerValue, editorBackground = null) => { 
    // TODO: https://github.com/dendrobiummoniliforme/whisper-of-the-worm/issues/6
    const theme = {
        "name": "",
        "colors": {
            "editor.background": editorBackground == null ? swatches[getRandomInt(maxIntegerValue)] : editorBackground,
            "editor.foreground": swatches[getRandomInt(maxIntegerValue)],
            "activityBarBadge.background": swatches[getRandomInt(maxIntegerValue)],
            "sideBarTitle.foreground": swatches[getRandomInt(maxIntegerValue)],
        },
        "tokenColors": [
            {
                "name": "Comment",
                "scope": [
                    "comment",
                    "punctuation.definition.comment"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": swatches[getRandomInt(maxIntegerValue)],
                }
            },
            {
                "name": "Variables",
                "scope": [
                    "variable",
                    "string constant.other.placeholder"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)],
                }
            },
            {
                "name": "Colors",
                "scope": [
                    "constant.other.color"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)],
                }
            },
            {
                "name": "Invalid",
                "scope": [
                    "invalid",
                    "invalid.illegal"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Keyword, Storage",
                "scope": [
                    "keyword",
                    "storage.type",
                    "storage.modifier"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Operator, Misc",
                "scope": [
                    "keyword.control",
                    "constant.other.color",
                    "punctuation",
                    "meta.tag",
                    "punctuation.definition.tag",
                    "punctuation.separator.inheritance.php",
                    "punctuation.definition.tag.html",
                    "punctuation.definition.tag.begin.html",
                    "punctuation.definition.tag.end.html",
                    "punctuation.section.embedded",
                    "keyword.other.template",
                    "keyword.other.substitution"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Tag",
                "scope": [
                    "entity.name.tag",
                    "meta.tag.sgml",
                    "markup.deleted.git_gutter"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Function, Special Method",
                "scope": [
                    "entity.name.function",
                    "meta.function-call",
                    "variable.function",
                    "support.function",
                    "keyword.other.special-method"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Block Level Variables",
                "scope": [
                    "meta.block variable.other"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Other Variable, String Link",
                "scope": [
                    "support.other.variable",
                    "string.other.link"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
                "scope": [
                    "constant.numeric",
                    "constant.language",
                    "support.constant",
                    "constant.character",
                    "constant.escape",
                    "variable.parameter",
                    "keyword.other.unit",
                    "keyword.other"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "String, Symbols, Inherited Class, Markup Heading",
                "scope": [
                    "string",
                    "constant.other.symbol",
                    "constant.other.key",
                    "entity.other.inherited-class",
                    "markup.heading",
                    "markup.inserted.git_gutter",
                    "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Class, Support",
                "scope": [
                    "entity.name",
                    "support.type",
                    "support.class",
                    "support.other.namespace.use.php",
                    "meta.use.php",
                    "support.other.namespace.php",
                    "markup.changed.git_gutter",
                    "support.type.sys-types"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Entity Types",
                "scope": [
                    "support.type"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "CSS Class and Support",
                "scope": [
                    "source.css support.type.property-name",
                    "source.sass support.type.property-name",
                    "source.scss support.type.property-name",
                    "source.less support.type.property-name",
                    "source.stylus support.type.property-name",
                    "source.postcss support.type.property-name"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Sub-methods",
                "scope": [
                    "entity.name.module.js",
                    "variable.import.parameter.js",
                    "variable.other.class.js"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Language methods",
                "scope": [
                    "variable.language"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "entity.name.method.js",
                "scope": [
                    "entity.name.method.js"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "meta.method.js",
                "scope": [
                    "meta.class-method.js entity.name.function.js",
                    "variable.function.constructor"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Attributes",
                "scope": [
                    "entity.other.attribute-name"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "HTML Attributes",
                "scope": [
                    "text.html.basic entity.other.attribute-name.html",
                    "text.html.basic entity.other.attribute-name"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "CSS Classes",
                "scope": [
                    "entity.other.attribute-name.class"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "CSS ID's",
                "scope": [
                    "source.sass keyword.control"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Inserted",
                "scope": [
                    "markup.inserted"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Deleted",
                "scope": [
                    "markup.deleted"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Changed",
                "scope": [
                    "markup.changed"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Regular Expressions",
                "scope": [
                    "string.regexp"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Escape Characters",
                "scope": [
                    "constant.character.escape"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "URL",
                "scope": [
                    "*url*",
                    "*link*",
                    "*uri*"
                ],
                "settings": {
                    "fontStyle": "underline"
                }
            },
            {
                "name": "Decorators",
                "scope": [
                    "tag.decorator.js entity.name.tag.js",
                    "tag.decorator.js punctuation.definition.tag.js"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "ES7 Bind Operator",
                "scope": [
                    "source.js constant.other.object.key.js string.unquoted.label.js"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "JSON Key - Level 0",
                "scope": [
                    "source.json meta.structure.dictionary.json support.type.property-name.json"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "JSON Key - Level 1",
                "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "JSON Key - Level 2",
                "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "JSON Key - Level 3",
                "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "JSON Key - Level 4",
                "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "JSON Key - Level 5",
                "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "JSON Key - Level 6",
                "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "JSON Key - Level 7",
                "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "JSON Key - Level 8",
                "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Plain",
                "scope": [
                    "text.html.markdown",
                    "punctuation.definition.list_item.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Markup Raw Inline",
                "scope": [
                    "text.html.markdown markup.inline.raw.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Markup Raw Inline Punctuation",
                "scope": [
                    "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Heading",
                "scope": [
                    "markdown.heading",
                    "markup.heading | markup.heading entity.name",
                    "markup.heading.markdown punctuation.definition.heading.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markup - Italic",
                "scope": [
                    "markup.italic"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markup - Bold",
                "scope": [
                    "markup.bold",
                    "markup.bold string"
                ],
                "settings": {
                    "fontStyle": "bold",
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markup - Bold-Italic",
                "scope": [
                    "markup.bold markup.italic",
                    "markup.italic markup.bold",
                    "markup.quote markup.bold",
                    "markup.bold markup.italic string",
                    "markup.italic markup.bold string",
                    "markup.quote markup.bold string"
                ],
                "settings": {
                    "fontStyle": "bold",
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markup - Underline",
                "scope": [
                    "markup.underline"
                ],
                "settings": {
                    "fontStyle": "underline",
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Blockquote",
                "scope": [
                    "markup.quote punctuation.definition.blockquote.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markup - Quote",
                "scope": [
                    "markup.quote"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "name": "Markdown - Link",
                "scope": [
                    "string.other.link.title.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Link Description",
                "scope": [
                    "string.other.link.description.title.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Link Anchor",
                "scope": [
                    "constant.other.reference.link.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markup - Raw Block",
                "scope": [
                    "markup.raw.block"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Raw Block Fenced",
                "scope": [
                    "markup.raw.block.fenced.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Fenced Bode Block",
                "scope": [
                    "punctuation.definition.fenced.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Fenced Bode Block Variable",
                "scope": [
                    "markup.raw.block.fenced.markdown",
                    "variable.language.fenced.markdown",
                    "punctuation.section.class.end"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Fenced Language",
                "scope": [
                    "variable.language.fenced.markdown"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markdown - Separator",
                "scope": [
                    "meta.separator"
                ],
                "settings": {
                    "fontStyle": "bold",
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            },
            {
                "name": "Markup - Table",
                "scope": [
                    "markup.table"
                ],
                "settings": {
                    "foreground": swatches[getRandomInt(maxIntegerValue)]
                }
            }
        ]
    }
    return theme;
}