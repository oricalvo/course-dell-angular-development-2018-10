var myGlobalData = [];

function log(message) {
    console.log("helpers> " + message);
}

function doSomething() {
    log("doSomething");
}

exports.doSomething = doSomething;
