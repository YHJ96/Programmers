const scores = [[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]];

function solution(scores) {
    let answer = [];
    let newArr = [];

    for(let a = 0; a < scores.length; a++) {
        newArr.push([]);
    }
    // 2차원 배열 생성

    for(let b = 0; b < scores.length; b++) {
        for(let c = 0; c < scores.length; c++) {
            newArr[b][c] = scores[c][b];
        }
    }
    // Col방향으로 뒤집기

    for(let d = 0; d < scores.length; d++) {
        let bool = newArr[d].slice(0, newArr[d].length);
        bool.splice(d, 1);
        bool = bool.some((item) => item === scores[d][d]);
        // 중복가능성 최고점 최저점 중복체크 로직
        if((scores[d][d] === Math.max(...newArr[d]) || scores[d][d] === Math.min(...newArr[d])) && !bool) {
           const add = newArr[d].reduce((acc, curr) => acc + curr) - scores[d][d];
           const avg = add / (scores[d].length - 1)
           answer.push(avg);
        } else {
            const add = newArr[d].reduce((acc, curr) => acc + curr);
            const avg = add / scores[d].length;
            answer.push(avg);
        }
        // 평균계산
    }

    answer = answer.map((item) => {
        if(item >= 90) return 'A';
        if(item >= 80 && item <= 90) return 'B';
        if(item >= 70 && item <= 80) return 'C'; 
        if(item >= 50 && item <= 70) return 'D';
        if(item <= 50) return 'F';  
    })
    answer = answer.join('');
    // 평균계산한 값을 문자열로 바꿈
    return answer;
}

console.log(solution(scores));