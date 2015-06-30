#!/usr/bin/env node

var fs = require('fs');
var args = process.argv.slice(2)

var usageError = function() {
    console.log('Usage: node index.js <dragonbones_texture.json> <createjs_data.js>');
    process.exit(0);
}

if(args.length != 2) {
    usageError();
}

if(args[0].match(/.json$/) == null) {
    usageError();
}

if(args[1].match(/.js$/) == null) {
    usageError();
}

var createjs = {};
createjs.Container = function() {};
createjs.MovieClip = function() {};
createjs.Rectangle = function() {};
var encoding = 'utf8';

eval(fs.readFileSync(args[1], encoding));
var texture = JSON.parse(fs.readFileSync(args[0], encoding));

var removeQuotes = function(properties) {
    for(var i=0; i<properties.length; i++) {
       properties[i] = properties[i].replace(/"/g, '');
    }
}

for(var i=0; i<texture.SubTexture.length; i++) {
    var object = texture.SubTexture[i];
    var objectName = object.name.split('/');
    objectName = objectName[objectName.length-1];
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

fs.writeFileSync(args[0], JSON.stringify(texture), encoding);
