const s = 'baabaa';

// 푸는중
// 테스트케이스 실패
function solution(s) {
    let count = 0;
    let arr = [...s];
    while(count !== arr.length) {
        count = arr.length;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                arr.splice(i + 1, 1);
                arr.splice(i, 1);
            }
        }
    }
    return arr.length === 0 ? 1 : 0;
}

console.log(solution(s)); 