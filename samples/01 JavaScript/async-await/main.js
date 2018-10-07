run();

async function run() {
    try {
        console.log("before");

        await Promise.all([
            delay(2000),
            delay(1000)
        ]);

        console.log("after");
    }
    catch(err) {
        console.log(err);
    }
}

function delay(ms) {
    console.log("Wait " + ms);

    return new Promise((resolve,reject)=> {
        setTimeout(function() {
            resolve();
        }, ms);
    });
}


