function normal_event(bmak) {

    var n = -2,
        r = 0,
        i = 0,
        c = 0,
        b = 0,
        d = 8 * r + 4 * i + 2 * c + b,
        l = 0;

    bmak.timestamp += bmak.random(30, 100);

    var k = -1;
    var a = 1;
    var s = bmak.timestamp;

    var u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
    u += ";";
    bmak.kact += u;
    bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
    bmak.ta += s;
    bmak.ke_cnt++;

    bmak.updatet(bmak.random(2,3));

    a = 3;
    s = bmak.timestamp;
    u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
    u += ";";
    bmak.kact += u;
    bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
    bmak.ta += s;
    bmak.ke_cnt++;

    bmak.updatet(bmak.random(30,100));

    a = 2;
    s = bmak.timestamp;
    u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
    u += ";";
    bmak.kact += u;
    bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
    bmak.ta += s;
    bmak.ke_cnt++;

};

function event_hold(bmak, hold_amount){

	
	
};

function normal_event_hold(bmak){



};

function gen_kact(bmak) {

    if (bmak.ke_cnt == bmak.ke_cnt_lmt) {

        return;

    };

    var events = bmak.random(bmak.ke_cnt, bmak.ke_cnt_lmt);

    if (!events) {

        return;

    };

   	normal_event(bmak);

};

module.exports.gen_kact = gen_kact;