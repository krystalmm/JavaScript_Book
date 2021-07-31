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


/** ブロックスコープ */
console.log("ブロックの前");
{
  console.log("ブロック内");
  const x = 3;
  console.log(x);
}
// console.log(x); // エラーになる！！


/** 変数の隠蔽 */
// スコープが入れ子になった場合を見てみる！
{ /* 外側のブロックの始まり */
  let x = "青";
  console.log(x);  // 青
  { /* 内側のブロックの始まり */
    let x = 3;
    console.log(x);  // 3
  } /* 内側のブロックの終わり  */
  console.log(x);  // 青
} /* 外側のブロックの終わり */


// もう一つ例を見てみる！
{ /* 外側のブロックの始まり */
  let x = {color: "青"};
  let y = x;  // yとxが同じオブジェクトを参照する
  let z = 3;
  { /* 内側のブロックの始まり */
    let x = 5; // 外側のxが「マスク」される（隠されてしまう）
    console.log(x);  // 5
    console.log(y.color); // 青（yによって参照されているオブジェクトは相変わらずスコープに入っている！外側のブロックのxもスコープには入っている！）
    y.color = "赤";
    console.log(z);  // 3（zはマスクされていない）
  } /* 内側のブロックの終わり */
  console.log(x.color);  // 赤（内側のスコープでオブジェクトに変更がなされた）
  console.log(y.color);  // 赤（xとyは同じオブジェクトを参照している）
  console.log(z);  // 3
} /* 外側のブロックの終わり */



/** 関数、クロージャ、静的スコープ */
// クロージャとは、関数の周囲にスコープを閉じ込むもの！以下はクロージャの例！
let grobalFunc; // 未定義のグローバルな変数
{
  let blockVar = 'a'; // ブロックスコープの定義
  globalFunc = function () {
    console.log(blockVar);
  }
}

// スコープを関数が保持しておくことができる！！
globalFunc();  // a


// クロージャ内で関数を定義することはクロージャの存在の期間に影響を与えることになる！（通常はアクセスできないようなものに対してもアクセスできるようになる！）
let f; // 未定義のグローバルな変数
{
  let o = {note: "安全", note2: "大丈夫"};
  f = function () {
    console.log("無名関数の中：" + o.note); // 無名関数の中：安全
    return o;
  }
}

let oRef = f();
console.log(oRef); // { note: '安全', note2: '大丈夫' }
oRef.note = "全く安全ではない！";
console.log(oRef); // { note: '全く安全ではない！', note2: '大丈夫' }

// 上記例では、スコープにないはずのオブジェクトoのプロパティnoteの値を変更できてしまった！（通常はスコープ外のものにはアクセスできない！！）


/** IIFE - 即座に実行される関数式 */
// IIFEは以下のようなもの！
(function () {
  // IIFEの本体
})();

