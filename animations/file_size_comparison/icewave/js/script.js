var tiers = [
    {name: 'card_0'},
    {name: 'card_1'},
    {name: 'card_2'},
    {name: 'card_3'},
];

var breakPoints = [
    {'menuHeight': '62px', 'tierWidth': '280px', 'tierHeight': '132px'},
    {'menuHeight': '62px', 'tierWidth': '397px', 'tierHeight': '185px'}
];

var trim = function(toTrim) {
    return Number(toTrim.substring(0, toTrim.length-2));
}

$(window).scroll(function(e) {
    $('#cards').css('marginTop') = '300px';
});

var devicePixelRatio = 1;

window.onload = function() {
    var areaList = document.getElementsByTagName('area');
    for(var i = 0; i < areaList.length; i++) {
        console.log(i);
        areaList[i].setAttribute('coords', '7, 85, 104, 55, 279, 96, 185, 133');
     //coords="7, 35, 104, 0, 279, 46, 185, 83" 
    }

    {
        devicePixelRatio = window.innerWidth / screen.width;
    }
}

var getHeight = function() {
    if(window.orientation === undefined) {
        return screen.height;
    }
    else {
        if(window.orientation == -90 || window.orientation == 90) {
            return screen.width;
        }
        else {
            return screen.height;
        }
    }
};

var previousOrientation = window.orientation;
var checkOrientation = function(){
    if(window.orientation !== previousOrientation){
        if($('#' + tiers[0].name).css('visibility') == 'visible') {
            var height = getHeight();
            var positionCounter = 0;
            var tierToMove;
            for(var i = 0; i < tiers.length; i++) {
                // Find the tier to reposition.
                var tier = $('#' + tiers[i].name)    
                var topValue = trim(tier.css('top'));
                if(topValue > 0 && topValue < height) {
                    tierToMove = tier;
                    positionCounter = positionCounter + 1;
                }
            }
            if(positionCounter == 1) {
                tierToMove.animate({top: (height/2) - 130 + "px"});
                $('body').css({'height':height});
                $('html').css({'height':height});
                $('#container').css({'height':height});
            }
        }
        previousOrientation = window.orientation;
    }
};
window.addEventListener("resize", checkOrientation, false);
window.addEventListener("orientationchange", checkOrientation, false);
setInterval(checkOrientation, 100);

var zoomIn = function(id) {
    console.log(id);
    var position = 'above';
    var tier;
    var lastMargin = 0;
    var margin = 0;
    var menuHeight = trim($('#main_menu').css('height'));
    var menuMarginBottom = $('#main_menu').css('margin-bottom');
    menuMarginBottom = trim(menuMarginBottom);
    var topSpace = menuHeight + menuMarginBottom;
    {
        var height = getHeight();
        $('body').animate({'height':height});
        $('html').animate({'height':height});
        $('#container').animate({'height':height});
    }
    for (var i = 0; i < tiers.length; i++) {
        if(id == tiers[i]['name']) {
            position = 'equal';
        }

        tier = $('#' + tiers[i]['name'])

        margin = topSpace + lastMargin;

        var marginBottom = trim(tier.css('margin-bottom'));
        var height = trim(tier.css('height'));
        lastMargin = lastMargin + height + marginBottom;

        var width = trim(tier.css('width'));
        var marginLeft = '-' + trim + 'px';

        if(position == 'above') {
            tier.animate({top: "-1000px"});
        }
        else if(position == 'equal') {
            tier.animate({top: (getHeight()/2) - 130 + "px"});
            position = 'below';
        }
        else {
            console.log('below');
            tier.animate({top: "1000px"});
        }
    }
}
