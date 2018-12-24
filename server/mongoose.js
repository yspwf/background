const mongoose = require('mongoose');

//const url = "mongodb://localhost:27017/test";
const url = "mongodb://127.0.0.1/blog";
mongoose.connect(url);

mongoose.connection.on('error', ()=>{
    console.log('链接失败');
});

mongoose.connection.on('connected', ()=>{
    console.log('链接成功！');
})

mongoose.connection.on('disconnected', function(){
    console.log('Monngose connection 断开');
});


module.exports = mongoose;

// const userSchema = {
//     name:{type: String},
//     age: {type: Number},
//     sex: {type: String},
//     logintime: {type: Date, default: Date()}
// }

// var user = mongoose.model("User", userSchema);

// var users = new user({
//     name:'小明',
//     age: 23,
//     sex: "男"
// });




// users.save(function(err, res){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//     }
// });

