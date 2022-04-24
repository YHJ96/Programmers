```
-- 코드를 입력하세요
-- ANIMAL_TYPE, SEX_UPON_INTAKE 속성을 선택하고 NAME 속성의 값이 NULL일 경우 "No name" 삽입
SELECT ANIMAL_TYPE, IFNULL(NAME, 'No name'), SEX_UPON_INTAKE
-- 테이블명 기술
FROM ANIMAL_INS
-- ANIMAL_ID 기준 오름차순 정렬
ORDER BY ANIMAL_ID
```