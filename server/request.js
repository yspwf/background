let url = require('url');

module.exports = {

    get url(){
        return this.req.url;
    },
    get headers(){
        return this.req.headers;
    }

    // get query(){
    //     return url.parse(this.req.url, true).query;
    // }
}