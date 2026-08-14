const http = require('http');

http.get('http://localhost:3000/videos/hero.mp4', (res) => {
  console.log('Status code:', res.statusCode);
  console.log('Content-Type:', res.headers['content-type']);
  console.log('Content-Length:', res.headers['content-length']);
  console.log('Accept-Ranges:', res.headers['accept-ranges']);
}).on('error', (e) => console.error('HTTP error:', e));
