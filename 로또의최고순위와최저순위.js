// 푸는중

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
    let newLottos = lottos.sort((a,b) => a-b);
    let newWin_nums = win_nums.sort((a,b) => a-b);
    newWin_nums = newWin_nums.filter((item) => newLottos.includes(item));
    newLottos = newLottos.filter((item) => item === 0);
    let answer = [newLottos.length + newWin_nums.length , newWin_nums.length];
    return answer;
}

console.log(solution(lottos, win_nums));