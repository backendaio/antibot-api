var bmak = require('./akamai_utils.js');
const devices = require('./devices.json');
const { gen_kact } = require('./kact.js');

class akamai{

	constructor(device_index, site){

		bmak.site = site;
		this.device_index = device_index;
		bmak.device = devices[device_index];

	};

	generate(cookie, device_index, challenge){

		bmak.updatet();

		if(Math.random() > 0.5){

			gen_kact(bmak);

		};

		//after all events 

		if(bmak.kact){

			bmak.start_ts -= bmak.timestamp;

		};

		if(device_index){

			this.device_index = device_index;
			bmak.device = devices[this.device_index];
			
		};

		bmak.start_ts = Date.now ? Date.now() : +new Date;
		bmak.to();
		bmak.fpcf = {};
		bmak.fpcf.td = bmak.random(4,10); 
		bmak.rCFP = {};
		bmak.rCFP.index = bmak.random(0,bmak.device.rCFP.length - 1);
		bmak.fpcf.rVal = bmak.device.rCFP[bmak.rCFP.index].rVal;
		bmak.fpcf.rCFP = bmak.device.rCFP[bmak.rCFP.index].value;
		bmak.informinfo = bmak.getforminfo();
		bmak.mr = bmak.device['mr'];
		bmak.nav_perm = bmak.device['np'];
		bmak.fpcf.fpValstr = bmak.device['fpValstr'];
		bmak.fmh = bmak.device['fmh'];
		bmak.fmz = bmak.device['fmz'];
		bmak.ssh = bmak.device['ssh'];
		bmak.wv = bmak.device['wv'];
		bmak.wr = bmak.device['wr'];
		bmak.weh = bmak.device['weh'];
		bmak.wl = bmak.device['wl'];

		var n = bmak.gd();
		var o = bmak.device.window.DeviceOrientationEvent ? "do_en" : "do_dis",
            m = bmak.device.window.DeviceMotionEvent ? "dm_en" : "dm_dis",
            r = bmak.device.window.TouchEvent ? "t_en" : "t_dis",
            i = o + "," + m + "," + r;
        var c = bmak.getforminfo();
        var b = bmak.getdurl();
        var f = bmak.pi(bmak.d2 / 6);
        var s = bmak.ke_vel + bmak.me_vel + bmak.doe_vel + bmak.dme_vel + bmak.te_vel + bmak.pe_vel;
        var a = bmak.updatet();
        var e = cookie;
        var p = bmak.fas(),
            v = bmak.hbs(),
            h = bmak.gwd();
        var k = bmak.ff,
            l = k(80) + k(105) + k(90) + k(116) + k(69);
        var _ = a;
        var u = bmak.jrs(bmak.start_ts);
        var g = [bmak.ke_vel + 1, bmak.me_vel + 32, bmak.te_vel + 32, bmak.doe_vel, bmak.dme_vel, bmak.pe_vel, s, a, bmak.init_time, bmak.start_ts, bmak.fpcf.td, bmak.d2, bmak.ke_cnt, bmak.me_cnt, f, bmak.pe_cnt, bmak.te_cnt, _, bmak.ta, bmak.n_ck, e, bmak.ab(e), bmak.fpcf.rVal, bmak.fpcf.rCFP, p, l, u[0], u[1], v, h],
            w = g.join(",");
        var d = bmak.aj_type + "," + bmak.aj_indx;
        var S = "0,0,0,0,1,0,0";
        var B = "",
            x = "",
            M = "";
        var y = "" + bmak.ab(bmak.fpcf.fpValstr);
        var E = bmak.fmh + "," + bmak.fmz + "," + bmak.ssh + "," + bmak.wv + "," + bmak.wr + "," + bmak.weh + "," + bmak.wl;

        if(challenge){

            bmak.mn_poll(cookie);
            var C = bmak.mn_get_current_challenges(cookie);
            bmak.mn_w();

            if (void 0 !== C[1]) {
                var j = C[1];
                    void 0 !== bmak.mn_r[j] && (B = bmak.mn_r[j]);
                }
            if (void 0 !== C[2]) {
                var A = C[2];
                void 0 !== bmak.mn_r[A] && (x = bmak.mn_r[A]);
            }
            if (void 0 !== C[3]) {
                var L = C[3];
                void 0 !== bmak.mn_r[L] && (M = bmak.mn_r[L]);
            }

        };
        
		bmak.sensor_data = '';
		bmak.sensor_data += bmak.ver;
		bmak.sensor_data += "-1,2,-94,-100,";
		bmak.sensor_data += n;
		bmak.sensor_data += "-1,2,-94,-101,";
		bmak.sensor_data += i;
		bmak.sensor_data += "-1,2,-94,-105,";
		bmak.sensor_data += bmak.informinfo;
		bmak.sensor_data += "-1,2,-94,-102,";
		bmak.sensor_data += c;
		bmak.sensor_data += "-1,2,-94,-108,";
		bmak.sensor_data += bmak.kact;
		bmak.sensor_data += "-1,2,-94,-110,";
		bmak.sensor_data += bmak.mact;
		bmak.sensor_data += "-1,2,-94,-117,";
		bmak.sensor_data += bmak.tact;
		bmak.sensor_data += "-1,2,-94,-111,";
		bmak.sensor_data += bmak.doact;
		bmak.sensor_data += "-1,2,-94,-109,";
		bmak.sensor_data += bmak.dmact;
		bmak.sensor_data += "-1,2,-94,-114,";
		bmak.sensor_data += bmak.pact;
		bmak.sensor_data += "-1,2,-94,-103,";
		bmak.sensor_data += bmak.vcact;
		bmak.sensor_data += "-1,2,-94,-112,";
		bmak.sensor_data += b;
		bmak.sensor_data += "-1,2,-94,-115,";
		bmak.sensor_data += w;
		bmak.sensor_data += "-1,2,-94,-106,";
		bmak.sensor_data += d;
		bmak.sensor_data += "-1,2,-94,-119,";
		bmak.sensor_data += bmak.mr;
		bmak.sensor_data += "-1,2,-94,-122,";
		bmak.sensor_data += S;
		bmak.sensor_data += "-1,2,-94,-123,";
		bmak.sensor_data += B;
		bmak.sensor_data += "-1,2,-94,-124,";
		bmak.sensor_data += x;
		bmak.sensor_data += "-1,2,-94,-126,";
		bmak.sensor_data += M;
		bmak.sensor_data += "-1,2,-94,-127,";
		bmak.sensor_data += bmak.nav_perm;

		var P = 24 ^ bmak.ab(bmak.sensor_data);

		bmak.sensor_data += "-1,2,-94,-70,";
		bmak.sensor_data += bmak.fpcf.fpValstr;
		bmak.sensor_data += "-1,2,-94,-80,";
		bmak.sensor_data += y;
		bmak.sensor_data += "-1,2,-94,-116,";
		bmak.sensor_data += bmak.o9;
		bmak.sensor_data += "-1,2,-94,-118,";
		bmak.sensor_data += P;
		bmak.sensor_data += "-1,2,-94,-129,";
		bmak.sensor_data += E;
		bmak.sensor_data += "-1,2,-94,-121,";

		var F = bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16),
            D = Math.floor(bmak.get_cf_date() / 36e5),
            R = bmak.get_cf_date(),
            N = F + bmak.od(D, F) + bmak.sensor_data;

        bmak.sensor_data = N;
        bmak.sensor_data += ";";
        bmak.sensor_data += bmak.random(2,15);
        bmak.sensor_data += ";";
        bmak.sensor_data += bmak.random(2,10);
        bmak.sensor_data += ";";
        bmak.sensor_data += 0;

		return bmak.sensor_data;

	};

	reset(data){

		bmak = data;

	};

};

module.exports = akamai;

//var api = new akamai(0, 'dsg');
//api.generate();