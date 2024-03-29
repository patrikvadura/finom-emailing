/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

const fs = require('fs');

let newsletter = JSON.parse(fs.readFileSync('src/templates/newsletter/data/newsletter.json'));
let signatures = JSON.parse(fs.readFileSync('src/templates/newsletter/data/signatures.json'));

module.exports = {
  newsletter: newsletter,
  signatures: signatures,

  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
      assets: {
        source: 'src/images',
        destination: 'images',
      },
      components: {
        root: 'src/components',
      },
    },
  },
}
