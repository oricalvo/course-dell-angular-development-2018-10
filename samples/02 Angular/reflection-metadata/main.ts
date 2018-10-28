abstract class IMyService {
    abstract doSomething();
}

abstract class IMyService2 {
    abstract doSomething2();
}

class Impl implements IMyService, IMyService2 {
    doSomething() {
    }

    doSomething2() {
    }
}


function MyClassDecorator() {
    return function(target) {
        return target;
    }
}

function MyFunctionDecorator() {
    return function(target, methodName) {
        return target;
    }
}

class B {
}

@MyClassDecorator()
class A {
    constructor(xxx: B) {
    }

    @MyFunctionDecorator()
    doSomething(yyy: B) {
    }
}

