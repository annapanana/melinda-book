(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"title_test_atlas_", frames: [[942,3586,328,112],[0,0,2048,1536],[1272,3586,328,112],[1208,2100,532,444],[942,2818,782,766],[1208,1538,802,560],[1208,2546,328,168],[0,1538,1206,1278],[1538,2546,216,216],[0,2818,940,942]]}
];


// symbols:



(lib.aboutipadhd = function() {
	this.spriteSheet = ss["title_test_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backgroundcoveripadhd = function() {
	this.spriteSheet = ss["title_test_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.creditsAipadhd = function() {
	this.spriteSheet = ss["title_test_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.melarmipadhd = function() {
	this.spriteSheet = ss["title_test_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.melinda1ipadhd = function() {
	this.spriteSheet = ss["title_test_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.o2ipadhd = function() {
	this.spriteSheet = ss["title_test_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.scdipadhd = function() {
	this.spriteSheet = ss["title_test_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.stars3ipadhd = function() {
	this.spriteSheet = ss["title_test_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.startbutaipadhd = function() {
	this.spriteSheet = ss["title_test_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.swirlcoveripadhd = function() {
	this.spriteSheet = ss["title_test_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stars3ipadhd();
	this.instance.parent = this;
	this.instance.setTransform(-603,-639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-603,-639,1206,1278);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.o2ipadhd();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.681,0.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,546,381.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.swirlcoveripadhd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,940,942), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.creditsAipadhd();
	this.instance.parent = this;
	this.instance.setTransform(-164,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-164,-56,328,112), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.scdipadhd();
	this.instance.parent = this;
	this.instance.setTransform(-164,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-164,-84,328,168), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.aboutipadhd();
	this.instance.parent = this;
	this.instance.setTransform(-164,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-164,-56,328,112), null);


(lib.start_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.startbutaipadhd();
	this.instance.parent = this;
	this.instance.setTransform(-108,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-108,216,216);


(lib.swirl = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(0);
		
		this.swirl.addEventListener("click", () => {
			speedSpin(this);
		});
		
		function speedSpin(self)
		{
			self.gotoAndPlay(80);
		}
	}
	this.frame_78 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_119 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(78).call(this.frame_78).wait(41).call(this.frame_119).wait(1));

	// Layer_1
	this.swirl = new lib.Symbol4();
	this.swirl.name = "swirl";
	this.swirl.parent = this;
	this.swirl.setTransform(0,0,1,1,0,0,0,470,471);

	this.timeline.addTween(cjs.Tween.get(this.swirl).wait(1).to({rotation:4.6},0).wait(1).to({rotation:9.2,y:0.1},0).wait(1).to({rotation:13.8,x:0.1,y:0},0).wait(1).to({rotation:18.5,x:0,y:0.1},0).wait(1).to({rotation:23.1,x:0.1,y:0},0).wait(1).to({rotation:27.7,x:0},0).wait(1).to({rotation:32.3,y:0.1},0).wait(1).to({rotation:36.9,x:0.1},0).wait(1).to({rotation:41.5,x:0,y:0},0).wait(1).to({rotation:46.2},0).wait(1).to({rotation:50.8,y:0.1},0).wait(1).to({rotation:55.4,y:0},0).wait(1).to({rotation:60,y:0.1},0).wait(1).to({rotation:64.6,y:0},0).wait(1).to({rotation:69.2},0).wait(1).to({rotation:73.8,y:0.1},0).wait(1).to({rotation:78.5,y:0},0).wait(1).to({rotation:83.1},0).wait(1).to({rotation:87.7},0).wait(1).to({rotation:92.3},0).wait(1).to({rotation:96.9},0).wait(1).to({rotation:101.5,y:0.1},0).wait(1).to({rotation:106.2,y:0},0).wait(1).to({rotation:110.8,y:0.1},0).wait(1).to({rotation:115.4,y:0},0).wait(1).to({rotation:120,y:0.1},0).wait(1).to({rotation:124.6},0).wait(1).to({rotation:129.2,y:0},0).wait(1).to({rotation:133.8,y:0.1},0).wait(1).to({rotation:138.5,y:0},0).wait(1).to({rotation:143.1},0).wait(1).to({rotation:147.7},0).wait(1).to({rotation:152.3},0).wait(1).to({rotation:156.9},0).wait(1).to({rotation:161.5},0).wait(1).to({rotation:166.2},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:175.4},0).wait(1).to({rotation:180},0).wait(1).to({rotation:184.6},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:193.8},0).wait(1).to({rotation:198.5},0).wait(1).to({rotation:203.1},0).wait(1).to({rotation:207.7},0).wait(1).to({rotation:212.3},0).wait(1).to({rotation:216.9},0).wait(1).to({rotation:221.5},0).wait(1).to({rotation:226.2},0).wait(1).to({rotation:230.8,x:0.1},0).wait(1).to({rotation:235.4,x:0},0).wait(1).to({rotation:240,x:0.1},0).wait(1).to({rotation:244.6,x:0},0).wait(1).to({rotation:249.2,x:0.1},0).wait(1).to({rotation:253.8},0).wait(1).to({rotation:258.5},0).wait(1).to({rotation:263.1,x:0},0).wait(1).to({rotation:267.7,x:0.1},0).wait(1).to({rotation:272.3,x:0},0).wait(1).to({rotation:276.9},0).wait(1).to({rotation:281.5,x:0.1},0).wait(1).to({rotation:286.2,x:0},0).wait(1).to({rotation:290.8},0).wait(1).to({rotation:295.4},0).wait(1).to({rotation:300,x:0.1},0).wait(1).to({rotation:304.6,x:0},0).wait(1).to({rotation:309.2,x:0.1},0).wait(1).to({rotation:313.8},0).wait(1).to({rotation:318.5,y:0.1},0).wait(1).to({rotation:323.1},0).wait(1).to({rotation:327.7},0).wait(1).to({rotation:332.3},0).wait(1).to({rotation:336.9,x:0},0).wait(1).to({rotation:341.5,y:0},0).wait(1).to({rotation:346.2,y:0.1},0).wait(1).to({rotation:350.8,y:0},0).wait(1).to({rotation:355.4},0).wait(1).to({rotation:360},0).wait(2).to({rotation:450},0).wait(1).to({rotation:540},0).wait(1).to({rotation:630},0).wait(1).to({rotation:720},0).wait(1).to({rotation:810},0).wait(1).to({rotation:900},0).wait(1).to({rotation:990},0).wait(1).to({rotation:1080},0).wait(1).to({rotation:1170},0).wait(1).to({rotation:1260},0).wait(1).to({rotation:1350},0).wait(1).to({rotation:1440},0).wait(1).to({rotation:1530},0).wait(1).to({rotation:1620},0).wait(1).to({rotation:1710},0).wait(1).to({rotation:1800},0).wait(1).to({rotation:1890},0).wait(1).to({rotation:1980},0).wait(1).to({rotation:2070},0).wait(1).to({rotation:2160},0).wait(1).to({rotation:2250},0).wait(1).to({rotation:2340},0).wait(1).to({rotation:2430},0).wait(1).to({rotation:2520},0).wait(1).to({rotation:2610},0).wait(1).to({rotation:2700},0).wait(1).to({rotation:2790},0).wait(1).to({rotation:2880},0).wait(1).to({rotation:2970},0).wait(1).to({rotation:3060},0).wait(1).to({rotation:3150},0).wait(1).to({rotation:3240},0).wait(1).to({rotation:3330},0).wait(1).to({rotation:3420},0).wait(1).to({rotation:3510},0).wait(1).to({rotation:3600},0).wait(1).to({rotation:3690},0).wait(1).to({rotation:3780},0).wait(1).to({rotation:3870},0).wait(1).to({rotation:3960},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470,-471,940,942);


(lib.sparkles = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer_1
	this.sparkles = new lib.Tween1();
	this.sparkles.name = "sparkles";
	this.sparkles.parent = this;

	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sparkles).to({_off:true,alpha:0,mode:"synched",startPosition:0},29).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},29).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-603,-639,1206,1278);


(lib.blood_cell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,272.9,190.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.9,-190.6,546,381.2);


(lib.container = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.blood_cell.addEventListener("click", () => {
			spin(this.blood_cell)
		});
		
		function spin(self)
		{
			console.log("triggering spin");
			self.gotoAndPlay(1)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90));

	// blood_cell
	this.blood_cell = new lib.blood_cell();
	this.blood_cell.name = "blood_cell";
	this.blood_cell.parent = this;
	this.blood_cell.setTransform(251.1,205.1);

	this.timeline.addTween(cjs.Tween.get(this.blood_cell).wait(1).to({rotation:24.3},0).wait(1).to({rotation:48.5},0).wait(1).to({rotation:72.8},0).wait(1).to({rotation:97.1},0).wait(1).to({rotation:121.3},0).wait(1).to({rotation:145.6},0).wait(1).to({rotation:169.9},0).wait(1).to({rotation:194.2},0).wait(1).to({rotation:218.4},0).wait(1).to({rotation:242.7},0).wait(1).to({rotation:267},0).wait(1).to({rotation:291.2},0).wait(1).to({rotation:315.5},0).wait(1).to({rotation:339.8},0).wait(1).to({rotation:364},0).wait(1).to({rotation:388.3},0).wait(1).to({rotation:412.6},0).wait(1).to({rotation:436.9},0).wait(1).to({rotation:461.1},0).wait(1).to({rotation:485.4},0).wait(1).to({rotation:509.7},0).wait(1).to({rotation:533.9},0).wait(1).to({rotation:558.2},0).wait(1).to({rotation:582.5},0).wait(1).to({rotation:606.7},0).wait(1).to({rotation:631},0).wait(1).to({rotation:655.3},0).wait(1).to({rotation:679.6},0).wait(1).to({rotation:703.8},0).wait(1).to({rotation:728.1},0).wait(1).to({rotation:752.4},0).wait(1).to({rotation:776.6},0).wait(1).to({rotation:800.9},0).wait(1).to({rotation:825.2},0).wait(1).to({rotation:849.4},0).wait(1).to({rotation:873.7},0).wait(1).to({rotation:898},0).wait(1).to({rotation:922.2},0).wait(1).to({rotation:946.5},0).wait(1).to({rotation:970.8},0).wait(1).to({rotation:995.1},0).wait(1).to({rotation:1019.3},0).wait(1).to({rotation:1043.6},0).wait(1).to({rotation:1067.9},0).wait(1).to({rotation:1092.1},0).wait(1).to({rotation:1116.4},0).wait(1).to({rotation:1140.7},0).wait(1).to({rotation:1164.9},0).wait(1).to({rotation:1189.2},0).wait(1).to({rotation:1213.5},0).wait(1).to({rotation:1237.8},0).wait(1).to({rotation:1262},0).wait(1).to({rotation:1286.3},0).wait(1).to({rotation:1310.6},0).wait(1).to({rotation:1334.8},0).wait(1).to({rotation:1359.1},0).wait(1).to({rotation:1383.4},0).wait(1).to({rotation:1407.6},0).wait(1).to({rotation:1431.9},0).wait(1).to({rotation:1456.2},0).wait(1).to({rotation:1480.4},0).wait(1).to({rotation:1504.7},0).wait(1).to({rotation:1529},0).wait(1).to({rotation:1553.3},0).wait(1).to({rotation:1577.5},0).wait(1).to({rotation:1601.8},0).wait(1).to({rotation:1626.1},0).wait(1).to({rotation:1650.3},0).wait(1).to({rotation:1674.6},0).wait(1).to({rotation:1698.9},0).wait(1).to({rotation:1723.1},0).wait(1).to({rotation:1747.4},0).wait(1).to({rotation:1771.7},0).wait(1).to({rotation:1796},0).wait(1).to({rotation:1820.2},0).wait(1).to({rotation:1844.5},0).wait(1).to({rotation:1868.8},0).wait(1).to({rotation:1893},0).wait(1).to({rotation:1917.3},0).wait(1).to({rotation:1941.6},0).wait(1).to({rotation:1965.8},0).wait(1).to({rotation:1990.1},0).wait(1).to({rotation:2014.4},0).wait(1).to({rotation:2038.7},0).wait(1).to({rotation:2062.9},0).wait(1).to({rotation:2087.2},0).wait(1).to({rotation:2111.5},0).wait(1).to({rotation:2135.7},0).wait(1).to({rotation:2160},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,14.5,545.9,381.2);


(lib.blood_cell_parent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parent
	this.blood_cell_parent = new lib.container();
	this.blood_cell_parent.name = "blood_cell_parent";
	this.blood_cell_parent.parent = this;
	this.blood_cell_parent.setTransform(0.1,0,1,1,0,0,0,254.5,202.6);

	this.timeline.addTween(cjs.Tween.get(this.blood_cell_parent).wait(1).to({regX:251,regY:205,x:-5.3,y:0.4},0).wait(1).to({x:-7.2,y:-1.7},0).wait(1).to({x:-9.1,y:-3.8},0).wait(1).to({x:-11,y:-5.9},0).wait(1).to({x:-13,y:-8},0).wait(1).to({x:-14.9,y:-10.1},0).wait(1).to({x:-16.8,y:-12.2},0).wait(1).to({x:-18.7,y:-14.3},0).wait(1).to({x:-20.6,y:-16.4},0).wait(1).to({x:-22.5,y:-18.5},0).wait(1).to({x:-24.4,y:-20.5},0).wait(1).to({x:-26.3,y:-22.6},0).wait(1).to({x:-28.3,y:-24.7},0).wait(1).to({x:-30.2,y:-26.8},0).wait(1).to({x:-32.1,y:-28.9},0).wait(1).to({x:-34,y:-31},0).wait(1).to({x:-35.9,y:-33.1},0).wait(1).to({x:-37.8,y:-35.2},0).wait(1).to({x:-39.7,y:-37.3},0).wait(1).to({x:-41.6,y:-39.4},0).wait(1).to({x:-43.6,y:-41.4},0).wait(1).to({x:-45.5,y:-43.5},0).wait(1).to({x:-47.4,y:-45.6},0).wait(1).to({x:-49.3,y:-47.7},0).wait(1).to({x:-51.2,y:-49.8},0).wait(1).to({x:-53.1,y:-51.9},0).wait(1).to({x:-55,y:-54},0).wait(1).to({x:-56.9,y:-56.1},0).wait(1).to({x:-58.9,y:-58.2},0).wait(1).to({x:-60.8,y:-60.3},0).wait(1).to({x:-62.7,y:-62.3},0).wait(1).to({x:-64.6,y:-64.4},0).wait(1).to({x:-66.5,y:-66.5},0).wait(1).to({x:-68.4,y:-68.6},0).wait(1).to({x:-70.3,y:-70.7},0).wait(1).to({x:-72.2,y:-72.8},0).wait(1).to({x:-74.2,y:-74.9},0).wait(1).to({x:-76.1,y:-77},0).wait(1).to({x:-78,y:-79.1},0).wait(1).to({x:-79.9,y:-81.2},0).wait(1).to({x:-81.8,y:-83.2},0).wait(1).to({x:-83.7,y:-85.3},0).wait(1).to({x:-85.6,y:-87.4},0).wait(1).to({x:-87.5,y:-89.5},0).wait(1).to({x:-89.5,y:-91.6},0).wait(1).to({x:-87.5,y:-89.5},0).wait(1).to({x:-85.5,y:-87.3},0).wait(1).to({x:-83.6,y:-85.2},0).wait(1).to({x:-81.6,y:-83.1},0).wait(1).to({x:-79.7,y:-80.9},0).wait(1).to({x:-77.7,y:-78.8},0).wait(1).to({x:-75.8,y:-76.6},0).wait(1).to({x:-73.8,y:-74.5},0).wait(1).to({x:-71.8,y:-72.4},0).wait(1).to({x:-69.9,y:-70.2},0).wait(1).to({x:-67.9,y:-68.1},0).wait(1).to({x:-66,y:-66},0).wait(1).to({x:-64,y:-63.8},0).wait(1).to({x:-62.1,y:-61.7},0).wait(1).to({x:-60.1,y:-59.5},0).wait(1).to({x:-58.2,y:-57.4},0).wait(1).to({x:-56.2,y:-55.3},0).wait(1).to({x:-54.2,y:-53.1},0).wait(1).to({x:-52.3,y:-51},0).wait(1).to({x:-50.3,y:-48.9},0).wait(1).to({x:-48.4,y:-46.7},0).wait(1).to({x:-46.4,y:-44.6},0).wait(1).to({x:-44.5,y:-42.4},0).wait(1).to({x:-42.5,y:-40.3},0).wait(1).to({x:-40.6,y:-38.2},0).wait(1).to({x:-38.6,y:-36},0).wait(1).to({x:-36.6,y:-33.9},0).wait(1).to({x:-34.7,y:-31.8},0).wait(1).to({x:-32.7,y:-29.6},0).wait(1).to({x:-30.8,y:-27.5},0).wait(1).to({x:-28.8,y:-25.3},0).wait(1).to({x:-26.9,y:-23.2},0).wait(1).to({x:-24.9,y:-21.1},0).wait(1).to({x:-23,y:-18.9},0).wait(1).to({x:-21,y:-16.8},0).wait(1).to({x:-19,y:-14.7},0).wait(1).to({x:-17.1,y:-12.5},0).wait(1).to({x:-15.1,y:-10.4},0).wait(1).to({x:-13.2,y:-8.2},0).wait(1).to({x:-11.2,y:-6.1},0).wait(1).to({x:-9.3,y:-4},0).wait(1).to({x:-7.3,y:-1.8},0).wait(1).to({x:-5.4,y:0.3},0).wait(1).to({x:-3.4,y:2.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.3,-188.1,546,381.2);


// stage content:
(lib.book_master = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.blood_cell_parent.addEventListener("click", () => {
			triggerSparkles(this.sparkles)
		});
		
		function triggerSparkles(spark)
		{
			spark.gotoAndPlay(1)
		}
		
		
		this.about_button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage(event)
		{
			window.location.href = "/about";
		}
		
		this.sickle_cell_button.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2(event)
		{
			window.location.href = "/sickle-cell";
		}
		
		this.credits_button.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3(event)
		{
			window.location.href = "/credits";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// characters
	this.blood_cell_parent = new lib.blood_cell_parent();
	this.blood_cell_parent.name = "blood_cell_parent";
	this.blood_cell_parent.parent = this;
	this.blood_cell_parent.setTransform(857.5,841.6);

	this.instance = new lib.melinda1ipadhd();
	this.instance.parent = this;
	this.instance.setTransform(1307,770);

	this.instance_1 = new lib.melarmipadhd();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1036,1036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.blood_cell_parent}]}).wait(1));

	// ui_buttons
	this.instance_2 = new lib.start_button();
	this.instance_2.parent = this;
	this.instance_2.setTransform(274,705);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.credits_button = new lib.Symbol3();
	this.credits_button.name = "credits_button";
	this.credits_button.parent = this;
	this.credits_button.setTransform(274,1294);

	this.sickle_cell_button = new lib.Symbol2();
	this.sickle_cell_button.name = "sickle_cell_button";
	this.sickle_cell_button.parent = this;
	this.sickle_cell_button.setTransform(274,1113);
	new cjs.ButtonHelper(this.sickle_cell_button, 0, 1, 1);

	this.about_button = new lib.Symbol1();
	this.about_button.name = "about_button";
	this.about_button.parent = this;
	this.about_button.setTransform(274,931);
	new cjs.ButtonHelper(this.about_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.about_button},{t:this.sickle_cell_button},{t:this.credits_button},{t:this.instance_2}]}).wait(1));

	// vfx
	this.sparkles = new lib.sparkles();
	this.sparkles.name = "sparkles";
	this.sparkles.parent = this;
	this.sparkles.setTransform(603,639);

	this.swirl_clip = new lib.swirl();
	this.swirl_clip.name = "swirl_clip";
	this.swirl_clip.parent = this;
	this.swirl_clip.setTransform(1034,1146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.swirl_clip},{t:this.sparkles}]}).wait(1));

	// background
	this.instance_3 = new lib.backgroundcoveripadhd();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1024,768,2089,1617);
// library properties:
lib.properties = {
	id: 'A88069BAFAE8467C88A22E7DCF7AC510',
	width: 2048,
	height: 1536,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/title_test_atlas_.png", id:"title_test_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A88069BAFAE8467C88A22E7DCF7AC510'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;