const { draw } = require('./mact_draw.js');

function curve(bmak, mode, starting_x, starting_y, x, y) {

    var average_x = 5;
    var average_y = 5;
    var point_x = starting_x;
    var point_y = starting_y;

    if(mode[0] == 'right'){

	    if(mode[1] == 'down'){

	        for (var i = 0; i < 15; i++) {

	            if (i % 3 == 0) {

	                average_x--;

	            };

	            if (i % 5) {

	                average_y--;

	            };

	            point_x += average_x + bmak.random(1, 3);
	            point_y += average_y + bmak.random(1, 3);

	            x.push(point_x);
	            y.push(point_y);

	        };

	    } else if(mode[1] == 'up'){

	        for (var i = 0; i < 15; i++) {

	            if (i % 3 == 0) {

	                average_x--;

	            };

	            if (i % 5) {

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

	            if (i % 3 == 0) {

	                average_x--;

	            };

	            if (i % 5) {

	                average_y--;

	            };

	            point_x += average_x + bmak.random(1, 3);
	            point_y += average_y + bmak.random(1, 3);

	            x.push(point_x);
	            y.push(point_y);

	        };

	    } else if(mode[1] == 'up'){

	        for (var i = 0; i < 15; i++) {

	            if (i % 3 == 0) {

	                average_x--;

	            };

	            if (i % 5) {

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

	for(var s = 0; s < amount; s++){

		if(amount % s == 0 && s != 1){

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

	var amount = 30;
	var modulus = get_modulus(amount, bmak);

	curve(bmak, ['left', 'down'], starting_x, starting_y, x, y);
	draw(x,y);

};

module.exports.gen_mact = gen_mact;