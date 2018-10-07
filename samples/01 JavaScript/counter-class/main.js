function Counter() {
    let num = 0;

    function inc() {
        ++num;
    }

    function dec() {
        --num;
    }

    function get() {
        return num;
    }

    function print() {
        console.log(num);
    }

    return {
        inc,
        dec,
        get,
        print,
    };
}

const c1 = Counter();
const c2 = Counter();

console.log(c1.inc == c2.inc);

function Tag() {
}

const t1 = new Tag();
t1.c1 = c1;
t1.c2 = c2;

// function CounterEx() {
//     const base = Counter();
//
//     const derived = Object.create(base);
//
//     derived.inc = function() {
//     }
// }



