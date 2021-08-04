/**
 * 8章 配列
 */

/** 先頭あるいは最後の要素に対する操作 */
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


/** 複数要素の追加 */
let arr2 = [1, 2, 3];
let arr3 = arr2.concat(4, 5, 6);
console.log(arr2); // [ 1, 2, 3 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
arr3 = arr2.concat([4, 5, 6]); // 配列を渡す
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
arr3 = arr2.concat([4, 5], 6);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
arr3 = arr2.concat([4, 5], [6, 7]); // 引数は2つでいずれも配列
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7 ]
arr3 = arr2.concat([4, [5, 6]]); // 引数は配列一つでその2番目の要素が配列
console.log(arr3); // [ 1, 2, 3, 4, [ 5, 6 ] ]


/** 途中の要素の削除や途中への要素の追加 */
let arr4 = [1, 5, 7];
let arr5 = arr4.splice(1, 0, 2, 3, 4); // arr4[1]から2, 3, 4が追加される
console.log(arr4); // [ 1, 2, 3, 4, 5, 7 ]
console.log(arr5); // [] ← 何も削除されていない
arr5 = arr4.splice(5, 0, 6); // arr4[5]に6が追加されて、以降一つずつ後ろへ
console.log(arr4); // [1, 2, 3, 4, 5, 6, 7]
console.log(arr5); // [] ← 何も削除されていない
arr5 = arr4.splice(1, 2); // arr4[1]から2個削除
console.log(arr4); // [ 1, 4, 5, 6, 7 ]
console.log(arr5); // [ 2, 3 ] ← 削除された要素
arr5 = arr4.splice(2, 1, 'a', 'b'); // arr4[2]から1個削除して、'a'と'b'をそこに追加
console.log(arr4); // [ 1, 4, 'a', 'b', 6, 7 ]
console.log(arr5); // [5] ← 削除された要素


/** 配列内の要素の削除や置換 */
let arr6 = [11, 12, 13, 14];
let arr7 = arr6.copyWithin(1, 2); // arr6[1]の位置から置き換える。arr6[2]から最後までコピーする
console.log(arr6); // [ 11, 13, 14, 14 ]
console.log(arr7); // [ 11, 13, 14, 14 ] ← copyWithinはオブジェクト自身を返す
console.log(arr6.copyWithin(2, 0, 2)); // [ 11, 13, 11, 13 ] ← arr6[2]の位置から置き換える。arr6[0]からarr6[2]の前までコピーする
console.log(arr6.copyWithin(0, -3, -1)); // [ 13, 11, 11, 13 ]
console.log(arr7); // [ 13, 11, 11, 13 ] ← arr6を変更すると同じ配列を指しているarr7も変わる


