function solution(s) {
    let answer = [];
    let y = 0;
    let x = 0;
    let dy = [-1, 0 ,1, 0];
    let dx = [0, 1, 0, -1];
    let step = ['U','R','D','L'];
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < step.length; j++) {
            if(s[i] === step[j]) {
                const ny = y + dy[j];
                const nx = x + dx[j];
                if(nx < -5 || ny < -5 || nx > 5 || ny > 5) continue;
                const preY = y;
                const preX = x;
                y = ny;
                x = nx;
                answer.push(`${preY}${preX}${y}${x}`);
                answer.push(`${y}${x}${preY}${preX}`);
            }
        }
    }
    const mySet = new Set([...answer]);
    return mySet.size / 2;
}

console.log(solution("ULURRDLLU"));