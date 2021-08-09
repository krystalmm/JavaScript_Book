/**
 * 9章 オブジェクトとオブジェクト指向プログラミング
 */

/** for...in */
// for...inはオブジェクトのプロパティの処理に使われる！
const SYM = Symbol();
const o = {a: 1, b: 2, c: 3, [SYM]: 4};
for (let prop in o) {
  if (!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}
/* 実行結果（キーがシンボルであるプロパティはリストされない）
a: 1
b: 2
c: 3
 */


/** Object.keys */
// オブジェクトのプロパティを列挙する2つ目の方法はObject.keysを使う方法！
const propArray = Object.keys(o);
console.log(propArray);
console.log(" ------------ ");
propArray.forEach(prop => console.log(`${prop}: ${o[prop]}`));
/* 実行結果
[ 'a', 'b', 'c' ]
 ------------
a: 1
b: 2
c: 3
 */

// filterとの組み合わせ
const o2 = {apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5};
// filterでxから始まるものを取り出している！
Object.keys(o2).filter(prop => prop.match(/^x/)).forEach(prop => console.log(`${prop}: ${o2[prop]}`));
/* 実行結果
xochitl: 2
xylophone: 5
 */

