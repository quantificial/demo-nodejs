const EventEmitter = require('events').EventEmitter;

class Test extends EventEmitter {
  
    constructor() {
        super();
        setInterval(()=> {
            this.emit('newprice',{price: Math.random() * 100});
        },3000)
    }
}

const test = new Test;

test.addListener('newprice', (e) => {
    console.log("new price:", e )
})


class Apple {

    emit;

    constructor() {
        this.emit = new EventEmitter();
        this.emit.addListener('newprice', e => {
            console.log("new price in Apple:", e)
        })
    }
}

const apple = new Apple();
apple.emit.addListener("newprice",(e)=> {
    console.log("another listen:", e);
});


apple.emit.emit("newprice", "ok");