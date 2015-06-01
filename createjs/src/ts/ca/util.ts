'use strict';

export function event(name, parameters = {}) {
    var event = document.createEvent("Event");
    event.initEvent(name,true,true);
    event['parameters'] = _.clone(parameters);
    document.dispatchEvent(event);
}

/** Puts an application-level error onto its corresponding sequence. */
export function onError(e) {
}

var _concat = Array.prototype.concat;

export function baselineText(text, parameters) {
    text = new createjs.Text(text);
    _.forEach(parameters, function(value,index) {
        text[index] = value;
    });
    text['textBaseline'] = 'alphabetic';
    return text;
}

export function trimDefinition(name) {
    return name.slice(0, name.length-3);
}

// Returns the concatenation of the results of mapping f onto coll.
export function mapcat(f, coll) {
    return _concat.apply([], coll.map(f));
}

/** Implements an abstract member function. Throws an error if called. */
export function abstract(): any { throw new Error('abstract method'); }

/** Returns the input string with the first character capitalized. */
export function ucfirst(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export function pad(s: string, c: string, n: number) {
    if(n === 0) return s;
    return pad(s + c, c, n - 1);
}

export function padTime(n: number) {
    var s = n.toString();
    return s.length == 2 ? s : '0' + s;
}

export function numericText(n, withDecimal: boolean = true) {
    if(n == undefined) {
        return '0.00';
    }

    var s:string = n.toString();
    var p = s.indexOf('.');

    if (p === -1) {
        if(s.length <= 3) {
            return (withDecimal) ? s + '.00' : s;
        } else {
            return addComaToNumericNumber(s + '.00', withDecimal);
        }
    }

    var i = 2 - (s.length - (p + 1));

    if (i < 0) return addComaToNumericNumber(s.slice(0, i), withDecimal);

    return addComaToNumericNumber(pad(s, '0', i), withDecimal);
}

export function addComaToNumericNumber(s: string, withDecimal:boolean = true): any{

    if (s.length <= 6) { return s; }

    var noComaStr: string = s;
    var afterDotStr: string = noComaStr.substr((noComaStr.length - 3), noComaStr.length - 1);
    var beforeDotStr: string = noComaStr.substr(0, (noComaStr.length - 3));

    var i: number = beforeDotStr.length;
    var str: string = "";
    _.forEach(beforeDotStr, (c) => {
        --i;
        str += c;
        if ((i % 3) == 0 && i != 0) {
            str += ",";
        }
    });
    if(withDecimal) { str += afterDotStr; }

    return str;
}

/** Returns the distance between two points. */
export function lineLength(a: createjs.Point, b: createjs.Point) {
    var x = b.x - a.x;
    var y = b.y - a.y;
    return Math.sqrt(x * x + y * y);
}

/** Returns the angle between two points, in radians. */
export function lineAngle(a: createjs.Point, b: createjs.Point) {
    return Math.atan2(b.y - a.y, b.x - a.x);
}

var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;

/** Converts an angle from degrees to radian. */
export function deg2rad(n: number) { return n * DEG2RAD; }

/** Converts an angle from radians to degrees. */
export function rad2deg(n: number) { return n * RAD2DEG; }

/** Returns the input number clamped between minimum and maximum values. */
export function clamp(x: number, min: number, max: number) {
    if(x < min) return min;
    if(x > max) return max;
    return x;
}

/** Returns whether the input number is between minimum and maximum values. */
export function between(x: number, min: number, max: number) {
    return x >= min && x <= max;
}

export function round(precision: number, value: number) {
    var n = Math.pow(10, precision);
    return numericText(Math.round(value * n) / n);
}

export var round2 = _.partial(round, 2);

export function localToLocalCoordinate(containerFrom: createjs.Container, containerTo: createjs.Container, origin: createjs.Point)
{
    var point: createjs.Point   = (origin != null) ? origin : new createjs.Point();
        point                   = containerFrom.localToGlobal(point.x, point.y);
        point                   = containerTo.globalToLocal(point.x, point.y);
    
    return point;
}

export function listen(type, callback) {
    document.addEventListener(type, callback);
}

export function unlisten(type, callback) {
    document.removeEventListener(type, callback);
}

export function isMobile() {
    var ua = navigator.userAgent;
    if(ua.match(/Android/i) || ua.match(/webOS/i) || ua.match(/BlackBerry/i) || ua.match(/Windows Phone/i) || 
       ua.match(/iPhone/i)  || ua.match(/iPad/i)  || ua.match(/iPod/i)){
        return true;
    } else {
        return false;
    }
};

/** Returns an object containing the parsed query string. */
export var urlParams = _.memoize(function() {
    var m;
    var pl     = /\+/g;
    var search = /([^&=]+)=?([^&]*)/g;
    var decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); };
    var query  = window.location.search.substring(1);
    var params = {};
    while(m = search.exec(query)) params[decode(m[1])] = decode(m[2]);
    return params;
});

export var os = _.memoize(function() {
    var v = navigator.appVersion;
    if(v.indexOf('Win')   !== -1) return 'Windows';
    if(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) return 'iOS';
    if(v.indexOf('Mac')   !== -1) return 'MacOS';
    if(v.indexOf('X11')   !== -1) return 'UNIX';
    if(v.indexOf('Linux') !== -1) return 'Linux';
    return 'Unknown';
});

export var browser = _.memoize(function() {
    var ua = navigator.userAgent;
    var name, ver;
    var n, v;

    if((v = ua.indexOf('Opera')) !== -1) {
        var o = v + 6;
        if((v = ua.indexOf('Version')) !== -1) o = v + 8;
        name = 'Opera';
        ver  = ua.substring(o);
    }
    else if((v = ua.indexOf('MSIE')) !== -1) {
        name = 'Internet Explorer';
        ver  = ua.substring(v + 5);
    }
    else if((v = ua.indexOf('Chrome')) !== -1) {
        name = 'Chrome';
        ver  = ua.substring(v + 7);
    }
    else if((v = ua.indexOf('Safari')) !== -1) {
        var o = v + 7;
        if((v = ua.indexOf('Version')) !== -1) o = v + 8;
        name = 'Safari';
        ver  = ua.substring(o);
    }
    else if((v = ua.indexOf('Firefox')) !== -1) {
        name = 'Firefox';
        ver  = ua.substring(v + 8);
    }
    else if((n = ua.lastIndexOf(' ') + 1) < (v = ua.lastIndexOf('/'))) {
        name = ua.substring(n, v);
        ver  = ua.substring(v + 1);
        if(name.toLowerCase() === name.toUpperCase())
            name = navigator.appName;
    }
    else {
        name = 'Unknown';
        ver  = '0';
    }
    
    if((v = ver.indexOf(';')) !== -1) ver = ver.substring(0, v);
    if((v = ver.indexOf(' ')) !== -1) ver = ver.substring(0, v);
    
    return {
        name:    name,
        version: parseFloat(ver)
    };
});
