// 푸는중

const new_id = 	"...!@BaT#*..y.abcdefghijklm";

function solution(new_id) {
    let answer = new_id;
    const level2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v','w','x','y','z'
    ,'_','-','.',1,2,3,4,5,6,7,8,9];
    answer = answer.toLowerCase();
    answer = [...answer];
    answer = answer.filter((item) => level2.includes(item));
    for(let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer.length; j++) {
            if(answer[i] === '.' && answer[j] === '.' && i !== j) {
                delete answer[j]; 
            } if(answer[j] !== '.' && i !== j) {
                continue;
            }
        }
    }
    return answer;
}

console.log(solution(new_id));