/**
 * 6章　関数
 */

/** 呼び出しと関数 */
function getGreeting() {
  return "Hello World!";
}

console.log(getGreeting()); // Hello World!
console.log(getGreeting); // function getGreeting()

// 関数を変数や定数へ代入もできる！
const f = getGreeting;
console.log(f());

// オブジェクトのプロパティの値とすることもできる！
const o = {}; // oという空のオブジェクトを定義
o.f = getGreeting; // オブジェクトoのfというプロパティの値として関数を指定
console.log(o.f());

// 配列の要素として関数を代入することもできる！
const arr = [1, 2, 3];
arr[1] = getGreeting; // arrは[1, getGreeting(), 3]になる
const message = arr[1]();
console.log(message);


/** 引数の分割代入 */
// オブジェクトのプロパティ
function getSentence({subject, verb, object}) {
  return `${subject} ${verb} ${object}`; // 主語 動詞 目的語
}

const o2 = {
  subject: "I",
  verb: "love",
  object: "JavaScript"
}

console.log(getSentence(o2));

// 同じように配列に対しても分割代入可能！
function getSentence2([subject, verb, object]) {
  return `${subject} ${verb} ${object}`;
}

const arr2 = ["I", "love", "JavaScript"];
console.log(getSentence2(arr2));

// 展開演算子を使って残りの引数をまとめてしまうこともできる！（関数の定義で展開演算子を使う場合は、最後の引数として指定する必要あり！！）
function addPrefix(prefix, ...words) {
  const prefixedWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex")); // ['converse', 'convex']
console.log(addPrefix("非", "プログラマー", "デザイナー", "コーダー")); // ['非プログラマー', '非デザイナー', '非コーダー']


/** this */
// ネストされた関数からthisにアクセスする場合、thisを別の変数に代入して覚えておくと良い！（もしくは、アロー関数を使っても解決できる！）
const o3 = {
  name: 'Julie',
  greetBackWards: function() {
    const self = this; // thisを覚えておく!

    function getReverseName() {
      let nameBackWards = '';
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackWards += self.name[i];
      }
      return nameBackWards;
    }

    return `${getReverseName()} si eman ym ,olleH`;
  }
}

console.log(o3.greetBackWards());


/** 関数式と無名関数 */
// 関数式を使い、その値を変数に代入！
// const f = function() {}; // function()は無名関数！

// 関数名を指定した上で関数式を変数に代入しても、変数の方が優先される！！
// const g = function f() {};  // gの方が優先される！


/** アロー関数 */
/**
 * functionという単語を省略できる！
 * 引数が一つならば（）を省略できる！
 * 関数本体が一つの式からなる場合、{}とreturn文を省略できる！
 */
// const f1 = function() {return "hello!";}
// const f1 = () => "hello!";

// const f2 = function(name) {return `Hello, ${name}!`;}
// const f2 = name => `Hello, ${name}!`;

// const f3 = function(a, b) {return a + b;}
// const f3 = (a, b) => a + b;

// thisでのgreetBackwardsのアロー関数を使った方法は以下！
const o4 = {
  name: 'Julie',
  greetBackWards: function() {
    const getReverseName = () => {
      console.log(this); // {name: 'Julie', greetBackwards: [Function: greetBackwards]}
      let nameBackWards = '';
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackWards += this.name[i];
      }
      return nameBackWards;
    };

    return `${getReverseName()} si eman ym ,olleH`;
  }
}

console.log(o4.greetBackWards());


/** call, apply, bind */
// callは、全ての関数に対して利用できるメソッドで、thisを特定の値に指定した上で関数を呼び出すことができる！
// 第一引数はthisを束縛したい値を指定し、残りの引数は呼び出す関数の引数となる！
// 'use strict'; /** これを有効にすると「greet()」がエラーになる！ */
const bruce = {名前: "ブルース"};
const madeline = {名前: "マデライン"};
// この関数はオブジェクトに関連してないが、callを使えばthisが使えるようになる！
function greet() {
  return `私は${this.名前}です！`;
}

console.log(greet()); // 私はundefinedです！
console.log(greet.call(bruce)); // 私はブルースです！
console.log(greet.call(madeline)); // 私はマデラインです！

// 次の例のように、callをオブジェクトの内容を書き換えるのにも使うことができる！
function update(birthYear, occupation) {
  this.生年 = birthYear;
  this.職業 = occupation;
}

console.log(bruce); // { '名前': 'ブルース' }
update.call(bruce, 1949, '歌手');
console.log(bruce); // { '名前': 'ブルース', '生年': 1949, '職業': '歌手' }

console.log(madeline); //  {'名前': 'マデライン' }
update.call(madeline, 1942, '女優');
console.log(madeline); // { '名前': 'マデライン', '生年': 1942, '職業': '女優' }


// applyはcallとよく似ているが、引数の扱いが少し異なる！！
// callは普通の関数と同じように引数を直接受け取るが、applyは引数を配列として受け取る！
update.apply(bruce, [1995, "俳優"]);
console.log(bruce); // { '名前': 'ブルース', '生年': 1995, '職業': '俳優' }

update.apply(madeline, [1918, "ライター"]);
console.log(madeline); // { '名前': 'マデライン', '生年': 1918, '職業': 'ライター' }

// すでに配列が用意されていて、その値を関数の引数として使いたい場合はapplyが便利！
const arr3 = [2, 3, -5, 15, 7];
console.log(Math.min.apply(null, arr3)); // -5
console.log(Math.max.apply(null, arr3)); // 15
// 上記でthisの値としてnullを渡しているのは、Math.minとMath.maxではthisは使われないため、何を渡しても影響がないから！！

// 以下のように、展開演算子を使うと、applyと同じ結果を得ることができる！（updateはthisの値が関係するのでcallを使う必要があるが、Math.minとmaxはthisの値が関係しないので展開演算子を使って直接呼び出せる！）
const newBruce = [1940, "武闘家"];
update.call(bruce, ...newBruce);
console.log(bruce); // { '名前': 'ブルース', '生年': 1940, '職業': '武闘家' }

console.log(Math.min(...arr3)); // -5
console.log(Math.max(...arr3)); // 15


// bindは、thisの値をある関数と永続的に結びつけることができる！
const updateBruce = update.bind(bruce); // updateBruceを使うと、thisはbruceに束縛される！

updateBruce(1904, "俳優");
console.log(bruce); // { '名前': 'ブルース', '生年': 1904, '職業': '俳優' }

updateBruce.call(madeline, 1274, "王様");
console.log(madeline); // { '名前': 'マデライン', '生年': 1918, '職業': 'ライター' } （変わらない！）
console.log(bruce); //  {'名前': 'ブルース', '生年': 1274, '職業': '王様' } （bruceが変わってしまう！！）

// bindに引数を渡すこともできる！
// 例えば以下は、bruceの生年をいつも1949に設定するupdateが欲しいが職業は変更したいという場合
const updateBruce1949 = update.bind(bruce, 1949);

updateBruce1949("作詞家");
console.log(bruce); // { '名前': 'ブルース', '生年': 1949, '職業': '作詞家' }
