// 푸는중

const new_id = 	"...!@BaT#*..y.abcdefghijklm";

function solution(new_id) {
    let answer = new_id;
    const level2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v','w','x','y','z'
    ,'_','-','.',1,2,3,4,5,6,7,8,9];
    answer = answer.toLowerCase();
    answer = answer.filter((item) => level2.includes(item));
    return answer;
}

console.log(solution(new_id));