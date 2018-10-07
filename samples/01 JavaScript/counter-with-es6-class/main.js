"use strict";

class Counter {
    constructor() {
        // const that = this;

        this.num = 0;

        setTimeout(() => {
            console.log(this);
        }, 1000);

        // setTimeout(function() {
        //     console.log(that);
        // }, 1000);

        // setTimeout((function () {
        //     console.log(this);
        //     // this.print();
        // }).bind(this), 1000);
    }

    inc() {
        ++this.num;
    }

    dec() {
        --this.num;
    }

    get() {
        return this.num;
    }

    print() {
        console.log(this.num);
    }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.inc == c2.inc);

