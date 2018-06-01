'use strict';

const express = require('express');

const os = require('os');
var hostname = os.hostname();

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send("<html><head><h1>hostname : " + hostname + 
	"</h1></head><body><img src='https://cdn-images-1.medium.com/max/1600/0*Hl-1BN46JLiTh8UM.png' height='512' width='512'></body></html>");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
