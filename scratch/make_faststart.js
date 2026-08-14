const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const videoPath = path.join(__dirname, '..', 'public', 'videos', 'hero.mp4');
const tempPath = path.join(__dirname, '..', 'public', 'videos', 'hero_faststart.mp4');

try {
  console.log('Checking ffmpeg...');
  execSync(`ffmpeg -i "${videoPath}" -c copy -movflags +faststart "${tempPath}" -y`);
  if (fs.existsSync(tempPath)) {
    fs.copyFileSync(tempPath, videoPath);
    fs.unlinkSync(tempPath);
    console.log('Successfully re-ordered MP4 with +faststart!');
  }
} catch (e) {
  console.log('FFmpeg exec note:', e.message);
}
