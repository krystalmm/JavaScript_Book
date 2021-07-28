/**
 * 7章 スコープ
 */
/** グローバルスコープ */
// グローバル変数を使う
let name = "桃太郎";
let age = 25;

function greet() {
  console.log(`こんにちは、${name}さん！`);
}

function getBirthYear() {
  return new Date().getFullYear() - age;
}

greet(); // こんにちは、桃太郎さん！
console.log(getBirthYear()); // 1996（実行する年によって変わる）


// 上記の問題は、ここで定義した2つの関数が、呼び出されたコンテキスト（スコープ）に大きく依存してしまうこと！
// ユーザーの情報を一つのオブジェクトにまとめるとこうした危険を減らすことができる！
let user = {
  name: "桃太郎",
  age: 25
};

function greet2() {
  console.log(`こんにちは、${user.name}さん！`);
}

function getBirthYear2() {
  return new Date().getFullYear() - user.age;
}

greet2();
console.log(getBirthYear2());


// さらに改善する！（関数をグローバルスコープに依存しないようにする）
function greet3(person) {
  console.log(`こんにちは、${person.name}さん！`);
}

function getBirthYear3(person) {
  return new Date().getFullYear() - person.age;
}

greet3(user);
console.log(getBirthYear3(user));