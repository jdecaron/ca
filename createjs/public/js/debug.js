// Initialization
// -----------------------------------------------------------------------------

document['frima'] = {
    debug:        	true,
    definition:     'hd',
    enablefps:   	false,
    enablesounds: 	true,
    enablerender: 	true,
    framerate: 	    30,
    load:         	'main',
	theme:			'ski',
    multi:          false,
    musicvolume:   	0.3,
    soundvolume:  	1.0,
    locale:       	'en',
	ratio:			false,
	maxWidth:	0,
	maxHeight:	0,
	scalable:		true
};

window.onerror = function(message, url, lineNumber, column, errorObj) {
    var toSend = {
        msg:  message,
        file: url,
        line: lineNumber
    };
    if(errorObj) {
        toSend['stack'] = errorObj.stack;
    }
    $.post('/debug/error', toSend);
    return false;
};

var options = function(event) {
    var urlAmperstandSplit = window.location.hash.replace('#','').split('&');
	
    var urlOptionList = [];
    for(var i=0;i<urlAmperstandSplit.length;i++) {
        var option = urlAmperstandSplit[i];
        var split = option.split('=');
        if(split.length > 1) {
            var key = split[0].toLowerCase();
            var value = split[1].toLowerCase();
            document['frima'][key] = value;
            urlOptionList.push({'key':key, 'value':value});
        }
    }

    if(window.localStorage['options'] == undefined) {
        window.localStorage['options'] = JSON.stringify({});
    }
    var localStorageOptions = eval('(' + window.localStorage['options'] + ')');

    for(var i=0;i<urlOptionList.length;i++) {
        var key = urlOptionList[i]['key'];
        var value = urlOptionList[i]['value'];
        try {
            value = JSON.parse(value.toLowerCase());
        }
        catch(e) {
            //
        }
        if(value == 'true' || value == 'false') {
            value = JSON.parse("true");
        }
        localStorageOptions[key] = value;
    }

    window.localStorage['options'] = JSON.stringify(localStorageOptions);
    for(var key in localStorageOptions) {
        document['frima'][key] = localStorageOptions[key];
    }

    if(document['frima']['load'] == 'scene') {
        var definitions = {
            'hd':{'height':720,'width':1280},
            'sd':{'height':360,'width':640}
        };
        var canvas 		= document.getElementById('swarr');
        var definition 	= document['frima']['definition'];
		
		var maxWidth 	= definitions[definition]['width'];
		var maxHeight	= definitions[definition]['height'];
		document['frima']["maxWidth"] 	= maxWidth;
		document['frima']["maxHeight"] 	= maxHeight;
		canvas.width 	= maxWidth;
        canvas.height 	= maxHeight;
		
    } else {
		document['frima']["maxWidth"] 	= 1280;
		document['frima']["maxHeight"] 	= 640;
	}

    if(event && event.type == 'hashchange') {
        window.location.reload();
    }
}
options();
window.onhashchange = options;

var loading = function() {
    var context = document.getElementById('swarr').getContext('2d');
    var clear = function() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }
    var show = true;
    document.addEventListener('loading', function(e) {
        clear = function() {};
        show = e['parameters']['show'];
    });

    var heart = new Image;
    var swoosh = new Image;
    heart.src = '../assets/common/images/loader_heart.png';
    swoosh.src = '../assets/common/images/loader_swoosh.png';
    var images = [heart, swoosh];
    var imageLoad = function(e) {
        var counter= 0;
        for(var i=0; i<images.length;i++) {
            if(images[i].complete == true) {
                counter = counter + 1;
            }
        }
        if(counter == images.length) {
            callback();
            imageLoad = function() {};
        }
    }
    heart.onload = imageLoad;
    swoosh.onload = imageLoad;

    var rotation = 0;
    var callback = function() {
        if(show) {
            var x = context.canvas.width / 2;
            var y = context.canvas.height / 2;
            var radians = rotation * (Math.PI/180);
            clear();
            context.drawImage(heart, x-(heart.width/2), y-(heart.height/2));
            context.translate(x, y);
            context.rotate(radians);
            context.drawImage(swoosh, -swoosh.width, -swoosh.height, swoosh.width, swoosh.height);
            context.rotate(-radians);
            context.translate(-x, -y);
            rotation = rotation + 5;
        }
        window.requestAnimationFrame(callback);
    }
}
loading();

var canvas = document.getElementById('swarr');
var sizes = {'width':canvas.width, 'height':canvas.height};
var lastAllowDefault  = false;

var deviceOrientation = function() {
	if(window.orientation == 90 || window.orientation == -90) {
		var heightDiff 		= window.outerHeight - window.innerHeight;
		allowDefault 		= (heightDiff > 0);
		
		if(lastAllowDefault != allowDefault) {
			lastAllowDefault		= allowDefault;
			var event 				= document.createEvent("Event");
			event.initEvent("orientationChanged", true, true);
			event['parameters'] = {'allowDefault': allowDefault};
			document.dispatchEvent(event);
		}
	}
}

var resize = function() {
    if(document['frima']['ratio'] == false) {
		var maxRatio = 2;
        var minRatio = 4/3;
        var ratio = Math.min(Math.max(window.innerWidth/window.innerHeight, minRatio), maxRatio);
        sizes.width = canvas.height * ratio;
        sizes.height = canvas.height;
        var resized = Math.floor((sizes.width - canvas.width) * 0.5);
        canvas.width = sizes.width;
        var event = document.createEvent("Event");
        event.initEvent("resized", true, true);
        event['parameters'] = {'size': resized, "isFullSize":(document["frima"]["maxWidth"] == sizes.width)};
        document.dispatchEvent(event);
    }

    if(document['frima']['scalable'] == true) {
		var ratio = canvas.width / canvas.height;
        sizes.width = window.innerWidth;
        sizes.height = Math.floor(window.innerWidth/ratio);
        if(sizes.height > window.innerHeight) {
            sizes.width = Math.floor(ratio * window.innerHeight);
            sizes.height = window.innerHeight;
        }
        canvas.style.width = sizes.width + 'px';
        canvas.style.height = sizes.height + 'px';
    }
}

var last = {'width':window.innerWidth, 'height':window.innerHeight, 'pageYOffset':window.pageYOffset};
var wait = null;

setInterval(function() {
	
	if(window.innerWidth != last.width || window.innerHeight != last.height)
    {
		clearTimeout(wait);
        wait = setTimeout(resize, 100);
    }
    var newMargin = Math.max(0, Math.floor(((window.innerHeight - sizes.height) * 0.5))) + window.pageYOffset + "px";
    if(canvas.style.marginTop != newMargin) {
        canvas.style.marginTop = newMargin;
    }
    last.height = window.innerHeight;
    last.width = window.innerWidth;
    last.pageYOffset = window.pageYOffset;
}, 200);
