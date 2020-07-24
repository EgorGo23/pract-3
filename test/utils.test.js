;var utilTests = (function getUtilTests(testUtils) {
    if (typeof testUtils === 'undefined') {
        return console.error('Подключите библиотеку testUtils');
    }

    
    var num = 12;
    var bool = true;
    var str = '123';
    var nul = null;
    var undef = undefined;
    var obj = {a: 1, b: '2'};
    var sym = Symbol('name');
    var nan = NaN;
    var f = function() {};

    var displayTest = function displayTest(func) {
        if (typeof func === 'undefined') {
            return console.error('Передайте функцию для тестирования');
        }

        return [
            console.log('Arg is Number', func(num)),
            console.log('Arg is Undefined', func(undef)),
            console.log('Arg is Boolean', func(bool)),
            console.log('Arg is String', func(str)),
            console.log('Arg is Null', func(nul)),
            console.log('Arg is Obj', func(obj)),
            console.log('Arg is Symbol', func(sym)),
            console.log('Arg is NaN', func(nan)),
            console.log('Arg is empty', func()),
            console.log('Arg is function', func(f)),
        ];
    }

    var isString = function isString() {
        console.log('__Test isString__');
        displayTest(testUtils.isString);
    };

    var isNumber = function isNumber() {
        console.log('__Test isNumber__');
        displayTest(testUtils.isNumber);
    };

    var isNan = function isNan() {
        console.log('__Test isNan__');
        displayTest(testUtils.isNan);
    };

    var isBool = function isBool() {
        console.log('__Test isBool__');
        displayTest(testUtils.isBool);
    };

    var isNull = function isNull() {
        console.log('__Test isNull__');
        displayTest(testUtils.isNull);
    };

    var isUndef = function isUndef() {
        console.log('__Test isUndef__');
        displayTest(testUtils.isUndef);
    };

    var isSymb = function isSymb() {
        console.log('__Test isSymb__');
        displayTest(testUtils.isSymb);
    };

    var isObj = function isObj() {
        console.log('__Test isObj__');
        displayTest(testUtils.isObj);
    };

    var isFunc = function isFunc() {
        console.log('__Test isFunc__');
        displayTest(testUtils.isFunc);
    }

    var toNumber = function toNumber() {
        console.log('__Test toNumber__');
        displayTest(testUtils.toNumber);
    };

    var toStr = function toStr() {
        console.log('__Test toStr__');
        displayTest(testUtils.toStr);
    };

    var toBool = function toBool() {
        console.log('__Test toBool__');
        displayTest(testUtils.toBool);
    };

    var toObj = function toObj() {
        console.log('__Test toObj__');
        displayTest(testUtils.toObj);
    };

    var startAllTests = function startAllTests() {
        isString();
        isNumber();
        isNan();
        isBool();
        isNull();
        isUndef();
        isSymb();
        isObj();
        isFunc();
        toNumber();
        toStr();
        toBool();
        toObj();
    }

    return {
        isString: isString,
        isNumber: isNumber,
        isNan: isNan,
        isBool: isBool,
        isNull: isNull,
        isUndef: isUndef,
        isSymb: isSymb,
        isObj: isObj,
        toNumber: toNumber,
        toStr: toStr,
        toBool: toBool,
        toObj: toObj,
        isFunc: isFunc,
        startAllTests: startAllTests,
    }
})(utils);