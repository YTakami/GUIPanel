// KPR Script file
exports.heart = function(){
	var heart = [
		[0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
		[0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0],
		[0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
		[0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],
		[0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
		[0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0],
		[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]
	];
	return heart;
}
exports.uist = function(){
	trace(1);
	var Matrix = require("index");
	trace(Matrix);
	var m = new Matrix();
	m.writeString("UIST");
	m.breakLine();
	m.putSpace();
	m.writeString("2014");
	m.printBitmap();
	return m.getBitmap();
}