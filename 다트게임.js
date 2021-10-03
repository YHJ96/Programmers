const s = '1D#2S*3S';

console.log(solution(s));

// 해결중
function solution(s) {
    const arr = [];
    const result = [];
    let answer = [];
    let flag = '';
    for(let x of s) {
        if(x === 'S' || x === 'D' || x === 'T') {
            arr.push(flag + x);
            flag = '';
        } else if( x === '*' || x === '#') {
            arr.push(x);
        } else flag += x;
    }
    for(let x of arr) {
        if(x.includes('S')) result.push(Number(x.split('S')[0])); 
        else if(x.includes('D')) result.push(Number(x.split('D')[0]) ** 2);
        else if(x.includes('T')) result.push(Number(x.split('T')[0]) ** 3);
        else result.push(x);
    }
    const resultStar = result.filter((item) => item !== '#');
    console.log(resultStar);
    for(let i = 0; i < resultStar.length; i++) {
        let count = 0;
        for(let j = i; j !== 0; j--) {
            if(count === 2) break;
            if(typeof resultStar[j] === 'number' && resultStar[i] === '*') {
                count += 1;
                resultStar[j] = resultStar[j] * 2;
            };
        }
    }
    return resultStar;
}