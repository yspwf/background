// function add(a, b){
//     return a+b;
// }
// console.log(add(1,3));

// function add(a, b, callback){
//     callback(a+b);
// }

// console.log("before");
// add(2,3, result => {console.log("resule :  "+result)});
// console.log("after");



// let http = require('http');

// let server = http.createServer((req, res)=>{
//     res.writeHead(200);
//     res.end("hello node");
// });

// server.listen(3000, ()=>{
//     console.log('listening on 3000')
// });


let App = require('./Application.js');

let app = new App();

app.use(ctx => {
    // console.log("55555555555555");
    // // res.writeHead(200);
    // // res.end('hello world');
    ctx.body = "ppppppppp";
});

app.listen(5000);