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


/** クラスとインスタンス生成 */
// クラス定義
// class Car {
//   constructor() {

//   }
// }

// クラス生成
// const car1 = new Car();


// instanceof演算子（あるオブジェクトがあるクラスのオブジェクトであるかどうか確認できる演算子）
// console.log(car1 instanceof Car); // true
// console.log(car1 instanceof Array); // false


// Carクラスに属性やメソッドを追加していく！
class Car {
  constructor(make, model) {
    this.make = make; // メーカー
    this.model = model; // モデル
    this.userGears = ['P', 'N', 'R', 'D'];
    this.userGear = this.userGears[0];
  }
  // ギアをシフト（変更）するメソッド
  shift(gear) {
    if (this.userGears.indexOf(gear) < 0) /** 例外の処理 */
      throw new Error(`ギア指定が正しくない：${gear}`); // 例外をスローしてエラーを示す
    this.userGear = gear;
  }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
console.log(car1);
/* 実行結果
Car {
  make: 'Tesla',
  model: 'Model S',
  userGears: [ 'P', 'N', 'R', 'D' ],
  userGear: 'P'
}
 */
console.log(car2);
/* 実行結果
Car {
  make: 'Mazda',
  model: '3i',
  userGears: [ 'P', 'N', 'R', 'D' ],
  userGear: 'P'
}
 */

// ギアをDやRに入れる
car1.shift('D');
car2.shift('R');

console.log(car1.userGear); // D
console.log(car2.userGear); // R


/** アクセッサプロパティ */
// 直接ギアをセットされるのを防ぐためのアクセス制御はjsではできないため、アクセッサプロパティを使用する！（メソッドとプロパティの機能を併せ持つような存在！）
class Car2 {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }

  get userGear() {return this._userGear};
  set userGear(value) {
    if (this._userGears.indexOf(value) < 0)
      throw new Error(`ギア指定が正しくない：${value}`);
    this._userGear = value;
  }

  shift(gear) {this.userGear = gear;}
}
const car3 = new Car2("Tesla", "Model S");
const car4 = new Car2("Mazda", "3i");
console.log(car3);
/* 実行結果
Car2 {
  make: 'Tesla',
  model: 'Model S',
  _userGears: [ 'P', 'N', 'R', 'D' ],
  _userGear: 'P'
}
 */

console.log(car4);
/* 実行結果
Car2 {
  make: 'Mazda',
  model: '3i',
  _userGears: [ 'P', 'N', 'R', 'D' ],
  _userGear: 'P'
}
 */

car3.shift('D');
car4.shift('R');

console.log(car3.userGear); // D
console.log(car4.userGear); // R

// car3.userGear = "X"; // Error: ギア指定が正しくない：X

