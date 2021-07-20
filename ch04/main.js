/* サイコロを使った王冠と錨ゲーム */

// m以上n以下のランダムな整数を返す
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

// サイコロの目を表す文字列をランダムに返す
