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

var createjs = cjs = {};
createjs.Container = function() { this.initialize = function() {}; this.addChild = function() {}; };
createjs.MovieClip = function() {};
createjs.Rectangle = function(x, y, width, height) { return {x:x, y:y, width:width, height:height} };
createjs.Shape = function() {
    properties = {};
    return {
        graphics:{
            f:function(color) { properties.color = color; return {s: function() { return {p: function(path) { properties.path = path; return {} } } } } }
        },
        properties: properties,
        setTransform: function() {
            var counter = 0;
            argumentList = [];
            for (var key in arguments) {
                argumentList[counter] = arguments[key];
                counter = counter + 1;
            }
            properties.transform = argumentList;
        }
    };
};
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
    var objectList = [];
    var container = new lib[objectName]();
    for (var key in container) {
        if(container[key].hasOwnProperty('graphics')) {
            console.log(container[key]);
            objectList.push(container[key].properties);
        }
    }
    object.shapes.nominalBounds = container.nominalBounds;
    object.shapes = objectList.reverse();
}

fs.writeFileSync(args[0], JSON.stringify(texture), encoding);
