const s = 'baabaa';

// 푸는중
// 조건식 찾기
function solution(s) {
    let arr = [...s];
    let count = 0;
    while(count !== 20) {
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] === arr[i+1]) {
                arr.splice(i + 1, 1);
                arr.splice(i, 1);
                compare = arr.length;
            }
        }
        count++;
    }
    return arr.length === 0 ? 1 : 0;
}

console.log(solution(s));