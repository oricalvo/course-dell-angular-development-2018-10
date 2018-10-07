import {doSomething} from "./helpers";

function log(message) {
    console.log("main> " + message);
}

function run() {
    log("run");
}

run();
doSomething();
