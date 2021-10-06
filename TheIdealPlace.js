(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"TheIdealPlace_atlas_1", frames: [[0,2310,1024,684],[0,2996,1024,683],[0,0,1024,768],[2052,2053,843,545],[1026,0,1024,683],[1026,685,1024,683],[1026,1370,1024,683],[2052,2600,298,211],[1026,2055,1024,683],[1026,2740,1024,683],[0,770,1024,768],[2052,1370,1024,681],[2052,0,1024,683],[2052,685,1024,683],[0,1540,1024,768]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bowlingimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cinemaimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cookingimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.escaperoomimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.horsesimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.houseimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.iceskateimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logoHIT2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.parkimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.pubimange2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.restaurantimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.seaimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.showimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.wallclimbimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.wineimage2 = function() {
	this.initialize(ss["TheIdealPlace_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.txt_info_again = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt_info_again.font = "25px Rubik SemiBold";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt_info_again = new cjs.Text("שוב", "normal 800 25px 'Rubik'", "#FE7E63");
	this.txt_info_again.name = "txt_info_again";
	this.txt_info_again.textAlign = "center";
	this.txt_info_again.lineHeight = 33;
	this.txt_info_again.lineWidth = 47;
	this.txt_info_again.parent = this;
	this.txt_info_again.setTransform(25.5,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.txt_info_again);
	}

	this.timeline.addTween(cjs.Tween.get(this.txt_info_again).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_info_again, new cjs.Rectangle(0,0,51,35.3), null);


(lib.mini_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.park_open_txt = new cjs.Text("מקום פתוח", "normal 400 28px 'Rubik'");
	this.park_open_txt.name = "park_open_txt";
	this.park_open_txt.textAlign = "center";
	this.park_open_txt.lineHeight = 35;
	this.park_open_txt.lineWidth = 149;
	this.park_open_txt.parent = this;
	this.park_open_txt.setTransform(0,-22.55);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.park_open_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.park_open_txt).wait(1).to({text:"מקום סגור"},0).wait(1).to({text:"דייט ראשון"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.4,-24.5,152.8,49.1);


(lib.wine_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("סיור ביקב הינה פעילות שכרוכה בתשלום, הסדירו זאת מראש מול המקום או הביאו איתכם אמצעי תשלום, קחו זאת .בחשבון בבחירת מקום המפגש", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 929;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(963.45,26.7);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("EhDggPaMCHBAAAQEWAADEDEQDFDFAAEWIAAJ3QAAEWjFDFQjEDEkWAAMiHBAAAQkWAAjEjEQjFjFAAkWIAAp3QAAkWDFjFQDEjEEWAAg");
	this.shape.setTransform(499.15,98.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhDgAPbQkVAAjFjEQjEjFAAkWIAAp3QAAkWDEjFQDFjEEVAAMCHBAAAQEVAADFDEQDEDFAAEWIAAJ3QAAEWjEDFQjFDEkVAAg");
	this.shape_1.setTransform(499.15,98.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.mini_popup_txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wine_txt_money, new cjs.Rectangle(-3.5,-3.5,1005.3,204.5), null);


(lib.wallClimb_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("קיר טיפוס זו פעילות שכרוכה בתשלום ולכן קחו זאת בחשבון .בבחירת מקום המפגש והביאו אמצעי תשלום בהתאם", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 944;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(946,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wallClimb_txt_money, new cjs.Rectangle(0,0,948,106.1), null);


(lib.wallClimb_txt_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("כדי לטפס חשוב שתגיעו עם נעליים סגורות וחשוב גם .שתביאו איתכם מים לאחרי הפעילות", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 831;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(833.4,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wallClimb_txt_equipment, new cjs.Rectangle(0,0,835.4,103.6), null);


(lib.show_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("רכישת הכרטיסים עולה כסף, וודאו שאתם מסדירים את העניין מראש מול הקופות הרלוונטיות. בנוסף, בזמן ההופעה ככל הנראה יהיו מקומות שניתן לקנות בהם אוכל ושתייה במידה ותרצו, ולכן קחו זאת בחשבון והביאו איתכם אמצעי .תשלום ליתר ביטחון", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 944;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(946,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.show_txt_money, new cjs.Rectangle(0,0,948,253.7), null);


(lib.show_txt_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("וודאו כשאתם יוצאים מהבית שלקחתם איתכם את הכרטיסים .להופעה, מומלץ גם להביא מים לשתות תוך כדי", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 944;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(946,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.show_txt_equipment, new cjs.Rectangle(0,0,948,102.3), null);


(lib.sea_txt_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("במידה ואתם הולכים על פיקניק מול הנוף של הגלים, תביאו איתכם מחצלת או שמיכה לשבת עליה, תיק או סלסלה לשים את המאכלים והשתייה בפנים, במידה ויום המפגש שלכם יהיה .שמשי במיוחד אפשר להביא גם כובע וקרם הגנה בנוסף", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 961;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(962.95,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sea_txt_equipment, new cjs.Rectangle(0,0,965,202.6), null);


(lib.restaurant_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("בכל יציאה למסעדה, המטרה של המפגש היא להזמין .מאכלים טעימים ויש להביא אמצעי תשלום עבור הדייט", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 862;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(863.65,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.restaurant_txt_money, new cjs.Rectangle(0,0,865.7,107.3), null);


(lib.pub_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("כשיוצאים לפאב צריך לקחת בחשבון שככל הנראה תזמינו משהו לשתות או לאכול ולכן הביאו איתכם אמצעי תשלום .בהתאם, קחו זאת בחשבון בבחירת מקום המפגש", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 909;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(911.15,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pub_txt_money, new cjs.Rectangle(0,0,913.2,164), null);


(lib.park_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("טיול בפארק או ישיבה בדשא לא אמורה לעלות כסף במידה וזה פארק ציבורי כמובן, אבל במידה ובחרתם ללכת על פיקניק ולא כל המאכלים נמצאים ברשותכם בבית, יכול להיות שתצטרכו להוסיף קצת כסף כדי להשלים את החוויה במלואה. במידה ותרצו לשדרג מעט את המפגש, חלק מהפארקים מציעים להשכיר אופניים ותוכלו לשכור בעצמכם כדי להפוך את הטיול לקצת יותר חווייתי ויש לקחת את זה .בחשבון ההוצאות במפגש", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 939;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(962.3,30.45);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("EhCggicMCFBAAAQEWAADFDEQDEDFAAEWMAAAAv7QAAEWjEDFQjFDEkWAAMiFBAAAQkWAAjFjEQjEjFAAkWMAAAgv7QAAkWDEjFQDFjEEWAAg");
	this.shape.setTransform(492.8,228.3603,1,1.0355);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhCgAidQkWAAjFjEQjEjFAAkWMAAAgv7QAAkWDEjFQDFjEEWAAMCFBAAAQEWAADEDEQDFDFAAEWMAAAAv7QAAEWjFDFQjEDEkWAAg");
	this.shape_1.setTransform(492.8,228.3603,1,1.0355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.mini_popup_txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.park_txt_money, new cjs.Rectangle(-3.5,-3.5,992.6,463.7), null);


(lib.park_txt_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("במידה ואתם הולכים על הפיקניק בפארק, תביאו איתכם מחצלת או שמיכה לשבת עליה, תיק או סלסלה לשים את המאכלים והשתייה בפנים, במידה ויום המפגש שלכם יהיה .שמשי במיוחד אפשר להביא גם כובע בנוסף", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 902;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(904,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.park_txt_equipment, new cjs.Rectangle(0,0,906,202.3), null);


(lib.iceSkate_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("החלקה על הקרח זו פעילות שכרוכה בתשלום, קחו זאת .בחשבון בבחירת מקום המפגש והביאו אמצעי תשלום בהתאם", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 962;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(887.55,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iceSkate_txt_money, new cjs.Rectangle(-76.2,0,965.8000000000001,110.1), null);


(lib.iceSkate_txt_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("בדקו את הטמפרטורה עם המקום שאליו בחרתם ללכת להחליק והתאימו את הבגדים בהתאם על מנת שלא יהיה קר .או חם מידי בהחלקה", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 944;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(946,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iceSkate_txt_equipment, new cjs.Rectangle(0,0,948,156.1), null);


(lib.house_txt_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("הציוד שתצטרכו עבור המפגש הוא בהתאם לאופי הערב שבחרתם, למשל, במידה ואתם הולכים על קונספט של סרטים, וודאו שיש לכם את הסרט מוכן, מקום לצפות בו .ומשהו לנשנש תוך כדי ביחד", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 878;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(879.6,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.house_txt_equipment, new cjs.Rectangle(0,0,881.6,202.4), null);


(lib.horses_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("רכיבה על סוסים הינה פעילות שכרוכה בתשלום קחו זאת בחשבון בבחירת מקום המפגש והביאו אמצעי תשלום .בהתאם", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 900;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(941.1,31.45);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("EhCQgRaMCEhAAAQEWAADFDFQDEDEAAEWIAAN3QAAEWjEDEQjFDFkWAAMiEhAAAQkWAAjFjFQjEjEAAkWIAAt3QAAkWDEjEQDFjFEWAAg");
	this.shape.setTransform(491.2,103.7568,1,0.9308);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhCQARbQkWAAjFjFQjEjEAAkWIAAt3QAAkWDEjEQDFjFEWAAMCEhAAAQEWAADEDFQDFDEAAEWIAAN3QAAEWjFDEQjEDFkWAAg");
	this.shape_1.setTransform(491.2,103.7568,1,0.9308);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.mini_popup_txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.horses_txt_money, new cjs.Rectangle(-3.5,-3.5,989.4,214.5), null);


(lib.horses_txt_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("רצוי שתביאו איתכם מים ואוכל, רכיבה יכולה לקחת זמן ותמיד טוב לעשות עצירה לצבירת כוחות בדרך. מומלץ גם .להגיע עם נעליים סגורות", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 897;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(898.7,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.horses_txt_equipment, new cjs.Rectangle(0,0,900.7,159.9), null);


(lib.escapeRoom_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("כניסה לחדר בריחה הינה פעילות שכרוכה בתשלום, קחו זאת בחשבון בבחירת מקום המפגש והביאו אמצעי תשלום .בהתאם", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 900;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(901.6,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.escapeRoom_txt_money, new cjs.Rectangle(0,0,903.6,150.2), null);


(lib.cooking_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("סדנת בישול הינה פעילות שכרוכה בתשלום, תגיעו עם אמצעי תשלום או הסדירו זאת מראש מול מארגני הסדנה .וקחו זאת בחשבון בבחירת מקום המפגש", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 894;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(895.5,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cooking_txt_money, new cjs.Rectangle(0,0,897.5,157.4), null);


(lib.cinema_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("במידה ובחרתם לצאת לראות סרט יחד בקולנוע, קחו בחשבון שכרטיסים לסרט כרוכים בתשלום, אפשר גם להזמין פופקורן או משהו מתוק לאכול בזמן הסרט אבל זו כבר בחירה שלכם", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 944;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(946,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cinema_txt_money, new cjs.Rectangle(0,0,948,203.6), null);


(lib.bowling_txt_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("באולינג הינה פעילות שכרוכה בתשלום, קחו זאת בחשבון .בבחירת מקום המפגש והביאו אמצעי תשלום בהתאם ", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 898;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(900.3,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bowling_txt_money, new cjs.Rectangle(0,0,902.3,108.1), null);


(lib.bowling_txt_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.mini_popup_txt.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mini_popup_txt = new cjs.Text("באולינג היא פעילות שמבצעים עם נעליים סגורות שניתן לקבל בקבלה לפני המשחק, וודאו שאתם מגיעים עם גרביים .משלכם כדי שתוכלו להיכנס למקום", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 944;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(946,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.mini_popup_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bowling_txt_equipment, new cjs.Rectangle(0,0,948,153.6), null);


(lib.link_telem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "normal 400 35px 'Rubik'", "#0033CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 412;
	this.text.parent = this;
	this.text.setTransform(207.9,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5E2BD").s().p("EggeADjIAAnFMBA9AAAIAAHFg");
	this.shape.setTransform(207.925,22.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.link_telem, new cjs.Rectangle(0,0,415.9,45.5), null);


(lib.wine_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.wine_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.wine_txt_gray = new cjs.Text("סיור ביקב", "normal 400 60px 'Rubik'");
	this.wine_txt_gray.name = "wine_txt_gray";
	this.wine_txt_gray.textAlign = "center";
	this.wine_txt_gray.lineHeight = 73;
	this.wine_txt_gray.lineWidth = 276;
	this.wine_txt_gray.alpha = 0.20000000;
	this.wine_txt_gray.parent = this;
	this.wine_txt_gray.setTransform(139.8,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.wine_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.wine_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wine_txt_gray, new cjs.Rectangle(0,0,279.7,77.1), null);


(lib.wallClimb_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.wallClimb_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.wallClimb_txt_gray = new cjs.Text("קיר טיפוס", "normal 400 60px 'Rubik'");
	this.wallClimb_txt_gray.name = "wallClimb_txt_gray";
	this.wallClimb_txt_gray.textAlign = "center";
	this.wallClimb_txt_gray.lineHeight = 73;
	this.wallClimb_txt_gray.lineWidth = 276;
	this.wallClimb_txt_gray.alpha = 0.20000000;
	this.wallClimb_txt_gray.parent = this;
	this.wallClimb_txt_gray.setTransform(139.8,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.wallClimb_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.wallClimb_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wallClimb_txt_gray, new cjs.Rectangle(0,0,279.7,77.1), null);


(lib.show_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.show_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.show_txt_gray = new cjs.Text("הופעה של אומן", "normal 400 60px 'Rubik'");
	this.show_txt_gray.name = "show_txt_gray";
	this.show_txt_gray.textAlign = "center";
	this.show_txt_gray.lineHeight = 73;
	this.show_txt_gray.lineWidth = 367;
	this.show_txt_gray.alpha = 0.20000000;
	this.show_txt_gray.parent = this;
	this.show_txt_gray.setTransform(185.65,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.show_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.show_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.show_txt_gray, new cjs.Rectangle(0,0,371.3,77.1), null);


(lib.sea_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.sea_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.sea_txt_gray = new cjs.Text("ים", "normal 400 60px 'Rubik'");
	this.sea_txt_gray.name = "sea_txt_gray";
	this.sea_txt_gray.textAlign = "center";
	this.sea_txt_gray.lineHeight = 73;
	this.sea_txt_gray.lineWidth = 83;
	this.sea_txt_gray.alpha = 0.20000000;
	this.sea_txt_gray.parent = this;
	this.sea_txt_gray.setTransform(43.65,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.sea_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.sea_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sea_txt_gray, new cjs.Rectangle(0,0,87.4,75.1), null);


(lib.restaurant_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.restaurant_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.restaurant_txt_gray = new cjs.Text("מסעדה", "normal 400 60px 'Rubik'");
	this.restaurant_txt_gray.name = "restaurant_txt_gray";
	this.restaurant_txt_gray.textAlign = "center";
	this.restaurant_txt_gray.lineHeight = 73;
	this.restaurant_txt_gray.lineWidth = 222;
	this.restaurant_txt_gray.alpha = 0.20000000;
	this.restaurant_txt_gray.parent = this;
	this.restaurant_txt_gray.setTransform(113.15,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.restaurant_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.restaurant_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.restaurant_txt_gray, new cjs.Rectangle(0,0,226.4,75.1), null);


(lib.pub_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.pub_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.pub_txt_gray = new cjs.Text("פאב", "normal 400 60px 'Rubik'");
	this.pub_txt_gray.name = "pub_txt_gray";
	this.pub_txt_gray.textAlign = "center";
	this.pub_txt_gray.lineHeight = 73;
	this.pub_txt_gray.lineWidth = 135;
	this.pub_txt_gray.alpha = 0.20000000;
	this.pub_txt_gray.parent = this;
	this.pub_txt_gray.setTransform(69.3,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.pub_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.pub_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pub_txt_gray, new cjs.Rectangle(0,0,138.6,75.1), null);


(lib.park_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.park_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.park_txt_gray = new cjs.Text("פארק בטבע", "normal 400 60px 'Rubik'");
	this.park_txt_gray.name = "park_txt_gray";
	this.park_txt_gray.textAlign = "center";
	this.park_txt_gray.lineHeight = 73;
	this.park_txt_gray.lineWidth = 301;
	this.park_txt_gray.alpha = 0.20000000;
	this.park_txt_gray.parent = this;
	this.park_txt_gray.setTransform(152.35,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.park_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.park_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.park_txt_gray, new cjs.Rectangle(0,0,304.8,75.1), null);


(lib.iceSkate_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.iceSkate_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.iceSkate_txt_gray = new cjs.Text("החלקה על קרח", "normal 400 60px 'Rubik'");
	this.iceSkate_txt_gray.name = "iceSkate_txt_gray";
	this.iceSkate_txt_gray.textAlign = "center";
	this.iceSkate_txt_gray.lineHeight = 73;
	this.iceSkate_txt_gray.lineWidth = 202;
	this.iceSkate_txt_gray.alpha = 0.20000000;
	this.iceSkate_txt_gray.parent = this;
	this.iceSkate_txt_gray.setTransform(102.75,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.iceSkate_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.iceSkate_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iceSkate_txt_gray, new cjs.Rectangle(0,0,205.6,148.2), null);


(lib.house_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.house_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.house_txt_gray = new cjs.Text("בית", "normal 400 60px 'Rubik'");
	this.house_txt_gray.name = "house_txt_gray";
	this.house_txt_gray.textAlign = "center";
	this.house_txt_gray.lineHeight = 73;
	this.house_txt_gray.lineWidth = 104;
	this.house_txt_gray.alpha = 0.20000000;
	this.house_txt_gray.parent = this;
	this.house_txt_gray.setTransform(53.9,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.house_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.house_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.house_txt_gray, new cjs.Rectangle(0,0,107.8,75.1), null);


(lib.horses_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.horses_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.horses_txt_gray = new cjs.Text("חוות סוסים", "normal 400 60px 'Rubik'");
	this.horses_txt_gray.name = "horses_txt_gray";
	this.horses_txt_gray.textAlign = "center";
	this.horses_txt_gray.lineHeight = 73;
	this.horses_txt_gray.lineWidth = 290;
	this.horses_txt_gray.alpha = 0.20000000;
	this.horses_txt_gray.parent = this;
	this.horses_txt_gray.setTransform(146.8,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.horses_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.horses_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.horses_txt_gray, new cjs.Rectangle(0,0,293.7,75.1), null);


(lib.escapeRoom_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.escapeRoom_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.escapeRoom_txt_gray = new cjs.Text("חדר בריחה", "normal 400 60px 'Rubik'");
	this.escapeRoom_txt_gray.name = "escapeRoom_txt_gray";
	this.escapeRoom_txt_gray.textAlign = "center";
	this.escapeRoom_txt_gray.lineHeight = 73;
	this.escapeRoom_txt_gray.lineWidth = 290;
	this.escapeRoom_txt_gray.alpha = 0.20000000;
	this.escapeRoom_txt_gray.parent = this;
	this.escapeRoom_txt_gray.setTransform(146.8,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.escapeRoom_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.escapeRoom_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.escapeRoom_txt_gray, new cjs.Rectangle(0,0,293.7,75.1), null);


(lib.cooking_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.cooking_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.cooking_txt_gray = new cjs.Text("סדנת בישול", "normal 400 60px 'Rubik'");
	this.cooking_txt_gray.name = "cooking_txt_gray";
	this.cooking_txt_gray.textAlign = "center";
	this.cooking_txt_gray.lineHeight = 73;
	this.cooking_txt_gray.lineWidth = 290;
	this.cooking_txt_gray.alpha = 0.20000000;
	this.cooking_txt_gray.parent = this;
	this.cooking_txt_gray.setTransform(146.8,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.cooking_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.cooking_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cooking_txt_gray, new cjs.Rectangle(0,0,293.7,75.1), null);


(lib.cinema_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.cinema_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.cinema_txt_gray = new cjs.Text("קולנוע", "normal 400 60px 'Rubik'");
	this.cinema_txt_gray.name = "cinema_txt_gray";
	this.cinema_txt_gray.textAlign = "center";
	this.cinema_txt_gray.lineHeight = 73;
	this.cinema_txt_gray.lineWidth = 198;
	this.cinema_txt_gray.alpha = 0.20000000;
	this.cinema_txt_gray.parent = this;
	this.cinema_txt_gray.setTransform(101.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.cinema_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.cinema_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cinema_txt_gray, new cjs.Rectangle(0,0,202.2,87.7), null);


(lib.bowling_txt_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bowling_txt_gray.alpha = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.bowling_txt_gray = new cjs.Text("באולינג", "normal 400 60px 'Rubik'");
	this.bowling_txt_gray.name = "bowling_txt_gray";
	this.bowling_txt_gray.textAlign = "center";
	this.bowling_txt_gray.lineHeight = 73;
	this.bowling_txt_gray.lineWidth = 198;
	this.bowling_txt_gray.alpha = 0.20000000;
	this.bowling_txt_gray.parent = this;
	this.bowling_txt_gray.setTransform(101.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.bowling_txt_gray);
	}

	this.timeline.addTween(cjs.Tween.get(this.bowling_txt_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bowling_txt_gray, new cjs.Rectangle(0,0,202.2,87.7), null);


(lib.about_txt3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.about_txt3.font = "40px Rubik SemiBold";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.about_txt3 = new cjs.Text(":במסגרת פרויקט משולב בשנה א' תשפ\"א של הקורסים", "normal 600 40px 'Rubik'");
	this.about_txt3.name = "about_txt3";
	this.about_txt3.textAlign = "center";
	this.about_txt3.lineHeight = 51;
	this.about_txt3.lineWidth = 907;
	this.about_txt3.parent = this;
	this.about_txt3.setTransform(455.4,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.about_txt3);
	}

	this.timeline.addTween(cjs.Tween.get(this.about_txt3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.about_txt3, new cjs.Rectangle(0,0,910.9,54.2), null);


(lib.about_txt2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.about_txt2.font = "40px Rubik";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.about_txt2 = new cjs.Text("אורן כהן ולירון ששון                                  \n\n\n ארגון וייצוג ידע -\nמבוא לתכנות אינטראקציה ואנימציה -", "normal 400 40px 'Rubik'");
	this.about_txt2.name = "about_txt2";
	this.about_txt2.textAlign = "right";
	this.about_txt2.lineHeight = 49;
	this.about_txt2.lineWidth = 871;
	this.about_txt2.parent = this;
	this.about_txt2.setTransform(873.25,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.about_txt2);
	}

	this.timeline.addTween(cjs.Tween.get(this.about_txt2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.about_txt2, new cjs.Rectangle(0,0,875.3,298.4), null);


(lib.about_txt1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.about_txt1.font = "40px Rubik SemiBold";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.about_txt1 = new cjs.Text(":הייצוג פותח על ידי", "normal 600 40px 'Rubik'");
	this.about_txt1.name = "about_txt1";
	this.about_txt1.textAlign = "center";
	this.about_txt1.lineHeight = 51;
	this.about_txt1.lineWidth = 326;
	this.about_txt1.parent = this;
	this.about_txt1.setTransform(164.8,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.about_txt1);
	}

	this.timeline.addTween(cjs.Tween.get(this.about_txt1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.about_txt1, new cjs.Rectangle(0,0,329.7,52.5), null);


(lib.info_questionMark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// layer_1
	this.text = new cjs.Text("דייט רגוע הוא באווירה נינוחה, זורמים עם הרגע, נהנים ממנו ויש ...יותר אפשרות להיכנס עם הפרטנר לשיחות עמוקות ומעניינות ", "normal 400 65px 'Rubik'");
	this.text.textAlign = "right";
	this.text.lineHeight = 79;
	this.text.lineWidth = 1624;
	this.text.parent = this;
	this.text.setTransform(812.05,-68.45);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("EinTgrdMFOnAAAQHwAAFfFfQFfFfAAHxMAAAAxdQAAHxlfFfQlfFfnwAAMlOnAAAQnwAAlflfQlflfAAnxMAAAgxdQAAnxFflfQFflfHwAAg");
	this.shape.setTransform(0.0234,-0.0431,0.7311,0.4006);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EinSAreQnxAAlflfQlflfAAnxMAAAgxdQAAnxFflfQFflfHxAAMFOlAAAQHxAAFfFfQFfFfAAHxMAAAAxdQAAHxlfFfQlfFfnxAAg");
	this.shape_1.setTransform(0.0234,-0.0431,0.7311,0.4006);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:0.7311,x:0.0234}},{t:this.shape,p:{scaleX:0.7311,x:0.0234}},{t:this.text,p:{x:812.05,y:-68.45,text:"דייט רגוע הוא באווירה נינוחה, זורמים עם הרגע, נהנים ממנו ויש ...יותר אפשרות להיכנס עם הפרטנר לשיחות עמוקות ומעניינות ",lineWidth:1624,font:"normal 400 65px 'Rubik'",lineHeight:79.05}}]}).to({state:[{t:this.shape_1,p:{scaleX:0.6223,x:-0.0004}},{t:this.shape,p:{scaleX:0.6223,x:-0.0004}},{t:this.text,p:{x:670.7,y:-71.05,text:"מקומות שבהם בני הזוג יכולים להרגיש יותר חופשיים .ולהיפתח אחד אל השני באווירה יותר קלילה",lineWidth:1341,font:"normal 400 65px 'Rubik'",lineHeight:79.05}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.5751,x:0.0045}},{t:this.shape,p:{scaleX:0.5751,x:0.0045}},{t:this.text,p:{x:610.75,y:-74.25,text:"מקומות פחות שגרתיים שבהם בני הזוג יהיו .פעילים ויוכלו להפיק חוויה עם ערך מוסף בדייט",lineWidth:1222,font:"normal 400 65px 'Rubik'",lineHeight:79.05}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.4725,x:0.0292}},{t:this.shape,p:{scaleX:0.4725,x:0.0292}},{t:this.text,p:{x:473.25,y:-63.25,text:"מקומות שמיועדים לדייטים שבהם הדגש .הוא יותר על חיזוק הקשר בין בני הזוג",lineWidth:946,font:"normal 400 60px 'Rubik'",lineHeight:73.1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-873.9,-114.9,1747.9,229.8);


(lib.icon_questionMark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("?", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 43;
	this.text.parent = this;
	this.text.setTransform(0.0376,-78.55,2.6315,2.6315);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("AOxAAQAAGIkVEUQkUEVmIAAQmHAAkVkVQkUkUAAmIQAAmHEUkVQEVkUGHAAQGIAAEUEUQEVEVAAGHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqcKcQkUkUAAmIQAAmGEUkWQEWkUGGAAQGIAAEUEUQEVEWAAGGQAAGIkVEUQkUEVmIAAQmGAAkWkVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E2BD").s().p("AqcKcQkUkUAAmIQAAmGEUkWQEWkUGGAAQGIAAEUEUQEVEWAAGGQAAGIkVEUQkUEVmIAAQmGAAkWkVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-99,198,212.8);


(lib.icon_X = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AF3AAILKrJIl3l2IrKLKIl2F1IrKrJIF3l2ILJLKAAAF3IF3l3ILJLKIl3F2gAl2AAIrJLKIF3F2ILIrJ");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.945)").s().p("AAAF3IF2l3ILKLKIl3F2gAw/LKILKrKIF1l1ILKrKIF2F2IrKLJIl2F3IrILJgAAAF3gAw/rJIF2l2ILJLKIl1F1gAAAl1g");
	this.shape_1.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_X, new cjs.Rectangle(-109.8,-109.8,219.7,219.6), null);


(lib.icon_pictures = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("AOuMGQt/gQt+AMQikACh1gfQgVgGACgbQEEnREbm5QACgDAFAAQD2ECEAD5QADACAFAAQEal4Ddm5QABgCAFAAQBwBxBRCWQCFD2CUDyQCTDyBjD2QhAAuh7AAIgNAAgALSpZIAAgKQAVgnARgpQACgFAAgFQDAieCTC7QBcB3hWB0QgtA9hQAZIgRABQj3AAAEj7g");
	this.shape.setTransform(153.8315,118.1705);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.992)").s().p("AHHR0I79AAQAAgFgBgBQidgzg0iZIAAg8IAA79QAtiqCugtQABAAAAgFIb9AAINmAAQCbAzAxCeQABABAFAAIAAb9IAABGQgFAAgBACQgrCfihAnIAAAKItwAAgAy0NpQL/AjMYADQHRAEGfgjQAAgFADgCQAlghAegoIAAgKQAZsagZsbQgFAAgCgCQgbgsgkgiQgbAHgEgBQr/ghsXgEQnQgEmgAjQAAAFgCACQg0AngaBAIAAAKQgIMYASL/QAFAAACACQAbAsAkAiQAZgHAFAAIAAAAg");
	this.shape_1.setTransform(154.5,114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_pictures, new cjs.Rectangle(0,0,309,228), null);


(lib.icon_open_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,65,0,0.514)").s().p("AgTAGIAAgTQAXgHANATQADACAAAFIgKAAQgSAAgLAKIAAgKg");
	this.shape.setTransform(144,197.4058);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,3,0,0.596)").s().p("AAFBpQACgbgQgDIAAgKQARhCgIhdIAAgKIAKAAIAADHIAAAKg");
	this.shape_1.setTransform(132,189.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOBlIAAgKIAAjHIATAAIAKAAIAAC9IAAAKQgFAAgBACQgIAQgGAAQgFAAgEgIg");
	this.shape_2.setTransform(134.5,189.8924);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,7,0,0.384)").s().p("AgOBaIAAi9IAKAAQgMBqAdBAQACAEAAAFQgFAAgDgDQgIgIgNAfIAAgKg");
	this.shape_3.setTransform(137.5,189);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(3,1,0,0.804)").s().p("AAPAPIgKAAIgTAAIgKAAIAAgKIAAgTIAnAAIAKAAIAAATIAAAKIgKAAg");
	this.shape_4.setTransform(134.5,167.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.898)").s().p("AAKAPIgdAAIAAgKIAAgTIAdAAIAKAAIAAATIAAAKIgKAAg");
	this.shape_5.setTransform(134,159.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(7,3,0,0.902)").s().p("AAKAPIgdAAIAAgKIAAgTIAdAAIAKAAIAAATIAAAKIgKAAg");
	this.shape_6.setTransform(134,151.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(89,35,0,0.631)").s().p("AhegFICzAAIAKAAIAAAJIgKAAIgKAAIgeAAIgKAAQgWACgTAAQgzAAglgLg");
	this.shape_7.setTransform(127.5,149.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(111,44,0,0.678)").s().p("AhFgEIB3AAIAKAAIAKAAIgBAEQhFAFhFAAIAAgJg");
	this.shape_8.setTransform(126,169.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(66,26,0,0.4)").s().p("AA8AFIiBAAIAAgJICBAAIAKAAIAAAJIgKAAg");
	this.shape_9.setTransform(125,144.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(84,34,0,0.996)").s().p("ABVGkIi9AAIAAgKIAArPQBIgmAohGQACgCAFAAQAfAsA5AVQACAAAAAFIAALjIAAAKQAAAFgCADQgDACgFAAIAAAKIgKAAg");
	this.shape_10.setTransform(76.5,160);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,100,0,0.796)").s().p("AgEA8IAAgKIAAhtIAJAAIAABtIAAAKIgJAAg");
	this.shape_11.setTransform(0.5,58);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,68,0,0.541)").s().p("AgEAjIAAhPQAQAggMA4QAAABgEAAIAAgKg");
	this.shape_12.setTransform(148.5104,72.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,127,0,0.996)").s().p("AnKJEQiQh9A6juQgFAAgEgCQiUg9ghiwIAAgKIAAhuIAAgKIAAgeQAvhUBBhAQADgCAFAAQA4llGHBaQA5ANAkAsQBEhSB4ghQABAAAAgFIB4AAIAKAAQETBLgZFFIAAAKQDIAyAnDRIABAKIAABQIAAAKIgBAKQgzDykMAcIgFAAQgFAygKAoQgFAAgBACQhECOjEgiQAAgFgCgBQg5gUgfgsQgFAAgCACQgoBGhIAmQhVAkhNAAQh0AAhghTg");
	this.shape_13.setTransform(74.5,66.3201);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,1,0,0.922)").s().p("AgTA/IAAgKIAAifIAdAAIAKAAIAAC9IAAAKQAAAFgCABQgNAIgIAAQgUAAAEgsg");
	this.shape_14.setTransform(189.9529,189.7488);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,116,0,0.922)").s().p("AJEAeIyRAAIAAgKQAFAAADgCQACgDAAgFQAPgqAyAPIBBAbQAjg8APAuIAHgKQAEgFAdAdQAigEAJgIIAKAJQARARAKgYQAdgtAaAwQACAEAIgOQANgaAgArIAMgGQAPgGADgRQARADgCAaIAFAAQAKATAOgbQABgCAFAAQANgeAJAIQADADAFAAQgDAfAggHQABAAAAgFQALgJASAAIAKAAQAaAlAOgvIAFAEQA2AsApgdIAEAIQABACAFAAQAAg0BEAzQACAAAAgSIAAgUQAUAoApgTQAPgIAbAKIAQgGQAGgCAFgFQAaBKAmhSQABgCAFAAQgHBAAtgdQACgBAAgFQAYgeApATIAJAEQAaAMAUAZIgKAAg");
	this.shape_15.setTransform(145,199);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(112,44,0,0.675)").s().p("AkDgEIAKAAIHzAAIAKAAIAAAEQhyAFhtAAQiYAAiQgJg");
	this.shape_16.setTransform(162,169.5104);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(110,44,0,0.671)").s().p("AhPgFIAKAAQBKAABKAFIABAEIgKAAQgZACgXAAQg4AAgtgLg");
	this.shape_17.setTransform(199,169.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(3,1,0,0.922)").s().p("AAKAPIgKAAIgTAAIAAgKIAAgTIAdAAIAKAAIAAATIAAAKIgKAAg");
	this.shape_18.setTransform(190,167.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(166,66,0,0.98)").s().p("AnGAGQAFgFAGgCQAEgCAFAAQBGAABGgFIAAgFIAUAAIAKAAQD4AREPgMIAAgFIAUAAIAKAAQA/ARBXgGIAKgBIAKAAIAABFIAAAKIgJABQg/ARhYgIIgKAAIgeAAIgKAAInzAAIgKAAIgKAAIgUAAIgKAAIgJABQgjAJgaAAQhVAAAFhagAnGhTQA6gRBSAHIAKAAIAeAAIAKAAIH9AAIAKAAIAeAAIAKAAICWAAIAKAAIAAAoIAAAKIgKAAIiWAAIgKAAIgeAAIgKAAInzAAIgKAAIgoAAIgKABQgeAHgZAAQhCAAgTgwg");
	this.shape_19.setTransform(162.4841,170.3586);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.918)").s().p("AAKAPIgdAAIAAgKIAAgTIAdAAIAKAAIAAATIAAAKIgKAAg");
	this.shape_20.setTransform(190,159.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(7,3,0,0.047)").s().p("ABGAUIiVAAIAAgKIAAgTQBLAABJgFIABgFIAKAAIAAAdIAAAKIgKAAg");
	this.shape_21.setTransform(200,151);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(162,64,0,0.957)").s().p("AnGgcICMAAIAKAAIAeAAIAKAAIH9AAIAKAAIAeAAIAKAAICWAAIAKAAIAAAnIAAAKIgKAAIiWAAIgKAAIgeAAIgKAAIn9AAIgKAAIgeAAIgKABQggAHgZAAQhHAAgMg5g");
	this.shape_22.setTransform(162.5,155.9067);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(7,3,0,0.059)").s().p("AD6APIn9AAIAAgKIAAgTIAKAAIHzAAIAKAAIAAATIAAAKIgKAAg");
	this.shape_23.setTransform(162,151.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(90,35,0,0.537)").s().p("AD1AFInzAAIAAgJIHzAAIAKAAIAAAJIgKAAg");
	this.shape_24.setTransform(162.5,149.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(7,3,0,0.922)").s().p("AAKAPIgdAAIAAgKIAAgTIAdAAIAKAAIAAATIAAAKIgKAAg");
	this.shape_25.setTransform(190,151.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(90,36,0,0.624)").s().p("AhAAFIgeAAIAAgJICzAAIAKAAIgBAEQhKAFhKAAIgKAAg");
	this.shape_26.setTransform(197.5,149.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(56,22,0,0.533)").s().p("AFtAPIkRAAQBCgEAlgZQBGAdBugFIAAAFIgKAAgAl2APIAAgKIAAgJQCsAODsAFImYAAg");
	this.shape_27.setTransform(169.5,143.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(169,67,0,0.992)").s().p("AG9AUIgKAAIi0AAIgKAAInzAAIgKAAIi0AAQgFAAgBgBQgEgTAAgTIAKAAICCAAIAKAAIGYAAIAVABQATAAASgBIERAAIAKAAIAKAAIAAAdIAAAKIgKAAg");
	this.shape_28.setTransform(162.5,147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_open_color, new cjs.Rectangle(0,0,208,202), null);


(lib.icon_open = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.373)").s().p("AAABKQgUglAHh+IAKAAQgMBqAdBAQACAEAAAFg");
	this.shape.setTransform(137.4093,188);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.031)").s().p("AhPgUICVAAIAKAAIAAAdIAAAKQgTgBgKABIgeACQhLAAgZgpg");
	this.shape_1.setTransform(200,168.1008);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.043)").s().p("AhPgRICVAAIAKAAIAAATIAAAKIgKABQgfAFgZAAQhBAAgcgjg");
	this.shape_2.setTransform(200,151.8216);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("AD6ALQjtgWkGAIIAAAJIAAAKQgFAAAAgCQgFgNAAgOQEQgID2AbQABAAgEAIQgBACgFAAIAAgFg");
	this.shape_3.setTransform(161.96,167.4196);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.537)").s().p("ADwAFInpAAIAAgJQD5AAD6AEIAAAFIgKAAg");
	this.shape_4.setTransform(162,149.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.165)").s().p("AkDgWIAKAAQBkAiCVAAIAZAAQhPAIhVADIgNAAQhUAAgXgtgAD6gWQAQgBgKACIgWAFIAQgGg");
	this.shape_5.setTransform(162.0042,152.2981);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.518)").s().p("ABGAFIiVAAIAAgJICVAAIAKAAIAAAJIgKAAg");
	this.shape_6.setTransform(200,149.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.988)").s().p("APePyI1ZAAIAAgKIAArQQjYBbifiJQiQh/A7jsQgFAAgEgCQiShFgtipIAAgKIAAhkQAlh7BVhLQADgCAFAAQA4llGHBZQA5AOAkAsQBFhWCCgdQABAAAAgFIBkAAIAKAAQAAAFABAAQElBAgjFVQC5AtAgC7QA/FnloAwIgFAAQgFAzgKAnQgFAAgBACQgwBVhfAhIgKAAQg/ACgvgMQgIGEASFWIAAgUQAqA4AVgdIAQAGQAGACAFAFQAjAPAZgZIAEgCQAPgIAKgKIAFAEQAMAJADARQApATAJgoIAKALQALAJATABQAUg6AhApIAGgKQAVggAAA7QAsARAVg4QAAgBAFAAQAHhhgdhDQgDgGgPAAQiJASAzh0QABgCAFAAQDEgIimgVIgKgBQhbgqB5gGQAegCAeAAQACgvhwAOQgfAEALgpQBSgDAugpQARgPgjAJQiaAGBVgsQAEgCAFAAQBegFAjACIAVADQEHAIDsgcQABAAAEgIQABgCAFAAQA8AtB4gOIAKgBIAAAeIAAAKIgKAAIiWAAIAAAKQAoAyBugTIAKgBIAAAoIAAAKIgKAAIiWAAQAoAyBugTIAKgBIAAAoIAAAKIgKAAIiWAAQAeAyBlgKQAKgBATABIAABGIAAAKIgJABQg/AQhYgHQgHBwARBOIADgJQACgGAFgFQAfA4AlgYQACgCAMAGQAPAHADARIgKAAgAH+PoQAKgPAMgMQANgNAGAEIAJAGQALgfATAfQAFAKAHABIATADQAbg5AWA/QAFAAAEgCQBBggBCAiQAAgFACgDQAthGgRiEIgKAAIn0AAIgKAAQgHB/AUAlIARAQQAAAFACACQAaATAggkQAFAKADALQAFAQADgFQALgTARAAQAXAAAhAlgAFAKKQAAAPAEANQABACAFAAIHqAAIAKAAQAFAAABgCQAEgIgBAAQjCgWjRAAQg6AAg6ACgAFCJEQCXAbCxAFQB4ACBGgiIAAgFQkEgFkEAAQAAAKACAAgAG5IYQBUgDBQgIQB6gDBYgaIAVgFQAKgCgQABIAAgFQj6gFj6AAIAAAKIgKAAQAZAyBggEg");
	this.shape_7.setTransform(104,101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_open, new cjs.Rectangle(0,0,208,202), null);


(lib.icon_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.855)").s().p("AgbAXIAAgUQA1gwABAKQAHBGg9ADg");
	this.shape.setTransform(55.8103,88.7324);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.878)").s().p("AgPADQgCgOAAgPQA4AoghALIgGACQgLAAgEgYg");
	this.shape_1.setTransform(43.8166,52.6522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.933)").s().p("AgsAKQgTgNAEgnQBXACAeA6QACAEAAAFQgLAQgUAAQgdAAgsghg");
	this.shape_2.setTransform(52.9569,59.3048);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.957)").s().p("AgKAtQhLgEgKguQgEgTAAgUQBNgBB4AQQACAAAAAPQgKA7hYAAIgMAAg");
	this.shape_3.setTransform(71,63.4835);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.514)").s().p("AgTAiQgFgiAAgiQAYAAAYAFQABAAAAAFIgKAAIgdAAIAAAxIAAAKIgFgBg");
	this.shape_4.setTransform(21.5,95.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.929)").s().p("Ag2gkIAAgKQBZAEATBLIABAKQgTAEgPAAQg/AAgMhTg");
	this.shape_5.setTransform(11.5,92.7482);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.859)").s().p("AgCAbQgGgMgKgKIAAgJIAAgeQBBA1guAQg");
	this.shape_6.setTransform(1.9446,86.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.98)").s().p("AhlB3QiNgUgrhoQgEgJAAgKQCpiWEsBHQBUAUAaBPQhaCDjHAAQgvAAg3gIg");
	this.shape_7.setTransform(30,79.4588);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.576)").s().p("AgiAjQgFgjAAgiQAnAAAoAFIAAAFIgKAAIg7AAIAAAxIAAAKIgFAAg");
	this.shape_8.setTransform(24,45.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.835)").s().p("AgEAeQgTgVAEgrQBDA0gwARg");
	this.shape_9.setTransform(2.9509,36.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.976)").s().p("ADDDWQjagDhBiJQgGgNAAgPQBFgriDAPQi6AWh4hCQglgVAFhCQCniIEUAxQB6AVAOB0Qg2AyBfgRQD6gsB3CMQg9CUjjAAIgMAAg");
	this.shape_10.setTransform(51.4648,37.3927);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.824)").s().p("AgPgVQgDgDAAgFIAlA7Igigzg");
	this.shape_11.setTransform(59.8943,19.0228);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.914)").s().p("Ag6gkIgBgKQBUAJAhA9QACAEAAAFQgbAOgWAAQg0AAgRhTg");
	this.shape_12.setTransform(70,25.7043);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.596)").s().p("AgMgZIAKAAQgHAfAQAGQAFACAFAAQAAAFgCABQgLAGgGAAQgVAAALgzg");
	this.shape_13.setTransform(144.325,78.6393);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.902)").s().p("AgOAjQgSgGAHgfQBbhThCB4QAAACgFAAQgFAAgEgCg");
	this.shape_14.setTransform(146.5663,76.3115);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.898)").s().p("AgsgUQB2g8ghBTQgNAhgyAKIgFAAQgbAAAKhCg");
	this.shape_15.setTransform(135.4953,82.1392);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.557)").s().p("AAEAhQgTgVAHguIAJAAQgGApAOAUQACADAAAFQgFAAgCgCg");
	this.shape_16.setTransform(109.8977,83.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.486)").s().p("AgxgEIAKAAQAcABAZgBIAaAAIAKAAQAAAEgBAAQgaAFgVAAQgdAAgWgJg");
	this.shape_17.setTransform(120,80.5104);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.945)").s().p("AhQAdQAAgFgCgDQgPgUAHgpIAoAAIAKAAQAmASA8gNQABAAAAgFQAUAAAIAKQAMAPgMAPQgkApg8AAQggAAgngMg");
	this.shape_18.setTransform(119.0799,84.0868);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.961)").s().p("AkKEiIiWAAQAAgFgCgBQgIgEgKAAIAAgKIAAgyIAeAAIAKAAQBrgMAhAgQAKAKgDAUQgCAKgFAKIgKAAgAE8BhQgDgCAAgFQAXg1BYA5QAJAGADAUQAEAbgRADQg6gWgxgfgAmqjbIAAgKIAAgyIA8AAIAKAAQAFAAAFgBQBvgegBBHQAAAFgCABQgwAag6AAQgnAAgrgMg");
	this.shape_19.setTransform(63.6881,70.992);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.886)").s().p("AgPADQgCgOAAgPQA4AoghALIgGACQgLAAgEgYg");
	this.shape_20.setTransform(91.8166,73.6522);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.969)").s().p("AAACUQgdgBgggEQibgSghh+QgLgVhEgEQgBAAAAgPIAAgeQBNgbAeAdQADADAAAFQAFAIAmg8QApg/gEA3QgsA6AsgRQAFgBAFAAQD3g9C3BjQAeAQgBAtQhaB6i6AIIgaAAIgcAAg");
	this.shape_21.setTransform(116.0016,65.2486);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.925)").s().p("Ag6gjQgBgEAAgFQBaAEAbBBQACAFAAAFQgXAKgTAAQgzAAgZhQg");
	this.shape_22.setTransform(109,42.5316);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.831)").s().p("AgBAgQgZgSAJgwQBAA3gtAOg");
	this.shape_23.setTransform(99.7875,36.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.941)").s().p("AhNAbQghgMANg5QBvANBWAMQACAAAAAPQgkAtg+AAQgjAAgugQg");
	this.shape_24.setTransform(87.8163,29.2754);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.984)").s().p("Ag7CTQAAgFgCgBQgkgQAIg6QAzg/hxASQkIAphKilQBEhTCNgMIABgFICWAAIAKAAIAAAFQDCAEAPCDQg6A3B3gRQEIgnBLCgQgLAmglAQQh5A0h7AAQiAAAiBg4g");
	this.shape_25.setTransform(108,20.3324);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.871)").s().p("AgiABQAogOAWghQACgCAFAAIAAAeIAAAKQgFAAgBACQgbA3gPAAQgPAAgGgwg");
	this.shape_26.setTransform(154.5,37.9413);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.906)").s().p("AlhEfQgIgEAAgUIAAgUQBXgnAVAoQACAEAAAFQgbAsglAAQgSAAgUgKgAGii7QghgLANg6QBygDBRAaQAFACAAAPQgkAsg+AAQglAAgtgPgAJqkAQB2g8gdBWQgHAVgbANQgTAKgMAAQgiAAAKhGgArGkfQgBgEAAgFQBbAEAbBCQACAFAAAFQgYALgUAAQg0AAgXhSg");
	this.shape_27.setTransform(77.244,67.7224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_money, new cjs.Rectangle(0,0,158,100), null);


(lib.icon_firstDate_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(89,0,0,0.537)").s().p("AAAAnQgEgnAAgnIAJAAIAABFIAAAKIgFgBg");
	this.shape.setTransform(15.5,58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(5,0,0,0.035)").s().p("AorCaQAoAqAwAjQAgAYAfAdQDNDIDSDCQF8lKE+mGQAxg9ADhsQAFAAAAgBQAMgzgRgcQgqkVjphNQkrhhiwC1QgpgmgygcQg1gdg5gHQnFg0hfF2IAAAoIAAAKIgKAAQAAAoAFAoIAFAAQAnC4BiB/QhJhWhFhXQhKheAJiuQBYmcHNAZQCbAIBYBXQANAMAOAKQC5i8E3BcQFeBog2HCQgEAkgVAnQhXCdh/B6QkWELkTEOQkskTkKk1g");
	this.shape_1.setTransform(89.9366,83.1886);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(168,0,0,0.992)").s().p("AmfEdQgegdghgYQgwgjgngqIgvg2Qhhh/goi4IAAgKIAAhGIAAgKIAAgoQBfl2HFA0QA5AHA1AdQAzAcAoAmQCxi1EqBhQDpBNAqEVIAABGIAAAKQgDBsgxA9Qk+GGl8FKQjRjCjOjIgAiaC1QCJAkCngIQAFAAACgCQAzgvhsAJQAAgFgCgBQgIgEAAgBQgUjzgKj1QgFAAgFACQh7AxhqBFQAAAFADAEQAkAzAzg8QAPAAAAADQAhCbgIC1QAAAFgCADQgjAkg/AGIgHAAQgGAAAIACg");
	this.shape_2.setTransform(91,83.0964);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(88,0,0,0.529)").s().p("AgEAeIAAhFQAQAbgMAzQAAABgEAAIAAgKg");
	this.shape_3.setTransform(166.5191,58);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(161,0,0,0.949)").s().p("AAAM+IgJAAQiCiHiFiFQiEiEiQh3Qj4jMhxlQIAAgKIAAhuQBBmWGUhFQABAAAAgFIB4AAIAKAAQC9AkByBwQACACAEAAQBwhxDFggQABAAAAgFIB4AAIAKAAQGGBGBLGFQAAABAFAAIAACCIAAAKQgUB4hBBMQl9HFmyGQIAAAKIgKAAgAszlTQgJCuBKBeQBGBXBIBWIAvA2QEJE1EsETQETkOEWkLQCAh7BWicQAVgnAFgkQA2nClfhoQk2hci6C8QgOgKgMgNQhZhWiagIIg0gBQmfAAhTGEg");
	this.shape_4.setTransform(91,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_firstDate_color, new cjs.Rectangle(0,0,182,166), null);


(lib.icon_firstDate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.992)").s().p("Aqxg7QhPhjATjCQBumFHKBLQBwATBFBLQCmimEiBKQB9AgBQBaQCQCjhQERQgdBkhGBFQk4E0kwE8Ql7lZlAmRgAg2jVQAlCaggCwQAAAFgCAEQgbAvhHAEQAAAPACAAQCYAPCbAAQAFAAADgCQApgthjgDQgKgFAAgGQgUjzgKj1QgFAAgEACQh8AxhqBFQAAAFACAEQAiA2A2g/IALgBQAMAAACAKg");
	this.shape.setTransform(90.9903,84.2592);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.047)").s().p("AsBhLQgFgGgDgJQgthiAIiZQBVmlHQAbQCvAKBfBoQC/i4EyBWQFkBjgwG/QgLBuhBBFQlgF6lvFsQmimClum1gArolfQgTDCBPBiQFAGRF7FaQEwk9E4k0QBGhFAdhkQBQkRiQijQhQhah9gfQkihKimCmQhFhLhwgTQhLgNhBAAQlQAAhcFHgAiODBQgCAAAAgPQBHgEAbgvQACgEAAgFQAgiwgliaQgDgPgWAGQg2A/gig3QgCgDAAgFQBqhFB8gyQAEgBAFAAQAKD1AUDzQAAAGAKAFQBjADgpAsQgDADgFAAQibAAiYgPg");
	this.shape_1.setTransform(90.4738,84.2412);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.973)").s().p("AgENDQiAiNiIiIQiHiGiUh4Qj8jIhvlSIAAgKIAAiCQBNl/GIhIQABAAAAgFIB4AAIAKAAQDAAhBvBzQACACAFAAQB0hsDAglQABAAAAgFICCAAIAKAAQGJBIBIGNQAAABAFAAIAAB4IAAAKQgSAqgPA3QgLAogbAhQmFHanCGfIAAAKIgJAAgAs4lOQgICZAtBjQADAIAFAGQFtG2GjGBQFulsFhl5QBAhFAMhuQAwm/lkhkQkzhWi9C4QhghnivgLQgcgBgbAAQmfAAhPGLg");
	this.shape_2.setTransform(91.5,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_firstDate, new cjs.Rectangle(0,0,183,167), null);


(lib.icon_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.051)").s().p("AAACIQiPgLh8gYQjEglgkjKQChEWH9g+QD2geBTi6Qg/EVljAAQgoAAgqgDg");
	this.shape.setTransform(87,166.9478);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.039)").s().p("AjCgRQDCgZDCAeIABAFQhMAhh7ADIgOAAQh3AAg5gug");
	this.shape_1.setTransform(86.5,59.7903);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.043)").s().p("Al2A9QCDi2FyAkQBpALA7AkQBCAmASBRQhYiIkjAAQjZAAhmBhQgSARgMATQgHAOgFAAQgIAAgBgfg");
	this.shape_2.setTransform(87.5,49.8532);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.988)").s().p("AEYQVIpDAAQi7grhjiDQg1hGAJAsQAFAFABAGIAEATQhcARhOgRQgFAAgCgCQgugtgbg/IAAgKIAAiMIABgaQAHjzCGh2QADgDAFAAQALBuACB4QAKnaATnaQADhIAfg4QBYikC6hFQAtiMCPgtQACAAAAgFIFTAAIAKAAQCMAyA6CDQACAEAAAFQGXCVg9J4QgQCoAACqIAAFUQASiygDjKIAFAAQCfBugOEiIAFAAIAACCIAAAKQgFAAgBABQgUBThAAkQgUAAgUACQiKAUAcg+IAFgKQhdCTj8A1IAAAKIgKAAgAkLLVQB8AYCPALQGuAjBGk2QhTC8j2AdQn9A+ihkXQAkDLDEAlgArFJTIAAADIAAgNIAAAKgAnzFPQAAAZgDAYIgEAhQAmjdC0hEQBjglCKgMQHtgpA6F5QALlakOhCQhAgOhWgJQhCgHg7AAQmlAAgsFqgAjHnQQA8AyCCgDQB7gDBMgiIgBgFQhqgQhpAAQhYAAhZALgAlxnkQACAyATghQAMgTASgRQBmhiDYAAQEkAABYCJQgShShCgmQg7gkhpgLQg+gGg3AAQkSAAhuCZgAizvOQAAAFgCABQhVAbg1A5IAAAFQE/AGFAgBQgFAAgCgDQhwhtjcAAQhKAAhWAMg");
	this.shape_3.setTransform(87,104.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_equipment, new cjs.Rectangle(0,0,174,209), null);


(lib.icon_closed_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(31,11,0,0.38)").s().p("AhFgFICBAAIAKAAIAAAJIgKAAQgWACgUAAQgyAAglgLg");
	this.shape.setTransform(157,240.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(28,11,0,0.349)").s().p("Ag2gFQA2AAA3AFIAAAEIgKAAQgSACgQAAQgmAAgbgLg");
	this.shape_1.setTransform(5.5,241.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(48,20,0,0.58)").s().p("AgIKeQAGt+AAt/QAQNugGOFQgBDmAADmQgRjVACjtg");
	this.shape_2.setTransform(149.3457,127.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(169,67,0,0.996)").s().p("Ap3RcIAAgFQgSttAGuGQACjSAAjSQCDgiCzACQHrAFHUARQARNuAAOFQAADkgRDKQloAKlwAAQkHAAkMgFgAn/g6IAAAKQAHCFBxhAQAFgUgBgHQgMhZgrAAQgcAAgpAlg");
	this.shape_3.setTransform(82.2234,128.3322);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(6,2,0,0.082)").s().p("AgnAZIAAg7IBFAAIAKAAQAAAFgCAAQg2ARgXAvIAAgKg");
	this.shape_4.setTransform(4,3.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(47,19,0,0.576)").s().p("AgERqIAAnWIAA79IAJAAIAAb9IAAHWIgJAAg");
	this.shape_5.setTransform(14.5,128.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(50,19,0,0.604)").s().p("AKUAFI0xAAIAAgJQKdAAKeAEIAAAFIgKAAg");
	this.shape_6.setTransform(82,14.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(84,33,0,0.996)").s().p("AqxS1IgUAAIAAgFQg3gFg3AAIAAocIAA79QAXgwA3gRQACAAAAgFIW9AAIAKAAQA6ASAQA8QABACAFAAIAAb9IAAIIIgKAAIiCAAQAAjmABjmQAHuFgStuIAAgFQqegFqdAAIAAAKIgKAAIAAb9IAAHWIgKAAg");
	this.shape_7.setTransform(82,120.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(8,3,0,0.098)").s().p("AAhApQgRg8g5gSQBigXgSBcIgBAKQgFAAAAgBg");
	this.shape_8.setTransform(160.182,4.214);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_closed_color, new cjs.Rectangle(0,0,164.4,241.7), null);


(lib.icon_closed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AgsgFQAsAAAsAFIABAEIgKAAQgPACgNAAQgfAAgUgLg");
	this.shape.setTransform(4.5,241.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("Ap3RcIAAgFQgSttAGuGQACjSAAjSQCDgiCzACQHrAFHUARQARNuAAOFQAADkgRDKQloAKlwAAQkHAAkMgFgAn/g6IAAAKQAJCEBvg/QAFgUgBgHQgMhZgrAAQgcAAgpAlg");
	this.shape_1.setTransform(82.2234,128.3322);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.067)").s().p("AgiAZIAAg7IA7AAIAKAAQAAAFgCABQgsAWgXApIAAgKg");
	this.shape_2.setTransform(3.5,3.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.973)").s().p("AqxS1IgoAAIgBgFQgsgFgtAAIAAocIAA79QAXgqAtgWQACgBAAgFIXHAAIAKAAQA6ASAQA8QABACAFAAIAAb9IAAIIIgKAAIiMAAIAAnCIAA79IgKAAI0xAAQAADrABDrQAHOGgSNtIAAAKIgKAAg");
	this.shape_3.setTransform(82,120.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.098)").s().p("AAhApQgRg8g5gSQBigXgSBcIgBAKQgFAAAAgBg");
	this.shape_4.setTransform(160.182,4.214);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_closed, new cjs.Rectangle(0,0,164.4,241.7), null);


(lib.icon_wine_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#561717","#2B0C0C"],[0,1],-0.6,0,0.6,0).s().p("AAABJQgEhAgBhAIAAgRIABAAIAKAAIAACFIAAAMIgGAAg");
	this.shape.setTransform(-29.35,-85.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#561717","#2B0C0C"],[0,1],-38,0,38.1,0).s().p("ADXUUInZAAQAAgGgBgBQg3gPgdgnQAAgGgDgEQgSgegPghIAAgMIAAwJQBAjVBLjRQAAgCAHABIAAgNIAAglQAuiBAZiWIABgMQAWgzgJhTIAAgLIAAgNIAAgMQAGAAAAgBQAPhvgVhTQAAgFgDgBQgfgPgDgnIAAgNIAAiqIAAgMIAAgLQAMgHANgEQAGgCAGAAIAAgMIEWAAIAMAAQAGAGAEAIQACAEAAAHQAUgCgGAaQgCAFAAAHIAACRIAAAMIABANQACAggbAFQgHA3gEA2IgBAAIAAARQABBAAFBAIAGAAQAXERA8DsIAOAhQAxB0AbCDIAKAYQAzB9gPDAIAAFgIAAAMQAABbAMBZQArE/i9BIIAAAMIgMAAg");
	this.shape_1.setTransform(-42.9506,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AABAJIgBgBIAAgBIgFgEQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAgBIgBgBIABgCIABgBIAAgBIABgCIADgBIAAgBIADACIABADIAAACIAAAAIAEAEQABAEgBACQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAIgCgBg");
	this.shape_2.setTransform(12.37,4.8531);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(1,0,0,0.988)").s().p("AgFBVIAAi1QAUBSgPBuQAAABgFAAIAAgMg");
	this.shape_3.setTransform(-57.2875,-91.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(42,11,11,0.992)").s().p("AgEA3QADg2AGg2IAABgIAAAMIgJAAg");
	this.shape_4.setTransform(-29.2875,-97.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(125,0,0,0.988)").s().p("AgxD4QgNgGgNgIIgCgCIgEgCIgIgFIgJgIIgEgEIgCgBQgIgKgKgQIgTgdIgOgbIhOiPQgFgKgCgHQgBgHgCgDIgCgBIAAgBIgPgsIgCgKIAAAAIgBgHIgSg2IgCgMIgDgNIgKglIgFgQIgBgKIAAgLIAAgFIABAAIAAABIABAAQAAABAAAAQgBAAABAAQAAABAAAAQAAAAABAAIAEAEIACABQANAdAQAZQACAEABAEIAFAGIAEAEQAYAVAXAXIABACIAhAXQAWALANADQARAEAfgDIAKgBQC3hPC1hSQAFgCAGAAIAGAAIAAADIgDAXQgOAvgDAwQgMA2gPAzIgEAFIgJAcIgFAMIgeBBQgDABgBAEQgUAagKAYQgDAIgDAGIgIAOIgTAcIgDACIgGAIIgRAQIgGAEIgWANQgQALgRAJIgIADIgUAKIgIAAQggAAgjgOgAjcAxIAAAAIAAAAIACADIAAAAg");
	this.shape_5.setTransform(41.8,31.0713);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(1,0,0,0.875)").s().p("Aj4MWQAAgGADgDQBjhmCNg7IAAgMIAAnmQgGAAgGgCQgtgOgogUQAAgGgDgEQkHk/gaotQF2gWGTAJIAMABIAAA8IAAAMIgGAAQgPIUj3EmQgFAAgFACQgpAYgtAWIAAAMIAAHaQAFAAAGADQCEBDBkBkQAAAGgCABQiAAUh6AAQiLAAiDgbgAkqmzIABACQABADABAGIAAAGIAAALIABAKIAFAPIAKAmIADANIACAMIASA2IABAGIAAABIADAJIAOAsIAAABIACACQACADABAHQACAHAFAJIBOCQIAOAbIATAcQAKARAIAKIACABIAEADIAJAJIAIAFIAEACIACACQANAHANAGQAnAQAkgCIAUgKIAIgDQARgJAQgKIAWgOIAGgEIARgQIAGgHIADgDIATgaIAIgOQADgGADgIQAKgZAUgaQABgDADgCIAehBIAFgMIAJgdIAEgFQAPgyAMg2QADgxAOguIADgYIAAgDIABgMQAkidALi3IgLAAIrBAAQAUC1AoCggAjThtIAAgBIgCgDIAAABIAAAAg");
	this.shape_6.setTransform(41.1,47.3417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_wine_color, new cjs.Rectangle(-81,-130,161.6,260), null);


(lib.icon_wallClimb_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA2A2A","#6D4949","#346666"],[0,0.478,1],-92.5,0,92.5,0).s().p("AL9VpInWAAIgKAAIwtAAQAAgFgCgBQgmgTgogPQAAgFgCgCQghghgZgoIAAgKIAAg8QBxmSAlneIAAgKQASgWgIgwIAAgKIAAgKIAAiqQAFAAABgBQALgygRgcIAAgKIAAhQIgBgKQgIgygBg8IAAgKQgpn4htm0IAAgKIAAgyQAUgVAIgdQACgFAAgFQAwgvBRgSQABAAAAgFIUdAAIAKAAICqAAIAKAAIAoAAIAKAAQA4AeAuAmQADACAFAAQAKAeAOAcQABACAFAAIAAA8IAAAKQgFAAgBABQhoGygyHlIAABuIAAAKIgKAAIAAB4IAAAKIAADlIAAAKQAAA3AFA2IAFABQAUE2A7EOIABAKQApCFAiCSQAAABAFAAIAAAyIAAAKQgFAAgBACQgiBdhuAPIAAAKIgKAAgAqESDQAAAFABAEQAaBjCZgcQAAgFABAAQBQgTgVhCQAAgFgCgBQg8gjg3AAQhCAAg5AzgAGpRRQAFBQBBATQAFABAFAAQCgAxgRh2QgDgQgKgPQgFAAgDgCQgzgegyAAQgzAAgyAggABLPPQAAAFACAEQAjBSBxgpQAKgPgEgJQgbg5gwAAQgjAAguAfgAlsOTQAAAFACAFQAbBlB5gpIAFAAQgFhXhIAAQggAAguARgAp6LzQAIBDBcgRQAZgFgDgKQgPg6gqAAQgbAAgmAXgAkcJxQAAAFACAEQAtBqB7hBQAFAAADgCQAhgYgVgsQgFAAgEgCQgpgSglAAQg4AAgvAogAIZKZQgBhdhvA/IABAKQAIApAzgBQA0AGAAgagABpI1QAAAFACAFQAfBMBhgkQAbACgHgTQgYhBgwAAQghAAgtAggAnGGzQADAvA5AAQArAAABgSQADgzgmAAQgZAAgsAWgAheE7QACArAwgCQAUgBABgFQASg4ggAAQgTAAgmAVgAGpETQAAAFABAFQAbBPBcgdQAbACgDgWQgHg9g4AAQggAAgxAVgACvDIQCWACiWgHgAl2ClQgCAlAlgRQA3gYgnAAQgRAAgiAEgAoCAMQBaAEh4goQgBAjAfABgAF3hUQABBFAyARQAJADABgDQAbhXhHAAIgRABgAAFg2QAJApApAGQAUADAFgJQAfg6gpAAQgWAAgrARgAjMjMQgBA5BFgXQAMgDABgGQANgvgfAAQgVAAgqAWgAIDjWQgHAvAwgDQAtgDAAgfQAAgfgaAAQgVAAgnAVgABLkSQgBAuAzgEQAUgCAEgIQAagygjAAQgVAAgsASgAoWkSQAFAnAtABQAUAAAEgIQAagygjAAQgVAAgsASgAHbmoQgGAzA4gIQAUgDAEgIQAZgzgiAAQgVAAgsATgAgOoqQgDAwAqAAQCLgDgnhVIgJgBQgUgFgSAAQg4AAgkAugAlEpIQgEAnAQASQADADAFAAQBwAMARhSIABgKQgFAAgEgCQgdgPgbAAQgsAAgpAlgAE7rAQAAAPAIAIQBQBgBIhjQAAgFgDgCQgmghgtAAQgjAAgnAUgAiQt0QgMA5ApAIQABAAAAAFQCSAhgohlQgBgCgFAAQgFAAgFgCQgdgKgdAAQgfAAgfAMgAHbwAQAAAFACAEQAbBhCXgaQAAgFABAAQA0gMgDg/QgFAAgDgCQg1gpg3AAQg4AAg6ArgApIwoQAAAFACAFQBHCsCnhmQAAgFgCgEQgwhihXAAQguAAg5AbgACRxaQgHArAZALQACABAAAFQCrAnhBhrQgBgCgFAAQgFAAgFgBQgXgIgWAAQgjAAgeATg");
	this.shape.setTransform(-0.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(12,5,5,0.094)").s().p("AgDATQgggBACgkQBtAlhDAAIgMAAg");
	this.shape_1.setTransform(-51.5871,-1.1112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(3,2,2,0.035)").s().p("AhLgWQgCgEABgFQCTg4AGB9IgEAAQgjALgcAAQhCAAgThHg");
	this.shape_2.setTransform(-29.25,94.2389);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(4,3,3,0.039)").s().p("AhggHQgCgEAAgFQBPhCBlAsQAEACAFAAQAVArghAXQgDADgFAAQgvAYgiAAQg6AAgchAg");
	this.shape_3.setTransform(-19.0759,63.7436);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(121,45,45,0.843)").s().p("AgEAeIAAhFQAQAcgMAyQAAABgEAAIAAgKg");
	this.shape_4.setTransform(-76.4809,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(69,30,30,0.525)").s().p("AgFAeIAAhFIAJAAIAAAKQAHAvgQAWIAAgKg");
	this.shape_5.setTransform(-77.375,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(6,4,4,0.059)").s().p("AgmgJQBig3gbBYQgCAGgUABIgEAAQgrAAgCgog");
	this.shape_6.setTransform(-6.1261,32.0077);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(12,6,6,0.102)").s().p("AghgJQBxgPhOAiQgLAFgIAAQgRAAABgYg");
	this.shape_7.setTransform(-34.6416,17.0426);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(5,3,3,0.051)").s().p("AiNCQQBig6AZBdQADALgaAEQgTAEgPAAQg8AAgGg2gAAmivQBug3gGBUQgBASgrAAQg5AAgDgvg");
	this.shape_8.setTransform(-49.8069,60.5719);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(8,4,4,0.067)").s().p("AgqgIQBmg2gVBOQgBAFgNAEQgTAGgNAAQgkAAABgng");
	this.shape_9.setTransform(-16.748,-20.0758);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(6,2,2,0.047)").s().p("AgqgKQBzgwgqBPQgEAIgUAAQgrAAgGgng");
	this.shape_10.setTransform(-49.7418,-26.9117);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(6,2,2,0.039)").s().p("Ag2AwQgFAAgCgDQgRgSAEgmQBDg9BJAnQAEACAFAAIgBAKQgOBGhWAAIgcgBg");
	this.shape_11.setTransform(-25.5471,-57.772);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(10,3,3,0.067)").s().p("AgoAlQAAgFgBAAQgpgIAMg4QA9gYA7AXQAEABAFAAQAFAAABACQAfBLhMAAQgYAAgkgIg");
	this.shape_12.setTransform(-7.904,-85.7052);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(5,1,1,0.031)").s().p("Ah1gjQgCgEAAgFQCkhQBJCWQACAEAAAFQg+AmgxAAQhSAAgshsg");
	this.shape_13.setTransform(-47,-102.4789);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(10,1,1,0.051)").s().p("AhPA3IAAh3ICVAAIAKAAQAAAFgBAAQhQASgwAuQAAAFgCAFQgIAdgUAVIAAgKg");
	this.shape_14.setTransform(-85,-132.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(3,4,4,0.047)").s().p("AAEAlQgyABgIgoIgBgKQBug/ABBcQAAAVghAAIgTgBg");
	this.shape_15.setTransform(47.575,64.2919);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(2,2,2,0.031)").s().p("ApLEuQAZAoAgAhQADACAAAFQAoAPAmATQACABAAAFIgKABQgfAHgXAAQhmAAAaiAgAG7mDQgBgFAAgFQBthOApBvQAHATgbgCQgfAMgZAAQgzAAgWg0g");
	this.shape_16.setTransform(-34.1988,95.8002);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(6,4,4,0.063)").s().p("AglACIAAgEQB6AFhNAAIgtgBg");
	this.shape_17.setTransform(20.7625,19.2641);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(43,44,44,0.529)").s().p("AAAA2QgFg2AAg2QAQAlgHA+IAAAKIgEgBg");
	this.shape_18.setTransform(75.625,27.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(3,3,3,0.039)").s().p("AhGgNQgBgEAAgFQCDg6AMBhQADAWgbgCQgZAIgUAAQg1AAgUg6g");
	this.shape_19.setTransform(49.2356,29.3343);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(31,23,23,0.322)").s().p("AgFA3IAAh3IAJAAIAAAKQAHBHgQAwIAAgKg");
	this.shape_20.setTransform(75.625,-8.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(5,3,3,0.047)").s().p("AgqgLQBVguAAA4QAAAegsADIgGABQgpAAAGgsg");
	this.shape_21.setTransform(55.255,-20.8406);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(8,5,5,0.082)").s().p("AARArQgxgSgBhEQBagLgeBhQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgHgCg");
	this.shape_22.setTransform(40.4313,-4.6305);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(8,4,4,0.071)").s().p("AgpgMQBygygpBRQgEAIgUADIgNACQgpAAAFgsg");
	this.shape_23.setTransform(51.21,-41.7427);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(15,8,8,0.129)").s().p("AAGAgQgogGgJgoQB6gxgxBZQgDAGgLAAIgKAAg");
	this.shape_24.setTransform(4.4108,-4.4714);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(6,2,2,0.051)").s().p("AhJAAQAxg8BQATIAKABQAnBViKACIgBAAQgqAAADgvg");
	this.shape_25.setTransform(5.4175,-55.9124);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(6,3,3,0.051)").s().p("AjHDMQB0gxgqBRQgEAIgUACIgJAAQgqAAABgqgAAwjKQgIgIAAgPQBZgtBFA6QACACAAAFQglAygmAAQgmAAgngvg");
	this.shape_26.setTransform(26.9979,-48.3632);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(5,1,1,0.035)").s().p("AgyAiQAAgFgCgBQgagLAIgqQAxgfA8AUQAFABAFAAQAFAAABACQAwBOhQAAQgcAAgtgLg");
	this.shape_27.setTransform(21.1231,-109.4404);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(4,1,1,0.035)").s().p("ABAA/QgOgcgKgeQgFAAgDgCQgtglg4geICBAAIAKAAIAAB3IAAAKQgFAAgBgCg");
	this.shape_28.setTransform(85,-132.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_wallClimb_color, new cjs.Rectangle(-93.5,-139,185.5,277.8), null);


(lib.icon_show_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(29,29,29,0.392)").s().p("Ag0gFIBdAAIAMAAQAAAFgCAAQgbAGgWAAQgfAAgXgLg");
	this.shape.setTransform(-14.275,6.5382);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(52,52,52,0.698)").s().p("Ag6gFIBpAAIAMAAQAAAFgCAAQgdAGgYAAQgjAAgbgLg");
	this.shape_1.setTransform(-14.875,-22.7409);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(35,35,35,0.475)").s().p("AhdgFICvAAIAMAAQAAAFgBAAQgtAGgnAAQg3AAgvgLg");
	this.shape_2.setTransform(-14.875,-26.2496);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(32,32,32,0.435)").s().p("AAvAGIhoAAIAAgLQA5AAA6AFIABAGIgMAAg");
	this.shape_3.setTransform(-13.7,-85.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.922)").s().p("AiOCiQgDgDgGAAIAAgMIAAgjQBDgvBFgLQAEgBgDgXQgViYA6hGQBJBKA2BcQACAEAAAGQgXAugrhsQgEgJgNgJQgLgIgLgGQgmAJARB3QAPBngdAxQgnAXgkAAQgqAAglgfg");
	this.shape_4.setTransform(-82.775,-71.9852);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(75,75,75,0.976)").s().p("AA0BMIhpAAQAAgGgBAAQh0gdgXh0IAXAAIAMAAQCVAVCxgQIABgFIAZAHQAFBiiIAiIAAAMIgLAAg");
	this.shape_5.setTransform(-14.1911,156.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(55,55,55,0.737)").s().p("AijgFIE7AAIAMAAIgBAFQhLAGhGAAQhfAAhWgLg");
	this.shape_6.setTransform(-13.7,149.3919);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(25,25,25,0.988)").s().p("AjLKaQgBAAAAgGQgoiCAFi6QAMoCAAoDQDYBuDkhgQAFgCAGAAQAdKVgoKUQgBAGgLAGQhlAahtAAQhfAAhngUg");
	this.shape_7.setTransform(-14.293,75.7299);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.486)").s().p("AAACMQgFiMAAiLIALAAIAAEMIAAAMIgGgBg");
	this.shape_8.setTransform(91.075,-36.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.914)").s().p("ALoKJQgGAAgEgDQhcg7BmgrIAXAAQASAAAFgIQA1hXgRiXIgMAAIjfAAIABALQAICngUCKQAAAGgDABQh+BKgvh0QBEggA+grQALgHAAgYIAAjeQCygJCRAlQAEABAAASIgLAAQAACMAGCMIAFABIgBALQgQA9hOAAQgPAAgSgCgAtmk2IgBgMQBEgfA9grQALgIAAgXIAAjfQCfAACdAGIABAGIADFUQAAAmgngDQiIArAHhmIABgMQA5gYBGgQQABgBAAgFIAAjTIAAgMIjeAAIgMAAQAeDlhRB4QgBACgGAAQgWAEgSAAQhLAAgNg+g");
	this.shape_9.setTransform(4.425,-80.0055);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(75,75,75,0.984)").s().p("AAoDHIhcAAIgMgBQhwgWhXgvQAAgGgDgCQiVhigjjRQCgBJDWATIAMABQAsAUBHgNQABgBAAgGQDwgGCUhgQAEgDAGAAQAIB4hLBcQgDAEAAAFQgvAqgsArQgDADAAAGQhaA+iEATIgMABIgMAAg");
	this.shape_10.setTransform(-14.2367,-13.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(73,73,73,0.961)").s().p("ABMElIiuAAQhsgDhTgMQidgYgQiVQBDlKFMhBQAFgCAHAAIBoAAIAMAAQDOAiBmCLQACADAGAAQBPBsADC4IAAALQiYBTjTAWIgMABIgMAAg");
	this.shape_11.setTransform(-14.3,-56.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.918)").s().p("AjkCLQgBgGAAgGQBEgfA9grQALgIAAgXIAAjeIEwAAIAMAAQAJDkgRCTQgDASgZgHQiQAtAVhyQAAgBAGAAQAvgeBFgLQABAAAAgGIAAjSIAAgMIjdAAIgMAAQAeDkhRB4QgBADgGAAQgVADgSAAQhMAAgNg+g");
	this.shape_12.setTransform(32.7171,-115.6545);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.902)").s().p("AiXB1QBEggA9grQALgHAAgYIAAjGIAiAAIAMAAQAAAGADACQBQA9AiBrIAAAQQgShEhAgqIgMgGQgXCAgMCHQAAAGgCABQgwAdglAAQg7AAgchHg");
	this.shape_13.setTransform(-1.975,-146.2127);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.89)").s().p("AiXBvQBRgjAxgdQAKgGgDgXQgUiSA5hAIB5CKQACADAGAAIAAA5IAAAMIgGgBQgNhghKgfIgMgGQgDCUgVB+QgFAAgEADQgsAggjAAQg4AAgehSg");
	this.shape_14.setTransform(83.475,-98.879);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_show_color, new cjs.Rectangle(-98,-165,196.7,329), null);


(lib.icon_sea_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AQRBjQiGgSgVgCQgwgEg8ABIhtAEQk0AMi+gMQgNgBgKgHQgLgHAEgJQhDgCgcgCQg1gDgpgIIgngHQgYgGgOgCQgegEgmgCIhDgDIm4gIQgTgBgJgBQgQgDgKgGQgMgIgDgQQgEgPAKgKQiSgHhJAAQh6AAhgAPQgWADgHgJQgIgJAJgMQAHgLANgGQAggOArgEQAbgDA0AAIIkAGQAcABAHAMQAIANgOAOQgNAMgSABIgiABQgUACgJAKIKvgCQAeAAAMAIQAKAFAEALQAEALgGAIQCeAWDcgBQB+AAD8gHQBSgBAsAMQATAGAlAPQAiAMAYgCIAVgCQANgCAIACQAMACAHAIQAIAJgCAKQgFASggACIgcABQg1AAhKgKg");
	this.shape.setTransform(-53.146,71.0597);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.514)").s().p("AA2AHIh5AAIAAgNQBDAABDAGIABAHIgOAAg");
	this.shape_1.setTransform(-46.025,100.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.451)").s().p("ABYAHIi8AAIAAgNIC8AAIANAAIAAANIgNAAg");
	this.shape_2.setTransform(30.45,100.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.031)").s().p("AN+BLI8IAAIAAgOQOigkNmhiIANgBIAAAOIAACHIgNAAg");
	this.shape_3.setTransform(131.3,93.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FD").s().p("Ax3M8QnBgqldiKQCIipB2i5QADgFAAgHQInqTNllXQIjjYLvBLQDGAUCxBFQCfA/CQBVQB+BwBlCGQADAFABAHQkykpowAsQh6AKhYA/QgeAVgtAKQhPBMhJBTQgDADgHAAQjVD/BgFtQAeB0A8BZQDPD2FcBoQAGACAHAAQpQA5pNAAQo3AAo2g1gAGFMPQAUABCHASQBeANA9gEQAggCAEgRQADgKgIgJQgHgJgMgCQgIgBgNABIgVADQgYABgigLQglgPgUgGQgrgNhSABQj8AHh/ABQjaABiegWQAGgJgEgMQgFgKgJgGQgMgHgeAAIqwABQAJgKATgCIAjAAQARgBANgNQAPgNgIgOQgHgMgdgBIojgFQg0gBgbADQgsAEggAPQgNAGgGALQgJAMAIAJQAGAIAXgDQBggOB6AAQBJAACSAHQgKAJAEAQQADAPAMAIQAKAIAPACQAKACATAAIG3AJIBEACQAmACAdAFQAPACAYAFIAmAIQAqAHA2ADQAcACBDACQgEAKALAHQAKAGANABQC+AMEzgMIBtgDIAXgBQAuAAAnAEg");
	this.shape_4.setTransform(-3.4,0.7296);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,2,0.984)").s().p("AC+PxIpFAAIgBgIQhEgGhDAAIgOAAQu5gVrVj6IAAgNQDxi6CUkUQADgFAAgHQImqVNSliQGYipH7g8IF7AAIANAAIAAAHQIJAuFMDnQAAAGADADQE0DkCIGPQAAAHACAFQAZA7hEAXIgdgHQjtkFlSixQh8hBilADQo/APh0HsQgIEPB+CKQAEAEAAAGQGtG1ONh5QCYgUA1A4IAABEIAAANIgNABQtmBjujAkIgOAAIi9AAIAAAOIgNAAgAkqrHQtlFWonKUQAAAHgDAEQh2C6iICpQFdCJHBArQSDBtSHhyQgHAAgGgCQlchojPj2Qg8hYgeh0QhgltDVj/QAHAAADgEQBJhSBPhNQAtgJAegWQBYg/B6gJQIwgsEyEoQgBgGgDgFQhliHh+hvQiQhVifg/QixhFjGgUQjDgUi1AAQoFAAmVChg");
	this.shape_5.setTransform(0,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_sea_color, new cjs.Rectangle(-222,-101,444,201.7), null);


(lib.icon_restaurant_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.659)").s().p("AgegDQAeAAAfADIAAACIgGABIgTABQgWAAgOgHg");
	this.shape.setTransform(-106.95,96.2302);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(15,5,0,0.42)").s().p("AAGA6IACAAIAAACIgCgCgAgEg7QAKAxgBBAQgRgqAIhHg");
	this.shape_1.setTransform(-143.1584,70.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.035)").s().p("AgkAaQAjgBAMgNQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAPhGAJA7IAAAFQgBARgBABQgKANgXAAQgPAAgXgGg");
	this.shape_2.setTransform(-55.975,25.499);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.039)").s().p("AgWgGIASAAIAFAAQASAAAEALIgDAAIgGABQgIABgGAAQgTAAgDgNg");
	this.shape_3.setTransform(-48.025,28.1907);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.58)").s().p("AhKAFIAHAAIAGAAQA3AQAQgVQABgCABgQIAHAAQAPAJAcAAIAAADIgGAAIAAAGIgGAAIgTAAQAFATAhgHIAGAAIgBADQggAEgcAAQgyAAgmgOg");
	this.shape_4.setTransform(-53.475,27.5149);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.588)").s().p("AgxgCIBdAAIAGAAIAAACQgyADgxAAIAAgFg");
	this.shape_5.setTransform(-67.175,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.725)").s().p("AgVAMIgGAAIgGAAIAAgGQAagKAigEIABgDQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgMAMgjABIgGAAg");
	this.shape_6.setTransform(-58.125,26.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.631)").s().p("AgNBWQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIAAgGQAWg/gPhJIAAgGQATg6ABBMIADAAQgEBFAKA3IABAGIgHAAIAAgGQgJg7gOBHQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_7.setTransform(-53.475,17.1744);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(104,28,28,0.984)").s().p("AAGBIIgRAAQgBAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgmgrgBhOQA9AOAtggQACgCADABQAABZgnAzQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABgBAAIgGAAg");
	this.shape_8.setTransform(-53.4747,-0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.498)").s().p("AgCgWIAFAAIAAAGIAAAGQgCAhgBAAQgBAAgBgtg");
	this.shape_9.setTransform(-61.25,-21.8139);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.78)").s().p("AAJC7QgBhNgTA6IAAgGIAAgfIARAAIAGAAIAAAxIAAAHgABEinIAAgGIiHAAIgHAAIAAgGIAAgHICOAAIAHAAIAABkIAAAGQgLgjAEg0g");
	this.shape_10.setTransform(-53.475,-6.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9F7050").s().p("AgCATIAAgrQAKASgIAeQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIAAgGg");
	this.shape_11.setTransform(92.3438,164.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#634632").s().p("Ag9gCIB1AAIAGAAIAAACQg+ADg9AAIAAgFg");
	this.shape_12.setTransform(77.725,175.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.569)").s().p("AHGADIuRAAIAAgFIORAAIAGAAIAAAFIgGAAg");
	this.shape_13.setTransform(19.9,178.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#885F44").s().p("ADgADInFAAIAAgFIHFAAIAGAAIAAAFIgGAAg");
	this.shape_14.setTransform(48.5,175.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BB835D").s().p("ADfADInEAAIAAgFIHEAAIAHAAIAAAFIgHAAg");
	this.shape_15.setTransform(2.5,175.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B9815D").s().p("AGEAFIxYAAIAAgFQItAAIrgEQCwgBCgAKIlQAAg");
	this.shape_16.setTransform(0.3,32.5458);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.408)").s().p("AAABXQgChXAAhWIAFAAIAACmIAAAHg");
	this.shape_17.setTransform(14,8.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.624)").s().p("AgDAyIAAhpIAGAAIAAAGQAEA8gKAtIAAgGg");
	this.shape_18.setTransform(37.6903,21.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.576)").s().p("AgYgDQAYAAAYADIABACIgGABIgPABQgSAAgKgHg");
	this.shape_19.setTransform(70.275,29.0802);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.608)").s().p("AGlDiIAGAAQA2ALBGgEIAGAAIAAADQgeAEgaAAQguAAgigOgAmiieIAAglQAPAqgPAEgAorjpIAAgGQALAbgEApIAAAHQgLgbAEgqg");
	this.shape_20.setTransform(-5.3653,5.4399);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.6)").s().p("AGXgGIAHAAQA8AKBMgEIAGAAIAAADQggAEgcAAQgzAAgmgNgAorAAQEnAAEmgDIAAgDQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIACAEQiYAFiVAAQiVAAiRgFg");
	this.shape_21.setTransform(10.9,28.7399);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.741)").s().p("AgbAMIgGAAIAAgGQAggHAdgKIAGAAIAAAGQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgPALgmACIgGAAg");
	this.shape_22.setTransform(54.425,26.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.055)").s().p("AhIAkQAngCAPgMQABAAAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQAPgWAAgnIACAAIAAAfIAAAGQAKAwA0gFIAHgBQADADAAAEIgDAAIgHAAIgqABQgyAAgrgIg");
	this.shape_23.setTransform(59.55,24.4153);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.647)").s().p("AgKBRIABgGQALhNgMhOQAagcgHBbQgBAUAAAWIgDAAQgBAogOAWIAAgGg");
	this.shape_24.setTransform(58.9221,17.4601);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.729)").s().p("AgkgSQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAMAnA3AAIAAADIgGAAIAAAGIgGABIgKAAQgqAAgJgrg");
	this.shape_25.setTransform(63.425,25.6275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(4,1,1,0.8)").s().p("AAABaIAAgfQAAgWABgVQAIhagaAcIAAgGQAAgRgHgIQAfANAOgeQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIgBAGQgEANgOAFIAACbIAAAGQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIAAgGg");
	this.shape_26.setTransform(59.7,14.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(15,5,0,0.431)").s().p("AACg9IADAAQAAAWABAVQAHBGgUAKQAKg2gBhFg");
	this.shape_27.setTransform(143.1782,69.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(17,6,0,0.424)").s().p("AgDAVIAAgwIAGAAIAAAGQAEAfgKASIAAgHg");
	this.shape_28.setTransform(154.5903,55.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEB27F").s().p("AtpKxQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgYgVgMgfIAAgGIAAhKQAxn8AfoGQAIh7AqhSQAPgcAjgJIRYAAIFQAAQBdAvAGCRQAEB9ANCDIBNNGIAAAsIAAAGIgBAGQgLAhgTAXQgBAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgQAOgdADIgGAAIh3AAIgFAAInHAAIgGAAInFAAIAAAGQjXAAjVAHIgjABQhyAAhSgbg");
	this.shape_29.setTransform(0.95,104.6289);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.627)").s().p("AgkgCIBDAAIAGAAIAAACQglADgkAAIAAgFg");
	this.shape_30.setTransform(107.575,96.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.424)").s().p("APvADIhjAAIAAgFQA1AAA0ACIAAADIgGAAgAuRADIhjAAIAAgFQA0AAA1ACIAAADIgGAAg");
	this.shape_31.setTransform(0,72.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.612)").s().p("AgCAWIAAgHIAAgqQAJAUgHAjIgCAAIAAgGg");
	this.shape_32.setTransform(65.6063,-10.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(16,4,4,0.827)").s().p("AAAAPQADgWgJgIIAAgGIAGAAIAFAAIAAAGIABAGQAEAXgKAIIAAgHg");
	this.shape_33.setTransform(64.7533,-6.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(106,29,29,0.98)").s().p("AgSBGQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAgBQgbgkgHg3IAAgGIAAgGQAWAAAWgDIAAgDIAAgGQAmgCATgWQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQALAIgEAXIgBAGIAAAGQgDAxgVAfQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgLAVgRAAQgIAAgJgDg");
	this.shape_34.setTransform(59.1302,-0.6662);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(20,5,5,0.761)").s().p("AgVASQgDgSAAgSQAGAZAlgHIAGAAIgBADQgVADgVABIAAAFIAAAGIgDAAg");
	this.shape_35.setTransform(55.35,-4.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.596)").s().p("AgCgkIAAgHQAKAhgFAvIAAAHQgKgiAFgug");
	this.shape_36.setTransform(51.925,-15.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.757)").s().p("ABIgkIAAgGQhWgJg2AbIgCABQgLgCAFgXQBDgLBRAFIAGAAIAABpIAAAGQgLgnAFg2g");
	this.shape_37.setTransform(58.7075,-19.2653);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(1,0,0,0.537)").s().p("AgDAWIAAgxIAFAAIABAGQAEAfgKASIAAgGg");
	this.shape_38.setTransform(21.5302,-41.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#601A1A").s().p("AgRAVQAEgngJA6QgGAigGgWIAAgGIAAiOIAAgGIA9AAIAGAAQAFBwgFBWQAAAGgMAAIgHABQgoAAAJhSg");
	this.shape_39.setTransform(25.9316,-38.1276);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6F1E1E").s().p("AAWAoIgHAAQgggGgXADIAAgEQgKgXAEgmIAAgGQBKgQARApIABAGIACANIAAAMQgEASgWAAIAAAAg");
	this.shape_40.setTransform(25.8323,-53.6094);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(26,9,1,0.988)").s().p("AkKTiIo2AAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgdgIgUgOQAAgDgCgCQgNgOgQgMQAAgGgDgEQgJgKABgLQgEkwAhkyIgGAAIopAAIAAAHQgmF3h7EiIgGABQg4AfgggzIAAgGIAAgfQBAigAmi3QBknkgwojQgtoEhtm/IAAgGIAAgsQAhgwA2AcQADACAEAAQBwG7AyH8QASC2AADLQgJBIASArIAAADIABAAIACADIAAgDQC4giDcADIAHAAIBjAAIAGAAQBKAFgMheIgDgqQgFiwBGhnQAagPAfgJIAFgBQAyAAAygDIAAgDQADAAACgBQACgCgBgDIAHAAQA7AVBZgMIABgDIADAAQgEgMgSAAIAAgHIAGAAQASABAGAMQABADABADQEiALExgLIgCgFQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAgGIAAhkIAAgGIAAioIAAgGIAAhkQAzh4ARiZIAAgGQALgSgEggIAAgGIgBgGQgOg3gEhAQAoghBCAUIAGABIgEA0IgDgPIgBgGQgQgphMAQIAAAGQgEAnALAXIAAAEQAWgDAiAGIAGAAQAXAAADgSQgGCbAuCLQAyCYgQDhIgHAAIAABpIAAAGIAAAHIAAAGIgGAAQA1AVBTgMIAAgDQAEAAABgBQACgCAAgDIAGAAQA8AVBZgMIAAgDIAEAAQAAgDgEgDIAAgGIAGAAIAGAHQABACAAADQAOALAegEIAFgBQAkAGAWASQACABACAAQBDBgAACeQgBBdAlA5QAEAGAMAAIBjAAIAGAAQDggGC1AkIAGABQAUgLgGhGQgBgWgBgWIAAgGIAAiBQAjoKBVnPQAXh4AthZQAFgMATgBQAygDAIAoQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAYIAAAHQgOAmgKAvQheHLgrIBIAABpIAAAHIgHAAIAAAwIAAAHQgOI5CFGpQAVBFAcA+IAAAZIAAAGIgDABQgEAXgRAIQgPAIgXgDIgNgCQgRgGgGgRQh0kngvlsIgGAAQkUgEkDALQAJBjAMBjQAKBkASBoQAUCDgtBlQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgLALgJANIgGABQhfAmiUgOIgGAAIuRAAIAAAGIgGAAgAGHjcQorADotAAIAAAHQgiAIgPAdQgrBRgIB7QgeIHgyH7IAABLIAAAGQANAfAXAUQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQBfAeCIgEQDWgHDXAAIHEAAIAHAAIHGAAIAGAAQA+AAA/gEIAAgDQAcgCARgPQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAUgYALghIABgFQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAIgggKgRIhOtIQgNiDgEh7QgFiSheguQiSgKigAAIgeAAgA2iGIQAFAqgLAaQgLBQBegPQA5gJA7AAIFiAAQAMgkABgtIAAgGQhDgLhSAFIgHAAIAAgDQgegDggAAIgGAAQi3AAiZgfIAAAGgAWpIEQgJg5ADhDIAAgGQiUAdiwACIgGAAIgGAAIhEAAIAAAGIgHAAIiJAAQAGAoABAvIAAAGIIdAAIAGAAIAAAAgADxuFQgJBYAwgHQAMAAABgGQAEhWgFhxIgGAAIg+AAIAAAGIAACPIAAAGQAGAWAHgiIAFgjIgBAQg");
	this.shape_41.setTransform(0,54.1609);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8F800").s().p("AiBgUIAAgGID9AAIAHAAQgWAcgjALQguAOglAAQhIAAgwgvg");
	this.shape_42.setTransform(1.25,-69.3368);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DBDB00").s().p("AiCAFQgEgEgDgFQCSgFCBAKIgDAAIgGAAIj+AAIAAAGQgDAAgCgCg");
	this.shape_43.setTransform(0.775,-72.1281);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.992)").s().p("AiCIaQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgYgRgMgdQhUAAhTAKQhrAMgYg7QBWlUDZjQQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQA0ggBDgRIAGAAIAAmhIAAgGIBPAAIAHAAIAAAGIAAGhIAGABQCMAtBOBsQAAADABACQCQDJAvELIAAADQiHAOiXgFQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgcAXgUAdIgGABQg+Aeg9AAQhCAAhCglgAiIHoQADAGAFAFQABABAEAAQBLBLCAgpQAkgLAVgdIADAAQhZgHhgAAQgtAAguABg");
	this.shape_44.setTransform(0.625,-121.4636);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_restaurant_color, new cjs.Rectangle(-171,-179,342,358.2), null);


(lib.icon_pub_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(25,25,25,0.965)").s().p("ACYBQIldAAIAAgFQgqACgHgbQBmhNCAgzQAEgBAGAAQAUAkANgjQABgBAFAAQCjAyA0BjIgQgBQgvgHgXASIgKAAg");
	this.shape.setTransform(41.75,113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(207,0,0,0.984)").s().p("AgFDVQiNjUiFjXQCdAhCCA9QACABAAAFQCvAABYhXQACgDAFAAQAAAFgDAEQiJDNiMDNQgEAAgBgCg");
	this.shape_1.setTransform(43,39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(4,0,0,0.863)").s().p("AgTIEIAAgKQARi3gHjPQAAgFgCgEQjQkxjSkxIAAgKIAAgUQGtAAGtAPIABAPQgFAAgCACQjIE2jVEpQgIDUARC8IABAKQgFAAAAABQgHARgIAAQgIAAgLgSgAkZlpQACADAAAFQCFDYCNDSQABADAEAAQCMjMCJjPQADgDAAgFQAAgFADgEQAvhHAyhGIAAgFQl8gFl7AAQAoBQA6A+g");
	this.shape_2.setTransform(43,53.4316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_pub_color, new cjs.Rectangle(0,0,86,121), null);


(lib.icon_park_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(53,21,0,0.431)").s().p("AgEFKIAAgKIAAqJIAJAAIAAKJIAAAKIgJAAg");
	this.shape.setTransform(-20.5,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F3300").s().p("AhoGVIAAq7IAAgKQBFgpAwg9QACgDAAgFQAeAuA6ASQACABAAAFIAAKJIAAAKQAAAFgCABQhvAohgA2IAAgKg");
	this.shape_1.setTransform(-31.5,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,126,0,0.984)").s().p("AE7F/IiCAAIAAgFQmtgiigktIAAgKIAAhPQBUhvB/hDQAEgCAFAAQBgg2BvgoQACgBAAgFIAKAAQAFAAAEgCQCjhUDGAuQgFAAgEACQkKB2h9EDQAgDgCwBPQA+AbAyAoIgKAAg");
	this.shape_2.setTransform(-23.5,92.6862);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E3300").s().p("ABMEWQhMghhUgZIAAgKIAAmFIAAgKQA/gbAeg9QABgCAFAAQATApAyANQABABAAAFIAAHpIAAAKQgFAAgEgCg");
	this.shape_3.setTransform(48.5,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,127,0,0.992)").s().p("Ai0PrQgugZgtgWQinhSgkjLQBxjaDHhNQANgFAPAAQBVAZBLAhQAEACAFAAQAFAAAFABQEBBjglEsQgFAAgBACQh1C0jsA6QgjgogzgcgAoWjkQBlgsATh+IAAgKQEKgsBYjhQABgBAFAAQAJjRhhhoQgCgCAAgFQCQh2C/BMQCsBEgcDgQChAnAiCqQAAABAFAAIAABQIAAAKQgFAAAAABQgqDEjVAXQgFAAAAABQgUByhVAtIgKABQg8AQg8gRQAAgFgBgBQgxgOgTgoQgFAAgBACQgfA9g/AbIAAAKIgJABQhBAQg3AAQjKAAhFjZg");
	this.shape_4.setTransform(53.5,18.9325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,127,0,0.996)").s().p("AnDJEQiQh+A7juQgFAAgEgCQiPhCgwihIAAgKIAAhkQAiiDBYhNQADgCAFAAQAjk3FjALIAKAAQBNAhBBAsQADADAFAAQBBhLBxgeQABAAAAgFIBuAAIAKAAQAAAFABAAQEoBDgbFSQCBAkA7BpQAWAnAGAqQA2F+loAjQAAAFgBAEQgLArgIAwQgFAAgBACQgtBNhZAfIgKAAQhCAGgsgQIgKAAQAAgFgBgBQg7gTgegtQAAAFgCADQgwA9hFApIAAAKQhSAchJAAQh9AAhfhUg");
	this.shape_5.setTransform(-34.3478,-64.5966);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_park_color, new cjs.Rectangle(-108,-131,215,262), null);


(lib.icon_iceSkating_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#383838","#4D4D4D","#6A6A6A"],[0,0.471,1],-168.2,0,168.2,0).s().p("A6NCMIARAAQD+gnDqg8QAIgCAIAAIAAgQIAAj7QAIAAAFAEQAEAEAAAIQBfAGBKAZQAHADAJAAIAQAAIAADJIAAAQIAzAAIARAAIAhAAIARAAQBDAABCAJQABAAAAAIICHAAIARAAIKOAAIARAAIB1AAIARAAQBMAABKAJQABAAAAAIIE/AAIARAAQBtgagoivQgCgIAAgIIC5AAIARAAIAAC3IAAARQCmgKCZgWIARgBQBMgQA8geQAHgEAIAAQBMhtBLgIIAHANQACADAIAAIAAB2IAAAQQgIAAAAABQgdCsikAcIAAARIgRAAIh2AAIgRAAIptAAIgRAAIm1AAIgRAAIgyAAIgRAAIlPAAIgRAAIqgAAIgQAAIrCAAQgIAAgIACQgTADgPAAQhHAAAUhZg");
	this.shape.setTransform(-0.2174,103.594);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,23,0.808)").s().p("AAACwQgHiwAAivIAPAAIAAFPIAAAQg");
	this.shape_1.setTransform(-157.075,22.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,13,0.722)").s().p("AhkgJQBkAABkAIIABAHIgRABQggADgdAAQhIAAgzgTg");
	this.shape_2.setTransform(-77.275,86.7383);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,26,0.78)").s().p("AgKAzIAAh1IAQAAIABARQALBOgcAmIAAgQg");
	this.shape_3.setTransform(-155.1987,-3.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,14,0.694)").s().p("AgHBUIAAi4QAcBQgVB4QAAABgHAAIAAgRg");
	this.shape_4.setTransform(-148.6505,-62.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,13,0.69)").s().p("Am0gJQG0AAG1AIIAAAIIgRAAQiGADiCAAQkyAAkegTg");
	this.shape_5.setTransform(-6.725,88.386);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,124,0.992)").s().p("AO9QzIi5AAIgQAAIm1AAIAAgIQm0gJm1AAIgRAAIiXAAIAAgIQhlgIhkAAIgRAAIgzAAIgQAAQgJAAgHgDQhKgahfgFQAAgIgEgFQgFgEgIAAQgIAAgHgDQhagrhhgmQAAgIgEgEQhLhEhIhHQAAgIgDgHQglg/gKhaIAAgRIAAlQIAAgRQAdgmgLhPIgBgRIAAgRIAAgyQApiXAJi4IAAgRQAIAAABgBQAUh5gdhQIAAgQIAAkNQHdgKGDh6QAKgDgCghQgDhQBIgEIAyAAIARAAQAAAIACAIQA8DPBIDFQgIAAgHADQiyBIifBdQBAB1CGhkQB8hdBiAqQAtBdgpAeQgEADAAAJQivA8hrCAQgEAFAAAIQDEgGCgh8QAFgEAJAAQAqBtBHBPQAEAFAAAIQidBPhrB9QgFAFAAAJQDIgCCNiQQAEgEAIAAQBrArBwAlQAHADAIAAQiMBvhVCdIAIAAQCQgPB3h8QApgrAfg1QB1ArCXAQQABAAAAAIQiDCCgDCtIgBARQCVhxBTivQAEgGAAgJQH0AVFFDCQAGAEAJAAQAlA3AkA6QACAEAJAAQA2Dyh1CUQgFAFAAAIQi1C0l1gDIAAAIIgRAAg");
	this.shape_6.setTransform(5.0526,-18.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_iceSkating_color, new cjs.Rectangle(-168.4,-126,336.4,252.6), null);


(lib.icon_house_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(78,78,78,0.522)").s().p("AgGGTIAAgMIAAsaIAMAAIAAMaIAAAMIgMAAg");
	this.shape.setTransform(-55.15,100.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(29,29,29,0.204)").s().p("AAALfQgGrfABreIALAAIAAWwIAAANg");
	this.shape_1.setTransform(-104.6,43.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(61,61,61,0.412)").s().p("AgHGTIAAgMIAAsaQAWF+gKGcIAAAMIgMAAg");
	this.shape_2.setTransform(3.5515,100.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(152,152,152,0.996)").s().p("ANHNUIsaAAIAAgMQAKmdgWl+QACgigZgMQhBghh2gFQjygLh8BTIAAAMIgNAAIAAMbIAAAMIgNAAIkRAAQAAgGgBgBQizgigQjBIAAgNIAA2wMAgHAAAIAOAAIAAAMIAAXyQgHAAgBACQgrB8iDAfIAAAMIgOAAg");
	this.shape_3.setTransform(-0.5,55.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(127,0,0,0.992)").s().p("AQXIuIgMAAIgOAAMggHAAAIgMAAIgOAAIlfAAIAAgNQKSn7KOn7QA0gpApgyIANAAQKJIDKMH/IBoBPQh1AQiGAAQg3AAg7gDg");
	this.shape_4.setTransform(-0.5,-85.8862);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_house_color, new cjs.Rectangle(-141.7,-142,282.4,282.4), null);


(lib.icon_horses_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(43,17,0,0.996)").s().p("AAAA5QgFgtAAgtIAAgMIAAgLIALAAIAABmIAAALIgGAAg");
	this.shape.setTransform(-129.275,16.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(10,4,0,0.906)").s().p("AosBvQAAgGgBgFQgWhRgXhPIAAgMIAAhyIALAAQABAuAFAtIAGAAQAGBmAaBSQACAFAAAGQA+BABtAWQABAAAAAGQCfgYBwhHIgLAJQhvBdhxAAQhtAAhuhYgAAhgZQASgYAkgFQEXgqDWhmIAMAAIALAAQgdAdgqALQkDBHj7BMIALgOg");
	this.shape_1.setTransform(-70.7,31.3384);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(11,4,0,0.941)").s().p("AA5AoQgFAAgEgDQg7glg5gnIAMAAQBBAfA5ApQADACAAAFIgMAAg");
	this.shape_2.setTransform(-41.425,-122.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(10,3,0,0.902)").s().p("AmdLqIAAgLIAAgLQELl6CznMQABgGAAgGQCqhXClheQAEgCAGAAQh6imgbkDIAAgLIALAAQBQA+BaA5QACABAAAGIgLAAQgGAAgEgDQhBgrg/guIgFAAQANEACNCHQABAFgDACQjIBkixB6QAAAGgBAFQivHHkDFzIgMAAg");
	this.shape_3.setTransform(-88.5,-64.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.082)").s().p("ABPAhQAdkbhSi9QhSi/htiiQELD6A2G6QAdDog+CuQhiEZiyDNQC4kjAwnUg");
	this.shape_4.setTransform(45.1513,32.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(12,4,0,0.929)").s().p("AjlJKIgLAAIAAgMQFZmKBwpzIABgMQgwB9hRBbQgDADgFAAIgMAAIgLAAQBFg/AghbQAkhpAuhWIAAAMQhPLTl7GoIAAAMIgMAAg");
	this.shape_5.setTransform(-18.475,35.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(13,5,0,0.949)").s().p("ABqDFQAoivgkitQhRmNjfkIQgigogOg8QFfEiB0IFQAlCjgnClQhoG2kkD8QC2kmBhmmgABLmPQBSC9gdEbQgwHUi5EjQCyjNBjkZQA9iugcjoQg2m6kLj6QBtCiBSC/g");
	this.shape_6.setTransform(40.3257,28.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(14,5,0,0.965)").s().p("ACyBiQgGAAgEgCQi+hVinhsIAMAAQCxBiC7BaQACABAAAGIgLAAg");
	this.shape_7.setTransform(-16.75,-108.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(22,8,0,0.929)").s().p("AAoAWQg2gMglggIAMAAQA1ADAdAbQADADAGABIAAALQgGAAgGgBg");
	this.shape_8.setTransform(6.225,-96.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A84300").s().p("AprRtQB3hSBghoQADgDAAgGIAAgMQF8mnBOrUIAAgLQguBWgjBoQggBahFA/QjXBmkWAqQgkAFgSAYIgLAOIgcAIQgsA4g2AuQhwBGieAYQAAgGgBAAQhtgWg+hAQAAgGgCgFQgahSgGhnIAAgLIAAhnQEDlzCvnIQACgFAAgGQCxh6DIhkQACgCAAgFQiNiHgOkAIAGAAQA/AuBBArQAEADAGAAQA5AoA7AmQAEACAGAAQCmBtC+BVQAFACAFAAQAlAgA3AMQAGACAGAAQAXAWAjAKQAFACAGAAQAmA1AzAqQACADAAAFQDhD8C4EoQGJJ3DRMzQnlCYppAPIg2ABQnlAAkIjigADRoWQDgEIBRGLQAkCvgoCuQhhGni3EmQElj8Bom2QAnilglikQh0oElgkiQAOA8AiAog");
	this.shape_9.setTransform(-0.075,0.3087);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(14,5,0,0.929)").s().p("AAMRJIkIAAIAAgGQnmgHjtj7QB8hIBchnQACgDAAgGIALAAIAMAAQAAAGgDADQhgBoh3BSQEXDuINgNQJogPHliYQjQszmKp3Qi4kojgj8IAMAAQHiIiEwLWQCMFNBfF9IAAAMIAAALIgLACQmoCDoGAnIAAAMIgLAAg");
	this.shape_10.setTransform(33.2,29.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(3,1,0,0.906)").s().p("ABKBKQAAgFgCgDQgzgpglg0QgGAAgFgDQgjgKgXgWIAAgLQAtARAlAZQADAEAGAAQAoAsAmAwQACAEAAAFIgMAAg");
	this.shape_11.setTransform(20,-87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_horses_color, new cjs.Rectangle(-131,-139,261.8,277.9), null);


(lib.icon_escapeRoom_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(250,100,0,0.98)").s().p("AIUO8IgvAAQAAgIgEgEQirjkh7kUQAAgIgBAAQi/gpiXACQgHAAgDADQhcCZhkCNQivBEisBWQjKBlichyIAAgPIAAg/QDyiVEyhTQAIgDAIAAQDmmjCToBQAvinAsi2Ql4AmjIDXQhQBXh9gbQgzg/AghPQADgHAAgIQDpiVDoiZQAEgCABgIQJ3iMEYGSQACAEAIAAQCzitEIhIQAdgIAQAgQAEAJAJAIIAAAvIAAAQQgIAAgFAEQjgDVknCOQgIAAgFgDQiIh6iFh9QAAAIgCAHQiCGYiVGFQBCBbCYgFQBLgDAjAbQDYEVBWGBQADAKgWASQgRAOgQAPIgPAAg");
	this.shape.setTransform(0,40.4169);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(251,100,0,0.988)").s().p("ABOGHIi7AAQAAgIgCAAQjMhLhLjHIAAgPIAAirQA+jrDphFQACgBAAgIICrAAIAQAAQgBAIADABQDbBLBMDVIAAAQIAACrQgIAAgBACQhFDhjbBGIgQAAg");
	this.shape_1.setTransform(32.85,-96.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_escapeRoom_color, new cjs.Rectangle(-106.3,-136,212.7,272.1), null);


(lib.icon_cooking_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#383838","#4D4D4D","#6A6A6A"],[0,0.471,1],-117.2,0,117.2,0).s().p("AyGCSIgHAAQgGhQAAhQQDih0FRgEIAOgBIAAgNIBeAAIANAAICGAAIAOAAIAAgNIC7AAIAOAAID+AAIANAAQBlAABkAGIABAHQDSAEDAAWIAOABQEEABCYBvQAEACAAAHQAnCfh4ABIgNAAIgOAAInjAAIgNAAIvTAAIgNAAQhxAChvAAQkCAAjzgQg");
	this.shape.setTransform(3.1783,-34.1507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#383838","#4D4D4D","#6A6A6A"],[0,0.471,1],-117,0,117,0).s().p("AN1MZIwjAAIgNAAIq6AAQAAgHgBAAQjJghg1ivIgHAAQgdmPAJmwIAAgNIAAjXIAAgNIAAj/QCVguDVAEQNGAPNHAAQCNAACMAHIABAGIAAAOIAAANQAXBUgJB2IgBANIAAAbIAAANIAADJIAAAOIAAANQAKGVgXF1IgCANQgjCRh8A4QAAAHgEACQgjAbg3AFIAAANIgOAAgAvTqCIAARZIAAANQAtEPEwALIANAAQgkgRhVgiQgGgDgHAAQhUhGgjh2QgCgGAAgHQgXjhAFkCQAFj+Aaj8QASi1hQAAQgYAAgiARg");
	this.shape_1.setTransform(2.746,63.534);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.969)").s().p("AjWApIAAgOIAAhCQCAh6EfA2QAHABAHAAIAADWIAAANQgpAAgoACIgyACQi/AAhrhUg");
	this.shape_2.setTransform(-135.525,26.0165);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.992)").s().p("Ai7BsIAAgNIAAjIICUAAIANAAIAAgOQBCAABDAHIAAAHQA6AJAQA4QAAACAHAAIAAA0IAAAOQgHAAgDADQhJBZihAAQg8AAhHgMg");
	this.shape_3.setTransform(138.225,25.9965);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.973)").s().p("AB3BQIj+AAIAAgNIAAhDQCNiiB4CqQAQAWgKAyIgNAAg");
	this.shape_4.setTransform(2.8555,-58.4024);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(2,2,2,0.961)").s().p("Ag8GuQBohiAXi5QAAgGgEgDQjOingRlnQANgOAKgPQADgFAAgHIBRAAIANAAIAAAOQgiFZDrDMIAAANQAED9jaAeg");
	this.shape_5.setTransform(116.7545,-100.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.949)").s().p("AAKFGQA5gzgHhzQiFiohPjdQgCgGAAgHIAAgNIAAhrIAAgOIAAgbQB9hFgTB/QgcCzBSBjQBTBhBBB1QAHBzgsA9QgEAFAAAGQgrBHhaAWIgNABQgdglBIhBg");
	this.shape_6.setTransform(94.6541,-95.9176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_cooking_color, new cjs.Rectangle(-157,-143,314,285.8), null);


(lib.icon_cinema_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B1B1B1","rgba(15,15,15,0)"],[0,1],-44.2,0,44.2,0).s().p("AmZEWQgHgDgJAAIACgRQAgj9gyj2QGpjAGajNQAGgDAJAAQAkJmgDKMIAAARQmri1moi3g");
	this.shape.setTransform(114.2615,33.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(18,18,18,0.4)").s().p("AsogHIZAAAIARAAIAAAHQlYAIlQAAQnbAAnOgPg");
	this.shape_1.setTransform(-64.225,85.0495);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(1,1,1,0.035)").s().p("AB7ggIABgRQCjiGAHDZQACAug3AUIgMABQh4AAAOiFgAkkggIAAgRQCihwASCiQAJBPhIAEIgUABQhrAAAKh1g");
	this.shape_2.setTransform(-72.4665,-40.9479);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(2,2,2,0.047)").s().p("AqJD1IgBgRQDAiYgoD4QgBANgRAYQh4gFgNhvgAHTiKIAAgQQC8iWgEDpQgBAZgQAZQgZAEgWAAQh4AAAAh5gADqkgIgBgRQDBiTgMD3QgCAlgugDQgcAKgWAAQhPAAgDh/g");
	this.shape_3.setTransform(-60.0198,-53.704);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(4,4,4,0.09)").s().p("AnVASQgFgBAAgYQBWAggdAAQgNAAgngHgAGfABQgGgBAAgYQBUAjgXAAQgNAAgqgKg");
	this.shape_4.setTransform(-70.9107,-55.1051);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(1,1,1,0.039)").s().p("AAEBfQhegNALh4IABgQQDBh2gqDnQgGAkg1AAIgKAAg");
	this.shape_5.setTransform(-138.8914,-40.3637);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(2,2,2,0.051)").s().p("AHLCZIAAgRQC0iRATDUQAEAtgkAFQgqAQgfAAQhTAAgLh0gAqRi0IgBgRQCtiqgGDtQAAAZgRAZIgcACQhvAAgKhmg");
	this.shape_6.setTransform(-59.2302,-59.5116);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(50,50,50,0.984)").s().p("AJBONI5BAAQhKgCgKhBQg5lwAZnCQAIAAAAgCQAfhbBegWIAZAAQhyhmg9i2IAAgQIAAinQBxmDHhBmQA2ALA7AnQBqBIAmCSQCMmnHnByQB3AdBFBdQDCEHixEXIhTCBQEhgngVEQIgBAQQABBTAng/QACgDAIAAQCfiGC9AQQALABAEAiQAEAhAAAhQAzD3ghD9IgBARQAMA2gFATQgMAvgcgBQjYgMioidIgJAAQAgDwicAsIgRAAgAk1lGQgxCOhzBMIAAAJQC3AIC4AAQAAgIgEgEQiIh8g8hzQAAAJgDAHgAA7kCIAAAQQgOCNCEgHQA+gNgDg0QgHiGhCAAQgpAAg/AxgAs3jxIAAAQQAOBvB3AGQARgZACgNQAYiZhAAAQgnAAhJA6gAitmHIgBAQQgOCMCEgGQA3gUgCguQgEiHhAAAQgoAAg+AzgAwQmHIgBAQQgLB5BfANQA+ADAHgnQAciahMAAQgnAAhBAogApOmHIAAAQQgLCBCAgMQBIgDgJhQQgKhgg9AAQgqAAhDAugAElmHIABAQQAPCgCXg8QAlgEgEguQgMh+hEAAQguAAhKA8gArwnSQB6AXh+gwQAAAZAEAAgACEniQB8AdiCg3QAAAZAGABgApOpgIAAAQQgHB8B8gHQBDgIgHhLQgKhhg8AAQgpAAhCAvgAwQpgIAAAQQgDBfBFAWQAiAAAbgNQAXgLABgLQALiWg+AAQglAAg/A0gAElpxIAAARQAACOCngZQARgZAAgaQADiNhFAAQgsAAhKA6gAitqCIgBARQgSCQCIgKQA7gQgDgyQgHiEhCAAQgnAAg9AvgAs3rVIAAARQALBxCLgNQAQgaABgZQADiJg5AAQgpAAhIBHgAA7sHIABARQAFCiCAguQAtAEACglQAIibhJAAQgsAAhIA3g");
	this.shape_7.setTransform(-42.6887,-6.6934);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(1,1,1,0.031)").s().p("AhYgaIABgQQCfhyAQCjQAHBLhDAIIgNAAQhtAAAGh0g");
	this.shape_8.setTransform(-92.9356,-63.2618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_cinema_color, new cjs.Rectangle(-158.5,-97.6,317,195.2), null);


(lib.icon_bowling_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ARRAAQAAHKlEFDQhgBhhsBEQgVANgWAMQgYANgYAMQjcBtkKAAQjeAAi/hMQjJhRininQlDlDAAnKQAAnJFDlEQFElDHJAAQHKAAFDFDQFEFEAAHJg");
	this.shape.setTransform(1.625,1.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000C85","#0056AB","#0094C9"],[0,0.494,1],-110.5,0,110.5,0).s().p("AmdQEQjJhQininQlDlDAAnKQAAnJFDlEQFElDHJAAQHKAAFDFDQFEFEAAHJQAAHKlEFDQhgBhhtBEIgqAZIgwAZQjcBtkKAAQjeAAi/hNgAlToeQguAOgXArQgXAtAPAwQAPAvAsAWQAsAXAvgPQAvgPAYgrQAVgsgOgvQgPgwgsgXQgagOgbAAQgTAAgUAHgAhtthQgvAOgXAsQgXAsAPAvQAPAwArAWQAtAXAvgOQAugQAYgrQAWgsgPgvQgPgxgrgWQgagNgbAAQgSAAgUAGgAn7txQgvAOgWAsQgXAuAPAuQAPAwAsAWQArAXAwgPQAvgPAWgrQAXgsgPgvQgQgwgqgWQgcgPgcAAQgSAAgSAGg");
	this.shape_1.setTransform(1.625,1.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(45,45,45,0.906)").s().p("AoABmQkUgMiZhvQCmg4DVgOIAAgGIA+AUQC/BMDfAAQEIAADdhtQE/AJDgBoQkrBdmAAKQipAFigAAQjmAAjUgJg");
	this.shape_2.setTransform(10.375,112.2162);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(35,35,35,0.706)").s().p("AnNB7Qh4gJhfgFQjigKhZh8QCThWDogJIAAgGQAQAPAiAEIAAAGIAAAHQjVAOimA3QCZBvEUAMQFpAPGagKQGAgLErhcQjghok/gJIAwgaIACAAQFIAHDXB4QgGAqgsAKQnKBkoAAAQjUAAjdgRg");
	this.shape_3.setTransform(10.375,112.5806);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(19,19,19,0.396)").s().p("AlOCbQj5gQjdgTQi0gQghiQQCHhdDbgOIAAgGQAZAGAQAQQADADAHAAIAAAGQjoAJiTBWQBZB8DiAKQBfAFB4AJQL0A6KHiNQAsgKAGgqQjXh4lIgHIgCAAIAqgZQBPAOBTAAQEIAABnCWQgDAwguALQmzBuoIAAQipAAizgMg");
	this.shape_4.setTransform(10.375,112.761);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_bowling_color, new cjs.Rectangle(-109.9,-110,223.10000000000002,239.4), null);


(lib.btn_about = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("אודות", "normal 600 25px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 73;
	this.text.alpha = 0.90196078;
	this.text.parent = this;
	this.text.setTransform(0,-12.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("Azvs+MAnfAAAQDCAACICJQCJCJAADCIAALVQAADCiJCJQiICJjCAAMgnfAAAQjCAAiJiJQiJiJAAjCIAArVQAAjCCJiJQCJiJDCAAg");
	this.shape.setTransform(0.0212,-0.0077,0.2583,0.1989);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_1.setTransform(0.0212,-0.0077,0.2583,0.1989);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E2BD").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_2.setTransform(0.0212,-0.0077,0.2583,0.1989);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.2,-18,92.4,39.1);


(lib.btn_romance = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("רומנטי", "normal 600 45px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 165;
	this.text.alpha = 0.90588235;
	this.text.parent = this;
	this.text.setTransform(0,-22.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("Azvs+MAnfAAAQDCAACICJQCJCJAADCIAALVQAADCiJCJQiICJjCAAMgnfAAAQjCAAiJiJQiJiJAAjCIAArVQAAjCCJiJQCJiJDCAAg");
	this.shape.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_1.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E2BD").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_2.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.2,-37.7,276.5,78);


(lib.btn_iceBreaking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("שבירת קרח", "normal 600 45px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 250;
	this.text.alpha = 0.90980392;
	this.text.parent = this;
	this.text.setTransform(0,-22.8);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("Azvs+MAnfAAAQDCAACICJQCJCJAADCIAALVQAADCiJCJQiICJjCAAMgnfAAAQjCAAiJiJQiJiJAAjCIAArVQAAjCCJiJQCJiJDCAAg");
	this.shape.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_1.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E2BD").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_2.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.2,-37.7,276.5,77.5);


(lib.btn_calm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("רגוע", "normal 600 45px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 113;
	this.text.alpha = 0.90588235;
	this.text.parent = this;
	this.text.setTransform(0,-22.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("Azvs+MAnfAAAQDCAACICJQCJCJAADCIAALVQAADCiJCJQiICJjCAAMgnfAAAQjCAAiJiJQiJiJAAjCIAArVQAAjCCJiJQCJiJDCAAg");
	this.shape.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_1.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6E3BE").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_2.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.2,-37.7,276.5,78);


(lib.btn_active = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("פעיל", "normal 600 45px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 129;
	this.text.alpha = 0.90588235;
	this.text.parent = this;
	this.text.setTransform(0,-21.5);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("Azvs+MAnfAAAQDCAACICJQCJCJAADCIAALVQAADCiJCJQiICJjCAAMgnfAAAQjCAAiJiJQiJiJAAjCIAArVQAAjCCJiJQCJiJDCAAg");
	this.shape.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_1.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6E3BE").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_2.setTransform(0.0004,0.0081,0.7898,0.4364);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.2,-37.7,276.5,75.5);


(lib.btn2_questions = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("?", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 37;
	this.text.parent = this;
	this.text.setTransform(-0.0295,-56.65,2.1274,2.1274);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AKrAAQAAEbjIDIQjIDIkbAAQkaAAjIjIQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEag");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5E2BD").s().p("AniHjQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEaQAAEbjIDIQjIDIkbAAQkaAAjIjIg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AniHjQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEaQAAEbjIDIQjIDIkbAAQkaAAjIjIg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-71.7,143.5,170.60000000000002);


(lib.bg_yellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#423D33").s().p("AgqgFIBKAAIALAAIAAAJIgLAAQgOACgNAAQgeAAgRgLg");
	this.shape.setTransform(257.675,935.6125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8A7F6A").s().p("Ag6gFQA6AAA6AFIABAEIgLAAQgTACgRAAQgpAAgdgLg");
	this.shape_1.setTransform(240.025,934.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#968A74").s().p("AAlAFIhUAAIAAgJQAvAAAvAEIABAFIgLAAg");
	this.shape_2.setTransform(315.95,937.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9D917A").s().p("AAlAFIhUAAIAAgJQAvABAwADIAAAFIgLAAg");
	this.shape_3.setTransform(367.275,939.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.208)").s().p("ABQAFIiqAAIAAgJICqAAIALAAIAAAJIgLAAg");
	this.shape_4.setTransform(1161.75,970.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595245").s().p("ABLAFIigAAIAAgJICgAAIAKAAIAAAJIgKAAg");
	this.shape_5.setTransform(671.5,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C5B598").s().p("AgqgEIBKAAIALAAIgBAEQgqAFgqAAIAAgJg");
	this.shape_6.setTransform(726.025,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5A5345").s().p("ABLAFIigAAIAAgJICgAAIAKAAIAAAJIgKAAg");
	this.shape_7.setTransform(796.6,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#837966").s().p("ABwAFIjqAAIAAgJIDqAAIALAAIAAAJIgLAAg");
	this.shape_8.setTransform(817.45,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#29261F").s().p("ABaAFIi/AAIAAgJIC/AAIAMAAIAAAJIgMAAg");
	this.shape_9.setTransform(897.65,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#524B3F").s().p("ACLAFIkgAAIAAgJIEgAAIALAAIAAAJIgLAAg");
	this.shape_10.setTransform(922.775,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7B715F").s().p("AzSAPIigAAIAAgKICgAAIALAAIAAAKIgLAAgAVpgEIjLAAIAAgKIDLAAIAKAAIAAAKIgKAAg");
	this.shape_11.setTransform(819.575,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C6B699").s().p("AhKgEICKAAIALAAIgBAEQhKAFhKAAIAAgJg");
	this.shape_12.setTransform(1004.025,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A69980").s().p("ACwAFIlqAAIAAgJIFqAAIALAAIAAAJIgLAAg");
	this.shape_13.setTransform(977.825,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(95,87,73,0.396)").s().p("EAAAAqCQgEhuAAhuIAA4sIAA79IAA7+IAJAAIAAb+IAAb9IAAb+IAAAKg");
	this.shape_14.setTransform(25.125,470);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.624)").s().p("AgFHWIAAu1IAJAAIAAAKQAIHmgRHPIAAgKg");
	this.shape_15.setTransform(0.6458,255);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(146,135,113,0.6)").s().p("AgGAeIAAhFIAKAAIABAKQAHAvgSAWIAAgKg");
	this.shape_16.setTransform(26.3211,189);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(22,20,17,0.157)").s().p("AgPAPIAAgKIAAgJQARgDAIgPQABgCAFAAIgBAKQgGAbgYAMIAAgKg");
	this.shape_17.setTransform(56.125,102.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A79A81").s().p("ANIAIQu8gGu+AAIAAgJId6AAIDrAAQhjAPh6AAIgOAAg");
	this.shape_18.setTransform(329.85,16.8277);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#625A4C").s().p("ACWAFIk1AAIAAgJIE1AAIAKAAIAAAJIgKAAg");
	this.shape_19.setTransform(546.375,15.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8B816C").s().p("ABQAFIiqAAIAAgJICqAAIALAAIAAAJIgLAAg");
	this.shape_20.setTransform(571.5,15.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#302D25").s().p("AoAAKIjrAAIAAgKIDrAAIAKAAIAAAKIgKAAgALiAAIjrAAIAAgJIDrAAIAKAAIAAAJIgKAAg");
	this.shape_21.setTransform(713.2,14);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#544D41").s().p("AgqgEIBKAAIALAAIgBAEQgqAFgqAAIAAgJg");
	this.shape_22.setTransform(1567.525,935.4875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7A705E").s().p("Ag0gEIBfAAIALAAQAAAEgBAAQg1AFg0AAIAAgJg");
	this.shape_23.setTransform(1548.3,936.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#706857").s().p("Ag0gEIBfAAIALAAIgBAEQg1AFg0AAIAAgJg");
	this.shape_24.setTransform(1582.5,934.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(64,59,49,0.275)").s().p("EhVxgAFId6AAId5AAId6AAId5AAId6AAIWDAAIAAAFQhVAEhVAAIuuAAI95AAI96AAI95AAI96AAI96AAIgLAAQgvACgtAAQhpAAhbgLg");
	this.shape_25.setTransform(935.05,940.6125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5B5446").s().p("AgvAFIAAgJIBUAAIALAAIAAAEQgrAFgsAAIgIAAg");
	this.shape_26.setTransform(1532.775,937.5021);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(194,179,150,0.796)").s().p("AgEAoIAAgKIAAhFIAJAAIAABFIAAAKIgJAAg");
	this.shape_27.setTransform(1793.6625,752);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#807663").s().p("AgFAeIAAhFIAJAAIABAKQAHAvgRAWIAAgKg");
	this.shape_28.setTransform(1749.9457,773);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#25221C").s().p("AgGAyIAAgKIAAhZQASAggHA5IgBAKIgKAAg");
	this.shape_29.setTransform(1751.0311,734);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#26231D").s().p("EA0jA0qIAAgKIAAiqIAKAAIAACqIAAAKIgKAAgEghKg0fIzjAAIAAgKQJ3AAJ3AFIAAAFIgLAAg");
	this.shape_30.setTransform(1425.85,348);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C2B396").s().p("AgFAeIAAhFIAJAAIABAKQAHAugRAXIAAgKg");
	this.shape_31.setTransform(1763.8457,650);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#60594A").s().p("AgEBGIAAgKIAAiBIAJAAIAACBIAAAKIgJAAg");
	this.shape_32.setTransform(1763.7125,630);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#998E77").s().p("AgFBQIAAgKIAAiVIAKAAIAACVIAAAKIgKAAg");
	this.shape_33.setTransform(1750.9125,638);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2E2A23").s().p("AgGAjIAAhPIAKAAIAAAKQAIA0gSAbIAAgKg");
	this.shape_34.setTransform(1752.1185,613.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B2A489").s().p("AgGAeIAAhFIAKAAIABAKQAHAvgSAWIAAgKg");
	this.shape_35.setTransform(1764.9186,603);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#696151").s().p("AgEA8IAAgKIAAhtIAJAAIAABtIAAAKIgJAAg");
	this.shape_36.setTransform(1764.8,593);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#887D69").s().p("AgEBaIAAgKIAAipIAJAAIAACpIAAAKIgJAAg");
	this.shape_37.setTransform(1751.975,600);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#817764").s().p("AgGBBIAAiLIAKAAIABAKQAIBSgTA5IAAgKg");
	this.shape_38.setTransform(1753.1914,568.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9E917A").s().p("AgFAyIAAhtIAJAAIABAKQAHBDgRAqIAAgKg");
	this.shape_39.setTransform(1765.998,568);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3D392F").s().p("AgEAyIAAgKIAAhZIAJAAIAABZIAAAKIgJAAg");
	this.shape_40.setTransform(1765.8875,557);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A0947C").s().p("AgGAyIAAhtIAKAAIABAKQAHBDgSAqIAAgKg");
	this.shape_41.setTransform(1767.0711,540);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3F3B31").s().p("AgFAyIAAgKIAAhZIAKAAIAABZIAAAKIgKAAg");
	this.shape_42.setTransform(1766.9625,529);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#464136").s().p("AgGAoIAAhZIAKAAIAAAKQAIA5gSAgIAAgKg");
	this.shape_43.setTransform(1754.2582,547);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#433E34").s().p("EhviAhCIBLAAIALAAIAAAKIgLAAQgOACgNAAQgeAAgSgMgEBvVgfzIAAhaIALAAIAAAKQAIA5gTAhIAAgKg");
	this.shape_44.setTransform(1042.1082,726.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#988C75").s().p("AgEAtIAAgKIAAhPIAJAAIAABPIAAAKIgJAAg");
	this.shape_45.setTransform(1755.175,509.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AA9E84").s().p("AgFAeQgBgiABgjIAJAAIABAKQAHAvgRAWIAAgKg");
	this.shape_46.setTransform(1768.1332,513);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5F5749").s().p("AgEAoIAAgKQgBgiABgjIAKAAIAABFIAAAKIgKAAg");
	this.shape_47.setTransform(1768,505);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#453F35").s().p("AgGAoIAAhZIAKAAIABAKQAHA5gSAgIAAgKg");
	this.shape_48.setTransform(1756.3811,493);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9F927B").s().p("AgEAoIAAgKIAAhFIAKAAIAABFIAAAKIgKAAg");
	this.shape_49.setTransform(1756.2375,484);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#484338").s().p("AgGAoIAAhZIAKAAIAAAKQAIA4gSAhIAAgKg");
	this.shape_50.setTransform(1757.4582,468);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A2967D").s().p("AgEAoIAAgKIAAhFIAJAAIAABFIAAAKIgJAAg");
	this.shape_51.setTransform(1757.3125,459);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3B362D").s().p("AgEAoIAAgKIAAhFIAKAAIAABFIAAAKIgKAAg");
	this.shape_52.setTransform(1770.1375,452);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4B463A").s().p("AgGAeIAAhFIAKAAIABAKQAHAugSAXIAAgKg");
	this.shape_53.setTransform(1758.5186,443);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9E927A").s().p("AAWQzIAAgKIAAhQIAKAAIAABQIAAAKIgKAAgAgfviIAAgKIAAhGIALAAIAABGIAAAKIgLAAg");
	this.shape_54.setTransform(1761.0375,538.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#464036").s().p("AgGAeIAAhFIAKAAIABAKQAHAugSAXIAAgKg");
	this.shape_55.setTransform(1759.5686,420);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3D382F").s().p("AgEAoIAAgKIAAhFIAJAAIAABFIAAAKIgJAAg");
	this.shape_56.setTransform(1772.2625,405);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B5A78C").s().p("Eg5YAAKIDrAAIALAAIAAAFQh7AFh7AAIAAgKgEAzYgATIF2AAIALAAIAAAKIgLAAQg8ACg6AAQiHAAh5gMg");
	this.shape_57.setTransform(947.9,14);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#514B3F").s().p("ABhAFIjLAAIAAgJIDLAAIAKAAIAAAJIgKAAg");
	this.shape_58.setTransform(1347.25,12.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#27241E").s().p("ABAAFIiKAAIAAgJQBKAABKAEIABAFIgLAAg");
	this.shape_59.setTransform(1365.425,12.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B5A68B").s().p("AhKgFICKAAIALAAIAAAJIgLAAQgYACgVAAQg1AAgogLg");
	this.shape_60.setTransform(1408.2,13.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#837965").s().p("EAi0A7iIAAhQIALAAIAAAKQAIA0gTAcIAAgKgEgRTg7XIiAAAIAAgKICAAAIALAAIAAAKIgLAAgEgf1g7hIjLAAIAAgKIDLAAIAKAAIAAAKIgKAAg");
	this.shape_61.setTransform(1539.3435,394);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#534C40").s().p("AA7AFIiAAAIAAgJICAAAIALAAIAAAJIgLAAg");
	this.shape_62.setTransform(1436.55,13.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#28251F").s().p("AAqAFIheAAIAAgJQA0AAA1AEIABAFIgMAAg");
	this.shape_63.setTransform(1448.85,13.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8C816C").s().p("AAlAFIhUAAIAAgJIBUAAIALAAIAAAJIgLAAg");
	this.shape_64.setTransform(1491.075,14.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B4A68B").s().p("EAxTAAAIB1AAIALAAIAAAJIgLAAQgVACgSAAQguAAgggLgEgzSgAKIDsAAIALAAIAAAFQh7AFh8AAIAAgKg");
	this.shape_65.setTransform(1158,14.125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#312D26").s().p("EhKlAAKIlBAAIAAgKIFBAAIALAAIAAAKIgLAAgEBPdAAAIhhAAIAAgJQA2AAA0AFIABAEIgKAAg");
	this.shape_66.setTransform(1006.7,15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#615A4B").s().p("EATzAyFIAAgKIAAhQIALAAIAABQIAAAKIgLAAgEgSngx6IhWAAIAAgKIBWAAIAKAAIAAAKIgKAAg");
	this.shape_67.setTransform(1623.675,334.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A4977F").s().p("EA/vAAAIChAAIAKAAIAAAJIgKAAQgbACgZAAQg9AAgwgLgEg+uAAAIjrAAIAAgKIDrAAIALAAIAAAKIgLAAg");
	this.shape_68.setTransform(1122.175,15.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#645C4D").s().p("AAlAFIhUAAIAAgJIBUAAIALAAIAAAJIgLAAg");
	this.shape_69.setTransform(1552.025,15.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#322E26").s().p("AAwAFIhqAAIAAgJQA6AAA6AEIABAFIgLAAg");
	this.shape_70.setTransform(1562.725,15.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#625B4C").s().p("AgvgFQAvAAAwAFIAAAEIgKAAQgQACgOAAQgiAAgVgLg");
	this.shape_71.setTransform(1592.65,16.625);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A0937B").s().p("AgGAoQABgsgBgtIAKAAIABAKQAHA5gSAgIAAgKg");
	this.shape_72.setTransform(1773.4811,391);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#443F34").s().p("AgFAeIAAhFIAJAAIABAKQAHAugRAXIAAgKg");
	this.shape_73.setTransform(1760.6457,397);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#978B74").s().p("AgEAoIAAgKIAAhFIAKAAIAABFIAAAKIgKAAg");
	this.shape_74.setTransform(1761.5875,366);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#413C32").s().p("EhpKAtiIBLAAIAKAAIAAAKIgKAAQgPACgMAAQgfAAgRgMgEh02AtEIBLAAIAKAAIAAAKIgKAAQgPACgMAAQgfAAgRgMgEBysgqRIAAhGIALAAIABAKQAHAvgTAXIAAgKgEB0tgsdIAAgKIAAhGIALAAIAABGIAAAKIgLAAg");
	this.shape_75.setTransform(1027,647.625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#998D76").s().p("AhQEOIAAgKIAAhGIAKAAIAABGIAAAKIgKAAgABEizIAAhaIALAAIABAKQAHA5gTAhIAAgKg");
	this.shape_76.setTransform(1768.1436,366);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#8A806B").s().p("AgFAyIAAhtIAJAAIABAKQAHBDgRAqIAAgKg");
	this.shape_77.setTransform(1762.798,344);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#38342B").s().p("AgEAoIAAgKIAAhFIAKAAIAABFIAAAKIgKAAg");
	this.shape_78.setTransform(1775.4875,335);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#897E6A").s().p("AgFAyIAAhtIAJAAIABAKQAHBCgRArIAAgKg");
	this.shape_79.setTransform(1763.848,321);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#474137").s().p("EgBLAkGIAAjwIALAAIAAAKQAICFgTBrIAAgKgEAA/gjJIAAhGIALAAIAAAKQAIAwgTAWIAAgKg");
	this.shape_80.setTransform(1757.9686,532);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3A362D").s().p("AgEAoIAAgKIAAhFIAJAAIAABFIAAAKIgJAAg");
	this.shape_81.setTransform(1776.5625,312);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9C9079").s().p("Eh1IAyPIhVAAIAAgKQAwABAwAEIAAAFIgLAAgEB1xgmCIAAhQIALAAIAAAKQAIA0gTAcIAAgKgEB2Rgw0IAAhaIALAAIAAAKQAIA5gTAhIAAgKg");
	this.shape_82.setTransform(1020.1832,614.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3B372E").s().p("AiKddIAAhQIALAAIAAAKQAJA1gUAbIAAgKgABAmoIAAgKIAAhGIALAAIAABGIAAAKIgLAAgACA8WIAAgKIAAhGIALAAIAABGIAAAKIgLAAg");
	this.shape_83.setTransform(1764.25,474.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4E483C").s().p("AgFAeIAAhFIAJAAIABAKQAHAugRAXIAAgKg");
	this.shape_84.setTransform(1765.9957,280);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3C372E").s().p("EhzWA0uIBLAAIAKAAIAAAKIgKAAQgPACgMAAQgfAAgRgMgEBzMgzpIAAgKIAAhGIALAAIAABGIAAAKIgLAAg");
	this.shape_85.setTransform(1040.925,599.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9F937B").s().p("AgEAoIAAgKIAAhFIAJAAIAABFIAAAKIgJAAg");
	this.shape_86.setTransform(1765.8625,272);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4C463A").s().p("AgGAeIAAhFIAKAAIABAKQAHAvgSAWIAAgKg");
	this.shape_87.setTransform(1767.0686,256);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#9A8E77").s().p("EhzSA2EIhWAAIAAgKQAxAAAvAFIABAFIgLAAgEBy7gThIAAhkIALAAIABAKQAHA+gTAmIAAgKgEBzGgXbIAAhaIALAAIAAAKQAIA5gTAhIAAgKgEBz8gpjIAAhaIAKAAIABAKQAHA5gSAhIAAgKgEB0cg0pIAAhaIAKAAIABAKQAHA6gSAgIAAgKg");
	this.shape_88.setTransform(1034.0832,591);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3E3930").s().p("EgBVAmmQgFjmAAjmIALAAIAAHCIAAAKgAgagdIAAgKIAAhGIALAAIAABGIAAAKIgLAAgEABQglVIAAgKIAAhGIALAAIAABGIAAAKIgLAAg");
	this.shape_89.setTransform(1771.225,484);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9D9179").s().p("EhvXA2TIhWAAIAAgKQAwAAAwAFIABAFIgLAAgEBsqgHuIAAgKIAAhaIALAAIAABaIAAAKIgLAAgEBvAgPsIAAhkIAKAAIABAKQAHA+gSAmIAAgKgEBvggbGIAAhaIAKAAIABAKQAIA5gTAhIAAgKgEBuVgtiIAAgKIAAhGIALAAIAABGIAAAKIgLAAgEBwggw0IAAhkIALAAIAAAKQAIA/gTAlIAAgKgEBuqg1CIAAgKIAAhGIALAAQgBAjABAjIAAAKIgLAAg");
	this.shape_90.setTransform(1058.1561,591.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#443F35").s().p("AgGAjIAAhPIAKAAIAAAKQAIAzgSAcIAAgKg");
	this.shape_91.setTransform(1768.1685,232.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3F3A31").s().p("AgqNhIAAgKIAAhGIALAAIAABGIAAAKIgLAAgAAgsQIAAgKIAAhGIALAAQgBAjABAjIAAAKIgLAAg");
	this.shape_92.setTransform(1777.0875,299.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9B8F78").s().p("AhxPUIAAgKIAAhGIALAAIAABGIAAAKIgLAAgABktvIAAhaIALAAIABAKQAHA5gTAhIAAgKgAgbuDIAAgKQgBgjABgjIALAAIAABGIAAAKIgLAAg");
	this.shape_93.setTransform(1770.2686,318);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#655D4E").s().p("AgEBaIAAi9QARBXgNBwIgEAAIAAgKg");
	this.shape_94.setTransform(1769.0933,198);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B9AB8F").s().p("AgEBGIAAiVQARBEgNBaIgEABIAAgKg");
	this.shape_95.setTransform(1781.9348,199);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(246,227,190,0.996)").s().p("EBFrBIgI96AAI96AAI95AAI96AAI96AAIgLAAIiAAAIAAgFQgwgEgxgBIgKAAIhLAAIgKAAIhBAAIAAgFQgwgFgwAAIgKAAIhMAAIgKAAIhAAAIgBgFQgvgFgxAAIgKAAIhLAAIgLAAIgqAAIgBgFQgvgFgxAAIgKAAIhLAAIgLAAIhAAAIgBgFQgvgEgwgBIgLAAIhLAAIgKAAIhBAAIAAgFQg7gFg6AAQmEgXkohsQquj8mGoZQkfmMgnp6IAAgKIAA7+IAA79IAA7+IAAgKIAAhGQATgWgHgwIgBgKIAAgKIAAgUQBJm5DLlBQACgDAAgFQAZgMAGgcIACgKQGZoALJjjQDphJEjgSQO9AAO9AGQCDABBogRIJNAAIAKAAIFBAAIALAAIE1AAIALAAICrAAIALAAQB7AAB7gFIAAgFIFBAAIALAAIDrAAIAKAAIChAAIAKAAIChAAIAKAAIDrAAIALAAQArAAArgFIAAgFIFBAAIALAAIDrAAIAKAAIChAAIAKAAIDrAAIALAAQB8AAB7gFIAAgFIFAAAIALAAIC/AAIALAAIEgAAIALAAIDLAAIALAAIFsAAIALAAQBKAABKgFIABgFIL4AAIAKAAITjAAIAKAAIJiAAIALAAQCtASDJgIIALAAIDLAAIALAAIDLAAIAKAAICMAAIAKAAIEMAAIAKAAQA4ASBTgIIALAAICAAAIALAAICAAAIALAAIBgAAIALAAIC1AAIAMAAQAtASBIgIIALAAIBVAAIALAAIBVAAIALAAIBhAAIAKAAICAAAIALAAQBDASBdgIIALAAIBVAAIALAAIBrAAIALAAIC2AAIALAAQAeASA3gIIAKAAQNRBlGqHzQC0DTB3ESQB0EJAWFoIAAC+IAAAKIAABuIAAAKIgLAAQgBAjABAjIAAAKIAABQIAAAKIAAA8IAAAKIgLAAIAABGIAAAKIAABGIAAAKIAABGIAAAKIgLAAIAABGIAAAKIAABGIAAAKIAABGIAAAKIgKAAIAABGIAAAKIAABGIAAAKIAAA8IAAAKIgLAAIAABuIAAAKIAABkIAAAKIgLAAIAABuIAAAKIAABuIAAAKIgLAAIAABGIAAAKIAABGIAAAKIAAA8IAAAKIgKAAIAABGIAAAKIAABGIAAAKIAAA8IAAAKIgLAAIAABGIAAAKIAABGIAAAKIAAA8IAAAKIgKAAIAABGIAAAKIAABGIAAAKIAABGIAAAKIgLAAIAABGIAAAKIAABaIAAAKIAAA7IAAAKIgLAAIAABGIAAAKIAABaIAAAKIAAA8IAAAKIgLAAIAABQIAAAKIAABaIAAAKIAABGIAAAKIgKAAIAABaIAAAKIAABaIAAAKIAABQIAAAKIgLAAIAACMIAAAKIAACMIAAAKIgLAAIAACqIAAAKIAABQIAAAKIAABuIAAAKIgLAAIAACWIAAAKIAABQIAAAKIAABQIAAAKIAAKAIAAAKIAABaIAAAKIAADwIAAAKIAAAoIAAAKIgKAAIAABGIAAAKQhAJKkeF5QmNIMtjBTIgLAAIhgAAIAAAKIgLAAIgrAAIgKAAIhMAAIAAAKIgKAAIhVAAIgLAAIhgAAIAAAKIgLAAIgrAAIgLAAIhWAAIAAAKIgKABQjRAOjbAFI2DAAg");
	this.shape_96.setTransform(897.1,476);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.98)").s().p("EAoxBL3I6PAAI8EgvQucgYudgeQudgduSgkQubgkuVgdQq8gYnOjpQpxk7lRpIQiokig4mBQgzligel1QhDs2gQtvIAAmPIAA7+QASnPgInnIAAgKIAAgKIAAh4QCPr6HenAQHdnAL0iyQDJgvDfgEQO9gNO9ACQPCADOtgLQO2gKO5gIQGHgCGHgJIMVgFId6AAIbEAAIHXAEQLCANLBAEQIiAEHpA8QFqArEPCNQENCMDKDJQAWAZAXAXQADACAFAAQG7G+BGMaIABAKIAACWIAAAKIAAAyIAAAKIgLAAIAABGIAAAKIAABaIAAAKIAAAyIAAAKIgLAAIAABGIAAAKIAABaIAAAKIAAAyIAAAKIgLAAIAABGIAAAKIAABkIAAAKIAAAoIAAAKIgKAAIAABGIAAAKIAABaIAAAKIAAAoIAAAKIgLAAIAABGIAAAKIAABaIAAAKIAAAoIAAAKIgLAAIAABGIAAAKIAABaIAAAKIAAAyIAAAKIgKAAIAABGIAAAKIAABQIAAAKIAAAyIAAAKIgLAAIAABGIAAAKQABAtgBAtIAAAKIAAAoIAAAKIgLAAIAABGIAAAKIAABaIAAAKIAAAoIAAAKIgKAAIAABGIAAAKIAABaIAAAKIAAAyIAAAKIgLAAIAABGIAAAKIAABkIAAAKIAAAyIAAAKIgLAAIAABGIAAAKIAABjIAAAKIAABQIAAAKIgKAAQgBAjABAjIAAAKQgBAjABAjIAAAKIAAA8IAAAKIgLAAIAABaIAAAKIAABuIAAAKIAAAyIAAAKIgLAAIAABaIAAAKIAABuIAAAKIAAB4IAAAKIgLAAIAABuIAAAKIAABGIAAAKIAACWIAAAKIgKAAIAACCIAAAKIAABQIAAAKIAABGIAAAKIAAB4IAAAKIgLAAIAACqIAAAKQAADmAFDmIAGAAIAAFeIAAAKIgLAAIAABQIAAAKQgFCCgXBuQidLwopF6IAAAKQkfC/mQBLQmcBMnXAXQt/AstyBAQt/BAulAXIgLAAIirAAIAAAKIgKAAgEhKLBHLQOMAuOjAfQOVAfOlAbQObAbOzAQQOzAQOygSQOvgTN2g+QJtgsJggzQBVAABVgFIABgFQDbgFDRgOIAKgBQAxAAAvgFIABgFIAqAAIALAAQA2AAA0gFQABAAAAgFIBWAAIAKAAQArAAAqgFIABgFIArAAIAKAAQA2AAA1gFIAAgFQNkhTGNoMQEel5BApKQASgWgHgwIgBgKIAAgKIAAgoQAThrgHiFIgBgKIABgKQAHg6gTggIAAgKIAAqAQAUgbgIg1IgBgKIAAgKIAAhQIAAgKIAAiWIAAgKIAAhuQATgbgIg1IAAgKIAAgKIAAiqIAAgKIAAiMQATg5gIhTIAAgKIAAgKIAAhQQASgggHg6IgBgKIAAgKIAAhaIAAgKIAAhGQATghgIg5IAAgKIAAgKIAAhQIAAgKIAAg8QATgggIg6IAAgKIAAgKIAAhFIAAgKIAAg8QASghgHg5IgBgKIAAgKIAAhGIAAgKIAAhGQATgXgHgvIgBgKIAAgKIAAhGIAAgKIAAg8QATgXgIgvIAAgKIAAgKIAAhGIAAgKIAAg8QASgXgHgvIgBgKIAAgKIAAhGIAAgKIAAg8QATgXgHgvIgBgKIAAgKIAAhGIAAgKIAAhuQASgqgHhEIAAgKIAAgKIAAhkQASgrgHhDIgBgKIAAgKIAAg8QATgWgHgwIgBgKIAAgKIAAhGIAAgKIAAhGQATgXgIgvIAAgKIAAgKIAAhGIAAgKIAAhGQATgWgIgwIAAgKIAAgKQgBgjABgjIAAgKIAAg8QATgcgIg0IgBgKIAAgKIAAhGIAAgKIAAhuIAGAAQANhxgThXQgVloh0kJQh4kSizjTQmqnztRhlIAAgFQgvgFgxAAIgLAAIi1AAIgBgFQg6gFg7AAIgLAAIhVAAIgLAAIigAAIgLAAIiAAAIgBgFQg1gFg1AAIgLAAIhVAAIgLAAIhWAAIgKAAIh2AAIgLAAIi1AAIgBgFQg1gFg1AAIgLAAIiAAAIgLAAIiAAAIgLAAIiLAAIgLAAIkLAAIgBgFQhKgFhLAAIgKAAIjMAAIgKAAIjLAAIgLAAIl2AAIgLAAIpiAAIAAgFQp2gFp3AAIAAAKIgLAAIr3AAIgLAAIiLAAIgLAAIlrAAIgLAAIjLAAIgLAAIkgAAIgLAAIi/AAIAAAKIgLAAIlBAAIgLAAIjrAAIgLAAIjrAAIgLAAIigAAIgLAAIjrAAIAAAKIgLAAIlAAAIgLAAIhLAAIgLAAIjrAAIgKAAIihAAIgLAAIigAAIgLAAIjrAAIAAAKIgLAAIlAAAIgLAAIjrAAIgLAAIirAAIgLAAIk2AAIgLAAIlAAAIAAAKIgLAAIpMAAIjrAAI96AAIAAAKQkkASjoBJQrJDjmaIAQgFAAgBACQgIAPgSADIAAAKIAAAKQgFAAgDACQlXGLhCKNQAAN/gCN/QgCODAaNwQAXMEBJLiQAABuAFBuIAFAAQAnJ6EfGMQGFIZKvD8QEoBsGDAXQAoARBDgHIALAAIBAAAIALAAQAYARAzgGIAKgBIBWAAIALAAIBAAAIAKAAQAYARAzgGIALgBIBWAAIAKAAIArAAIALAAQAYARAzgGIAKgBIBWAAIAKAAIBBAAIAKAAQAYASAzgHIALgBIBVAAIALAAIBAAAIALAAQAYARAzgHIAKAAIBWAAIALAAICAAAIALAAQCDASCdgIIALAAg");
	this.shape_97.setTransform(890.7125,485.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(143,132,110,0.718)").s().p("AAWAZQgGAAgCgCQgXgXgWgYQAlAOAYAbQACADAAAFIgKAAg");
	this.shape_98.setTransform(1727.9,63.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(85,79,65,0.353)").s().p("AAAAnQgEgnAAgnIAJAAIAABFIAAAKIgFgBg");
	this.shape_99.setTransform(1793.675,191);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(245,226,189,0.996)").s().p("EgIQBCGQIol6CcrwQAXhuAGiCQATgcgIg0IgBgKIAAgKIAAleIAAgKIAAnCIAAgKIAAiqIAAgKIAAh4QATgXgIgvIAAgKIAAgKIAAhQIAAgKIAAiCIAAgKIAAiWQATgWgIgwIAAgKIAAgKIAAhuIAAgKIAAh4QASgqgHhEIgBgKIAAgKIAAhaIAAgKIAAgyQATgqgHhEIgBgKIAAgKIAAhaIAAgKIAAg8QATgWgIgwIAAgKIAAgKIAAhGIAAgKIAAhQQASglgHg+IgBgKIAAgKIAAhGIAAgKIAAgyQATgmgHg+IgBgKIAAgKIAAhGIAAgKIAAgyQATghgIg5IAAgKIAAgKIAAhGIAAgKIAAgoQATghgIg5IgBgKIAAgKIAAhGIAAgKIAAgoQATgggHg6IgBgKIAAgKIAAhGIAAgKIAAgyQATgcgIg0IAAgKIAAgKIAAhGIAAgKIAAgyQATghgIg5IAAgKIAAgKIAAhGIAAgKIAAgoQASghgHg5IgBgKIAAgKIAAhGIAAgKIAAgoQATghgIg5IAAgKIAAgKIAAhGIAAgKIAAgoQATglgIg/IAAgKIAAgKIAAhGIAAgKIAAgyQASgggHg6IgBgKIAAgKIAAhGIAAgKIAAgyQATghgHg5IgBgKIAAgKQgBgjABgjIAAgKIAAgyIAFgBQAOhbgThEIgBgKQhGsam5m+IAKAAQHwGpB7MHIABAKQAAAoAFAnIAFABIAAb+IAAb9IAAb+IAACgIgKAAIAABGIAAAKQgOF0h7EHQklJ1ppE8IAAgKg");
	this.shape_100.setTransform(1741.275,490);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_yellow, new cjs.Rectangle(0,0,1794.2,971), null);


(lib.bg_orange = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.235)").s().p("AA0ABIhvAAIAAgCIBvAAIAIAAIAAACIgIAAg");
	this.shape.setTransform(442,497.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#683328").s().p("Ag3gBIBoAAIAHAAIAAABQg4ACg3AAIAAgDg");
	this.shape_1.setTransform(55.5,489.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E2F25").s().p("AgnAAIBHAAIAIAAIAAAAQgoABgnAAIAAgBg");
	this.shape_2.setTransform(50.675,490.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(62,30,24,0.867)").s().p("AAAANQgDgNAAgMIAHAAIAAAWIAAADg");
	this.shape_3.setTransform(6.05,478.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.22)").s().p("AgEAoIAAgEIAAhLQANAigGApIAAAEIgHAAg");
	this.shape_4.setTransform(0.5026,444.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72392C").s().p("AgngBQAnAAAoABIAAABIgIAAIgZABQgcAAgSgDg");
	this.shape_5.setTransform(154.425,490.0118);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#924839").s().p("AgfgBQAfAAAgABIAAABIgIAAIgTABQgXAAgNgDg");
	this.shape_6.setTransform(143.175,489.7017);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#70372B").s().p("AgrgBQArAAAsABIAAABIgIAAIgZABQggAAgWgDg");
	this.shape_7.setTransform(128.275,490.7017);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D4637").s().p("ACtAAQAsAAAsABIAAACIgIAAIgbABQggAAgVgEgAAUAAIkYAAIAAgDQCQAACQACIAAABIgIAAg");
	this.shape_8.setTransform(104.975,489.2118);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FA7C62").s().p("ApRACQA1gBAwgBIAIgBQApAAAngBIABgCIBYAAIAIAAIBBAAIAIAAIGJAAIAIAAIBwAAIAIAAQAfAFAygBIAIgBIBIAAIAJAAQARAFAngCIAIAAIBAAAIAIAAIAAABQkCACj/AAQlTAAlOgDg");
	this.shape_9.setTransform(95.1,490.9964);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(158,78,61,0.635)").s().p("EgiPgABIWgAAIWfAAIWgAAIBAAAIAAABQg0ABg1AAIz/AAI2fAAI2fAAIgJAAIglABQgqAAghgDg");
	this.shape_10.setTransform(422.7,491.7118);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(156,77,60,0.651)").s().p("ALAADI2fAAIAAgDQBIACA4gEIAIAAIAkAAQJHAFJbgEIAAgBQAwAEBBAAIAAABIggAAg");
	this.shape_11.setTransform(92.1,491.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.153)").s().p("AgEBaIAAi2IAHAAIAAAEQAGBegNBXIAAgDg");
	this.shape_12.setTransform(3.7006,395.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.596)").s().p("AgEA3IAAhwIAHAAIAAADQAGA8gNA0IAAgDg");
	this.shape_13.setTransform(0.49,388.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(162,80,63,0.651)").s().p("AgDLGIAAgEIAAhgIAAgNIAApSIAApQIAAgEIAAh0IAHAAIAAJSIAAJRIAADoIgHAAg");
	this.shape_14.setTransform(6.05,406.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(103,51,40,0.78)").s().p("AgDARIAAgDIAAgeIAHAAIAAAeIAAADIgHAAg");
	this.shape_15.setTransform(6.05,333.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(59,29,23,0.875)").s().p("AgDAQIAAgDIAAgcIAHAAIAAAcIAAADIgHAAg");
	this.shape_16.setTransform(6.05,330.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E37159").s().p("AgEALIAAgZIAHAAIAAAEQAGAPgNAKIAAgEg");
	this.shape_17.setTransform(6.9526,324.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#522820").s().p("AgDAXIAAgDIAAgqIAHAAIAAAqIAAADIgHAAg");
	this.shape_18.setTransform(8.45,295.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(59,29,23,0.871)").s().p("AgEAMIAAgaIAHAAIAAADQAGARgNAJIAAgDg");
	this.shape_19.setTransform(6.1526,289.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#532920").s().p("AgHBMIAAgDIAAgrIAHAAIAAArIAAADIgHAAgAAAgdIAAgDIAAgrIAIAAIAAArIAAADIgIAAg");
	this.shape_20.setTransform(9.65,279.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#532921").s().p("AgTDvIAAgEIAAguIAIAAIAAAuIAAAEIgIAAgAAMjAIAAgDIAAgrIAIAAIAAArIAAADIgIAAg");
	this.shape_21.setTransform(9.25,285.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#904838").s().p("AgDAXIAAgDIAAgqIAHAAIAAAqIAAADIgHAAg");
	this.shape_22.setTransform(7.65,265.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#914839").s().p("AgDAZIAAgDIAAguIAHAAIAAAuIAAADIgHAAg");
	this.shape_23.setTransform(8.45,254.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#50281F").s().p("AgDAXIAAgDIAAgqIAHAAIAAAqIAAADIgHAAg");
	this.shape_24.setTransform(11.65,252.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#562A22").s().p("AgDAZIAAgDIAAguIAHAAIAAAuIAAADIgHAAg");
	this.shape_25.setTransform(12.45,241.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#934939").s().p("AgDAXIAAgDIAAgqIAHAAIAAAqIAAADIgHAAg");
	this.shape_26.setTransform(9.25,243.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AA5543").s().p("AggGHIAAgXIAIAAIAAADQAGAQgOAIIAAgEgAAXlvIAAgbIAIAAIAAAEQAGARgOAJIAAgDg");
	this.shape_27.setTransform(10.5628,272.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3F1F18").s().p("AgUEHIAAgXIAIAAIAAAEQAGAPgOAIIAAgEgAALjjIAAgnIAIAAIAAADQAGAYgOAQIAAgEg");
	this.shape_28.setTransform(10.9526,222.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7A3D30").s().p("AM5XVQAgAAAgACIAAACIgIAAIgVABQgXAAgMgFgAt420IAAgEIAAghIAIAAIAAAhIAAAEIgIAAg");
	this.shape_29.setTransform(100.95,341.4618);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D362B").s().p("AgDASIAAgDIAAggIAHAAIAAAgIAAADIgHAAg");
	this.shape_30.setTransform(15.7,190.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C362A").s().p("ALIZiQAkAAAkACIAAACIgIAAIgXABQgZAAgQgFgAsP5FIAAgDIAAgeIAIAAIAAAeIAAADIgIAAg");
	this.shape_31.setTransform(90.475,326.7118);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#351A15").s().p("AAAFjIAAgEIAAgXIAIAAIAAAXIAAAEIgIAAgAgHk9IAAgEIAAghQANANgGAUIAAAEIgHAAg");
	this.shape_32.setTransform(12.85,194.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#381B16").s().p("AAAASQgDgSAAgRIAHAAIAAAgIAAADIgEAAg");
	this.shape_33.setTransform(13.25,123.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#72392D").s().p("AgrQGIAAgEIAAgXIAIAAIAAAXIAAAEIgIAAgAAkqBIAAgDIAAghIAIAAIAAAhIAAADIgIAAgAgLvgIAAgEIAAghIAIAAIAAAhIAAAEIgIAAg");
	this.shape_34.setTransform(10.875,217.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#381C16").s().p("AAYDnQgEgTAAgSIAIAAIAAAhIAAAEgAgLB/IAAgCIAAgiQANAMgFAWIAAACIgIAAgAAQBHQgEgUAAgTIAIAAIAAAkIAAAEIgEgBgAgbjBIAAgEIAAghQAOANgGAUIAAAEIgIAAg");
	this.shape_35.setTransform(12.475,134.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#743A2D").s().p("AMIeXQAkAAAkABIABACIgJAAIgXABQgZAAgQgEgAtQrZIAAgEIAAgXIAIAAIAAAXIAAAEIgIAAgAtA92IAAgDIAAghIAIAAIAAAhIAAADIgIAAg");
	this.shape_36.setTransform(95.325,296.2118);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3A1D17").s().p("AAEBjQgEgSAAgSIAIAAIAAAhIAAAEIgEgBgAgDg7QgEgUAAgTIAHAAIAAAkIAAADg");
	this.shape_37.setTransform(12.05,98.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#70372C").s().p("AAcFlIAAgEIAAghIAIAAIAAAhIAAAEIgIAAgAgTABIAAgBIAAgiIAIAAIAAAiIAAABIgIAAgAgjk/IAAgEIAAghIAIAAIAAAhIAAAEIgIAAg");
	this.shape_38.setTransform(12.475,134.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#70382C").s().p("EAJ7AhIQAhAAAfACIABACIgIAAIgVAAQgXAAgNgEgEgK7ggnIAAgDIAAghIAIAAIAAAhIAAADIgIAAg");
	this.shape_39.setTransform(77.225,278.7868);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FD7E63").s().p("AghLMQAEkoAAkpIAApRIAApSIAIAAIAAAOIAAADIAAAhIAAAEIAAAhIAAADQAAASAEASIAEAAIAAAyIAAAEIAAAdIAAAEIAAAhIAAADQAAAUAEAUIAEAAIAAAuIAAAEIAAAhIAAADIAAAhIAAAEQAAASAEASIADAAIAAAyIAAADIAAAhIAAAEIAAAhIAAADQAAASAEASIAEABIAAAuIAAADIAAAiIAAADIAAAhIAAADQAAAUAEAUIAEAAIAAAvIAAADIAAAhIAAADIAAAiIAAADQAAASAEASIAEAAIAAAvIAAADIAAAhIAAAEIAAAdIAAAEQAAAUAEAWIAEAAIAAAuIAAAEIAABFIAAAEIAAAxIAAAEIgIAAIAAAhIAAADIAAAhIAAAEIAAAnIAAAEIAAAnIAAAEIgIAAIAAAaIAAAEIAAAaIAAADIAAAiIAAADIAAAoIAAADIgIAAIAAAXIAAAEIAAAXIAAADIAAAXIAAAEIAAAkIAAADIgIAAIAAAYIAAADIAAAXIAAAEIAAAaIAAADIAAAeIAAAEIgHAAIAAArIAAADIAAAXIAAAEIAAAhIAAADIgIAAIAAAuIAAAEIAAAXIAAADIAAAeIAAADIgIAAIAAAsIAAADIAAAXIAAADIAAAeIAAAEQgOiqACizg");
	this.shape_40.setTransform(9.4375,167.475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E27058").s().p("AgDASIAAgDIAAggIAHAAIAAAgIAAADIgHAAg");
	this.shape_41.setTransform(6.85,59.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#44211A").s().p("AAAAYQgEgYAAgYQANATgGAaIAAAEIgDgBg");
	this.shape_42.setTransform(6.9526,49.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3C1D17").s().p("AAAATQgDgTAAgTIAHAAIAAAjIAAAEIgEgBg");
	this.shape_43.setTransform(9.25,42.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(162,80,63,0.659)").s().p("AgHTSIAAhdIAApSIAApRIAApRIAApSIAHAAIAAA5IAAADQAAAZAEAYIAEABIAAAQIAAADIgIAAIAAAiIAAADIAAAhIAAADIAAJSIAAJRQAAEpgDEoQgCCzANCqIAAAkIAAADIgIAAIAAAeIAAAEIAAA7IAAAEIgHAAg");
	this.shape_44.setTransform(6.45,164.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#763A2E").s().p("AgDAQIAAgDIAAgcIAHAAIAAAcIAAADIgHAAg");
	this.shape_45.setTransform(9.25,38.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(101,50,39,0.784)").s().p("AgDAUIAAgEIAAgjIAHAAIAAAjIAAAEIgHAAg");
	this.shape_46.setTransform(6.05,38.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(59,29,22,0.875)").s().p("AgEAWIAAgDIAAgoQANAQgGAYIAAADIgHAAg");
	this.shape_47.setTransform(6.1526,34.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AA5542").s().p("AgUVOIAAgXIAIAAIAAADQAGAQgOAHIAAgDgAAbK6IAAgbIAIAAIAAAEQAGARgOAJIAAgDgAggsgQgEgSAAgTIAIAAIAAAiIAAADgAgc0sIAAgDIAAghQAOAMgGAVIAAADIgIAAg");
	this.shape_48.setTransform(10.9628,153.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#43211A").s().p("AAAAZQgDgZAAgYIAHAAIAAAuIAAADg");
	this.shape_49.setTransform(7.65,9.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#874335").s().p("AgDASIAAgDIAAggIAHAAIAAAgIAAADIgHAAg");
	this.shape_50.setTransform(7.65,5.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#93493A").s().p("AgvgBIBXAAIAIAAIAAABQgwACgvAAIAAgDg");
	this.shape_51.setTransform(18.5,3.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(82,41,31,0.996)").s().p("AA1ACIhxAAIAAgDIBxAAIAIAAIAAADIgIAAg");
	this.shape_52.setTransform(37.4,3.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(172,86,67,0.996)").s().p("AgjgBIA/AAIAIAAIAAABQgkACgjAAIAAgDg");
	this.shape_53.setTransform(47.075,3.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.224)").s().p("AAwACIhnAAIAAgDIBnAAIAIAAIAAADIgIAAg");
	this.shape_54.setTransform(76.425,2.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.231)").s().p("Ah0gBIDhAAIAIAAIAAACIgIAAIhHABQhRAAhJgDg");
	this.shape_55.setTransform(412.225,0.2118);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(86,43,33,0.996)").s().p("AgngBQAnAAAoABIAAABIgIAAIgXABQgdAAgTgDg");
	this.shape_56.setTransform(553.425,3.2017);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#592C23").s().p("EgtXAl4QgEgQAAgRQAOALgFATIgBADgEAsbgl3QAgAAAgABIABACIgIAAIgVABQgXAAgNgEg");
	this.shape_57.setTransform(297.225,246.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8E4737").s().p("AgfgBQAfAAAgABIAAABIgIAAIgTABQgXAAgNgDg");
	this.shape_58.setTransform(596.025,4.2017);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(89,44,34,0.996)").s().p("AgfgBIA3AAIAIAAIAAACIgIAAIgTABQgXAAgNgDg");
	this.shape_59.setTransform(606.5,3.2017);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#633127").s().p("AgfgBQAfAAAgABIAAABIgIAAIgVABQgWAAgMgDg");
	this.shape_60.setTransform(629.825,3.8618);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#783B2F").s().p("AgjgBQAjAAAkABIAAABIgIAAIgXABQgYAAgQgDg");
	this.shape_61.setTransform(642.275,5.5118);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#663328").s().p("AgfgBQAfAAAgABIAAABIgIAAIgTABQgXAAgNgDg");
	this.shape_62.setTransform(640.275,4.2017);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9B4D3C").s().p("AgEAQIAAgjIAHAAIABADQAFAWgNAOIAAgEg");
	this.shape_63.setTransform(1023.6426,488.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#AE5644").s().p("EBPHAgNIAAgDIAAgXIAIAAIAAAXIAAADIgIAAgEhO+gD5IAAgYIAIAAIAAAEQAGAPgOAIIAAgDgEhPHgdIIAAgEIAAgeQAPALgGATIAAAEIgJAAgEhPPgfoIAAgDIAAghQAOAMgFAVIgBADIgIAAg");
	this.shape_64.setTransform(517.6,271.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6A3429").s().p("AgfgBQAfAAAgABIAAABIgIAAIgUABQgWAAgNgDg");
	this.shape_65.setTransform(974.075,488.3618);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7A3C2F").s().p("AgngBIBHAAIAIAAIAAABQgoACgnAAIAAgDg");
	this.shape_66.setTransform(720.725,489.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#592C22").s().p("AgfACIAAgDIA3AAIAIAAIAAABIgvACg");
	this.shape_67.setTransform(706.225,490.975);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7D3E31").s().p("AgjgBIA/AAIAIAAIAAABQgkACgjAAIAAgDg");
	this.shape_68.setTransform(686.525,490.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(159,78,61,0.639)").s().p("ATbADI2fAAI2gAAIAAgDQBIACA5gEIAIAAIAJAAIAXAAIAQAAQKqAFK+gCQLOgBLQACQB3ABBjgFQATACAcACIABABImKAAg");
	this.shape_69.setTransform(849.825,491.475);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#894435").s().p("AgrgBIBPAAIAIAAIAAABQgsACgrAAIAAgDg");
	this.shape_70.setTransform(803.175,487.325);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8A4436").s().p("AgngBIBHAAIAIAAIAAABQgoACgnAAIAAgDg");
	this.shape_71.setTransform(785.875,487.675);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#613026").s().p("EAMMAl6IBIAAIAJAAIgBACQgoABgoAAIAAgDgEgNcgl8QAkAAAkACIABABIgIAAIgXABQgaAAgQgEg");
	this.shape_72.setTransform(701.425,246.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5C2D24").s().p("AgjgBIA/AAIAIAAIAAABQgkACgjAAIAAgDg");
	this.shape_73.setTransform(768.575,489.325);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#8F4738").s().p("AgfAAIA3AAIAIAAIAAAAQggACgfAAIAAgCg");
	this.shape_74.setTransform(770.575,487.9875);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5D2E24").s().p("AgfAAIA3AAIAIAAIAAAAQggACgfgBIAAgBg");
	this.shape_75.setTransform(755.3,489.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5F2F25").s().p("AgjgBIA/AAIAIAAIAAABQgkACgjAAIAAgDg");
	this.shape_76.setTransform(742.025,489.975);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#824033").s().p("AgfAAIA3AAIAIAAIAAAAQggACgfAAIAAgCg");
	this.shape_77.setTransform(731.975,488.9875);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A75341").s().p("EBCHAOxIhZAAIAAgDIBZAAIAIAAIAAADIgIAAgEhCOgOZIAAgXIAIAAIABADQAFAQgOAHIAAgDg");
	this.shape_78.setTransform(431.95,392.325);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#824032").s().p("AhMAAICQAAIAIAAIAAAAQhMABhMABIAAgCg");
	this.shape_79.setTransform(855.45,488);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#311813").s().p("AgfAAIA3AAIAIAAIAAAAQggACgfAAIAAgCg");
	this.shape_80.setTransform(832.525,486.9875);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#8E4637").s().p("AAwACIhnAAIAAgDIBnAAIAIAAIAAADIgIAAg");
	this.shape_81.setTransform(823.675,487);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7C3E30").s().p("Eg0yAAMImJAAIAAgEQDIAADJACIAAACIgIAAgEA58gALIA4AAIAJAAIgBACQggACggAAIAAgEg");
	this.shape_82.setTransform(448.85,489.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#74392D").s().p("EAdaAg7IAAgDIBBAAIAIAAIgBACQgdACgcAAIgPgBgEBI5AgaQApAAAnACIABACIgIAAIgaABQgcAAgTgFgEhKJgHAIAAgEIAAgXIAIAAIAAAXIAAAEIgIAAgEhKBggWIAAgDIAAgiIAIAAIAAAiIAAADIgIAAg");
	this.shape_83.setTransform(484.225,280.055);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#653227").s().p("AgfgBQAfAAAgABIAAABIgIAAIgVABQgWAAgMgDg");
	this.shape_84.setTransform(945.125,488.7118);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#5B2D23").s().p("AwQAIIA4AAIAIAAIAAACQghACgfAAIAAgEgAO5gLQAsAAAsACIAAACIgIAAIgbAAQgfAAgWgEg");
	this.shape_85.setTransform(830.5,489.325);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#894436").s().p("AgrgBQArAAAsABIAAABIgIAAIgZABQggAAgWgDg");
	this.shape_86.setTransform(927.025,487.0517);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#72382C").s().p("EBF9Ac1IoEAAIAAgDQEGAAEGABIAAACIgIAAgEhGEgXsIAAgEIAAghIAJAAIAAAhIAAAEIgJAAgEhFzgcQIAAgEIAAghIAIAAIAAAhIAAAEIgIAAg");
	this.shape_87.setTransform(459.7,302.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FB7D62").s().p("AUXATQrQgCrPABQq9ACqqgGIAvgCIABgCQBWABBLgEIAIAAQAgAAAggCIAAgBIAwAAIAIAAQAlAAAjgCIABgCIA4AAIAIAAQAgAAAgAAIAAgCIA5AAIAIAAQAkAAAkgBIAAgCIBBAAIAIAAQAoAAAogCIAAgBIBpAAIAIAAQAgAAAggCIAAgCICJAAIAIAAQAgAAAggBIAAgCICBAAIAIAAIBIAAIAIAAQBNAABLgCIAAgBIEiAAIAIAAQA2AFBKgCIAIAAIBBAAIAIAAIBwAAIAJAAQAeAGAygDIAIAAIBAAAIAIAAQASAGAngCIAIAAQExAIEiAOIAIAAQhbAFhsAAIgSAAg");
	this.shape_88.setTransform(856.675,489.7769);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3D1E18").s().p("AAcACIg/AAIAAgCQAkAAAjAAIAAACIgIAAg");
	this.shape_89.setTransform(910.125,488);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#844234").s().p("AgfgBQAfAAAfABIABABIgIAAIgTABQgXAAgNgDg");
	this.shape_90.setTransform(717.5,8.5017);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#693429").s().p("AgfgBQAfAAAgABIAAABIgIAAIgUABQgWAAgNgDg");
	this.shape_91.setTransform(715.875,7.1618);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8C4637").s().p("AMYASQAlAAAjABIABACIgIAAIgXABQgaAAgQgEgAtggVQApAAAnACIABABIgIAAIgaABQgcAAgTgEg");
	this.shape_92.setTransform(649.525,5.5118);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#803F32").s().p("AgzgBIBfAAIAIAAIAAACIgIAAIggABQgkAAgbgDg");
	this.shape_93.setTransform(733.175,8.8118);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3C1E17").s().p("AiEgBIEBAAIAIAAIAAABQiFACiEAAIAAgDg");
	this.shape_94.setTransform(751.675,8.775);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6F372B").s().p("EgCYAlkIBRAAIAIAAIgBACQgsACgsAAIAAgEgEABZglnIA4AAIAIAAIgBACQgfACggAAIAAgEg");
	this.shape_95.setTransform(769.775,247.725);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(251,125,98,0.996)").s().p("ACxAXIj4AAIgBgCQgjgBglAAIgIAAIhYAAIgBgCQgfgCghAAIgIAAQlOgQldgJIgBgCQgfgBghAAIgIAAIggAAIAAgCQgggCggAAIgIAAIggAAIgBgBQgkgCgkAAIgIAAIgwAAIAAgDIWfAAITOAAIAAABIuVAlIgIAAIg4AAIAAAEIgIAAIgwAAIgIAAIhpAAIAAADIgIAAg");
	this.shape_96.setTransform(743.225,5.325);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#763B2E").s().p("EhEnAEIIAAgDIAAgiIAIAAIAAAiIAAADIgIAAgAYhkDQAoAAAoABIAAACIgIAAIgZABQgdAAgSgEgEBDogEHIA4AAIAIAAIAAACQggABggABIAAgEg");
	this.shape_97.setTransform(448.825,30.35);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#73392D").s().p("AgrgBIBPAAIAIAAIAAABQgsACgrAAIAAgDg");
	this.shape_98.setTransform(895.675,3.825);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#914838").s().p("AgngBIBHAAIAIAAIAAABQgoACgnAAIAAgDg");
	this.shape_99.setTransform(911.35,3.475);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3D1E17").s().p("AAYACIg3AAIAAgDIA3AAIAIAAIAAADIgIAAg");
	this.shape_100.setTransform(924.225,3.15);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(182,91,72,0.996)").s().p("AgrgBIBPAAIAIAAIAAABQgsACgrAAIAAgDg");
	this.shape_101.setTransform(938.275,3.15);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(124,62,48,0.996)").s().p("AAYACIg3AAIAAgDIA3AAIAIAAIAAADIgIAAg");
	this.shape_102.setTransform(930.65,3.15);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.055)").s().p("AgIAFIAApRIAIAAQAHEmACEoQACEqgTEhIAApIg");
	this.shape_103.setTransform(1026.4839,389.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.192)").s().p("AgEA4IAAgDIAAhsQANAygGA6IAAADIgHAAg");
	this.shape_104.setTransform(1026.0506,324.675);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(43,21,16,0.525)").s().p("AgEAjIAAgEIAAhBQANAdgGAkIAAAEIgHAAg");
	this.shape_105.setTransform(1025.2526,296.65);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A85342").s().p("EhOrAP6IAAgaIAJAAIAAADQAGASgPAJIAAgEgEBPYANlQgEgVgBgWIAIAAIAAAnIAAAEgEhOKAIjIAAghIAIAAIAAAEQAGAUgOAMIAAgDgEhPagPYIAAgDIAAghIAIAAIAAAhIAAADIgIAAg");
	this.shape_106.setTransform(514.8,155.85);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A85442").s().p("EBOnACnQgEgXAAgXIAIAAIAAArIAAADgEhOqgB+IAAgpIAIAAIAAAEQAGAYgOAPIAAgCg");
	this.shape_107.setTransform(518.825,209.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6A3529").s().p("EhA2AVWQAgAAAgABIABACIgJAAIgUABQgXAAgNgEgEBAvgU1IAAgDIAAghIAHAAIAAAhIAAADIgHAAg");
	this.shape_108.setTransform(607.3,354.5618);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#371B15").s().p("EBPOARwIAAgDIAAgiQAOANgFAVIgBADIgIAAgEhPIAPhIAAgaIAIAAIABADQAFARgOAKIAAgEgEBO2AJuIAAgDIAAglQAOAOgFAXIgBADIgIAAgEhOPAH3IAAgEIAAghIAIAAIAAAhIAAAEIgIAAgEhO8gJnQgEgTAAgUIAIAAIAAAkIAAAEIgEgBgEhPUgRKQgEgTAAgSIAIAAIAAAhIAAAEg");
	this.shape_109.setTransform(516.1026,138.45);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6E362B").s().p("EBB/AlYQAwAAAwACIAAACIgHAAIgfAAQgiAAgYgEgEhOagCWIAAgDIAAgYIAIAAIAAAYIAAADIgIAAgEhOSgEOIAAgDIAAgXIAIAAIAAAXIAAADIgIAAgEBPEgGzIAAgEIAAghIAIAAIAAAhIAAAEIgIAAgEhPLgZTIAAgEIAAghIAIAAIAAAhIAAAEIgIAAgEAouglbIBIAAIAJAAIgBABQgoACgoAAIAAgDg");
	this.shape_110.setTransform(514.8,247.9368);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3E1F18").s().p("AAAAZQgDgZAAgYIAHAAIAAAuIAAADg");
	this.shape_111.setTransform(1024.35,209.425);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7F3F32").s().p("AgDASIAAgDIAAggIAHAAIAAAgIAAADIgHAAg");
	this.shape_112.setTransform(1024.35,205.125);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#401F19").s().p("AAAAaQgDgaAAgZIAHAAIAAAwIAAADIgEAAg");
	this.shape_113.setTransform(1023.5625,191.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#AA5442").s().p("EBPDAINQgDgWAAgYIAIAAIAAAsIAAACgEhN+AEVIAAgEIAAggQAOAMgGAUIAAAEIgIAAgEhO6gFGQgFgSAAgSIAIAAIAAAhIAAAEIgDgBgEhPCgHlQgEgTgBgVIAIAAIAAAlIAAADg");
	this.shape_114.setTransform(514.4,138.45);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6D362A").s().p("AAQHLIAAgDIAAgkIAIAAIAAAkIAAADIgIAAgAAIEVIAAgDIAAglIAIAAIAAAlIAAADIgIAAgAgXmiIAAgEIAAgkIAIAAIAAAkIAAAEIgIAAg");
	this.shape_115.setTransform(1022.35,228.325);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#351A14").s().p("AAPHLIAAgDIAAgkQAOAOgGAWIAAADIgIAAgAgYmiIAAgEIAAglQANAPgFAWIAAAEIgIAAg");
	this.shape_116.setTransform(1022.4526,224.35);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#412019").s().p("EhFXAY/IhBAAIAAgEIBBAAIAIAAIAAAEIgIAAgEhPbgHxIAAgdIAIAAIABADQAFATgOALIAAgEgEBPXgYIQgEgbAAgaIAIAAIAAAxIAAAEg");
	this.shape_117.setTransform(514.8125,330.65);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#824133").s().p("AqLZDICAAAIAIAAIAAADIgIABIgmAAQgyAAgogEgAKD4eIAAgEIAAgkQANAOgFAWIAAAEIgIAAg");
	this.shape_118.setTransform(958.0926,327.5267);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#341914").s().p("EBOmAEfIAAgEIAAghQAOANgFAUIgBAEIgIAAgEhOvACaIAAgDIAAgbIAIAAIAAAbIAAADIgIAAgEBOOgD2IAAgDIAAglQAOAOgFAXIgBADIgIAAg");
	this.shape_119.setTransform(518.5276,188.875);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3E1E18").s().p("AAAAaQgDgaAAgZIAHAAIAAAwIAAAEIgEgBg");
	this.shape_120.setTransform(1021.9625,155.55);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#814032").s().p("AADDMIAAgDIAAglQAOAOgFAXIgBADIgIAAgAgMicIAAgEIAAgrQANASgEAZIgBAEIgIAAg");
	this.shape_121.setTransform(1022.8426,168.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A65241").s().p("AAAAZQgDgZAAgYIAHAAIAAAtIAAAEg");
	this.shape_122.setTransform(1018.75,152.05);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6B352A").s().p("EhOeAE4IAAgDIAAgbIAIAAIAAAbIAAADIgIAAgEBOXgEIIAAgDIAAgsIAIAAIAAAsIAAADIgIAAg");
	this.shape_123.setTransform(516.825,176.075);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#341A14").s().p("AgEAXIAAgDIAAgqQANARgGAZIAAADIgHAAg");
	this.shape_124.setTransform(1018.84,142.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#402019").s().p("AAAAhQgDghAAggIAHAAIAAA+IAAADg");
	this.shape_125.setTransform(1021.15,134.65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A95442").s().p("EhEXAcMIhYAAIAAgDIBYAAIAIAAIAAADIgIAAgEhPiACSIAAgDIAAgYIAIAAIAAAYIAAADIgIAAgEBPggEnQgEgYgBgZIAIAAIAAAvIAAADIgDgBgEBPYgHgQgFgXAAgYIAIAAIAAAsIAAADgEBO/gPoQgDgWAAgVIAIAAIAAAnIAAAEgEBOvgVPQgDgXAAgXIAIAAIAAArIAAAEIgFgBgEhOngVmQgDgVAAgWIAIAAIAAAoIAAADgEBOggbWQgFgbAAgaIAIAAIAAAxIAAAEg");
	this.shape_126.setTransform(515.6,308.75);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#834133").s().p("AgEAXIAAgDIAAgqQANARgGAZIAAADIgHAAg");
	this.shape_127.setTransform(1021.2526,129.025);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6C352A").s().p("ALsSTIAAgEIAAghIAIAAIAAAhIAAAEIgIAAgALMHUIAAgEIAAgkIAIAAIAAAkIAAAEIgIAAgAK8BGIAAgEIAAg1IAIAAIAAA1IAAAEIgIAAgArzySIA4AAIAIAAIAAACQggACggAAIAAgEg");
	this.shape_128.setTransform(947.55,121.375);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#AD5644").s().p("EhOiAOnIAAgDIAAgXIAIAAIAAAXIAAADIgIAAgEBOvgC5QgEgpAAgqIAIAAIAABQIAAADgEhOqgLjIAAgDIAAgeQAOALgGATIAAADIgIAAgEhOygOCIAAgDIAAghQAOAMgGAVIAAADIgIAAg");
	this.shape_129.setTransform(513.175,127.025);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#582C22").s().p("AAAA6QgDg6AAg5IAHAAIAABwIAAADg");
	this.shape_130.setTransform(1020.35,106.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3B1D17").s().p("EAyoAefIAAgDIBJAAIAIAAIAAADIgIAAIgkABIglgBgEBPaAdqIAAgXIAIAAIABADQAFAQgOAIIAAgEgEhPkAD6IAAgDIAAgXIAIAAIAAAXIAAADIgIAAgEhO8gKiIAAgXIAIAAIABADQAFAQgOAHIAAgDgEhO0gMdIAAghIAIAAIABADQAFAVgOAMIAAgDgEBOygeBIAAgDIAAgbIAIAAIAAAbIAAADIgIAAg");
	this.shape_131.setTransform(515.7026,293.0125);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B05845").s().p("EhO4AH4IAAgDIAAghIAIAAIAAAhIAAADIgIAAgEBOugHdIAAgaIAIAAIABADQAFASgOAJIAAgEg");
	this.shape_132.setTransform(516.9026,141.275);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#AE5744").s().p("EhOmABIIAAgEIAAghQAOAMgGAVIAAAEIgIAAgEBOfgAsIAAgDIAAgXIAIAAIAAAXIAAADIgIAAg");
	this.shape_133.setTransform(515.2,94.35);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#773B2E").s().p("EAUwAgVIBAAAIAIAAIAAACQglACgjAAIAAgEgEBPDAerIAAgDIAAgXIAIAAIAAAXIAAADIgIAAgEBODgd5IAAgDIAAgbIAIAAIAAAbIAAADIgIAAgEhPLgegIAAgEIAAghIAJAAIAAAhIAAAEIgJAAgEBOLgf6IAAgDIAAgbIAJAAIAAAbIAAADIgJAAg");
	this.shape_134.setTransform(518,284.225);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#AF5744").s().p("EhOvAKXIAAgDIAAgbIAJAAIAAAbIAAADIgJAAgEhOWgBFIAAgDIAAghQAOAMgGAVIAAADIgIAAgEBOngJ8IAAgDIAAgXIAJAAIAAAXIAAADIgJAAg");
	this.shape_135.setTransform(515.2,140.625);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#793C2F").s().p("EgReAgSIA4AAIAIAAIAAABQggADggAAIAAgEgARV/3IAAgdIAIAAIAAADQAGATgOAKIAAgDg");
	this.shape_136.setTransform(910.6526,281.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#783C2F").s().p("EBFfAhPQAgAAAgACIAAABIgIABIgSAAQgYAAgOgEgEhPEgKLIAAgDIAAgbIAIAAIAAAbIAAADIgIAAgEBO6gg0IAAgeIAIAAIABADQAFATgOALIAAgDg");
	this.shape_137.setTransform(517.3026,275.1267);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#AB5543").s().p("EhO7AQ+IAAgXIAIAAIABADQAFAQgOAIIAAgEgEhOzAPUIAAgYIAIAAIABAEQAFAQgOAHIAAgDgEBO0gQjIAAgDIAAgaIAIAAIAAAaIAAADIgIAAg");
	this.shape_138.setTransform(514.8,170.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#361A15").s().p("EBO+AOGIAAgEIAAghQAOANgFAUIgBAEIgIAAgEhPIgCKIAAgEIAAghQAOANgFAUIgBAEIgIAAgEBOOgDaIAAgEIAAg0QAOAWgGAeIAAAEIgIAAgEBOegLqIAAgaIAIAAIABAEQAFARgOAJIAAgEgEBOmgNqIAAgbIAIAAIABADQAFASgOAIIAAgCg");
	this.shape_139.setTransform(516.9026,144.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3A1D16").s().p("AgLCQIAAgDIAAgbIAIAAIAAAbIAAADIgIAAgAgDAPIAAgEIAAgZIAHAAIAAAZIAAAEIgHAAgAAEhyIAAgDIAAgaIAIAAIAAAaIAAADIgIAAg");
	this.shape_140.setTransform(1021.95,73.475);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(153,76,60,0.996)").s().p("AhQgBICYAAIAIAAIAAACIgIAAIgsABQg7AAgxgDg");
	this.shape_141.setTransform(988.55,3.2017);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3B1D16").s().p("AAYACIg3AAIAAgDQAfAAAgABIAAACIgIAAg");
	this.shape_142.setTransform(999.825,3.15);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F97C61").s().p("AAMMyIAAgEIAAhWIAAgDIAAgyIABgDQAEgXgNgOIAAgEIAAhVIAAgEIAAgxIABgEQAEgXgMgOIAAgDIAAhSIAAgEIAAgxIABgEQAEgZgNgSIAAgEIAAhjIAAgDIAAg/IAAgDQAGgagOgRIAAgEIAAiKIAAgDIAAhyIAAgCIAAgbIAAgEIAAgkQAOgJgGgSIAAgDIAAgDIAAgaIAAgEIAAgbIAAgDIAAg/QANgKgEgTIgBgEIAAgDIAAgbIAAgDIAAg/QANgLgFgTIgBgDIAAgDIAAgbIAAgEIAAg7QAOgNgFgUIgBgDIAAgEIAAgbIAAgDIAAg8IAIAAIAAJSIAAJQIAAHBIgIAAg");
	this.shape_143.setTransform(1022.75,121.55);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#AC5543").s().p("EhOzAJRQgEgSAAgSIAJAAIAAAhIAAADgEhO6AGzQgFgUAAgVIAIAAIAAAlIAAAEgEhOmADlIAAgEIAAggQAOAMgGAUIAAAEIgIAAgEBOwgGyIAAgDIAAgaIAIAAIAAAaIAAADIgIAAgEBO4gIzIAAgDIAAgbIAIAAIAAAbIAAADIgIAAg");
	this.shape_144.setTransform(516,94.85);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#391C16").s().p("EhPUAS5IAAgYIAIAAIABAEQAFAPgOAIIAAgDgEhPMAROIAAgXIAIAAIABAEQAFAPgOAIIAAgEgEBOigIXIAAgdIAIAAIAAADQAGATgOAKIAAgDgEBOqgKYIAAgeIAIAAIAAAEQAGASgOALIAAgDgEBPKgSeIAAgdIAIAAIABADQAFATgOALIAAgEg");
	this.shape_145.setTransform(514.9026,149.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#753A2E").s().p("EAi0AkJIBRAAIAHAAIAAABQgsADgsAAIAAgEgEhOygSuIAAgDIAAgiIAIAAIAAAiIAAADIgIAAgEBOkgZ/IAAgDIAAgaIAIAAIAAAaIAAADIgIAAgEBOsgjxIAAgEIAAgWIAHAAIAAAWIAAAEIgHAAg");
	this.shape_146.setTransform(518,257.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#7B3D30").s().p("AgHBPIAAggIAHAAIABADQAFAUgNANIAAgEgAAAguIAAgDIAAghIAIAAIAAAhIAAADIgIAAg");
	this.shape_147.setTransform(1023.95,44.45);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3A1C16").s().p("EhPOACJQgFgTAAgUIAIAAIAAAkIAAAEIgDgBgEBPDAAWIAAgEIAAgZIAIAAIAAAZIAAAEIgIAAgEBPLgBrIAAgDIAAgbIAIAAIAAAbIAAADIgIAAg");
	this.shape_148.setTransform(517.2,46.925);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(66,33,25,0.278)").s().p("AgEavIAApRIAApSIAHAAIAAC6IAAADIAABuIAAADIAAJRIAAJIIAAADQAGBcgNBUIAAnXgAAAkCQgEgxAAgyIAAgDIAAgvIAAgDIAAghIAAnAIAApSIAApRIAAgEIAAghIAAgDIAAgbIAAgDIAAghIAHAAIAAJSIAAJRIAAJSIAACOg");
	this.shape_149.setTransform(1025.24,247.725);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(44,21,17,0.518)").s().p("AgDAWIAAgEIAAgnIAHAAIAAAnIAAAEIgHAAg");
	this.shape_150.setTransform(1025.15,27.35);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#361B15").s().p("EhOYAP1IAAgDIAAgaIAJAAIAAAaIAAADIgJAAgEhOgAKPIAAhGQAPAhgLAoIgEABIAAgEgEhODAI1QgEgSAAgSIAIAAIAAAhIAAADgEhPIgC3IAAgDIAAghQAOAMgFAVIgBADIgIAAgEhPQgFZIAAgEIAAgeQAOALgFATIgBAEIgIAAgEhPYgH5IAAgDIAAghQAOAMgFAVIgBADIgIAAgEBO+gLXIAAgaIAIAAIABADQAFASgOAJIAAgEgEBPOgPZIAAgbIAIAAIABADQAFARgOAJIAAgCg");
	this.shape_151.setTransform(515.3026,116.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#71382C").s().p("EBOsAE4IAAgDIAAgbIAIAAIAAAbIAAADIgIAAgEBO0AC3IAAgEIAAgaIAIAAIAAAaIAAAEIgIAAgEBO8AA1IAAgDIAAgbIAIAAIAAAbIAAADIgIAAgEhPTgBwIAAgDIAAghIAIAAIAAAhIAAADIgIAAgEBPLgDMIAAgEIAAgaIAIAAIAAAaIAAAEIgIAAgEAmegEfIBoAAIAIAAIgBABQg4ACg3AAIAAgDgARuk3QAgAAAgACIABACIgIAAIgVAAQgXAAgNgEg");
	this.shape_152.setTransform(515.6,36.125);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#AC5643").s().p("EhPLARaIAAgDIAAgYIAIAAIAAAYIAAADIgIAAgEhOaAEhIAAgEIAAghQAOAMgGAVIAAAEIgIAAgEhPGAAKQgFgSAAgRIAIAAIAAAfIAAAEIgDAAgEBO8gO6IAAgEIAAgaIAHAAIAAAaIAAAEIgHAAgEBPDgQ8IAAgDIAAgaIAIAAIAAAaIAAADIgIAAg");
	this.shape_153.setTransform(516.4,121.05);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(254,126,99,0.996)").s().p("EAU/AmKIhQAAIhBAAI2fAAI2fAAI2gAAIgIAAIgoAAIgBgBQgggCggAAIgIAAIgQAAIAAgBQgggDggAAIgIAAIgYAAIgBgBQgkgBgkAAIgIAAIggAAIAAgCQgkgCgkAAIgJAAIgYAAIAAgCQgogCgoAAIgIAAIggAAIgBgBQgfgCghABIgIAAIhQAAIgBgCQgrgCgtAAIgIAAIiIAAIAAgCQiRgBiRAAIgIAAIhYAAIAAADIgJAAIhIAAIgIAAIhpAAIAAAEQh9ADh7AGQgiACgrAFQhkAKgBgkIABgEQAFgTgOgLIAAgDIAAguIAAgEIAAgXIAAjoIAApRIAApSIAAgDIAAgfIAAgDIAAgdIAAgEIAAgXQAOgKgFgQIgBgEIAAgDIAAgYIAAgDIAAgXIAAgEIAAgXIAAgDIAAghQAOgIgFgPIgBgEIAAgDIAAguIAAgDIAAgiQAOgHgFgQIgBgDIAAgDIAAgsIAAgDIAAgeQAOgIgFgPIgBgEIAAgDIAAgrIAAgDIAAgeQAOgIgFgPIgBgEIAAgDIAAgrIAAgDIAAgfQAOgGgFgQIgBgEIAAgDIAAgrIAAgDIAAgeQAOgJgFgSIgBgDIAAgEIAAgrIAAgDIAAgdQAOgHgFgQIgBgDIAAgEIAAguIAAgDIAAghQAPgKgGgRIgBgDIAAgEIAAgXIAAgEIAAgWIAAgEIAAghQAPgJgGgRIAAgEIAAgDIAAgYIAAgDIAAgaIAAgDIAAgpQAOgMgGgUIAAgEIAAgDIAAgaIAAgEIAAgaIAAgEIAAgrQAOgPgGgZIAAgDIAAgEIAAggIAAgEIAAghIAAgEIAAhwIAAgEIAAggIAAgEIAAghIAAgEQAGgUgOgMIAAgEIAAgxIAAgEIAAghIAAgEIAAggIAAgEQAGgVgOgMIAAgEIAAgtIAAgEIAAgkIAAgEIAAghIAAgEQAGgUgPgNIAAgDIAAguIAAgDIAAghIAAgEIAAghIABgEQAGgUgPgMIAAgEIAAgxIAAgEIAAghIAAgEIAAggIABgEQAFgVgOgMIAAgEIAAguIAAgDIAAgkIAAgEIAAghIABgEQAFgSgOgLIAAgDIAAgvIAAgEIAAgkIAAgDIAAgiIABgCQAFgWgOgMIAAgDIAAgvIAAgDIAAgkIAAgDIAAgiIABgDQAFgTgOgLIAAgDIAAgyIAAgEIAAgkIAAgDIAAgeIABgDQAFgVgOgNIAAgDIAAguIAAgEIAAghIAAgDIAAghIABgEQAFgVgOgLIAAgEIAAgyIAAgDIAAgvIAAgDIAAghIAwAAIAIAAQAxAAAwgBIAAgCIBIAAIAIAAIBxAAIAIAAQAkAAAkgCIABgCIDBAAIAIAAIBoAAIAIAAIWgAAIWgAAIWgAAICgAAIC5AAIAIAAQAaAGAugCIAIAAIAwAAIAIAAQAaAFAvgCIAIAAIBgAAIAIAAQASAGAngDIAIAAIAoAAIAIAAQASAGAmgCIAIAAIA5AAIAIAAQAaAFAugCIAIAAQBNAABEADIAIAAQASAGAmgCIAIAAIAYAAIAIAAQAXAFAqgCIAIAAIKjAaIAJAAQASAGAmgCIAIAAIBAAAIAIAAQAmAGA7gDIAIAAQCFAACEgBIAAgCIBhAAIAIAAQAoAAAogCIAAgCQHAgOGtgWIAIAAQAgAAAggCIAAgBIAZAAIAIAAQAggBAggBIAAgCIAYAAIAIAAQAsAAAsgCIABgBIBAAAIAIAAQAoAAAogBIAAgCIAxAAIAIAAIA4AAIAIAAIA4AAIAIAAQAtAAAsgCIAAgCIFyAAIAIAAQBCAGBXgCIAIAAIA4AAIAIAAIBpAAIAIAAQAeAFAygCIAIAAIAAA4IAAAEIgIAAIAAAaIAAADIAAAbIAAADIAAAbIAAADIAAAlIAAADIgIAAIAAAaIAAAEIAAAXIAAADIAAAeIAAADIAAAlIAAADIgIAAIAAAbIAAADIAAAbIAAADIAAAaIAAAEIAAAkIAAAEIgIAAIAAAaIAAADIAAAbIAAADIAAAbIAAADIAAAlIAAADIgIAAIAAAaIAAAEIAAAaIAAAEIAAAaIAAADIAAAlIAAAEIgIAAIAAAWIAAAEIAAAaIAAAEIAAAdIAAAEIAAAlIAAADIgIAAIAAAXIAAADIAAAbIAAADIAAAeIAAADIAAAlIAAADIgIAAQAAAqAEApIAEAAIAABTIAAADIAAA1IAAADIAAA1IAAAEQAAAaAEAbIAEAAIAAA/IAAAEIAAArIAAACIAAAsIAAADQAAAZAEAZIAEAAIAAA1IAAADIAAAlIAAADIAAAkIAAAEQAAAXAEAXIAEABIAAA1IAAACIAAAlIAAAEIAAAkIAAADQAAAYAEAWIAEAAIAAA2IAAADIAAAlIAAADIAAAhIAAAEQAAAVAEAWIAEAAIAAAxIAAAEIAAAgIAAAEIAAAhIAAAEQAAAWAEAYIAEAAIAAAxIAAAEIAAAhIAAAEIAAAhIAAADQAAAWAEAVIAEAAIAAA0IAAADIAAAiIAAADIAAAkIAAADQAAAYAEAXIAEAAIAAA1IAAAEIAAAkIAAADIAAAlIAAADQABAZADAYIAEABIAACIIAAADIAABCIAAAEIAAJRIAAJSIAAHXIAABaIAAADIgIAAIAAAXIAAADIAAAYIAAADIAAAXIAAAEIAAAdIAAAEIgIAAIAAAkIAAAEIAAABQjagOjwgHIgBgCQgfgCghAAIgIAAIgQAAIAAgCQgggBggAAIgIAAIgYAAIgBgCQgngBgpAAIgIAAIggAAIAAgCQgwgCgwAAIgIAAIgxAAIAAgCQgsgBgsAAIgIAAIiJAAIAAgCQkFgBkGAAIgIAAIhYAAIAAADIgIAAIhhAAIgIAAIg4AAIgIAAIhpAAIAAADIgIAAIhgAAIgIAAIhRAAIAAAEIgIAAIhQAAIgIAAIhJAAIAAADIgIAAIhIAAIgIAAIg5AAIAAADIgIAAIggAAIgIAAIhQAAIAAAEIgIAAIgpAAIgIAAIhQAAIAAADIgIAAIgwAAIgIAAIg5AAIAAADIgIAAIggAAIgIAAIhIAAIAAAEIgIAAQh9AEiFACIgIAAIhAAAIAAAEIgIAAIgYAAIgIAAIhBAAIAAACIgIABQhAADhJAAIgIAAIhAAAIAAADIgIAAg");
	this.shape_154.setTransform(515.6125,247.25);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#5A2C23").s().p("AgrgBQArAAAsABIAAABIgIAAIgcABQgeAAgVgDg");
	this.shape_155.setTransform(1018.725,3.5118);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(2,1,0,0.957)").s().p("EgMgAm6IqDAAQlqgHlpgNQqQgWqggVIAAgBQhBABgwgGIgIAAIhAAAIgBgBQgfgDggAAIgJAAIhIAAIAAgBQgsgBgtAAIgIAAIhwAAIAAgCQjJgCjJAAIgIAAIhBAAIAAAEIgIAAIhYAAIgIAAIhJAAIAAACIgIABQgwACg1ABIgkAAIgIABQg4AEhIgCIAAADIgIABQhTAIgtgJIgFAAQgZjYgLjdIAAgEQAGgpgOgiIAAgEIAAnHQAOgzgGg9IAAgEIAAgDIAAjQIAopBIAJiFQAOgJgGgSIAAgDIAAgEIAAg7QAOgLgGgTIAAgDIAAgEIAAgkIAAgDIAAgeQANgIgFgQIgBgDIAAgDIAAgrIAAgEIAAgdQAOgIgFgQIgBgDIAAgDIAAgvIAAgDIAAggQAOgIgFgPIgBgEIAAgDIAAgrIAAgDIAAgeQAOgKgFgRIgBgDIAAgDIAAgYIAAgDIAAgYIAAgDIAAgkQAOgHgFgRIgBgDIAAgDIAAgXIAAgDIAAgYIAAgDIAAgoQAPgMgGgVIAAgEIAAgCIAAgbIAAgDIAAgbIAAgEIAAgnQAOgQgGgYIAAgDIAAgDIAAgiIAAgDIAAghIAAgDIAAgyIADgBQALgogOggIAAgDIAAgvIAAgDIAAgoIAAgEIAAgdIAAgDQAGgVgOgMIAAgEIAAgvIAAgDIAAghIAAgDIAAgiIAAgCQAGgWgPgMIAAgDIAAguIAAgEIAAglIAAgCIAAgiIABgDQAFgVgOgNIAAgCIAAgvIAAgEIAAggIAAgEIAAghIABgEQAFgUgOgNIAAgDIAAgxIAAgEIAAghIAAgEIAAghIABgDQAFgVgOgMIAAgEIAAguIAAgDIAAglIAAgDIAAghIABgDQAFgTgOgLIAAgEIAAgxIAAgEIAAghIAAgDIAAghIABgEQAFgUgNgMIAAgEIAAgNIAAgEIAAghIAAgDIAAghIAAgEIAAgQIAAgEQAGgbgOgTIAAgDIAAg5IAAgDIAAgkIAAgDQAGgZgOgQIAAgDQgFiWgMiUQK6gKK+gFQHggDHVgGIWgAAICxAAQBmAGB7gCIAIAAQLGAEKwAOIGLAIQASAGAmgCIAIAAIAwAAIAIAAQAXAFAqgCIAIAAIAgAAIAIAAQASAGAmgDIAJAAIAfAAIAIAAQATAGAmgCIAIAAQFeAKFNAQIAIAAQATAGAmgDIAIAAIBYAAIAIAAQAXAHAqgDIAIAAID6AAIAIAAQA3AAA4gCIABgCIAwAAIAJAAQAfABAggCIABgCIOUgmIABgCQKtgWLCAOIBpACIgJDhIAAADIgIAAIAAAoIAAAEIAAAhIAAADIgIAAIAAAbIAAADIAAAhIAAADIAAA8IAAADIgIAAIAAAbIAAAEIAAAgIAAAEIAAA7IAAAEIgIAAIAAAbIAAADIAAAdIAAAEIAAA/IAAADIgHAAIAAAbIAAADIAAAeIAAADIAAA/IAAADIgIAAIAAAbIAAAEIAAAaIAAADIAAAbIAAADIAAAkIAAAEIgIAAIAAAbIAAACQAAA7ADA6IAFAAIAACLIAAAEIAAArIAAADQAAAhADAhIAFAAIAABjIAAAEIAAArIAAAEQAAAaAEAaIADABIAABSIAAADIAAAlIAAAEQABAaAEAbIADAAIAABVIAAAEIAAAlIAAADQAAAbAFAaIADAAIAABWIAAAEIAAAhIAAADQABAZAEAYIADAAQAAAyAFAyIADAAQAIElAOEiQAPEjgBEoQgBApAOAgIAAJSIAADHQgOAqABAyQAGEpgqEYIgHAAQgwgHhBAAIAAgBQgdgCgTgDIgJAAQkhgPkygIIAAgCQgggCggABIgIAAIhBAAIAAgCQgsgCgsAAIgIAAIhwAAIgBgCQgjgBglAAIgIAAIiAAAIgIAAIkiAAIgIAAIiRAAIgIAAIhIAAIAAADIgIAAIiBAAIgIAAIg5AAIAAAEIgIAAIiJAAIgIAAIg4AAIAAADIgIAAIhoAAIgIAAIhIAAIAAADIgIAAIhBAAIgIAAIhBAAIAAAEIgHAAIg5AAIgIAAIg4AAIAAACIgIAAIg5AAIgIAAIhAAAIAAAEIgIAAIgwAAIgIAAIg4AAIAAAEIgIAAQhMADhVgBIgIAAIg5AAIAAAEIgXAAIgJAAIgIABQg5AEhHgCIAAADQoAAOn3AQQqdAVq5AJIgIAAIhwAAIAAADIgJAAgEgZ8AmoQK+ANK6gQQKugPKYgTQAugBAagHQA1AAA0gBIAAgCIBRAAIAIAAQAjAAAlgBIAAgCQBIAABBgDIAIgBQAjABAlgCIAAgBIAYAAIAIAAQAkAAAkgCIAAgCQCFgCB9gEIAIAAQAogBAogBIABgCIAfAAIAIAAQAhAAAfgCIABgBIAwAAIAIAAQAsAAAsgCIAAgBIApAAIAIAAQAsgBAsgBIABgCIAfAAIAIAAQAhAAAfgCIABgBIBIAAIAIAAQAoAAAogCIABgBIBQAAIAIAAQAsAAAtgCIAAgCIBhAAIAHAAIBpAAIAIAAQAgAAAggCIAAgBIBhAAIAIAAIBZAAIAHAAIIEAAIAIAAICIAAIAIAAQAeAFAzgCIAHAAIAxAAIAIAAQAiAGA3gCIAHAAIAhAAIAIAAQAaAFAugCIAIAAIAYAAIAIAAQASAGAngDIAIAAIAPAAIAIAAQATAGAmgCIAIAAQDwAHDaAOIAAgBQAOgPgFgWIgBgDIAAgEIAAgdQAOgIgFgQIgBgDIAAgDIAAgYIAAgDIAAgXIAAgDIAAhaQAOhUgGhcIAAgDQAVkhgCkqQgCkpgIkmIAAgCQAGg8gPgyIAAgEIAAi5IABgEQAFglgOgdIAAgDIAAiIIAAgDIAAgvIAAgDIAAglIABgDQAFgWgOgOIAAgEIAAg1IAAgDIAAgsIAAgDIAAgkIABgDQAFgVgOgMIAAgDIAAg1IAAgEIAAgnIAAgDIAAghIABgEQAFgVgOgMIAAgEIAAgxIAAgDIAAgrIAAgEIAAghIABgEQAFgUgNgMIAAgEIAAgxIAAgEIAAgnIAAgEIAAghIAAgDQAFgXgNgOIAAgDIAAg2IAAgCIAAgsIAAgDIAAgkIAAgEQAFgWgNgPIAAgCIAAg1IAAgEIAAgrIAAgEIAAgkIAAgDQAFgXgNgOIAAgDIAAg1IAAgEIAAguIAAgDIAAgsIAAgCQAFgbgOgQIAAgEIAAg/IAAgEIAAgxIAAgEIAAg1IAAgDQAGgfgOgWIAAgDIAAhTIAAgEIAAhPIAAgDIAAglQAOgKgGgTIAAgEIAAgDIAAgbIAAgDIAAgXIAAgDIAAglQAOgLgFgTIAAgDIAAgEIAAgaIAAgEIAAgWIAAgEIAAglQAOgJgGgRIAAgDIAAgEIAAgaIAAgEIAAgaIAAgDIAAglQAOgJgGgRIAAgEIAAgDIAAgbIAAgDIAAgaIAAgEIAAgkQANgJgFgSIAAgDIAAgDIAAgbIAAgDIAAgbIAAgDIAAglQANgKgFgTIgBgEIAAgDIAAgXIAAgEIAAgaIAAgDIAAglQAOgJgFgRIgBgEIAAgDIAAgbIAAgDIAAgaIAAgEIAAg4IAAgBQgrgCgtAAIgIAAIhpAAIAAgCQgfgCghAAIgIAAIiZAAIgIAAIlyAAIgIAAIhRAAIgIAAIg3AAIgJAAIg4AAIAAAEIgIAAIgwAAIgIAAIhIAAIAAADIgJAAIhAAAIgIAAIhQAAIAAADIgIAAIgZAAIgIAAIg4AAIAAAEIgIAAIgZAAIgHAAIg5AAIAAADIgIAAQmtAWm/AOIgJAAIhIAAIAAAEIgIAAIhhAAIgHAAIkCAAIgIAAIhhAAIgIAAIhAAAIgBgCQgfgBgggBIgJAAIqjgaIgBgCQgjgCglABIgIAAIgXAAIgBgCQgggCggAAIgIAAQhEgDhNAAIAAgCQgogBgoAAIgIAAIg5AAIAAgCQgggCggAAIgIAAIgoAAIAAgCQghgBgfAAIgIAAIhhAAIgBgBQgngCgpAAIgIAAIgvAAIgBgCQgogCgoAAIgIAAIi5AAQhngFh6gCQqzgHrMgDQrVgBrDAEQrKAEq9AHIgIAAIhpAAIAAADIgIAAIjBAAIgIAAIhAAAIgIAAIhyAAIAAAEIgIAAIhIAAIgIAAIhYAAIAAADIgIAAIgxAAIgHAAIAAAhIAAADQAAAZAEAZIADAAIAAAyIAAAEIAAAgIAAAEIAAAhIAAADQABASAEATIADAAIAAAuIAAADIAAAiIAAADIAAAeIAAADQAAAUAFATIADABIAAAyIAAADIAAAeIAAADIAAAiIAAADQAAATAFAUIADAAIAAAvIAAADIAAAiIAAACIAAAiIAAADQAAAUAFATIADABIAAAvIAAADIAAAdIAAAEIAAAhIAAAEQAAATAEAUIAFAAIAAAuIAAAEIAAAhIAAAEIAAAgIAAAEQAAASADASIAFABIAAAxIAAAEIAAAgIAAAEIAAAhIAAAEQAAASADASIAFAAIAAAuIAAADIAAAhIAAAEIAAAhIAAAEQgBATAFAUIAEABIAAAtIAAAEIAAAhIAAAEIAAAgIAAAEQAAASAEATIAEAAIAAAxIAAAEIAAAgIAAAEIAAAhIAAAEQAAASAEASIAEAAIAABwIAAAEIgIAAIAAAhIAAAEIAAAgIAAAEIAAAoIAAADIAAArIAAAEIgIAAIAAAaIAAAEIAAAaIAAADIAAAhIAAADIAAApIAAADIgIAAIAAAaIAAADIAAAYIAAADIAAAaIAAAEIAAAhIAAAEIgIAAIAAAWIAAAEIAAAXIAAAEIAAAaIAAAEIAAAhIAAADIgIAAIAAAuIAAAEIAAAXIAAADIAAAdIAAADIgJAAIAAArIAAAEIAAAaIAAAEIAAAdIAAAEIgIAAIAAArIAAADIAAAXIAAADIAAAfIAAADIgIAAIAAArIAAADIAAAYIAAADIAAAeIAAADIgIAAIAAArIAAADIAAAYIAAADIAAAeIAAADIgIAAIAAAsIAAADIAAAXIAAADIAAAiIAAADIgHAAIAAAuIAAADIAAAXIAAAEIAAAhIAAADIgIAAIAAAXIAAAEIAAAXIAAADIAAAYIAAADIAAAaIAAAEIAAAXIAAAEIgIAAIAAAdIAAADIAAAfIAAADIAAB0IAAADIgFAAQADBUgPBLIAADfIAAADIgIAAIAAC2IAAAEQgDEpAMEiQABAZAPASIAABfIAAAEQAAAOADANIAFAAIAAAuIAAADQAAARADARIAFAAQABAkBjgKQArgFAigCQB7gGB+gDQA4gBA4gBIAAgCIBIAAIAJAAIBYAAIAIAAIEaAAIAIAAICIAAIAIAAQAfAGAygCIAIAAIBQAAIAIAAQASAFAngCIAIgBIAgAAIAIAAQAaAHAvgDIAIAAIAXAAIAJAAQAWAGAqgCIAIAAIAhAAIAIAAQAVAFArgCIAIgBIAYAAIAIAAQASAGAngCIAHAAIAQAAIAIAAQATAGAlgDIAJAAIAoAAIAIAAQAvAHBBgDIAJgBQKEAgKzANg");
	this.shape_156.setTransform(515.2,249.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_orange, new cjs.Rectangle(0,0,1030.4,498.1), null);


(lib.txt_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("לחץ על כפתור כדי\nלקבע את הבחירה", "normal 300 22px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 168;
	this.text.parent = this;
	this.text.setTransform(0,-27.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.txt_info_again = new lib.txt_info_again();
	this.txt_info_again.name = "txt_info_again";
	this.txt_info_again.setTransform(30.95,-12.7,1,1,0,0,0,25.5,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"לחץ על כפתור כדי\nלקבע את הבחירה",lineWidth:168}}]}).to({state:[{t:this.text,p:{text:"לחץ         על הכפתור\nכדי לצאת מהקיבוע",lineWidth:191}},{t:this.txt_info_again}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.3,-30.3,194.7,59.6);


(lib.mini_popup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer_1
	this.text = new cjs.Text(":שאלות לפרטנר", "normal 600 40px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 306;
	this.text.parent = this;
	this.text.setTransform(-13.5,-76.95);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.mini_popup_txt = new cjs.Text("כשיוצאים לפאב צריך לקחת בחשבון שככל הנראה תזמינו משהו לשתות או לאכול ולכן הביאו איתכם אמצעי תשלום .בהתאם, קחו זאת בחשבון בבחירת מקום המפגש", "normal 400 40px 'Rubik'");
	this.mini_popup_txt.name = "mini_popup_txt";
	this.mini_popup_txt.textAlign = "right";
	this.mini_popup_txt.lineHeight = 49;
	this.mini_popup_txt.lineWidth = 910;
	this.mini_popup_txt.parent = this;
	this.mini_popup_txt.setTransform(441.45,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mini_popup_txt);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("EhDggXIMCHBAAAQEWAADEDFQDFDEAAEWIAAZTQAAEWjFDEQjEDFkWAAMiHBAAAQkWAAjEjFQjFjEAAkWIAA5TQAAkWDFjEQDEjFEWAAg");
	this.shape.setTransform(-13.5,41.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhDgAXJQkVAAjFjFQjEjEAAkWIAA5TQAAkWDEjEQDFjFEVAAMCHBAAAQEVAADFDFQDEDEAAEWIAAZTQAAEWjEDEQjFDFkVAAg");
	this.shape_1.setTransform(-13.5,41.475);

	this.instance = new lib.pub_txt_money();
	this.instance.setTransform(-37,82.6,1,1,0,0,0,456.6,82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(7,1,1).p("EhDogRKMCHRAAAQEWAADEDFQDFDEAAEWIAANXQAAEWjFDEQjEDFkWAAMiHRAAAQkWAAjEjFQjFjEAAkWIAAtXQAAkWDFjEQDEjFEWAAg");
	this.shape_2.setTransform(-37.05,77.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhDnARLQkXAAjEjFQjEjEgBkWIAAtXQABkWDEjEQDEjFEXAAMCHQAAAQEVAADFDFQDEDEAAEWIAANXQAAEWjEDEQjFDFkVAAg");
	this.shape_3.setTransform(-37.05,77.975);

	this.instance_1 = new lib.pubimange2();
	this.instance_1.setTransform(-552,-446,0.8951,0.8951);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(7,1,1).p("EhCLgzWMCEXAAAQEWAADEDFQDFDEAAEWMAAABRvQAAEWjFDFQjEDEkWAAMiEXAAAQkWAAjEjEQjFjFAAkWMAAAhRvQAAkWDFjEQDEjFEWAAg");
	this.shape_4.setTransform(-93.599,-140.05,1.0483,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EhCLAzXQkWAAjEjFQjFjEAAkWMAAAhRvQAAkWDFjEQDEjFEWAAMCEXAAAQEWAADEDFQDFDEAAEWMAAABRvQAAEWjFDEQjEDFkWAAg");
	this.shape_5.setTransform(-93.599,-140.05,1.0483,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(7,1,1).p("EhHHgm7MCOPAAAQEWAADEDFQDFDEAAEWMAAAA45QAAEWjFDEQjEDFkWAAMiOPAAAQkWAAjEjFQjFjEAAkWMAAAg45QAAkWDFjEQDEjFEWAAg");
	this.shape_6.setTransform(1.6,-42.1869,1,0.9244);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EhHGAm8QkWAAjFjFQjEjEgBkWMAAAg45QABkWDEjEQDFjFEWAAMCOOAAAQEWAADEDFQDFDEAAEWMAAAA45QAAEWjFDEQjEDFkWAAg");
	this.shape_7.setTransform(1.6,-42.1869,1,0.9244);

	this.instance_2 = new lib.park_txt_money();
	this.instance_2.setTransform(-33.9,-38.25,1,1,0,0,0,492.8,228.3);

	this.instance_3 = new lib.parkimage2();
	this.instance_3.setTransform(-508,-450,0.9061,0.9061);

	this.instance_4 = new lib.park_txt_equipment();
	this.instance_4.setTransform(-62.3,78.35,1,1,0,0,0,453,101.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(7,1,1).p("EhBQgSZMCChAAAQEWAADFDEQDEDFAAEWIAAP1QAAEWjEDFQjFDEkWAAMiChAAAQkWAAjFjEQjEjFAAkWIAAv1QAAkWDEjFQDFjEEWAAg");
	this.shape_8.setTransform(-62.275,75.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EhBQASaQkWAAjFjEQjEjFAAkWIAAv1QAAkWDEjFQDFjEEWAAMCChAAAQEWAADFDEQDEDFAAEWIAAP1QAAEWjEDFQjFDEkWAAg");
	this.shape_9.setTransform(-62.275,75.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(7,1,1).p("EhEfgorMCI/AAAQEWAADFDFQDEDEAAEWMAAAA8ZQAAEWjEDEQjFDFkWAAMiI/AAAQkWAAjFjFQjEjEAAkWMAAAg8ZQAAkWDEjEQDFjFEWAAg");
	this.shape_10.setTransform(11.975,-70.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EhEfAosQkWgBjFjEQjEjEAAkXMAAAg8XQAAkXDEjEQDFjFEWAAMCI/AAAQEWAADFDFQDEDEAAEXMAAAA8XQAAEXjEDEQjFDEkWABg");
	this.shape_11.setTransform(11.975,-70.95);

	this.instance_5 = new lib.escapeRoom_txt_money();
	this.instance_5.setTransform(-33.85,89.15,1,1,0,0,0,451.8,75.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(7,1,1).p("EhD4gQKMCHxAAAQEWAADEDEQDFDFAAEWIAALXQAAEWjFDFQjEDEkWAAMiHxAAAQkWAAjEjEQjFjFAAkWIAArXQAAkWDFjFQDEjEEWAAg");
	this.shape_12.setTransform(-33.85,86.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EhD4AQLQkVAAjFjEQjEjFAAkWIAArXQAAkWDEjFQDFjEEVAAMCHxAAAQEVAADFDEQDFDFgBEWIAALXQABEWjFDFQjFDEkVAAg");
	this.shape_13.setTransform(-33.85,86.05);

	this.instance_6 = new lib.escaperoomimage2();
	this.instance_6.setTransform(-563,-448,1.1329,1.1329);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(7,1,1).p("EhFngd2MCLPAAAQEWAADFDFQDEDEAAEWMAAAAmvQAAEWjEDEQjFDFkWAAMiLPAAAQkWAAjFjFQjEjEAAkWMAAAgmvQAAkWDEjEQDFjFEWAAg");
	this.shape_14.setTransform(6.4,-2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EhFnAd2QkWAAjEjEQjFjFAAkVMAAAgmvQAAkVDFjFQDEjFEWABMCLPAAAQEWgBDEDFQDFDFAAEVMAAAAmvQAAEVjFDFQjEDEkWAAg");
	this.shape_15.setTransform(6.4,-2.4);

	this.instance_7 = new lib.horses_txt_money();
	this.instance_7.setTransform(-0.75,85.25,1,1,0,0,0,491.2,103.8);

	this.instance_8 = new lib.horsesimage2();
	this.instance_8.setTransform(-464,-449,0.9068,0.9068);

	this.instance_9 = new lib.horses_txt_equipment();
	this.instance_9.setTransform(-38,93.4,1,1,0,0,0,450.4,79.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(7,1,1).p("EhCIgPyMCERAAAQEWAADFDFQDEDEAAEWIAAKnQAAEWjEDFQjFDEkWAAMiERAAAQkWAAjFjEQjEjFAAkWIAAqnQAAkWDEjEQDFjFEWAAg");
	this.shape_16.setTransform(-38.025,88.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EhCIAPzQkWAAjFjFQjEjEAAkWIAAqnQAAkWDEjFQDFjEEWAAMCERAAAQEWAADFDEQDEDFAAEWIAAKnQAAEWjEDEQjFDFkWAAg");
	this.shape_17.setTransform(-38.025,88.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(7,1,1).p("EgqggOqMBVAAAAQEXAADEDEQDFDFAAEWIAAIXQAAEWjFDFQjEDEkXAAMhVAAAAQkWAAjEjEQjFjFAAkWIAAoXQAAkWDFjFQDEjEEWAAg");
	this.shape_18.setTransform(51.855,94.675,1.0557,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EgqgAOrQkVAAjFjEQjFjFABkWIAAoXQgBkWDFjFQDFjEEVAAMBVBAAAQEVAADFDEQDFDFgBEWIAAIXQABEWjFDFQjFDEkVAAg");
	this.shape_19.setTransform(51.855,94.675,1.0557,1);

	this.instance_10 = new lib.wine_txt_money();
	this.instance_10.setTransform(-32.25,90.65,1,1,0,0,0,499.2,98.7);

	this.instance_11 = new lib.wineimage2();
	this.instance_11.setTransform(-514,-447,0.8007,0.8007);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(7,1,1).p("Eg0FgVwMBoLAAAQEWAADEDEQDFDFAAEWIAAWjQAAEWjFDFQjEDEkWAAMhoLAAAQkWAAjEjEQjFjFAAkWIAA2jQAAkWDFjFQDEjEEWAAg");
	this.shape_20.setTransform(26.85,50.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Eg0FAVxQkVAAjFjEQjEjFAAkWIAA2jQAAkWDEjFQDFjEEVAAMBoKAAAQEXAADEDEQDFDFAAEWIAAWjQAAEWjFDFQjEDEkXAAg");
	this.shape_21.setTransform(26.85,50.125);

	this.instance_12 = new lib.wallClimb_txt_money();
	this.instance_12.setTransform(29.3,116.05,1,1,0,0,0,474,53);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(7,1,1).p("EhDQgLzMCGhAAAQEWAADEDEQDFDFAAEWIAACpQAAEWjFDFQjEDEkWAAMiGhAAAQkWAAjEjEQjFjFAAkWIAAipQAAkWDFjFQDEjEEWAAg");
	this.shape_22.setTransform(29.3,112.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EhDQAL0QkVAAjFjEQjEjFAAkWIAAipQAAkWDEjFQDFjEEVAAMCGgAAAQEXAADEDEQDFDFAAEWIAACpQAAEWjFDFQjEDEkXAAg");
	this.shape_23.setTransform(29.3,112.975);

	this.instance_13 = new lib.wallclimbimage2();
	this.instance_13.setTransform(-430,-445,0.8961,0.8961);

	this.instance_14 = new lib.wallClimb_txt_equipment();
	this.instance_14.setTransform(-0.45,121.5,1,1,0,0,0,417.7,51.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(7,1,1).p("Eg57gKsMBz3AAAQEVAADFDFQDFDEAAEWIAAAbQAAEWjFDEQjFDFkVAAMhz3AAAQkWAAjEjFQjFjEAAkWIAAgbQAAkWDFjEQDEjFEWAAg");
	this.shape_24.setTransform(-0.4217,118.375,1.0505,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Eg56AKtQkWAAjFjFQjEjEgBkWIAAgbQABkWDEjEQDFjFEWAAMBz1AAAQEWAADFDFQDEDEAAEWIAAAbQAAEWjEDEQjFDFkWAAg");
	this.shape_25.setTransform(-0.4217,118.375,1.0505,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(7,1,1).p("EhAJgXwMCATAAAQEWAADEDFQDFDEAAEWIAAajQAAEWjFDEQjEDFkWAAMiATAAAQkWAAjEjFQjFjEAAkWIAA6jQAAkWDFjEQDEjFEWAAg");
	this.shape_26.setTransform(20.725,35.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("EhAJAXxQkWAAjEjFQjFjEAAkWIAA6jQAAkWDFjEQDEjFEWAAMCATAAAQEWAADEDFQDFDEAAEWIAAajQAAEWjFDEQjEDFkWAAg");
	this.shape_27.setTransform(20.725,35.725);

	this.instance_15 = new lib.cinema_txt_money();
	this.instance_15.setTransform(-35.5,101.3,1,1,0,0,0,474,101.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(7,1,1).p("EhDYgRaMCGxAAAQEWAADEDFQDFDEAAEWIAAN3QAAEWjFDEQjEDFkWAAMiGxAAAQkWAAjEjFQjFjEAAkWIAAt3QAAkWDFjEQDEjFEWAAg");
	this.shape_28.setTransform(-35.475,77.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EhDYARaQkWAAjEjEQjFjFAAkVIAAt3QAAkVDFjFQDEjFEWABMCGxAAAQEWgBDEDFQDFDFAAEVIAAN3QAAEVjFDFQjEDEkWAAg");
	this.shape_29.setTransform(-35.475,77.05);

	this.instance_16 = new lib.cinemaimage2();
	this.instance_16.setTransform(-566,-451,0.9077,0.9077);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(7,1,1).p("EhDAgXwMCGBAAAQEWAADEDFQDFDEAAEXIAAaiQAAEWjFDEQjEDFkWAAMiGBAAAQkWAAjEjFQjFjEAAkWIAA6iQAAkXDFjEQDEjFEWAAg");
	this.shape_30.setTransform(7.175,38.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("EhDAAXxQkWAAjEjFQjFjEAAkXIAA6iQAAkVDFjFQDEjEEWAAMCGBAAAQEWAADEDEQDFDFAAEVIAAaiQAAEXjFDEQjEDFkWAAg");
	this.shape_31.setTransform(7.175,38.15);

	this.instance_17 = new lib.iceSkate_txt_money();
	this.instance_17.setTransform(62.35,138.25,1,1,0,0,0,444.8,76.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(7,1,1).p("Eg/JgP6MB+TAAAQEWAADFDEQDEDFAAEWIAAK3QAAEWjEDFQjFDEkWAAMh+TAAAQkWAAjFjEQjEjFAAkWIAAq3QAAkWDEjFQDFjEEWAAg");
	this.shape_32.setTransform(24.2184,111.4304,1.0658,0.7509);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Eg/JAP7QkWAAjEjEQjFjFAAkWIAAq3QAAkWDFjEQDEjFEWAAMB+TAAAQEWAADEDFQDFDEAAEWIAAK3QAAEWjFDFQjEDEkWAAg");
	this.shape_33.setTransform(24.2184,111.4304,1.0658,0.7509);

	this.instance_18 = new lib.iceskateimage2();
	this.instance_18.setTransform(-479,-444,0.8928,0.8928);

	this.instance_19 = new lib.iceSkate_txt_equipment();
	this.instance_19.setTransform(-7.05,90.8,1,1,0,0,0,474,78);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(7,1,1).p("EhDogP6MCHRAAAQEWAADEDEQDFDFAAEWIAAK3QAAEWjFDFQjEDEkWAAMiHRAAAQkWAAjEjEQjFjFAAkWIAAq3QAAkWDFjFQDEjEEWAAg");
	this.shape_34.setTransform(-7.05,85.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("EhDoAP7QkVAAjFjEQjFjFABkWIAAq3QgBkWDFjEQDFjFEVAAMCHQAAAQEXAADEDFQDFDEAAEWIAAK3QAAEWjFDFQjEDEkXAAg");
	this.shape_35.setTransform(-7.05,85.85);

	this.instance_20 = new lib.bowling_txt_money();
	this.instance_20.setTransform(23.15,115.25,1,1,0,0,0,451.2,54.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(7,1,1).p("Eg/hgMTMB/DAAAQEWAADEDEQDFDFAAEWIAADpQAAEWjFDFQjEDEkWAAMh/DAAAQkWAAjEjEQjFjFAAkWIAAjpQAAkWDFjFQDEjEEWAAg");
	this.shape_36.setTransform(23.125,111.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Eg/hAMUQkWAAjEjEQjFjFAAkWIAAjpQAAkWDFjFQDEjEEWAAMB/DAAAQEWAADEDEQDFDFAAEWIAADpQAAEWjFDFQjEDEkWAAg");
	this.shape_37.setTransform(23.125,111.45);

	this.instance_21 = new lib.bowlingimage2();
	this.instance_21.setTransform(-373,-444,0.8919,0.8919);

	this.instance_22 = new lib.bowling_txt_equipment();
	this.instance_22.setTransform(-52.25,96.1,1,1,0,0,0,474,76.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(7,1,1).p("EhDQgPKMCGhAAAQEWAADEDEQDFDFAAEWIAAJXQAAEWjFDFQjEDEkWAAMiGhAAAQkWAAjEjEQjFjFAAkWIAApXQAAkWDFjFQDEjEEWAAg");
	this.shape_38.setTransform(-52.225,92.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("EhDQAPLQkWAAjEjEQjFjFAAkWIAApXQAAkWDFjFQDEjEEWAAMCGhAAAQEWAADEDEQDFDFAAEWIAAJXQAAEWjFDFQjEDEkWAAg");
	this.shape_39.setTransform(-52.225,92.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(7,1,1).p("EhCogljMCFRAAAQEWAADFDEQDEDFAAEWMAAAA2JQAAEWjEDFQjFDEkWAAMiFRAAAQkWAAjFjEQjEjFAAkWMAAAg2JQAAkWDEjFQDFjEEWAAg");
	this.shape_40.setTransform(6.4,-51.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("EhCoAlkQkWAAjFjEQjEjFAAkWMAAAg2JQAAkWDEjFQDFjEEWAAMCFRAAAQEWAADEDEQDFDFAAEWMAAAA2JQAAEWjFDFQjEDEkWAAg");
	this.shape_41.setTransform(6.4,-51.825);

	this.instance_23 = new lib.restaurant_txt_money();
	this.instance_23.setTransform(-36,117.5,1,1,0,0,0,432.8,53.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(7,1,1).p("Eg9qgMrMB7VAAAQEWAADEDEQDFDFAAEWIAAEZQAAEWjFDFQjEDEkWAAMh7VAAAQkWAAjEjEQjFjFAAkWIAAkZQAAkWDFjFQDEjEEWAAg");
	this.shape_42.setTransform(-36,113.8072,1,0.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Eg9pAMsQkXAAjEjEQjFjFAAkWIAAkZQAAkWDFjEQDEjFEXAAMB7UAAAQEVAADFDFQDFDEgBEWIAAEZQABEWjFDFQjFDEkVAAg");
	this.shape_43.setTransform(-36,113.8072,1,0.925);

	this.instance_24 = new lib.restaurantimage2();
	this.instance_24.setTransform(-504,-447,0.8006,0.8006);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(7,1,1).p("EhDIgVBMCGRAAAQEWAADEDFQDFDEAAEWIAAVEQAAEXjFDEQjEDFkWAAMiGRAAAQkWAAjEjFQjFjEAAkXIAA1EQAAkWDFjEQDEjFEWAAg");
	this.shape_44.setTransform(1.625,54.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EhDIAVCQkWgBjEjEQjFjEAAkXIAA1EQAAkVDFjFQDEjEEWAAMCGRAAAQEWAADEDEQDFDFAAEVIAAVEQAAEXjFDEQjEDEkWABg");
	this.shape_45.setTransform(1.625,54.2);

	this.instance_25 = new lib.houseimage2();
	this.instance_25.setTransform(-483,-443,0.8897,0.8897);

	this.instance_26 = new lib.house_txt_equipment();
	this.instance_26.setTransform(-42.4,68.5,1,1,0,0,0,440.8,101.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(7,1,1).p("Eg+5gTRMB9zAAAQEWAADFDEQDEDFAAEWIAARlQAAEWjEDFQjFDEkWAAMh9zAAAQkWAAjFjEQjEjFAAkWIAAxlQAAkWDEjFQDFjEEWAAg");
	this.shape_46.setTransform(-42.375,64.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Eg+5ATSQkWAAjFjEQjEjFAAkWIAAxlQAAkWDEjFQDFjEEWAAMB9zAAAQEWAADFDEQDEDFAAEWIAARlQAAEWjEDFQjFDEkWAAg");
	this.shape_47.setTransform(-42.375,64.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(7,1,1).p("EhCwgc+MCFhAAAQEWAADEDEQDFDFAAEWMAAAAk/QAAEWjFDFQjEDEkWAAMiFhAAAQkWAAjEjEQjFjFAAkWMAAAgk/QAAkWDFjFQDEjEEWAAg");
	this.shape_48.setTransform(0.825,3.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("EhCwAc/QkWAAjEjFQjFjEAAkWMAAAgk/QAAkWDFjEQDEjFEWAAMCFhAAAQEWAADEDFQDFDEAAEWMAAAAk/QAAEWjFDEQjEDFkWAAg");
	this.shape_49.setTransform(0.825,3.3);

	this.instance_27 = new lib.cooking_txt_money();
	this.instance_27.setTransform(-31.3,100.55,1,1,0,0,0,448.8,78.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(7,1,1).p("Eg+xgPKMB9jAAAQEWAADFDEQDEDFAAEWIAAJXQAAEWjEDFQjFDEkWAAMh9jAAAQkWAAjFjEQjEjFAAkWIAApXQAAkWDEjFQDFjEEWAAg");
	this.shape_50.setTransform(-31.35,93.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Eg+xAPLQkWAAjFjEQjEjFAAkWIAApXQAAkWDEjFQDFjEEWAAMB9jAAAQEWAADFDEQDEDFAAEWIAAJXQAAEWjEDFQjFDEkWAAg");
	this.shape_51.setTransform(-31.35,93.025);

	this.instance_28 = new lib.cookingimage2();
	this.instance_28.setTransform(-510,-449,0.8074,0.8074);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(7,1,1).p("EhBBgYIMCCDAAAQEWAADEDFQDFDEAAEWIAAbTQAAEWjFDEQjEDFkWAAMiCDAAAQkWAAjEjFQjFjEAAkWIAA7TQAAkWDFjEQDEjFEWAAg");
	this.shape_52.setTransform(16.7972,36.6,1.0327,1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("EhBBAYIQkVAAjFjEQjFjFABkWIAA7SQgBkVDFjFQDFjEEVAAMCCCAAAQEXAADEDEQDFDFAAEVIAAbSQAAEWjFDFQjEDEkXAAg");
	this.shape_53.setTransform(16.7972,36.6,1.0327,1);

	this.instance_29 = new lib.show_txt_money();
	this.instance_29.setTransform(20.65,51.9,1,1,0,0,0,474,126.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(7,1,1).p("EhDogWIMCHRAAAQEWAADEDEQDFDFAAEWIAAXTQAAEWjFDFQjEDEkWAAMiHRAAAQkWAAjEjEQjFjFAAkWIAA3TQAAkWDFjFQDEjEEWAAg");
	this.shape_54.setTransform(20.6621,46.9,1.0284,1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("EhDoAWJQkVAAjFjEQjFjFABkWIAA3TQgBkWDFjFQDFjEEVAAMCHQAAAQEXAADEDEQDFDFAAEWIAAXTQAAEWjFDFQjEDEkXAAg");
	this.shape_55.setTransform(20.6621,46.9,1.0284,1);

	this.instance_30 = new lib.showimage2();
	this.instance_30.setTransform(-434,-449,0.9081,0.9081);

	this.instance_31 = new lib.show_txt_equipment();
	this.instance_31.setTransform(-27.65,123.3,1,1,0,0,0,474,51.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(7,1,1).p("EhDwgKsMCHhAAAQEVAADFDFQDFDEAAEWIAAAbQAAEWjFDEQjFDFkVAAMiHhAAAQkWAAjEjFQjFjEAAkWIAAgbQAAkWDFjEQDEjFEWAAg");
	this.shape_56.setTransform(-27.6237,119.625,1.0189,1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("EhDwAKtQkVAAjFjFQjEjEAAkWIAAgbQAAkWDEjEQDFjFEVAAMCHgAAAQEXAADEDFQDFDEAAEWIAAAbQAAEWjFDEQjEDFkXAAg");
	this.shape_57.setTransform(-27.6237,119.625,1.0189,1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(7,1,1).p("Eg6bgOCMB03AAAQEWAADEDEQDFDFAAEWIAAHIQAAEWjFDEQjEDFkWAAMh03AAAQkWAAjEjFQjFjEAAkWIAAnIQAAkWDFjFQDEjEEWAAg");
	this.shape_58.setTransform(44.637,109.8783,1.0143,0.8978);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Eg6aAODQkWAAjFjEQjEjFgBkVIAAnIQABkXDEjEQDFjFEWAAMB02AAAQEVAADFDFQDEDEAAEXIAAHIQAAEVjEDFQjFDEkVAAg");
	this.shape_59.setTransform(44.637,109.8783,1.0143,0.8978);

	this.instance_32 = new lib.seaimage2();
	this.instance_32.setTransform(-373,-447,0.9005,0.9005);

	this.instance_33 = new lib.sea_txt_equipment();
	this.instance_33.setTransform(-98.6,76.2,1,1,0,0,0,482.4,101.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(7,1,1).p("EhEfgR6MCI/AAAQEWAADFDFQDEDEAAEWIAAO3QAAEWjEDEQjFDFkWAAMiI/AAAQkWAAjFjFQjEjEAAkWIAAu3QAAkWDEjEQDFjFEWAAg");
	this.shape_60.setTransform(-98.525,73.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("EhEfAR6QkWABjFjFQjEjFAAkVIAAu3QAAkVDEjFQDFjFEWABMCI/AAAQEWgBDFDFQDEDFAAEVIAAO3QAAEVjEDFQjFDFkWgBg");
	this.shape_61.setTransform(-98.525,73.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.mini_popup_txt,p:{x:441.45,y:2,text:"כשיוצאים לפאב צריך לקחת בחשבון שככל הנראה תזמינו משהו לשתות או לאכול ולכן הביאו איתכם אמצעי תשלום .בהתאם, קחו זאת בחשבון בבחירת מקום המפגש",lineWidth:910}},{t:this.text,p:{x:-13.5,y:-76.95}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance}]},1).to({state:[{t:this.shape_5,p:{x:-93.599,y:-140.05}},{t:this.shape_4,p:{x:-93.599,y:-140.05}},{t:this.instance_1}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.mini_popup_txt,p:{x:474.9,y:-178.1,text:"?האם הפרטנר שלכם חובב טבע -\n\nהאם הפרטנר שלכם יעדיף לטייל ברחבי הפארק או לשבת - ?במקום אחד בדשא\n\nבמידה ובחרתם לעשות פיקניק, איזה מאכלים גם אתם וגם - ?הפרטנר אוהבים",lineWidth:947}},{t:this.text,p:{x:1.6,y:-250.65}}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_5,p:{x:-43.599,y:-140.05}},{t:this.shape_4,p:{x:-43.599,y:-140.05}},{t:this.instance_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.instance_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.mini_popup_txt,p:{x:483.95,y:-232.15,text:"בדקו האם לפרטנר שלכם יש קלסטרופוביה (פחד מחללים - .(סגורים\n\nשאלו את הפרטנר שלכם האם יש להם העדפה לחדר עם - .(...נושא מסוים (יותר מפחיד, מצחיק, וכו\n\nבדקו אם הפרטנר יעדיף להימנע מסוג חדר מסוים (למשל - .(ז'אנר של אימה",lineWidth:944}},{t:this.text,p:{x:11.95,y:-305.85}}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.instance_5}]},1).to({state:[{t:this.shape_5,p:{x:-85.599,y:-139.05}},{t:this.shape_4,p:{x:-85.599,y:-139.05}},{t:this.instance_6}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.mini_popup_txt,p:{x:486.85,y:-85.15,text:"?האם לבן \\ בת הזוג שלכם יש פחד מבעלי חיים -\n\n,בדקו עם הפרטנר שלכם אם היו מעדיפים לטייל יותר בטבע -  בהרים, בים או במקום אחר עם הסוסים וכך תוכלו לבחור את .החווה בהתאם למקום שתרצו לטייל בו",lineWidth:961}},{t:this.text,p:{x:6.4,y:-165.7}}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.shape_5,p:{x:0.401,y:-139.05}},{t:this.shape_4,p:{x:0.401,y:-139.05}},{t:this.instance_8}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.instance_9}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.mini_popup_txt,p:{x:359.3,y:106.25,text:"?האם בן \\ בת הזוג שלכם אוהבים יין -",lineWidth:615}},{t:this.text,p:{x:51.85,y:26.5}}]},2).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.shape_5,p:{x:-103.599,y:-139.05}},{t:this.shape_4,p:{x:-103.599,y:-139.05}},{t:this.instance_11}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.mini_popup_txt,p:{x:403.55,y:8.8,text:"?האם לבן \\ בת הזוג שלכם יש פחד גבהים -\n\n?האם הפרטנר שלכם פחות יעדיף אקסטרים -",lineWidth:753}},{t:this.text,p:{x:26.85,y:-63.55}}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.instance_12}]},1).to({state:[{t:this.shape_5,p:{x:28.401,y:-139.05}},{t:this.shape_4,p:{x:28.401,y:-139.05}},{t:this.instance_13}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.instance_14}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.mini_popup_txt,p:{x:468.25,y:-24.9,text:"?האם יש לפרטנר שלכם העדפה לז'אנר סרטים מסוים -\n\nהאם הפרטנר שלכם יעדיף להימנע מסרטים או ז'אנרים - ?מסוימים",lineWidth:895}},{t:this.text,p:{x:20.7,y:-94.25}}]},2).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.instance_15}]},1).to({state:[{t:this.shape_5,p:{x:-100.599,y:-139.05}},{t:this.shape_4,p:{x:-100.599,y:-139.05}},{t:this.instance_16}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.mini_popup_txt,p:{x:479.15,y:-27.15,text:".בדקו עם הפרטנר האם יש לו רגישות לקור -\n\nוודאו שלפרטנר אין פחד מהחלקה על קרח כדי שבסופו של - .דבר שניכם תהנו מהחוויה המשותפת",lineWidth:944}},{t:this.text,p:{x:7.15,y:-93.75}}]},2).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.instance_17}]},1).to({state:[{t:this.shape_5,p:{x:-21.599,y:-139.05}},{t:this.shape_4,p:{x:-21.599,y:-139.05}},{t:this.instance_18}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.instance_19}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.instance_20}]},2).to({state:[{t:this.shape_5,p:{x:83.401,y:-139.05}},{t:this.shape_4,p:{x:83.401,y:-139.05}},{t:this.instance_21}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.instance_22}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.mini_popup_txt,p:{x:463.5,y:-190.05,text:"?מהו סגנון האוכל שגם אתם וגם הפרטנר שלכם תעדיפו -\n\nוודאו עם הפרטנר שלכם אם יש מאכל שהוא רגיש אליו - .ותעדיפו להימנע ממנו מראש\n\nהאם לפרטנר שלכם יש מסעדה מסוימת שהוא \\ היא - ?אוהבים במיוחד ותעדיפו ללכת אליה",lineWidth:914}},{t:this.text,p:{x:6.4,y:-266.05}}]},2).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.instance_23}]},1).to({state:[{t:this.shape_5,p:{x:-93.599,y:-139.05}},{t:this.shape_4,p:{x:-93.599,y:-139.05}},{t:this.instance_24}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.mini_popup_txt,p:{x:473.6,y:13.5,text:",כיוון שבבית יש הרבה רעיונות שאפשר להכין עבור המפגש - וודאו עם הפרטנר האם יש פעילות מסוימת שחשבתם עליה .שהוא \\ היא יעדיפו עבור הדייט",lineWidth:944}},{t:this.text,p:{x:1.6,y:-55.6}}]},2).to({state:[{t:this.shape_5,p:{x:-27.599,y:-139.05}},{t:this.shape_4,p:{x:-27.599,y:-139.05}},{t:this.instance_25}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.instance_26}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.mini_popup_txt,p:{x:472.8,y:-83,text:"בדקו עם הפרטנר האם יש סגנון אוכל מסוים שהוא יעדיף - .ללמוד להכין ובסופו של דבר גם לאכול\n\nוודאו האם לפרטנר שלכם יש רגישות למאכלים מסוימים - .לפני בחירת הסדנה",lineWidth:944}},{t:this.text,p:{x:0.8,y:-154.75}}]},2).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.instance_27}]},1).to({state:[{t:this.shape_5,p:{x:-96.599,y:-139.05}},{t:this.shape_4,p:{x:-96.599,y:-139.05}},{t:this.instance_28}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.mini_popup_txt,p:{x:477.05,y:-29.45,text:"?האם יש לפרטנר שלכם אומן מועדף -\n\nלאיזה סוג הופעה הפרטנר שלכם יותר מתחבר, להופעות - ...מוזיקה, ריקודים, סטאנדאפ או רעיון נוסף",lineWidth:921}},{t:this.text,p:{x:16.75,y:-100.55}}]},2).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.instance_29}]},1).to({state:[{t:this.shape_5,p:{x:31.401,y:-139.05}},{t:this.shape_4,p:{x:31.401,y:-139.05}},{t:this.instance_30}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.instance_31}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.mini_popup_txt,p:{x:458.7,y:119.45,text:".בדקו האם לפרטנר שלכם יש בעיה עם חול או מים -",lineWidth:828}},{t:this.text,p:{x:44.6,y:49.75}}]},2).to({state:[{t:this.shape_5,p:{x:88.401,y:-140.05}},{t:this.shape_4,p:{x:88.401,y:-140.05}},{t:this.instance_32}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.instance_33}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-621.5,-472.2,1227.8,675.3);


(lib.wine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("סיור ביקב", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 276;
	this.text.parent = this;
	this.text.setTransform(0,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgACagjQAtHCEzCyIAAAKIAAHCQgFAAgEACQiHA/hgBpQAAAFABAAQD3AwD8grQAAgFgCgDQhjhqiLhCIAAgKIAAnMQBhgcAwhMQDGk6ARnrIgKAAIruAAQAOCXAOCMgAnZzUQgFAAAAABQgvCXBIBYQAHCwgYCZQhBGjiKFfIAAAKIAAQGQAFAAABABQAdBPBLAeIAKAAIHgAAQAAgFACgBQBFgcAchCQAQksAKlAQAKlVhcjhQiimKAJo5QAFAAABgCQA4h+g0h6IgKgBQhCgNg+AAQhVAAhNAYgACckoIAAgKIKyAAIAKAAQgPCpgYCgIgBAKQjPBNjDBXQgNAGgPAAQjvh+AJl1g");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.98)").s().p("AjuL9QgBAAAAgFQBghpCHg/QAEgCAEAAIAAnCIAAgKQkyixgtnDQgPiMgNiXILtAAIAKAAQgSHsjGE5QgvBMhhAcIAAHMIAAAKQCKBCBkBqQACADAAAFQh3AUh2AAQiDAAiCgZgAldr3QgKF2DwB+QAPAAANgGQDChXDPhNIABgKQAXihAQipIgKAAIqxAAIAAAKg");
	this.shape_1.setTransform(50,232.0284);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.992)").s().p("AjyTpIgKAAQhLgegehPQAAgBgFAAIAAwGIAAgKQCKlfBBmjQAXiZgGiwQhIhYAuiXQABgBAFAAQCFgqCcAfIAKABQA0B6g4B+QgBACgFAAQgKI5CjGKQBdDhgLFVQgKFAgPEsQgdBChFAcQgCABAAAFInfAAg");
	this.shape_2.setTransform(-31.6717,185.304);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.945)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOg");
	this.shape_3.setTransform(0,185.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FD7E63").s().p("EgF6AhRQtUjlnhpZQmgoHhBtdQgKiEAAiFQCkuVJ7nEQE6jgGiiFQGxiKH+A+QFiAqEBCPQK7GDGSKvQDGFRATH8QAQGSh9EUQlTLqp+G/QmLEVpdA4QhYAIhQAAQixAAiUgngAC6grQA3IgFzDXIAAAMIAAIfQgGAAgFADQikBNhzB+QAAAGABAAQEqA6Exg0QAAgGgDgDQh4iAinhRIAAgMIAAorQB1giA5hbQDwl8AVpSIgMAAIuKAAIAhFggAo73WQgGAAgBACQg4C2BXBqQAIDVgcC5QhPH6inGoIAAAMIAATcQAGAAABACQAkBfBaAkIAMAAIJEAAQAAgGADgBQBTgiAihQQATlqAMmCQAMmdhvkQQjEnbALqwQAGAAABgCQBEiZg/iTIgMgBQhQgQhKAAQhnAAhdAdgAC9lmIAAgMINBAAIANAAQgTDMgdDBIgBAMQj6BejsBpQgPAHgSAAQkiiYAMnDg");
	this.shape_4.setTransform(-0.7645,176.4712);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.992)").s().p("AklXuIgMAAQhagkgkhfQgBgCgGAAIAAzcIAAgMQCnmoBPn6QAci5gIjVQhXhqA4i2QABgCAGAAQChgyC8AlIAMABQA/CThECZQgBACgGAAQgLKwDEHbQBwEQgMGdQgMGCgTFqQgjBQhTAiQgDABAAAGIpDAAg");
	this.shape_5.setTransform(-38.2622,175.9549);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.98)").s().p("AkfOcQgCAAAAgGQBzh+CkhNQAFgDAFAAIAAofIAAgMQlyjWg3ohIghlgIOJAAIAMAAQgVJTjvF7Qg6Bbh1AiIAAIrIAAAMQCnBRB4CAQADADAAAGQiQAZiPAAQieAAicgfgAmmuVQgLHEEhCYQASAAAPgHQDrhpD6heIABgMQAdjCATjMIgNAAItAAAIAAAMg");
	this.shape_6.setTransform(60.4,232.3666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.945)").s().p("EACdAjBIkhAAQnphClpjAQlki/kQkQQococh4vCIAAgMIAAldQCmuTJpnSQIsmlNzhfIDZAAIAMAAQOICyICI4QDxEJC3FGQC0FABEGxIAAEhIAAAMQg9GUikErQmAK7qeGcQlQDPnnA5IAAAMIgMAAgEgKnggVQmiCFk6DgQp7HEijOVQAACFAJCEQBCNdGfIHQHhJZNVDlQDWA5EWgaQJdg4GMkVQJ9m/FTrqQB9kUgQmSQgSn8jHlRQmSqvq7mDQkBiPlhgqQifgTiWAAQlQAAkrBfg");
	this.shape_7.setTransform(0,176.175);

	this.instance = new lib.wine_txt_gray();
	this.instance.setTransform(0,417.4,1,1,0,0,0,139.8,38.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAEFTOQgBAAAAgFQBghpCHg/QAEgCAFAAIAAnCIAAgKQkziygtnCQgPiMgNiXILuAAIAKAAQgSHrjGE6QgvBMhhAcIAAHMIAAAKQCKBCBkBrQACACAAAFQh3AVh2AAQiEAAiCgagACWkmQgKF2DwB9QAPAAANgFQDDhYDPhNIABgKQAXifAQiqIgKAAIqyAAIAAAKgAovTnIgKAAQhLgegdhPQgBgBgFAAIAAwGIAAgKQCKleBBmkQAXiYgGixQhIhYAviWQAAgCAFAAQCFgqCdAfIAKABQA0B6g4B+QgBACgFAAQgKI5CjGKQBcDhgKFVQgLFBgPErQgcBChFAcQgCABAAAFIngAAg");
	this.shape_8.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text,p:{y:398.9,font:"normal 400 65px 'Rubik'",lineHeight:79.05}}]},1).to({state:[{t:this.shape_8},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.1,-47.9,454.2,525.9);


(lib.wallClimb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("קיר טיפוס", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 276;
	this.text.parent = this;
	this.text.setTransform(0,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAG9UxQFHAdB8ibQAAgPgDgOQhjlsgjmrQg2qOCGo1QAtjAACi8QgUgZgYgVQgbgXgegDQmRgkmrAGQivACitgQQlHgeh9CcQAoExAyEfQBYH2g/IfQgtGHhGF9QAaAdAcAbQAcAbAnADQGNAfGlgFIAngBQCcAACaAPgApFROQgCgEAAgFQBlhcB/BLQACACAAAFQAUAzg6AXQgCABAAAFQgrAMgiAAQhSAAgdhJgAIYSBIgKAAQhSgSgRhSIgBgKQCchOBICLQACAEAAAFQgXAqhBAAQgPAAgRgCgABiOkQgCgEAAgFQBUhABHBFQASASghAbQghALgbAAQg3AAgXg0gAlBNyQgCgEAAgFQCJhKAICGIgFAAQgdAJgXAAQg9AAgZg8gAo9LJQBeg7AUBcQABAHgQAEQgWAFgRAAQg1AAgHgxgAjyJbIgBgKQBLhBBgArQAEACAFAAQAXBEhJAUQgFACgFAAQgTACgPAAQhKAAgLg+gAGqJRQB5g2gPBmQgBACgNAEQgSAFgOAAQgvAAgNg7gACAIeQgCgEAAgFQB4hFAXBkQAEAVgbgCQgcALgXAAQgwAAgTg0gAmTGdQBXhJAXBnIgIADQgXAJgTAAQgoAAgUgqgAg/ElQBtgqgsBJQgFAJgUABIgDAAQgnAAACgpgAGrERIgBgKQByhBALBhQADAVgcAHQgNABgLAAQg/AAgMgzgADECtQCCAEhlAWIgJABQgWAAACgbgAlNCZQBzgPhPAjQgMAFgIAAQgRAAABgZgAnDAOQgcgFgOgZQBdgPgfAwgAGUgNQgdgRABguQBzgEhLBKgAAkg4QBlgjgcBEQgCAHgMACIgQABQgoABgDgsgAiWikQgPgFACgbQBtgxgpBIQgHAOgUAAQgMAAgQgFgAIYioQgZgDAFgjQBRgtgEA2QgCAdgoAAIgPAAgABgkKQCdgPh8AvQgGACgGAAQgTAAgCgigAnZkUQCoAOiMAaIgIAAQgZAAAFgogAHSmMQBKhBARBVIgMADQgTAFgOAAQgjAAgLgcgAASoFQgCgEAAgFQBFhQBCBBQAPAOgeAfQgjAVgaAAQglAAgUgqgAkboiQAyg4BGAPIAKABQAmBQiAAJIgFAAQgpAAAGgxgAE+qHQgCgEAAgFQBihJAtBgIgIAOQgFAIgKAFQgVADgSAAQg+AAgRgsgAhws6IgBgKQCJg7gRB0QgBAIgTAFIgSAAQhHAAgKg8gAHevHQgCgEAAgFQBPhDBmAtQAEACAFAAQAyAiglAmQgDADAAAFQg0AbgoAAQhFAAglhOgAoTvbQgCgEAAgFQAgg2BiANIAKABQBIAXAXBDIgFAAQgKAngoAKIgKABIgCAAQiBAAglhbgACewNQgCgEAAgFQBmhKApBrIgJAEQgPAHABAQIgSAAQhMAAgYgzg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.992)").s().p("AGiUzQitgQivACQmmAFmMgfQgngDgcgbQgcgbgagdQBGl8AtmHQA/oghZn2QgykegnkyQB9ibFGAdQCuAQCvgCQGqgGGRAlQAeACAcAYQAYAUAUAZQgCC9gtDAQiHI0A2KOQAkGsBjFrQADAOAAAPQhpCDj3AAQgvAAg1gFgAphRHQAAAFABAEQAqBpCTgsQAAgFABgBQA7gXgUgzQAAgFgCgCQg5ghg0AAQhAAAg3AygAGQQVIABAKQARBSBSASIAKAAQBcAMAcg0QAAgFgCgEQguhZhRAAQgtAAg4AcgABGOdQAAAFACAEQAiBOBoglQAhgbgSgSQglgkgpAAQglAAgoAfgAldNrQAAAFACAEQAjBUBnghIAFAAQgFhWg7AAQghAAgwAagApXLLQAJBBBZgVQARgEgBgGQgMg5goAAQgZAAglAXgAkNJTIABAKQANBMBqgQQAFAAAEgCQBKgTgXhFQgFAAgEgCQgmgRgjAAQg1AAgtAngAGQJTQARBOBKgXQAOgFABgCQAKhCgxAAQgZAAgqASgABkIXQAAAFABAEQAdBMBagjQAbACgEgUQgOg8gwAAQggAAgxAcgAmtGfQAcA+BJgdIAJgDQgOg8gjAAQgZAAgkAegAhZEnQgCArAqgCQAUgBAFgJQAbgughAAQgTAAgoAPgAGQEJIABAKQANA9BWgLQAcgHgDgVQgHg6grAAQgeAAgtAagADHDJQBlgViCgFQgCAhAfgHgAlnCbQgCAlAmgRQA3gYgoAAQgRAAgiAEgAoHgOQANAaAdAEIAUADQAYglgxAAQgPAAgWAEgAFehKQgBAuAdARIAMAHQBIhGhmAAIgKAAgAAKg2QADA0A3gKQAMgCADgHQASgtglAAQgUAAgiAMgAi9jCQgCAbAOAFQArAOANgXQAYgrgcAAQgUAAgsAUgAHqjMQgGAjAaADQA2AGADgjQACgdgXAAQgTAAglAUgABGkIQABAsAggMQBfgjhFAAQgWAAglADgAnXjqQCMgZiogPQgHAuAjgGgAG4mKQAPAoA/gRIANgCQgKgxgcAAQgVAAggAcgAgJoMQAAAFACAEQAhBIBUgzQAegegPgPQgegdgeAAQglAAglAsgAk1ogQgHA0AvgDQCAgJgmhQIgKgBQgPgDgNAAQg1AAgnAsgAEiqOQAAAFABAFQAXA4BggQQAKgFAFgIIAIgOQgag3gqAAQghAAgqAggAiLtCIABAKQALBFBYgJQAUgFABgIQALhNg5AAQgdAAguAUgAHCvOQAAAFACAEQA6B9CMhKQAAgFACgDQAmgmgygiQgFAAgEgCQgpgSglAAQg4AAgvAogAovviQAAAFACAEQAlBcCDgBIAJgBQAogJALgoIAFAAQgXhDhIgXIgKAAQgTgDgRAAQhFAAgZArgACCwUQAAAFACAEQAaA5BcgGQgBgQAPgHIAJgEQgYg/guAAQgfAAgqAeg");
	this.shape_1.setTransform(2,185.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.945)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOg");
	this.shape_2.setTransform(0,185.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD7E63").s().p("EgFxAgfQtAjfnWpLQmWn7hAtJQgJiBAAiCQCgt/Jrm5QE0jbGYiCQGniGHyA8QFZApD7CLQKqF6GJKfQDBFKATHwQAPGHh6EPQlKLYpvG0QmCEPpPA2QhVAIhOAAQiuAAiQgmgAIMYfQGCAjCTi3QAAgSgEgRQh1msgpn5QhAsDCeqaQA2jiACjfQgXgdgdgZQgggbgjgDQnZgrn4AHQjOACjNgTQmCgiiSC3QAuFoA7FSQBpJQhLKCQg1HNhSHBQAeAiAhAgQAhAgAuAEQHUAkHxgGIAwgBQC3AAC0ARgAquUUQgCgFAAgGQB3hsCWBYQADACAAAGQAXA8hFAcQgCABAAAFQgzAPgoAAQhgAAgjhWgAJ4VQIgLAAQhigVgThhIgBgMQC4hbBVCjQACAFAAAGQgbAxhOAAQgRAAgUgCgAB0RLQgDgFAAgGQBjhLBUBSQAVAVgmAfQgoAOgfAAQhBAAgbg+gAl7QQQgCgFAAgGQChhWAKCdIgGAAQgiALgcAAQhHAAgehHgAqkNJQBvhGAXBtQACAIgUAFQgZAGgUAAQg+AAgJg6gAkdLHQgCgGAAgGQBZhNBxAzQAFADAGAAQAaBQhWAYQgFACgGAAQgWADgTAAQhXAAgMhKgAH3K7QCOg/gSB4QAAACgQAFQgVAHgRAAQg3AAgPhHgACXKAQgCgGAAgGQCNhRAbB3QAFAYgggDQghANgbAAQg4AAgXg8gAnbHnQBmhWAbB5IgKAEQgbALgWAAQgvAAgXgygAhKFZQCAgxg0BWQgGAKgXACIgDAAQgvAAADgxgAH4FCIgBgMQCGhMANByQADAYggAJQgQACgNAAQhLAAgNg9gADnDMQCaAFh3AZIgMABQgZAAACgfgAmJC0QCHgRhdApQgOAGgJAAQgUAAABgegAoVAQQghgFgQgeQBugSglA5gAHdgQQgigUABg2QCHgEhYBWgAArhDQB3gpghBQQgDAJgOADQgKABgJAAQgvAAgDg0gAiyjCQgRgFADghQCAg5gwBUQgJARgYAAQgOAAgTgGgAJ4jHQgegDAHgpQBfg2gEBAQgDAjgvAAIgSgBgABxk6QC6gRiTA2QgHADgHAAQgXAAgCgogAoulGQDGARilAeIgJABQgfAAAHgwgAImnUQBXhMAUBlIgPADQgVAGgRAAQgpAAgNgigAAVpiQgCgFAAgGQBRheBOBMQARARgiAkQgqAZgfAAQgrAAgYgxgAlOqFQA7hBBTARIAMABQAsBfiXAKIgGAAQgxAAAIg6gAF3r7QgCgFAAgGQBzhWA2BxIgKAQQgGAKgMAGQgZAEgVAAQhJAAgUg0gAiEvPIgBgMQChhFgUCJQgBAJgWAGIgWABQhUAAgLhIgAI0x1QgCgFAAgGQBdhOB4A0QAFADAGAAQA7AogtAtQgCADAAAGQg9AggwAAQhSAAgrhcgApzyMQgCgFAAgGQAlg/B1APIALAAQBVAcAbBPIgFAAQgNAugvALQgFACgGAAIgDAAQiYAAgshrgAC7zIQgDgEAAgGQB4hYAxB/IgLAEQgRAJABASIgWABQhZAAgcg9g");
	this.shape_3.setTransform(-0.7432,178.4985);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.992)").s().p("AHtYiQjMgTjPACQnxAHnUglQgugEghggQghgggegiQBSnBA1nNQBLqBhppQQg7lSgulpQCSi3GCAjQDNATDOgDQH4gGHZAqQAjAEAgAbQAdAYAXAeQgCDeg2DiQieKbBAMDQApH4B1GtQAEAQAAASQh7CbkkAAQg4AAg+gGgArPULQAAAGACAGQAxB6CtgzQAAgGACAAQBFgcgXg8QAAgGgDgCQhEgog9AAQhLAAhBA7gAHYTQIABAMQATBiBiAUIALABQBtANAhg9QAAgGgCgFQg3hohfAAQg1AAhCAggABSRDQAAAGADAFQAnBcB8gsQAmgfgVgWQgsgqgwAAQgsAAgvAkgAmcQIQAAAGACAFQAqBjB5gnIAGAAQgGhmhGAAQgmAAg5AfgArDNLQALBNBpgZQAUgFgCgHQgOhDgvAAQgeAAgrAbgAk+K+QAAAGACAFQAOBbB+gUQAGAAAFgCQBWgXgahRQgGAAgFgCQgtgUgpAAQg/AAg1AugAHYK+QATBcBZgcQAQgFAAgDQAMhOg5AAQgeAAgxAWgAB2J3QAAAGACAFQAhBZBqgpQAgACgFgYQgQhGg4AAQgnAAg5AhgAn6HpQAhBJBWghIAKgEQgQhHgqAAQgdAAgqAjgAhpFcQgDAyAygCQAXgBAHgLQAgg2gnAAQgXAAgvASgAHYE4IABAMQAQBIBlgNQAggIgDgZQgIhEgzAAQgjAAg1AegADrDtQB3gZiagGQgDAnAmgIgAmoC3QgCArAsgUQBCgcgwAAQgUAAgoAFgAplgRQAQAeAhAGIAYADQAcgrg5AAQgSAAgaAEgAGdhYQgBA3AiAUIAOAIQBUhTh4AAIgLAAgAAMhAQADA9BCgLQAOgCADgJQAWg1gtAAQgXAAgoAOgAjfjlQgDAgARAGQAzAPAPgaQAdgygiAAQgXAAg0AXgAJCjxQgHAqAeADQBAAHAEgpQACgjgbAAQgXAAgrAYgABSk4QACA0AlgOQBwgqhRAAQgaAAgsAEgAoskUQClgejGgSQgIA3ApgHgAIHnRQASAvBKgTIAPgEQgMg5ghAAQgZAAglAhgAgLpqQAAAFACAFQAnBVBkg8QAigkgRgRQgjgigjAAQgsAAgsA0gAltqCQgIA+A3gEQCXgLgsheIgMgBQgSgEgQAAQg+AAguA0gAFWsEQAAAGACAFQAaBEBxgUQAMgGAGgJIAKgRQgfhAgyAAQgnAAgxAlgAikvYIABAMQAMBQBpgKQAXgFABgJQAOhbhEAAQgiAAg2AXgAITx9QAAAGACAEQBECTCmhWQAAgGACgDQAtgtg7gpQgGAAgFgCQgwgVgsAAQhCAAg3AvgAqUyVQAAAGACAFQAsBsCbgBQAGAAAFgBQAvgLANgvIAFAAQgbhPhVgbIgLgBQgXgCgTAAQhSAAgeAygACZzQQAAAGADAFQAfBEBsgIQgBgTARgIIALgFQgdhKg2AAQglAAgxAjg");
	this.shape_4.setTransform(2.375,178.2067);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.945)").s().p("EACaAiMIkbAAQnehAlfi7Qlci7kKkKQoQoOh1usIAAgMIAAlVQCjt+JanHQIfmaNfhdIDTAAIAMAAQNyCuH2IqQDrEEC0E+QCvE4BDGmIAAEbIAAAMQg8GKihEkQl2KqqPGTQlHDKncA3IAAAMIgLAAgAqW/kQmYCBk0DcQprG4igOAQAACBAJCCQA/NJGXH7QHVJKNBDgQDRA4EPgaQJPg2GDkPQJum1FLrXQB6kPgPmIQgTnvjBlLQmJqeqrl6Qj6iLlagpQiZgTiSAAQlJAAkkBdg");
	this.shape_5.setTransform(0,178.2);

	this.instance = new lib.wallClimb_txt_gray();
	this.instance.setTransform(0,417.4,1,1,0,0,0,139.8,38.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAG2UzQitgQivACQmmAFmMgfQgngDgcgbQgcgbgagdQBGl8AtmHQA/oghZn2QgykegnkyQB9ibFGAdQCuAQCvgCQGqgGGRAlQAeACAcAYQAYAUAUAZQgCC9gtDAQiHI0A2KOQAkGsBjFrQADAOAAAPQhpCDj3AAQgvAAg1gFgApNRHQAAAFABAEQAqBpCTgsQAAgFABgBQA7gXgUgzQAAgFgCgCQg5ghg0AAQhAAAg3AygAGkQVIABAKQARBSBSASIAKAAQBcAMAcg0QAAgFgCgEQguhZhRAAQgtAAg4AcgABaOdQAAAFACAEQAiBOBoglQAhgbgSgSQglgkgpAAQglAAgoAfgAlJNrQAAAFACAEQAjBUBnghIAFAAQgFhWg7AAQghAAgwAagApDLLQAJBBBZgVQARgEgBgGQgMg5goAAQgZAAglAXgAj5JTIABAKQANBMBqgQQAFAAAEgCQBKgTgXhFQgFAAgEgCQgmgRgjAAQg1AAgtAngAGkJTQARBOBKgXQAOgFABgCQAKhCgxAAQgZAAgqASgAB4IXQAAAFABAEQAdBMBagjQAbACgEgUQgOg8gwAAQggAAgxAcgAmZGfQAcA+BJgdIAJgDQgOg8gjAAQgZAAgkAegAhFEnQgCArAqgCQAUgBAFgJQAbgughAAQgTAAgoAPgAGkEJIABAKQANA9BWgLQAcgHgDgVQgHg6grAAQgeAAgtAagADbDJQBlgViCgFQgCAhAfgHgAlTCbQgCAlAmgRQA3gYgoAAQgRAAgiAEgAnzgOQANAaAdAEIAUADQAYglgxAAQgPAAgWAEgAFyhKQgBAuAdARIAMAHQBIhGhmAAIgKAAgAAeg2QADA0A3gKQAMgCADgHQASgtglAAQgUAAgiAMgAipjCQgCAbAOAFQArAOANgXQAYgrgcAAQgUAAgsAUgAH+jMQgGAjAaADQA2AGADgjQACgdgXAAQgTAAglAUgABakIQABAsAggMQBfgjhFAAQgWAAglADgAnDjqQCMgZiogPQgHAuAjgGgAHMmKQAPAoA/gRIANgCQgKgxgcAAQgVAAggAcgAAKoMQAAAFACAEQAiBIBUgzQAegegPgPQgegdgeAAQglAAgmAsgAkhogQgHA0AvgDQCAgJgmhQIgKgBQgPgDgNAAQg1AAgnAsgAE2qOQAAAFABAFQAXA4BggQQAKgFAFgIIAIgOQgag3gqAAQghAAgqAggAh3tCIABAKQALBFBYgJQATgFABgIQALhNg4AAQgdAAguAUgAHWvOQAAAFACAEQA6B9CMhKQAAgFACgDQAmgmgygiQgFAAgEgCQgpgSglAAQg4AAgvAogAobviQAAAFACAEQAlBcCDgBIAJgBQAogJALgoIAFAAQgXhDhIgXIgKAAQgTgDgRAAQhFAAgZArgACWwUQAAAFACAEQAaA5BcgGQgBgQAPgHIAJgEQgYg/guAAQgfAAgqAeg");
	this.shape_6.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.text,p:{y:397.9,font:"normal 400 65px 'Rubik'",lineHeight:79.05}}]},1).to({state:[{t:this.shape_6},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.7,-40.6,443.5,517.6);


(lib.show = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("הופעה של אומן", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 367;
	this.text.parent = this;
	this.text.setTransform(0,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAi/U+QAWA5AkAsQAFAAAEACQBdA7B1gpQAAgFACgBQBGghAShRIAAgFQi4ATi5gYQAAAFACAEgAjfPhQgECpAiB5IAKABQC4AvC5gwQAFgKABgKQAWpMgIpkQgFAAgEABQjSBSjIhdQAAHWgKHWgAjkgXQA2AgA/AIQHJA8A8mTQhgA1h8AXQlgBAkBiCQArDKCYBbgAOAiwQAFAAABgCQAtiYgfiwIAAgFQiTgNh7ASQgRBSAGBsQABAUgJAGQg2Ajg5AdQAAAFACAEQAVBEBrgRQAFgKAEgLQAkh4gPipIAKAAIDIAAIAAAKIAAC+IAAAFQg5AGg1AdIgFAAQAHBrB2gvgAmnnSIAAAKIAABuQBdAqBsAVQGBBND9igQgPjriOhtQhUhAiBgEIgYAAQlxAAhME4gAplpyQAAAPgBAAQg9AFg6AoIABAJQAXBWBggjQA4gdgQhlQgSh1AwgDQAUAKAFAOQAgBsANg+QAAgFgCgEQgohZhYgqQgRBXAHBxgANOt2QAAAUgJAFQgrAZhEAeIABAJQAXBaBqgnQAsglgNhdQgOhrAhgNQAmAHAIAiQAVBVANguQAAgFgBgFQglhmhmgmIAAC0gADOuoQAzBsBlhMQADgCAFAAIAAkOIAAgKIDIAAIAKAAQAIB6gfBdQgCAFgPAAQh9AKBOBNQACADAFAAQBkAOAThBQABgEAAgFIAAgKIAAjwQAAgPgEgBQiNgniRAZIAAAUIAAAKIAADSIAAAKIgKgBIgUgBQg9AAgdAggAnZw+QAAAPgCAAQhFAKg7AtQAyBrBmhLQADgCAFAAIAAkOIAAgKIDIAAIAKAAQAPCGgnBUQgBACgFAAQh5gIBABVQACADAFAAQBZAiAehLQABgEAAgFIAAgKIAAjwQAAgPgEgBQiIgniMAZIgFAAQALBegGB0gABf0aQABAUgJAGQg2Ajg4AdQAAAFACAEQATBGBsgTQArgqgOhiQgSh1AxgDQARARAHASQAnByAHhPQAAgFgCgEQgwhRhQgyQgRBOAGBmg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.969)").s().p("AhzAnQgEgCgFAAQgkgrgXg5QgBgEAAgFQC4AYC5gTIAAAFQgSBQhGAhQgCABAAAFQgxAQgsAAQg/AAg2gig");
	this.shape_1.setTransform(-1.5,326.3447);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.91)").s().p("AiABoIgBgJQA5goA+gFQABAAAAgPQgIhwARhXQBYAqAoBZQACAEAAAFQgNA9ghhrQgEgOgUgKQgxADATB0QAQBlg3AdQgcAKgWAAQg1AAgQg9g");
	this.shape_2.setTransform(-61,119.5186);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.957)").s().p("AjaDrQhsgVhdgqIAAhuIAAgKQBOlBGHAKQCAAEBVBAQCNBtAQDqQirBsjoAAQhuAAh9gZg");
	this.shape_3.setTransform(-1,133.8207);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.988)").s().p("AivJcIgKgBQgih5AEipQAKnVAAnWQDIBdDShSQAEgBAFAAQAIJkgWJLQgBAKgFAKQhdAYheAAQhbAAhbgXg");
	this.shape_4.setTransform(-1.446,253.7251);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.98)").s().p("AhmCoQg/gIg3ghQiXhbgrjJQEBCDFfhAQB9gXBgg2Qg1FflhAAQg0AAg7gIg");
	this.shape_5.setTransform(-1.5,170.5879);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.471)").s().p("AgEBkIAAjRQAQBigMB4IgEABIAAgKg");
	this.shape_6.setTransform(32.5104,78);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.518)").s().p("AAAB9QgEh9AAh8IAJAAIAADvIAAAKg");
	this.shape_7.setTransform(-20.5,71.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.914)").s().p("AiABwQgBgEAAgFQA5gdA2gjQAJgGgBgUQgGhlAQhOQBQAyAwBRQACAEAAAFQgHBOgnhxQgHgSgRgRQgxADASB0QAOBigrAqQgXAEgTAAQhHAAgPg3g");
	this.shape_8.setTransform(10,53.7124);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.906)").s().p("AAUF6IAFAAQA0gdA5gGIABgFIAAi+IAAgKIjHAAIgKAAQAPCpgkB4QgEALgFAKQhrARgWhEQgBgEAAgFQA5gdA2gjQAJgGgBgUQgHhsAShSQB6gSCTANIAAAFQAfCwguCYQAAACgFAAQgkAOgaAAQg6AAgFhKgAgXi2IgBgJQBDgeArgZQAJgFAAgUIAAi0QBlAmAlBmQACAFAAAFQgOAugUhVQgIgigmgHQghANAOBrQANBdgsAlQggAMgZAAQg3AAgQg/g");
	this.shape_9.setTransform(74.5,124.2172);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.49)").s().p("AAAB9QgEh9AAh8IAJAAIAADvIAAAKg");
	this.shape_10.setTransform(60.5,79.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.949)").s().p("AjMBxQAiglBMAGIAKABIAFgBQAMh5gRhhIAAgKIAAgUQCQgZCNAnQAEABAAAPIgKAAQAAB9AFB8IAFAAQAAAFgCAEQgSBBhkgOQgFAAgDgDQhNhNB9gKQAPAAABgFQAghcgIh6IgKAAIjHAAIAAAKIAAENQgFAAgDACQgqAgghAAQgvAAgehAg");
	this.shape_11.setTransform(40.5,80.7018);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.945)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAphv2QA7gsBFgKQACgBAAgPQAGh0gLheIAFAAQCMgZCIAnQAEABAAAPIgKAAQAAB9AFB9IAFAAQAAAFgCAFQgdBKhZgiQgFAAgCgDQhAhVB5AIQAFAAABgCQAnhTgPiHIgKAAIjIAAIAAAKIAAEOQgFAAgDACQgqAfghAAQgwAAgdg/g");
	this.shape_12.setTransform(0,185.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FD7E63").s().p("EgFyAgjQtCjfnXpMQmXn9hAtKQgJiCAAiCQCguBJtm7QE0jbGZiCQGoiHHzA9QFaApD8CLQKsF7GKKhQDBFKATHxQAPGJh6EPQlLLapxG1QmDEQpQA2QhVAIhPAAQitAAiRgngAjiYzQAaBDArAzQAGAAAEADQBuBGCLgxQAAgGACgBQBSgmAWhhIAAgGQjZAXjbgdQAAAGACAGgAkISVQgEDIAoCPIALABQDaA5Dbg6QAGgMABgLQAaq3gJrUQgGAAgGACQj4BhjshvQAAIsgMIrgAkOgcQBAAmBLAJQIcBHBHncQhyA/iTAbQmfBMkwiaQAzDuCzBsgAQkjRQAFAAABgCQA2izgljRIAAgGQiugPiRAVQgVBhAICAQABAXgLAHQhAAqhDAiQAAAGACAFQAZBRB/gVQAGgMAEgMQAriOgSjJIAMAAIDtAAIAAAMIAADhIgBAGQhDAHg+AiIgGAAQAIB/CMg4gAn0ooIAAAMIAACCQBuAyB/AZQHIBbEri+QgSkVioiBQhkhMiXgEIgdgBQm1AAhZFxgArVrlQAAASgBAAQhJAGhEAvQAAAGACAFQAaBmBygqQBCgigSh4QgWiKA5gEQAYAMAFARQAmCAAQhKQAAgGgDgFQgwhohngyQgVBnAJCFgAPowYQAAAXgKAGQgzAehQAjIABALQAbBqB9guQA0grgPhvQgRh+AngPQAtAIAJAoQAZBlAQg3QAAgGgCgFQgsh5h4gtIAADVgAD0xUQA8CAB3hZQAEgDAGAAIAAk/IAAgMIDsAAIAMAAQAJCRglBuQgBAFgSAAQiUAMBcBbQADADAGAAQB1ASAXhNQABgGAAgGIAAgLIAAkcQAAgSgEgBQinguirAdIAAAYIAAAMIAAD4IAAAMIgMgBIgYgBQhIAAgiAlgAov0FQAAASgDAAQhSAMhFA1QA7B+B4hYQAEgDAGAAIAAk/IAAgMIDtAAIALAAQASCfguBjQgBACgGAAQiPgJBMBlQACADAGAAQBpAoAjhYQACgFAAgGIAAgMIAAkcQAAgRgFgCQihguilAeIgGAAQANBvgHCJgABw4JQACAYgLAHQhAAqhCAhQAAAGACAGQAWBSCAgXQAzgxgRh0QgViKA6gEQAVAVAHAVQAvCGAIhdQAAgGgCgEQg5hhhfg7QgUBcAHB5g");
	this.shape_13.setTransform(-0.7432,177.4628);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.91)").s().p("AiXB7QgCgFAAgGQBEgvBJgGQABAAAAgSQgJiEAUhnQBnAyAwBoQADAFAAAGQgQBJgmh/QgFgRgYgMQg5AEAWCJQASB4hBAiQghAMgaAAQg/AAgShIg");
	this.shape_14.setTransform(-72.125,99.1646);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.518)").s().p("AAACUQgFiUAAiTIALAAIAAEbIAAAMg");
	this.shape_15.setTransform(-24.25,42.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.969)").s().p("AiJAuQgEgDgGAAQgrgygahDQgCgGAAgGQDaAdDbgXIAAAGQgWBghSAmQgDABAAAGQg5AUg1AAQhKAAhBgpg");
	this.shape_16.setTransform(-1.775,343.6967);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.98)").s().p("Ah5DHQhKgKhBgnQizhrgzjuQEwCaGghLQCTgcByg/Qg+GfmjAAQg9AAhGgJg");
	this.shape_17.setTransform(-1.775,159.5345);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.988)").s().p("AjPLKIgLgBQgoiPAEjIQAMorAAosQDsBvD4hhQAGgCAGAAQAJLUgaK2QgBAMgGAMQhvAdhuAAQhsAAhsgcg");
	this.shape_18.setTransform(-1.7025,257.8251);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.957)").s().p("AkCEWQiAgZhugyIAAiCIAAgMQBdl8HOANQCYAEBjBMQCoCBATEUQjLCBkTAAQiCAAiTgeg");
	this.shape_19.setTransform(-1.175,116.0677);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.49)").s().p("AAACUQgFiUAAiTIALAAIAAEbIAAAMg");
	this.shape_20.setTransform(71.525,51.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.471)").s().p("AgFB2IAAj3QATBzgOCPQAAABgFAAIAAgMg");
	this.shape_21.setTransform(38.4504,50.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.949)").s().p("AjxCFQAngrBbAHIAMABQAGAAAAgBQAOiPgUhzIAAgMIAAgYQCqgdCnAuQAEABAAASIgLAAQAACUAGCSIAFAAQAAAGgBAGQgXBNh1gSQgGAAgDgDQhchbCUgMQASAAABgFQAlhtgJiRIgMAAIjrAAIAAAMIAAE+QgGAAgEADQgxAlgnAAQg4AAgjhMg");
	this.shape_22.setTransform(47.875,53.252);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.914)").s().p("AiXCFQgCgGAAgGQBDghBBgqQAKgHgBgYQgHh4AThcQBfA7A4BhQADAEAAAGQgJBcguiFQgIgVgUgVQg6AEAVCJQARB0gzAxQgbAGgXAAQhTAAgShBg");
	this.shape_23.setTransform(11.825,21.3507);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.906)").s().p("AAYG/IAGAAQA+gjBDgHIABgGIAAjgIAAgMIjsAAIgMAAQASDIgrCOQgEANgGALQh/AVgZhQQgCgGAAgGQBDghBAgqQALgHgBgYQgIh/AVhiQCQgUCuAOIAAAGQAlDRg2C0QgBACgFAAQgrARgeAAQhFAAgGhYgAgbjXIgBgLQBPgjAzgeQAKgGAAgYIAAjVQB4AuAsB4QACAGAAAGQgQA3gZhlQgJgogtgJQgnAPARB/QAPBug0AsQgmAOgdAAQhBAAgThKg");
	this.shape_24.setTransform(88.075,104.7212);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.945)").s().p("EACaAiRIkbAAQnghAlgi8Qldi7kKkKQoQoRh2utIAAgMIAAlWQCjuAJcnHQIgmcNghdIDVAAIALAAQN1CuH3IsQDrEDC1FAQCvE4BDGoIAAEbIAAAMQg8GLigElQl4KsqRGUQlIDKncA3IAAAMIgMAAgAqY/pQmZCCk0DbQptG7ihOBQAACCAKCCQA/NKGYH9QHXJMNBDfQDTA4EPgZQJRg2GDkQQJxm1FKraQB7kPgPmJQgTnxjClKQmKqhqrl7Qj8iLlagpQibgTiSAAQlJAAklBdgArQyvQBFg1BSgMQACAAAAgSQAIiJgNhvIAFAAQCmgeChAuQAFACgBARIgLAAQgBCUAHCUIAFAAQABAGgCAFQgjBYhqgoQgFAAgCgDQhNhlCQAJQAFAAACgCQAuhjgSifIgLAAIjtAAIAAAMIAAE/QgGAAgEADQgxAkgnAAQg4AAgjhKg");
	this.shape_25.setTransform(0,177.175);

	this.instance = new lib.show_txt_gray();
	this.instance.setTransform(0.05,417.4,1,1,0,0,0,185.7,38.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAiCWnQgEgCgFAAQgkgsgXg5QgBgEAAgFQC5AYC4gTIAAAFQgSBShGAgQgCABAAAFQgxARgrAAQhAAAg2gjgAi+UGIgJgBQgih5AEipQAKnWAAnWQDHBdDThSQAEgBAFAAQAIJlgXJLQAAAKgFAKQheAYhcABQhcAAhcgYgAh1ATQg/gIg3ggQiXhbgrjKQEBCDFfhBQB9gXBgg1Qg1FflgAAQg1AAg7gIgAL9jqIAFAAQA0gdA5gGIABgFIAAi+IAAgKIjIAAIgKAAQAPCqgkB3QgEALgFAKQhrASgWhEQgBgFAAgFQA5gcA2gkQAJgGgBgUQgHhsAShSQB7gRCTAMIAAAFQAfCxguCXQAAACgFAAQgkAOgaAAQg6AAgFhKgAjkkZQhsgUhdgrIAAhuIAAgKQBOlCGHAKQCAAEBVBBQCNBsAQDrQirBsjoAAQhuAAh9gZgArioqIgBgKQA5gnA+gGQABAAAAgPQgIhxAShXQBYArAoBYQACAEAAAFQgNA/ghhtQgEgOgUgKQgxADATB1QAQBlg4AdQgcAKgWAAQg1AAgQg8gALRsbIgBgJQBEgeArgZQAJgFAAgUIAAi0QBlAmAlBnQACAEAAAFQgOAugUhVQgIghgmgIQghANAOBrQANBegsAkQggAMgZAAQg4AAgQg/gADIumQAigkBMAFIAKABIAAgKIAAjSIAAgKIAAgUQCRgZCNAnQAEABAAAPIAADwIAAAKQAAAFgCAFQgSBBhkgPQgFAAgDgDQhNhNB9gKQAPAAABgEQAghdgIh7IgKAAIjIAAIAAAKIAAEOQgFAAgDACQgqAgghAAQgvAAgehAgAphv2QA7gsBFgKQACgBAAgPQAGh0gLheIAFAAQCMgZCIAnQAEABAAAPIAADwIAAAKQAAAFgCAFQgdBKhZgiQgFAAgCgDQhAhVB5AIQAFAAABgCQAnhTgPiHIgKAAIjIAAIAAAKIAAEOQgFAAgDACQgqAfghAAQgwAAgdg/gAgcy0QgBgFAAgFQA4gcA2gkQAJgGgBgUQgGhmARhOQBQAyAwBRQACAEAAAFQgHBPgnhyQgHgSgRgRQgxAEASB0QAOBigrAqQgYAEgTAAQhGAAgPg2g");
	this.shape_26.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1,lineWidth:367}}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.text,p:{y:397.9,font:"normal 400 65px 'Rubik'",lineHeight:79.05,lineWidth:396}}]},1).to({state:[{t:this.shape_26},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.3,-42.1,444.6,519.1);


(lib.sea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("ים", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 92;
	this.text.parent = this;
	this.text.setTransform(0,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAFmrGQrqBJnKF5Qh8BlhkB7QjMD3jbDoQGhCeIgAZQN/AqMuhVQBxgMBgAAQBnAAARhEQAAgKgEgCQhRgmiGAWQh/AVh9gIQkLgRiqhcQjVhzABlAQA8imB+hkQBNg+B/ADQFdAGCnDKQAXAcARAcQA4BbBEgUQAUgBgCgHQhcm2mxiiQithCjoAAQhZAAhhAKg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.945)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOg");
	this.shape_1.setTransform(0,185.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.992)").s().p("AoaKbQoggamhieQDbjnDMj5QBjh5B9hmQHJl4LrhKQFggiDvBaQGwCjBdG2QACAHgUAAQhFAUg3hbQgRgbgYgcQinjKlcgHQiAgChNA9Qh9Blg8ClQgCFBDVByQCrBcELASQB9AHB/gUQCGgWBRAlQAEACAAAKQgRBEhnABQhhAAhwALQoiA5pHAAQkdAAkngNg");
	this.shape_2.setTransform(0,181.6907);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD7E63").s().p("EgF3Ag+QtNjindpUQmcoDhBtWQgJiDAAiEQCjuMJ0nAQE4jfGfiDQGtiJH6A9QFeAqD/CNQK1GAGPKpQDEFPATH3QAPGOh8ETQlPLjp5G7QmIETpYA3QhVAIhOAAQixAAiUgngAGstTQt9BYolHDQiUB5h4CTQj0EokGEWQHzC9KLAeQQwAzPQhnQCGgNB0AAQB7gBAVhRQAAgMgFgDQhhgtihAbQiYAYiVgJQlAgVjMhuQj/iJABmAQBIjGCWh5QBdhJCYADQGiAHDIDyQAbAiAVAhQBDBtBSgYQAXgBgCgIQhuoNoGjCQjQhOkWgBQhqAAh1AMg");
	this.shape_3.setTransform(-0.7441,177.9021);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.992)").s().p("AqFMeQqLgenzi9QEFkWD0kpQB4iSCVh5QIlnDN9hYQGmgqEeBtQIGDCBvINQACAIgYABQhSAXhChsQgVghgbgiQjJjymhgHQiZgDhcBJQiXB5hHDGQgCGAD/CJQDNBuE/AVQCVAJCZgYQCggbBiAtQAEADAAAMQgUBRh8ABQhzAAiHANQqNBFq5AAQlXAAligRg");
	this.shape_4.setTransform(0,173.0343);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.945)").s().p("EACcAiuIkeAAQnnhBlki/Qlhi9kOkOQoYoXh3u6IAAgMIAAlaQCmuLJjnOQInmiNsheIDWAAIAMAAQOBCwH+I0QDuEHC2FDQCyE9BEGtIAAEfIAAAMQg9GQijEpQl8K1qZGYQlMDOnkA3IAAANIgLAAgEgKgggDQmfCDk4DfQp0HAikONQAACDAKCDQBANWGdIDQHdJUNNDiQDVA5ETgaQJYg2GIkUQJ5m6FPrkQB8kTgPmOQgUn3jElPQmOqoq1mAQj/iNlegrQidgSiUAAQlOAAkoBeg");
	this.shape_5.setTransform(0,177.6);

	this.instance = new lib.sea_txt_gray();
	this.instance.setTransform(-0.05,416.5,1,1,0,0,0,43.6,37.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAoaJ0QoggZmhieQDbjoDMj3QBjh6B9hmQHJl4LrhKQFggiDvBaQGwCiBdG3QACAGgUABQhFAVg3hcQgRgbgYgcQinjLlcgGQiAgChNA9Qh9Blg8ClQgCFBDVByQCrBcELARQB9AIB/gUQCGgXBRAmQAEACAAAKQgRBEhnAAQhhAAhwAMQoiA5pHAAQkdAAkngOg");
	this.shape_6.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1,lineWidth:92}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.text,p:{y:397.9,font:"normal 400 65px 'Rubik'",lineHeight:79.05,lineWidth:90}}]},1).to({state:[{t:this.shape_6},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.1,-44.5,450.29999999999995,521.5);


(lib.restaurant = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("מסעדה", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 211;
	this.text.parent = this;
	this.text.setTransform(0,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("AmUbLQkDhNjQh+QjOh9ioilQioimh9jNQh/jPhPkAQhOj9ABlMQAHgMgDgWIAAgEQAUkmBgjWQBojoCaizQCaizDGiFQDIiGD1hXQD2hXEughQEageDlBNQD7BTDJCDQDLCDCoClQCnCkCGDIQCGDGBUD4QArB9AQCUQAeEehJDmQhRD7iCDLQiDDKikCoQilCpjFCHQjFCIj3BVQh9AriQAQQhpALhhAAQjVAAizg1gAuvINIFsAAQgJA/gFBGQgFBDgNBCQgeChBpAyIBHAAILsAAQBeAABdAGQCGAKA4g9QAMgOAAgQQADjKgcjIIAEAAIFkAAQAQCnAjCQQAXBcAzA5IAEABQAVAHANgVQAHABABgJQABglgNgkQhZjwgFk7QgHl1A9k8QAfihARidIgBgEQgLgOgaABQgPABgEAMQgnCIgaCUQg4E9gCF1IgEAAQiqgZjCAAQgLg0gCg9QgDhigsg5QgKgNgQgEQg3gNgrgUIgCAAQgJg1AChAQAVgXAJgjQALgtgHgWQgHAagZAMQgaAMgTgOQACA9AdApIAAAEQACA5gGAwIgFAAQg0AThNgHQAAgoABgnQAHiAgehdQgnh8APiVIgEgBQgWgHghAEIgEAAQgMAFgBAQQAZBjgdBhQgMAogHApQgUCBAFCWQhyAAhyAEQh5AEhdgUIAAgFQgHg1ADhAIABgDQAyhNgJiJIgEAAIhhAAIAAAEQgICGAyBLIAAAEQAJA9gJA9IgEAAQhBAOhJAGQgLANgMAKQgNAMgFAQQgdBzgKCDIgEAAQjJgHinAcQABivgOibQgilZhKkrQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgmgcgZAqIA4EpQA6E6gHF4QgGFrhlERIACABQAHAZAcADQAIAAAFgEQAEgEACgDQBbjFAckAIAEAAgAF/lyIBYAAIAAAEQgDArAHAgIAAgEIAAhTIgEAAIhgAAIAAAEQgDArAHAgIAAgEIAAhDIAEAAgAgNqMQBzAbA3hMIAEAAQBkAEBZgIQgCgsgMggIgWhEQhBjNi4hSIAAgEIAAkEIgBgDQgGgVgjAIQgGAAAAABQgOCGADCRQgjAKgZAVQilCEg6DvIAAAMQAAAJABAAQBcAQBogEQAVAmAuALgAKLH0IgEAAQgDgfgFgcIAAgEQDDAHCcggIAEAAQAGAnADAsIAAAFIlgAAgAuzHxIAAgCQAHglACgqIAAgEQCnAdDFACIAAACQADAlgRARQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQiyAAiygDgAGhgfQAJgYADgDIADAFQALAYgOAAQgFAAgHgCgAlUgfQAIgZAFgCIACAFQALAYgOAAQgEAAgIgCgAlxj/IAAgCQgLgwADg9IAAgEIBXAAIAFAAQACA+gSAsQgBADgFAEIgIAJQgcgBgagGgAg2q6QgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQBbAABcADIAAABQguAkgtAAQguAAgtglg");
	this.shape.setTransform(-0.2034,178.7459);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.192)").s().p("AgBAPIAAghIADAAIAAAEQADAVgGAMIAAgEg");
	this.shape_1.setTransform(-182.205,159.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.631)").s().p("AgCAPIAAghIAEAAIAAAEQADAVgHAMIAAgEg");
	this.shape_2.setTransform(-187.2321,159.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.737)").s().p("AAugeIABgFIhXAAIgFAAIAABCIAAAFQgHghADgqIAAgEIBgAAIAEAAIAABTIAAAEQgIggADgqg");
	this.shape_3.setTransform(42.23,145.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.992)").s().p("AgxF8QgugMgVglQhnADhdgPQgBgBAAgIIAAgNQA6jvCliCQAagVAjgKQgCiSAOiGQAAgBAFAAQAigIAHAVIAAAEIAAEDIAAAFQC5BRBADNIAWBDQANAgABAtQhZAHhjgDIgFAAQgoA4hKAAQgaAAgegHgAhaFOQBaBJBchIIAAgCQhcgChbAAQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAg");
	this.shape_4.setTransform(3.35,75.4685);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.988)").s().p("AG7NQQhegHheAAIrsAAIhHAAQhpgyAfihQAMhCAFhCQAFhGAKhAIlsAAIgEAAQgdEAhbDFQgBAEgFADQgEAFgIAAQgcgDgIgaIgCgBQBmkQAGlsQAGl3g6k6Ig4kpQAZgqAmAcQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQBLEsAhFYQAPCcgCCuQCngcDJAHIAFAAQAJiBAehzQAEgRANgMQANgLAKgMQBKgGBAgPIAFAAQAJg9gJg8IAAgEQgzhMAJiGIAAgEIBgAAIAEAAQAKCKgzBMIgBAEQgCA/AGA2IAAAEQBeAUB4gEQBzgDByAAQgGiWAViCQAGgoAMgoQAdhhgYhkQABgQAMgEIADgBQAhgDAWAHIAEABQgPCVAoB8QAdBcgGCAQgCAoAAAoQBOAGA0gSIAEgBQAHgwgDg4IAAgFQgcgpgCg9QATAOAagMQAYgLAHgbQAIAWgMAtQgJAjgUAYQgDA/AJA2IACAAQAsATA3AOQAPAEAKANQAtA6ADBgQABA9ALA0QDCABCrAYIAEAAQABl0A4k9QAaiVAoiHQADgNAQAAQAagCALAPIABADQgRCdgfCiQg9E7AGF2QAGE7BZDwQANAkgCAlQgBAJgHgBQgMAVgVgIIgEgBQg0g5gWhbQgjiQgRioIljAAIgFAAQAcDJgDDJQAAARgMANQgwA1hqAAIgjgBgAJjEZQAFAcADAeIAFAAIFfAAIAAgEQgCgsgGgoIgEABQicAgjEgIIAAAFgAvGEAQgCAqgGAlIAAACQCxACCyAAQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQASgRgEgkIAAgDQjEgBiogeIAAAFgAGFjAQAeALgPghIgCgFQgEADgJAYgAlvjAQAeALgPghIgDgFQgFACgHAZgAmVoOQgDA9ALAwIABACQAaAFAcABIAIgIQAEgEACgEQASgsgDg+IgEAAIhYAAIAAAFg");
	this.shape_5.setTransform(2.5078,194.754);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.973)").s().p("ABlc2IibAAQlLgcj7hqQkJhxjRimQjRilihjWQigjVhpkPQhpkOgYldIAAgEIAAh6QAHgLgCgWIAAgEIAAgEIAAguQAplNCBj2QCAj2C9i6QC8i6D1iCQD1iCEzhDQC6goDQgSIBoAAIADAAQFTAkD2B/QD5B/DICuQDJCuCiDUQCiDVBtEKQBQDDAXD6IAACJIAAAFQgaD2hPDEQhrEIifDXQigDXjKCtQjKCtj3CBQj1CAlYAeIAAAFIgDAAgA8fiyIAAADQgBFNBND9QBQD/B+DQQB+DNCoClQCoCmDOB9QDPB+EDBNQEHBOFLgkQCRgQB8grQD4hVDFiIQDFiHClipQCkioCDjLQCCjKBQj7QBKjmgekeQgQiUgrh9QhVj4iFjGQiGjIinilQipikjKiEQjKiCj6hTQjlhNkaAeQkuAgj2BYQj1BWjICGQjHCGiZCzQibCyhnDpQhgDWgVEmIgDAAIAAAig");
	this.shape_6.setTransform(0,178.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FD7E63").s().p("AnTfYQkrhZjwiRQjuiQjCi/QjCjAiRjtQiSjvhcknQhaklABl/QAJgNgEgaIAAgEQAXlUBwj4QB3kMCyjOQCyjPDkiaQDniaEchlQEchkFdgmQFFgiEJBYQEhBgDpCXQDqCXDCC/QDBC+CbDmQCaDlBhEfQAyCQASCqQAjFLhVEKQhdEiiWDqQiXDqi9DCQi/DCjkCdQjjCckeBjQiPAxinATQh5ANhwAAQj2AAjPg+gAxBJeIGkAAQgLBJgGBRQgFBNgPBMQgjC6B5A6IBSAAINgAAQBtAABsAHQCaALBAhGQAOgQAAgTQAEjpghjnIAGAAIGaAAQATDBApCnQAaBpA7BCIAFABQAYAJAOgYQAIABACgLQABgqgPgqQhmkVgHlsQgHmvBGlsQAki7AUi1QAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgMgRgeACQgSAAgEAPQguCcgeCsQhBFugBGuIgFAAQjFgcjggBQgMg8gChGQgEhxgzhCQgMgPgSgFQg/gPgygXIgDAAQgKg9ADhKQAYgbAKgoQANg0gIgaQgIAfgdANQgeAOgWgQQADBGAhAwIAAAFQACBBgHA4IgFAAQg8AVhagHQAAguACguQAHiUgihqQgtiQARisIgFgBQgZgIgmAEIgEABQgOAFgBASQAcBzghBwQgOAugIAvQgXCWAGCtQiEAAiEAEQiLAFhsgXIAAgGQgIg9ADhKIABgEQA7hYgLifIgFAAIhvAAIAAAFQgKCaA6BYIAAAEQALBGgLBHIgFAAQhKAQhVAHQgMAPgPALQgPAOgFATQgiCFgLCXIgFAAQjogIjBAgQABjKgQizQgnmOhWlaQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBQgsgggcAxIBAFXQBDFqgHGyQgHGkh1E6IACABQAJAeAgADQAJAAAFgFQAGgEABgEQBpjjAhkoIAFAAgAG6msIBmAAIgBAGQgDAxAIAlIAAgEIAAhhIgEAAIhwAAIAAAFQgDAxAIAmIAAgFIAAhOIAFAAgAgQrxQCFAfBAhXIAFAAQBzAEBngJQgCgzgOglIgahOQhLjtjUhfIAAgFIAAkrIgBgEQgHgZgpAJQgGAAAAACQgRCaAECoQgpAMgdAYQi/CYhDEUIAAAOQAAAKACABQBqASB4gEQAYArA1ANgALwJBIgGAAQgDgjgGggIAAgGQDiAJC0glIAFgBQAHAuADAzIAAAFImWAAgAxGI+IAAgCQAIgrACgwIAAgGQDBAjDjABIAAADQAEAqgUAUQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQjOAAjNgDgAHhgkQAKgcAEgDIADAFQAOAdgRAAQgFAAgJgDgAmJgkQAJgdAGgCIADAFQANAdgRAAQgFAAgJgDgAmqkmIgBgDQgNg3AEhGIAAgGIBlAAIAFAAQADBIgVAzQgCAEgFAEIgJAKQgggBgegGgAg/smQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQBpAABrADIAAABQg1Apg1AAQg0AAg1gqg");
	this.shape_7.setTransform(-0.2401,171.344);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.631)").s().p("AgCARIAAgmIAEAAIAAAFQADAYgHANIAAgEg");
	this.shape_8.setTransform(-216.199,149.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.192)").s().p("AgCARIAAgmIAEAAIAAAFQADAYgHANIAAgEg");
	this.shape_9.setTransform(-210.399,149.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.988)").s().p("AH/PTQhsgHhsAAItgAAIhSAAQh5g6Aji6QAOhMAGhNQAGhRALhJImlAAIgEAAQghEohpDjQgCAEgFAEQgFAFgKAAQgggDgJgeIgCgBQB1k6AHmkQAImyhDlqIhBlXQAdgxAsAgQAAABABAAQAAAAABABQABAAAAAAQABAAAAAAQBXFaAmGOQARC0gCDJQDBggDoAIIAFAAQALiWAiiFQAGgTAPgOQAOgMAMgPQBVgHBKgQIAGAAQAKhHgKhGIAAgEQg7hYAKiaIAAgFIBwAAIAEAAQALCfg6BYIgBAEQgDBKAHA9IAAAGQBsAXCLgFQCFgECDAAQgGitAYiWQAHgvAOguQAihwgdhzQACgSANgFIAEgBQAngEAZAIIAFABQgSCsAuCQQAiBqgICUQgBAuAAAuQBZAHA8gVIAFAAQAIg4gDhBIAAgFQghgwgChGQAWAQAegOQAcgNAIgfQAJAagNA0QgLAogYAbQgCBKAKA9IACAAQAyAXBAAPQASAFALAQQA0BCADBwQACBGANA8QDgABDFAcIAEAAQACmuBBluQAeisAticQAEgPASAAQAegCANARQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQgUC1gjC7QhHFsAIGvQAGFsBnEVQAPAqgCAqQgBALgIgBQgPAYgYgJIgEgBQg8hCgahpQgoingTjBImbAAIgFAAQAgDngDDpQAAATgOAQQg3A9h8AAIgogCgALCFFQAGAgADAjIAFAAIGWAAIAAgFQgDgzgHguIgEABQi1AljhgJIAAAGgAxbEoQgDAwgHArIAAACQDNADDNAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQAUgUgEgqIAAgDQjjgBjBgjIAAAGgAHBjdQAjAMgRgmIgDgFQgEADgLAcgAmojdQAiAMgRgmIgDgFQgGACgIAdgAnUpfQgDBGANA3IAAADQAeAGAhABIAJgKQAFgEACgEQAUgzgChIIgGAAIhlAAIAAAGg");
	this.shape_10.setTransform(2.9068,189.8382);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.737)").s().p("AA2gjIAAgGIhkAAIgFAAIAABNIAAAFQgJglAEgxIAAgFIBuAAIAFAAIAABgIAAAEQgJgkAEgxg");
	this.shape_11.setTransform(48.749,132.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.992)").s().p("Ag5G3Qg1gNgYgsQh4AEhqgSQgCAAAAgKIAAgOQBDkUC/iXQAdgZAqgLQgEioARibQAAgBAGAAQAogJAHAYIABAEIAAEsIAAAFQDUBeBLDsIAaBOQAOAlACA0QhnAIhzgEIgFAAQgvBBhVAAQgeAAgjgIgAhoGCQBoBUBrhTIAAgCQhrgDhpAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABABAAg");
	this.shape_12.setTransform(3.875,52.0846);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.973)").s().p("EAB0AhTIiyAAQl+ggkjh7QkxiCjyi/Qjxi/i5j3Qi6j2h5k5Qh5k4gcmTIAAgEIAAiNQAIgNgDgZIAAgFIAAgFIAAg1QAxmACTkcQCVkcDZjXQDajXEbiVQEbiXFjhNQDXgvDvgVIB4AAIAFAAQGHAqEcCSQEeCUDoDIQDpDJC6D2QC7D1B/E0QBbDgAbEhIAACeIAAAGQgeEchaDiQh8Eyi5D4Qi4D4jqDIQjoDHkeCVQkbCUmMAjIAAAFIgFAAgEgg6gDOIAAAEQgBGABaElQBcEnCSDvQCRDtDCC/QDBC/DvCQQDwCREqBaQEwBaF/gqQCmgSCQgyQEehiDjidQDkicC/jDQC9jCCXjqQCWjqBdkhQBVkKgjlLQgSiqgyiRQhhkeibjlQiajnjBi+QjCi+jriXQjoiXkihhQkIhYlFAjQleAlkcBlQkbBkjnCbQjkCaiyDOQiyDPh3EMQhwD4gXFTIgFAAIAAAng");
	this.shape_13.setTransform(0,171.475);

	this.instance = new lib.restaurant_txt_gray();
	this.instance.setTransform(0.05,416.5,1,1,0,0,0,113.2,37.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.2)").s().p("ABlc2IibAAQlLgcj7hqQkJhxjRimQjRilihjWQigjVhpkPQhpkOgYldIAAgEIAAh6IAAgDIAAgiIAFAAIAAgEIAAguQAplNCBj2QCAj2C9i6QC8i6D1iCQD1iCEzhDQC6goDQgSIBoAAIADAAQFTAkD2B/QD5B/DICuQDJCuCiDUQCiDVBtEKQBQDDAXD6IAACJIAAAFQgaD2hPDEQhrEIifDXQigDXjKCtQjKCtj3CBQj1CAlYAeIAAAFIgDAAgAhk74QkuAgj2BYQj1BWjICGQjHCGiZCzQibCyhnDpQhgDWgVEmIAAAEQADAWgGALQgBFNBND9QBQD/B+DQQB+DNCoClQCoCmDOB9QDPB+EDBNQEHBOFLgkQCRgQB8grQD4hVDFiIQDFiHClipQCkioCDjLQCCjKBQj7QBKjmgekeQgQiUgrh9QhVj4iFjGQiGjIinilQipikjKiEQjKiCj6hTQilg3jAAAQhKAAhQAIgAHUPvQhdgGheAAIrtAAIhGAAQhpgzAeihQANhBAEhDQAGhGAJg/IlsAAIgEAAQgdEAhaDEQgCAEgFADQgEAFgIAAQgcgDgHgaIgDgBQBmkQAGlrQAGl4g5k6Ig5kpQAagqAlAcQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAQBKEsAiFZQAOCbgCCvQCogcDIAGIAFAAQAJiCAehzQAEgRANgMQANgKALgMQBJgGBBgPIAEAAQAJg8gJg9IAAgEQgyhMAIiFIAAgFIBgAAIAFAAQAJCKgzBMIgBAEQgCBAAHA1IAAAEQBdAVB4gEQBzgEByAAQgFiWAUiCQAHgoAMgoQAchhgYhjQABgRAMgEIADgBQAhgDAWAHIAFABQgQCVAoB8QAeBdgHCAQgBAnAAAoQBNAGA0gSIAFgBQAGgvgDg5IAAgEQgcgqgCg8QATAOAagMQAZgMAGgaQAIAVgLAtQgKAkgUAXQgDBAAJA1IACAAQAsAUA3ANQAPAEAKAMQAtA6ADBhQABA+AMAzQDBABCrAZIAEAAQABl1A4k9QAaiUAoiIQADgMAQgBQAagCALAPIABAEQgRCdgfChQg9E8AGF1QAGE7BZDwQANAkgCAlQAAAJgIgBQgMAVgVgIIgEgBQgzg4gXhcQgjiQgRinIljAAIgFAAQAcDIgCDKQgBAQgLAOQgxA0hqAAIgjgBgAJ8G4QAGAcACAeIAFAAIFgAAIAAgEQgDgsgGgoIgEABQicAgjEgIIAAAFgAusGfQgCAqgHAlIAAACQCyADCxgBQABAAABAAQAAAAABAAQAAAAAAAAQAAAAABgBQARgRgEgkIAAgCQjEgCingeIAAAFgAGfggQAdALgPghIgCgFQgEACgIAZgAl8lvQgDA9ALAwIABACQAaAFAcACIAIgJQAEgEACgEQASgrgDg/IgEAAIhYAAIAAAFgAHVlvIAAgFIhYAAIgFAAIAABEIAAAEQgGghADgqIAAgFIBgAAIAEAAIAABUIAAAEQgIggAEgrgAgPqNQgvgLgVgmQhnADhcgPQgCgBAAgIIAAgMQA7jwCkiDQAagVAjgKQgDiSAOiGQAAgBAGAAQAjgHAGAVIABADIAAEEIAAAEQC4BRBADOIAXBEQAMAfABAtQhYAHhkgDIgEAAQgpA4hKAAQgaAAgdgHgAg5q7QBbBJBchIIAAgBQhcgDhcAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_14.setTransform(0,178.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1,lineWidth:211}}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.text,p:{y:397.9,font:"normal 400 65px 'Rubik'",lineHeight:79.05,lineWidth:233}}]},1).to({state:[{t:this.shape_14},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.5,-41.6,433,518.6);


(lib.pub = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("פאב", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 137;
	this.text.parent = this;
	this.text.setTransform(0,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAsZwqQAeA3AjAzQFoIWFjIbIAAAKIAALaQgFAAgEABQkJBZi6CqQDMA9ETgFQEKgGDWgyQgFAAgDgDQjFiij/hpIAAgKIAAraQAmgwAjgyQF0oYFFoXQgFgFgFAAQpGgXpfgFIgYAAQjNAAihAhgABDpXQhYgEhEgcQjkhgjignQhSiFhViBQgDgDAAgFQLPAALQAFIAAAFQhLB4hSBwQgDADAAAFQgVAPgeANQgEACgFAAQiZCdj+AAIggAAg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAnfRbQC5iqEJhYQAFgCAFAAIAAraIAAgKQljoblooWQgjgzgeg3QCrgiDbACQJfAFJGAWQAFAAAFAFQlFIXl0IYQgkAzglAvIAALaIAAAKQD/BqDFChQADADAFAAQjWAzkKAFIgsAAQj4AAi7g4gArMwBQBVCABSCFQDiAnDkBgQBEAcBXAEQEWAKCiinQAFAAAEgCQAegNAVgPQAAgFADgDQBShwBLh4IAAgFQrQgFrPAAQAAAFADAEg");
	this.shape_1.setTransform(0,185.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FD7E63").s().p("EgF0AgyQtIjhnapQQmboAhAtRQgKiDAAiDQCiuHJym+QE2jdGciDQGriIH3A9QFcAqD+CMQKwF+GNKlQDDFNATH1QAPGLh7ERQlNLfp1G5QmGERpVA3QhVAIhOAAQiwAAiSgngAuwz2QAkBBApA9QGtJ8GnKCIAAAMIAANlQgGAAgFACQk8BqjdDKQDyBJFJgHQE8gGD/g8QgGAAgDgDQjrjBkvh+IAAgMIAAtlQAsg5Aqg8QG8p+GDp9QgGgGgGAAQq2gbrTgGIgdAAQjzAAjAAngABQrKQhpgEhRgiQkPhzkNguQhiiehmiaQgDgEAAgGQNZAANZAGIAAAGQhZCPhiCFQgDAEAAAGQgZASgkAPQgFADgGAAQi2C8kvAAIgmgBg");
	this.shape_2.setTransform(-0.7685,178.1521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.976)").s().p("Ao1UEQDdjKE8hqQAFgBAGAAIAAtmIAAgMQmnqCmtp7Qgpg9gkhCQDLgpEFACQLTAGK2AbQAGAAAGAGQmDJ9m8KAQgqA7gsA4IAANmIAAAMQEvB9DrDBQADADAGAAQj/A8k8AHIg1AAQkoAAjehDgAtQzxQBmCaBiCdQENAvEPByQBRAiBpAEQFKANDBjIQAGAAAFgCQAkgQAZgSQAAgFADgEQBiiFBZiPIAAgGQtZgGtZAAQAAAGADAEg");
	this.shape_3.setTransform(-0.575,182.2445);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.945)").s().p("EACbAihIkdAAQnjhBlji9Qlfi9kMkLQoVoVh2u0IAAgMIAAlYQCkuGJgnLQIkmfNnheIDVAAIAMAAQN7CvH8IxQDsEFC1FCQCxE6BEGrIAAEdIAAAMQg9GOihEnQl6KxqWGXQlKDLnhA4IAAAMIgLAAgAqd/3QmcCDk2DcQpyG+iiOIQAACDAKCCQBANRGbIAQHaJQNIDhQDUA5ERgZQJVg4GGkRQJ1m4FOrgQB7kRgPmLQgUn1jDlNQmMqlqxl9Qj+iNlcgpQicgTiUAAQlLAAknBeg");
	this.shape_4.setTransform(0,177.85);

	this.instance = new lib.pub_txt_gray();
	this.instance.setTransform(0,416.5,1,1,0,0,0,69.3,37.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAnfRbQC5iqEJhYQAFgCAFAAIAAraIAAgKQljoblooWQgjgzgeg3QCrgiDbACQJfAFJGAWQAFAAAFAFQlFIXl0IYQgkAzglAvIAALaIAAAKQD/BqDFChQADADAFAAQjWAzkKAFIgsAAQj4AAi7g4gArMwBQBVCABSCFQDiAnDkBgQBEAcBXAEQEWAKCiinQAFAAAEgCQAegNAVgPQAAgFADgDQBShwBLh4IAAgFQrQgFrPAAQAAAFADAEg");
	this.shape_5.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1,lineWidth:137}}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{y:402.15,font:"normal 400 65px 'Rubik'",lineHeight:79.05,lineWidth:151}}]},1).to({state:[{t:this.shape_5},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.9,-43,447.8,524.2);


(lib.park = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("פארק בטבע", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 301;
	this.text.parent = this;
	this.text.setTransform(-0.05,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr4INl1QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAmnLnIAAAKQAAAFgCABQiNBGhXB8IAAAKIAABaQAFAAABACQDRGEI+geQjNhehwi3QgvhMAqhKQCPj+EDiLIgKgBQjdgVioBSIAAgKIAArFQAFAAAFABQA2APBMgGQAAgFACgBQCWgvARixQDqgQBUiqQAbg2AAhGQgDk9j8hTQAgj3idhuQgogcgwgMQkMhHiKCoQgtg3hNgPQmXhOg9F6QgFAAgCACQhcBTgpCHQgCEpDVBRQAEACAFAAQhOE6DyCBQCiBVCkhOIAAL3gAG+DBQAIDZgSDBQgFAAgEACQjEBih9DcIAAAKQgDBEANA0QAFAAADACQCuC1DkB/QD3g/B2i/QAbgsgJg7QgrkMjwhVIAAgKQgHkHARjtIAKABQBSAUBEgpQAAgFADgCQA7gvAIhfQBigIA+grQBBgtAVhOQBOkkj+hKQAejiiihQQi6hdiOCBQAGAiANAaQAOAbADAZQA+GqmOAgIAAAKQgMCeiAAqQADBbAmA2QB6CyD3hUIAAAKg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.467)").s().p("AgEGBIAAgKIAAr3QAQF1gMGMg");
	this.shape_1.setTransform(-42.4896,222.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.992)").s().p("AqFQfQgBgCgFAAIAAhaIAAgKQBXh8CNhGQACgBAAgFIAFAAQANmOgSlzQikBOiihVQjyiBBOk6QgFAAgEgCQjVhRACkpQApiHBchTQACgCAFAAQA9l6GXBOQBNAPAtA3QCKioEMBHQAwAMAoAcQCdBuggD3QD8BTADE9QAABGgbA2QhUCqjqAQQgRCxiWAvQgCABAAAFQhMAGg2gPQgFgBgFAAIAALFIAAAKQCohSDdAVIAKABQkDCLiPD+QgqBKAvBMQBwC3DNBeQgqACgoAAQn8AAjBlogAB+QfQgDgCgFAAQgNg0ADhEIAAgKQB9jcDEhiQAEgCAFAAQASjBgIjZIAAgKQj3BUh6iyQgmg2gDhbQCAgqAMieIAAgKQGOggg+mqQgDgZgOgbQgNgagGgiQCOiBC6BdQCiBQgeDiQD+BKhOEkQgVBOhBAtQg+ArhiAIQgIBfg7AvQgDACAAAFQhEAphSgUIgKgBQgRDtAHEHIAAAKQDwBVArEMQAJA7gbAsQh2C/j3A/Qjkh/iui1g");
	this.shape_2.setTransform(-0.8088,185.7064);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.945)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF1iIL4QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOg");
	this.shape_3.setTransform(0,185.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FD7E63").s().p("EgFwAgXQs9jfnUpIQmUn5hAtGQgJiBAAiBQCgt8Jpm3QEyjaGWiBQGmiGHwA7QFXAqD7CKQKnF5GIKcQDAFIATHvQAPGGh6ENQlJLWpsGyQmBEOpNA2QhUAIhNAAQitAAiRgmgAnxNpIAAALQAAAGgCABQinBThlCRIAAAMIAABqQAGAAABACQD1HJKjgkQjxhviEjXQg3hYAxhXQCokrExikIgMAAQkEgajFBhIAAgMIAAtBQAGAAAFABQBAASBZgIQAAgFACgBQCxg3AUjRQETgTBjjHQAghAgBhSQgDl1kohhQAlkii4iBQgvghg5gPQk7hTiiDFQg1hAhagRQnfhdhHG9QgGAAgDADQhsBhgvCeQgDFeD6BfQAFACAGAAQhcFxEcCYQC/BkDBhdIAAN9gAIMDiQAJEAgUDiQgGAAgFACQjmB0iTECIAAAMQgEBQAQA9QAFAAADADQDNDUEMCVQEjhKCKjgQAgg0gLhFQgzk7kZhkIAAgMQgJk0AVkYIALACQBgAXBRgwQAAgGADgCQBFg3AKhwQBygJBJgzQBNg1AYhcQBclXkqhXQAjkJi+heQjbhuimCYQAGAoAQAfQAQAgAEAcQBIH1nTAmIgBALQgNC6iWAxQACBsAtBAQCQDREihkIAAAMg");
	this.shape_4.setTransform(-0.7477,177.6734);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.467)").s().p("AgFHFIAAgMIAAt9QAUG3gPHSg");
	this.shape_5.setTransform(-49.9375,220.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.992)").s().p("Ar2TYQgBgDgGAAIAAhpIAAgMQBmiRCmhTQACgBAAgGIAGAAQAPnTgVm1QjBBci+hkQkciXBclyQgGAAgGgCQj6hfADldQAwieBshiQADgDAGAAQBHm8HfBcQBZASA2BAQCijGE7BUQA4APAvAgQC5CBglEiQEoBiADF0QAABTggA/QhiDIkTATQgVDQiwA3QgCABAAAGQhaAIg/gSQgGgCgGAAIAANCIAAALQDFhgEFAZIAMABQkyCkioEqQgwBXA2BZQCEDXDyBuQgyADgvAAQpVAAjjmngACUTYQgDgDgGAAQgPg9ADhQIAAgLQCTkCDmh0QAFgCAGAAQAVjjgJj/IAAgMQkiBjiQjRQgthAgDhrQCWgxAOi6IABgMQHTglhJn1QgEgdgQggQgPgegHgpQCmiXDbBtQC+BegiEKQEpBXhbFXQgZBchMA1QhJAyhzAJQgKBxhFA2QgDADAAAFQhQAxhhgYIgLgBQgUEXAIE1IAAALQEaBlAyE6QALBFggA1QiKDgkiBKQkMiWjNjUg");
	this.shape_6.setTransform(-0.9507,177.616);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.945)").s().p("EACZAiEIkaAAQnchAlei7Qlbi6kIkIQoOoNh0uoIAAgMIAAlUQCit6JYnFQIcmaNchcIDTAAIALAAQNvCtH1IpQDpECCzE9QCvE3BCGlIAAEZIAAAMQg7GJigEjQl1KoqMGRQlHDJnZA3IAAAMIgMAAgAqU/cQmXCBkxDaQpqG3ifN8QgBCBAKCBQBANGGUH5QHUJIM9DfQDRA3EOgZQJNg2GAkOQJtmyFJrWQB5kNgOmGQgTnvjBlIQmHqcqol5Qj6iKlYgqQiYgSiRAAQlIAAkkBdg");
	this.shape_7.setTransform(0,177.375);

	this.instance = new lib.park_txt_gray();
	this.instance.setTransform(-0.1,416.5,1,1,0,0,0,152.3,37.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF1iIL4QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAqNQhQgBgCgFAAIAAhaIAAgKQBXh8CNhGQACgBAAgFIAAgKIAAr3QilBPiihWQjxiABOk7QgFAAgFgBQjVhSADkpQAoiHBdhSQACgDAFAAQA8l6GYBOQBNAPAtA3QCKioEMBHQAwAMAoAcQCdBuggD3QD8BTACE9QABBGgbA2QhUCqjqAQQgSCyiWAvQgBAAAAAFQhMAGg3gOQgEgCgFAAIAALFIAAAKQCnhSDeAWIAKAAQkDCMiQD9QgpBLAvBLQBwC3DNBeQgqACgoAAQn8AAjBlogAB2QhQgDgCgFAAQgNg0ADhEIAAgKQB9jbDEhjQAEgCAFAAQARjAgHjaIAAgKQj3BUh7ixQglg3gDhbQCAgqALieIABgKQGNggg9mqQgEgYgNgbQgNgagGgjQCOiBC6BdQCiBQgeDiQD+BKhPEkQgUBPhBAsQg/ArhhAIQgJBfg6AvQgDACAAAFQhEAphSgUIgKgBQgSDtAIEHIAAAKQDwBVArEMQAJA7gbAsQh2C/j3A/Qjkh/iui1g");
	this.shape_8.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:-0.05,y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1,lineWidth:301}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text,p:{x:0,y:397.9,font:"normal 400 65px 'Rubik'",lineHeight:79.05,lineWidth:317}}]},1).to({state:[{t:this.shape_8},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.9,-40.6,441.8,517.6);


(lib.iceSkate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("החלקה על קרח", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 225;
	this.text.parent = this;
	this.text.setTransform(0,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAlXwMQhZAIATBIQAHAbgRACQkxAzlFAeQAGCGgFB9QgJELgcD/QgxHPFjBLIABAKQAHBhgSBJQAAAFgBAAQjGAji1AyQAMASAUADQDvArEhgCQOGgFNtgRQAAgFADgCQBDgrAehQIABgKQAFhWgQhAQgFAAgBACQh6CzkugBQgFAAgCgDQglghAOhUQAAgPAFgCQBXggBpgSQE2g2g5lTQgXgMgSgQQjjjGmSgXQgZA3gYAyQgxBghSAIIgFAAQAhh+BShTQAAgFgBgBQh1gehcgEQgFAAgCACQhfB9iKAhIgFAAQBChtBjhRQAAgFgBgBQhcgahNgmQgFAAgCACQhpBjiJATQAAgFADgEQBIhlBzg8QAAgFgCgDQgxg9gnhHQgFAAgDACQh2BRiGARQAAgFADgDQBOhmCBgyIAFgBQAGgugfg/QhLgEhFAvQhRA3hBgcQAAgFADgDQBghdCXgnIgBgKQgkithTh/IgKAAgAp5KXIgKAAIAAiWIAAgKQJ5AbKQASIAAAPQAOBUgkAhQgDADgFAAQpygIpvgMg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAx7L/QgUgEgMgSQC0gyDHgjQABAAAAgFQARhIgGhiIgBgKQljhLAxnOQAckAAJkKQAFh+gGiGQFFgeExgyQARgDgHgbQgThIBZgHIAKgBQBTCAAkCsIABAKQiXAnhgBeQgDACAAAFQBBAcBQg2QBGgwBLAEQAeBAgFAtIgFABQiCAyhNBmQgDADAAAFQCGgRB1hRQAEgCAFAAQAmBHAxA9QADADAAAFQhzA8hJBlQgCAEAAAFQCIgTBphjQADgCAFAAQBNAmBcAaQABABAAAFQhjBRhCBtIAFAAQCJghBgh9QACgCAFAAQBcAEB1AfQABAAAAAFQhSBTghB+IAFAAQBSgIAwhgQAZgyAZg3QGRAYDkDFQASAQAXAMQA5FTk2A2QhpAThXAfQgFACAAAPQgOBUAlAhQACADAFAAQEuABB6iyQABgDAFAAQAQBAgFBWIgBAKQgeBQhDArQgDACAAAFQttASuGAEIgaABQkSAAjkgpgAqJIDIAACWIAKAAQJvAMJyAIQAFAAACgDQAlghgOhUIAAgPQqRgSp4gbIAAAKg");
	this.shape_1.setTransform(0,185.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FD7E63").s().p("AlbelQsQjSm6ooQl/neg8sXQgJh6AAh6QCXtLJImgQEhjOGAh6QGPh/HVA5QFEAnDtCDQKDFkFyJ3QC2E3ASHTQANFxhzD+Qk3KupKGbQlsD/osAzQhQAIhJAAQikAAiIglgAl9x/QhiAJAVBQQAHAdgSADQlTA4lpAiQAGCVgFCLQgLEpgeEbQg3ICGLBTIAAALQAIBsgTBRQAAAGgCAAQjcAnjJA3QAOAUAVAEQEKAwFCgDQPpgFPPgUQAAgFADgCQBLgwAhhZIAAgLQAHhggShHQgGAAgBADQiHDHlQgCQgFAAgDgDQgpglAQhdQAAgRAFgBQBggkB2gVQFXg8g+l4QgagNgUgSQj9jcm+gaQgbA9gcA4Qg1BrhcAIIgFAAQAliMBbhcQAAgFgBgBQiDgihmgEQgFAAgCADQhqCKiZAkIgGAAQBKh5BuhaQAAgFgCgBQhmgdhVgqQgGAAgDACQh0BuiYAVQAAgGADgDQBQhxCAhDQAAgFgDgEQg2hEgrhOQgFAAgEACQiDBaiVATQAAgGADgDQBXhxCQg4IAFgBQAGgzgihGQhTgFhNA1QhaA9hIgfQAAgGADgDQBrhoCogrIgBgLQgpjAhbiNIgMAAgAq/LgIgLAAIAAinIAAgLQK/AfLZATIAAARQAQBdgpAmQgDACgFAAQq4gJq0gNg");
	this.shape_2.setTransform(-0.7041,176.6268);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.988)").s().p("A0oPSQgWgEgNgUQDIg3DdgnQABAAAAgGQAUhRgIhsIgBgLQmLhTA3oDQAfkaAKkpQAFiLgGiVQFpgiFTg4QATgDgIgdQgVhQBjgJIALAAQBcCNAoDAIABALQinArhsBoQgCADAAAGQBIAfBZg9QBNg1BUAFQAiBGgGAzIgGABQiQA4hWBxQgDADAAAGQCUgTCDhaQAEgCAGAAQAqBOA3BEQADAEAAAFQiABDhRBxQgDADAAAGQCYgVB2huQADgCAFAAQBVAqBlAdQACABAAAFQhuBahJB4IAFAAQCZgkBqiJQACgDAGAAQBmAECCAiQABABAAAFQhbBbglCNIAGAAQBbgIA2hsQAbg4Acg8QG+AaD9DcQAUASAZANQA/F4lYA8Qh1AVhgAkQgGABAAARQgPBdAoAlQADADAGAAQFPACCHjHQACgDAFAAQASBHgGBgIgBALQghBZhLAwQgDACAAAFQvOAUvqAFIggAAQkvAAj8gtgAr+K6IAACnIALAAQK0ANK3AJQAGAAADgCQAogmgPhdIAAgRQragTq+gfIAAALg");
	this.shape_3.setTransform(4.5362,163.7312);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.945)").s().p("EACRAgNIkKAAQnCg9lMiwQlIiwj5j6Qnxnwhvt1IAAgLIAAlBQCatKI2msQIAmDMthYIDHAAIAKAAQNACkHZIKQDdD0CoEsQClEmBAGPIAAEJIAAALQg5FziXETQlgKDppF8Qk1C+m/A0IAAALIgLAAgApw9vQmAB7kiDOQpHGfiXNMQAAB6AJB6QA8MXF/HeQG6IoMPDSQDGA1D/gYQItgzFsj/QJKmbE3quQBzj+gNlxQgTnTi2k3Qlxp4qDljQjtiDlEgnQiSgSiJAAQk2AAkTBXg");
	this.shape_4.setTransform(0,176.35);

	this.instance = new lib.iceSkate_txt_gray();
	this.instance.setTransform(0.05,453,1,1,0,0,0,102.8,74.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAx7L/QgUgEgMgSQC0gyDHgjQABAAAAgFQARhIgGhiIgBgKQljhLAxnOQAckAAJkKQAFh+gGiGQFFgeExgyQARgDgHgbQgThIBZgHIAKgBQBTCAAkCsIABAKQiXAnhgBeQgDACAAAFQBBAcBQg2QBGgwBLAEQAeBAgFAtIgFABQiCAyhNBmQgDADAAAFQCGgRB1hRQAEgCAFAAQAmBHAxA9QADADAAAFQhzA8hJBlQgCAEAAAFQCIgTBphjQADgCAFAAQBNAmBcAaQABABAAAFQhjBRhCBtIAFAAQCJghBgh9QACgCAFAAQBcAEB1AfQABAAAAAFQhSBTghB+IAFAAQBSgIAwhgQAZgyAZg3QGRAYDkDFQASAQAXAMQA5FTk2A2QhpAThXAfQgFACAAAPQgOBUAlAhQACADAFAAQEuABB6iyQABgDAFAAQAQBAgFBWIgBAKQgeBQhDArQgDACAAAFQttASuGAEIgaABQkSAAjkgpgAqJIDIAACWIAKAAQJvAMJyAIQAFAAACgDQAlghgOhUIAAgPQqRgSp4gbIAAAKg");
	this.shape_5.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1,lineWidth:225}}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{y:402.15,font:"normal 400 65px 'Rubik'",lineHeight:79.05,lineWidth:230}}]},1).to({state:[{t:this.shape_5},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.8,-29.7,417.70000000000005,590);


(lib.house = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("בית", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 105;
	this.text.parent = this;
	this.text.setTransform(0,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAAkGJIAFAAQAXFCgIFcIAKAAIKKAAQAAgFACgBQBpgmAhhqIAAgKIAAyvIAKAAQCeAHCEgRQhCgxhAgzQnwmPoCl9QgxA2g9AvQn1GHn8GEIAAAFQCWAFCWAAIAAAKIAASvQAFAAABABQAgBvBmAmIAKAAIDwAAQAAivgJivQgLjDAyh9QAAgFABAAQBogSBjAAQBvAABoAXg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("AAoRlIgKAAQAIlcgXlBIgFgBQjEgqjeAlQgBAAAAAFQgyB9ALDDQAJCvAACvIjwAAIgKAAQhmgmghhvQAAgBgFAAIAAyvIAAgKQiWAAiWgFIAAgFQH7mDH2mIQA8gvAzg2QIBF+HwGPQBAAyBCAxQiFASidgIIgKAAIAASvIAAAKQgiBqhoAmQgCABAAAFIqKAAg");
	this.shape_1.setTransform(2,179.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.945)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOg");
	this.shape_2.setTransform(0,185.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD7E63").s().p("AlmffQsmjYnIo5QmKnsg9svQgJh9AAh+QCbtkJYmsQEqjUGMh9QGaiDHjA7QFOAoD0CGQKVFvF9KKQC8FAASHhQAOF7h2EGQlALCpcGnQl3EHo9A1QhSAHhKAAQipAAiNglgAAqHBIAFAAQAaFxgJGNIAMAAILnAAQAAgGACAAQB4gsAmh6IAAgLIAA1bIAMAAQC0AICXgUQhMg3hIg7Qo4nIpLm0Qg5A+hFA2Qo+G/pEG7IAAAGQCrAGCsAAIAAALIAAVbQAGAAAAACQAlB+B1AsIAMAAIESAAQAAjIgLjIQgMjfA5iPQAAgGABAAQB3gUBwAAQCAAAB4Aag");
	this.shape_3.setTransform(-0.721,179.6745);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("AAuUGIgMAAQAJmMgalxIgFAAQjhgxj+AqQgBABAAAGQg5CPAMDfQALDHAADIIkSAAIgMAAQh1grglh+QAAgCgGAAIAA1bIAAgMQisAAirgFIAAgGQJEm7I+nAQBFg1A6g/QJKG1I4HIQBIA6BMA4QiXAUi0gJIgMAAIAAVcIAAALQgmB6h4ArQgCABAAAFIrnAAg");
	this.shape_4.setTransform(2.275,172.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.945)").s().p("EACUAhJIkRAAQnQg+lVi2QlQi1kCkBQn/n/hyuPIAAgLIAAlLQCetiJHm5QIPmONEhaIDNAAIAMAAQNXCoHnIaQDjD7CuE1QCqEuBBGaIAAESIAAALQg6F+ibEbQlsKWp6GHQk+DDnNA2IAAALIgMAAgAqC+mQmMB9kqDUQpYGsicNkQAAB+AJB9QA+MvGKHsQHII5MmDYQDMA2EGgYQI9g1F2kHQJdmnFArCQB2kGgPl7QgRnhi8lAQl9qKqVlvQj0iGlPgoQiVgSiOAAQk+AAkbBag");
	this.shape_5.setTransform(0,179.375);

	this.instance = new lib.house_txt_gray();
	this.instance.setTransform(0,416.5,1,1,0,0,0,53.9,37.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAA8QpIgKAAQAIlcgXlBIgFgBQjEgqjeAlQgBAAAAAFQgyB9ALDDQAJCvAACvIjwAAIgKAAQhmgmghhvQAAgBgFAAIAAyvIAAgKQiWAAiWgFIAAgFQH7mDH2mIQA8gvAyg2QICF+HwGPQBAAyBCAxQiFASidgIIgKAAIAASvIAAAKQgiBqhoAmQgCABAAAFIqKAAg");
	this.shape_6.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1,lineWidth:105}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.text,p:{y:402.15,font:"normal 400 65px 'Rubik'",lineHeight:79.05,lineWidth:119}}]},1).to({state:[{t:this.shape_6},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215,-32.7,430,513.9);


(lib.horses = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("חוות סוסים", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 290;
	this.text.parent = this;
	this.text.setTransform(-0.05,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAAjjEQhyK0m8FvQCpCcEtAWQKIAxH/i7QhEkphqkAQkIp5mbnlQgbgggigUQlyjclnjiIABAKQAODXBpB9QAAAFgCABQimBRiOBnQAAAFgBAEQiBF3jcEeIAAAKQgFAngPAeIABAKQAGCFArBhQBoBaCQgwQCAgqBVhaQA6g9BmgGQF0gUBWkkIgBAKgADsNBQENlAg/oaQgRiMg5h1Qg2hwhEhmQDeDBA9GEQAQBlgQBXQhEFxjhDJg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.988)").s().p("Ag7R9QktgWipicQG8lvByq0IABgKQhWEkl0AUQhmAGg6A9QhWBaiAAqQiPAwhohaQgrhhgHiFIAAgKQAPgfAEgnIABgKQDckdCAl3QACgEAAgFQCOhnCmhRQACgBAAgFQhph9gOjXIgBgKQFnDiFyDcQAiAUAaAgQGcHlEIJ5QBqEABEEpQmWCUnrAAQiBAAiFgKgAFqiuQA5B1ARCLQA+IbkMFAIAAAKQDgjJBFlxQAQhXgQhlQg+mEjdjBQBEBmA2Bwg");
	this.shape_1.setTransform(0,174.9326);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.945)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOg");
	this.shape_2.setTransform(0,185.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD7E63").s().p("AlofsQssjanKo8QmNnvg+s0QgJh+AAh/QCdtpJcmvQEsjVGOh/QGciDHmA7QFRAoD1CIQKaFxF/KOQC9FBASHkQAPF/h3EHQlDLHpfGqQl5EIpBA1QhTAIhMAAQipAAiNgmgAApjiQiEMdn/GmQDDCzFaAaQLqA4JMjXQhOlWh6kmQkwrZnZovQgggkgmgXQmrj9mckFIAAAMQAQD4B6CPQAAAGgCABQi/BdikB3QAAAFgCAGQiUGvj9FJIAAALQgGAugRAiIABALQAHCZAyBwQB3BoCmg3QCTgwBihoQBDhGB2gHQGsgYBjlQIgBAMgAEQO+QE1lwhJprQgTiihBiGQg/iBhOh2QD/DfBHG/QASB0gSBkQhPGpkCDng");
	this.shape_3.setTransform(-0.7213,179.427);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.988)").s().p("AhEUrQlagajDi0QH+mmCEsdIABgLQhjFQmrAYQh2AGhDBHQhjBniSAxQimA2h4hnQgxhwgHiZIgBgMQARgjAFgtIABgMQD9lHCUmwQACgFAAgGQCjh2DAheQACgBAAgFQh6iQgQj4IgBgLQGdEEGrD+QAmAXAgAkQHZIuEwLZQB6EmBOFWQnTCro3AAQiTAAiZgLgAGhjJQBBCHATChQBJJsk1FwIAAALQECjnBOmoQAThkgTh1QhGm+j/jfQBOB2A/CAg");
	this.shape_4.setTransform(0,166.9775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.945)").s().p("EACVAhXIkTAAQnTg/lWi3QlUi2kDkCQoCoDhzuVIAAgLIAAlNQCftoJLm8QISmQNKhbIDOAAIAMAAQNcCpHrIeQDlD9CvE2QCqEwBCGdIAAETIAAAMQg6GBidEcQluKbp+GIQlADFnQA3IAAALIgMAAgAqG+zQmPB+ksDWQpbGuidNqQAAB+AJB/QA+MzGMHwQHLI8MsDaQDNA3EIgaQJBg1F5kHQJfmqFCrHQB3kHgOl/QgSnki9lCQl/qNqalyQj2iIlQgnQiXgTiPAAQlAAAkcBbg");
	this.shape_5.setTransform(0,179.15);

	this.instance = new lib.horses_txt_gray();
	this.instance.setTransform(-0.05,416.5,1,1,0,0,0,146.8,37.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAg7QUQktgXipicQG8luByq1IABgKQhWEkl0AVQhmAGg6A8QhWBbiAAqQiPAvhohaQgrhhgHiFIAAgKQAPgdAEgoIABgKQDckdCAl4QACgEAAgFQCOhnCmhRQACgBAAgFQhph8gOjYIgBgKQFnDiFyDdQAiAUAaAfQGcHlEIJ6QBqD/BEEpQmWCVnrAAQiBAAiFgKgAFqkYQA5B1ARCMQA+IakMFAIAAAKQDgjIBFlyQAQhWgQhmQg+mDjdjCQBEBnA2Bvg");
	this.shape_6.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.text,p:{y:400.9,font:"normal 400 65px 'Rubik'",lineHeight:79.05}}]},1).to({state:[{t:this.shape_6},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.3,-34.3,432.70000000000005,514.3);


(lib.escapeRoom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("חדר בריחה", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 290;
	this.text.parent = this;
	this.text.setTransform(-0.05,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAitJIQCSAcCFApQAAAFACAEQBKD1ByDOQAFAAAFABQA8AYAogtIADgRQg1k+iCj/QgFAAgEgCQiJgqiPgkQAAgFACgEQCgldCnlVQAAAFADADQBXCEB4BkQAFAAAFgCQD6hjDIiVQAFAAAAgBQAQhLgpgYQgKgKgSAGQi8A5jCBrQgFAAgCgDIiPi7QgFAAgEgCIjdhsIgKAAQi9gEi0AOQAAAFgCABQjdBqjFCAIAAAKQgCBOA0AWQAFAAAFgCQDYg+DMh+IAKgBQBtgGBugDQAAAFgCAEQjIGMinGyQgFAAgBACQhABYg8BaQhGAPhGALQjVAkidBYIgBAoQgDBFA1gDQEQgPEXhHQAAgFADgDQBbh3BghxIAKABgAA4uAQgEErDkA6QEbBJBljYQBujniYieQg5g7hbgNQgwgGgqAAQkKAAg+D9g");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.984)").s().p("AFAMxQgEgBgFAAQhzjOhKj1QgBgEAAgFQiGgpiRgcIgKgBQhhBxhbB3QgCADAAAFQkYBHkPAPQg2ADAEhFIABgoQCdhYDUgkQBHgLBGgPQA8haA/hYQACgCAFAAQCmmxDJmNQACgEAAgFQhvADhsAGIgKABQjMB+jZA+QgEACgFAAQg1gWADhOIAAgKQDFiADdhqQACgBAAgFQCzgOC+AEIAKAAIDdBsQAEACAFAAICPC7QACADAFAAQDBhrC9g5QARgGALAKQAoAYgPBLQAAABgFAAQjJCVj6BjQgEACgFAAQh4hkhYiEQgCgDAAgFQioFWifFcQgCAEAAAFQCOAkCJAqQAFACAFAAQCBD/A2E+IgDARQgaAdgjAAQgTAAgVgIg");
	this.shape_1.setTransform(-2.0962,215.4421);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.988)").s().p("AhmEoQjkg6AEkqQBHkmFaAvQBbANA5A7QCYCehuDmQhMChixAAQg7AAhHgSg");
	this.shape_2.setTransform(37.6891,102.1242);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.945)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOg");
	this.shape_3.setTransform(0,185.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FD7E63").s().p("AlmfhQsojYnHo6QmLnsg9swQgKh9AAh+QCctlJZmsQEqjUGMh+QGbiDHjA7QFPAoD0CHQKWFvF9KKQC8FAASHiQAOF8h2EGQlBLDpcGnQl3EHo9A1QhTAHhLAAQipAAiMglgAjGKcQCnAhCZAuQAAAGABAFQBVEYCDDsIALABQBFAbAugzIAEgUQg+lriUklQgGAAgFgBQidgxijgpQAAgGACgFQC3mPDAmHQAAAGADAEQBkCXCJByQAGAAAFgCQEehxDmirQAGAAAAgBQARhVgugdQgMgKgUAGQjYBCjdB6QgGAAgCgDIikjXQgGAAgEgCIj9h8IgMAAQjZgEjNAQQAAAFgDACQj9B5jhCSIAAAMQgDBZA8AZQAGAAAFgBQD4hIDpiQIAMgBQB8gHB/gEQAAAGgDAFQjlHGi/HwQgGAAgBADQhJBkhFBnQhQARhRANQjzApi0BlIgBAtQgEBQA+gEQE2gRFAhRQAAgGADgEQBoiHBviCIALABgABAwCQgEFWEEBCQFEBUB0j3QB+kIiui2QhBhDhogOQg3gIgxAAQkxAAhGEig");
	this.shape_4.setTransform(-0.726,179.827);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.984)").s().p("AFvOnIgLgBQiDjshVkYQgCgFAAgGQiZguimghIgMgBQhuCChoCHQgDAEAAAGQlABRk3ARQg9AEAEhQIABgtQC0hlDzgpQBRgNBQgRQBEhnBJhkQACgDAGAAQC+nvDmnHQACgFAAgGQh/AEh8AHIgLABQjqCQj4BIQgFABgFAAQg9gZADhZIAAgMQDiiSD9h5QACgCAAgFQDOgQDZAEIALAAID9B8QAFACAFAAICkDXQACADAGAAQDeh6DXhCQAUgGAMAKQAvAdgSBVQAAABgGAAQjlCrkeBxQgGACgFAAQiKhyhkiXQgDgEAAgGQi/GIi3GOQgCAFAAAGQCjApCdAxQAFABAGAAQCUElA9FrIgDAUQgeAigoAAQgVAAgYgKg");
	this.shape_5.setTransform(-2.398,213.8233);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.988)").s().p("Ah1FSQkFhCAFlVQBRlQGMA2QBpAOBABDQCuC2h9EHQhXC5jLAAQhDAAhSgWg");
	this.shape_6.setTransform(43.1256,84.1076);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.945)").s().p("EACVAhLIkSAAQnQg+lVi2QlSi1kBkBQoBoAhxuQIAAgMIAAlLQCetiJIm5QIPmQNFhZIDNAAIAMAAQNYCoHoIaQDkD7CuE1QCpEwBBGaIAAERIAAAMQg6F/ibEbQlsKWp7GHQk/DEnNA2IAAALIgLAAgAqD+oQmMB9kqDUQpZGticNkQAAB/AKB9QA9MwGKHsQHII5MoDZQDLA2EIgZQI9g0F2kHQJdmoFBrCQB2kGgOl9QgSnhi8lAQl9qLqWlvQj0iGlQgoQiVgTiOAAQk/AAkbBbg");
	this.shape_7.setTransform(0,179.55);

	this.instance = new lib.escapeRoom_txt_gray();
	this.instance.setTransform(-0.05,416.5,1,1,0,0,0,146.8,37.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAEsRdQgFgCgFAAQhzjNhJj2QgCgEAAgFQiFgpiSgcIgKgBQhhByhaB2QgDADAAAFQkXBHkQAPQg1AEADhGIABgoQCdhYDVgkQBGgLBGgPQA8haA/hXQACgDAFAAQCnmxDImNQACgEAAgFQhuAEhtAFIgKABQjMB+jYA+QgFACgFAAQg1gWADhOIAAgKQDFiADdhqQACgBAAgFQCzgNC+ADIAKAAIDdBsQAEACAFAAICPC7QACADAFAAQDBhrC9g5QARgGALAKQAoAZgPBKQAAABgFAAQjJCWj5BjQgFABgFAAQh4hkhXiEQgDgDAAgFQioFWifFcQgCAEAAAFQCPAkCJArQAEABAFAAQCCD/A1E+IgDARQgaAegjAAQgTAAgUgIgAESoZQjkg6AEkrQBHkmFbAwQBbAMA5A7QCXCfhtDmQhMChixAAQg8AAhHgSg");
	this.shape_8.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:-0.05,y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1,lineWidth:290}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text,p:{x:0,y:402.15,font:"normal 400 65px 'Rubik'",lineHeight:79.05,lineWidth:300}}]},1).to({state:[{t:this.shape_8},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.2,-32.8,430.4,514);


(lib.cooking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("סדנת בישול", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 290;
	this.text.parent = this;
	this.text.setTransform(-0.05,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAGqQ5QEYALCHh0QAogiAJg0QAxkrgNlcIAKAAQCPANBhghQAFAAACgDQAvg2gig1QAAgFgCgBQhig1iqATIAAgKQAGh4gahZIgKAAI7fAAIAAAKQgPBfAFByQgeAAgdgFQjOgehBBpQAAAFACAEQBICJEAguQAACWgDCWQgECiAZCIQAuD9FRgOQDdgJDeAAQDjAADkAKgAtpk8IAAAKIAAB4IAKAAIbVAAQAFAAAFgCQAvgQgRhSQgNg1gwgJQlchFmHgTIAFAAQgFhahQgUIgKgBQhrgMgMCFIgKAAIhOgBQmWAAkoBvgAJew0QgMCxBXBOQBUBMALCVQgKAZgRASQg8BAARArQAFAAAFgCQCFguAHisQgZgtgkgiQhvhoAKjOQADgzgdAAQgWAAgoAegAMNvlIAFABQAAAFACAEQA8CpBsB6QAABUgrAqQhBA9AmAXIAKgBQB+gYAEjDQgUgygmghQhthfAOjJQAFhWhcAtIAAAUIAAAKIgKAAQAAAyAFAxgArNNWQgBgBgFAAIAAt5IAAgKQBag7gFBsIgdJhQgKDTBNBsQAvBDBQAjQjFgNgvimg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAGjQ7QnAgSnCASQlQANguj9QgZiHADijQAEiWAAiWQkAAuhIiJQgCgEAAgFQBBhpDNAeQAeAFAeAAQgFhyAPhfIAAgKIbfAAIAKAAQAaBagGB3IAAAKQCqgTBiA1QACABAAAFQAiA1gvA2QgCADgFAAQhhAhiPgMIgKgBQANFcgxErQgKA1goAhQh6BqjzAAIgygBgArZgsIAAAKIAAN5QAFAAAAACQAwClDFANQhRgigvhEQhNhsALjSIAdpiQADhGglAAQgTAAggAVgAtli4IgKAAIAAh4IAAgKQFDh6HJAMIAKAAQAMiFBrAMIAKABQBQAUAFBaIgFAAQGHATFcBFQAwAKANA0QARBSgwARQgEABgFAAI7VAAgALnonQARgSAKgZQgLiUhVhNQhWhOAMixQBdhFgFBaQgKDOBuBpQAlAiAZAsQgHCtiGAtQgEACgFAAQgRgrA8hAgAOKo4QAsgqAAhUQhsh6g9ipQgBgEAAgFIgFgBQgFgxAAgyIAKAAIAAgKIAAgUQBcgtgFBWQgODKBtBeQAmAhAUAyQgFDDh9AYIgKABQgmgWBAg+g");
	this.shape_1.setTransform(0,185.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FD7E63").s().p("Alqf1QsvjbnMo/QmOnxg/s3QgJh/AAh/QCdttJfmxQEtjWGQh/QGeiEHoA7QFSAoD3CJQKcFyGBKRQC+FDASHmQAPGAh4EJQlELKpiGrQl6EKpDA1QhUAHhMAAQiqAAiOglgAHsThQFEANCciGQAugnAKg9QA6lZgPmSIALAAQClAPBxgnQAFAAADgCQA1g/gmg+QAAgFgDgCQhxg9jEAWIAAgMQAGiKgdhnIgMAAI/xAAIgBALQgRBuAGCEQgjAAgigFQjtgjhLB5QAAAGACAEQBTCfEog1QAACtgECtQgFC8AdCdQA2EkGFgPQEBgLEAAAQEGAAEHALgAvxluIAAAMIAACLIAMAAIflAAQAGAAAFgCQA3gTgThfQgPg9g4gLQmShPnEgWIAGAAQgGhohdgYIgLAAQh8gPgOCaIgLAAIhcgBQnVAAlVCAgAK9zcQgODMBkBbQBiBYAMCsQgLAdgVAUQhEBKATAyQAGAAAFgCQCag1AJjHQgeg0gpgnQiAh5ALjuQADg7ghAAQgZAAguAjgAOHyAIAGAAQAAAGACAFQBFDDB9CNQAABigyAwQhLBHAsAaIAMgBQCRgcAFjiQgXg5gsgmQh+huAQjpQAGhihqAzIAAAXIAAAMIgMAAQAAA5AGA6gAs9PbQgBgBgGAAIAAwEIAAgMQBphEgHB+IghLAQgMDzBZB9QA2BOBdAoQjjgPg3jAg");
	this.shape_2.setTransform(-0.7215,179.44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(24,0,0,0.588)").s().p("AAAA5QgFg5AAg5IALAAIAABnIAAAMIgGgBg");
	this.shape_3.setTransform(89.575,58.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.988)").s().p("AHoUEQoGgVoIAVQmFAPg2kkQgdidAFi8QAEitAAitQkoA1hTifQgCgEAAgGQBLh5DtAjQAiAFAjAAQgGiEARhuIABgLIfxAAIAMAAQAdBngGCKIAAAMQDEgWBxA9QADACAAAFQAmA+g1A/QgDACgFAAQhxAnilgPIgLAAQAPGSg6FZQgKA9guAnQiOB6kaAAIg4gBgAtIgTIAAAMIAAQEQAGAAABABQA3DADjAPQhdgog2hOQhZh9AMjzIAhrAQAFhSgrAAQgXAAglAYgAvpi0IgMAAIAAiLIAAgMQF2iMIQANIALAAQAOiaB8APIALAAQBdAYAGBoIgGAAQHEAWGSBPQA4ALAPA9QATBfg3ATQgFACgGAAI/lAAgANdpdQAVgUALgdQgMishihYQhkhbAOjMQBrhQgGBoQgLDuCAB5QApAnAeA0QgJDHiaA1QgFACgGAAQgTgyBEhKgAQbpwQAygwAAhiQh9iNhFjDQgCgFAAgGIAAgLIAAhoIAAgMIAAgXQBqgzgGBiQgQDpB+BuQAsAmAXA5QgFDiiRAcIgMABQgsgaBLhHg");
	this.shape_4.setTransform(-0.3444,175.9234);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.945)").s().p("EACWAhgIkUAAQnVg/lZi3QlVi3kEkEQoFoFhyuZIAAgLIAAlPQCftrJOm9QIUmTNOhbIDPAAIAMAAQNgCqHtIfQDmD/CvE3QCsEyBBGeIAAEVIAAALQg6GDidEfQlvKcqCGKQlBDHnSA1IAAAMIgMAAgAqJ+8QmQCAktDWQpfGwidNtQAACAAJB/QA/M3GOHxQHLI/MwDbQDOA3EKgZQJDg1F6kKQJimsFErJQB3kJgOmAQgSnmi+lDQmBqRqclyQj3iJlSgoQiXgTiOAAQlCAAkfBbg");
	this.shape_5.setTransform(0,179.15);

	this.instance = new lib.cooking_txt_gray();
	this.instance.setTransform(-0.05,416.5,1,1,0,0,0,146.8,37.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAGjQ7QnAgSnCASQlQANguj9QgZiHADijQAEiWAAiWQkAAuhIiJQgCgEAAgFQBBhpDNAeQAeAFAeAAQgFhyAPhfIAAgKIbfAAIAKAAQAaBagGB3IAAAKQCqgTBiA1QACABAAAFQAiA1gvA2QgCADgFAAQhhAhiPgMIgKgBQANFcgxErQgKA1goAhQh6BqjzAAIgygBgArZgsIAAAKIAAN5QAFAAAAACQAwClDFANQhRgigvhEQhNhsALjSIAdpiQADhGglAAQgTAAggAVgAtli4IgKAAIAAh4IAAgKQFDh6HJAMIAKAAQAMiFBrAMIAKABQBQAUAFBaIgFAAQGHATFcBFQAwAKANA0QARBSgwARQgEABgFAAI7VAAgALnonQARgSAKgZQgLiUhVhNQhWhOAMixQBdhFgFBaQgKDOBuBpQAlAiAZAsQgHCtiGAtQgEACgFAAQgRgrA8hAgAOKo4QAsgqAAhUQhsh6g9ipQgBgEAAgFIgFgBQgFgxAAgyIAKAAIAAgKIAAgUQBcgtgFBWQgODKBtBeQAmAhAUAyQgFDDh9AYIgKABQgmgWBAg+g");
	this.shape_6.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1,lineWidth:290}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{y:402.15,font:"normal 400 65px 'Rubik'",lineHeight:79.05,lineWidth:314}}]},1).to({state:[{t:this.shape_6},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.3,-35.2,434.6,516.4);


(lib.cinema = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("קולנוע", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 198;
	this.text.parent = this;
	this.text.setTransform(0,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr4INl1QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAvbhsQgBACgFAAIAAMLIAAAKQAdAvAxAbQACABAAAFQMtAHMSgRIAKAAQAugYATg3QAAgBAFAAQAAhaAFhaIAFAAQCkBvDFBNQAEACAFAAQBBjJgRkiQgKingmiDQjTA/iXB7QgDADgFAAQgRhJAHhgIAAgKQgbhOhdgMIgKAAIAAgFQhGgFhGAAQAMgXAWgQQCFhjAIjVQAKkNilhyQhBguhggKQnBguhjFuQglhig8hKQhlh9jdAMQlHAShKEfQgOFYDRB0IgFAAQgRgCgQAAQhpAAgaBQgAlrjOIAAgKQCBhNAoikIABgJQA4CfB0BiQADADAFAAIAAAFQhOAFhKAAQhnAAhfgKgACSlQIAAgKQBziBBPCTQABACAFAAQgDBXhDAVQgFACgFAAIgSAAQhvAAAJh4gAq1lQIAAgKQBth5BPCOQACAEAAAFQgNBXhXAMIgKABQhUgQAEhogAhTnSIAAgKQBih4BZB6QACADAAAFQAWBXhSAfQgFACgFAAIgNAAQhxAAAHh4gAuQm+IgBgKQBZiDBjB7QACADAAAFQAEBoheAFIgKABQhVgKgEhagAmdljIgKgBQg6gbAIhdIAAgKQB6h1A5CdQABAFAAAFQgRBUhHAAQgPAAgRgDgAF4ncIAAgKQBhh+BbB/QACAEAAAFQAWBXhSAfQgFACgFAAIgSAAQhvAAAJh4gADSodQgLgNAHggQBdgigvBLQgKARgLAAQgLAAgKgNgApvofQgKgNAAgUQB1gChkAtgAuQqaIgBgKQBZiDBjB7QACADAAAFQAEBoheAFIgKABQhVgKgEhagAmmo7QgBAAAAgFQg/gRANhdIAAgKQB7h2A4CeQABAFAAAFQgGBPhRAAQgTAAgXgEgAF4rCIAAgKQBxh4BVCNQACAEAAAFQgJBWhHAWQgFACgFAAIgDAAQh3AAAMiCgAgWpFIgBgFQhAgVAEhZIAAgKQAdgzA9gSQAEgBAFAAQBkAKAABuIAAAKQgYBChYAAIgagBgAq1smIAAgKQBmh5BWCEQACAEAAAFQgKBahQATIgKABQhZgQgBhogADErVQgFgBgFAAQgrggADhOIAAgKQAegyA9gTQAEgBAFAAQBjAQgEByIgFAAQgTBHhCAAQgYAAgfgKg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.471)").s().p("AhKgFIAKAAQBFAABFAFIABAEIgKAAQgYACgVAAQg1AAgpgLg");
	this.shape_1.setTransform(55.5,166.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.463)").s().p("Ai9AAQAFgFAGgDQAEgCAFAAQCiARC6gMIABgFIAKAFQhlAQhnAAQhWAAhZgLg");
	this.shape_2.setTransform(-20,166.0682);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.992)").s().p("AvsNsQAAgFgCgBQgygbgcgvIAAgKIAAsMQAFAAAAgBQAfhcCGAOIAFAAQjRh0AOlYQBJkeFIgSQDcgMBlB8QA9BKAlBiQBiluHCAvQBfAKBCAtQCkBzgJENQgIDUiGBjQgVAQgMAXIgKAAQA5ASBTgHIAKgBIAKABQBdALAbBNIgBAKQgHBiASBIQAFAAADgCQCWh8DUhAQAlCFAKCnQAREihADIQgFAAgFgBQjFhNijhwIgFABQgFBZAABaQgFAAgBACQgSA2guAYIgKAAQonAMozAAQjxAAj0gCgAkdlXQgpCkiABMIAAAKQgFAAgEACQgGADgFAFQDDAZC5geIgKgFQgFAAgDgCQh0hjg4ifIgBAKgAA3jpIgBAKQgJCCCCgKQAFAAAEgBQBEgWADhXQgFAAgBgCQgqhOg1AAQguAAg1A8gAsQjpIAAAKQgEBoBUAQIAKAAQBXgNANhXQAAgFgCgEQgrhMgzAAQgsAAgyA3gAiulrIgBAKQgHCACAgIQAFAAAEgBQBSgggWhXQAAgFgDgDQgrg9gwAAQguAAgxA7gAvslXIAAAKQAFBaBVAKIAKAAQBegGgEhoQAAgFgDgDQgwg7gtAAQgwAAguBDgAo0l1IgBAKQgIBeA7AaIAKABQBjAVAVhmQAAgFgCgEQgghbg2AAQgoAAg0AygAEdl1IgBAKQgJCCCCgKQAFAAAEgBQBTgggWhXQAAgFgDgDQgthAgvAAQgvAAgwA+gABznZQgHAgAKANQAXAeAUghQAgg0giAAQgPAAgdAKgArUnPQAAAUAJANIAIAKQBhgrhrAAIgHAAgAvsozIAAAKQAFBaBVAKIAKAAQBegGgEhoQAAgFgDgDQgwg7gtAAQgwAAguBDgAo0pHIgBAKQgNBeBAAQQAAAFABAAQB5AXAIhiQAAgFgCgEQgfhbg2AAQgpAAg0AygAEdpbIgBAKQgLCEB6gCQAFAAAEgBQBIgXAJhWQAAgFgCgDQguhNg2AAQguAAg0A3gAhUqVQg9ARgdAzIAAAKQgEBZBAAVIAAAFQBvAMAchNIAAgKQgBhthigLQgFAAgFACgAsQq/IAAAKQABBoBZAQIAJgBQBRgTAKhaQAAgFgDgDQgthGgxAAQgtAAgwA6gACRshQg8ASgeAyIAAAKQgDBPArAfQAFAAAEACQByAkAbhiIAFAAQADhxhigRQgFAAgFACg");
	this.shape_3.setTransform(8.5084,174.3754);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.945)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF1iIL4QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOg");
	this.shape_4.setTransform(0,185.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FD7E63").s().p("AlcelQsPjSm6ooQl/neg8sXQgJh6AAh6QCXtMJHmeQEijOGAh7QGOh+HVA4QFFAnDsCDQKDFkFyJ4QC2E2ASHTQAOFxhzD+Qk3KupLGbQlsD/osAzQhPAHhIAAQilAAiJgkgAxJh4QAAACgGAAIAANhIAAALQAgA0A3AeQACACAAAFQOGAINqgTIALAAQAzgbAVg8QAAgCAGAAQAAhkAFhjIAGgBQC2B8DaBWQAFABAGAAQBIjegTlCQgLi6gqiSQjrBGinCJQgEADgFAAQgThRAHhrIABgLQgehXhngMIgMgBIAAgGQhNgFhOAAQANgaAYgRQCUhuAJjsQALkri3h/QhJgzhqgLQnzg0htGXQgphthEhSQhwiKj1ANQlrAUhSE+QgQF+DoCBIgFAAQgUgCgSAAQhzAAgeBZgAmTjlIAAgLQCPhVAti2IABgLQA+CxCBBtQADADAGAAQAAAFgBAAQhXAGhSAAQhyAAhpgLgACil2IAAgLQB/iOBZCiQABADAFAAQgDBghLAYQgFACgFAAIgUAAQh8AAAKiGgAsCl2IAAgLQB5iGBYCeQACAEAAAGQgOBghhAOIgLABQhdgSAEh0gAhdoGIABgLQBsiFBjCHQADADAAAGQAYBhhbAjQgFABgGAAIgPABQh9AAAHiGgAv1nwIgBgLQBiiRBuCIQADAEAAAFQAEB0hoAGIgLAAQhegLgFhkgAnLmLIgLgBQhBgdAJhoIABgLQCHiCA/CvQACAFAAAFQgTBehPAAQgRAAgTgEgAGhoRIABgLQBriMBlCNQADAEAAAGQAYBhhbAjQgFABgGAAIgUABQh7AAAJiGgADppZQgMgPAIgjQBngmg0BUQgMATgMAAQgLAAgMgPgAq1pbQgKgPAAgWQCCgChvAygAv1rkIgBgLQBiiSBuCJQADADAAAGQAEBzhoAGIgLABQhegLgFhkgAnVp7QgBAAAAgFQhGgSAOhoIABgLQCIiDA+CwQACAFAAAFQgHBYhaAAQgVAAgagFgAGhsRIABgLQB9iEBfCcQACAEAAAGQgKBfhQAZQgFACgFAAIgEAAQiDAAAMiRgAgZqGIgBgFQhHgYAFhiIAAgMQAgg4BDgUQAFgBAGAAQBuALABB6IAAALQgbBKhhAAQgOAAgQgCgAsCuAIAAgLQBxiGBgCTQACAEAAAGQgLBjhZAWIgLABQhjgSgBh0gADZslQgFgCgFAAQgwgjADhXIAAgLQAig4BDgUQAFgCAFAAQBuATgEB+IgGAAQgVBPhJAAQgbAAgjgLg");
	this.shape_5.setTransform(-0.699,181.2911);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.463)").s().p("AjSAAQAFgFAHgDQAFgDAFAAQC1ATDOgNQABAAAAgGIALAGQhwARhyAAQhgAAhjgMg");
	this.shape_6.setTransform(-22.2,159.4374);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.471)").s().p("AhSgGIALAAQBNAABNAFIAAAFIgLABQgZACgXAAQg8AAgugNg");
	this.shape_7.setTransform(61.625,160.0542);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.992)").s().p("AxcPNQAAgFgCgCQg3gegfg0IAAgLIAAtiQAGAAAAgCQAihmCVAQIAFAAQjoiBAQl+QBRk+FsgUQD1gNBwCKQBEBSAoBtQBumXHzA0QBqALBJAzQC2B/gKErQgJDsiUBuQgYARgOAaIgLAAQBBATBbgHIALgBIAMABQBnAMAeBWIgBALQgHBsATBRQAFAAAEgDQCmiKDshGQAqCTALC6QATFChIDeQgGAAgFgBQjbhWi1h8IgGABQgGBjABBkQgGAAAAACQgVA8gzAbIgLAAQpoAOp0AAQkJAAkMgDgAk9l9QgsC2iQBVIAAALQgFAAgFACQgGADgFAGQDYAcDOgiIgLgFQgGAAgDgDQiBhtg/ixIgBALgAA9kDIgBALQgKCRCRgLQAFAAAFgCQBLgYADhgQgFAAgCgDQgvhWg6AAQgzAAg7BCgAtnkDIAAALQgEB0BdASIALgBQBggOAPhgQAAgGgCgEQgwhVg5AAQgxAAg3A9gAjBmTIgBALQgICOCOgJQAGAAAFgBQBagjgZhhQABgGgDgDQgxhEg1AAQgzAAg2BCgAxcl9IACALQAFBkBeALIALAAQBogGgEh0QAAgFgDgEQg1hCgzAAQg2AAgzBLgApymeIgBALQgJBoBBAdIALABQBuAYAYhyQAAgFgCgFQgkhlg8AAQgtAAg5A4gAE9meIgBALQgKCQCPgLQAHAAAFgBQBbgjgYhhQAAgGgDgEQgzhHg0AAQg0AAg1BGgACAoNQgIAjAMAPQAZAhAVglQAkg6gmAAQgRAAgfAMgAskoCQAAAWAKAPIAJALQBrgwh3AAIgHAAgAxcpxIACALQAFBkBeALIALgBQBogGgEhzQAAgGgDgDQg1hCgzAAQg2AAgzBLgApyqHIgBALQgOBoBGASQAAAFABAAQCHAZAJhsQAAgFgCgFQgkhlg8AAQgsAAg6A4gAE9qeIgBALQgNCTCHgCQAGAAAFgCQBQgZAJhfQAAgGgBgEQg0hUg8AAQgzAAg5A8gAhdrfQhEAUggA4IAAAMQgFBiBHAYIAAAFQB8ANAfhVIAAgLQgBh6hugLQgFAAgFABgAtnsNIAAALQABB0BjASIALgBQBZgWALhjQAAgGgCgEQgyhNg3AAQgyAAg2BAgACht6QhDAUghA4IAAALQgDBXAvAjQAGAAAFACQB/AoAdhsIAFAAQAFh+hugTQgFAAgGACg");
	this.shape_8.setTransform(9.4498,168.6736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.945)").s().p("EACRAgMIkKAAQnCg8lMixQlHivj6j6Qnxnxhut0IAAgLIAAlCQCatJI1msQIAmDMthXIDHAAIAKAAQNACjHZILQDdDzCoEsQClEmA/GOIAAEKIAAALQg4FziXETQlhKDpoF7Qk1C+m/A0IAAALIgLAAgApw9uQmAB6kiDOQpGGfiXNLQAAB7AJB5QA7MYF/HdQG6IpMPDSQDGA0D/gXQItgzFsj/QJKmbE3quQBzj+gOlxQgSnTi2k3Qlyp3qClkQjtiDlFgnQiRgSiJAAQk1AAkUBYg");
	this.shape_9.setTransform(0,181.025);

	this.instance = new lib.cinema_txt_gray();
	this.instance.setTransform(0,422.8,1,1,0,0,0,101.1,43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF1iIL4QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAuXL9QAAgFgCgBQgygbgcgvIAAgKIAAsLQAFAAAAgBQAfhdCGAOIAFAAQjRh0AOlYQBJkfFIgSQDdgMBkB9QA9BKAlBiQBiluHCAuQBgALBBAtQClBygKENQgIDViFBjQgWAQgMAXQBGAABFAFIABAFIAKAAQBdAMAbBOIAAAKQgIBgASBJQAFAAADgCQCXh7DThAQAlCEAKCmQAREjhADIQgFAAgFgBQjEhOikhvIgFABQgFBZAABaQgFAAgBACQgSA2guAYIgKAAQonAMozAAQjxAAj0gCgAjInHQgpCliABMIAAAKQCiASC7gNIABgFQgFAAgDgCQh0hjg4ifIgBAJgACMlYIgBAKQgJCCCCgKQAFAAAEgBQBEgWADhXQgFAAgBgCQgqhOg1AAQgtAAg2A8gAphmRQhKAMgQBFQgBBPBCALIABAAIAUAAIACAAQBNgQAShLIAAAAIAAgDIAAgTIAAAAQgQgwg0gKIgCAAIgXAAgAhZnaIgBAKQgGB/B+gHQAFAAAFgCQBSgfgWhXQAAgFgDgDQgsg9gwAAQgtAAgxA7gAuXnGIAAAKQAFBaBVAKIAKgBQBegFgEhoQAAgFgDgDQgvg8guAAQgwAAguBEgAnfnkIgBAKQgHBeA6AaIAKABQBjAVAVhmQAAgFgCgFQgghag2AAQgoAAg0AygAFynkIAAAKQgKCCCCgKQAFAAAFgCQBSgfgWhXQAAgFgDgDQgthAgvAAQgvAAgwA+gAuXqiIAAAKQAFBaBVAKIAKAAQBegGgEhoQAAgFgDgDQgvg8guAAQgwAAguBEgAnfq2IgBAKQgMBeA/AQQAAAFABAAQB5AWAIhhQAAgFgCgEQgfhbg2AAQgpAAg0AygAhaqzIAAAHIAAADIAAAUIAAACQAQBJBIAQIAAABIAaAAIACAAIABgBQBOgNAXhDQgFhOhJgKQgTgDgRAAQhIAAggAygAHRsTQhPANgQBJQgCBUBGALIACAAIAVAAIACAAQBSgQAShRIABAAIAAgCIAAgUIgBAAQgQgzg4gLIgBAAIgZAAgAq7suIAAAKQABBoBZAQIAKgBQBQgTAKhaQAAgFgCgEQgthFgyAAQgtAAgwA6gACLsoIAAAaIAAADQARBQBYAFQAWACARgJQAugaAIhAIAAgDIAAgRQgDg2ghgYQgFgEgFgBIgagBQhjAAgbBXg");
	this.shape_10.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1}}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.text,p:{y:402.15,font:"normal 400 65px 'Rubik'",lineHeight:79.05}}]},1).to({state:[{t:this.shape_10},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.8,-25,417.6,512.9);


(lib.bowling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("באולינג", "normal 400 60px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 198;
	this.text.parent = this;
	this.text.setTransform(0,380.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7E63").s().p("Ak5biQrBi9mOnxQlZmug2rJQgIhtAAhuQCIr3INl2QEFi6FahuQFmhyGmAzQElAjDVB2QJCFBFNI4QCkEYAQGkQANFMhoDlQkYJqoQFyQlHDln1AuQhIAHhCAAQiTAAh7ghgAizwXQrXCYidLjQAABfAJBdQBDL4JqDjQCeA5DigRQMzg/DNq0QAzisghjsQhqsDrNiqQhmgYhpAAQhlAAhpAWgAmKiuQgEgCgFAAQgrggADhOIAAgKQBLiHB/BcQADADAFAAQAuBbg/A9QgDADAAAFQgmAZgkAAQgjAAgggXgApxpIQgDgCgFAAQgagiAGhCIAAgKQBTiDB3BiQADADAFAAQAoBYg5BAQgDADAAAFQgqAVgkAAQgwAAgkgngAiQo0QgEgCgFAAQgugngEhRIAAgKQA1h0CAA2QAEACAFAAQBBBBgsBWQgCAEAAAFQgnAsg0AAQgcAAgfgMg");
	this.shape.setTransform(-0.6327,185.7468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("Al0P+QpqjjhDr3QgJheAAhfQCdriLXiYQDWgtDHAvQLNCpBqMEQAhDrgzCsQjNK1szA+Qg0AEgxAAQiiAAh5gsgAm+klIAAAKQgDBPArAfQAFAAAEADQBCAvBLgyQAAgFADgCQA/g+guhbQgFAAgDgCQg0gmgrAAQg+AAgtBQgAqQq1IAAAKQgGBCAaAiQAFAAADADQA/BDBjgyQAAgFADgDQA5hAgohYQgFAAgDgCQgzgrgsAAQg8AAgvBLgAjOq1IAAAKQAEBSAuAmQAFAAAEACQBZAlA9hFQAAgFACgEQAshVhBhCQgFAAgEgCQgpgRghAAQhHAAgkBPg");
	this.shape_1.setTransform(-0.3018,185.3911);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.945)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOg");
	this.shape_2.setTransform(0,185.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD7E63").s().p("Alrf7QsyjbnNpBQmQnzg+s6QgJh/AAiAQCdtvJhmyQEujXGRiAQGgiEHpA7QFTApD3CJQKfFzGCKTQC+FEATHoQAOGBh4EKQlELLplGtQl7EKpFA2QhUAIhMAAQirAAiOgmgAjPy+QtMCwi1NYQAABuAKBtQBONwLMEIQC3BCEHgUQO1hIDusjQA7jIgmkRQh8t+s/jFQh2gbh7AAQh0AAh5AZgAnJjKQgEgDgGAAQgygkAEhcIAAgLQBWicCTBrQAEADAGAAQA1BphJBHQgDADAAAGQgtAegqAAQgoAAglgbgArVqlQgDgDgGAAQgegoAGhMIABgMQBgiYCKByQAEADAGAAQAtBmhCBLQgDADAAAGQgxAZgqAAQg3AAgqgtgAinqPQgEgCgGAAQg2gtgEheIAAgMQA9iGCUA+QAFADAGAAQBMBMgzBjQgDAEAAAGQguA0g8AAQggAAgkgPg");
	this.shape_3.setTransform(-0.7218,179.4044);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("AmwShQrMkHhOtxQgKhsAAhuQC1tYNMixQD4gzDmA2QM/DEB8N/QAmERg7DHQjuMju1BJQg8AEg5AAQi8AAiNgzgAoFlUIAAAMQgEBbAyAlQAGAAAEACQBNA4BXg6QAAgGADgDQBJhHg1hqQgGAAgEgDQg7gsgyAAQhJAAgzBdgAr5sjIgBALQgGBNAeAnQAGAAADADQBJBOBzg6QAAgFADgEQBChKgthmQgGAAgEgDQg7gxgzAAQhFAAg3BXgAjvsjIAAALQAEBfA2AsQAGAAAEADQBnArBHhQQAAgGADgFQAzhjhMhMQgGAAgFgCQgvgUgmAAQhSAAgqBcg");
	this.shape_4.setTransform(-0.3437,178.9992);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.945)").s().p("EACWAhnIkVAAQnVhAlai4QlWi3kFkFQoHoGhzucIAAgLIAAlQQCgtuJQm/QIWmUNPhbIDRAAIALAAQNjCrHuIhQDnD/CwE5QCsEyBCGgIAAEVIAAAMQg7GEidEfQlxKeqDGMQlDDHnSA2IAAAMIgNAAgAqL/CQmSCAktDXQphGyidNvQgBCAAKB/QA+M6GPHzQHOJBMyDbQDOA3ELgZQJFg2F7kKQJkmtFFrLQB4kKgPmBQgSnoi+lEQmDqTqelzQj3iJlTgpQiYgSiPAAQlDAAkfBbg");
	this.shape_5.setTransform(0,179.125);

	this.instance = new lib.bowling_txt_gray();
	this.instance.setTransform(0,422.8,1,1,0,0,0,101.1,43.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("ACCc/IjvAAQmVg2krigQkniejhjhQm/m/hjscIAAgKIAAkhQCKr2H+mBQHMlcLchPICzAAIAKAAQLsCTGqHWQDHDcCYEOQCVEJA4FmIAADvIAAAKQgzFOiHD4Qk+JDorFVQkWCrmTAvIAAAKIgKAAgAoy6xQlaBukEC6QoNF2iIL3QAABuAIBtQA2LJFYGuQGPHyLBC9QCyAvDlgVQH1gvFIjlQIQlyEYpqQBnjlgMlLQgQmlikkYQlNo4pDlBQjVh2kkgjQiDgPh7AAQkXAAj4BOgAl3P9QpqjjhDr4QgJhdAAhfQCcriLYiZQDWgsDHAvQLNCpBqMDQAhDsgzCsQjNK0szA/Qg0AEgxAAQiiAAh5gsgAnBkmIAAAKQgDBOArAgQAFAAAEACQBCAwBLgyQAAgFADgDQA/g9guhbQgFAAgDgDQg0glgrAAQg+AAgtBQgAqTq2IgBAKQgFBCAaAiQAFAAACADQA/BDBkgyQAAgFADgDQA5hAgohYQgFAAgDgCQgzgrgtAAQg7AAgvBLgAjRq2IAAAKQAEBRAuAnQAFAAAEACQBYAlA+hFQAAgFACgEQAshVhBhCQgFAAgFgCQgogRghAAQhHAAgkBPg");
	this.shape_6.setTransform(0,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:380.9,font:"normal 400 60px 'Rubik'",lineHeight:73.1}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.text,p:{y:407.25,font:"normal 400 65px 'Rubik'",lineHeight:79.05}}]},1).to({state:[{t:this.shape_6},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.9,-35.9,435.9,528.9);


(lib.btn_open = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.icon_open();
	this.instance.setTransform(-73.7,-0.05,0.146,0.146,0,0,0,103.8,100.7);

	this.text = new cjs.Text("מקום פתוח", "normal 600 28px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 149;
	this.text.alpha = 0.90196078;
	this.text.parent = this;
	this.text.setTransform(19.55,-14.2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("Azvs+MAnfAAAQDCAACICJQCJCJAADCIAALVQAADCiJCJQiICJjCAAMgnfAAAQjCAAiJiJQiJiJAAjCIAArVQAAjCCJiJQCJiJDCAAg");
	this.shape.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_1.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E2BD").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_2.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.2,-24.9,194.8,50.2);


(lib.btn_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("עולה כסף", "normal 600 28px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 149;
	this.text.alpha = 0.90196078;
	this.text.parent = this;
	this.text.setTransform(24.65,-14.6);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.icon_money();
	this.instance.setTransform(-63.7,-0.05,0.2371,0.2371,0,0,0,78.7,49.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("Azvs+MAnfAAAQDCAACICJQCJCJAADCIAALVQAADCiJCJQiICJjCAAMgnfAAAQjCAAiJiJQiJiJAAjCIAArVQAAjCCJiJQCJiJDCAAg");
	this.shape.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_1.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E2BD").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_2.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.2,-24.9,198.4,49.9);


(lib.btn_firstDate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.icon_firstDate();
	this.instance.setTransform(-70.4,0,0.1665,0.1665,0,0,0,91.6,83.5);

	this.text = new cjs.Text("דייט ראשון", "normal 600 28px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 149;
	this.text.alpha = 0.90196078;
	this.text.parent = this;
	this.text.setTransform(18.15,-13.15);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("Azvs+MAnfAAAQDCAACICJQCJCJAADCIAALVQAADCiJCJQiICJjCAAMgnfAAAQjCAAiJiJQiJiJAAjCIAArVQAAjCCJiJQCJiJDCAAg");
	this.shape.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_1.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E2BD").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_2.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.2,-24.9,194.8,50.4);


(lib.btn_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.icon_equipment();
	this.instance.setTransform(-66.85,-0.1,0.1491,0.1491,0,0,0,86.2,103.6);

	this.text = new cjs.Text("נדרש ציוד", "normal 600 28px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 149;
	this.text.alpha = 0.90196078;
	this.text.parent = this;
	this.text.setTransform(21,-13.35);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("Azvs+MAnfAAAQDCAACICJQCJCJAADCIAALVQAADCiJCJQiICJjCAAMgnfAAAQjCAAiJiJQiJiJAAjCIAArVQAAjCCJiJQCJiJDCAAg");
	this.shape.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_1.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E2BD").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_2.setTransform(0.1891,0.0205,0.5538,0.2827);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.2,-24.9,194.8,49.9);


(lib.btn_closed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.icon_closed();
	this.instance.setTransform(-68.55,-0.05,0.125,0.125,0,0,0,81.7,120.5);

	this.text = new cjs.Text("מקום סגור", "normal 600 28px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 149;
	this.text.alpha = 0.90196078;
	this.text.parent = this;
	this.text.setTransform(21.35,-14.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("Azvs+MAnfAAAQDCAACICJQCJCJAADCIAALVQAADCiJCJQiICJjCAAMgnfAAAQjCAAiJiJQiJiJAAjCIAArVQAAjCCJiJQCJiJDCAAg");
	this.shape.setTransform(0.1891,-0.9295,0.5538,0.2827);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_1.setTransform(0.1891,-0.9295,0.5538,0.2827);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6E3BE").s().p("AzvM/QjCAAiIiJQiKiJAAjCIAArVQAAjCCKiJQCIiJDCAAMAnfAAAQDBAACJCJQCJCJAADCIAALVQAADCiJCJQiJCJjBAAg");
	this.shape_2.setTransform(0.1891,-0.9295,0.5538,0.2827);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.2,-25.9,195.10000000000002,51.2);


(lib.btn2_pictures = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.icon_pictures();
	this.instance.setTransform(0,0,0.2781,0.2781,0,0,0,154.5,114);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AKrAAQAAEbjIDIQjIDIkbAAQkaAAjIjIQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEag");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5E2BD").s().p("AniHjQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEaQAAEbjIDIQjIDIkbAAQkaAAjIjIg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AniHjQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEaQAAEbjIDIQjIDIkbAAQkaAAjIjIg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-71.7,143.5,143.5);


(lib.btn2_open = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.icon_open_color();
	this.instance.setTransform(0,0,1,1,0,0,0,104,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn2_open, new cjs.Rectangle(-104,-101,208,202), null);


(lib.btn2_money = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.icon_money();
	this.instance.setTransform(0,0.05,0.6456,0.6456,0,0,0,79,50.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AKrAAQAAEbjIDIQjIDIkbAAQkaAAjIjIQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEag");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5E2BD").s().p("AniHjQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEaQAAEbjIDIQjIDIkbAAQkaAAjIjIg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AniHjQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEaQAAEbjIDIQjIDIkbAAQkaAAjIjIg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-71.7,143.5,143.5);


(lib.btn2_firstDate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.icon_firstDate_color();
	this.instance.setTransform(0,0,1,1,0,0,0,91,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn2_firstDate, new cjs.Rectangle(-91,-83,182,166), null);


(lib.btn2_equipment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.icon_equipment();
	this.instance.setTransform(0,0,0.4519,0.4519,0,0,0,87,104.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AKrAAQAAEbjIDIQjIDIkbAAQkaAAjIjIQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEag");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5E2BD").s().p("AniHjQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEaQAAEbjIDIQjIDIkbAAQkaAAjIjIg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AniHjQjIjIAAkbQAAkaDIjIQDIjIEaAAQEbAADIDIQDIDIAAEaQAAEbjIDIQjIDIkbAAQkaAAjIjIg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-71.7,143.5,143.5);


(lib.btn2_closed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.icon_closed_color();
	this.instance.setTransform(82.2,120.45,1,1,0,0,0,82.2,120.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn2_closed, new cjs.Rectangle(0,-0.4,164.4,241.70000000000002), null);


(lib.popup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer_1
	this.X_BTN = new lib.icon_X();
	this.X_BTN.name = "X_BTN";
	this.X_BTN.setTransform(-732,-364.8,0.2807,0.2807);

	this.pub_pictures_BTN = new lib.btn2_pictures();
	this.pub_pictures_BTN.name = "pub_pictures_BTN";
	this.pub_pictures_BTN.setTransform(163.5,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.pub_money_BTN = new lib.btn2_money();
	this.pub_money_BTN.name = "pub_money_BTN";
	this.pub_money_BTN.setTransform(5.95,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.pub_questions_BTN = new lib.btn2_questions();
	this.pub_questions_BTN.name = "pub_questions_BTN";
	this.pub_questions_BTN.setTransform(-151.7,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.pub_closed_icon = new lib.btn2_closed();
	this.pub_closed_icon.name = "pub_closed_icon";
	this.pub_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.text = new cjs.Text("!בחירה טובה בהחלט\nפאב יכול להיות מקום יחסית רגוע ולחלופין מקום עם מוזיקה ואנשים נוספים שלגמרי משפיעים על האווירה. אם אתם מעוניינים לצאת למקום שונה משגרת היום יום של הבית והעבודה, פאב .בהחלט יכול להיות הבחירה הנכונה\nתוכלו להזמין שתייה ומטעמים קלילים ולאחר שסיפרתם אחד לשני איך עבר עליכם היום, זה הזמן לקום ולהוציא קצת מרץ ביחד בריקודים! תוכלו לגמרי להנות מהרגע המשותף הזה וגם לשבור !!את השגרה בגבול הטעם הטוב כמובן, אז קדימה צאו לבלות", "normal 400 40px 'Rubik'");
	this.text.textAlign = "right";
	this.text.lineHeight = 49;
	this.text.lineWidth = 1035;
	this.text.alpha = 0.90196078;
	this.text.parent = this;
	this.text.setTransform(748.8,-235.95);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.icon_pub_color();
	this.instance.setTransform(-544.7,20.65,4.2744,4.2744,0,0,0,42.9,60.5);

	this.text_1 = new cjs.Text("פאב", "normal 700 80px 'Rubik'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 100;
	this.text_1.lineWidth = 250;
	this.text_1.alpha = 0.90196078;
	this.text_1.parent = this;
	this.text_1.setTransform(5.95,-400.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.instance_1 = new lib.bg_yellow();
	this.instance_1.setTransform(5.95,20.65,1,1,0,0,0,897.1,485.5);

	this.park_open_icon = new lib.btn2_open();
	this.park_open_icon.name = "park_open_icon";
	this.park_open_icon.setTransform(740.45,-367.4,0.4016,0.4016,0,0,0,0,-0.2);

	this.park_firstDate_icon = new lib.btn2_firstDate();
	this.park_firstDate_icon.name = "park_firstDate_icon";
	this.park_firstDate_icon.setTransform(633.55,-365.95,0.3771,0.3771,0,0,0,0,-0.4);

	this.park_equipment_BTN = new lib.btn2_equipment();
	this.park_equipment_BTN.name = "park_equipment_BTN";
	this.park_equipment_BTN.setTransform(229.25,386.2,0.5802,0.5802,0,0,0,0,0.1);

	this.park_pictures_BTN = new lib.btn2_pictures();
	this.park_pictures_BTN.name = "park_pictures_BTN";
	this.park_pictures_BTN.setTransform(72.55,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.park_money_BTN = new lib.btn2_money();
	this.park_money_BTN.name = "park_money_BTN";
	this.park_money_BTN.setTransform(-84.2,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.park_questions_BTN = new lib.btn2_questions();
	this.park_questions_BTN.name = "park_questions_BTN";
	this.park_questions_BTN.setTransform(-241.05,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.instance_2 = new lib.icon_park_color();
	this.instance_2.setTransform(-451.55,137.6,1.9956,1.9956,0,0,0,42.8,60.6);

	this.escapeRoom_pictures_BTN = new lib.btn2_pictures();
	this.escapeRoom_pictures_BTN.name = "escapeRoom_pictures_BTN";
	this.escapeRoom_pictures_BTN.setTransform(163.5,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.escapeRoom_money_BTN = new lib.btn2_money();
	this.escapeRoom_money_BTN.name = "escapeRoom_money_BTN";
	this.escapeRoom_money_BTN.setTransform(5.95,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.escapeRoom_questions_BTN = new lib.btn2_questions();
	this.escapeRoom_questions_BTN.name = "escapeRoom_questions_BTN";
	this.escapeRoom_questions_BTN.setTransform(-151.7,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.escapeRoom_closed_icon = new lib.btn2_closed();
	this.escapeRoom_closed_icon.name = "escapeRoom_closed_icon";
	this.escapeRoom_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.instance_3 = new lib.icon_escapeRoom_color();
	this.instance_3.setTransform(-575.95,-13.3,1.6781,1.6781,0,0,0,-0.1,0);

	this.horses_open_icon = new lib.btn2_open();
	this.horses_open_icon.name = "horses_open_icon";
	this.horses_open_icon.setTransform(740.45,-367.4,0.4016,0.4016,0,0,0,0,-0.2);

	this.horses_equipment_BTN = new lib.btn2_equipment();
	this.horses_equipment_BTN.name = "horses_equipment_BTN";
	this.horses_equipment_BTN.setTransform(229.25,386.2,0.5802,0.5802,0,0,0,0,0.1);

	this.horses_pictures_BTN = new lib.btn2_pictures();
	this.horses_pictures_BTN.name = "horses_pictures_BTN";
	this.horses_pictures_BTN.setTransform(72.55,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.horses_money_BTN = new lib.btn2_money();
	this.horses_money_BTN.name = "horses_money_BTN";
	this.horses_money_BTN.setTransform(-84.2,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.horses_questions_BTN = new lib.btn2_questions();
	this.horses_questions_BTN.name = "horses_questions_BTN";
	this.horses_questions_BTN.setTransform(-241.05,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.instance_4 = new lib.icon_horses_color();
	this.instance_4.setTransform(-477.55,96.25,1.7015,1.7015,0,0,0,42.6,60.6);

	this.wine_open_icon = new lib.btn2_open();
	this.wine_open_icon.name = "wine_open_icon";
	this.wine_open_icon.setTransform(624.45,-367.4,0.4016,0.4016,0,0,0,0,-0.2);

	this.wine_pictures_BTN = new lib.btn2_pictures();
	this.wine_pictures_BTN.name = "wine_pictures_BTN";
	this.wine_pictures_BTN.setTransform(163.5,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.wine_money_BTN = new lib.btn2_money();
	this.wine_money_BTN.name = "wine_money_BTN";
	this.wine_money_BTN.setTransform(5.95,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.wine_questions_BTN = new lib.btn2_questions();
	this.wine_questions_BTN.name = "wine_questions_BTN";
	this.wine_questions_BTN.setTransform(-151.7,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.wine_closed_icon = new lib.btn2_closed();
	this.wine_closed_icon.name = "wine_closed_icon";
	this.wine_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.instance_5 = new lib.icon_wine_color();
	this.instance_5.setTransform(-416.15,126.65,2.0486,2.0486,0,0,0,42.8,60.5);

	this.wallClimb_open_icon = new lib.btn2_open();
	this.wallClimb_open_icon.name = "wallClimb_open_icon";
	this.wallClimb_open_icon.setTransform(624.45,-367.4,0.4016,0.4016,0,0,0,0,-0.2);

	this.wallClimb_closed_icon = new lib.btn2_closed();
	this.wallClimb_closed_icon.name = "wallClimb_closed_icon";
	this.wallClimb_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.wallClimb_equipment_BTN = new lib.btn2_equipment();
	this.wallClimb_equipment_BTN.name = "wallClimb_equipment_BTN";
	this.wallClimb_equipment_BTN.setTransform(229.25,386.2,0.5802,0.5802,0,0,0,0,0.1);

	this.wallClimb_pictures_BTN = new lib.btn2_pictures();
	this.wallClimb_pictures_BTN.name = "wallClimb_pictures_BTN";
	this.wallClimb_pictures_BTN.setTransform(72.55,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.wallClimb_money_BTN = new lib.btn2_money();
	this.wallClimb_money_BTN.name = "wallClimb_money_BTN";
	this.wallClimb_money_BTN.setTransform(-84.2,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.wallClimb_questions_BTN = new lib.btn2_questions();
	this.wallClimb_questions_BTN.name = "wallClimb_questions_BTN";
	this.wallClimb_questions_BTN.setTransform(-241.05,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.instance_6 = new lib.icon_wallClimb_color();
	this.instance_6.setTransform(-477.55,108.4,1.7015,1.7015,0,0,0,42.6,60.6);

	this.cinema_firstDate_icon = new lib.btn2_firstDate();
	this.cinema_firstDate_icon.name = "cinema_firstDate_icon";
	this.cinema_firstDate_icon.setTransform(633.55,-365.95,0.3771,0.3771,0,0,0,0,-0.4);

	this.cinema_closed_icon = new lib.btn2_closed();
	this.cinema_closed_icon.name = "cinema_closed_icon";
	this.cinema_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.cinema_pictures_BTN = new lib.btn2_pictures();
	this.cinema_pictures_BTN.name = "cinema_pictures_BTN";
	this.cinema_pictures_BTN.setTransform(163.5,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.cinema_money_BTN = new lib.btn2_money();
	this.cinema_money_BTN.name = "cinema_money_BTN";
	this.cinema_money_BTN.setTransform(5.95,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.cinema_questions_BTN = new lib.btn2_questions();
	this.cinema_questions_BTN.name = "cinema_questions_BTN";
	this.cinema_questions_BTN.setTransform(-151.7,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.instance_7 = new lib.icon_cinema_color();
	this.instance_7.setTransform(-492.15,-10.9,1.8095,1.8095);

	this.iceSkate_closed_icon = new lib.btn2_closed();
	this.iceSkate_closed_icon.name = "iceSkate_closed_icon";
	this.iceSkate_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.iceSkate_equipment_BTN = new lib.btn2_equipment();
	this.iceSkate_equipment_BTN.name = "iceSkate_equipment_BTN";
	this.iceSkate_equipment_BTN.setTransform(229.25,386.2,0.5802,0.5802,0,0,0,0,0.1);

	this.iceSkate_pictures_BTN = new lib.btn2_pictures();
	this.iceSkate_pictures_BTN.name = "iceSkate_pictures_BTN";
	this.iceSkate_pictures_BTN.setTransform(72.55,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.iceSkate_money_BTN = new lib.btn2_money();
	this.iceSkate_money_BTN.name = "iceSkate_money_BTN";
	this.iceSkate_money_BTN.setTransform(-84.2,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.iceSkate_questions_BTN = new lib.btn2_questions();
	this.iceSkate_questions_BTN.name = "iceSkate_questions_BTN";
	this.iceSkate_questions_BTN.setTransform(-241.05,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.instance_8 = new lib.icon_iceSkating_color();
	this.instance_8.setTransform(-455.6,82.5,1.571,1.4321,0,0,0,42.6,60.8);

	this.bowling_equipment_BTN = new lib.btn2_equipment();
	this.bowling_equipment_BTN.name = "bowling_equipment_BTN";
	this.bowling_equipment_BTN.setTransform(163.5,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.bowling_pictures_BTN = new lib.btn2_pictures();
	this.bowling_pictures_BTN.name = "bowling_pictures_BTN";
	this.bowling_pictures_BTN.setTransform(5.95,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.bowling_money_BTN = new lib.btn2_money();
	this.bowling_money_BTN.name = "bowling_money_BTN";
	this.bowling_money_BTN.setTransform(-151.7,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.bowling_closed_icon = new lib.btn2_closed();
	this.bowling_closed_icon.name = "bowling_closed_icon";
	this.bowling_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.instance_9 = new lib.icon_bowling_color();
	this.instance_9.setTransform(-579.9,-11.65,1.6762,1.6762);

	this.restaurant_open_icon = new lib.btn2_open();
	this.restaurant_open_icon.name = "restaurant_open_icon";
	this.restaurant_open_icon.setTransform(624.45,-367.4,0.4016,0.4016,0,0,0,0,-0.2);

	this.restaurant_firstDate_icon = new lib.btn2_firstDate();
	this.restaurant_firstDate_icon.name = "restaurant_firstDate_icon";
	this.restaurant_firstDate_icon.setTransform(519.3,-365.95,0.3771,0.3771,0,0,0,0,-0.4);

	this.restaurant_closed_icon = new lib.btn2_closed();
	this.restaurant_closed_icon.name = "restaurant_closed_icon";
	this.restaurant_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.restaurant_pictures_BTN = new lib.btn2_pictures();
	this.restaurant_pictures_BTN.name = "restaurant_pictures_BTN";
	this.restaurant_pictures_BTN.setTransform(163.5,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.restaurant_money_BTN = new lib.btn2_money();
	this.restaurant_money_BTN.name = "restaurant_money_BTN";
	this.restaurant_money_BTN.setTransform(5.95,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.restaurant_questions_BTN = new lib.btn2_questions();
	this.restaurant_questions_BTN.name = "restaurant_questions_BTN";
	this.restaurant_questions_BTN.setTransform(-151.7,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.instance_10 = new lib.icon_restaurant_color();
	this.instance_10.setTransform(-509.9,-13,1.3715,1.3715,0,0,0,-0.1,0.1);

	this.house_firstDate_icon = new lib.btn2_firstDate();
	this.house_firstDate_icon.name = "house_firstDate_icon";
	this.house_firstDate_icon.setTransform(633.55,-365.95,0.3771,0.3771,0,0,0,0,-0.4);

	this.house_equipment_BTN = new lib.btn2_equipment();
	this.house_equipment_BTN.name = "house_equipment_BTN";
	this.house_equipment_BTN.setTransform(163.5,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.house_pictures_BTN = new lib.btn2_pictures();
	this.house_pictures_BTN.name = "house_pictures_BTN";
	this.house_pictures_BTN.setTransform(5.95,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.house_questions_BTN = new lib.btn2_questions();
	this.house_questions_BTN.name = "house_questions_BTN";
	this.house_questions_BTN.setTransform(-151.7,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.house_closed_icon = new lib.btn2_closed();
	this.house_closed_icon.name = "house_closed_icon";
	this.house_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.instance_11 = new lib.icon_house_color();
	this.instance_11.setTransform(-549.15,2.95,1.6719,1.5329,0,0,0,-0.1,0);

	this.cooking_closed_icon = new lib.btn2_closed();
	this.cooking_closed_icon.name = "cooking_closed_icon";
	this.cooking_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.cooking_pictures_BTN = new lib.btn2_pictures();
	this.cooking_pictures_BTN.name = "cooking_pictures_BTN";
	this.cooking_pictures_BTN.setTransform(163.5,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.cooking_money_BTN = new lib.btn2_money();
	this.cooking_money_BTN.name = "cooking_money_BTN";
	this.cooking_money_BTN.setTransform(5.95,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.cooking_questions_BTN = new lib.btn2_questions();
	this.cooking_questions_BTN.name = "cooking_questions_BTN";
	this.cooking_questions_BTN.setTransform(-151.7,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.instance_12 = new lib.icon_cooking_color();
	this.instance_12.setTransform(-535.4,-5.65,1.5789,1.5789,0,0,0,-0.1,0.1);

	this.show_open_icon = new lib.btn2_open();
	this.show_open_icon.name = "show_open_icon";
	this.show_open_icon.setTransform(624.45,-367.4,0.4016,0.4016,0,0,0,0,-0.2);

	this.show_closed_icon = new lib.btn2_closed();
	this.show_closed_icon.name = "show_closed_icon";
	this.show_closed_icon.setTransform(724.9,-364.8,0.3153,0.3153,0,0,0,82.2,120.4);

	this.show_equipment_BTN = new lib.btn2_equipment();
	this.show_equipment_BTN.name = "show_equipment_BTN";
	this.show_equipment_BTN.setTransform(229.25,386.2,0.5802,0.5802,0,0,0,0,0.1);

	this.show_pictures_BTN = new lib.btn2_pictures();
	this.show_pictures_BTN.name = "show_pictures_BTN";
	this.show_pictures_BTN.setTransform(72.55,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.show_money_BTN = new lib.btn2_money();
	this.show_money_BTN.name = "show_money_BTN";
	this.show_money_BTN.setTransform(-84.2,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.show_questions_BTN = new lib.btn2_questions();
	this.show_questions_BTN.name = "show_questions_BTN";
	this.show_questions_BTN.setTransform(-241.05,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.instance_13 = new lib.icon_show_color();
	this.instance_13.setTransform(-483.55,99.85,1.5709,1.4321,0,0,0,42.6,60.8);

	this.sea_firstDate_icon = new lib.btn2_firstDate();
	this.sea_firstDate_icon.name = "sea_firstDate_icon";
	this.sea_firstDate_icon.setTransform(633.55,-365.95,0.3771,0.3771,0,0,0,0,-0.4);

	this.sea_open_icon = new lib.btn2_open();
	this.sea_open_icon.name = "sea_open_icon";
	this.sea_open_icon.setTransform(740.45,-367.4,0.4016,0.4016,0,0,0,0,-0.2);

	this.sea_equipment_BTN = new lib.btn2_equipment();
	this.sea_equipment_BTN.name = "sea_equipment_BTN";
	this.sea_equipment_BTN.setTransform(162.95,386.2,0.5802,0.5802,0,0,0,0,0.1);

	this.sea_pictures_BTN = new lib.btn2_pictures();
	this.sea_pictures_BTN.name = "sea_pictures_BTN";
	this.sea_pictures_BTN.setTransform(6.15,386.15,0.5805,0.5805,0,0,0,0.1,0.1);

	this.sea_questions_BTN = new lib.btn2_questions();
	this.sea_questions_BTN.name = "sea_questions_BTN";
	this.sea_questions_BTN.setTransform(-151.45,387.55,0.5805,0.5805,0,0,0,-0.1,0.1);

	this.instance_14 = new lib.icon_sea_color();
	this.instance_14.setTransform(-462.7,101.95,1.3544,1.369,0,0,0,42.6,60.8);

	this.instance_15 = new lib.about_txt3();
	this.instance_15.setTransform(5.9,24.6,1,1,0,0,0,455.4,27.1);

	this.instance_16 = new lib.about_txt1();
	this.instance_16.setTransform(292.95,-74.05,1,1,0,0,0,164.8,26.2);

	this.instance_17 = new lib.about_txt2();
	this.instance_17.setTransform(20.95,24.25,1,1,0,0,0,437.6,124.5);

	this.instance_18 = new lib.logoHIT2();
	this.instance_18.setTransform(-122,261,0.8167,0.8167);

	this.instance_19 = new lib.icon_firstDate_color();
	this.instance_19.setTransform(671.2,-90.15,0.2938,0.2938,-8.481,0,0,91.6,82.7);

	this.instance_20 = new lib.icon_firstDate();
	this.instance_20.setTransform(-708.35,274.65,0.2837,0.2837,-15.0003,0,0,91.2,83.5);

	this.instance_21 = new lib.icon_firstDate();
	this.instance_21.setTransform(-610.35,234.35,0.2838,0.2838,14.9995,0,0,91.2,83.8);

	this.instance_22 = new lib.icon_firstDate();
	this.instance_22.setTransform(-624,342.65,0.2838,0.2838,-29.9979,0,0,91.4,83.9);

	this.instance_23 = new lib.icon_firstDate_color();
	this.instance_23.setTransform(751.15,-36.75,0.2939,0.2939,21.5147,0,0,91.4,82.9);

	this.instance_24 = new lib.icon_firstDate_color();
	this.instance_24.setTransform(735,-163.65,0.2939,0.2939,21.5175,0,0,91.3,82.7);

	this.instance_25 = new lib.icon_firstDate_color();
	this.instance_25.setTransform(615.5,-274.25,1.2074,1.2074,-8.4815,0,0,91.2,83);

	this.instance_26 = new lib.icon_firstDate();
	this.instance_26.setTransform(-677.6,87.25,1.2079,1.2079,16.0199,0,0,91.4,83.5);

	this.text_2 = new cjs.Text("אודות", "normal 700 60px 'Rubik'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 75;
	this.text_2.lineWidth = 186;
	this.text_2.alpha = 0.90196078;
	this.text_2.parent = this;
	this.text_2.setTransform(0,-393.35);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_2);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:5.95,y:-400.9,text:"פאב",lineWidth:250,textAlign:"center",lineHeight:99.7}},{t:this.instance},{t:this.text,p:{x:748.8,y:-235.95,text:"!בחירה טובה בהחלט\nפאב יכול להיות מקום יחסית רגוע ולחלופין מקום עם מוזיקה ואנשים נוספים שלגמרי משפיעים על האווירה. אם אתם מעוניינים לצאת למקום שונה משגרת היום יום של הבית והעבודה, פאב .בהחלט יכול להיות הבחירה הנכונה\nתוכלו להזמין שתייה ומטעמים קלילים ולאחר שסיפרתם אחד לשני איך עבר עליכם היום, זה הזמן לקום ולהוציא קצת מרץ ביחד בריקודים! תוכלו לגמרי להנות מהרגע המשותף הזה וגם לשבור !!את השגרה בגבול הטעם הטוב כמובן, אז קדימה צאו לבלות",lineWidth:1035,textAlign:"right",lineHeight:49.4}},{t:this.pub_closed_icon},{t:this.pub_questions_BTN},{t:this.pub_money_BTN},{t:this.pub_pictures_BTN},{t:this.X_BTN}]}).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:-0.05,y:-393.35,text:"פארק בטבע",lineWidth:425,textAlign:"center",lineHeight:99.7}},{t:this.instance_2},{t:this.text,p:{x:780.2,y:-193.45,text:"מי לא אוהב ללכת לפארק, לפרוס שמיכה מול הנופים הירוקים עם כמה חטיפים, לשים אולי קצת מוזיקה ברקע ופשוט להנות מהרגע... אז למה לא להפוך את זה למקום הבילוי בדייט הבא שלכם? תוכלו לנצל את הזמן ביחד בפיקניק עם המאכלים ...שאתם הכי אוהבים או לעשות טיול רגלי ברחבי הפארק\nזו אחלה הזדמנות לקצת זמן איכות ביחד וכך תוכלו להכיר !יותר טוב את הפרטנר שלכם",lineWidth:978,textAlign:"right",lineHeight:49.4}},{t:this.park_questions_BTN},{t:this.park_money_BTN},{t:this.park_pictures_BTN},{t:this.X_BTN},{t:this.park_equipment_BTN},{t:this.park_firstDate_icon},{t:this.park_open_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:-0.05,y:-400.9,text:"חדר בריחה",lineWidth:393,textAlign:"center",lineHeight:99.7}},{t:this.instance_3},{t:this.text,p:{x:748.8,y:-210.05,text:"מתי בפעם האחרונה עמדתם בפני משימה חשובה והיו לכם רק 60 ??דקות לפתור כמה שיותר חידות? ועוד עם הפרטנר שלכם\nאם אתם מרגישים שאתם רוצים לנסות משהו חדש בפגישות ולצאת מהשגרה, אתם יכולים לחוות ביחד איתם את החוויה יוצאת הדופן הזו .ולחזק את הקשר שלכם אפילו יותר\nתעזרו אחד לשני לעבור את האתגרים, לצלוח את המשימה ולהנות ביחד ממפגש ייחודי, מצחיק ומהנה! אחרי זה אפשר להמשיך את\n:) היום בכל דרך שתבחרו וגם יהיה לכם נושא שיחה חדש",lineWidth:1058,textAlign:"right",lineHeight:49.4}},{t:this.escapeRoom_closed_icon},{t:this.escapeRoom_questions_BTN},{t:this.escapeRoom_money_BTN},{t:this.escapeRoom_pictures_BTN},{t:this.X_BTN}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:-1,y:-393.35,text:"חוות סוסים",lineWidth:377,textAlign:"center",lineHeight:99.7}},{t:this.instance_4},{t:this.text,p:{x:780.2,y:-235.05,text:"אם אתם אוהבים בעלי חיים גדולים, מהירים וחברותיים למדי וכבר הבנתם שאנחנו מדברים על סוסים, כנראה שזו תהיה הבחירה .הנכונה בבחירת המקום למפגש הבא שלכם\nרכיבה על סוסים יכולה להיות דרך מצוינת להכיר יותר אחד את השני. בזמן הליכה רגועה בין שדות או על קו החוף, יהיה לכם זמן לדבר עם הפרטנר תוך כדי שאתם חווים את המפגש מזווית קצת שונה ועם שני חברים חדשים שיצטרפו אליכם למסע חוויתי ולגמרי הולכים להעלות לכם את האווירה... תוכלו לעשות טיול קצת יותר אתגרי או טיול רגוע בשקיעה, ככה או אחרת זה אחד הדייטים .שאתם תזכרו לעוד זמן רב גם אחרי זה",lineWidth:1035,textAlign:"right",lineHeight:49.4}},{t:this.horses_questions_BTN},{t:this.horses_money_BTN},{t:this.horses_pictures_BTN},{t:this.X_BTN},{t:this.horses_equipment_BTN},{t:this.horses_open_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:0,y:-400.9,text:"סיור ביקב",lineWidth:334,textAlign:"center",lineHeight:99.7}},{t:this.instance_5},{t:this.text,p:{x:748.8,y:-197.3,text:"הריח של היין באוויר למראה של שדה ירוק ועוצר נשימה זה שילוב מושלם לדייט חלומי ביחד. תוכלו לקחת את הפרטנר לסיור ביקב בכל אזור בארץ שרק תבחרו, תזכו לטעום יינות משובחים ולהפוך למבקרי יין ליום אחד. תוכלו לאכול ארוחה טעימה מול נופים חדשים או לעשות טיול בשדות, אבל הכי ,חשוב, תחוו ביחד עם בני הזוג שלכם רגעים קטנים ומיוחדים ואם אתם גם אוהבי יין אמיתיים אז הבחירה הזו היא בדיוק ?בשבילכם, אז... למה אתם מחכים",lineWidth:940,textAlign:"right",lineHeight:49.4}},{t:this.wine_closed_icon},{t:this.wine_questions_BTN},{t:this.wine_money_BTN},{t:this.wine_pictures_BTN},{t:this.X_BTN},{t:this.wine_open_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:-1,y:-393.35,text:"קיר טיפוס",lineWidth:377,textAlign:"center",lineHeight:99.7}},{t:this.instance_6},{t:this.text,p:{x:748.8,y:-209.8,text:"אנחנו הכי רציניים שיש, קיר טיפוס יכול להיות הזדמנות\nלהתנסות ביחד בדבר ייחודי ושונה. תצטרכו לעבוד ביחד ולעזור ?אחד לשני להגיע לפסגה ומה יותר מגבש מזה\nדיבורים ושיחות יש בהרבה הזדמנויות אבל כאן אתם הולכים לחוות משהו שונה לגמרי. מתאים במיוחד לדייטים מתקדמים אחרי שכבר הכרתם את בן \\ בת הזוג שלכם ואתם רוצים לצבור זיכרונות ?חדשים ביחד ומי יודע, אולי זה יהפוך לתחביב הזוגי החדש שלכם\n!הדרך לפסגה מעולם לא הייתה טובה יותר",lineWidth:1035,textAlign:"right",lineHeight:49.4}},{t:this.wallClimb_questions_BTN},{t:this.wallClimb_money_BTN},{t:this.wallClimb_pictures_BTN},{t:this.X_BTN},{t:this.wallClimb_equipment_BTN},{t:this.wallClimb_closed_icon},{t:this.wallClimb_open_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:0,y:-400.9,text:"קולנוע",lineWidth:356,textAlign:"center",lineHeight:99.7}},{t:this.instance_7},{t:this.text,p:{x:762.7,y:-206.8,text:"הפתרון האולטימטיבי! אתם והפרטנר צופים יחד בסרט והאווירה רגועה ונינוחה למדי. פופקורן או קצת שוקולדים וזה כבר הופך את הכל למושלם! אם לא הצלחתם לחשוב על רעיון מקורי או סתם החלטתם שאתם רוצים להעביר את הערב ברוגע ובקלילות, פשוט לכו לקולנוע הקרוב לביתכם ובחרו בסרט שנראה הכי מעניין מבין כולם והערב כבר יעשה את שלו... יכול להתאים גם למפגשים ראשונים אך קחו בחשבון שאין .יותר מידי זמן לדיבורים במהלך ההקרנה",lineWidth:867,textAlign:"right",lineHeight:49.4}},{t:this.cinema_questions_BTN},{t:this.cinema_money_BTN},{t:this.cinema_pictures_BTN},{t:this.X_BTN},{t:this.cinema_closed_icon},{t:this.cinema_firstDate_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:-0.05,y:-393.35,text:"החלקה על הקרח",lineWidth:585,textAlign:"center",lineHeight:99.7}},{t:this.instance_8},{t:this.text,p:{x:748.8,y:-215.05,text:"לא החלקנו על הראש, החלקה על הקרח לגמרי יכולה להפוך למקום הבילוי המוצלח בדייט הבא שלכם ;) בהנחה שאף אחד מכם לא מחליק מקצועי לגמרי, שניכם הולכים לנסות משהו מפתיע ומלא באדרנלין שהולך לשדרג לכם את המפגש בכמה רמות למעלה. דייט מסוג כזה מצריך מכם לעזור אחד לשני ולעבוד ביחד בשיתוף פעולה כדי להצליח ולכבוש את הרחבה!. אנחנו סומכים עליכם שתוציאו את המיטב ממפגש שכזה ולגמרי תוכלו להיזכר בו ברגעים ..משותפים אחרים שעוד יגיעו",lineWidth:936,textAlign:"right",lineHeight:49.4}},{t:this.iceSkate_questions_BTN},{t:this.iceSkate_money_BTN},{t:this.iceSkate_pictures_BTN},{t:this.X_BTN},{t:this.iceSkate_equipment_BTN},{t:this.iceSkate_closed_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:0,y:-400.9,text:"באולינג",lineWidth:281,textAlign:"center",lineHeight:99.7}},{t:this.instance_9},{t:this.text,p:{x:748.8,y:-220.35,text:"הדייט המושלם יכול להיות קרוב לבית במקום הכי קליל שיש כמו ,באולינג. תחשבו על זה, יש מספיק זמן לדבר אחד עם השני בלי לחץ יש אפשרות להנות תוך כדי ממשחק משותף, ברוב המקומות אפשר גם להזמין משהו לשתות או לאכול וככה הזמן מתארך בקלות ונותן לכם מרווח להמשיך ולהכיר יותר את הפרטנר שלכם... בנינו, גם אם אתם לא ממש טובים במשחק או שפשוט לא ...מתחברים, אף אחד לא הולך לבדוק את הניקוד שלכם\nבסופו של היום, אתם הולכים להעביר מפגש בצורה מהנה עם (:בן\\בת הזוג שלכם וזה הניצחון האמיתי",lineWidth:1035,textAlign:"right",lineHeight:49.4}},{t:this.bowling_closed_icon},{t:this.bowling_money_BTN},{t:this.bowling_pictures_BTN},{t:this.bowling_equipment_BTN},{t:this.X_BTN}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:0,y:-400.9,text:"מסעדה",lineWidth:356,textAlign:"center",lineHeight:99.7}},{t:this.instance_10},{t:this.text,p:{x:748.8,y:-214.1,text:"!אופציה מעולה\nזו יכולה להיות מסעדה חדשה שמעולם לא ביקרתם בה או המסעדה האהובה עליכם בפינת הרחוב, זה לא משנה מה תבחרו, אתם הולכים לאכול מאכלים טעימים ולבלות זמן ?איכות עם הפרטנר ומי צריך יותר מזה בעצם\nמסעדה לגמרי מתאימה גם לדייטים ראשונים, אחלה מקום לשבת ולהכיר את מי שנמצא מולכם ובמקביל להנות מארוחה טעימה בלי להתאמץ... רק אל תשכחו לבדוק אם .צריך לשמור מקום וצאו להנות מהמפגש שלכם ביחד",lineWidth:944,textAlign:"right",lineHeight:49.4}},{t:this.restaurant_questions_BTN},{t:this.restaurant_money_BTN},{t:this.restaurant_pictures_BTN},{t:this.X_BTN},{t:this.restaurant_closed_icon},{t:this.restaurant_firstDate_icon},{t:this.restaurant_open_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:5.95,y:-400.9,text:"בית",lineWidth:250,textAlign:"center",lineHeight:99.7}},{t:this.instance_11},{t:this.text,p:{x:748.8,y:-197.3,text:"קראתם נכון, בית! כמה שזה נשמע פשוט ככה זה גם טוב, מי אמר שצריך לחשוב בגדול ולחפש מקומות בחוץ כשאפשר ?להביא את המפגש המושלם אליכם הביתה\n,תוכלו להפוך את הסלון שלכם לערב אחד לכל מה שתבחרו למשל מסעדה ביתית, זירת משחקי קופסא, צפייה בסרטים אהובים או פשוט לשבת ולדבר על כוס קפה בספה הנוחה (:שלכם ובשלבים מתקדמים אפשר אפילו להישאר בפיג'מה\nיש עוד המון רעיונות שתוכלו ליישם ככל שיעלה על דעתכם אז ?למה אתם מחכים",lineWidth:986,textAlign:"right",lineHeight:49.4}},{t:this.house_closed_icon},{t:this.house_questions_BTN},{t:this.house_pictures_BTN},{t:this.house_equipment_BTN},{t:this.X_BTN},{t:this.house_firstDate_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:-0.05,y:-400.9,text:"סדנת בישול",lineWidth:419,textAlign:"center",lineHeight:99.7}},{t:this.instance_12},{t:this.text,p:{x:748.8,y:-229.6,text:"קולינריה ודייט זה שילוב מנצח! אין כמו חוויה משותפת של להפוך לשפים לערב אחד, לעזור אחד לשני עם הפסטה .במכונה או לבשל את האורז המנצח\nסדנת בישול הפכה לגמרי לרעיון אולטימטיבי לחוויה זוגית ובמיוחד לכאלה שנהנים ואוהבים לנסות טעמים חדשים, כל מה שנשאר לעשות זה לבחור את המטבח המועדף עליכם .ולצאת להרפתקה ייחודית ועשירה בטעמים אהובים\nבסוף המפגש גם יהיו לכם תמונות חדשות וגם תצברו ידע וסודות מטבח שתוכלו לפנק את בן \\ בת הזוג בארוחה .משלכם בפעם הבאה",lineWidth:965,textAlign:"right",lineHeight:49.4}},{t:this.cooking_questions_BTN},{t:this.cooking_money_BTN},{t:this.cooking_pictures_BTN},{t:this.X_BTN},{t:this.cooking_closed_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:-0.05,y:-393.35,text:"הופעה של אומן",lineWidth:530,textAlign:"center",lineHeight:99.7}},{t:this.instance_13},{t:this.text,p:{x:748.8,y:-209.75,text:"אחת הדרכים הטובות לשבור את הקרח היא ללכת יחד להופעה שתוביל את הערב שלכם, זה יכול להיות כל אומן שרק תבחרו, בין אם זה זמר\\ת או להקה, מופע סטאנדאפ, הצגה או מופע ריקודים מהפנט... לצאת יחד לראות אומן שאתם אוהבים ולהשתחרר זו לגמרי בחירה מעולה לבילוי, מומלץ בעיקר אחרי שכבר נפגשתם מספר פעמים ואתם רוצים להתחבר קצת יותר לבן \\ בת הזוג .שלכם, להרגיש חופשיים ופשוט להנות מוויב טוב\nמה שנשאר עכשיו זה לבדוק מתי ההופעה הכי קרובה ולוודא (:ששניכם כמובן תהיו מרוצים מהבחירה",lineWidth:1038,textAlign:"right",lineHeight:49.4}},{t:this.show_questions_BTN},{t:this.show_money_BTN},{t:this.show_pictures_BTN},{t:this.X_BTN},{t:this.show_equipment_BTN},{t:this.show_closed_icon},{t:this.show_open_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_1,p:{x:-0.05,y:-393.35,text:"ים",lineWidth:467,textAlign:"center",lineHeight:99.7}},{t:this.instance_14},{t:this.text,p:{x:780.2,y:-219.3,text:"ים הוא המקום המושלם לדייט, אפשר לעשות כל כך הרבה דברים במקום אחד, למשל לעשות טיול קלאסי בטיילת או על שפת הים לאורך השקיעה ולהנות משיחות נפש ארוכות ביחד... אפשר להביא שמיכה, סלסלה עם שתייה קלה וכמה מטעמים שאתם אוהבים שיצרו את הפיקניק המושלם מול הנוף של הגלים... אם אתם רוצים קצת לשדרג את המפגש אפשר גם לעשות טיול סוסים על קו החוף, מה יותר רומנטי מזה? בקיצור, כנראה שהבנתם שהאופציות מגוונות ורבות (:ועכשיו החלק שלכם זה לבחור מתוכן ",lineWidth:944,textAlign:"right",lineHeight:49.4}},{t:this.sea_questions_BTN},{t:this.sea_pictures_BTN},{t:this.X_BTN},{t:this.sea_equipment_BTN},{t:this.sea_open_icon},{t:this.sea_firstDate_icon}]},1).to({state:[{t:this.instance_1},{t:this.text_2},{t:this.X_BTN},{t:this.text_1,p:{x:288.05,y:-291.85,text:"המקום האידיאלי",lineWidth:576,textAlign:"right",lineHeight:100.95}},{t:this.text,p:{x:0,y:-203.75,text:"בחירת מקום הדייט בהתאם לאופי הרצוי",lineWidth:693,textAlign:"center",lineHeight:48.75}},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-891.1,-464.8,1794.2,971);


// stage content:
(lib.TheIdealPlace = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24);
		self.mouseEnabled = true;
		
		
		//------------------ העלמת פריטים בתחילת הייצוג ---------------------
		self.popup_main.visible = false;
		self.txt_info.visible = false;
		self.mini_popup_right.visible = false;
		self.mini_popup_center.visible = false;
		self.mini_popup_left.visible = false;
		self.q_info_calm.visible = false;
		self.q_info_iceBreaking.visible = false;
		self.q_info_active.visible = false;
		self.q_info_romance.visible = false;
		self.mini_txt_right.visible = false;
		self.mini_txt_center.visible = false;
		self.mini_txt_left.visible = false;
		self.link_telem.visible = false;
		//-------------------------------------------------------------------
		
		
		//------------------- קיבוע, פילטרים ואפשרויות לחיצה ----------------
		
		//---- ניקוי כל הפילטרים בתפריטים ובאייקונים ----
		function clear_filters() {
			self.icon_pub.gotoAndStop(0);
			self.icon_park.gotoAndStop(0);
			self.icon_escapeRoom.gotoAndStop(0);
			self.icon_horses.gotoAndStop(0);
			self.icon_wine.gotoAndStop(0);
			self.icon_wallClimb.gotoAndStop(0);
			self.icon_cinema.gotoAndStop(0);
			self.icon_iceSkate.gotoAndStop(0);
			self.icon_bowling.gotoAndStop(0);
			self.icon_restaurant.gotoAndStop(0);
			self.icon_house.gotoAndStop(0);
			self.icon_cooking.gotoAndStop(0);
			self.icon_show.gotoAndStop(0);
			self.icon_sea.gotoAndStop(0);
		
			self.btn_calm.gotoAndStop(0);
			self.btn_active.gotoAndStop(0);
			self.btn_iceBreaking.gotoAndStop(0);
			self.btn_romance.gotoAndStop(0);
			self.btn2_equipment.gotoAndStop(0);
			self.btn2_money.gotoAndStop(0);
			self.btn2_firstDate.gotoAndStop(0);
			self.btn2_closed.gotoAndStop(0);
			self.btn2_open.gotoAndStop(0);
		}
		
		
		//--- טיפול בפריטים ברקע שלא יהיו לחיצים בזמן פתיחת חלון פופ אפ ---
		function enabled(enable) {
			self.btn_calm.mouseEnabled = enable;
			self.btn_iceBreaking.mouseEnabled = enable;
			self.btn_active.mouseEnabled = enable;
			self.btn_romance.mouseEnabled = enable;
			self.btn2_equipment.mouseEnabled = enable;
			self.btn2_money.mouseEnabled = enable;
			self.btn2_firstDate.mouseEnabled = enable;
			self.btn2_closed.mouseEnabled = enable;
			self.btn2_open.mouseEnabled = enable;
			self.btn_about.mouseEnabled = enable;
		
			self.q_calm.mouseEnabled = enable;
			self.q_iceBreaking.mouseEnabled = enable;
			self.q_active.mouseEnabled = enable;
			self.q_romance.mouseEnabled = enable;
		
			self.icon_pub.mouseEnabled = enable;
			self.icon_park.mouseEnabled = enable;
			self.icon_escapeRoom.mouseEnabled = enable;
			self.icon_horses.mouseEnabled = enable;
			self.icon_wine.mouseEnabled = enable;
			self.icon_wallClimb.mouseEnabled = enable;
			self.icon_cinema.mouseEnabled = enable;
			self.icon_iceSkate.mouseEnabled = enable;
			self.icon_bowling.mouseEnabled = enable;
			self.icon_restaurant.mouseEnabled = enable;
			self.icon_house.mouseEnabled = enable;
			self.icon_cooking.mouseEnabled = enable;
			self.icon_show.mouseEnabled = enable;
			self.icon_sea.mouseEnabled = enable;
		}
		
		
		//--- טיפול בקיבוע כפתורים ---
		var counter = 0;
		var click = "";
		
		function stay_filter(btn_name, name_filter) {
			if (counter == 1) {
				btn_name.gotoAndStop(1);
				self.txt_info.gotoAndStop(1);
				self.txt_info.visible = true;
				name_filter;
				enabled_btns(false);
				if (click == "clicked") {
					btn_name.mouseEnabled = false;
				} else {
					btn_name.mouseEnabled = true;
				}
			} else {
				status = "none";
				clear_filters();
				self.txt_info.gotoAndStop(0);
				counter = 0;
				enabled(true);
			}
		}
		
		
		//--- טיפול בכפתורים שלא יהיו לחיצים בזמן קיבוע של כפתור ---
		function enabled_btns(enable) {
			self.btn_calm.mouseEnabled = enable;
			self.btn_iceBreaking.mouseEnabled = enable;
			self.btn_active.mouseEnabled = enable;
			self.btn_romance.mouseEnabled = enable;
			self.btn2_equipment.mouseEnabled = enable;
			self.btn2_money.mouseEnabled = enable;
			self.btn2_firstDate.mouseEnabled = enable;
			self.btn2_closed.mouseEnabled = enable;
			self.btn2_open.mouseEnabled = enable;
		
			self.q_calm.mouseEnabled = enable;
			self.q_iceBreaking.mouseEnabled = enable;
			self.q_active.mouseEnabled = enable;
			self.q_romance.mouseEnabled = enable;
		}
		//-------------------------------------------------------------------
		
		
		//------------------------ כפתור האיקס ------------------------------
		self.popup_main.X_BTN.addEventListener("click", click_X_BTN);
		self.popup_main.X_BTN.addEventListener("mouseover", mouseover_X_BTN);
		self.popup_main.X_BTN.addEventListener("mouseout", mouseout_X_BTN);
		
		function click_X_BTN() {
			self.popup_main.visible = false;
			self.link_telem.visible = false;
			click = "";
			enabled(true);
		}
		
		function mouseover_X_BTN() {
			self.cursor = "pointer";
		}
		
		function mouseout_X_BTN() {
			self.cursor = "initial";
		}
		//-------------------------------------------------------------------
		
		
		//--------------- תפעול אירועי עכבר - אודות -------------------------
		self.btn_about.addEventListener("click", click_btn_about);
		self.btn_about.addEventListener("mouseover", mouseover_btn_about);
		self.btn_about.addEventListener("mouseout", mouseout_btn_about);
		
		function click_btn_about() {
			self.popup_main.gotoAndStop(14);
			self.popup_main.visible = true;
			self.link_telem.visible = true;
			enabled(false);
		}
		
		function mouseover_btn_about() {
			self.cursor = "pointer";
			self.btn_about.gotoAndStop(1);
		}
		
		function mouseout_btn_about() {
			self.cursor = "initial";
			self.btn_about.gotoAndStop(0);
		}
		//--------------------------------------------------------------------
		
		
		//------------ תפעול אירועי עכבר - לינק לאתר הפקולטה -----------------
		self.link_telem.addEventListener("click", click_link_telem);
		self.link_telem.addEventListener("mouseover", mouseover_link_telem);
		self.link_telem.addEventListener("mouseout", mouseout_link_telem);
		
		function click_link_telem() {
			window.open("https://www.hit.ac.il/telem/overview", "_blank");
		}
		
		function mouseover_link_telem() {
			self.cursor = "pointer";
		}
		
		function mouseout_link_telem() {
			self.cursor = "initial";
		}
		//--------------------------------------------------------------------
		
		
		//----------------- טיפול אירועי עכבר - סימני שאלה --------------------
		self.q_calm.addEventListener("mouseover", over_q_calm);
		self.q_calm.addEventListener("mouseout", over_q_calm_out);
		self.q_iceBreaking.addEventListener("mouseover", over_q_iceBreaking);
		self.q_iceBreaking.addEventListener("mouseout", over_q_iceBreaking_out);
		self.q_active.addEventListener("mouseover", over_q_active);
		self.q_active.addEventListener("mouseout", over_q_active_out);
		self.q_romance.addEventListener("mouseover", over_q_romance);
		self.q_romance.addEventListener("mouseout", over_q_romance_out);
		
		function over_q_calm() {
			self.q_calm.gotoAndStop(1);
			self.q_info_calm.gotoAndStop(0);
			self.q_info_calm.visible = true;
		}
		
		function over_q_calm_out() {
			self.q_calm.gotoAndStop(0);
			self.q_info_calm.visible = false;
		}
		
		function over_q_iceBreaking() {
			self.q_iceBreaking.gotoAndStop(1);
			self.q_info_iceBreaking.gotoAndStop(1);
			self.q_info_iceBreaking.visible = true;
		}
		
		function over_q_iceBreaking_out() {
			self.q_iceBreaking.gotoAndStop(0);
			self.q_info_iceBreaking.visible = false;
		}
		
		function over_q_active() {
			self.q_active.gotoAndStop(1);
			self.q_info_active.gotoAndStop(2);
			self.q_info_active.visible = true;
		}
		
		function over_q_active_out() {
			self.q_active.gotoAndStop(0);
			self.q_info_active.visible = false;
		}
		
		function over_q_romance() {
			self.q_romance.gotoAndStop(1);
			self.q_info_romance.gotoAndStop(3);
			self.q_info_romance.visible = true;
		}
		
		function over_q_romance_out() {
			self.q_romance.gotoAndStop(0);
			self.q_info_romance.visible = false;
		}
		//---------------------------------------------------------------------
		
		
		//---------------------------- תפריטי סינון ---------------------------
		
		// --- בדיקת סטטוס כפתור על מנת להתאים פילטר ---
		var status = "none";
		
		function checked_status(status) {
			if (status == "calm") {
				stay_filter(self.btn_calm, calm_filter());
			}
			if (status == "iceBreaking") {
				stay_filter(self.btn_iceBreaking, iceBreaking_filter());
			}
			if (status == "active") {
				stay_filter(self.btn_active, active_filter());
			}
			if (status == "romance") {
				stay_filter(self.btn_romance, romance_filter());
			}
		
		
			if (status == "equipment") {
				stay_filter(self.btn2_equipment, equipment_filter());
			}
			if (status == "money") {
				stay_filter(self.btn2_money, money_filter());
			}
			if (status == "firstDate") {
				stay_filter(self.btn2_firstDate, firstDate_filter());
			}
			if (status == "closed") {
				stay_filter(self.btn2_closed, closed_filter());
			}
			if (status == "open") {
				stay_filter(self.btn2_open, open_filter());
			}
		}
		
		//-------------------------- תפריט ראשי --------------------------
		
		//----------------------- כפתור רגוע ----------------
		self.btn_calm.addEventListener("click", click_btn_calm);
		self.btn_calm.addEventListener("mouseover", mouseover_btn_calm);
		self.btn_calm.addEventListener("mouseout", mouseout_btn_calm);
		
		function calm_filter() {
			self.icon_escapeRoom.gotoAndStop(2);
			self.icon_escapeRoom.mouseEnabled = false;
			self.icon_horses.gotoAndStop(2);
			self.icon_horses.mouseEnabled = false;
			self.icon_wallClimb.gotoAndStop(2);
			self.icon_wallClimb.mouseEnabled = false;
			self.icon_iceSkate.gotoAndStop(2);
			self.icon_iceSkate.mouseEnabled = false;
			self.icon_bowling.gotoAndStop(2);
			self.icon_bowling.mouseEnabled = false;
			self.icon_cooking.gotoAndStop(2);
			self.icon_cooking.mouseEnabled = false;
			self.icon_show.gotoAndStop(2);
			self.icon_show.mouseEnabled = false;
		}
		
		function click_btn_calm() {
			status = "calm";
			counter++;
			checked_status(status);
		}
		
		function mouseover_btn_calm() {
			self.cursor = "pointer";
			self.btn_calm.gotoAndStop(1);
			self.txt_info.visible = true;
			calm_filter();
		}
		
		function mouseout_btn_calm() {
			self.cursor = "initial";
			self.btn_calm.gotoAndStop(0);
			self.txt_info.visible = false;
			clear_filters();
			stay_filter(self.btn_calm, calm_filter());
		}
		
		
		//------------------- כפתור שבירת קרח ----------------
		self.btn_iceBreaking.addEventListener("click", click_btn_iceBreaking);
		self.btn_iceBreaking.addEventListener("mouseover", mouseover_btn_iceBreaking);
		self.btn_iceBreaking.addEventListener("mouseout", mouseout_btn_iceBreaking);
		
		function iceBreaking_filter() {
			self.icon_pub.gotoAndStop(2);
			self.icon_pub.mouseEnabled = false;
			self.icon_park.gotoAndStop(2);
			self.icon_park.mouseEnabled = false;
			self.icon_escapeRoom.gotoAndStop(2);
			self.icon_escapeRoom.mouseEnabled = false;
			self.icon_horses.gotoAndStop(2);
			self.icon_horses.mouseEnabled = false;
			self.icon_wine.gotoAndStop(2);
			self.icon_wine.mouseEnabled = false;
			self.icon_wallClimb.gotoAndStop(2);
			self.icon_wallClimb.mouseEnabled = false;
			self.icon_cinema.gotoAndStop(2);
			self.icon_cinema.mouseEnabled = false;
			self.icon_iceSkate.gotoAndStop(2);
			self.icon_iceSkate.mouseEnabled = false;
			self.icon_restaurant.gotoAndStop(2);
			self.icon_restaurant.mouseEnabled = false;
			self.icon_house.gotoAndStop(2);
			self.icon_house.mouseEnabled = false;
			self.icon_sea.gotoAndStop(2);
			self.icon_sea.mouseEnabled = false;
		}
		
		function click_btn_iceBreaking() {
			status = "iceBreaking";
			counter++;
			checked_status(status);
		}
		
		function mouseover_btn_iceBreaking() {
			self.cursor = "pointer";
			self.btn_iceBreaking.gotoAndStop(1);
			self.txt_info.visible = true;
			iceBreaking_filter();
		}
		
		function mouseout_btn_iceBreaking() {
			self.cursor = "initial";
			self.btn_iceBreaking.gotoAndStop(0);
			self.txt_info.visible = false;
			clear_filters();
			stay_filter(self.btn_iceBreaking, iceBreaking_filter());
		}
		
		
		//------------------- כפתור פעיל ----------------
		self.btn_active.addEventListener("click", click_btn_active);
		self.btn_active.addEventListener("mouseover", mouseover_btn_active);
		self.btn_active.addEventListener("mouseout", mouseout_btn_active);
		
		function active_filter() {
			self.icon_pub.gotoAndStop(2);
			self.icon_pub.mouseEnabled = false;
			self.icon_park.gotoAndStop(2);
			self.icon_park.mouseEnabled = false;
			self.icon_wine.gotoAndStop(2);
			self.icon_wine.mouseEnabled = false;
			self.icon_cinema.gotoAndStop(2);
			self.icon_cinema.mouseEnabled = false;
			self.icon_restaurant.gotoAndStop(2);
			self.icon_restaurant.mouseEnabled = false;
			self.icon_house.gotoAndStop(2);
			self.icon_house.mouseEnabled = false;
			self.icon_cooking.gotoAndStop(2);
			self.icon_cooking.mouseEnabled = false;
			self.icon_show.gotoAndStop(2);
			self.icon_show.mouseEnabled = false;
			self.icon_sea.gotoAndStop(2);
			self.icon_sea.mouseEnabled = false;
		}
		
		function click_btn_active() {
			status = "active";
			counter++;
			checked_status(status);
		}
		
		function mouseover_btn_active() {
			self.cursor = "pointer";
			self.btn_active.gotoAndStop(1);
			self.txt_info.visible = true;
			active_filter();
		}
		
		function mouseout_btn_active() {
			self.cursor = "initial";
			self.btn_active.gotoAndStop(0);
			self.txt_info.visible = false;
			clear_filters();
			stay_filter(self.btn_active, active_filter());
		}
		
		
		//------------------ כפתור רומנטי ----------------
		self.btn_romance.addEventListener("click", click_btn_romance);
		self.btn_romance.addEventListener("mouseover", mouseover_btn_romance);
		self.btn_romance.addEventListener("mouseout", mouseout_btn_romance);
		
		function romance_filter() {
			self.icon_pub.gotoAndStop(2);
			self.icon_pub.mouseEnabled = false;
			self.icon_escapeRoom.gotoAndStop(2);
			self.icon_escapeRoom.mouseEnabled = false;
			self.icon_horses.gotoAndStop(2);
			self.icon_horses.mouseEnabled = false;
			self.icon_wallClimb.gotoAndStop(2);
			self.icon_wallClimb.mouseEnabled = false;
			self.icon_cinema.gotoAndStop(2);
			self.icon_cinema.mouseEnabled = false;
			self.icon_iceSkate.gotoAndStop(2);
			self.icon_iceSkate.mouseEnabled = false;
			self.icon_bowling.gotoAndStop(2);
			self.icon_bowling.mouseEnabled = false;
			self.icon_cooking.gotoAndStop(2);
			self.icon_cooking.mouseEnabled = false;
			self.icon_show.gotoAndStop(2);
			self.icon_show.mouseEnabled = false;
		}
		
		function click_btn_romance() {
			status = "romance";
			counter++;
			checked_status(status);
		}
		
		function mouseover_btn_romance() {
			self.cursor = "pointer";
			self.btn_romance.gotoAndStop(1);
			self.txt_info.visible = true;
			romance_filter();
		}
		
		function mouseout_btn_romance() {
			self.cursor = "initial";
			self.btn_romance.gotoAndStop(0);
			self.txt_info.visible = false;
			clear_filters();
			stay_filter(self.btn_romance, romance_filter());
		}
		
		
		//----------------------------- תפריט משני ----------------------------
		
		//------------------ כפתור ציוד ----------------
		self.btn2_equipment.addEventListener("click", click_btn2_equipment);
		self.btn2_equipment.addEventListener("mouseover", mouseover_btn2_equipment);
		self.btn2_equipment.addEventListener("mouseout", mouseout_btn2_equipment);
		
		function equipment_filter() {
			self.icon_pub.gotoAndStop(2);
			self.icon_pub.mouseEnabled = false;
			self.icon_escapeRoom.gotoAndStop(2);
			self.icon_escapeRoom.mouseEnabled = false;
			self.icon_wine.gotoAndStop(2);
			self.icon_wine.mouseEnabled = false;
			self.icon_cinema.gotoAndStop(2);
			self.icon_cinema.mouseEnabled = false;
			self.icon_restaurant.gotoAndStop(2);
			self.icon_restaurant.mouseEnabled = false;
			self.icon_cooking.gotoAndStop(2);
			self.icon_cooking.mouseEnabled = false;
		}
		
		function click_btn2_equipment() {
			status = "equipment";
			counter++;
			checked_status(status);
		}
		
		function mouseover_btn2_equipment() {
			self.cursor = "pointer";
			self.btn2_equipment.gotoAndStop(1);
			self.txt_info.visible = true;
			equipment_filter();
		}
		
		function mouseout_btn2_equipment() {
			self.cursor = "initial";
			self.btn2_equipment.gotoAndStop(0);
			self.txt_info.visible = false;
			clear_filters();
			stay_filter(self.btn2_equipment, equipment_filter());
		}
		
		
		//------------------ כפתור כסף ----------------
		self.btn2_money.addEventListener("click", click_btn2_money);
		self.btn2_money.addEventListener("mouseover", mouseover_btn2_money);
		self.btn2_money.addEventListener("mouseout", mouseout_btn2_money);
		
		function money_filter() {
			self.icon_house.gotoAndStop(2);
			self.icon_house.mouseEnabled = false;
			self.icon_sea.gotoAndStop(2);
			self.icon_sea.mouseEnabled = false;
		}
		
		function click_btn2_money() {
			status = "money";
			counter++;
			checked_status(status);
		}
		
		function mouseover_btn2_money() {
			self.cursor = "pointer";
			self.btn2_money.gotoAndStop(1);
			self.txt_info.visible = true;
			money_filter();
		}
		
		function mouseout_btn2_money() {
			self.cursor = "initial";
			self.btn2_money.gotoAndStop(0);
			self.txt_info.visible = false;
			clear_filters();
			stay_filter(self.btn2_money, money_filter());
		}
		
		
		//----------------- כפתור דייט ראשון ---------------
		self.btn2_firstDate.addEventListener("click", click_btn2_firstDate);
		self.btn2_firstDate.addEventListener("mouseover", mouseover_btn2_firstDate);
		self.btn2_firstDate.addEventListener("mouseout", mouseout_btn2_firstDate);
		
		function firstDate_filter() {
			self.icon_pub.gotoAndStop(2);
			self.icon_pub.mouseEnabled = false;
			self.icon_escapeRoom.gotoAndStop(2);
			self.icon_escapeRoom.mouseEnabled = false;
			self.icon_horses.gotoAndStop(2);
			self.icon_horses.mouseEnabled = false;
			self.icon_wine.gotoAndStop(2);
			self.icon_wine.mouseEnabled = false;
			self.icon_wallClimb.gotoAndStop(2);
			self.icon_wallClimb.mouseEnabled = false;
			self.icon_iceSkate.gotoAndStop(2);
			self.icon_iceSkate.mouseEnabled = false;
			self.icon_bowling.gotoAndStop(2);
			self.icon_bowling.mouseEnabled = false;
			self.icon_cooking.gotoAndStop(2);
			self.icon_cooking.mouseEnabled = false;
			self.icon_show.gotoAndStop(2);
			self.icon_show.mouseEnabled = false;
		}
		
		function click_btn2_firstDate() {
			status = "firstDate";
			counter++;
			checked_status(status);
		}
		
		function mouseover_btn2_firstDate() {
			self.cursor = "pointer";
			self.btn2_firstDate.gotoAndStop(1);
			self.txt_info.visible = true;
			firstDate_filter();
		}
		
		function mouseout_btn2_firstDate() {
			self.cursor = "initial";
			self.btn2_firstDate.gotoAndStop(0);
			self.txt_info.visible = false;
			clear_filters();
			stay_filter(self.btn2_firstDate, firstDate_filter());
		}
		
		
		//----------------- כפתור מקום סגור ---------------
		self.btn2_closed.addEventListener("click", click_btn2_closed);
		self.btn2_closed.addEventListener("mouseover", mouseover_btn2_closed);
		self.btn2_closed.addEventListener("mouseout", mouseout_btn2_closed);
		
		function closed_filter() {
			self.icon_park.gotoAndStop(2);
			self.icon_park.mouseEnabled = false;
			self.icon_horses.gotoAndStop(2);
			self.icon_horses.mouseEnabled = false;
			self.icon_sea.gotoAndStop(2);
			self.icon_sea.mouseEnabled = false;
		}
		
		function click_btn2_closed() {
			status = "closed";
			counter++;
			checked_status(status);
		}
		
		function mouseover_btn2_closed() {
			self.cursor = "pointer";
			self.btn2_closed.gotoAndStop(1);
			self.txt_info.visible = true;
			closed_filter();
		}
		
		function mouseout_btn2_closed() {
			self.cursor = "initial";
			self.btn2_closed.gotoAndStop(0);
			self.txt_info.visible = false;
			clear_filters();
			stay_filter(self.btn2_closed, closed_filter());
		}
		
		
		//----------------- כפתור מקום פתוח ---------------
		self.btn2_open.addEventListener("click", click_btn2_open);
		self.btn2_open.addEventListener("mouseover", mouseover_btn2_open);
		self.btn2_open.addEventListener("mouseout", mouseout_btn2_open);
		
		function open_filter() {
			self.icon_pub.gotoAndStop(2);
			self.icon_pub.mouseEnabled = false;
			self.icon_escapeRoom.gotoAndStop(2);
			self.icon_escapeRoom.mouseEnabled = false;
			self.icon_cinema.gotoAndStop(2);
			self.icon_cinema.mouseEnabled = false;
			self.icon_iceSkate.gotoAndStop(2);
			self.icon_iceSkate.mouseEnabled = false;
			self.icon_bowling.gotoAndStop(2);
			self.icon_bowling.mouseEnabled = false;
			self.icon_house.gotoAndStop(2);
			self.icon_house.mouseEnabled = false;
			self.icon_cooking.gotoAndStop(2);
			self.icon_cooking.mouseEnabled = false;
		}
		
		function click_btn2_open() {
			status = "open";
			counter++;
			checked_status(status);
		}
		
		function mouseover_btn2_open() {
			self.cursor = "pointer";
			self.btn2_open.gotoAndStop(1);
			self.txt_info.visible = true;
			open_filter();
		}
		
		function mouseout_btn2_open() {
			self.cursor = "initial";
			self.btn2_open.gotoAndStop(0);
			self.txt_info.visible = false;
			clear_filters();
			stay_filter(self.btn2_open, open_filter());
		}
		//---------------------------------------------------------------------
		
		
		//------------------------- אייקונים של מקומות ------------------------
		
		//-------------------- תפעול אירועי עכבר - פאב ------------------------
		
		//------------ אייקון ראשי ----------
		self.icon_pub.addEventListener("click", click_icon_pub);
		self.icon_pub.addEventListener("mouseover", mouseover_icon_pub);
		self.icon_pub.addEventListener("mouseout", mouseout_icon_pub);
		
		function click_icon_pub() {
			self.popup_main.gotoAndStop(0);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_pub() {
			self.cursor = "pointer";
			self.icon_pub.gotoAndStop(1);
			self.btn_calm.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
		}
		
		function mouseout_icon_pub() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.pub_closed_icon.addEventListener("mouseover", mouseover_pub_closed_icon);
		self.popup_main.pub_closed_icon.addEventListener("mouseout", mouseout_pub_closed_icon);
		
		function mouseover_pub_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_pub_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.pub_questions_BTN.addEventListener("mouseover", mouseover_pub_questions_BTN);
		self.popup_main.pub_questions_BTN.addEventListener("mouseout", mouseout_pub_questions_BTN);
		self.popup_main.pub_money_BTN.addEventListener("mouseover", mouseover_pub_money_BTN);
		self.popup_main.pub_money_BTN.addEventListener("mouseout", mouseout_pub_money_BTN);
		self.popup_main.pub_pictures_BTN.addEventListener("mouseover", mouseover_pub_pictures_BTN);
		self.popup_main.pub_pictures_BTN.addEventListener("mouseout", mouseout_pub_pictures_BTN);
		
		function mouseover_pub_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(0);
			self.popup_main.pub_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_pub_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.pub_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_pub_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(1);
			self.popup_main.pub_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_pub_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.pub_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_pub_pictures_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(2);
			self.popup_main.pub_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_pub_pictures_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.pub_pictures_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//-------------------- תפעול אירועי עכבר - פארק ------------------------
		
		//------------ אייקון ראשי ----------
		self.icon_park.addEventListener("click", click_icon_park);
		self.icon_park.addEventListener("mouseover", mouseover_icon_park);
		self.icon_park.addEventListener("mouseout", mouseout_icon_park);
		
		function click_icon_park() {
			self.popup_main.gotoAndStop(1);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_park() {
			self.cursor = "pointer";
			self.icon_park.gotoAndStop(1);
			self.btn_calm.gotoAndStop(1);
			self.btn_romance.gotoAndStop(1);
			self.btn2_firstDate.gotoAndStop(1);
			self.btn2_open.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_equipment.gotoAndStop(1);
		}
		
		function mouseout_icon_park() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.park_open_icon.addEventListener("mouseover", mouseover_park_open_icon);
		self.popup_main.park_open_icon.addEventListener("mouseout", mouseout_park_open_icon);
		self.popup_main.park_firstDate_icon.addEventListener("mouseover", mouseover_park_firstDate_icon);
		self.popup_main.park_firstDate_icon.addEventListener("mouseout", mouseout_park_firstDate_icon);
		
		function mouseover_park_open_icon() {
			self.mini_txt_right.gotoAndStop(0);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_park_open_icon() {
			self.mini_txt_right.visible = false;
		}
		
		function mouseover_park_firstDate_icon() {
			self.mini_txt_center.gotoAndStop(2);
			self.mini_txt_center.visible = true;
		}
		
		function mouseout_park_firstDate_icon() {
			self.mini_txt_center.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.park_questions_BTN.addEventListener("mouseover", mouseover_park_questions_BTN);
		self.popup_main.park_questions_BTN.addEventListener("mouseout", mouseout_park_questions_BTN);
		self.popup_main.park_money_BTN.addEventListener("mouseover", mouseover_park_money_BTN);
		self.popup_main.park_money_BTN.addEventListener("mouseout", mouseout_park_money_BTN);
		self.popup_main.park_pictures_BTN.addEventListener("mouseover", mouseover_park_pictures_BTN);
		self.popup_main.park_pictures_BTN.addEventListener("mouseout", mouseout_park_pictures_BTN);
		self.popup_main.park_equipment_BTN.addEventListener("mouseover", mouseover_park_equipment_BTN);
		self.popup_main.park_equipment_BTN.addEventListener("mouseout", mouseout_park_equipment_BTN);
		
		function mouseover_park_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(4);
			self.popup_main.park_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_park_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.park_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_park_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(5);
			self.popup_main.park_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_park_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.park_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_park_pictures_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(6);
			self.popup_main.park_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_park_pictures_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.park_pictures_BTN.gotoAndStop(0);
		}
		
		function mouseover_park_equipment_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(7);
			self.popup_main.park_equipment_BTN.gotoAndStop(1);
		}
		
		function mouseout_park_equipment_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.park_equipment_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//------------------ תפעול אירועי עכבר - חדר בריחה ---------------------
		
		//------------ אייקון ראשי ----------
		self.icon_escapeRoom.addEventListener("click", click_icon_escapeRoom);
		self.icon_escapeRoom.addEventListener("mouseover", mouseover_icon_escapeRoom);
		self.icon_escapeRoom.addEventListener("mouseout", mouseout_icon_escapeRoom);
		
		function click_icon_escapeRoom() {
			self.popup_main.gotoAndStop(2);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_escapeRoom() {
			self.cursor = "pointer";
			self.icon_escapeRoom.gotoAndStop(1);
			self.btn_active.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
		}
		
		function mouseout_icon_escapeRoom() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.escapeRoom_closed_icon.addEventListener("mouseover", mouseover_escapeRoom_closed_icon);
		self.popup_main.escapeRoom_closed_icon.addEventListener("mouseout", mouseout_escapeRoom_closed_icon);
		
		function mouseover_escapeRoom_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_escapeRoom_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.escapeRoom_questions_BTN.addEventListener("mouseover", mouseover_escapeRoom_questions_BTN);
		self.popup_main.escapeRoom_questions_BTN.addEventListener("mouseout", mouseout_escapeRoom_questions_BTN);
		self.popup_main.escapeRoom_money_BTN.addEventListener("mouseover", mouseover_escapeRoom_money_BTN);
		self.popup_main.escapeRoom_money_BTN.addEventListener("mouseout", mouseout_escapeRoom_money_BTN);
		self.popup_main.escapeRoom_pictures_BTN.addEventListener("mouseover", mouseover_escapeRoom_pictures_BTN);
		self.popup_main.escapeRoom_pictures_BTN.addEventListener("mouseout", mouseout_escapeRoom_pictures_BTN);
		
		function mouseover_escapeRoom_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(9);
			self.popup_main.escapeRoom_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_escapeRoom_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.escapeRoom_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_escapeRoom_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(10);
			self.popup_main.escapeRoom_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_escapeRoom_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.escapeRoom_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_escapeRoom_pictures_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(11);
			self.popup_main.escapeRoom_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_escapeRoom_pictures_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.escapeRoom_pictures_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//------------------ תפעול אירועי עכבר - חוות סוסים ---------------------
		
		//------------ אייקון ראשי ----------
		self.icon_horses.addEventListener("click", click_icon_horses);
		self.icon_horses.addEventListener("mouseover", mouseover_icon_horses);
		self.icon_horses.addEventListener("mouseout", mouseout_icon_horses);
		
		function click_icon_horses() {
			self.popup_main.gotoAndStop(3);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_horses() {
			self.cursor = "pointer";
			self.icon_horses.gotoAndStop(1);
			self.btn_active.gotoAndStop(1);
			self.btn2_equipment.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_open.gotoAndStop(1);
		}
		
		function mouseout_icon_horses() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.horses_open_icon.addEventListener("mouseover", mouseover_horses_open_icon);
		self.popup_main.horses_open_icon.addEventListener("mouseout", mouseout_horses_open_icon);
		
		function mouseover_horses_open_icon() {
			self.mini_txt_right.gotoAndStop(0);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_horses_open_icon() {
			self.mini_txt_right.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.horses_questions_BTN.addEventListener("mouseover", mouseover_horses_questions_BTN);
		self.popup_main.horses_questions_BTN.addEventListener("mouseout", mouseout_horses_questions_BTN);
		self.popup_main.horses_money_BTN.addEventListener("mouseover", mouseover_horses_money_BTN);
		self.popup_main.horses_money_BTN.addEventListener("mouseout", mouseout_horses_money_BTN);
		self.popup_main.horses_pictures_BTN.addEventListener("mouseover", mouseover_horses_pictures_BTN);
		self.popup_main.horses_pictures_BTN.addEventListener("mouseout", mouseout_horses_pictures_BTN);
		self.popup_main.horses_equipment_BTN.addEventListener("mouseover", mouseover_horses_equipment_BTN);
		self.popup_main.horses_equipment_BTN.addEventListener("mouseout", mouseout_horses_equipment_BTN);
		
		function mouseover_horses_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(13);
			self.popup_main.horses_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_horses_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.horses_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_horses_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(14);
			self.popup_main.horses_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_horses_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.horses_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_horses_pictures_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(15);
			self.popup_main.horses_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_horses_pictures_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.horses_pictures_BTN.gotoAndStop(0);
		}
		
		function mouseover_horses_equipment_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(16);
			self.popup_main.horses_equipment_BTN.gotoAndStop(1);
		}
		
		function mouseout_horses_equipment_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.horses_equipment_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//------------------ תפעול אירועי עכבר - סיור ביקב ---------------------
		
		//------------ אייקון ראשי ----------
		self.icon_wine.addEventListener("click", click_icon_wine);
		self.icon_wine.addEventListener("mouseover", mouseover_icon_wine);
		self.icon_wine.addEventListener("mouseout", mouseout_icon_wine);
		
		function click_icon_wine() {
			self.popup_main.gotoAndStop(4);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_wine() {
			self.cursor = "pointer";
			self.icon_wine.gotoAndStop(1);
			self.btn_calm.gotoAndStop(1);
			self.btn_romance.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
			self.btn2_open.gotoAndStop(1);
		}
		
		function mouseout_icon_wine() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.wine_closed_icon.addEventListener("mouseover", mouseover_wine_closed_icon);
		self.popup_main.wine_closed_icon.addEventListener("mouseout", mouseout_wine_closed_icon);
		self.popup_main.wine_open_icon.addEventListener("mouseover", mouseover_wine_open_icon);
		self.popup_main.wine_open_icon.addEventListener("mouseout", mouseout_wine_open_icon);
		
		function mouseover_wine_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_wine_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		function mouseover_wine_open_icon() {
			self.mini_txt_center.gotoAndStop(0);
			self.mini_txt_center.visible = true;
		}
		
		function mouseout_wine_open_icon() {
			self.mini_txt_center.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.wine_questions_BTN.addEventListener("mouseover", mouseover_wine_questions_BTN);
		self.popup_main.wine_questions_BTN.addEventListener("mouseout", mouseout_wine_questions_BTN);
		self.popup_main.wine_money_BTN.addEventListener("mouseover", mouseover_wine_money_BTN);
		self.popup_main.wine_money_BTN.addEventListener("mouseout", mouseout_wine_money_BTN);
		self.popup_main.wine_pictures_BTN.addEventListener("mouseover", mouseover_wine_pictures_BTN);
		self.popup_main.wine_pictures_BTN.addEventListener("mouseout", mouseout_wine_pictures_BTN);
		
		function mouseover_wine_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(18);
			self.popup_main.wine_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_wine_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.wine_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_wine_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(19);
			self.popup_main.wine_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_wine_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.wine_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_wine_pictures_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(20);
			self.popup_main.wine_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_wine_pictures_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.wine_pictures_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//------------------ תפעול אירועי עכבר - קיר טיפוס ---------------------
		
		//------------ אייקון ראשי ----------
		self.icon_wallClimb.addEventListener("click", click_icon_wallClimb);
		self.icon_wallClimb.addEventListener("mouseover", mouseover_icon_wallClimb);
		self.icon_wallClimb.addEventListener("mouseout", mouseout_icon_wallClimb);
		
		function click_icon_wallClimb() {
			self.popup_main.gotoAndStop(5);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_wallClimb() {
			self.cursor = "pointer";
			self.icon_wallClimb.gotoAndStop(1);
			self.btn_active.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
			self.btn2_open.gotoAndStop(1);
		}
		
		function mouseout_icon_wallClimb() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.wallClimb_closed_icon.addEventListener("mouseover", mouseover_wallClimb_closed_icon);
		self.popup_main.wallClimb_closed_icon.addEventListener("mouseout", mouseout_wallClimb_closed_icon);
		self.popup_main.wallClimb_open_icon.addEventListener("mouseover", mouseover_wallClimb_open_icon);
		self.popup_main.wallClimb_open_icon.addEventListener("mouseout", mouseout_wallClimb_open_icon);
		
		function mouseover_wallClimb_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_wallClimb_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		function mouseover_wallClimb_open_icon() {
			self.mini_txt_center.gotoAndStop(0);
			self.mini_txt_center.visible = true;
		}
		
		function mouseout_wallClimb_open_icon() {
			self.mini_txt_center.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.wallClimb_questions_BTN.addEventListener("mouseover", mouseover_wallClimb_questions_BTN);
		self.popup_main.wallClimb_questions_BTN.addEventListener("mouseout", mouseout_wallClimb_questions_BTN);
		self.popup_main.wallClimb_money_BTN.addEventListener("mouseover", mouseover_wallClimb_money_BTN);
		self.popup_main.wallClimb_money_BTN.addEventListener("mouseout", mouseout_wallClimb_money_BTN);
		self.popup_main.wallClimb_pictures_BTN.addEventListener("mouseover", mouseover_wallClimb_pictures_BTN);
		self.popup_main.wallClimb_pictures_BTN.addEventListener("mouseout", mouseout_wallClimb_pictures_BTN);
		self.popup_main.wallClimb_equipment_BTN.addEventListener("mouseover", mouseover_wallClimb_equipment_BTN);
		self.popup_main.wallClimb_equipment_BTN.addEventListener("mouseout", mouseout_wallClimb_equipment_BTN);
		
		function mouseover_wallClimb_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(22);
			self.popup_main.wallClimb_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_wallClimb_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.wallClimb_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_wallClimb_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(23);
			self.popup_main.wallClimb_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_wallClimb_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.wallClimb_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_wallClimb_pictures_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(24);
			self.popup_main.wallClimb_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_wallClimb_pictures_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.wallClimb_pictures_BTN.gotoAndStop(0);
		}
		
		function mouseover_wallClimb_equipment_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(25);
			self.popup_main.wallClimb_equipment_BTN.gotoAndStop(1);
		}
		
		function mouseout_wallClimb_equipment_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.wallClimb_equipment_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//------------------ תפעול אירועי עכבר - קולנוע ---------------------
		
		//------------ אייקון ראשי ----------
		self.icon_cinema.addEventListener("click", click_icon_cinema);
		self.icon_cinema.addEventListener("mouseover", mouseover_icon_cinema);
		self.icon_cinema.addEventListener("mouseout", mouseout_icon_cinema);
		
		function click_icon_cinema() {
			self.popup_main.gotoAndStop(6);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_cinema() {
			self.cursor = "pointer";
			self.icon_cinema.gotoAndStop(1);
			self.btn_calm.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_firstDate.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
		}
		
		function mouseout_icon_cinema() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.cinema_closed_icon.addEventListener("mouseover", mouseover_cinema_closed_icon);
		self.popup_main.cinema_closed_icon.addEventListener("mouseout", mouseout_cinema_closed_icon);
		self.popup_main.cinema_firstDate_icon.addEventListener("mouseover", mouseover_cinema_firstDate_icon);
		self.popup_main.cinema_firstDate_icon.addEventListener("mouseout", mouseout_cinema_firstDate_icon);
		
		function mouseover_cinema_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_cinema_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		function mouseover_cinema_firstDate_icon() {
			self.mini_txt_center.gotoAndStop(2);
			self.mini_txt_center.visible = true;
		}
		
		function mouseout_cinema_firstDate_icon() {
			self.mini_txt_center.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.cinema_questions_BTN.addEventListener("mouseover", mouseover_cinema_questions_BTN);
		self.popup_main.cinema_questions_BTN.addEventListener("mouseout", mouseout_cinema_questions_BTN);
		self.popup_main.cinema_money_BTN.addEventListener("mouseover", mouseover_cinema_money_BTN);
		self.popup_main.cinema_money_BTN.addEventListener("mouseout", mouseout_cinema_money_BTN);
		self.popup_main.cinema_pictures_BTN.addEventListener("mouseover", mouseover_cinema_pictures_BTN);
		self.popup_main.cinema_pictures_BTN.addEventListener("mouseout", mouseout_cinema_pictures_BTN);
		
		function mouseover_cinema_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(27);
			self.popup_main.cinema_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_cinema_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.cinema_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_cinema_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(28);
			self.popup_main.cinema_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_cinema_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.cinema_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_cinema_pictures_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(29);
			self.popup_main.cinema_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_cinema_pictures_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.cinema_pictures_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//------------------ תפעול אירועי עכבר - החלקה על קרח ---------------------
		
		//------------ אייקון ראשי ----------
		self.icon_iceSkate.addEventListener("click", click_icon_iceSkate);
		self.icon_iceSkate.addEventListener("mouseover", mouseover_icon_iceSkate);
		self.icon_iceSkate.addEventListener("mouseout", mouseout_icon_iceSkate);
		
		function click_icon_iceSkate() {
			self.popup_main.gotoAndStop(7);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_iceSkate() {
			self.cursor = "pointer";
			self.icon_iceSkate.gotoAndStop(1);
			self.btn_active.gotoAndStop(1);
			self.btn2_equipment.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
		}
		
		function mouseout_icon_iceSkate() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.iceSkate_closed_icon.addEventListener("mouseover", mouseover_iceSkate_closed_icon);
		self.popup_main.iceSkate_closed_icon.addEventListener("mouseout", mouseout_iceSkate_closed_icon);
		
		function mouseover_iceSkate_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_iceSkate_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.iceSkate_questions_BTN.addEventListener("mouseover", mouseover_iceSkate_questions_BTN);
		self.popup_main.iceSkate_questions_BTN.addEventListener("mouseout", mouseout_iceSkate_questions_BTN);
		self.popup_main.iceSkate_money_BTN.addEventListener("mouseover", mouseover_iceSkate_money_BTN);
		self.popup_main.iceSkate_money_BTN.addEventListener("mouseout", mouseout_iceSkate_money_BTN);
		self.popup_main.iceSkate_pictures_BTN.addEventListener("mouseover", mouseover_iceSkate_pictures_BTN);
		self.popup_main.iceSkate_pictures_BTN.addEventListener("mouseout", mouseout_iceSkate_pictures_BTN);
		self.popup_main.iceSkate_equipment_BTN.addEventListener("mouseover", mouseover_iceSkate_equipment_BTN);
		self.popup_main.iceSkate_equipment_BTN.addEventListener("mouseout", mouseout_iceSkate_equipment_BTN);
		
		function mouseover_iceSkate_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(31);
			self.popup_main.iceSkate_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_iceSkate_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.iceSkate_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_iceSkate_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(32);
			self.popup_main.iceSkate_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_iceSkate_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.iceSkate_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_iceSkate_pictures_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(33);
			self.popup_main.iceSkate_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_iceSkate_pictures_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.iceSkate_pictures_BTN.gotoAndStop(0);
		}
		
		function mouseover_iceSkate_equipment_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(34);
			self.popup_main.iceSkate_equipment_BTN.gotoAndStop(1);
		}
		
		function mouseout_iceSkate_equipment_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.iceSkate_equipment_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//------------------ תפעול אירועי עכבר - באולינג ---------------------
		
		//------------ אייקון ראשי ----------
		self.icon_bowling.addEventListener("click", click_icon_bowling);
		self.icon_bowling.addEventListener("mouseover", mouseover_icon_bowling);
		self.icon_bowling.addEventListener("mouseout", mouseout_icon_bowling);
		
		function click_icon_bowling() {
			self.popup_main.gotoAndStop(8);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_bowling() {
			self.cursor = "pointer";
			self.icon_bowling.gotoAndStop(1);
			self.btn_iceBreaking.gotoAndStop(1);
			self.btn_active.gotoAndStop(1);
			self.btn2_equipment.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
		}
		
		function mouseout_icon_bowling() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.bowling_closed_icon.addEventListener("mouseover", mouseover_bowling_closed_icon);
		self.popup_main.bowling_closed_icon.addEventListener("mouseout", mouseout_bowling_closed_icon);
		
		function mouseover_bowling_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_bowling_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.bowling_money_BTN.addEventListener("mouseover", mouseover_bowling_money_BTN);
		self.popup_main.bowling_money_BTN.addEventListener("mouseout", mouseout_bowling_money_BTN);
		self.popup_main.bowling_pictures_BTN.addEventListener("mouseover", mouseover_bowling_pictures_BTN);
		self.popup_main.bowling_pictures_BTN.addEventListener("mouseout", mouseout_bowling_pictures_BTN);
		self.popup_main.bowling_equipment_BTN.addEventListener("mouseover", mouseover_bowling_equipment_BTN);
		self.popup_main.bowling_equipment_BTN.addEventListener("mouseout", mouseout_bowling_equipment_BTN);
		
		function mouseover_bowling_money_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(36);
			self.popup_main.bowling_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_bowling_money_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.bowling_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_bowling_pictures_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(37);
			self.popup_main.bowling_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_bowling_pictures_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.bowling_pictures_BTN.gotoAndStop(0);
		}
		
		function mouseover_bowling_equipment_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(38);
			self.popup_main.bowling_equipment_BTN.gotoAndStop(1);
		}
		
		function mouseout_bowling_equipment_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.bowling_equipment_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//------------------ תפעול אירועי עכבר - מסעדה ---------------------
		
		//------------ אייקון ראשי ----------
		self.icon_restaurant.addEventListener("click", click_icon_restaurant);
		self.icon_restaurant.addEventListener("mouseover", mouseover_icon_restaurant);
		self.icon_restaurant.addEventListener("mouseout", mouseout_icon_restaurant);
		
		function click_icon_restaurant() {
			self.popup_main.gotoAndStop(9);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_restaurant() {
			self.cursor = "pointer";
			self.icon_restaurant.gotoAndStop(1);
			self.btn_calm.gotoAndStop(1);
			self.btn_romance.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_firstDate.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
			self.btn2_open.gotoAndStop(1);
		}
		
		function mouseout_icon_restaurant() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.restaurant_closed_icon.addEventListener("mouseover", mouseover_restaurant_closed_icon);
		self.popup_main.restaurant_closed_icon.addEventListener("mouseout", mouseout_restaurant_closed_icon);
		self.popup_main.restaurant_open_icon.addEventListener("mouseover", mouseover_restaurant_open_icon);
		self.popup_main.restaurant_open_icon.addEventListener("mouseout", mouseout_restaurant_open_icon);
		self.popup_main.restaurant_firstDate_icon.addEventListener("mouseover", mouseover_restaurant_firstDate_icon);
		self.popup_main.restaurant_firstDate_icon.addEventListener("mouseout", mouseout_restaurant_firstDate_icon);
		
		function mouseover_restaurant_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_restaurant_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		function mouseover_restaurant_open_icon() {
			self.mini_txt_center.gotoAndStop(0);
			self.mini_txt_center.visible = true;
		}
		
		function mouseout_restaurant_open_icon() {
			self.mini_txt_center.visible = false;
		}
		
		function mouseover_restaurant_firstDate_icon() {
			self.mini_txt_left.gotoAndStop(2);
			self.mini_txt_left.visible = true;
		}
		
		function mouseout_restaurant_firstDate_icon() {
			self.mini_txt_left.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.restaurant_questions_BTN.addEventListener("mouseover", mouseover_restaurant_questions_BTN);
		self.popup_main.restaurant_questions_BTN.addEventListener("mouseout", mouseout_restaurant_questions_BTN);
		self.popup_main.restaurant_money_BTN.addEventListener("mouseover", mouseover_restaurant_money_BTN);
		self.popup_main.restaurant_money_BTN.addEventListener("mouseout", mouseout_restaurant_money_BTN);
		self.popup_main.restaurant_pictures_BTN.addEventListener("mouseover", mouseover_restaurant_pictures_BTN);
		self.popup_main.restaurant_pictures_BTN.addEventListener("mouseout", mouseout_restaurant_pictures_BTN);
		
		function mouseover_restaurant_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(40);
			self.popup_main.restaurant_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_restaurant_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.restaurant_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_restaurant_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(41);
			self.popup_main.restaurant_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_restaurant_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.restaurant_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_restaurant_pictures_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(42);
			self.popup_main.restaurant_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_restaurant_pictures_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.restaurant_pictures_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//------------------ תפעול אירועי עכבר - בית ---------------------
		
		//------------ אייקון ראשי ----------
		self.icon_house.addEventListener("click", click_icon_house);
		self.icon_house.addEventListener("mouseover", mouseover_icon_house);
		self.icon_house.addEventListener("mouseout", mouseout_icon_house);
		
		function click_icon_house() {
			self.popup_main.gotoAndStop(10);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_house() {
			self.cursor = "pointer";
			self.icon_house.gotoAndStop(1);
			self.btn_calm.gotoAndStop(1);
			self.btn_romance.gotoAndStop(1);
			self.btn2_equipment.gotoAndStop(1);
			self.btn2_firstDate.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
		}
		
		function mouseout_icon_house() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.house_closed_icon.addEventListener("mouseover", mouseover_house_closed_icon);
		self.popup_main.house_closed_icon.addEventListener("mouseout", mouseout_house_closed_icon);
		self.popup_main.house_firstDate_icon.addEventListener("mouseover", mouseover_house_firstDate_icon);
		self.popup_main.house_firstDate_icon.addEventListener("mouseout", mouseout_house_firstDate_icon);
		
		function mouseover_house_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_house_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		function mouseover_house_firstDate_icon() {
			self.mini_txt_center.gotoAndStop(2);
			self.mini_txt_center.visible = true;
		}
		
		function mouseout_house_firstDate_icon() {
			self.mini_txt_center.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.house_questions_BTN.addEventListener("mouseover", mouseover_house_questions_BTN);
		self.popup_main.house_questions_BTN.addEventListener("mouseout", mouseout_house_questions_BTN);
		self.popup_main.house_pictures_BTN.addEventListener("mouseover", mouseover_house_pictures_BTN);
		self.popup_main.house_pictures_BTN.addEventListener("mouseout", mouseout_house_pictures_BTN);
		self.popup_main.house_equipment_BTN.addEventListener("mouseover", mouseover_house_equipment_BTN);
		self.popup_main.house_equipment_BTN.addEventListener("mouseout", mouseout_house_equipment_BTN);
		
		function mouseover_house_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(44);
			self.popup_main.house_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_house_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.house_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_house_pictures_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(45);
			self.popup_main.house_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_house_pictures_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.house_pictures_BTN.gotoAndStop(0);
		}
		
		function mouseover_house_equipment_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(46);
			self.popup_main.house_equipment_BTN.gotoAndStop(1);
		}
		
		function mouseout_house_equipment_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.house_equipment_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//------------------ תפעול אירועי עכבר - סדנת בישול --------------------
		
		//------------ אייקון ראשי ----------
		self.icon_cooking.addEventListener("click", click_icon_cooking);
		self.icon_cooking.addEventListener("mouseover", mouseover_icon_cooking);
		self.icon_cooking.addEventListener("mouseout", mouseout_icon_cooking);
		
		function click_icon_cooking() {
			self.popup_main.gotoAndStop(11);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_cooking() {
			self.cursor = "pointer";
			self.icon_cooking.gotoAndStop(1);
			self.btn_iceBreaking.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
		}
		
		function mouseout_icon_cooking() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.cooking_closed_icon.addEventListener("mouseover", mouseover_cooking_closed_icon);
		self.popup_main.cooking_closed_icon.addEventListener("mouseout", mouseout_cooking_closed_icon);
		
		function mouseover_cooking_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_cooking_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.cooking_questions_BTN.addEventListener("mouseover", mouseover_cooking_questions_BTN);
		self.popup_main.cooking_questions_BTN.addEventListener("mouseout", mouseout_cooking_questions_BTN);
		self.popup_main.cooking_money_BTN.addEventListener("mouseover", mouseover_cooking_money_BTN);
		self.popup_main.cooking_money_BTN.addEventListener("mouseout", mouseout_cooking_money_BTN);
		self.popup_main.cooking_pictures_BTN.addEventListener("mouseover", mouseover_cooking_pictures_BTN);
		self.popup_main.cooking_pictures_BTN.addEventListener("mouseout", mouseout_cooking_pictures_BTN);
		
		function mouseover_cooking_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(48);
			self.popup_main.cooking_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_cooking_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.cooking_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_cooking_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(49);
			self.popup_main.cooking_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_cooking_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.cooking_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_cooking_pictures_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(50);
			self.popup_main.cooking_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_cooking_pictures_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.cooking_pictures_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//----------------- תפעול אירועי עכבר - הופעה של אומן ------------------
		
		//------------ אייקון ראשי ----------
		self.icon_show.addEventListener("click", click_icon_show);
		self.icon_show.addEventListener("mouseover", mouseover_icon_show);
		self.icon_show.addEventListener("mouseout", mouseout_icon_show);
		
		function click_icon_show() {
			self.popup_main.gotoAndStop(12);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_show() {
			self.cursor = "pointer";
			self.icon_show.gotoAndStop(1);
			self.btn_iceBreaking.gotoAndStop(1);
			self.btn2_equipment.gotoAndStop(1);
			self.btn2_money.gotoAndStop(1);
			self.btn2_closed.gotoAndStop(1);
			self.btn2_open.gotoAndStop(1);
		}
		
		function mouseout_icon_show() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.show_closed_icon.addEventListener("mouseover", mouseover_show_closed_icon);
		self.popup_main.show_closed_icon.addEventListener("mouseout", mouseout_show_closed_icon);
		self.popup_main.show_open_icon.addEventListener("mouseover", mouseover_show_open_icon);
		self.popup_main.show_open_icon.addEventListener("mouseout", mouseout_show_open_icon);
		
		
		function mouseover_show_closed_icon() {
			self.mini_txt_right.gotoAndStop(1);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_show_closed_icon() {
			self.mini_txt_right.visible = false;
		}
		
		function mouseover_show_open_icon() {
			self.mini_txt_center.gotoAndStop(0);
			self.mini_txt_center.visible = true;
		}
		
		function mouseout_show_open_icon() {
			self.mini_txt_center.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.show_questions_BTN.addEventListener("mouseover", mouseover_show_questions_BTN);
		self.popup_main.show_questions_BTN.addEventListener("mouseout", mouseout_show_questions_BTN);
		self.popup_main.show_money_BTN.addEventListener("mouseover", mouseover_show_money_BTN);
		self.popup_main.show_money_BTN.addEventListener("mouseout", mouseout_show_money_BTN);
		self.popup_main.show_pictures_BTN.addEventListener("mouseover", mouseover_show_pictures_BTN);
		self.popup_main.show_pictures_BTN.addEventListener("mouseout", mouseout_show_pictures_BTN);
		self.popup_main.show_equipment_BTN.addEventListener("mouseover", mouseover_show_equipment_BTN);
		self.popup_main.show_equipment_BTN.addEventListener("mouseout", mouseout_show_equipment_BTN);
		
		function mouseover_show_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(52);
			self.popup_main.show_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_show_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.show_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_show_money_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(53);
			self.popup_main.show_money_BTN.gotoAndStop(1);
		}
		
		function mouseout_show_money_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.show_money_BTN.gotoAndStop(0);
		}
		
		function mouseover_show_pictures_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(54);
			self.popup_main.show_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_show_pictures_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.show_pictures_BTN.gotoAndStop(0);
		}
		
		function mouseover_show_equipment_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(55);
			self.popup_main.show_equipment_BTN.gotoAndStop(1);
		}
		
		function mouseout_show_equipment_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.show_equipment_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		
		//----------------- תפעול אירועי עכבר - ים ------------------
		
		//------------ אייקון ראשי ----------
		self.icon_sea.addEventListener("click", click_icon_sea);
		self.icon_sea.addEventListener("mouseover", mouseover_icon_sea);
		self.icon_sea.addEventListener("mouseout", mouseout_icon_sea);
		
		function click_icon_sea() {
			self.popup_main.gotoAndStop(13);
			self.popup_main.visible = true;
			enabled(false);
			click = "clicked";
		}
		
		function mouseover_icon_sea() {
			self.cursor = "pointer";
			self.icon_sea.gotoAndStop(1);
			self.btn_calm.gotoAndStop(1);
			self.btn_romance.gotoAndStop(1);
			self.btn2_equipment.gotoAndStop(1);
			self.btn2_firstDate.gotoAndStop(1);
			self.btn2_open.gotoAndStop(1);
		}
		
		function mouseout_icon_sea() {
			self.cursor = "initial";
			clear_filters();
			checked_status(status);
		}
		
		
		//-------- אייקונים קטנים למעלה ---------
		self.popup_main.sea_open_icon.addEventListener("mouseover", mouseover_sea_open_icon);
		self.popup_main.sea_open_icon.addEventListener("mouseout", mouseout_sea_open_icon);
		self.popup_main.sea_firstDate_icon.addEventListener("mouseover", mouseover_sea_firstDate_icon);
		self.popup_main.sea_firstDate_icon.addEventListener("mouseout", mouseout_sea_firstDate_icon);
		
		function mouseover_sea_open_icon() {
			self.mini_txt_right.gotoAndStop(0);
			self.mini_txt_right.visible = true;
		}
		
		function mouseout_sea_open_icon() {
			self.mini_txt_right.visible = false;
		}
		
		function mouseover_sea_firstDate_icon() {
			self.mini_txt_center.gotoAndStop(2);
			self.mini_txt_center.visible = true;
		}
		
		function mouseout_sea_firstDate_icon() {
			self.mini_txt_center.visible = false;
		}
		
		
		//---------- כפתורים פנימיים -----------
		self.popup_main.sea_questions_BTN.addEventListener("mouseover", mouseover_sea_questions_BTN);
		self.popup_main.sea_questions_BTN.addEventListener("mouseout", mouseout_sea_questions_BTN);
		self.popup_main.sea_pictures_BTN.addEventListener("mouseover", mouseover_sea_pictures_BTN);
		self.popup_main.sea_pictures_BTN.addEventListener("mouseout", mouseout_sea_pictures_BTN);
		self.popup_main.sea_equipment_BTN.addEventListener("mouseover", mouseover_sea_equipment_BTN);
		self.popup_main.sea_equipment_BTN.addEventListener("mouseout", mouseout_sea_equipment_BTN);
		
		function mouseover_sea_questions_BTN() {
			self.mini_popup_left.visible = true;
			self.mini_popup_left.gotoAndStop(57);
			self.popup_main.sea_questions_BTN.gotoAndStop(1);
		}
		
		function mouseout_sea_questions_BTN() {
			self.mini_popup_left.visible = false;
			self.popup_main.sea_questions_BTN.gotoAndStop(0);
		}
		
		function mouseover_sea_pictures_BTN() {
			self.mini_popup_center.visible = true;
			self.mini_popup_center.gotoAndStop(58);
			self.popup_main.sea_pictures_BTN.gotoAndStop(1);
		}
		
		function mouseout_sea_pictures_BTN() {
			self.mini_popup_center.visible = false;
			self.popup_main.sea_pictures_BTN.gotoAndStop(0);
		}
		
		function mouseover_sea_equipment_BTN() {
			self.mini_popup_right.visible = true;
			self.mini_popup_right.gotoAndStop(59);
			self.popup_main.sea_equipment_BTN.gotoAndStop(1);
		}
		
		function mouseout_sea_equipment_BTN() {
			self.mini_popup_right.visible = false;
			self.popup_main.sea_equipment_BTN.gotoAndStop(0);
		}
		//----------------------------------------------------------------------
		
		// -------------------------- סוף הקוד !!!! ----------------------------
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// link_telem
	this.link_telem = new lib.link_telem();
	this.link_telem.name = "link_telem";
	this.link_telem.setTransform(510.15,555.5,0.5066,0.5066,0,0,0,207.8,22.7);

	this.timeline.addTween(cjs.Tween.get(this.link_telem).wait(1));

	// mini_txt
	this.mini_txt_left = new lib.mini_txt();
	this.mini_txt_left.name = "mini_txt_left";
	this.mini_txt_left.setTransform(781.5,282,0.524,0.524,0,0,0,0.4,0.4);

	this.mini_txt_center = new lib.mini_txt();
	this.mini_txt_center.name = "mini_txt_center";
	this.mini_txt_center.setTransform(837.8,282,0.524,0.524,0,0,0,0.4,0.4);

	this.mini_txt_right = new lib.mini_txt();
	this.mini_txt_right.name = "mini_txt_right";
	this.mini_txt_right.setTransform(889.7,282,0.524,0.524,0,0,0,0.4,0.4);

	this.restaurant_closed_txt = new cjs.Text("מקום סגור", "28px 'Rounded Mplus 1c Medium'");
	this.restaurant_closed_txt.name = "restaurant_closed_txt";
	this.restaurant_closed_txt.textAlign = "center";
	this.restaurant_closed_txt.lineHeight = 41;
	this.restaurant_closed_txt.lineWidth = 149;
	this.restaurant_closed_txt.parent = this;
	this.restaurant_closed_txt.setTransform(727.7,-319.3);

	this.restaurant_open_txt = new cjs.Text("מקום פתוח", "28px 'Rounded Mplus 1c Medium'");
	this.restaurant_open_txt.name = "restaurant_open_txt";
	this.restaurant_open_txt.textAlign = "center";
	this.restaurant_open_txt.lineHeight = 41;
	this.restaurant_open_txt.lineWidth = 149;
	this.restaurant_open_txt.parent = this;
	this.restaurant_open_txt.setTransform(626.35,-321.6);

	this.restaurant_firstDate_txt = new cjs.Text("דייט ראשון", "28px 'Rounded Mplus 1c Medium'");
	this.restaurant_firstDate_txt.name = "restaurant_firstDate_txt";
	this.restaurant_firstDate_txt.textAlign = "center";
	this.restaurant_firstDate_txt.lineHeight = 41;
	this.restaurant_firstDate_txt.lineWidth = 149;
	this.restaurant_firstDate_txt.parent = this;
	this.restaurant_firstDate_txt.setTransform(519.75,-321.6);

	this.mini_txt_left_1 = new lib.mini_txt();
	this.mini_txt_left_1.name = "mini_txt_left_1";
	this.mini_txt_left_1.setTransform(519.75,-298.65);

	this.mini_txt_center_1 = new lib.mini_txt();
	this.mini_txt_center_1.name = "mini_txt_center_1";
	this.mini_txt_center_1.setTransform(626.35,-298.65);

	this.mini_txt_right_1 = new lib.mini_txt();
	this.mini_txt_right_1.name = "mini_txt_right_1";
	this.mini_txt_right_1.setTransform(727.7,-298.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mini_txt_right_1},{t:this.mini_txt_center_1},{t:this.mini_txt_left_1},{t:this.restaurant_firstDate_txt},{t:this.restaurant_open_txt},{t:this.restaurant_closed_txt},{t:this.mini_txt_right},{t:this.mini_txt_center},{t:this.mini_txt_left}]}).wait(1));

	// mini_popup
	this.mini_popup_left = new lib.mini_popup();
	this.mini_popup_left.name = "mini_popup_left";
	this.mini_popup_left.setTransform(583.45,602.1,0.4036,0.4036,0,0,0,513.4,178.4);

	this.mini_popup_center = new lib.mini_popup();
	this.mini_popup_center.name = "mini_popup_center";
	this.mini_popup_center.setTransform(732.65,602.1,0.4036,0.4036,0,0,0,513.4,178.4);

	this.mini_popup_right = new lib.mini_popup();
	this.mini_popup_right.name = "mini_popup_right";
	this.mini_popup_right.setTransform(892.7,602.1,0.4036,0.4036,0,0,0,513.4,178.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mini_popup_right},{t:this.mini_popup_center},{t:this.mini_popup_left}]}).wait(1));

	// q_info
	this.q_info_romance = new lib.info_questionMark();
	this.q_info_romance.name = "q_info_romance";
	this.q_info_romance.setTransform(980.4,515.9,0.233,0.233);

	this.q_info_active = new lib.info_questionMark();
	this.q_info_active.name = "q_info_active";
	this.q_info_active.setTransform(947.85,430.15,0.233,0.233);

	this.q_info_iceBreaking = new lib.info_questionMark();
	this.q_info_iceBreaking.name = "q_info_iceBreaking";
	this.q_info_iceBreaking.setTransform(926.15,344.55,0.233,0.233);

	this.q_info_calm = new lib.info_questionMark();
	this.q_info_calm.name = "q_info_calm";
	this.q_info_calm.setTransform(899.8,258.85,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q_info_calm},{t:this.q_info_iceBreaking},{t:this.q_info_active},{t:this.q_info_romance}]}).wait(1));

	// popup
	this.popup_main = new lib.popup();
	this.popup_main.name = "popup_main";
	this.popup_main.setTransform(507.1,437.5,0.5255,0.5255,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.popup_main).wait(1));

	// bottons
	this.q_romance = new lib.icon_questionMark();
	this.q_romance.name = "q_romance";
	this.q_romance.setTransform(1060.9,557.85,0.1106,0.1106);

	this.btn_romance = new lib.btn_romance();
	this.btn_romance.name = "btn_romance";
	this.btn_romance.setTransform(1153.25,538.05,0.756,0.756,0,0,0,0.1,0.1);

	this.q_iceBreaking = new lib.icon_questionMark();
	this.q_iceBreaking.name = "q_iceBreaking";
	this.q_iceBreaking.setTransform(1060.9,386.65,0.1106,0.1106);

	this.btn_iceBreaking = new lib.btn_iceBreaking();
	this.btn_iceBreaking.name = "btn_iceBreaking";
	this.btn_iceBreaking.setTransform(1152.7,365.4,0.7597,0.7597,0,0,0,0,0.2);

	this.q_calm = new lib.icon_questionMark();
	this.q_calm.name = "q_calm";
	this.q_calm.setTransform(1060.9,301.05,0.1106,0.1106);

	this.btn_calm = new lib.btn_calm();
	this.btn_calm.name = "btn_calm";
	this.btn_calm.setTransform(1152.25,279,0.759,0.759,0,0,0,0,0.1);

	this.q_active = new lib.icon_questionMark();
	this.q_active.name = "q_active";
	this.q_active.setTransform(1060.9,472.25,0.1106,0.1106);

	this.btn_active = new lib.btn_active();
	this.btn_active.name = "btn_active";
	this.btn_active.setTransform(1151.9,451.75,0.7551,0.7551,0,0,0,0.1,0.2);

	this.btn2_open = new lib.btn_open();
	this.btn2_open.name = "btn2_open";
	this.btn2_open.setTransform(100.2,124.6,0.793,0.89,0,0,0,0.3,-0.1);

	this.btn2_closed = new lib.btn_closed();
	this.btn2_closed.name = "btn2_closed";
	this.btn2_closed.setTransform(274.15,125.35,0.793,0.89,0,0,0,0.5,-0.2);

	this.btn2_firstDate = new lib.btn_firstDate();
	this.btn2_firstDate.name = "btn2_firstDate";
	this.btn2_firstDate.setTransform(449.3,124.6,0.793,0.89,0,0,0,0.3,-0.1);

	this.btn2_money = new lib.btn_money();
	this.btn2_money.name = "btn2_money";
	this.btn2_money.setTransform(623.3,124.6,0.793,0.89,0,0,0,2.2,-0.1);

	this.btn2_equipment = new lib.btn_equipment();
	this.btn2_equipment.name = "btn2_equipment";
	this.btn2_equipment.setTransform(797.8,124.45,0.793,0.89,0,0,0,1.2,-0.3);

	this.btn_about = new lib.btn_about();
	this.btn_about.name = "btn_about";
	this.btn_about.setTransform(63.3,37.1,0.7667,0.7899);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_about},{t:this.btn2_equipment},{t:this.btn2_money},{t:this.btn2_firstDate},{t:this.btn2_closed},{t:this.btn2_open},{t:this.btn_active},{t:this.q_active},{t:this.btn_calm},{t:this.q_calm},{t:this.btn_iceBreaking},{t:this.q_iceBreaking},{t:this.btn_romance},{t:this.q_romance}]}).wait(1));

	// text
	this.txt_info = new lib.txt_info();
	this.txt_info.name = "txt_info";
	this.txt_info.setTransform(1267,671.5,1,1,0,0,0,113.4,37);

	this.text = new cjs.Text("לחץ על המקום כדי לגלות מידע נוסף", "normal 600 28px 'Rubik'", "#020100");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 486;
	this.text.alpha = 0.90196078;
	this.text.parent = this;
	this.text.setTransform(521.45,199);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.text_1 = new cjs.Text("בחר את\nסוג הדייט", "normal 300 30px 'Rubik'", "#020100");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 115;
	this.text_1.alpha = 0.90196078;
	this.text_1.parent = this;
	this.text_1.setTransform(1154.2,162.4702,1,0.8576);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("סינון נוסף", "normal 300 28px 'Rubik'", "#020100");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 35;
	this.text_2.lineWidth = 142;
	this.text_2.alpha = 0.90196078;
	this.text_2.parent = this;
	this.text_2.setTransform(953.85,108.15);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("...גלו מהו המקום האידיאלי בשבילכם", "normal 700 60px 'Rubik'", "#020100");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 75;
	this.text_3.lineWidth = 934;
	this.text_3.alpha = 0.90196078;
	this.text_3.parent = this;
	this.text_3.setTransform(639.9918,14.45,1.0375,1.0365);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_3);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAvOADLIASALEAkfgDUQHKgBCmGgEgvfABkQD9l8IFBY");
	this.shape.setTransform(518.3,234);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EAt8AAoIA3gaIBBgfIgCAfIgIBlgEgvzgByIA4AaIBAAfIhuBKg");
	this.shape_1.setTransform(514.7,252.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.txt_info}]}).wait(1));

	// icons
	this.icon_wine = new lib.wine();
	this.icon_wine.name = "icon_wine";
	this.icon_wine.setTransform(102.8,285.65,0.3122,0.3122,0,0,0,0,230.7);

	this.icon_wallClimb = new lib.wallClimb();
	this.icon_wallClimb.name = "icon_wallClimb";
	this.icon_wallClimb.setTransform(859.2,459.05,0.3039,0.3039,0,0,0,0,226.6);

	this.icon_show = new lib.show();
	this.icon_show.name = "icon_show";
	this.icon_show.setTransform(281.4,607.1,0.3102,0.3102,0,0,0,0.1,231.5);

	this.icon_sea = new lib.sea();
	this.icon_sea.name = "icon_sea";
	this.icon_sea.setTransform(106.8,634.45,0.2974,0.2974,0,0,0,0,225.7);

	this.icon_restaurant = new lib.restaurant();
	this.icon_restaurant.name = "icon_restaurant";
	this.icon_restaurant.setTransform(920.55,631.75,0.3035,0.3035,0,0,0,0,226.7);

	this.icon_pub = new lib.pub();
	this.icon_pub.name = "icon_pub";
	this.icon_pub.setTransform(925.95,294.6,0.3055,0.3055,0,0,0,0,225.6);

	this.icon_park = new lib.park();
	this.icon_park.name = "icon_park";
	this.icon_park.setTransform(720.4,343.45,0.3056,0.3056,0,0,0,0,232.3);

	this.icon_iceSkate = new lib.iceSkate();
	this.icon_iceSkate.name = "icon_iceSkate";
	this.icon_iceSkate.setTransform(416.4,504.55,0.3048,0.3048,0,0,0,0,240.5);

	this.icon_house = new lib.house();
	this.icon_house.name = "icon_house";
	this.icon_house.setTransform(753.3,611.2,0.2994,0.2994,0,0,0,0,228.6);

	this.icon_horses = new lib.horses();
	this.icon_horses.name = "icon_horses";
	this.icon_horses.setTransform(296.1,339.4,0.2986,0.2986,0,0,0,0,228.2);

	this.icon_escapeRoom = new lib.escapeRoom();
	this.icon_escapeRoom.name = "icon_escapeRoom";
	this.icon_escapeRoom.setTransform(498.7,335.35,0.3086,0.3086,0,0,0,0,227);

	this.icon_cooking = new lib.cooking();
	this.icon_cooking.name = "icon_cooking";
	this.icon_cooking.setTransform(536.05,633.6,0.3004,0.3004,0,0,0,0,226.4);

	this.icon_cinema = new lib.cinema();
	this.icon_cinema.name = "icon_cinema";
	this.icon_cinema.setTransform(620.35,487.1,0.3067,0.3067,0,0,0,0,226.3);

	this.icon_bowling = new lib.bowling();
	this.icon_bowling.name = "icon_bowling";
	this.icon_bowling.setTransform(153.05,454.7,0.2981,0.2981,0,0,0,0,225.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon_bowling},{t:this.icon_cinema},{t:this.icon_cooking},{t:this.icon_escapeRoom},{t:this.icon_horses},{t:this.icon_house},{t:this.icon_iceSkate},{t:this.icon_park},{t:this.icon_pub},{t:this.icon_restaurant},{t:this.icon_sea},{t:this.icon_show},{t:this.icon_wallClimb},{t:this.icon_wine}]}).wait(1));

	// background
	this.instance = new lib.bg_orange();
	this.instance.setTransform(506.4,444.1,0.9787,1.0944,0,0,0,515.2,249.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(642.2,36.4,615.5999999999999,680.2);
// library properties:
lib.properties = {
	id: 'EA2EF86637400243B71E0905B3CBA2D6',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/TheIdealPlace_atlas_1.png?1633516185464", id:"TheIdealPlace_atlas_1"}
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
an.compositions['EA2EF86637400243B71E0905B3CBA2D6'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;