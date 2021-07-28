const { app, ipcMain } = require('electron');
const { fnl, dsg, fedex } = require('./task.js');
const bmak = require('./akamai_utils.js');

var data = {};

process.env.cookies = 0;
process.env.invalid_cookies = 0;
var i = 0;

Object.keys(bmak).map(b => {

	data[b] = bmak[b];

});

async function gen_akamai(data){

	for(; i < 10; i++){

		setImmediate(fedex, data);

	};

};

app.whenReady().then(async () => {

	gen_akamai(data);

});

process.on('uncaughtException', async () => {

	//console.log('error');
	i--;
	gen_akamai(data);

});