/**
 * 8章 配列
 */

// 先頭あるいは最後の要素に対する操作
// pushとunshiftの戻り値は変更後の配列の長さ、popとshiftは削除された要素を戻す！
let arr = ["b", "c", "d"];
console.log(arr.push("e")); // 4 ← 現在の長さ（要素数）
console.log(arr); // [ 'b', 'c', 'd', 'e' ]
console.log(arr.pop()); // e
console.log(arr); // [ 'b', 'c', 'd' ]
console.log(arr.unshift("a")); // 4 ← 現在の長さ
console.log(arr); // [ 'a', 'b', 'c', 'd' ]
console.log(arr.shift()); // a
console.log(arr); // [ 'b', 'c', 'd' ]
