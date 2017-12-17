(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"title_test_atlas_", frames: [[1272,3586,328,112],[0,0,2048,1536],[942,3586,328,112],[1208,2100,532,444],[942,2818,782,766],[1208,1538,802,560],[1208,2546,328,168],[0,1538,1206,1278],[1538,2546,216,216],[0,2818,940,942]]}
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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.swirlcoveripadhd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,940,942), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.swirlcoveripadhd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,940,942), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.o2ipadhd();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,577.8,403.5), null);


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
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("click", () => {
			spin(this)
		});
		
		function spin(self)
		{
			self.gotoAndPlay(121)
		}
	}
	this.frame_119 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_148 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(29).call(this.frame_148).wait(1));

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,470,471);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,470,471);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3,y:0.1},0).wait(1).to({rotation:6.1,y:0},0).wait(1).to({rotation:9.1,x:-0.1,y:0.1},0).wait(1).to({rotation:12.1,y:0},0).wait(1).to({rotation:15.1,y:0.1},0).wait(1).to({rotation:18.2,x:-0.2,y:0},0).wait(1).to({rotation:21.2,y:0.1},0).wait(1).to({rotation:24.2,y:0},0).wait(1).to({rotation:27.2,x:-0.3,y:0.1},0).wait(1).to({rotation:30.3},0).wait(1).to({rotation:33.3,y:0},0).wait(1).to({rotation:36.3,x:-0.4,y:0.1},0).wait(1).to({rotation:39.3},0).wait(1).to({rotation:42.4,y:0},0).wait(1).to({rotation:45.4,x:-0.5},0).wait(1).to({rotation:48.4,x:-0.6,y:0.1},0).wait(1).to({rotation:51.4,y:0},0).wait(1).to({rotation:54.5},0).wait(1).to({rotation:57.5,x:-0.7},0).wait(1).to({rotation:60.5,y:0.1},0).wait(1).to({rotation:63.5,y:0},0).wait(1).to({rotation:66.6,y:0.1},0).wait(1).to({rotation:69.6,x:-0.8},0).wait(1).to({rotation:72.6,y:0},0).wait(1).to({rotation:75.6,y:0.1},0).wait(1).to({rotation:78.7,x:-0.9,y:0},0).wait(1).to({rotation:81.7},0).wait(1).to({rotation:84.7,x:-1},0).wait(1).to({rotation:87.7,y:0.1},0).wait(1).to({rotation:90.8},0).wait(1).to({rotation:93.8,y:0},0).wait(1).to({rotation:96.8,x:-1.1,y:0.1},0).wait(1).to({rotation:99.8},0).wait(1).to({rotation:102.9,x:-1.2,y:0},0).wait(1).to({rotation:105.9,x:-1.1},0).wait(1).to({rotation:108.9,x:-1.2,y:0.1},0).wait(1).to({rotation:111.9},0).wait(1).to({rotation:115,y:0},0).wait(1).to({rotation:118,x:-1.3},0).wait(1).to({rotation:121,y:0.1},0).wait(1).to({rotation:124,x:-1.4},0).wait(1).to({rotation:127.1,y:0},0).wait(1).to({rotation:130.1},0).wait(1).to({rotation:133.1,x:-1.5,y:0.1},0).wait(1).to({rotation:136.1,y:0},0).wait(1).to({rotation:139.2},0).wait(1).to({rotation:142.2,x:-1.6},0).wait(1).to({rotation:145.2},0).wait(1).to({rotation:148.2},0).wait(1).to({rotation:151.3,x:-1.7},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:157.3,x:-1.8},0).wait(1).to({rotation:160.3},0).wait(1).to({rotation:163.4,y:0.1},0).wait(1).to({rotation:166.4,y:0},0).wait(1).to({rotation:169.4,x:-1.9},0).wait(1).to({rotation:172.4},0).wait(1).to({rotation:175.5},0).wait(1).to({rotation:178.5,x:-2},0).wait(1).to({rotation:181.5},0).wait(1).to({rotation:184.5},0).wait(1).to({rotation:187.6,x:-2.1},0).wait(1).to({rotation:190.6},0).wait(1).to({rotation:193.6,x:-2.2},0).wait(1).to({rotation:196.6},0).wait(1).to({rotation:199.7},0).wait(1).to({rotation:202.7,x:-2.3},0).wait(1).to({rotation:205.7},0).wait(1).to({rotation:208.7},0).wait(1).to({rotation:211.8,x:-2.4},0).wait(1).to({rotation:214.8},0).wait(1).to({rotation:217.8},0).wait(1).to({rotation:220.8},0).wait(1).to({rotation:223.9,x:-2.5},0).wait(1).to({rotation:226.9,y:0.1},0).wait(1).to({rotation:229.9,y:0},0).wait(1).to({rotation:232.9,x:-2.6},0).wait(1).to({rotation:236},0).wait(1).to({rotation:239},0).wait(1).to({rotation:242},0).wait(1).to({rotation:245,x:-2.7},0).wait(1).to({rotation:248.1},0).wait(1).to({rotation:251.1},0).wait(1).to({rotation:254.1,x:-2.8},0).wait(1).to({rotation:257.1},0).wait(1).to({rotation:260.2},0).wait(1).to({rotation:263.2},0).wait(1).to({rotation:266.2,x:-2.9},0).wait(1).to({rotation:269.2},0).wait(1).to({rotation:272.3,x:-3},0).wait(1).to({rotation:275.3},0).wait(1).to({rotation:278.3},0).wait(1).to({rotation:281.3,x:-3.1},0).wait(1).to({rotation:284.4},0).wait(1).to({rotation:287.4,x:-3.2},0).wait(1).to({rotation:290.4},0).wait(1).to({rotation:293.4},0).wait(1).to({rotation:296.5,x:-3.3},0).wait(1).to({rotation:299.5},0).wait(1).to({rotation:302.5},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:308.6,x:-3.4},0).wait(1).to({rotation:311.6},0).wait(1).to({rotation:314.6},0).wait(1).to({rotation:317.6,x:-3.5},0).wait(1).to({rotation:320.7,y:0.1},0).wait(1).to({rotation:323.7,x:-3.6},0).wait(1).to({rotation:326.7,x:-3.5,y:0},0).wait(1).to({rotation:329.7,x:-3.6},0).wait(1).to({rotation:332.8,x:-3.7},0).wait(1).to({rotation:335.8,y:0.1},0).wait(1).to({rotation:338.8,y:0},0).wait(1).to({rotation:341.8,y:0.1},0).wait(1).to({rotation:344.9,x:-3.8},0).wait(1).to({rotation:347.9},0).wait(1).to({rotation:350.9,x:-3.9,y:0},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:357,y:0.1},0).wait(1).to({rotation:360,x:-4,y:0},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).wait(1).to({rotation:12.9,y:0.1},0).wait(1).to({rotation:25.7,x:0.1},0).wait(1).to({rotation:38.6},0).wait(1).to({rotation:51.4,x:0,y:0},0).wait(1).to({rotation:64.3},0).wait(1).to({rotation:77.1},0).wait(1).to({rotation:90},0).wait(1).to({rotation:102.9},0).wait(1).to({rotation:115.7,y:0.1},0).wait(1).to({rotation:128.6},0).wait(1).to({rotation:141.4,y:0},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:167.1},0).wait(1).to({rotation:180},0).wait(1).to({rotation:192.9},0).wait(1).to({rotation:205.7},0).wait(1).to({rotation:218.6},0).wait(1).to({rotation:231.4},0).wait(1).to({rotation:244.3},0).wait(1).to({rotation:257.1},0).wait(1).to({rotation:270},0).wait(1).to({rotation:282.9,x:0.1},0).wait(1).to({rotation:295.7},0).wait(1).to({rotation:308.6},0).wait(1).to({rotation:321.4,x:0},0).wait(1).to({rotation:334.3},0).wait(1).to({rotation:347.1},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470,-471,940,942);


(lib.start_container = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1));

	// Layer_1
	this.start_button = new lib.start_button();
	this.start_button.name = "start_button";
	this.start_button.parent = this;
	this.start_button.setTransform(4.1,-12);
	this.start_button.alpha = 0;
	this.start_button._off = true;
	new cjs.ButtonHelper(this.start_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start_button).wait(1).to({_off:false},0).to({alpha:1},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sparkles = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var initialSpin = false;
		
		this.addEventListener("click", () => {
			spinCell(this)
		});
		
		function spinCell(self)
		{
			if (!initialSpin) {
				initialSpin = true;
				self.gotoAndPlay(1);
			} else {
				self.gotoAndPlay(121);
			}
			
		}
	}
	this.frame_119 = function() {
		this.gotoAndPlay(61);
	}
	this.frame_146 = function() {
		this.gotoAndPlay(61);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(27).call(this.frame_146).wait(1));

	// Layer_1
	this.blood_cell = new lib.Symbol4();
	this.blood_cell.name = "blood_cell";
	this.blood_cell.parent = this;
	this.blood_cell.setTransform(288.9,201.7,1,1,0,0,0,288.9,201.7);

	this.timeline.addTween(cjs.Tween.get(this.blood_cell).wait(1).to({rotation:18.3,x:286.1,y:198.7},0).wait(1).to({rotation:36.6,x:283.3,y:195.6},0).wait(1).to({rotation:54.9,x:280.5,y:192.6},0).wait(1).to({rotation:73.2,x:277.7,y:189.5},0).wait(1).to({rotation:91.5,x:274.9,y:186.4},0).wait(1).to({rotation:109.8,x:272.1,y:183.4},0).wait(1).to({rotation:128.1,x:269.3,y:180.3},0).wait(1).to({rotation:146.4,x:266.5,y:177.2},0).wait(1).to({rotation:164.7,x:263.8,y:174.1},0).wait(1).to({rotation:183.1,x:260.9,y:171.1},0).wait(1).to({rotation:201.4,x:258.2,y:168},0).wait(1).to({rotation:219.7,x:255.4,y:164.9},0).wait(1).to({rotation:238,x:252.6,y:161.9},0).wait(1).to({rotation:256.3,x:249.8,y:158.8},0).wait(1).to({rotation:274.6,x:247,y:155.7},0).wait(1).to({rotation:292.9,x:244.3,y:152.7},0).wait(1).to({rotation:311.2,x:241.4,y:149.6},0).wait(1).to({rotation:329.5,x:238.6,y:146.5},0).wait(1).to({rotation:347.8,x:235.8,y:143.5},0).wait(1).to({rotation:366.1,x:233,y:140.4},0).wait(1).to({rotation:384.4,x:230.2,y:137.4},0).wait(1).to({rotation:402.7,x:227.4,y:134.3},0).wait(1).to({rotation:421,x:224.6,y:131.3},0).wait(1).to({rotation:439.3,x:221.8,y:128.2},0).wait(1).to({rotation:457.6,x:219,y:125.2},0).wait(1).to({rotation:475.9,x:216.2,y:122.1},0).wait(1).to({rotation:494.2,x:213.4,y:119},0).wait(1).to({rotation:512.5,x:210.6,y:115.9},0).wait(1).to({rotation:530.8,x:207.8,y:112.8},0).wait(1).to({rotation:549.2,x:205.1,y:109.8},0).wait(1).to({rotation:567.5,x:202.2,y:106.7},0).wait(1).to({rotation:585.8,x:199.4,y:103.6},0).wait(1).to({rotation:604.1,x:196.6,y:100.6},0).wait(1).to({rotation:622.4,x:193.8,y:97.5},0).wait(1).to({rotation:640.7,x:191.1,y:94.4},0).wait(1).to({rotation:659,x:188.3,y:91.4},0).wait(1).to({rotation:677.3,x:185.5,y:88.3},0).wait(1).to({rotation:695.6,x:182.7,y:85.2},0).wait(1).to({rotation:713.9,x:179.9,y:82.2},0).wait(1).to({rotation:732.2,x:177.1,y:79.2},0).wait(1).to({rotation:750.5,x:174.3,y:76.1},0).wait(1).to({rotation:768.8,x:171.5,y:73},0).wait(1).to({rotation:787.1,x:168.7,y:69.9},0).wait(1).to({rotation:805.4,x:165.9,y:66.9},0).wait(1).to({rotation:823.7,x:163.1,y:63.9},0).wait(1).to({rotation:842,x:160.3,y:60.8},0).wait(1).to({rotation:860.3,x:157.5,y:57.7},0).wait(1).to({rotation:878.6,x:154.7,y:54.6},0).wait(1).to({rotation:896.9,x:151.9,y:51.5},0).wait(1).to({rotation:915.3,x:149.1,y:48.5},0).wait(1).to({rotation:933.6,x:146.3,y:45.4},0).wait(1).to({rotation:951.9,x:143.5,y:42.3},0).wait(1).to({rotation:970.2,x:140.7,y:39.3},0).wait(1).to({rotation:988.5,x:138,y:36.2},0).wait(1).to({rotation:1006.8,x:135.2,y:33.2},0).wait(1).to({rotation:1025.1,x:132.4,y:30.1},0).wait(1).to({rotation:1043.4,x:129.6,y:27},0).wait(1).to({rotation:1061.7,x:126.8,y:24},0).wait(1).to({rotation:1080,x:124,y:20.9},0).wait(2).to({y:22},0).wait(1).to({y:23},0).wait(1).to({y:24.1},0).wait(1).to({y:25.1},0).wait(1).to({y:26.1},0).wait(1).to({y:27.1},0).wait(1).to({y:28.2},0).wait(1).to({y:29.2},0).wait(1).to({y:30.2},0).wait(1).to({y:31.3},0).wait(1).to({y:32.3},0).wait(1).to({y:33.3},0).wait(1).to({y:34.3},0).wait(1).to({y:35.4},0).wait(1).to({y:36.4},0).wait(1).to({y:37.4},0).wait(1).to({y:38.5},0).wait(1).to({y:39.5},0).wait(1).to({y:40.5},0).wait(1).to({y:41.6},0).wait(1).to({y:42.6},0).wait(1).to({y:43.6},0).wait(1).to({y:44.7},0).wait(1).to({y:45.7},0).wait(1).to({y:46.7},0).wait(1).to({y:47.7},0).wait(1).to({y:48.8},0).wait(1).to({y:49.8},0).wait(1).to({y:50.8},0).wait(1).to({y:51.9},0).wait(1).to({y:50.8},0).wait(1).to({y:49.7},0).wait(1).to({y:48.7},0).wait(1).to({y:47.6},0).wait(1).to({y:46.5},0).wait(1).to({y:45.5},0).wait(1).to({y:44.4},0).wait(1).to({y:43.3},0).wait(1).to({y:42.3},0).wait(1).to({y:41.2},0).wait(1).to({y:40.1},0).wait(1).to({y:39.1},0).wait(1).to({y:38},0).wait(1).to({y:36.9},0).wait(1).to({y:35.9},0).wait(1).to({y:34.8},0).wait(1).to({y:33.7},0).wait(1).to({y:32.7},0).wait(1).to({y:31.6},0).wait(1).to({y:30.5},0).wait(1).to({y:29.5},0).wait(1).to({y:28.4},0).wait(1).to({y:27.4},0).wait(1).to({y:26.3},0).wait(1).to({y:25.2},0).wait(1).to({y:24.2},0).wait(1).to({y:23.1},0).wait(1).to({y:22},0).wait(1).to({y:20.9},0).wait(2).to({rotation:1093.8,y:21},0).wait(1).to({rotation:1107.7,y:20.9},0).wait(1).to({rotation:1121.5},0).wait(1).to({rotation:1135.4,x:123.9,y:21},0).wait(1).to({rotation:1149.2},0).wait(1).to({rotation:1163.1,y:20.9},0).wait(1).to({rotation:1176.9,x:124,y:21},0).wait(1).to({rotation:1190.8,x:123.9},0).wait(1).to({rotation:1204.6,x:124,y:20.9},0).wait(1).to({rotation:1218.5,x:123.9},0).wait(1).to({rotation:1232.3},0).wait(1).to({rotation:1246.2,x:124},0).wait(1).to({rotation:1260},0).wait(1).to({rotation:1273.8,x:123.9},0).wait(1).to({rotation:1287.7,x:124},0).wait(1).to({rotation:1301.5,x:123.9,y:21},0).wait(1).to({rotation:1315.4,x:124,y:20.9},0).wait(1).to({rotation:1329.2},0).wait(1).to({rotation:1343.1},0).wait(1).to({rotation:1356.9},0).wait(1).to({rotation:1370.8},0).wait(1).to({rotation:1384.6},0).wait(1).to({rotation:1398.5},0).wait(1).to({rotation:1412.3,y:21},0).wait(1).to({rotation:1426.2,y:20.9},0).wait(1).to({rotation:1440},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,577.8,403.5);


(lib.cell_parent = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		
		this.addEventListener("click", () => {
			move(this)
		});
		
		function move(self)
		{
			self.stop();
		}
	}
	this.frame_89 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(1));

	// Layer_1
	this.cell_parent = new lib.blood_cell();
	this.cell_parent.name = "cell_parent";
	this.cell_parent.parent = this;
	this.cell_parent.setTransform(49,34.8,1,1,0,0,0,288.9,201.7);

	this.timeline.addTween(cjs.Tween.get(this.cell_parent).wait(1).to({regX:204.7,regY:106.7,x:-35.2,y:-62},0).wait(1).to({y:-63.8},0).wait(1).to({y:-65.6},0).wait(1).to({y:-67.4},0).wait(1).to({y:-69.3},0).wait(1).to({y:-71.1},0).wait(1).to({y:-72.9},0).wait(1).to({y:-74.7},0).wait(1).to({y:-76.5},0).wait(1).to({y:-78.4},0).wait(1).to({y:-80.2},0).wait(1).to({y:-82},0).wait(1).to({y:-83.8},0).wait(1).to({y:-85.7},0).wait(1).to({y:-87.5},0).wait(1).to({y:-89.3},0).wait(1).to({y:-91.1},0).wait(1).to({y:-92.9},0).wait(1).to({y:-94.8},0).wait(1).to({y:-96.6},0).wait(1).to({y:-98.4},0).wait(1).to({y:-100.2},0).wait(1).to({y:-102},0).wait(1).to({y:-103.9},0).wait(1).to({y:-105.7},0).wait(1).to({y:-107.5},0).wait(1).to({y:-109.3},0).wait(1).to({y:-111.2},0).wait(1).to({y:-113},0).wait(1).to({y:-114.8},0).wait(1).to({y:-116.6},0).wait(1).to({y:-118.4},0).wait(1).to({y:-120.3},0).wait(1).to({y:-122.1},0).wait(1).to({y:-123.9},0).wait(1).to({y:-125.7},0).wait(1).to({y:-127.5},0).wait(1).to({y:-129.4},0).wait(1).to({y:-131.2},0).wait(1).to({y:-133},0).wait(1).to({y:-134.8},0).wait(1).to({y:-136.7},0).wait(1).to({y:-138.5},0).wait(1).to({y:-140.3},0).wait(1).to({y:-138.5},0).wait(1).to({y:-136.7},0).wait(1).to({y:-134.8},0).wait(1).to({y:-133},0).wait(1).to({y:-131.2},0).wait(1).to({y:-129.4},0).wait(1).to({y:-127.6},0).wait(1).to({y:-125.7},0).wait(1).to({y:-123.9},0).wait(1).to({y:-122.1},0).wait(1).to({y:-120.3},0).wait(1).to({y:-118.4},0).wait(1).to({y:-116.6},0).wait(1).to({y:-114.8},0).wait(1).to({y:-113},0).wait(1).to({y:-111.2},0).wait(1).to({y:-109.3},0).wait(1).to({y:-107.5},0).wait(1).to({y:-105.7},0).wait(1).to({y:-103.9},0).wait(1).to({y:-102},0).wait(1).to({y:-100.2},0).wait(1).to({y:-98.4},0).wait(1).to({y:-96.6},0).wait(1).to({y:-94.8},0).wait(1).to({y:-92.9},0).wait(1).to({y:-91.1},0).wait(1).to({y:-89.3},0).wait(1).to({y:-87.5},0).wait(1).to({y:-85.7},0).wait(1).to({y:-83.8},0).wait(1).to({y:-82},0).wait(1).to({y:-80.2},0).wait(1).to({y:-78.4},0).wait(1).to({y:-76.5},0).wait(1).to({y:-74.7},0).wait(1).to({y:-72.9},0).wait(1).to({y:-71.1},0).wait(1).to({y:-69.3},0).wait(1).to({y:-67.4},0).wait(1).to({y:-65.6},0).wait(1).to({y:-63.8},0).wait(1).to({y:-62},0).wait(1).to({y:-60.2},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.9,-166.9,577.8,403.5);


// stage content:
(lib.book_master = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var hasDisplayedStart = false; 
		
		this.cell_parent.addEventListener("click", () => {
			triggerSparkles(this.sparkles, this.start)
		});
		
		function triggerSparkles(spark, start)
		{
			spark.gotoAndPlay(1);
			if (!hasDisplayedStart) {
				hasDisplayedStart = true;
				setTimeout(() => {
					start.gotoAndPlay(2)
				}, 2000)
			}
			
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

	// melinda
	this.instance = new lib.melinda1ipadhd();
	this.instance.parent = this;
	this.instance.setTransform(1306,770);

	this.instance_1 = new lib.melarmipadhd();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1035,1036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// blood_cell
	this.cell_parent = new lib.cell_parent();
	this.cell_parent.name = "cell_parent";
	this.cell_parent.parent = this;
	this.cell_parent.setTransform(776.2,871.3);

	this.timeline.addTween(cjs.Tween.get(this.cell_parent).wait(1));

	// credits
	this.credits_button = new lib.Symbol3();
	this.credits_button.name = "credits_button";
	this.credits_button.parent = this;
	this.credits_button.setTransform(274,1294);

	this.timeline.addTween(cjs.Tween.get(this.credits_button).wait(1));

	// sickle_cell
	this.sickle_cell_button = new lib.Symbol2();
	this.sickle_cell_button.name = "sickle_cell_button";
	this.sickle_cell_button.parent = this;
	this.sickle_cell_button.setTransform(274,1113);
	new cjs.ButtonHelper(this.sickle_cell_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.sickle_cell_button).wait(1));

	// start
	this.start = new lib.start_container();
	this.start.name = "start";
	this.start.parent = this;
	this.start.setTransform(270,733.1);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(1));

	// about
	this.about_button = new lib.Symbol1();
	this.about_button.name = "about_button";
	this.about_button.parent = this;
	this.about_button.setTransform(274,931);
	new cjs.ButtonHelper(this.about_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.about_button).wait(1));

	// sparkles
	this.sparkles = new lib.sparkles();
	this.sparkles.name = "sparkles";
	this.sparkles.parent = this;
	this.sparkles.setTransform(601,639);

	this.timeline.addTween(cjs.Tween.get(this.sparkles).wait(1));

	// swirl
	this.instance_2 = new lib.swirl();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1058,1138);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// page_01_bg
	this.instance_3 = new lib.backgroundcoveripadhd();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1022,768,2090,1609);
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