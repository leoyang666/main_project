var mongoose=require('mongoose');


// 建立Schema（数据表）
// 
module.exports=function () {
	var db=mongoose.connect('mongodb://127.0.0.1:27017/test');
var DataSchema=new mongoose.Schema({
	name:{type:String},
	content:{type:String},
	time:{type:String,default:Date.now}
});
	mongoose.model('data',DataSchema);
	return db;
}

