const x = 11;

function solution(x) {
    let newNum = `${x}`;
    newNum = [...newNum];
    newNum = newNum.map((item) => parseInt(item));
    newNum = newNum.reduce((acc, curr) => acc + curr);
    if(x % newNum === 0) {
        return true;
    } else return false;
}

console.log(solution(x));