function solution(board, moves) {
    moves.forEach((item, index) => moves[index] = moves[index] - 1);
    const box = [];
    const stack = [];
    let answer;
    for(let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board.length; j++) {
            // 인형뽑기 진행
            if(board[j][moves[i]] !== 0) {
                // 0이 아니면 뽑기
                box.push(board[j][moves[i]]);
                // 뽑고나서 그 영역을 0으로 바꿈
                board[j][moves[i]] = 0;
                break;
            }
        }
    }
    let total = box.length;
    // 박스에 있는 인형들이 같은걸 없애주기
    for(let i = 0; i < box.length; i++) {
        if(stack.length === 0 || stack[stack.length - 1] !== box[i]) stack.push(box[i]);
        else stack.pop();
    }
    // 처음의 인형의 갯수와 남아있는 인형의 갯수를 빼주기
    answer = total - stack.length;
    return answer;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));