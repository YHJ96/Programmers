//  자바스크립트로 실행 불가능 C++로 먼저 해결한뒤 JavaScript로 옮김

/*
#include <bits/stdc++.h>
using namespace std;

bool solution(vector<string> phone_book) {
    bool answer = true;
    sort(phone_book.begin(), phone_book.end());
    for(int i = 0; i < phone_book.size() - 1; i++) {
        string compare = phone_book[i + 1].substr(0, phone_book[i].size());
        if(phone_book[i] == compare) {
            answer = false;
            return answer;
        }
    }
    return answer;
}
*/

const phone_book = ["12","123","1235","567","88"];

function solution(phone_book) {
    let answer = true;
    phone_book.sort((a,b) => a.localeCompare(b));
    for(let i = 0; i < phone_book.length - 1; i++) {
        const compare = phone_book[i + 1].substr(0, phone_book[i].length);
        console.log(compare);
        if(compare === phone_book[i]) {
            answer = false;
            return answer;
        }
    }
    return answer;
}

console.log(solution(phone_book));