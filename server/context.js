let context = {}

function access(target, property){
    Object.defineProperty(context, property, {
        get(){
            return this[target][property];
        },
        set(value){
            this[target][property] = value;
        }
    })
}


function getter(target, property){
    Object.defineProperty(context, property, {
        get(){
            return this[target][property];
        }
    })
}

getter('request', 'headers');
access('response', 'body');

module.exports = context;