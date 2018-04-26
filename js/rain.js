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



(lib.zz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcBuQgQgEgDgkQgCgjAMgsQANguATgeQATgdAQAEQAQAFACAjQADAkgNAsQgMAugUAdQgPAagPAAIgEgBg");
	this.shape.setTransform(4.9,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.8,22.3);


(lib.z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AByk1IjjJr");
	this.shape.setTransform(3,34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,1.9,24.9,64.1);


(lib.d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.yu = new lib.z();
	this.yu.setTransform(3,16,1,1,0,0,0,3,16);
	this.yu.filters = [new cjs.BlurFilter(10, 10, 2)];
	this.yu.cache(-11,0,29,68);

	this.timeline.addTween(cjs.Tween.get(this.yu).to({x:-345,y:1204.4},11).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-19.6,73,114);


(lib.c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zz();
	this.instance.setTransform(3,13.6,1,1,0,0,0,4.9,11.2);
	this.instance.filters = [new cjs.BlurFilter(10, 20, 2)];
	this.instance.cache(-2,-2,14,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-169,y:1023.9},16).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-39.6,59,113);


(lib.b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.yu = new lib.z();
	this.yu.setTransform(3,16,1,1,0,0,0,3,16);

	this.timeline.addTween(cjs.Tween.get(this.yu).to({x:-345,y:1204.4},11).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,2.4,23.9,63.1);


(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zz();
	this.instance.setTransform(3,13.6,1,1,0,0,0,4.9,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-169,y:1023.9},16).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,2.4,9.8,22.3);


// stage content:



(lib.rain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zz();
	this.instance.setTransform(413.1,329,1,1,0,0,0,4.9,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(683.2,517.8,9.8,22.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;