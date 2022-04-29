console.log(solution("110010101001"));

function solution(s) {
    // 0을 없애는 횟수
    let count = 0;
    // 0을 제거한 갯수
    let zero = 0;
    // filter 메소드를 사용하기 위해서 스프레이드 연산자 사용 
    let target = [...s];
    // target이 문자열 1이면 정지
    while(target.join('') !== '1') {
        // 0이 아닌숫자만 return
        const compare = target.filter((item) => item !== '0');
        // 카운트
        count += 1;
        // 0의 갯수
        zero += target.length - compare.length;
        // 길이만큼 진법전환뒤 split을 사용해서 배열로 반환
        target = compare.length.toString(2).split('');
    }
    return [count, zero];
}