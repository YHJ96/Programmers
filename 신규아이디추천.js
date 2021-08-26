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
        if(answer[i] === '.' && answer[i + 1] === '.') {
            delete answer[i];
        } continue;
    }
    answer = answer.filter((item) => answer.includes(item));
    if(answer[0] === '.') {
        answer.shift()
    } else if(answer[answer.length - 1] === '.') {
        answer.pop();
    } else if(answer.length === 0) {
        answer.push('a');
    }
    
    if(answer.length >= 16) {
        answer = answer.slice(0, 15);
        if(answer[15] === '.') {
            answer = answer.pop();
        }
    }

    if(answer.length >= 2) {
        if(answer.length === 4) return;
        else answer.push(answer[answer.length - 1]);
    } 

    answer = answer.join('');
    return answer;
}

console.log(solution(new_id));