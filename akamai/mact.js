const { draw } = require('./mact_draw.js');

function curve(bmak, mode, starting_x, starting_y, x, y, modulus, amount) {

    var average_x = 5;
    var average_y = 5;
    var point_x = starting_x;
    var point_y = starting_y;

    if(mode[0] == 'right'){

	    if(mode[1] == 'down'){

	        for (var i = 0; i < amount; i++) {

	            if (i % modulus[0] == 0) {

	                average_x--;

	            };

	            if (i % modulus[1] == 0) {

	                average_y--;

	            };

	            point_x += average_x + bmak.random(1, 3);
	            point_y += average_y + bmak.random(1, 3);

	            x.push(point_x);
	            y.push(point_y);

	        };

	    } else if(mode[1] == 'up'){

	        for (var i = 0; i < amount; i++) {

	            if (i % modulus[0] == 0) {

	                average_x--;

	            };

	            if (i % modulus[1]  == 0) {

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

	        for (var i = 0; i < amount; i++) {

	            if (i % modulus[0] == 0) {

	                average_x--;

	            };

	            if (i % modulus[1] == 0) {

	                average_y--;

	            };

	            point_x += average_x + bmak.random(1, 3);
	            point_y += average_y + bmak.random(1, 3);

	            x.push(point_x);
	            y.push(point_y);

	        };

	    } else if(mode[1] == 'up'){

	        for (var i = 0; i < amount; i++) {

	            if (i % modulus[0] == 0) {

	                average_x--;

	            };

	            if (i % modulus[1] == 0) {

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

function has_negative(x,y){

	var negative = false;

	x.map((b) => {

		if(b < 0){

			negative = true;

		};

	});

	y.map((b) => {

		if(b < 0){

			negative = true;

		};

	});

	if(negative){

		return true;

	} else {

		return false;

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

	Math.random() > 0.5 ? starting_x -= bmak.random(0, Math.floor(width / 5)) : starting_x += bmak.random(0, Math.floor(width / 5));
	Math.random() > 0.5 ? starting_y -= bmak.random(0, Math.floor(height / 5)) : starting_y += bmak.random(0, Math.floor(height / 5));

	var amount = [0];
	var length = [5,10,15,20,25,30,35,40,45,50];

	Math.random() > 0.5 && (length = [5,10,15,20,25,30,35,40,45,50,55,60,65,70]);

	while(amount.reduce((a,b) => {
		return a + b;
	}) != 100){

		var current_value = amount.reduce((a,b) => {
			return a + b;
		});

		if(length.includes(100 - current_value) && Math.random() > 0.5){

			amount.push(length[length.indexOf(100 - current_value)]);

		} else {

			amount.push(length[bmak.random(0, length.length - 1)]);

		};

		if(amount[0] == 0){

			amount.splice(0,1);

		};

		if(amount.length > 20){

			amount = [0];
				
		};

	};

	for(var s = 0; s < amount.length; s++){

		var modulus = get_modulus(amount[s],bmak);
		var mode = [];
		mode.push(Math.random() > 0.5 ? 'right' : 'left');
		mode.push(Math.random() > 0.5 ? 'up' : 'down');

		s == 0 ? curve(bmak, mode, starting_x, starting_y,x,y, modulus, amount[s]) : curve(bmak, mode, x[x.length - 1], y[y.length - 1],x,y, modulus, amount[s]);

	};

	if(has_negative(x,y)){

		while(has_negative(x,y)){

			x = [];
			y = [];

			for(var s = 0; s < amount.length; s++){

				var modulus = get_modulus(amount[s],bmak);
				var mode = [];
				mode.push(Math.random() > 0.5 ? 'right' : 'left');
				mode.push(Math.random() > 0.5 ? 'up' : 'down');

				s == 0 ? curve(bmak, mode, starting_x, starting_y,x,y, modulus, amount[s]) : curve(bmak, mode, x[x.length - 1], y[y.length - 1],x,y, modulus, amount[s]);

			};

		};

	};

	Math.random() > 0.5 && (x.reverse() && y.reverse());

	draw(x,y);

};

module.exports.gen_mact = gen_mact;