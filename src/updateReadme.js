const fs = require('fs');
const path = require('path');

const categories = {
  Classic: require('./classic'),
  Creative: require('./creative'),
  Devices: require('./devices'),
  GBColor: require('./gbcolor'),
}
const all = require('./main');

const readmePath = path.join(process.cwd(), 'README.md');

const readme = fs.readFileSync(readmePath, { encoding: 'utf8' });

const tokenStart = '<!-- LIST_START -->\n';
const tokenEnd = '<!-- LIST_END -->';
const mdTableHead = '| ShortName | Name | Preview | Categories | Origin |\n|---|---|---|---|---|\n';

const createPreview = (shortName, [c1, c2, c3, c4]) => {
  fs.writeFileSync(path.join(process.cwd(), 'previews', `${shortName}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 50">
  <rect y="0" x="0" height="50" width="100" fill="${c1}" />
  <rect y="0" x="100" height="50" width="100" fill="${c2}" />
  <rect y="0" x="200" height="50" width="100" fill="${c3}" />
  <rect y="0" x="300" height="50" width="100" fill="${c4}" />
</svg>`, { encoding: 'utf8' });
  return `![${shortName}](previews/${shortName}.svg "Palette: ${shortName}")`;
};

const categoriesText = (shortName) => {
  return Object.keys(categories).filter((catName) => {
    return categories[catName].find((palette) => palette.shortName === shortName);
  }).join(', ');
}

const mdTable = all.map(({
  shortName,
  name,
  palette,
  origin = '',
}) => {
  return `| ${shortName} | ${name} | ${createPreview(shortName, palette)} | ${categoriesText(shortName)} | ${origin} |\n`
});

fs.writeFileSync(readmePath, readme.replace(/<!-- LIST_START.*LIST_END -->/gms, tokenStart.concat(mdTableHead, ...mdTable, tokenEnd)), { encoding: 'utf8' });
