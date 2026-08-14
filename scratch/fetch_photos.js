const fs = require('fs');
const https = require('https');
const path = require('path');

const key = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyCXCkoyEAlb1PfQfjHn98BfeyoV3nEKAtg';
const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJU3RgEYvhn0ARRzRkoC05-vo';

const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,photos,reviews&key=${key}`;

https.get(url, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const data = JSON.parse(body);
    console.log('API Status:', data.status);
    if (data.result && data.result.photos) {
      console.log('Found photos count:', data.result.photos.length);
      data.result.photos.forEach((p, idx) => {
        console.log(`Photo ${idx + 1}: ref=${p.photo_reference.substring(0, 30)}... width=${p.width} height=${p.height}`);
      });

      // Save photos list JSON for script processing
      fs.writeFileSync(
        path.join(__dirname, 'photos.json'),
        JSON.stringify(data.result.photos, null, 2)
      );
    } else {
      console.log('No photos found in response or error:', data);
    }
  });
}).on('error', (e) => {
  console.error('HTTPS error:', e);
});
