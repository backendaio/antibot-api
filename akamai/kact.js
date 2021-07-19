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

    bmak.updatet(bmak.random(2, 3));

    a = 3;
    s = bmak.timestamp;
    u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
    u += ";";
    bmak.kact += u;
    bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
    bmak.ta += s;
    bmak.ke_cnt++;

    bmak.updatet(bmak.random(30, 100));

    a = 2;
    s = bmak.timestamp;
    u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
    u += ";";
    bmak.kact += u;
    bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
    bmak.ta += s;
    bmak.ke_cnt++;

};

function shift_event(bmak) {

    var n = 16,
        r = 1,
        i = 0,
        c = 0,
        b = 0,
        l = 0,
        d = 8 * r + 4 * i + 2 * c + b;


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

    bmak.updatet(bmak.random(30, 150));

    s = bmak.timestamp;
    d = 0;
    a = 2;

    u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
    u += ";";
    bmak.kact += u;
    bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
    bmak.ta += s;
    bmak.ke_cnt++;

};

function meta_event(bmak) {

    var n = 27,
        r = 0,
        i = 0,
        c = 0,
        b = 0,
        l = 0,
        d = 8 * r + 4 * i + 2 * c + b;


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

    bmak.updatet(bmak.random(30, 150));
    
    s = bmak.timestamp;
    d = 0;
    a = 2;

    u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
    u += ";";
    bmak.kact += u;
    bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
    bmak.ta += s;
    bmak.ke_cnt++;

};

function control_event(bmak){

    var n = 17,
        r = 0,
        i = 1,
        c = 0,
        b = 0,
        l = 0,
        d = 8 * r + 4 * i + 2 * c + b;


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

    bmak.updatet(bmak.random(30, 150));
    
    s = bmak.timestamp;
    d = 0;
    a = 2;

    u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
    u += ";";
    bmak.kact += u;
    bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
    bmak.ta += s;
    bmak.ke_cnt++;

};

function alt_event(bmak){

    var n = 18,
        r = 0,
        i = 0,
        c = 0,
        b = 1,
        l = 0,
        d = 8 * r + 4 * i + 2 * c + b;


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

    bmak.updatet(bmak.random(30, 150));
    
    s = bmak.timestamp;
    d = 0;
    a = 2;

    u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
    u += ";";
    bmak.kact += u;
    bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
    bmak.ta += s;
    bmak.ke_cnt++;

};

function normal_event_hold(bmak, amount) {

    bmak.timestamp += bmak.random(30, 100);

    for(var z = 0; z < (amount - 1) / 2; z++){

        var n = -2,
            r = 0,
            i = 0,
            c = 0,
            b = 0,
            d = 8 * r + 4 * i + 2 * c + b,
            l = 0;

        var k = -1;
        var a = 1;
        var s = bmak.timestamp;

        var u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
        u += ";";
        bmak.kact += u;
        bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
        bmak.ta += s;
        bmak.ke_cnt++;

        Math.random() < 0.8 && bmak.updatet(bmak.random(0, 3));

        a = 3;
        s = bmak.timestamp;
        u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
        u += ";";
        bmak.kact += u;
        bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
        bmak.ta += s;
        bmak.ke_cnt++;

        bmak.updatet(bmak.random(0, 3));

    };

    bmak.updatet(bmak.random(30, 150));

    s = bmak.timestamp;
    d = 0;
    a = 2;

    u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
    u += ";";
    bmak.kact += u;
    bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
    bmak.ta += s;
    bmak.ke_cnt++;

};

function gen_kact(bmak) {

    if(!bmak.timestamp){

        bmak.updatet();

    };

    if (bmak.ke_cnt == bmak.ke_cnt_lmt) {

        return;

    };

    var events = bmak.random(bmak.ke_cnt, bmak.ke_cnt_lmt);
    events -= bmak.ke_cnt;

    if (events <= 1) {

        return;

    };

    for(var o = 0; o < events; o++){

        if(events - o >= 2 && Math.random() > 0.5){

            Math.random() > 0.5 ? Math.random() > 0.5 ? shift_event(bmak) : meta_event(bmak) : Math.random() > 0,5 ? control_event(bmak) : alt_event(bmak);
            o++;

        } else if(events - o >= 3 && Math.random() > 0.5){

            normal_event(bmak);
            o += 2;

        } else if((events - 2) - o > 5 && Math.random() > 0.5){

            (((events - 2) - o) % 2 == 0) ? (normal_event_hold(bmak, ((events - 2) - o) - 1), o += ((events - 2) - o - 1)) : (normal_event_hold(bmak, ((events - 2) - o)), o += ((events - 2) - o));

        } else if((events - 3) - o > 5 && Math.random() > 0.5){

             (((events - 3) - o) % 2 == 0) ? (normal_event_hold(bmak, ((events - 3) - o) - 1), o += ((events - 3) - o - 1)) : (normal_event_hold(bmak, ((events - 3) - o)), o += ((events - 3) - o));

        };

    };

    bmak.aj_type = 3;
    
};

module.exports.gen_kact = gen_kact;