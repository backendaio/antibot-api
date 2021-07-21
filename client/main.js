const client = require('./client.js');

async function main(i){

    var request = new client('p3.mushroomproxy.com:8000:956F10-mushroom-40241b3b6f:gmztihfu2qr');

    console.time(i);
    
    var get = await request.request({
        url : 'https://www.google.com/',
        method : 'get',
    });

    console.timeEnd(i);
    console.log(get.status_code);

};

for(var i = 0; i < 1; i++){

    setImmediate(main, i);

};