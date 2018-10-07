"use strict";

function Counter() {
    this.num = 0;

    setTimeout(function() {
        console.log(this);
        // this.print();
    }, 1000);
}

Counter.prototype.inc = function() {
    ++this.num;
}

Counter.prototype.dec = function() {
    --this.num;
}

Counter.prototype.get = function() {
    return this.num;
}

Counter.prototype.print = function() {
    console.log(this.num);
}

for(var i=0; i<100; i++) {
    new Counter();
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.inc == c2.inc);

