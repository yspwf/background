const Koa = require('koa');
const app = new Koa();
const port = 8080;

const KoaRouter = require('koa-router');
const router = new KoaRouter();

// const KoaBodyparser = require('koa-bodyparser');
// app.use(KoaBodyparser());
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


const operation = require('./opration.js');

router.post("/", async (ctx, next) => {
    let data = { title, intro, author, category, tag, content } = ctx.request.body;
    let res = await operation.save(data);
    console.log(res);
});

router.get("/", async(ctx, next) => {
    ctx.body = "get";
});

app.use(router.routes()).use(router.allowedMethods());



// app.use(async ctx => {
//     ctx.body ="koa";
// });

app.listen(port,()=>{
    console.log("server is tart port: "+ port);
});