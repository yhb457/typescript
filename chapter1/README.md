
함수 매개변수에 타입을 할당
자바스크립트가 실행될 때 변화를 줄 수 없음
브라우저 내부적으로 타입스크립트를 지원하지 않음

function add(n1, n2) {
    return n1 + n2;   
}

const number1 = '5';
const number2 = 2.8;

const result = add(number1, number2);
console.log(result)


function add(n1: number, n2: number) {
    return n1 + n2;   
}

const number1 = '5';
const number2 = 2.8;

const result = add(number1, number2);
console.log(result)

자바스크립트의 경우 런타임에 에러코드를 띄우는 방식

function add(n1: number, n2: number) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input!);
    }
    return n1 + n2;
}

타입 추론
타입을 확인하고 잘못 사용하면 알려줌

let number1: number;
number1 = 5;
let resultPhrase = 'Result is: ';
resultPhrase = 0;

자동으로 추론된 객체 타입

const person: object = {
    name: 'Yu',
    age: 27,
    nickname: 'Ben' 
};

console.log(person.nickname);

객체의 각 부분에 타입 할당

const person: {
    name: string;
    age: number;
} = {
    name: 'Yu',
    age: 27
};