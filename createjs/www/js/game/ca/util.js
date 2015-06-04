'use strict';
define(["require", "exports"], function(require, exports) {
    function event(name, parameters) {
        if (typeof parameters === "undefined") { parameters = {}; }
        var event = document.createEvent("Event");
        event.initEvent(name, true, true);
        event['parameters'] = _.clone(parameters);
        document.dispatchEvent(event);
    }
    exports.event = event;

    function onError(e) {
    }
    exports.onError = onError;

    var _concat = Array.prototype.concat;

    function baselineText(text, parameters) {
        text = new createjs.Text(text);
        _.forEach(parameters, function (value, index) {
            text[index] = value;
        });
        text['textBaseline'] = 'alphabetic';
        return text;
    }
    exports.baselineText = baselineText;

    function trimDefinition(name) {
        return name.slice(0, name.length - 3);
    }
    exports.trimDefinition = trimDefinition;

    function mapcat(f, coll) {
        return _concat.apply([], coll.map(f));
    }
    exports.mapcat = mapcat;

    function abstract() {
        throw new Error('abstract method');
    }
    exports.abstract = abstract;

    function ucfirst(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    exports.ucfirst = ucfirst;

    function pad(s, c, n) {
        if (n === 0)
            return s;
        return exports.pad(s + c, c, n - 1);
    }
    exports.pad = pad;

    function padTime(n) {
        var s = n.toString();
        return s.length == 2 ? s : '0' + s;
    }
    exports.padTime = padTime;

    function numericText(n, withDecimal) {
        if (typeof withDecimal === "undefined") { withDecimal = true; }
        if (n == undefined) {
            return '0.00';
        }

        var s = n.toString();
        var p = s.indexOf('.');

        if (p === -1) {
            if (s.length <= 3) {
                return (withDecimal) ? s + '.00' : s;
            } else {
                return exports.addComaToNumericNumber(s + '.00', withDecimal);
            }
        }

        var i = 2 - (s.length - (p + 1));

        if (i < 0)
            return exports.addComaToNumericNumber(s.slice(0, i), withDecimal);

        return exports.addComaToNumericNumber(exports.pad(s, '0', i), withDecimal);
    }
    exports.numericText = numericText;

    function addComaToNumericNumber(s, withDecimal) {
        if (typeof withDecimal === "undefined") { withDecimal = true; }
        if (s.length <= 6) {
            return s;
        }

        var noComaStr = s;
        var afterDotStr = noComaStr.substr((noComaStr.length - 3), noComaStr.length - 1);
        var beforeDotStr = noComaStr.substr(0, (noComaStr.length - 3));

        var i = beforeDotStr.length;
        var str = "";
        _.forEach(beforeDotStr, function (c) {
            --i;
            str += c;
            if ((i % 3) == 0 && i != 0) {
                str += ",";
            }
        });
        if (withDecimal) {
            str += afterDotStr;
        }

        return str;
    }
    exports.addComaToNumericNumber = addComaToNumericNumber;

    function calculateIntersection(rect1, rect2, x, y) {
        x = x || 0;
        y = y || 0;

        var dx, dy, r1 = {}, r2 = {};
        r1['cx'] = rect1.x + x + (r1['hw'] = (rect1.width / 2));
        r1['cy'] = rect1.y + y + (r1['hh'] = (rect1.height / 2));
        r2['cx'] = rect2.x + (r2['hw'] = (rect2.width / 2));
        r2['cy'] = rect2.y + (r2['hh'] = (rect2.height / 2));

        dx = Math.abs(r1['cx'] - r2['cx']) - (r1['hw'] + r2['hw']);
        dy = Math.abs(r1['cy'] - r2['cy']) - (r1['hh'] + r2['hh']);

        if (dx < 0 && dy < 0) {
            return { width: -dx, height: -dy };
        } else {
            return null;
        }
    }
    exports.calculateIntersection = calculateIntersection;

    function calculateCollision(obj, direction, collideables, moveBy) {
        moveBy = moveBy || { x: 0, y: 0 };
        if (direction != 'x' && direction != 'y') {
            direction = 'x';
        }
        var measure = direction == 'x' ? 'width' : 'height', oppositeDirection = direction == 'x' ? 'y' : 'x', oppositeMeasure = direction == 'x' ? 'height' : 'width', bounds = { x: obj.x, y: obj.y, width: 48, height: 48 }, cbounds, collision = null, cc = 0;

        while (!collision && cc < collideables.length) {
            cbounds = { x: collideables[cc].x, y: collideables[cc].y, width: 48, height: 48 };
            if (collideables[cc].isVisible) {
                collision = exports.calculateIntersection(bounds, cbounds, moveBy.x, moveBy.y);
            }
            cc++;
        }

        if (collision) {
            var sign = Math.abs(moveBy[direction]) / moveBy[direction];
            if (direction == 'y') {
                moveBy[direction] -= collision['height'] * sign;
            } else {
                moveBy[direction] -= collision['width'] * sign;
            }
        }

        return collision;
    }
    exports.calculateCollision = calculateCollision;

    function lineLength(a, b) {
        var x = b.x - a.x;
        var y = b.y - a.y;
        return Math.sqrt(x * x + y * y);
    }
    exports.lineLength = lineLength;

    function lineAngle(a, b) {
        return Math.atan2(b.y - a.y, b.x - a.x);
    }
    exports.lineAngle = lineAngle;

    var DEG2RAD = Math.PI / 180;
    var RAD2DEG = 180 / Math.PI;

    function deg2rad(n) {
        return n * DEG2RAD;
    }
    exports.deg2rad = deg2rad;

    function rad2deg(n) {
        return n * RAD2DEG;
    }
    exports.rad2deg = rad2deg;

    function clamp(x, min, max) {
        if (x < min)
            return min;
        if (x > max)
            return max;
        return x;
    }
    exports.clamp = clamp;

    function between(x, min, max) {
        return x >= min && x <= max;
    }
    exports.between = between;

    function round(precision, value) {
        var n = Math.pow(10, precision);
        return exports.numericText(Math.round(value * n) / n);
    }
    exports.round = round;

    exports.round2 = _.partial(exports.round, 2);

    function localToLocalCoordinate(containerFrom, containerTo, origin) {
        var point = (origin != null) ? origin : new createjs.Point();
        point = containerFrom.localToGlobal(point.x, point.y);
        point = containerTo.globalToLocal(point.x, point.y);

        return point;
    }
    exports.localToLocalCoordinate = localToLocalCoordinate;

    function listen(type, callback) {
        document.addEventListener(type, callback);
    }
    exports.listen = listen;

    function unlisten(type, callback) {
        document.removeEventListener(type, callback);
    }
    exports.unlisten = unlisten;

    function isMobile() {
        var ua = navigator.userAgent;
        if (ua.match(/Android/i) || ua.match(/webOS/i) || ua.match(/BlackBerry/i) || ua.match(/Windows Phone/i) || ua.match(/iPhone/i) || ua.match(/iPad/i) || ua.match(/iPod/i)) {
            return true;
        } else {
            return false;
        }
    }
    exports.isMobile = isMobile;
    ;

    exports.urlParams = _.memoize(function () {
        var m;
        var pl = /\+/g;
        var search = /([^&=]+)=?([^&]*)/g;
        var decode = function (s) {
            return decodeURIComponent(s.replace(pl, ' '));
        };
        var query = window.location.search.substring(1);
        var params = {};
        while (m = search.exec(query))
            params[decode(m[1])] = decode(m[2]);
        return params;
    });

    exports.os = _.memoize(function () {
        var v = navigator.appVersion;
        if (v.indexOf('Win') !== -1)
            return 'Windows';
        if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g))
            return 'iOS';
        if (v.indexOf('Mac') !== -1)
            return 'MacOS';
        if (v.indexOf('X11') !== -1)
            return 'UNIX';
        if (v.indexOf('Linux') !== -1)
            return 'Linux';
        return 'Unknown';
    });

    exports.browser = _.memoize(function () {
        var ua = navigator.userAgent;
        var name, ver;
        var n, v;

        if ((v = ua.indexOf('Opera')) !== -1) {
            var o = v + 6;
            if ((v = ua.indexOf('Version')) !== -1)
                o = v + 8;
            name = 'Opera';
            ver = ua.substring(o);
        } else if ((v = ua.indexOf('MSIE')) !== -1) {
            name = 'Internet Explorer';
            ver = ua.substring(v + 5);
        } else if ((v = ua.indexOf('Chrome')) !== -1) {
            name = 'Chrome';
            ver = ua.substring(v + 7);
        } else if ((v = ua.indexOf('Safari')) !== -1) {
            var o = v + 7;
            if ((v = ua.indexOf('Version')) !== -1)
                o = v + 8;
            name = 'Safari';
            ver = ua.substring(o);
        } else if ((v = ua.indexOf('Firefox')) !== -1) {
            name = 'Firefox';
            ver = ua.substring(v + 8);
        } else if ((n = ua.lastIndexOf(' ') + 1) < (v = ua.lastIndexOf('/'))) {
            name = ua.substring(n, v);
            ver = ua.substring(v + 1);
            if (name.toLowerCase() === name.toUpperCase())
                name = navigator.appName;
        } else {
            name = 'Unknown';
            ver = '0';
        }

        if ((v = ver.indexOf(';')) !== -1)
            ver = ver.substring(0, v);
        if ((v = ver.indexOf(' ')) !== -1)
            ver = ver.substring(0, v);

        return {
            name: name,
            version: parseFloat(ver)
        };
    });
});
//# sourceMappingURL=util.js.map
