var bmak = {

    ver: 1.7,
    ke_cnt_lmt: 150,
    mme_cnt_lmt: 100,
    mduce_cnt_lmt: 75,
    pme_cnt_lmt: 25,
    pduce_cnt_lmt: 25,
    tme_cnt_lmt: 25,
    tduce_cnt_lmt: 25,
    doe_cnt_lmt: 10,
    dme_cnt_lmt: 10,
    vc_cnt_lmt: 100,
    doa_throttle: 0,
    dma_throttle: 0,
    session_id: "default_session",
    js_post: false,
    loc: "",
    auth: "",
    api_public_key: "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",
    aj_lmt_doact: 1,
    aj_lmt_dmact: 1,
    aj_lmt_tact: 1,
    ce_js_post: 0,
    init_time: 0,
    informinfo: "",
    prevfid: -1,
    fidcnt: 0,
    sensor_data: 0,
    ins: null,
    cns: null,
    enGetLoc: 0,
    enReadDocUrl: 1,
    disFpCalOnTimeout: 0,
    xagg: -1,
    pen: -1,
    brow: "",
    browver: "",
    psub: "-",
    lang: "-",
    prod: "-",
    plen: -1,
    doadma_en: 0,
    sdfn: [],
    d2: 0,
    d3: 0,
    thr: 0,
    cs: "0a46G5m17Vrp4o4c",
    hn: "unk",
    z1: 0,
    o9: 0,
    vc: "",
    y1: 2016,
    ta: 0,
    tst: -1,
    t_tst: 0,
    ckie: "_abck",
    n_ck: "0",
    ckurl: 0,
    bm: false,
    mr: "-1",
    altFonts: false,
    rst: false,
    runFonts: false,
    fsp: false,
    firstLoad: true,
    pstate: false,
    mn_mc_lmt: 10,
    mn_state: 0,
    mn_mc_indx: 0,
    mn_sen: 0,
    mn_tout: 100,
    mn_stout: 1e3,
    mn_ct: 1,
    mn_cc: "",
    mn_cd: 1e4,
    mn_lc: [],
    mn_ld: [],
    mn_lcl: 0,
    mn_al: [],
    mn_il: [],
    mn_tcl: [],
    mn_r: [],
    mn_rt: 0,
    mn_wt: 0,
    mn_abck: "",
    mn_psn: "",
    mn_ts: "",
    mn_lg: [],
    loap: 1,
    dcs: 0

};

bmak.kact = "", bmak.ke_cnt = 0, bmak.ke_vel = 0, bmak.mact = "", bmak.mme_cnt = 0, bmak.mduce_cnt = 0, bmak.me_vel = 0, bmak.pact = "", bmak.pme_cnt = 0, bmak.pduce_cnt = 0, bmak.pe_vel = 0, bmak.tact = "", bmak.tme_cnt = 0, bmak.tduce_cnt = 0, bmak.te_vel = 0, bmak.doact = "", bmak.doe_cnt = 0, bmak.doe_vel = 0, bmak.dmact = "", bmak.dme_cnt = 0, bmak.dme_vel = 0, bmak.vcact = "", bmak.vc_cnt = 0, bmak.aj_indx = 0, bmak.aj_ss = 0, bmak.aj_type = -1, bmak.aj_indx_doact = 0, bmak.aj_indx_dmact = 0, bmak.aj_indx_tact = 0, bmak.me_cnt = 0, bmak.pe_cnt = 0, bmak.te_cnt = 0, bmak.nav_perm = "", bmak.brv = 0, bmak.hbCalc = false, bmak.fmh = "", bmak.fmz = "", bmak.ssh = "", bmak.wv = "", bmak.wr = "", bmak.weh = "", bmak.wl = 0;

bmak.random = function(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
};

bmak.get_cf_date = function() {
    return Date.now ? Date.now() : +new Date;
}

bmak.uar = function() {
    return bmak.device.navigator.userAgent.replace(/\\|"/g, "");
}

bmak.ab = function(t) {
    if (null == t) return -1;
    try {
        for (var a = 0, e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            n < 128 && (a += n);
        }
        return a;
    } catch (t) {
        return -2;
    }
}

bmak.pi = function(t) {
    return parseInt(t);
}

bmak.gbrv = function() {
    //navigator.brave && navigator.brave.isBrave().then(function(t) {
    //    bmak.brv = t ? 1 : 0;
    //}).catch(function(t) {
    //    bmak.brv = 0;
    //});

    bmak.brv = bmak.device.brave;
}

bmak.get_browser = function() {
    bmak.device.navigator.productSub && (bmak.psub = bmak.device.navigator.productSub), bmak.device.navigator.language && (bmak.lang = bmak.device.navigator.language), bmak.device.navigator.product && (bmak.prod = bmak.device.navigator.product), bmak.plen = bmak.device.navigator.plugins ? bmak.device.navigator.plugins.length : -1;
}

bmak.bc = function() {
    var t = bmak.device.window.addEventListener ? 1 : 0,
        a = bmak.device.window.XMLHttpRequest ? 1 : 0,
        e = bmak.device.window.XDomainRequest ? 1 : 0,
        n = bmak.device.window.emit ? 1 : 0,
        o = bmak.device.window.DeviceOrientationEvent ? 1 : 0,
        m = bmak.device.window.DeviceMotionEvent ? 1 : 0,
        r = bmak.device.window.TouchEvent ? 1 : 0,
        i = bmak.device.window.spawn ? 1 : 0,
        c = bmak.device.window.chrome ? 1 : 0,
        //b = Function.prototype.bind ? 1 : 0,
        b = true ? 1 : 0,
        //d = window.Buffer ? 1 : 0,
        d = false ? 1 : 0,
        s = bmak.device.window.PointerEvent ? 1 : 0;
    try {
        var k = bmak.device.window.innerWidth ? 1 : 0;
    } catch (t) {
        var k = 0;
    }
    try {
        var l = bmak.device.window.outerWidth ? 1 : 0;
    } catch (t) {
        var l = 0;
    }
    bmak.xagg = t + (a << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (k << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (s << 13);
}

bmak.bmisc = function() {
    bmak.pen = bmak.device.window._phantom ? 1 : 0, bmak.wen = bmak.device.window.webdriver ? 1 : 0, bmak.den = bmak.device.window.domAutomation ? 1 : 0;
}

bmak.bd = function() {
    var t = [],
        a = bmak.device.window.callPhantom ? 1 : 0;
    t.push(",cpen:" + a);
    var e = 0;
    //window.ActiveXObject && "ActiveXObject" in window && (e = 1), t.push("i1:" + e);
    false && (e = 1), t.push("i1:" + e);
    var n = "number" == typeof bmak.device.document.documentMode ? 1 : 0;
    t.push("dm:" + n);
    var o = bmak.device.window.chrome && bmak.device.window.chrome.webstore ? 1 : 0;
    t.push("cwen:" + o);
    //var m = navigator.onLine ? 1 : 0;
    var m = true ? 1 : 0;
    t.push("non:" + m);
    var r = bmak.device.window.opera ? 1 : 0;
    t.push("opc:" + r);
    //var i = "undefined" != typeof InstallTrigger ? 1 : 0;
    var i;

    if (bmak.device.other.InstallTrigger) {

        i = 1

    } else {

        i = 0;

    };

    t.push("fc:" + i);
    //var c = window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0;
    var c = bmak.device.window.HTMLElement ? 1 : 0;
    t.push("sc:" + c);
    //var b = "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0;
    var b = true ? 1 : 0;
    t.push("wrc:" + b);
    var d = bmak.device.window.mozInnerScreenY ? bmak.device.window.mozInnerScreenY : 0;
    t.push("isc:" + d), bmak.d2 = bmak.pi(bmak.z1 / 23);
    //var s = "function" == typeof navigator.vibrate ? 1 : 0;
    var s = bmak.device.navigator.vibrate ? 1 : 0;
    t.push("vib:" + s);
    //var k = "function" == typeof navigator.getBattery ? 1 : 0;
    var k = bmak.device.navigator.getBattery ? 1 : 0;
    t.push("bat:" + k);
    //var l = Array.prototype.forEach ? 0 : 1;
    var l = bmak.device.other.prototype_forEach ? 0 : 1;
    t.push("x11:" + l);
    //var u = "FileReader" in window ? 1 : 0;
    var u = bmak.device.window.FileReader ? 1 : 0;
    return t.push("x12:" + u), t.join(",");
}

bmak.gd = function() {
    var t = bmak.uar(),
        a = "" + bmak.ab(t),
        e = bmak.start_ts / 2,
        n = -1,
        o = -1,
        m = -1,
        r = -1,
        i = -1,
        c = -1,
        b = -1;
    try {
        n = bmak.device.screen ? bmak.device.screen.availWidth : -1;
    } catch (t) {
        n = -1;
    }
    try {
        o = bmak.device.screen ? bmak.device.screen.availHeight : -1;
    } catch (t) {
        o = -1;
    }
    try {
        m = bmak.device.screen ? bmak.device.screen.width : -1;
    } catch (t) {
        m = -1;
    }
    try {
        r = bmak.device.screen ? bmak.device.screen.height : -1;
    } catch (t) {
        r = -1;
    }
    try {
        i = bmak.device.window.innerHeight;
    } catch (t) {
        i = -1;
    }
    try {
        c = bmak.device.window.innerWidth;
    } catch (t) {
        c = -1;
    }
    try {
        b = bmak.device.window.outerWidth ? bmak.device.window.outerWidth : -1;
    } catch (t) {
        b = -1;
    }
    bmak.z1 = bmak.pi(bmak.start_ts / (bmak.y1 * bmak.y1));
    var d = Math.random(),
        s = bmak.pi(1e3 * d / 2),
        k = d + "";
    return k = k.slice(0, 11) + s, bmak.gbrv(), bmak.get_browser(), bmak.bc(), bmak.bmisc(), t + ",uaend," + bmak.xagg + "," + bmak.psub + "," + bmak.lang + "," + bmak.prod + "," + bmak.plen + "," + bmak.pen + "," + bmak.wen + "," + bmak.den + "," + bmak.z1 + "," + bmak.d3 + "," + n + "," + o + "," + m + "," + r + "," + c + "," + i + "," + b + "," + bmak.bd() + "," + a + "," + k + "," + e + "," + bmak.brv + ",loc:" + bmak.loc;
}

bmak.getforminfo = function() {
    //for (var t = "", a = "", e = document.getElementsByTagName("input"), n = -1, o = 0; o < e.length; o++) {
    //    var m = e[o],
    //        r = bmak.ab(m.getAttribute("name")),
    //        i = bmak.ab(m.getAttribute("id")),
    //        c = m.getAttribute("required"),
    //        b = null == c ? 0 : 1,
    //        d = m.getAttribute("type"),
    //        s = null == d ? -1 : bmak.get_type(d),
    //        k = m.getAttribute("autocomplete");
    //    null == k ? n = -1 : (k = k.toLowerCase(), n = "off" == k ? 0 : "on" == k ? 1 : 2);
    //    var l = m.defaultValue,
    //        u = m.value,
    //        _ = 0,
    //        f = 0;
    //    l && 0 != l.length && (f = 1), !u || 0 == u.length || f && u == l || (_ = 1), 2 != s && (t = t + s + "," + n + "," + _ + "," + b + "," + i + "," + r + "," + f + ";"), a = a + _ + ";";
    //}
    //return null == bmak.ins && (bmak.ins = a), bmak.cns = a, t;

    var fnl_informinfo = "0,0,0,0,2402,310,0;0,0,0,0,1802,310,0;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,0;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,520,0;0,-1,0,0,-1,520,0;";
    var dsg_informinfo = "0,-1,0,0,1227,-1,0;";

    if (bmak.site == 'fnl') {

        return fnl_informinfo;

    } else if (bmak.site == 'dsg'){

        return dsg_informinfo;

    };

}

bmak.getdurl = function() {
    //return bmak.enReadDocUrl ? document.URL.replace(/\\|"/g, "") : "";

    var fnl_url = 'https://www.finishline.com/';
    var dsg_url = 'https://www.dickssportinggoods.com/';

    if (bmak.site == 'fnl') {

        return fnl_url;

    } else {

        return dsg_url;
        
    };

}

bmak.updatet = function(amount) {
    //return bmak.get_cf_date() - bmak.start_ts;

    if (!bmak.timestamp) {

        bmak.timestamp = bmak.random(100, 1500);

    } else if(amount){

        bmak.timestamp += amount;

    }else {

        bmak.timestamp += bmak.random(1, 300);

    };

    return bmak.timestamp;

}

bmak.fas = function() {
    try {
        return Boolean(bmak.device.navigator.credentials) + (Boolean(bmak.device.navigator.appMinorVersion) << 1) + (Boolean(bmak.device.navigator.bluetooth) << 2) + (Boolean(bmak.device.navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(bmak.device.navigator.getGamepads) << 5) + (Boolean(bmak.device.navigator.getStorageUpdates) << 6) + (Boolean(bmak.device.navigator.hardwareConcurrency) << 7) + (Boolean(bmak.device.navigator.mediaDevices) << 8) + (Boolean(bmak.device.navigator.mozAlarms) << 9) + (Boolean(bmak.device.navigator.mozConnection) << 10) + (Boolean(bmak.device.navigator.mozIsLocallyAvailable) << 11) + (Boolean(bmak.device.navigator.mozPhoneNumberService) << 12) + (Boolean(bmak.device.navigator.msManipulationViewsEnabled) << 13) + (Boolean(bmak.device.navigator.permissions) << 14) + (Boolean(bmak.device.navigator.registerProtocolHandler) << 15) + (Boolean(bmak.device.navigator.requestMediaKeySystemAccess) << 16) + (Boolean(bmak.device.navigator.requestWakeLock) << 17) + (Boolean(bmak.device.navigator.sendBeacon) << 18) + (Boolean(bmak.device.navigator.serviceWorker) << 19) + (Boolean(bmak.device.navigator.storeWebWideTrackingException) << 20) + (Boolean(bmak.device.navigator.webkitGetGamepads) << 21) + (Boolean(bmak.device.navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24);
    } catch (t) {
        return 0;
    }
}

bmak.hbs = function() {
    try {
        return Boolean(bmak.device.window.__nightmare) + (Boolean(bmak.device.window.cdc_adoQpoasnfa76pfcZLmcfl_Array) << 1) + (Boolean(bmak.device.window.cdc_adoQpoasnfa76pfcZLmcfl_Promise) << 2) + (Boolean(bmak.device.window.cdc_adoQpoasnfa76pfcZLmcfl_Symbol) << 3) + (Boolean(bmak.device.window.OSMJIF) << 4) + (Boolean(bmak.device.window._Selenium_IDE_Recorder) << 5) + (Boolean(bmak.device.window.__$webdriverAsyncExecutor) << 6) + (Boolean(bmak.device.window.__driver_evaluate) << 7) + (Boolean(bmak.device.window.__driver_unwrapped) << 8) + (Boolean(bmak.device.window.__fxdriver_evaluate) << 9) + (Boolean(bmak.device.window.__fxdriver_unwrapped) << 10) + (Boolean(bmak.device.window.__lastWatirAlert) << 11) + (Boolean(bmak.device.window.__lastWatirConfirm) << 12) + (Boolean(bmak.device.window.__lastWatirPrompt) << 13) + (Boolean(bmak.device.window.__phantomas) << 14) + (Boolean(bmak.device.window.__selenium_evaluate) << 15) + (Boolean(bmak.device.window.__selenium_unwrapped) << 16) + (Boolean(bmak.device.window.__webdriverFuncgeb) << 17) + (Boolean(bmak.device.window.__webdriver__chr) << 18) + (Boolean(bmak.device.window.__webdriver_evaluate) << 19) + (Boolean(bmak.device.window.__webdriver_script_fn) << 20) + (Boolean(bmak.device.window.__webdriver_script_func) << 21) + (Boolean(bmak.device.window.__webdriver_script_function) << 22) + (Boolean(bmak.device.window.__webdriver_unwrapped) << 23) + (Boolean(bmak.device.window.awesomium) << 24) + (Boolean(bmak.device.window.callSelenium) << 25) + (Boolean(bmak.device.window.calledPhantom) << 26) + (Boolean(bmak.device.window.calledSelenium) << 27) + (Boolean(bmak.device.window.domAutomationController) << 28) + (Boolean(bmak.device.window.watinExpressionError) << 29) + (Boolean(bmak.device.window.watinExpressionResult) << 30) + (Boolean(bmak.device.window.spynner_additional_js_loaded) << 31) + (Boolean(bmak.device.document.$chrome_asyncScriptInfo) << 32) + (Boolean(bmak.device.window.fmget_targets) << 33) + (Boolean(bmak.device.window.geb) << 34);
    } catch (t) {
        return 0;
    }
}

bmak.gwd = function() {
    try {
        return bmak.device.navigator.webdriver ? bmak.device.navigator.webdriver : -1;
    } catch (t) {
        return 0;
    }
}

bmak.ff = function(t) {
    return String.fromCharCode(t);
}

bmak.jrs = function(t) {
    for (var a = Math.floor(1e5 * Math.random() + 1e4), e = String(t * a), n = 0, o = [], m = e.length >= 18; o.length < 6;) o.push(parseInt(e.slice(n, n + 2))), n = m ? n + 3 : n + 2;
    return [a, bmak.cal_dis(o)];
}

bmak.cal_dis = function(t) {
    var a = t[0] - t[1],
        e = t[2] - t[3],
        n = t[4] - t[5],
        o = Math.sqrt(a * a + e * e + n * n);
    return Math.floor(o);
}

bmak.x2 = function() {
    var t = bmak.ff,
        a = t(98) + t(109) + t(97) + t(107),
        e = t(103) + t(101) + t(116) + t(95) + t(99) + t(102) + t(95) + t(100) + t(97) + t(116) + t(101),
        //n = window[a][e],
        n = bmak.get_cf_date,
        o = 0;
    return "function" == typeof n && (o = n()), o;
}

bmak.cc = function(t) {
    var a = t % 4;
    2 == a && (a = 3);
    var e = 42 + a,
        n = function(t, a) {
            return 0;
        };
    if (42 == e) var n = function(t, a) {
        return t * a;
    };
    else if (43 == e) var n = function(t, a) {
        return t + a;
    };
    else var n = function(t, a) {
        return t - a;
    };
    return n;
}

bmak.to = function() {
    var t = bmak.x2() % 1e7;
    bmak.d3 = t;
    for (var a = t, e = bmak.pi(bmak.ff(51)), n = 0; n < 5; n++) {
        var o = bmak.pi(t / Math.pow(10, n)) % 10,
            m = o + 1;
        op = bmak.cc(o), a = op(a, m);
    }
    bmak.o9 = a * e;
}

bmak.od = function(t, a) {
    try {
        t = String(t), a = String(a);
        var e = [],
            n = a.length;
        if (n > 0) {
            for (var o = 0; o < t.length; o++) {
                var m = t.charCodeAt(o),
                    r = t.charAt(o),
                    i = a.charCodeAt(o % n);
                m = bmak.rir(m, 47, 57, i), m != t.charCodeAt(o) && (r = String.fromCharCode(m)), e.push(r);
            }
            if (e.length > 0) return e.join("");
        }
    } catch (t) {}
    return t;
}

bmak.rir = function(t, a, e, n) {
    return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a), t;
}

bmak.mn_get_current_challenges = function(cookie) {
    var t = bmak.get_mn_params_from_abck(cookie),
        a = [];
    if (null != t)
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (n.length > 0) {
                var o = n[1] + n[2],
                    m = n[6];
                a[m] = o;
            }
        }
    return a;
}

bmak.get_mn_params_from_abck = function(cookie) {
    var t = [
        []
    ];
    try {
        var a = cookie;
        if (false !== a) {
            var e = decodeURIComponent(a).split("~");
            if (e.length >= 5) {
                var n = e[0],
                    o = e[4],
                    m = o.split("||");
                if (m.length > 0)
                    for (var r = 0; r < m.length; r++) {
                        var i = m[r],
                            c = i.split("-");
                        if (c.length >= 5) {
                            var b = bmak.pi(c[0]),
                                d = c[1],
                                s = bmak.pi(c[2]),
                                k = bmak.pi(c[3]),
                                l = bmak.pi(c[4]),
                                u = 1;
                            c.length >= 6 && (u = bmak.pi(c[5]));
                            var _ = [b, n, d, s, k, l, u];
                            2 == u ? t.splice(0, 0, _) : t.push(_);
                        }
                    }
            }
        }
    } catch (t) {}
    return t;
}

bmak.mn_get_new_challenge_params = function(t) {
    var a = null,
        e = null,
        n = null;
    if (null != t)
        for (var o = 0; o < t.length; o++) {
            var m = t[o];
            if (m.length > 0) {
                for (var r = m[0], i = bmak.mn_abck + bmak.start_ts + m[2], c = (m[3], m[6]), b = 0; b < bmak.mn_lcl && (1 == r && bmak.mn_lc[b] != i); b++);
                b == bmak.mn_lcl && (a = o, 2 == c && (e = o), 3 == c && (n = o));
            }
        }
    return null != n && bmak.pstate ? t[n] : null == e || bmak.pstate ? null == a || bmak.pstate ? null : t[a] : t[e];
}

bmak.mn_update_challenge_details = function(t) {
    bmak.mn_sen = t[0], bmak.mn_abck = t[1], bmak.mn_psn = t[2], bmak.mn_cd = t[3], bmak.mn_tout = t[4], bmak.mn_stout = t[5], bmak.mn_ct = t[6], bmak.mn_ts = bmak.start_ts, bmak.mn_cc = bmak.mn_abck + bmak.start_ts + bmak.mn_psn;
}

bmak.encode_utf8 = function(t) {
    return unescape(encodeURIComponent(t));
}

bmak.rotate_right = function(t, a) {
    return t >>> a | t << 32 - a;
}

bmak.mn_s = function(t) {
    var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        e = 1779033703,
        n = 3144134277,
        o = 1013904242,
        m = 2773480762,
        r = 1359893119,
        i = 2600822924,
        c = 528734635,
        b = 1541459225,
        d = bmak.encode_utf8(t),
        s = 8 * d.length;
    d += String.fromCharCode(128);
    for (var k = d.length / 4 + 2, l = Math.ceil(k / 16), u = new Array(l), _ = 0; _ < l; _++) {
        u[_] = new Array(16);
        for (var f = 0; f < 16; f++) u[_][f] = d.charCodeAt(64 * _ + 4 * f) << 24 | d.charCodeAt(64 * _ + 4 * f + 1) << 16 | d.charCodeAt(64 * _ + 4 * f + 2) << 8 | d.charCodeAt(64 * _ + 4 * f + 3) << 0;
    }
    var p = s / Math.pow(2, 32);
    u[l - 1][14] = Math.floor(p), u[l - 1][15] = s;
    for (var v = 0; v < l; v++) {
        for (var h, g = new Array(64), w = e, y = n, E = o, S = m, C = r, h = i, B = c, x = b, _ = 0; _ < 64; _++) {
            var M, j, A, L, P, T;
            _ < 16 ? g[_] = u[v][_] : (M = bmak.rotate_right(g[_ - 15], 7) ^ bmak.rotate_right(g[_ - 15], 18) ^ g[_ - 15] >>> 3, j = bmak.rotate_right(g[_ - 2], 17) ^ bmak.rotate_right(g[_ - 2], 19) ^ g[_ - 2] >>> 10, g[_] = g[_ - 16] + M + g[_ - 7] + j), j = bmak.rotate_right(C, 6) ^ bmak.rotate_right(C, 11) ^ bmak.rotate_right(C, 25), A = C & h ^ ~C & B, L = x + j + A + a[_] + g[_], M = bmak.rotate_right(w, 2) ^ bmak.rotate_right(w, 13) ^ bmak.rotate_right(w, 22), P = w & y ^ w & E ^ y & E, T = M + P, x = B, B = h, h = C, C = S + L >>> 0, S = E, E = y, y = w, w = L + T >>> 0;
        }
        e += w, n += y, o += E, m += S, r += C, i += h, c += B, b += x;
    }
    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, 255 & b];
}

bmak.mn_pr = function() {
    return bmak.mn_al.join(",") + ";" + bmak.mn_tcl.join(",") + ";" + bmak.mn_il.join(",") + ";" + bmak.mn_lg.join(",") + ";";
}

bmak.bdm = function(t, a) {
    for (var e = 0, n = 0; n < t.length; ++n) e = (e << 8 | t[n]) >>> 0, e %= a;
    return e;
}

bmak.mn_w = function() {

    try {
        for (; bmak.mn_mc_indx < bmak.mn_mc_lmt; bmak.mn_mc_indx++) {
            for (var t = 0, a = 0, e = 0, n = "", o = bmak.get_cf_date(), m = bmak.mn_cd + bmak.mn_mc_indx; 0 == t;) {
                n = Math.random().toString(16);
                var r = bmak.mn_cc + m.toString() + n,
                    i = bmak.mn_s(r);
                if (0 == bmak.bdm(i, m)) t = 1, e = bmak.get_cf_date() - o, bmak.mn_al.push(n), bmak.mn_tcl.push(e), bmak.mn_il.push(a), 0 == bmak.mn_mc_indx && (bmak.mn_lg.push(bmak.mn_abck), bmak.mn_lg.push(bmak.mn_ts), bmak.mn_lg.push(bmak.mn_psn), bmak.mn_lg.push(bmak.mn_cc), bmak.mn_lg.push(bmak.mn_cd.toString()), bmak.mn_lg.push(m.toString()), bmak.mn_lg.push(n), bmak.mn_lg.push(r), bmak.mn_lg.push(i), bmak.mn_lg.push(bmak.mn_rt));
                else if ((a += 1) % 1e3 == 0 && (e = bmak.get_cf_date() - o) > bmak.mn_stout) return bmak.mn_wt += e, void setTimeout(bmak.mn_w, bmak.mn_stout);
            }
        };
        (bmak.mn_mc_indx = 0, bmak.mn_lc[bmak.mn_lcl] = bmak.mn_cc, bmak.mn_ld[bmak.mn_lcl] = bmak.mn_cd, bmak.mn_lcl = bmak.mn_lcl + 1, bmak.mn_state = 0, bmak.mn_lg.push(bmak.mn_wt), bmak.mn_lg.push(bmak.get_cf_date()), bmak.mn_r[bmak.mn_abck + bmak.mn_psn] = bmak.mn_pr(), bmak.js_post && (bmak.aj_type = 8, 2 == bmak.mn_ct && (bmak.dcs = 1)));
        //bmak.mn_mc_indx += 1, bmak.mn_mc_indx < bmak.mn_mc_lmt ? setTimeout(bmak.mn_w, e) : (bmak.mn_mc_indx = 0, bmak.mn_lc[bmak.mn_lcl] = bmak.mn_cc, bmak.mn_ld[bmak.mn_lcl] = bmak.mn_cd, bmak.mn_lcl = bmak.mn_lcl + 1, bmak.mn_state = 0, bmak.mn_lg.push(bmak.mn_wt), bmak.mn_lg.push(bmak.get_cf_date()), bmak.mn_r[bmak.mn_abck + bmak.mn_psn] = bmak.mn_pr(), bmak.js_post && (bmak.aj_type = 8, 2 == bmak.mn_ct && (bmak.dcs = 1)));
    } catch (t) {}

}

bmak.mn_poll = function(cookie) {
    if (0 == bmak.mn_state) {
        var t = bmak.get_mn_params_from_abck(cookie);
        var a = bmak.mn_get_new_challenge_params(t);
        null != a && (bmak.mn_update_challenge_details(a), bmak.mn_sen && (bmak.mn_state = 1, bmak.mn_mc_indx = 0, bmak.mn_al = [], bmak.mn_il = [], bmak.mn_tcl = [], bmak.mn_lg = [], bmak.mn_rts = bmak.get_cf_date(), bmak.mn_rt = bmak.mn_rts - bmak.start_ts, bmak.mn_wt = 0, setTimeout(bmak.mn_w, bmak.mn_tout)));
    };
}

bmak.mn_init = function(cookie) {
    var t = 200;
    (t = 100), setInterval(bmak.mn_poll, t, cookie);
}

module.exports = bmak;