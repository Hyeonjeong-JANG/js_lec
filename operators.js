// 거듭제곱
console.log(2 ** 3);
console.log((-2) ** 3);

// 할당 연산자
// x+y

// 문자열 비교(문자열은 알파벳 순으로 비교된다.)
let text1 = "A";
let text2 = "B";
let text3 = 3;
let result = text1 < text2;
console.log(result);

// 유형 연산자
console.log(typeof text1);
console.log(typeof text3);

// 비트 연산자(2진수로 옮겨서 10진수로 출력) -> 사실 잘 모르겠음
// <<, >>, >>>는 자바스크립트에서 비트 연산자 중 하나로, 정수형 데이터의 비트 단위 이동을 수행하는 연산자입니다.

// << 연산자는 왼쪽 시프트(Left Shift)를 수행하며, 오른쪽 피연산자만큼 비트를 왼쪽으로 이동시킵니다. 이동된 비트는 왼쪽에 0으로 채워집니다.

// >> 연산자는 오른쪽 시프트(Right Shift)를 수행하며, 오른쪽 피연산자만큼 비트를 오른쪽으로 이동시킵니다. 이동된 비트는 부호 비트(가장 왼쪽 비트)와 동일한 값으로 채워집니다.

// >>> 연산자는 오른쪽 시프트(Unsigned Right Shift)를 수행하며, 오른쪽 피연산자만큼 비트를 오른쪽으로 이동시킵니다. 이동된 비트는 항상 0으로 채워집니다. 이 연산자는 부호를 무시하고 비트를 이동시키기 때문에 양수와 음수 모두 동일하게 처리됩니다.
let x = 5;
let leftShiftResult = x << 1;
let rightShiftResult = x >> 1;
let unsignedRightShiftResult = x >>> 1;

console.log(leftShiftResult); // Output: 10 (2진수로 1010)
console.log(rightShiftResult); // Output: 2  (2진수로 10)
console.log(unsignedRightShiftResult); // Output: 2  (2진수로 10)
