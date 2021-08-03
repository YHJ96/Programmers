/* 
price 인원수
money 가지고 있는 돈
count 타고싶은 횟수
*/

const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
    let newPrice = 0;
    for(let i = 1; i <= count; i++) {
        newPrice += price * i;
    }
    if(money >= newPrice) return 0;
    else return newPrice - money;
}

console.log(solution(price, money, count))