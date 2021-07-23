const { draw } = require('./mact_draw.js');

function curve(bmak, mode, starting_x, starting_y, x, y, modulus) {

    var average_x = 5;
    var average_y = 5;
    var point_x = starting_x;
    var point_y = starting_y;

    if(mode[0] == 'right'){

	    if(mode[1] == 'down'){

	        for (var i = 0; i < 15; i++) {

	            if (i % modulus[0] == 0) {

	                average_x--;

	            };

	            if (i % modulus[1]) {

	                average_y--;

	            };

	            point_x += average_x + bmak.random(1, 3);
	            point_y += average_y + bmak.random(1, 3);

	            x.push(point_x);
	            y.push(point_y);

	        };

	    } else if(mode[1] == 'up'){

	        for (var i = 0; i < 15; i++) {

	            if (i % modulus[0] == 0) {

	                average_x--;

	            };

	            if (i % modulus[1]) {

	                average_y--;

	            };

	            point_x -= average_x + bmak.random(1, 3);
	            point_y -= average_y + bmak.random(1, 3);

	            x.push(point_x);
	            y.push(point_y);

	        };

	    };

	} else if(mode[0] == 'left'){

	    if(mode[1] == 'down'){

	        for (var i = 0; i < 15; i++) {

	            if (i % modulus[0] == 0) {

	                average_x--;

	            };

	            if (i % modulus[1]) {

	                average_y--;

	            };

	            point_x += average_x + bmak.random(1, 3);
	            point_y += average_y + bmak.random(1, 3);

	            x.push(point_x);
	            y.push(point_y);

	        };

	    } else if(mode[1] == 'up'){

	        for (var i = 0; i < 15; i++) {

	            if (i % modulus[0] == 0) {

	                average_x--;

	            };

	            if (i % modulus[1]) {

	                average_y--;

	            };

	            point_x -= average_x + bmak.random(1, 3);
	            point_y -= average_y + bmak.random(1, 3);

	            x.push(point_x);
	            y.push(point_y);

	        };

	    };

	};

};

function get_modulus(amount, bmak){

	var modulus = [];

	for(var s = 0; s < amount + 1; s++){

		if(amount % s == 0 && s != 1 || amount == 5 && amount % s == 0){

			modulus.push(s);

		};

	};

	var modulus_array = [];
	var modulus_index = bmak.random(0, modulus.length - 1);
	modulus_array.push(modulus[modulus_index]);
	modulus.splice(modulus_index,1);
	modulus_index = bmak.random(0, modulus.length - 1);
	modulus_array.push(modulus[modulus_index]);
	modulus.splice(modulus_index,1);
	modulus_array = modulus_array.sort((a,b) => {
		return a - b;
	});

	return modulus_array;

};

function gen_mact(bmak){

	var height = bmak.device.window.innerHeight;
	var width = bmak.device.window.innerWidth;
	var starting_x = Math.floor(width / 2);
	var starting_y = Math.floor(height / 2);
	var x = [];
	var y = [];

	//var amount = 30;
	//var modulus = get_modulus(amount, bmak);

	var amount = [0];
	var length = [5,10,15,20,30,50];

	while(amount.reduce((a,b) => {
		return a + b;
	}) != 100){

		var current_value = amount.reduce((a,b) => {
			return a + b;
		});

		if(length.includes(100 - current_value)){

			amount.push(length[length.indexOf(100 - current_value)]);

		} else {

			amount.push(length[bmak.random(0, length.length - 1)]);

		};

		if(amount[0] == 0){

			amount.splice(0,1);

		};

	};

	console.log(amount);

	//curve(bmak, ['left', 'down'], starting_x, starting_y, x, y, modulus);
	//draw(x,y);

};

module.exports.gen_mact = gen_mact;