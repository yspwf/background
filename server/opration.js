const Article = require('./articleSchema.js');

// const save = async function(){
//     return new Promise((resolve, reject)=>{
//         resolve('43534534534');
//     });
// }

// module.exports = {save};

module.exports = {
    save: async (data)=>{
        return new Promise((resolve, reject)=>{
           //var article = new Article({ title:'标题', intro:'简介', author:'哈哈', category:'1,4', tag:'4,6', content:'文章内容' });
           var article = new Article(data);
           article.save(function(err, res){
               if(err){
                   reject(err);
               }else{
                   resolve(res);
               }
           });
        });
    },
    del:async (where)=>{
        return new Promise((resolve, reject)=>{
            Article.remove();
        });
    },
    update:async (where)=>{
        return new Promise((resolve, reject)=>{

        });
    },
    find: async (where)=>{
        return new Promise((resolve, reject)=>{
            
        });
    }
}


// function insert() {
//     //const data = { title:'标题', intro:'简介', author:'哈哈', category:'1,4', tag:'4,6', content:'文章内容' };
//     var user = new Article({ title:'标题', intro:'简介', author:'哈哈', category:'1,4', tag:'4,6', content:'文章内容' });

//     user.save(function (err, res) {

//         if (err) {
//             console.log("Error:" + err);
//         }
//         else {
//             console.log("Res:" + res);
//         }

//     });
// }

// insert();