$.getJSON('texture.json', function(texture) {
    init(texture);
});

var init = function (texture) {
    var removeQuotes = function(properties) {
        for(var i=0; i<properties.length; i++) {
            properties[i] = properties[i].replace(/"/g, '');
        }
    }

    for(var i=0; i<texture.SubTexture.length; i++) {
        var object = texture.SubTexture[i];
        var objectName = object.name.split('/');
        objectName = objectName[objectName.length-1];
        debugger;
        var o = new lib[objectName]();
        console.log(o.nominalBounds);
        console.log(o.__proto__);
        console.log(o);
        var lines = lib[objectName].toString().split('\n');
        var objectList = [];
        for(var j=0; j<lines.length; j++) {
            var line = lines[j];
            var properties = line.match(/"[^\)]*/g);
            if(properties) {
                removeQuotes(properties);
                var transform = lines[j+1].match(/\(.*\)/)[0].replace(/[\(\)]/g, '').split(',');
                properties.push(transform);
                objectList.push(properties);
            }
        }
        object.shapes = objectList.reverse();
    }
}
