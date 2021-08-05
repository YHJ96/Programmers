const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

function solution(participant, completion) {
    let answer = participant.sort();
    let completPeople = completion.sort();
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] !== completPeople[i]) {
            return answer[i];
        }
    }
}

console.log(solution(participant, completion));