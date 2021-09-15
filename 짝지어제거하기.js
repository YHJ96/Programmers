const s = 'baabaa';

// 푸는중
// 테스트케이스 실패
function solution(s) {
    let arr = [...s];
    let count = [...arr].length;
    do {
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] === arr[i+1]) {
                arr.splice(i + 1, 1);
                arr.splice(i, 1);
            }
        }
        count = arr.length;
    }
    while(arr.length !== count) {
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] === arr[i+1]) {
                arr.splice(i + 1, 1);
                arr.splice(i, 1);
            }
        }
    }
    return arr.length === 0 ? 1 : 0;
}

console.log(solution(s)); 