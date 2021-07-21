const { https, http } = require('follow-redirects');

class client{

	constructor(proxy){

		this.agent = new https.Agent({

			keepAlive : true

		});

		this.proxy = proxy.split(':');

	};

	request(request_options = { method : null, url : null, headers : {}, mode : null, credentials : null, body : null }){

		return new Promise((resolve,reject) => {

			if(!this.proxy){

				var options = {

					hostname : new URL(request_options['url'])['hostname'].split('www.')[1],
		  			port : 443,
		  			protocol : 'https:',
		  			method : request_options['method'],
		  			path : new URL(request_options['url'])['pathname'] + new URL(request_options['url'])['search'],
		  			headers : request_options['headers'],
		  			agent : this.agent

				};

				var response_data = '';
				var status_code, headers;

				request_options['mode'] && (options['mode'] = request_options['mode']);
				request_options['credentials'] && (options['mode'] = request_options['credentials']);

				var request = https.request(options, (response) => {

					status_code = response.statusCode;
					headers = response.headers;

					response.on('data', (chunk) => {

						response_data += chunk.toString();

					});

					response.on('end', () => {

						resolve({

							status_code : status_code,
							headers : headers,
							data : response_data,
							error : false

						});

					});

				});

				request_options['body'] && (request.write(request_options['body']));

				request.on('error', (error) => {

					reject({

						error : true,
						reason : error
						
					});

				});

				request.end();

			} else {

				var proxy_options = {

					host : this.proxy[0],
					port : parseInt(this.proxy[1]),
					method : 'connect',
					path : new URL(request_options['url'])['hostname'].split('www.')[1] + ':443',
					headers : {}

				};

				if(this.proxy.length == 4){

					var credentials = 'Basic ' + Buffer.from(this.proxy[2] + ':' + this.proxy[3]).toString('base64');

					proxy_options.headers['Proxy-Authorization'] = credentials;

				};

				http.request(proxy_options).on('connect', (res,socket) => {

				});

			};

		});

	};

};

module.exports = client;