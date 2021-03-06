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


/** mapとfilter */
// mapは配列内の要素を変換する！filterは配列から不要な要素を取り去る！mapもfilterもコピーを戻し、オリジナルの配列は変更しない！！
const cart = [{name: "iPhone", price: 54800}, {name: "Android", price: 49800}];
const names = cart.map(x => x.name);
console.log(names); // [ 'iPhone', 'Android' ]
const prices = cart.map(x => x.price);
console.log(prices); // [ 54800, 49800 ]
const discountPrices = prices.map(x => x * 0.8); // 2割引の価格
console.log(discountPrices); // [ 43840, 39840 ]
const lcNames = names.map(x => x.toLowerCase()); // 小文字にする
console.log(lcNames); // [ 'iphone', 'android' ]

const cards = [];
// 全カードを生成
for (let suit of ['heart', 'clover', 'diamond', 'spade']) {
  for (let num = 1; num <= 13; num++) {
    cards.push({suit, num});
  }
}

let selectedCard = cards.filter(card => card.num === 2);
console.log(selectedCard); // [{ suit: 'heart', num: 2 }, { suit: 'clover', num: 2 }, { suit: 'diamond', num: 2 }, { suit: 'spade', num: 2 }]


/** reduce */
// reduceは配列全体を変換する！
const ar = [5, 7, 2, 4];
const sum = ar.reduce((a, x) => a += x, 0);
console.log(sum); // 18
// 上記の+=の=は省略できる！
// また、第二引数はundefinedの時、配列の最初の要素を初期値として受け取るので、上記の場合は0も省略できる！
// 以下省略版
// const sum = ar.reduce((a, x) => a + x);

// 以下のようにオブジェクトをアキュムレータ（渡される第一引数）として使うこともできる！
const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
  if (!a[x[0]]) {
    // 先頭文字のプロパティがなければ空で作成
    a[x[0]] = [];
  }
  a[x[0]].push(x); // 現在の要素を記憶！
  return a; // オブジェクトを返す
}, {});
console.log(alphabetical);
/* 実行結果
{
  B: [ 'Beachball', 'Bali' ],
  R: [ 'Rodeo' ],
  A: [ 'Angel', 'Aardvark' ],
  X: [ 'Xylophone' ],
  N: [ 'November' ],
  C: [ 'Chocolate', 'Clover' ],
  P: [ 'Papaya' ],
  U: [ 'Uniform' ],
  J: [ 'Joker' ]
}
*/

// 以下は統計関係の例
const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce((a, x) => {
  a.N++;
  let delta = x - a.mean;
  a.mean += delta/a.N;
  a.M2 += delta * (x - a.mean);
  return a;
}, {N: 0, mean: 0, M2: 0});
if (stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}
console.log(stats);
/* 実行結果
{
  N: 7,
  mean: 6.828571428571428,
  M2: 63.41428571428572,
  variance: 10.56904761904762,
  stdev: 3.2510071699471257
}
 */

// 以下は文字列をアキュムレータとして用いる例（trimは文字列の前後にある空白を削除するメソッド！最初の文字の時に空白ができるからそれを削除している！）
const longWords = words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "").trim();
console.log(longWords); // Beachball Aardvark Xylophone November Chocolate Uniform


/** 配列関連のメソッドと削除された要素、定義されていない要素 */
// map, filter, reduceは削除されたり値が代入されたことのない要素に対しては関数を呼び出さない！
// 例えば、以下のように配列の全ての要素を5にして初期化しようとしてもうまくいかない！！（全てundefinedになる！）
const array = Array(10).map(function (x) { return 5 });
console.log(array); // [ , , , , , , , , , ]

// 同様に、配列の要素を削除してからmapを呼び出すと、配列の真ん中に「穴」ができてしまうことになる！
const array2 = [1, 2, 3, 4, 5];
delete array2[2];
console.log(array2); // [1, 2,  , 4, 5]
const result = array2.map(x => 0);
console.log(result); // [0, 0,  , 0, 0]
console.log(result[2]); // undefined


/** join */
// 配列の各要素をまとめて一つの文字列を作りたいという場合があり、そのような場合は、joinが使える！（第一引数はセパレータ（デフォルトは「,」になっている！））
const array3 = [1, null, "hello", "world", true, undefined];
delete array3[3];
let result2 = array3.join();
console.log(result2); // 1,,hello,,true,
result2 = array3.join('');
console.log(result2); // 1hellotrue
result2 = array3.join(' -- ');
console.log(result2); // 1 --  -- hello --  -- true --

// joinを使って簡単にulリストを作ることができる！
const お供 = ["キジ", "犬", "サル"];
const html = '<ul><li>' + お供.join('</li><li>') + '</li></ul>';
console.log(html); // <ul><li>キジ</li><li>犬</li><li>サル</li></ul>
