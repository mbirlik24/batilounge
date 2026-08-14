const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('DOM length:', data.length);
    console.log('Contains <video:', data.includes('<video'));
    console.log('Video tag match:', data.match(/<video[^>]*>/g));
  });
});
