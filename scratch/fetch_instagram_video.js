const fs = require('fs');
const https = require('https');
const path = require('path');

// Elfsight widget public endpoint for app ID 08ec1551-e48b-4c45-9287-ca831c5c4c0e
const widgetId = '08ec1551-e48b-4c45-9287-ca831c5c4c0e';
const url = `https://core.elfsight.com/p/boot/?page=https%3A%2#%2Felfsight.com&w=${widgetId}`;

https.get(url, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    try {
      const data = JSON.parse(body);
      console.log('Elfsight data keys:', Object.keys(data));
      if (data.data && data.data.widgets) {
        const widget = data.data.widgets[widgetId];
        console.log('Widget data found');
        fs.writeFileSync(path.join(__dirname, 'elfsight_widget.json'), JSON.stringify(widget, null, 2));
      }
    } catch (e) {
      console.log('Body response snippet:', body.substring(0, 500));
    }
  });
}).on('error', (e) => console.error(e));
