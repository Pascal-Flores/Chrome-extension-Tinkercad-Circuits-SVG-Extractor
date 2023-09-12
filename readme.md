# Installation

## From release

Go to the [releases page](https://github.com/Pascal-Flores/Chrome-extension-Tinkercad-Circuits-SVG-Extractor/releases) and download the latest version.

You have now a .crx file. Open google chrome and go to the [extensions page](chrome://extensions/). Drag and drop the .crx file into the page, and click on "Add extension".

## From source

Tools needed : 

- [Node.js](https://nodejs.org/en/) + [npm](https://www.npmjs.com/)

Clone the repository and install the dependencies :

```bash
npm install
```

Build the extension :

```bash
npm run build
```

You have now a dist folder. Open google chrome and go to the [extensions page](chrome://extensions/). Enable the "Developer mode" and click on "Load unpacked". Select the repository folder.
