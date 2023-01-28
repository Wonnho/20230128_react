/*
var keyword를 사용하지 않는 이유
1) 중복 선언이 허용된다.=>예기치 못한 오류를 발생시킨다.
2) 호이스팅이 일어난다.=>변수 선언 이전에 참조해도 오류가 발생하지 않는다. bad function
3) 함수 level scope만 지원한다.=> block level scope는 지원하지 않는다.
*/

console.log(num); // 변수 선언 이전에 참조하면 undefined 출력

var num = 20;

var num = 10;
console.log(num);

for (var num = 0; num < 10; num++) {}
console.log(num);
{
  var num = 30;
}

// console.log(str); //호이스팅은 발생하지만 TDZ 때문에 오류 발생
// let str = "문자열";

/*

Arrow Function
-화살표를 사용해서 함수를 간결하게 사용할 수 있다.
-return 생략할 수 있다.
*/

//const sum = () => {};
/*-함수 호이스팅이 일어나지 않는다.
 */
//sum();
// 함수 호이스팅이 일어나지 않기 때문에 오류 발생

// const sum = (a,b) => {
//     return a+b;
// };

const sum = (a, b) => a + b; // 코드 블록과 return을 생략하면 표현식의 결과가 반환된다.

const getObj = (name, age) => ({ name: name, age: age }); //객체를 return할 때는 ()로 감싸준다.

sum(10);
/*
매개변수 rest
-매개변수가 몇개일지 정해지지 않았을 때 사용
*/

function getTotal(...numbers) {
  console.log(numbers);
}

getTotal(2, 4, 10, 15); //매개변수 앞에 ...을 붙이면 인자가 몇개이든 배열로 모아준다.

function getTotal(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
  //Array.prototype.reduce: 계산을 누적한다.
  //매개변수의 마지막에 와야 한다.(...numbers,a)
}

/*
spread operator
   - 배열이나 객체를 펼치는 효과
*/

let arr = [1, 2, 3, 4, 5];

console.log(getTotal(...arr)); //getTotal(1,2,3,4,5);

let newArr = [0, ...arr, 10]; //=>[0,1,2,3,4,5,10] 복사할 대 편함

let user = {
  name: "seok",
  age: 31,
};

let copy = user; //겍체는 참조값이 복사된다.

copy.age = 40;

console.log(user);

let copy02 = { ...user }; // {name:"seok",age:40} property를 펼쳐준다.
//참조복사가 아니라 프로퍼티를 펼쳐서 복사;리액트에서 중요

copy02.age = 50;
console.log(copy02, user);

/*
비구조화 할당

*/

// let age=user.age;
// let name=user.name;

// 위를 한줄로 요약하면
let { age, name } = user;
/*
비구조화 할당
-객체의 배열이나 객체의 값을 변수로 간단하게 할당할 수 있다.
-코드를 줄여주는데 도움

*/

let fruits = ["apple", "orange", "grape"];
let [first, second] = fruits; //
console.log(first, second);
//객체는 가져오고 싶은 프로퍼티명을 알아야 한다. 배열은 인덱스의 순서대로 변수에 할당된다.

//let { age: username, name } = user;
//console.log(username);

//let { age: username, name, weight } = user;
//weight는 undefined

/**
 ternary operator

 */
let result = user.age < 40 ? "red" : "green";
console.log(result);

let result2;
if (user.age < 40) result2 = "red";
else result2 = "green";
console.log(result2);

/**
 * 단축 평가
 * && 와 ||
 *
 */

const color = user.age > 40 && "red";
console.log(color);
//&& 앞의 값이 true일 때 뒤의 값을 평가
//|| 앞의 값이 false일 대 뒤의 값을 평가

const text = true || "해당사항없음";

function print() {
  console.log("30세 이상입니다.");
}

user.age > 30 && print();
//앞이 참일 때만 뒤의 함수가 실행된다.
//평가가 된다는 건 코드가 실행된다는 의미
user.age = 20;
user.age > 30 && print();
//실행 되지 않는다.

/**
 * null 병합 연산자
 * ?? 앞의 값이 null,undefined ?? 뒤의 값을 평가한다.
 */

0 || console.log("실행");
0 ?? console.log("실행"); //0은 falsy value이나 null 이나 undefined가 아니기 때문에 실행이 안된다.

/**
 * optional chaining
 * 프로퍼티 참조할 때 참조하는 객체가 undefined,null인 경우 참조하지 않는다.
 *
 */

let obj = {
  age: 31,
  height: 173,
};

//console.log(obj.weight.num);

console.log(obj.weight?.num); //참조자체를 끊어버린다.

/**
 * template literal
 * 문자열 안에 JS 표현식(값)을 포함시킬 수 있다.
 */

console.log("오후입니다." + user.name + "네플러스입니다.");

console.log(
  `네플러스입니다${user.age}세 이고 ${user.name} 템플릿 문자열을 배우고 있습니다.`
); //``back tick안에서 ${}안에 JS 표현식(값)을 작성하면 된다.

/**
 * 배열의 고차함수
 * -배열을 순회하면서 각 요소에 대한 함수를 실행한다.
 * -배열의 요소만큼 반복하는 함수
 *
 */

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//forEach:배열의 요소를 인자로 전달받는 콜백함수를 실행

numbers.forEach(function (num) {
  console.log(num);
});
//성능은 for가 더 빠른데 가독성때문에 forEach 이용

//via arrow function
numbers.forEach((num) => console.log(num));

// index parameter
numbers.forEach((num, idx) => console.log(num, "idx:", idx));

/*
forEach
콜백함수의 첫번째 매개변수에 각 요소가 전달
콜백함수의 두번째 매개변수에 각 요소의 인덱스 전달
*/

/**
 * Array.prototype.filter(): 콜백함수의 return 값이 true(boolean)인 요소만 모아서 새로운 배열로 반환
 *
 */
let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0; //return 값이 반드시 true or false이어야 한다.
});

console.log(evenNumbers);

// let oddNumbers = numbers.filter((num) => {
//   return num % 2 === 1; //return 값이 반드시 true or false이어야 한다.
// });
let oddNumbers = numbers.filter((num) => num % 2 === 1); //return 값이 반드시 true or false이어야 한다.

console.log(oddNumbers);

/**
 *
 * Array.prototype.map():각 요소를 이용해서 새로운 값을 만들어내어 새로운 배열로 반환
 */

let dobuleNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(dobuleNumbers);

//짝수번재만 두배 곱하고, 나머지는 그대로 새로운 배열로 모으기;[1,4,3,8,5]

const ddNumbers = numbers.map((num, i) =>
  numbers[i] % 2 === 0 ? num * 2 : num
);
// in short, const ddNumbers = numbers.map((num, i) =>numbers[i] % 2 === 0 ? num * 2 : num) );

//equivalently,
let ddNumbers2 = numbers.map((num, idx) => {
  if (idx % 2 !== 0) return num * 2;
  return num;
});

console.log(ddNumbers2);

console.log(ddNumbers);
