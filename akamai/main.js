const { app, ipcMain } = require('electron');
const { fnl, dsg } = require('./task.js');
const bmak = require('./akamai_utils.js');

var data = {};

process.env.cookies = 0;

Object.keys(bmak).map(b => {

	data[b] = bmak[b];

});

async function gen_akamai(data){

	var i = 0;

	for(; i < 100; i++){

		queueMicrotask(() => {

			dsg(data);

		});

	};

};

app.whenReady().then(async () => {

	gen_akamai(data);

});

process.on('uncaughtException', async () => {

	//console.log('error');

	//queueMicrotask(() => {

	//	fnl(data);

	//});

	dsg(data);

});