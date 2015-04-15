/*
 * jQuery Nivo Slider v2.3
 * http://nivo.dev7studios.com
 *
 * Copyright 2010, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(b){var a=function(j,q){var g=b.extend({},b.fn.nivoSlider.defaults,q);var m={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",running:false,paused:false,stop:false};var d=b(j);d.data("nivo:vars",m);d.css("position","relative");d.addClass("nivoSlider");var e=d.children();e.each(function(){var t=b(this);var s="";if(!t.is("img")){if(t.is("a")){t.addClass("nivo-imageLink");s=t}t=t.find("img:first")}var r=t.width();if(r==0){r=t.attr("width")}var i=t.height();if(i==0){i=t.attr("height")}if(r>d.width()){d.width(r)}if(i>d.height()){d.height(i)}if(s!=""){s.css("display","none")}t.css("display","none");m.totalSlides++});if(g.startSlide>0){if(g.startSlide>=m.totalSlides){g.startSlide=m.totalSlides-1}m.currentSlide=g.startSlide}if(b(e[m.currentSlide]).is("img")){m.currentImage=b(e[m.currentSlide])}else{m.currentImage=b(e[m.currentSlide]).find("img:first")}if(b(e[m.currentSlide]).is("a")){b(e[m.currentSlide]).css("display","block")}d.css("background","url("+m.currentImage.attr("src")+") no-repeat");for(var k=0;k<g.slices;k++){var o=Math.round(d.width()/g.slices);if(k==g.slices-1){d.append(b('<div class="nivo-slice"></div>').css({left:(o*k)+"px",width:(d.width()-(o*k))+"px"}))}else{d.append(b('<div class="nivo-slice"></div>').css({left:(o*k)+"px",width:o+"px"}))}}d.append(b('<div class="nivo-caption"><p></p></div>').css({display:"none",opacity:g.captionOpacity}));if(m.currentImage.attr("title")!=""){var n=m.currentImage.attr("title");if(n.substr(0,1)=="#"){n=b(n).html()}b(".nivo-caption p",d).html(n);b(".nivo-caption",d).fadeIn(g.animSpeed)}var c=0;if(!g.manualAdvance&&e.length>1){c=setInterval(function(){p(d,e,g,false)},g.pauseTime)}if(g.directionNav){d.append('<div class="nivo-directionNav"><a class="nivo-prevNav">Prev</a><a class="nivo-nextNav">Next</a></div>');if(g.directionNavHide){b(".nivo-directionNav",d).hide();d.hover(function(){b(".nivo-directionNav",d).show()},function(){b(".nivo-directionNav",d).hide()})}b("a.nivo-prevNav",d).live("click",function(){if(m.running){return false}clearInterval(c);c="";m.currentSlide-=2;p(d,e,g,"prev")});b("a.nivo-nextNav",d).live("click",function(){if(m.running){return false}clearInterval(c);c="";p(d,e,g,"next")})}if(g.controlNav){b(".nivo-controlNav a:eq("+m.currentSlide+")").addClass("active");b(".nivo-controlNav a").live("click",function(){if(m.running){return false}if(b(this).hasClass("active")){return false}clearInterval(c);c="";d.css("background","url("+m.currentImage.attr("src")+") no-repeat");m.currentSlide=b(this).attr("rel")-1;p(d,e,g,"control")})}if(g.keyboardNav){b(window).keypress(function(i){if(i.keyCode=="37"){if(m.running){return false}clearInterval(c);c="";m.currentSlide-=2;p(d,e,g,"prev")}if(i.keyCode=="39"){if(m.running){return false}clearInterval(c);c="";p(d,e,g,"next")}})}if(g.pauseOnHover){d.hover(function(){m.paused=true;clearInterval(c);c=""},function(){m.paused=false;if(c==""&&!g.manualAdvance){c=setInterval(function(){p(d,e,g,false)},g.pauseTime)}})}d.bind("nivo:animFinished",function(){m.running=false;b(e).each(function(){if(b(this).is("a")){b(this).css("display","none")}});if(b(e[m.currentSlide]).is("a")){b(e[m.currentSlide]).css("display","block")}if(c==""&&!m.paused&&!g.manualAdvance){c=setInterval(function(){p(d,e,g,false)},g.pauseTime)}g.afterChange.call(this)});var p=function(r,s,u,x){var y=r.data("nivo:vars");if(y&&(y.currentSlide==y.totalSlides-1)){u.lastSlide.call(this)}if((!y||y.stop)&&!x){return false}u.beforeChange.call(this);if(!x){r.css("background","url("+y.currentImage.attr("src")+") no-repeat")}else{if(x=="prev"){r.css("background","url("+y.currentImage.attr("src")+") no-repeat")}if(x=="next"){r.css("background","url("+y.currentImage.attr("src")+") no-repeat")}}y.currentSlide++;if(y.currentSlide==y.totalSlides){y.currentSlide=0;u.slideshowEnd.call(this)}if(y.currentSlide<0){y.currentSlide=(y.totalSlides-1)}if(b(s[y.currentSlide]).is("img")){y.currentImage=b(s[y.currentSlide])}else{y.currentImage=b(s[y.currentSlide]).find("img:first")}if(u.controlNav){b(".nivo-controlNav a").removeClass("active");b(".nivo-controlNav a:eq("+y.currentSlide+")").addClass("active")}if(y.currentImage.attr("title")!=""){var z=y.currentImage.attr("title");if(z.substr(0,1)=="#"){z=b(z).html()}if(b(".nivo-caption",r).css("display")=="block"){b(".nivo-caption p",r).fadeOut(u.animSpeed,function(){b(this).html(z);b(this).fadeIn(u.animSpeed)})}else{b(".nivo-caption p",r).html(z)}b(".nivo-caption",r).fadeIn(u.animSpeed)}else{b(".nivo-caption",r).fadeOut(u.animSpeed)}var w=0;b(".nivo-slice",r).each(function(){var i=Math.round(r.width()/u.slices);b(this).css({height:"0px",opacity:"0",background:"url("+y.currentImage.attr("src")+") no-repeat -"+((i+(w*i))-i)+"px 0%"});w++});if(u.effect=="random"){var A=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade");y.randAnim=A[Math.floor(Math.random()*(A.length+1))];if(y.randAnim==undefined){y.randAnim="fade"}}if(u.effect.indexOf(",")!=-1){var A=u.effect.split(",");y.randAnim=b.trim(A[Math.floor(Math.random()*A.length)])}y.running=true;if(u.effect=="sliceDown"||u.effect=="sliceDownRight"||y.randAnim=="sliceDownRight"||u.effect=="sliceDownLeft"||y.randAnim=="sliceDownLeft"){var t=0;var w=0;var C=b(".nivo-slice",r);if(u.effect=="sliceDownLeft"||y.randAnim=="sliceDownLeft"){C=b(".nivo-slice",r)._reverse()}C.each(function(){var i=b(this);i.css("top","0px");if(w==u.slices-1){setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed,"",function(){r.trigger("nivo:animFinished")})},(100+t))}else{setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed)},(100+t))}t+=50;w++})}else{if(u.effect=="sliceUp"||u.effect=="sliceUpRight"||y.randAnim=="sliceUpRight"||u.effect=="sliceUpLeft"||y.randAnim=="sliceUpLeft"){var t=0;var w=0;var C=b(".nivo-slice",r);if(u.effect=="sliceUpLeft"||y.randAnim=="sliceUpLeft"){C=b(".nivo-slice",r)._reverse()}C.each(function(){var i=b(this);i.css("bottom","0px");if(w==u.slices-1){setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed,"",function(){r.trigger("nivo:animFinished")})},(100+t))}else{setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed)},(100+t))}t+=50;w++})}else{if(u.effect=="sliceUpDown"||u.effect=="sliceUpDownRight"||y.randAnim=="sliceUpDown"||u.effect=="sliceUpDownLeft"||y.randAnim=="sliceUpDownLeft"){var t=0;var w=0;var B=0;var C=b(".nivo-slice",r);if(u.effect=="sliceUpDownLeft"||y.randAnim=="sliceUpDownLeft"){C=b(".nivo-slice",r)._reverse()}C.each(function(){var i=b(this);if(w==0){i.css("top","0px");w++}else{i.css("bottom","0px");w=0}if(B==u.slices-1){setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed,"",function(){r.trigger("nivo:animFinished")})},(100+t))}else{setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed)},(100+t))}t+=50;B++})}else{if(u.effect=="fold"||y.randAnim=="fold"){var t=0;var w=0;b(".nivo-slice",r).each(function(){var i=b(this);var v=i.width();i.css({top:"0px",height:"100%",width:"0px"});if(w==u.slices-1){setTimeout(function(){i.animate({width:v,opacity:"1.0"},u.animSpeed,"",function(){r.trigger("nivo:animFinished")})},(100+t))}else{setTimeout(function(){i.animate({width:v,opacity:"1.0"},u.animSpeed)},(100+t))}t+=50;w++})}else{if(u.effect=="fade"||y.randAnim=="fade"){var w=0;b(".nivo-slice",r).each(function(){b(this).css("height","100%");if(w==u.slices-1){b(this).animate({opacity:"1.0"},(u.animSpeed*2),"",function(){r.trigger("nivo:animFinished")})}else{b(this).animate({opacity:"1.0"},(u.animSpeed*2))}w++})}}}}}};var h=function(i){if(this.console&&typeof console.log!="undefined"){console.log(i)}};this.stop=function(){if(!b(j).data("nivo:vars").stop){b(j).data("nivo:vars").stop=true;h("Stop Slider")}};this.start=function(){if(b(j).data("nivo:vars").stop){b(j).data("nivo:vars").stop=false;h("Start Slider")}};g.afterLoad.call(this)};b.fn.nivoSlider=function(c){return this.each(function(){var d=b(this);if(d.data("nivoslider")){return}var e=new a(this,c);d.data("nivoslider",e)})};b.fn.nivoSlider.defaults={effect:"random",slices:15,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:true,controlNavThumbs:false,controlNavThumbsFromRel:false,controlNavThumbsSearch:".jpg",controlNavThumbsReplace:"_thumb.jpg",keyboardNav:true,pauseOnHover:true,manualAdvance:false,captionOpacity:0.8,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};b.fn._reverse=[].reverse})(jQuery);

	
// ----------------------------------------------------------------------------	
// Syntax Highlighting
	
(function($) {
	var span = function( c, r ){
		return '<span class="'+c+'">' + ( r || '$1' ) + '</span>';
	};

	var push = function( m ) {
		return '<r' + p.push( m ) + '>';
	};

	var pushBlock = function( m, comment, regexp, string ){
		var s = '';
		if( comment ) {
			s = span( 'comments', m );
		}
		else if( regexp ) {
			s = span( 'regexp', m );
		}
		else if( string ) {
			s = span( 'strings', m );
		}
		
		return push( s ) ;
	};

	var pop = function( m, i ) {
		return p[i-1].replace( x[12], x[13] );
	};

	var p = [];
	var x = [
		// escaped characters and names with $
		/\\.|\$\w+/g, 
			push,
		
		// hint to find regexps (slash after ,=:{[ but ignore comments)
		/([\[({=:+,](\s|(\/\*[\s|\S]*?\*\/|\/\/.*))*)\/(?![\/\*])/g, '$1<h>/',
	
		// comments, regexps or strings
		/(\/\*[\s|\S]*?\*\/|\/\/.*)|(<h>\/.+?\/\w*)|(".*?"|'.*?')/g, 
			pushBlock,
		
		// punctuations
		/((&\w+;|[-\/+*=?:.,;()\[\]{}|%^!])+)/g, 
			span('punct'),
	
		// keywords
		new RegExp( 
			"\\b(" +
				"break|case|catch|continue|default|delete|do|else|false|" +
				"finally|for|function|if|in|instanceof|new|null|return|" +
				"switch|this|throw|true|try|typeof|var|void|while|with" +
			")\\b", "gi"
		), span('keywords'),
		
		// numbers
		/\b(0x[\da-f]+|\d+)\b/g, 
			span('numbers'),
			
		// insert block back in again
		/<r(\d+)>/g, 
			pop,
			
		// strip unused regexp hints
		/<h>/g,
			''
	];
	
	$.fn.jsh = function( tabsToSpaces ) {
		p = [];
		this.each(function(index) {
			var code = $(this).html();
			for( var i = 0; i < x.length; i+=2 ) {
				code = code.replace( x[i], x[i+1] );
			}
			if( tabsToSpaces ) {
				code = code.replace(/\t/g,'    ');
			}
			$(this).html( code );
		});
		
		return this;
	};
	
})(jQuery);



// ----------------------------------------------------------------------------
// Whitebox

(function($) {
	var fadeTime = 400;
	var box = null;
	
	var hide = function( ev ) {
		box.fadeOut( fadeTime );
		return false;
	}
	
	var open = function( ev ) {
		if( !box ) {
			box = $('<div id="whitebox"></div>');
			box.click( hide );
			$('body').append( box );
		}
		
		var a = $(this);
		var img = $('<img/>')
			.attr( 'src', a.attr('href') )
			.attr( 'title', a.attr('title') );
			
		box.html(img).fadeIn( fadeTime );
		return false;
	}
	
	$.fn.whitebox = function( tabsToSpaces ) {	
		this.click(open);
		return this;
	};
	
})(jQuery);



// ----------------------------------------------------------------------------
// Explode Effect for Homepage

(function($) {
	var time = 600;
	var init = function( container ) {
		container.mouseenter(enter);
		container.mouseleave(leave);		
	};
	
	var enter = function( ev ) {
		animate( ev, true );
	};
	
	var leave = function( ev ) {
		animate( ev, false );
	};
	
	var animate = function( ev, spread ) {
		
		var container = $(ev.currentTarget);
		var containerSize = {
			width: container.width(),
			height: container.height()
		};
		
		var items = container.children();
		var numItems = container.children().length;
		var itemSize = {
			width: items.width(),
			height: items.height()
		};
		if( !itemSize.width ) {
			return;
		}
		
		var maxX = containerSize.width - itemSize.width;
		var centerX = maxX/2;
	
		var maxY = containerSize.height - itemSize.height;
		var centerY = maxY/2;
		
		var mvX = spread ? 1 : 0;
		var mvY = spread ? 1 : 0;
		
		items.each(function( index ){
			var idx = (index/(numItems-1))*2-1;
			var tx = centerX + idx * mvX * maxX/2;
			var ty = centerY + idx * mvY * maxY/2;
			$(this).stop().animate({left: tx, top: ty},time);
		});
	};
	
	$.fn.explode = function() {
		this.each(function(index) {
			init( $(this) );
		});
	}
	
})(jQuery);



// ----------------------------------------------------------------------------
// Fragment Part Menu

(function($) {	
	var stripFunctionParams = function( title ) {
		return title.replace(/^\.|\.x|[(,{:[].*$/g,'');
	};
	
	$.fn.tagName = function() {
		return this.get(0).tagName.toLowerCase();
	}
	
	$.fn.fragmentMenu = function( article ) {
		var nudge = -32;
		var menu = this;
		var headlines = [];
		var menuOffset = menu.offset().top -16;
		
		
		$(article).find('h2,h3').each(function(){
			var h = $(this);
			var tag = h.tagName();
			var href = h.attr('id');
			var title = h.text();
			
			if( !title.match(/^new/) ) {
				title = stripFunctionParams( title );
				var item = $('<a href="#'+href+'" class="'+tag+'">'+title+'</a>')
				menu.append( item );
				headlines.push( {pos: h.offset().top, item: item} );
			}
		});
		
		var fit = function() {
			if( menu.hasClass('fixed') ) {
				var hh = 
					parseInt(menu.css('padding-top')) + 
					parseInt(menu.css('margin-top'));
				menu.css('max-height', window.innerHeight - hh);
			}
			else {
				menu.css('max-height','');
			}
		};
		
		$(window).resize(fit);
		
		var updatePosition = function() {
			var offset = $(this).scrollTop();
			var isFixed = menu.hasClass('fixed');
		
			if( offset >= menuOffset && !isFixed ) {
				menu.addClass('fixed');
				fit();
			}
			else if( offset < menuOffset && isFixed ) {
				menu.removeClass('fixed');
				fit();
			}
			
			for( var i = headlines.length; i--; ) {
				var h = headlines[i]
				if( h.pos < offset - nudge ) {
					if( !h.item.hasClass('active') ) {
						menu.find('.active').removeClass('active');
						h.item.addClass('active');
					}
					break;
				}
			}
		};
		
		$(window).bind("scroll", updatePosition );
		updatePosition();
	}
	
})(jQuery);


// ----------------------------------------------------------------------------
// Initialize ALL the Things!

$(function(){
	var fm = $('#fragmentMenu')
	if( fm.length ) {
		fm.fragmentMenu('#content');
	}
	
	$('pre.javascript,h3').jsh(true);
	if( document.location.href.match('/documentation') ) {
		$('#content h2,#content h3').each(function(){
			$(this).append('<a class="pilcrow" href="#'+this.id+'" title="Permalink">&para;</a>');
		});
	}	
	if( !/iPhone|iPad|android/i.test(navigator.userAgent) ) {
		$('a.whitebox').whitebox(true);
	}
	$('#platforms-teaser').explode();
	$('#slider').nivoSlider({
        effect:'fold', //Specify sets like: 'fold,fade,sliceDown'
        slices:15,
        animSpeed:500, //Slide transition speed
        pauseTime:5000,
        startSlide:0, //Set starting Slide (0 index)
        directionNav:false, //Next & Prev
        directionNavHide:true, //Only show on hover
        controlNav:true //1,2,3...
    });


});


