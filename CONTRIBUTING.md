## Requirements
* **VSCode** - Dev Tools for Extensions on the marketplace can be used via VSCode.
* **Node v16.2.0** - There is an `.nvmrc` file if you use [`nvm`](https://github.com/nvm-sh/nvm).
    * `nvm install`.
        * This will automatically use the `.nvmrc` file provided :)

## Resources
These are some of the resources used to design each theme.

1. [VSCode Create Your Own Custom Theme](https://medium.com/wearelaika/vscode-create-your-own-custom-theme-extension-96c67bd753f6)
2. [Pixlr](https://pixlr.com)
3. [DevSwatch](https://apps.apple.com/us/app/devswatch/id1477857867?mt=12)
4. [Shaders](https://d2.destinygamewiki.com/wiki/Shaders)
5. [nvm](https://github.com/nvm-sh/nvm)

## Workflow

Contributions are split into two:
* adding new themes.
* adding tools to help facilitate adding new themes.

### For Creating A New Theme:

1. Fork this repository.
2. Open `swatches.theme`.
    * This is a file used in an auto-generation process for the new theme.
3. Using a tool of choice, select a few RGB hex values from the [Destiny 2 Shaders List](https://d2.destinygamewiki.com/wiki/Shaders).
4. Save the shader values in the `swatches.theme` file.
    * Overwrite the existing values; this is a temp file.
5. Open this project in VSCode.
6. Press the F5 key.
    * This will open a new VSCode instance with this project.
    * Use this **new instance** to **preview color changes**.
    * Use the **original instance** to make **edits**.
7. Run `npm run --silent theme > "./themes/<NAME_OF_YOUR_NEW_THEME>.json"`.
    * Example `npm run --silent theme > "./themes/Royal Dye-color-theme.json"`.
    * This will take the values in `swatches.theme` and apply them to random parameters.
    * This is a good starting point, from here use your creative side to finalize the end look :)
8. Once you are happy with your theme, submit your MR:
    * Requirements for MR:
        * Update the `README.md/Current Themes` with your new theme name and link to the original shader.
        * Provide any details for your work that you would like to be included in the `CHANGELOG.md`.

### `src/*`
This is a super hacky set of files. I put it together to speed up editing. I am taking any and all suggestions for how to handle the workflow :) If this file helps feel free to use!

## Publishing
This is currently handled by me. I want it accessible however. The steps taken are listed below.

1. Increment package.json version.
2. `git push`.
3. Tag and Release in format `<tag> - <date of release>`.
    * Tag MUST match the package.json version.
    * `[CHANGELOG](./CHANGELOG.md]`.
4. Update `CHANGELOG.md` with
    * Major Details.
    * Non-Major Details.
5. `vsce package`.
6. `vsce publish`.
