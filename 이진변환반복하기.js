console.log(solution("110010101001"));

function solution(s) {
    let count = 0;
    let zero = 0;
    let target = [...s];
    while(target.join('') !== '1') {
        const compare = target.filter((item) => item !== '0');
        count += 1;
        zero += target.length - compare.length;
        target = compare.length.toString(2).split('');
    }
    return [count, zero];
}