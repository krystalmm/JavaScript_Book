/**
 * 5章 四季と演算子
 */

// インクリメントとデクリメント
let a = 2;
console.log(a++ + a++);
console.log(++a + ++a);
console.log(a++ + ++a);
console.log(++a + a++);
console.log(a);
console.log("--------");
let b = 10;
console.log(b-- + b--);
console.log(--b + --b);
console.log(b-- + --b);
console.log(--b + b--);
console.log(b);
console.log("--------");

// 演算子の優先順位
let x = 3, y;
x += y = 6 * 5 / 2;
/**
 * 計算する部分を()で囲みながら優先順位を確認していく
 * 乗算と除算（優先レベル14、左から右）
 *  x += y = (6 * 5) / 2
 *  x += y = (30) / 2
 *  x += y = 15
 *
 * 代入（優先レベル3、右から左）
 *  x += (y = 15)
 *  x += 15  // yの値は15になり、代入前のxの値は3
 *  18
 */
console.log(x);  // 18
console.log("--------");

// 分割代入
const arr = [1, 2, 3, 4, 5];
let [c, d] = arr;
console.log(c); // 1
console.log(d); // 2
console.log("--------");
// 展開演算子を使えば残りの要素を全て捕捉してくれる！
let [e, f, ...rest] = arr;
console.log(e); // 1
console.log(f); // 2
console.log(rest); // [3, 4, 5]
