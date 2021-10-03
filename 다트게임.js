const s = '1D#2S*3S';

console.log(solution(s));

function solution(s) {
    const arr = [];
    let flag = '';
    for(let x of s) {
        if(x === 'S' || x === 'D' || x === 'T') {
            arr.push(flag + x);
            flag = '';
        } else if( x === '*' || x === '#') {
            arr.push(x);
        } else flag += x;
    }
    return arr;
}