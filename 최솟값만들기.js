function solution(A,B) {
    // 최솟값을 만드는 방법은 A의 큰수와 B의 작은수부터 곱해나가는 경우
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    let answer = 0;
    for(let i = 0; i < A.length; i++) {
        // 오름차순 정렬인 A의 인자와 내림차순 정렬인 B의 인자와 곱하기
       answer += (A[i] * B[i]); 
    }
    return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));