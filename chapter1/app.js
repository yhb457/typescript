//any와 unknown의 차이
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occured!", 500);
console.log(result);
//generateError('An error occured!', 500);
