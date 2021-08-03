const phone_number = "01055555555";

function solution(phone_number) {
    let newNumber = [...phone_number];
    newNumber = newNumber.splice(newNumber.length-4, newNumber.length);
    let answer = [];
    for(let i = 0; i < phone_number.length - 4; i++) {
        answer.push('*');
    }
    answer = answer.concat(newNumber).reduce((acc, curr) => acc + curr);
    return answer;
}

console.log(solution(phone_number));