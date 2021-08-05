const {
    ipcRenderer
} = require('electron');
const akamai = require('./akamai.js');
const {
    client
} = require('./client.js');
const fs = require('fs');
const proxies_data = fs.readFileSync('./akamai/proxies.txt', 'utf8');
const proxies = proxies_data.split(/\r?\n/);

function random(min, max) {

    return Math.floor(Math.random() * (max - min) + min);

};

async function fnl(data) {

    try {

        var device_index = random(0, 3000);
        var proxy_index = random(0, proxies.length - 1);
        var api = new akamai(device_index, 'fnl');
        var request = new client(proxies[proxy_index]);
        //var request = new client(null);

        var get = await request.request({

            method: 'get',
            url: 'https://www.finishline.com/',
            headers: {

                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "mode": "cors",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"

            },
            credentials: 'include'

        });

        var cookies = get.headers['set-cookie'].find(b => b.startsWith('_abck'));
        cookies = cookies.split(';');
        cookies = cookies.find(b => b.startsWith('_abck'));
        cookies = cookies.replace('_abck=', '');

        var sensor_data = api.generate(cookies, device_index);
        api.reset(data);

        var post = await request.request({

            method: 'post',
            url: 'https://www.finishline.com/YKVQaDzB5vly5O_Z_LFj/b3J5DwrNQ1YY/THp9R0IHcgQ/cUEYZUZR/LCo',
            headers: {

                "accept": "*/*",
                "accept-language": "en",
                "cache-control": "no-cache",
                "content-type": "text/plain;charset=UTF-8",
                "pragma": "no-cache",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-site": "same-origin",
                "referrer": "https://www.finishline.com/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "mode": "cors",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"

            },
            credentials: 'include',
            body: `{\"sensor_data\":\"${sensor_data}\"}`

        });

        var cookies = post.headers['set-cookie'].find(b => b.startsWith('_abck'));
        cookies = cookies.split(';');
        cookies = cookies.find(b => b.startsWith('_abck'));
        cookies = cookies.replace('_abck=', '');

        console.log(cookies);

        if (cookies.endsWith('==~-1~-1~-1') && cookies.length == 533) {

            //console.log(cookies);
            process.env.cookies++
            console.log(`FNL :`, process.env.cookies);

        };

    } catch {

        //console.log('error');

    };

    await fnl(data);

};

async function dsg(data) {

    try {

        var device_index = random(0, 3000);
        var proxy_index = random(0, proxies.length - 1);
        var api = new akamai(device_index, 'dsg');
        var request = new client(proxies[proxy_index]);
        var request = new client(null);

        var get = await request.request({

            method: 'get',
            url: 'https://www.dickssportinggoods.com/',
            headers: {

                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "mode": "cors",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"

            },
            credentials: 'include'

        });

        var cookies = get.headers['set-cookie'].find(b => b.startsWith('_abck'));
        cookies = cookies.split(';');
        cookies = cookies.find(b => b.startsWith('_abck'));
        cookies = cookies.replace('_abck=', '');

        var sensor_data = api.generate(cookies, device_index);
        api.reset(data);

        //console.log(sensor_data);

        var post = await request.request({

            method: 'post',
            url: 'https://www.dickssportinggoods.com/6g_8-6VHp1Sm1nvWl9e03i2-0GU/1Y5mth5GQam5/BS8eYThxBg/JyJ8X/k44HXg',
            headers: {

                "accept": "*/*",
                "accept-language": "en",
                "cache-control": "no-cache",
                "content-type": "text/plain;charset=UTF-8",
                "elastic-apm-traceparent": "00-927f9fcc3b131bdd77ef24e50336ce8e-ed001c7050ba02fe-01",
                "pragma": "no-cache",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-site": "same-origin",
                "referrer": "https://www.dickssportinggoods.com/",
                "referrerPolicy": "strict-origin",
                "mode": "cors",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"

            },
            credentials: 'include',
            body: `{\"sensor_data\":\"${sensor_data}\"}`

        });

        var cookies = post.headers['set-cookie'].find(b => b.startsWith('_abck'));
        cookies = cookies.split(';');
        cookies = cookies.find(b => b.startsWith('_abck'));
        cookies = cookies.replace('_abck=', '');

        console.log(cookies);

        if (cookies.length == 549) {

            //console.log(cookies);
            process.env.cookies++
            console.log(`DSG :`, process.env.cookies);

        };;

    } catch {

        //console.log('error');

    };

    await dsg(data);

};

module.exports.fnl = fnl;
module.exports.dsg = dsg;