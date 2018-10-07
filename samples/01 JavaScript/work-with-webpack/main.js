var doSomething = require("./helpers").doSomething;

function log(message) {
    console.log("main> " + message);
}

function run() {
    log("run");
}

run();
doSomething();
