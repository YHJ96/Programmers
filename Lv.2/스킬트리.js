let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

function solution(skill, skill_trees) {
    let answer = 0;
    // 스프레드 연산자를 통해서 문자열의 요소들로 이루어진 배열을 만든다.
    const compare = [...skill];
    // skill_trees의 요소만큼 반복문 실행
    skill_trees.forEach((item) => {
        // 문자열의 요소들을 배열로 만든 뒤 skill에 있는 요소들만 추출하여 문자열로 치환하여 반환한다.
        const checkSkill = [...item].filter((item) => compare.includes(item)).join('');
        // 만약에 시작점이 0인 경우는 순서대로 실행한 스킬트리이므로 answer + 1
        if(skill.indexOf(checkSkill) === 0) answer += 1;
    });
    return answer;
}