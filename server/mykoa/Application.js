let http = require('http');

let response=require("./response")
let request=require("./request")
let context=require("./context")

class Application{
    // constructor(){
    //     this.callbackFunc;
    //     this.request = Object.create(this.request);
    //     this.response =  Object.create(this.response)
    // }

    // listen(port){
    //     let server = http.createServer(this.callback());
    //     server.listen(port, ()=>{
    //         console.log('listening on'+port)
    //     });
    // }

    // use(fn){
    //     this.callbackFunc = fn;
    // }

    // callback(){
    //     return (req, res) =>{
    //         let request = Object.create(this.request);
    //         let response = Object.create(this.response);
    //         console.log(request);
    //         //console.log(response);
    //         //this.callbackFunc(req, res);
    //     }
    // }

    constructor(){
        this.callBackFunc = [];
        this.context = Object.create(context);
        this.request=Object.create(request);
        this.response=Object.create(response);
    }

    createContext(req, res){
        let ctx = Object.create(this.context);
        let request=Object.create(this.request);
        let response=Object.create(this.response);

        ctx.request = request;
        ctx.response = response;
        ctx.request.req = ctx.req = req;
        ctx.response.res = ctx.res = res;
        return ctx;
    }

    // handleRequest(req,res){
    //     let ctx = this.createContext(req, res);
    //     console.log(ctx.headers);

    //     ctx.body = "text";
    //     res.end(ctx.body);
    // }

    use(fn){
        this.callBackFunc.push(fn);
        return this;
    } 

    compose(ctx, middilwares){
        async function dispatch(index){
            console.log(index);
            if(index===middilwares.length) return;

            let fn = middilwares[index];
            return await fn(ctx, ()=>dispatch(index+1));
        }
        return dispatch(0);
    }

    // compose(ctx,middlewares){
    //     async function dispatch(index){
    //         console.log(index)
    //         if(index===middlewares.length) return;
    //         let fn=middlewares[index]
    //         return await fn(ctx,()=>dispatch(index+1));
    //     }
    //     return dispatch(0)
    // }

    callback(){
        return (req, res)=>{
            // let ctx = this.createContext(req, res);
            // ctx.body = "text";
            // res.end(ctx.body);
            // let ctx = this.createContext(req, res);
            // console.log(ctx);
            // res.end(ctx.body);
            // this.callBackFunc(m=>{
            //     m(ctx);
            // });
            let ctx = this.createContext(req, res);
            this.compose(ctx, this.callBackFunc).then(()=>{
                res.end(ctx.body);
            }).catch(err =>{
                console.log(err)
            })
            // this.callBackFunc.forEach(m=>{
            //     m(ctx);
            // });
            // res.end(ctx.body);
        }
    }

    listen(...args){
        // 起一个服务
        //let server = http.createServer(this.handleRequest.bind(this));
        let server = http.createServer(this.callback());
        server.listen(...args);
    }
}

module.exports = Application;