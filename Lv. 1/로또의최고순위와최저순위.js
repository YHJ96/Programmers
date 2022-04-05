const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
    let newLottos = lottos.sort((a,b) => a-b);
    let newWin_nums = win_nums.sort((a,b) => a-b);
    newWin_nums = newWin_nums.filter((item) => newLottos.includes(item));
    newLottos = newLottos.filter((item) => item === 0);
    let answer = [newLottos.length + newWin_nums.length , newWin_nums.length];
    answer = answer.map((item) => {
        if(item === 6) return 1;
        if(item === 5) return 2;
        if(item === 4) return 3;
        if(item === 3) return 4;
        if(item === 2) return 5;
        return 6;
    });
    return answer;
}

console.log(solution(lottos, win_nums));