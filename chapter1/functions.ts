function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

function printUndefined(num: number): undefined {
    console.log('Result: ' + num);
    return;
}

let combinevalues: (a: number, b: number) => number;

combinevalues = add;
//컴파일시 오류가 발생하지 않지만 런타임에서 오류 발생
//combinevalues = 5;
//컴파일 오류
//combinevalues = printResult;

printResult(add(5, 12));
printResult(combinevalues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});