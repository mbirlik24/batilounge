const fs = require('fs');
const https = require('https');
const path = require('path');

const key = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyCXCkoyEAlb1PfQfjHn98BfeyoV3nEKAtg';
const photos = JSON.parse(fs.readFileSync(path.join(__dirname, 'photos.json'), 'utf8'));

const imagesDir = path.join(__dirname, '..', 'public', 'images');

function downloadUrl(url, destPath, cb) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      // Follow redirect
      downloadUrl(res.headers.location, destPath, cb);
    } else if (res.statusCode === 200) {
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Successfully saved: ${path.basename(destPath)} (${fs.statSync(destPath).size} bytes)`);
          if (cb) cb();
        });
      });
    } else {
      console.error(`Failed to download ${url}: status ${res.statusCode}`);
      if (cb) cb();
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${url}:`, err);
    if (cb) cb();
  });
}

function processPhotos() {
  console.log(`Starting download for ${photos.length} real Google Places photos...`);
  
  // Map photo index to target filenames in public/images
  const targetMap = [
    'hero.jpg',       // Photo 1
    'vip.jpg',        // Photo 2
    'terrace.jpg',    // Photo 3
    'mixology.jpg',   // Photo 4
    'steak.jpg',      // Photo 5
    'dessert.jpg',    // Photo 6
    'lounge_extra.jpg'// Photo 7
  ];

  let completed = 0;

  photos.forEach((photoObj, idx) => {
    const photoRef = photoObj.photo_reference;
    const photoApiUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=${photoRef}&key=${key}`;
    
    // Save as target filename
    const targetFilename = targetMap[idx] || `real_photo_${idx + 1}.jpg`;
    const destPath = path.join(imagesDir, targetFilename);

    // Also save a backup real_1.jpg etc.
    const backupPath = path.join(imagesDir, `real_${idx + 1}.jpg`);

    downloadUrl(photoApiUrl, destPath, () => {
      // Copy to backup as well
      if (fs.existsSync(destPath)) {
        fs.copyFileSync(destPath, backupPath);
      }
      completed++;
      if (completed === photos.length) {
        console.log('All real photos downloaded successfully!');
      }
    });
  });
}

processPhotos();
