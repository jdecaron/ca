// Initialization
// -----------------------------------------------------------------------------

document['frima'] = {
    debug:        	true,
    definition:     'hd',
    enablefps:   	false,
    enablesounds: 	true,
    enablerender: 	true,
    framerate: 	    30,
    load:         	'test',
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
        var canvas 		= document.getElementById('test');
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

var canvas = document.getElementById('test');
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
