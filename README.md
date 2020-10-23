# gb-palettes

## Usage
`npm install gb-palettes`

Importing all palettes:  
`const palettes = require('gb-palettes');`   

Importing a subset:  
`const devicePalettes = require('gb-palettes/devices.js');`     

Importing a single palette:  
`const gbPocketColors = require('gb-palettes/palettes/gbpocket.js');`     

## List of Palettes
<!-- LIST_START -->
<!-- LIST_END -->

## contributing
Contributions of new palettes is very welcome. If you want to do so, please create a pull-request which contains:
* Addition of your palette to the importable category files.
* The new palette file itself.

### palette file structure:
``` javascript
module.exports = {
  shortName: 'gbcua',
  name: 'Game Boy Color Splash Up+A',
  palette: ['#ffffff', '#ff8f84', '#943A3A', '#000000'],
  origin: 'Wikipedia',
};
```
* Make sure your contribution matches the rules in the editorconfig
* Use singlequotes
* Provide a `shortName` which can be used as a vaild ID in html and as a javascript object key. Also, make sure the shortName matches the filename of your palette file.
* Provide a descriptive and informational human readable `name` yor your palette
* Provide the Hex-Values in lowercase with six characters
* If possible, provide the `origin` of your palette. (source/creator/if you created it yourself, use `by YourName`)
