const mongoose = require('./mongoose.js');
const  Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    title: {
        type: String,
        default: ''
    },
    intro: {
        type: String,
        default: ''
    },
    author:{
        type: String,
        default: ''
    },
    category:{
        type: String,
        default:''
    },
    tag:{
        type: String,
        default:  ''
    },
    content:{
        type: String,
        default: ''
    },
    views:{
        type: Number,
        default: 0
    },
    show:{
        type: Boolean,
        default: true
    },
    logintime:{
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Article', ArticleSchema);