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
 * 	2. run `node ~/src/randomized_theme.js > {colour_extension_name.json}` while in theme editing mode.
 */
import * as processSwatches from "./processSwatches.js";
import * as log from "./log.js";
import * as randomInt from "./randomInt.js"

const swatches = processSwatches.get();
const maxIntegerValue = swatches.length;
const theme = {
	"name": "Destiny 2: Royal Treatment",
	"colors": {
		"editor.background": swatches[randomInt.get(maxIntegerValue)],
		"editor.foreground": swatches[randomInt.get(maxIntegerValue)],
		"activityBarBadge.background": swatches[randomInt.get(maxIntegerValue)],
		"sideBarTitle.foreground": swatches[randomInt.get(maxIntegerValue)],
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
				"foreground": swatches[randomInt.get(maxIntegerValue)],
			}
		},
		{
			"name": "Variables",
			"scope": [
				"variable",
				"string constant.other.placeholder"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)],
			}
		},
		{
			"name": "Colors",
			"scope": [
				"constant.other.color"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)],
			}
		},
		{
			"name": "Invalid",
			"scope": [
				"invalid",
				"invalid.illegal"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Block Level Variables",
			"scope": [
				"meta.block variable.other"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Other Variable, String Link",
			"scope": [
				"support.other.variable",
				"string.other.link"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Entity Types",
			"scope": [
				"support.type"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Language methods",
			"scope": [
				"variable.language"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "entity.name.method.js",
			"scope": [
				"entity.name.method.js"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "meta.method.js",
			"scope": [
				"meta.class-method.js entity.name.function.js",
				"variable.function.constructor"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Attributes",
			"scope": [
				"entity.other.attribute-name"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "CSS Classes",
			"scope": [
				"entity.other.attribute-name.class"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "CSS ID's",
			"scope": [
				"source.sass keyword.control"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Inserted",
			"scope": [
				"markup.inserted"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Deleted",
			"scope": [
				"markup.deleted"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Changed",
			"scope": [
				"markup.changed"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Regular Expressions",
			"scope": [
				"string.regexp"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Escape Characters",
			"scope": [
				"constant.character.escape"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "ES7 Bind Operator",
			"scope": [
				"source.js constant.other.object.key.js string.unquoted.label.js"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "JSON Key - Level 0",
			"scope": [
				"source.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "JSON Key - Level 1",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "JSON Key - Level 2",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "JSON Key - Level 3",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "JSON Key - Level 4",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "JSON Key - Level 5",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "JSON Key - Level 6",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "JSON Key - Level 7",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "JSON Key - Level 8",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markdown - Plain",
			"scope": [
				"text.html.markdown",
				"punctuation.definition.list_item.markdown"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markdown - Markup Raw Inline",
			"scope": [
				"text.html.markdown markup.inline.raw.markdown"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markdown - Markup Raw Inline Punctuation",
			"scope": [
				"text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markup - Italic",
			"scope": [
				"markup.italic"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markup - Underline",
			"scope": [
				"markup.underline"
			],
			"settings": {
				"fontStyle": "underline",
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markdown - Blockquote",
			"scope": [
				"markup.quote punctuation.definition.blockquote.markdown"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markdown - Link Description",
			"scope": [
				"string.other.link.description.title.markdown"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markdown - Link Anchor",
			"scope": [
				"constant.other.reference.link.markdown"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markup - Raw Block",
			"scope": [
				"markup.raw.block"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markdown - Raw Block Fenced",
			"scope": [
				"markup.raw.block.fenced.markdown"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markdown - Fenced Bode Block",
			"scope": [
				"punctuation.definition.fenced.markdown"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
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
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markdown - Fenced Language",
			"scope": [
				"variable.language.fenced.markdown"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markdown - Separator",
			"scope": [
				"meta.separator"
			],
			"settings": {
				"fontStyle": "bold",
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		},
		{
			"name": "Markup - Table",
			"scope": [
				"markup.table"
			],
			"settings": {
				"foreground": swatches[randomInt.get(maxIntegerValue)]
			}
		}
	]
}

// Log to stdout; this can be piped.
log.print(theme);
