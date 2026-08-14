const fs = require('fs');
const path = require('path');

const videoPath = path.join(__dirname, '..', 'public', 'videos', 'hero.mp4');
if (!fs.existsSync(videoPath)) {
  console.log('File does not exist!');
  process.exit(1);
}

const buffer = fs.readFileSync(videoPath);
console.log('Video size bytes:', buffer.length);
// Print first 64 hex bytes to check ftyp box (is it ftypmp42, ftypeisom, ftyphevc, ftypmqv, etc.)
console.log('Header ASCII:', buffer.slice(0, 64).toString('ascii').replace(/[^\x20-\x7E]/g, '.'));
