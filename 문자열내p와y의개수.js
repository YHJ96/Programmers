const s = "pPoooyY";

function solution(s){
    let newStr = [...s];
    const pCount = [];
    const yCount = [];
    newStr.map((item) => {
        if(item === 'p' || item === 'P') {
            return pCount.push(item);
        } else if(item === 'y' || item === 'Y') {
            return yCount.push(item);
        }
    })
    if(pCount.length !== yCount.length) return false;
    else return true;
}

console.log(solution(s));