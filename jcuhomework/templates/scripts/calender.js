var calendar = {
    lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560],
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
    Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
    solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
    sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"],
    nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    nStr2: ["初", "十", "廿", "卅"],
    nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
    lYearDays: function(b) {
        var f, e = 348;
        for (f = 32768; f > 8; f >>= 1)
            e += calendar.lunarInfo[b - 1900] & f ? 1 : 0;
        return e + calendar.leapDays(b)
    },
    leapMonth: function(b) {
        return 15 & calendar.lunarInfo[b - 1900]
    },
    leapDays: function(b) {
        return calendar.leapMonth(b) ? 65536 & calendar.lunarInfo[b - 1900] ? 30 : 29 : 0
    },
    monthDays: function(b, f) {
        return f > 12 || f < 1 ? -1 : calendar.lunarInfo[b - 1900] & 65536 >> f ? 30 : 29
    },
    solarDays: function(b, f) {
        if (f > 12 || f < 1)
            return -1;
        var e = f - 1;
        return 1 == e ? b % 4 == 0 && b % 100 != 0 || b % 400 == 0 ? 29 : 28 : calendar.solarMonth[e]
    },
    toGanZhiYear: function(b) {
        var f = (b - 3) % 10
          , e = (b - 3) % 12;
        return 0 == f && (f = 10),
        0 == e && (e = 12),
        calendar.Gan[f - 1] + calendar.Zhi[e - 1]
    },
    toAstro: function(b, f) {
        return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * b - (f < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][b - 1] ? 2 : 0), 2) + "座"
    },
    toGanZhi: function(b) {
        return calendar.Gan[b % 10] + calendar.Zhi[b % 12]
    },
    getTerm: function(b, f) {
        if (b < 1900 || b > 2100)
            return -1;
        if (f < 1 || f > 24)
            return -1;
        var e = calendar.sTermInfo[b - 1900]
          , c = [parseInt("0x" + e.substr(0, 5)).toString(), parseInt("0x" + e.substr(5, 5)).toString(), parseInt("0x" + e.substr(10, 5)).toString(), parseInt("0x" + e.substr(15, 5)).toString(), parseInt("0x" + e.substr(20, 5)).toString(), parseInt("0x" + e.substr(25, 5)).toString()]
          , a = [c[0].substr(0, 1), c[0].substr(1, 2), c[0].substr(3, 1), c[0].substr(4, 2), c[1].substr(0, 1), c[1].substr(1, 2), c[1].substr(3, 1), c[1].substr(4, 2), c[2].substr(0, 1), c[2].substr(1, 2), c[2].substr(3, 1), c[2].substr(4, 2), c[3].substr(0, 1), c[3].substr(1, 2), c[3].substr(3, 1), c[3].substr(4, 2), c[4].substr(0, 1), c[4].substr(1, 2), c[4].substr(3, 1), c[4].substr(4, 2), c[5].substr(0, 1), c[5].substr(1, 2), c[5].substr(3, 1), c[5].substr(4, 2)];
        return parseInt(a[f - 1])
    },
    toChinaMonth: function(b) {
        if (b > 12 || b < 1)
            return -1;
        var f = calendar.nStr3[b - 1];
        return f += "月"
    },
    toChinaDay: function(b) {
        var f;
        switch (b) {
        case 10:
            f = "初十";
            break;
        case 20:
            f = "二十";
            break;
        case 30:
            f = "三十";
            break;
        default:
            f = calendar.nStr2[Math.floor(b / 10)],
            f += calendar.nStr1[b % 10]
        }
        return f
    },
    getAnimal: function(b) {
        return calendar.Animals[(b - 4) % 12]
    },
    solar2lunar: function(b, f, e) {
        if (b < 1900 || b > 2100)
            return -1;
        if (1900 == b && 1 == f && e < 31)
            return -1;
        if (b)
            c = new Date(b,parseInt(f) - 1,e);
        else
            var c = new Date;
        var a, r = 0, t = (b = c.getFullYear(),
        f = c.getMonth() + 1,
        e = c.getDate(),
        (Date.UTC(c.getFullYear(), c.getMonth(), c.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
        for (a = 1900; a < 2101 && t > 0; a++)
            t -= r = calendar.lYearDays(a);
        t < 0 && (t += r,
        a--);
        var n = new Date
          , d = !1;
        n.getFullYear() == b && n.getMonth() + 1 == f && n.getDate() == e && (d = !0);
        var s = c.getDay()
          , l = calendar.nStr1[s];
        0 == s && (s = 7);
        var o = a
          , u = calendar.leapMonth(a)
          , i = !1;
        for (a = 1; a < 13 && t > 0; a++)
            u > 0 && a == u + 1 && 0 == i ? (--a,
            i = !0,
            r = calendar.leapDays(o)) : r = calendar.monthDays(o, a),
            1 == i && a == u + 1 && (i = !1),
            t -= r;
        0 == t && u > 0 && a == u + 1 && (i ? i = !1 : (i = !0,
        --a)),
        t < 0 && (t += r,
        --a);
        var g = a
          , D = t + 1
          , h = f - 1
          , m = calendar.toGanZhiYear(o)
          , T = calendar.getTerm(b, 2 * f - 1)
          , y = calendar.getTerm(b, 2 * f)
          , v = calendar.toGanZhi(12 * (b - 1900) + f + 11);
        e >= T && (v = calendar.toGanZhi(12 * (b - 1900) + f + 12));
        var M = !1
          , p = null;
        T == e && (M = !0,
        p = calendar.solarTerm[2 * f - 2]),
        y == e && (M = !0,
        p = calendar.solarTerm[2 * f - 1]);
        var I = Date.UTC(b, h, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10
          , Y = calendar.toGanZhi(I + e - 1)
          , C = calendar.toAstro(f, e)
          , S = calendar.ns_solarTerm(c);
        return {
            lYear: o,
            lMonth: g,
            lDay: D,
            Animal: calendar.getAnimal(o),
            IMonthCn: (i ? "闰" : "") + calendar.toChinaMonth(g),
            IDayCn: calendar.toChinaDay(D),
            cYear: b,
            cMonth: f,
            cDay: e,
            gzYear: m,
            gzMonth: v,
            gzDay: Y,
            isToday: d,
            isLeap: i,
            nWeek: s,
            ncWeek: "星期" + l,
            isTerm: M,
            Term: p,
            astro: C,
            nsTerm: S
        }
    },
    ns_solarTerm: function(b) {
        var f = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至")
          , e = new Array(1272060,1275495,1281180,1289445,1299225,1310355,1321560,1333035,1342770,1350855,1356420,1359045,1358580,1355055,1348695,1340040,1329630,1318455,1306935,1297380,1286865,1277730,1274550,1271556)
          , c = 31556926
          , a = new Date(1901 / 1 / 1);
        for (a.setTime(94712046e4); b.getFullYear() < a.getFullYear(); )
            a.setTime(a.getTime() - 1e3 * c);
        for (; b.getFullYear() > a.getFullYear(); )
            a.setTime(a.getTime() + 1e3 * c);
        for (var r = 0; b.getMonth() > a.getMonth(); r++)
            a.setTime(a.getTime() + 1e3 * e[r]);
        b.getDate() > a.getDate() && (a.setTime(a.getTime() + 1e3 * e[r]),
        r++),
        b.getDate() > a.getDate() && (a.setTime(a.getTime() + 1e3 * e[r]),
        23 == r ? r = 0 : r++);
        var t = "";
        return b.getDate() == a.getDate() ? t += "今日<" + f[r] + ">" : b.getDate() == a.getDate() - 1 ? t += "明日<" + f[r] + ">" : b.getDate() == a.getDate() - 2 ? t += "后日<" + f[r] + ">" : (b.getMonth() == a.getMonth() ? t += "本月" : t += "下月",
        t += a.getDate() + "日<" + f[r] + ">"),
        t
    },
    lunar2solar: function(b, f, e, c) {
        c = !!c;
        var a = calendar.leapMonth(b);
        calendar.leapDays(b);
        if (c && a != f)
            return -1;
        if (2100 == b && 12 == f && e > 1 || 1900 == b && 1 == f && e < 31)
            return -1;
        var r = calendar.monthDays(b, f)
          , t = r;
        if (c && (t = calendar.leapDays(b, f)),
        b < 1900 || b > 2100 || e > t)
            return -1;
        for (var n = 0, d = 1900; d < b; d++)
            n += calendar.lYearDays(d);
        var s = 0
          , l = !1;
        for (d = 1; d < f; d++)
            s = calendar.leapMonth(b),
            l || s <= d && s > 0 && (n += calendar.leapDays(b),
            l = !0),
            n += calendar.monthDays(b, d);
        c && (n += r);
        var o = Date.UTC(1900, 1, 30, 0, 0, 0)
          , u = new Date(864e5 * (n + e - 31) + o)
          , i = u.getUTCFullYear()
          , g = u.getUTCMonth() + 1
          , D = u.getUTCDate();
        return calendar.solar2lunar(i, g, D)
    }
};
