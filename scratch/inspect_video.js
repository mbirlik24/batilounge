const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'public', 'videos', 'hero.mp4');
const buf = fs.readFileSync(file);

console.log('File size:', buf.length);
console.log('Contains avc1 (H.264):', buf.includes(Buffer.from('avc1')));
console.log('Contains hvc1 (HEVC/H.265):', buf.includes(Buffer.from('hvc1')) || buf.includes(Buffer.from('hev1')));
console.log('Contains mp4a (AAC Audio):', buf.includes(Buffer.from('mp4a')));
