(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.aa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFF00","rgba(255,255,0,0)"],[0,1],0,0,0,0,0,4.1).s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBARgLALQgMAMgQAAQgPAAgMgMg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.lightY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.aa();
	this.instance.setTransform(4,4,1,1,0,0,0,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-26.6,y:-335},130).to({guide:{path:[-26.4,-334.9,-22.6,-370.7,-8.8,-401.8,1.9,-430.8,24,-432.6]},alpha:0},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


// stage content:



(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;