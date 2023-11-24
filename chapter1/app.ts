//any와 unknown의 차이
let userInput: unknown; 
let userName: string;

userInput = 5;
userInput = 'Max';
if (userInput === 'string') {
    userName = userInput;
}

//never : script를 멈춤, 반환값 X
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // while (true) {}
}

const result = generateError("An error occured!", 500);
console.log(result);
//generateError('An error occured!', 500);