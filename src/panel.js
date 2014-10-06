var ts = require("test");
var te = new Style("bold 10px", "blue");
//font="bold 18px" color="white" align="center,middle"
var tl = new Label(null, null, te, "Effects"); 
var stride = 16;
var black  =new Skin("black");
var normal = new Skin("white");
var mainc;
var bitmap = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
// KPR Script file
var ResetPanel = function () {
}
ResetPanel.prototype = Object.create(Object.prototype, {
	//to use onTouchBegan, container must be active = true
	onTouchBegan: {
		value: function(p) {
			//remove what was added the first
			p.container.remove(p.container.first);
			//add = update(redraw) on all others
			//it will be added in the last
			p.container.add(mainc);
			trace(1);
		}
	}
});

var Panel = function () {
}
Panel.prototype = Object.create(Object.prototype, {
	onTouchBegan: {
		value: function(p) {
			var x = p.variant%stride;
			var y = Math.floor(p.variant/stride);
			//ts.write();
			if(bitmap[y][x] == 0) {
				p.skin = black;
				bitmap[y][x] = 1;
			}
			else {
				p.skin = normal;
				bitmap[y][x] = 0;
			}
		}
	},
	onTimeChanged: {
		value: function(p){
			var x = p.variant%stride;
			var y = Math.floor(p.variant/stride);
			if(bitmap[y][x] == 1){
				p.skin = new Skin("black");
			}else{
				p.skin = new Skin("white");
			}
		}
	},
});
var Preset = function(name){
	this.name = name;
}
Preset.prototype = Object.create(Object.prototype, {
	name: { value: "heart", writable: true },
	onTouchBegan: {
		value: function(p) {
			if(p.name = "heart") bitmap = ts.heart();
		}
	},
});
var build = function(container) {
	container.skin = new Skin("blue");
	
	var lx = 15;
	var ly = 15;
	
	mainc = new Container({left:0,top:0, width:320,height:240 });
	
	for(i=0;i<stride;i++){
		for(j=0;j<stride-2;j++){
			var p = new Content({left:i*lx + 10,top:j*ly + 15, width:lx,height:ly },new Skin("white"));
			p.behavior = new Panel();
			p.active = true;
			p.variant = i + j*stride;
			//container.add(p);
			mainc.add(p);
			p.start();
		}
	}
	container.add(mainc);
	var heart = ts.heart();
	for(var i=0;i<stride;i++){
		for(var j=0;j<stride-2;j++){
			var p = new Content({left:i*2 + 253,top:j*2 + 15, width:2,height:2 },new Skin("white"));
			if(heart[j][i]>0) p.skin = new Skin("black");
			p.behavior = new Preset("heart");
			p.active = true;
			p.variant = i + j*stride;
			container.add(p);
			//p.start();
		}
	}
	var start = new Container({left:260,top:195, width:60,height:30 },new Skin("gray"));
	start.behavior = new ResetPanel();
	start.active = true;
	var te = new Style("bold 20px", "white");
	var label = new Label(null, null, te, "start");
	start.add(label);
	container.add(start);
}

application.behavior = {
	onAdapt: function(application) {
		application.empty();
		build(application);
	},
	onLaunch: function(application) {
		build(application);
	},
}
