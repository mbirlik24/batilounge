const fs = require('fs');
const https = require('https');
const path = require('path');

const videosDir = path.join(__dirname, '..', 'public', 'videos');
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}

// W3C standard web video asset
const videoUrl = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4';
const destPath = path.join(videosDir, 'hero.mp4');

console.log('Downloading web-optimized hero video background...');

function download(url, dest, cb) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      download(res.headers.location, dest, cb);
    } else if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Video successfully saved to ${path.basename(dest)} (${fs.statSync(dest).size} bytes)`);
          if (cb) cb();
        });
      });
    } else {
      console.error(`Failed: status ${res.statusCode}`);
      if (cb) cb();
    }
  }).on('error', (e) => console.error(e));
}

download(videoUrl, destPath, () => {
  console.log('Hero video download completed!');
});
