/* 問題文
1-4. 配列の型
以下のコードで定義される関数sumOfPosは、
数値の配列を受け取って、そのうち0以上の値の和を返す関数です。
適切な型アノテーションをつけてください。
*/

function sumOfPos(arr: number[]) {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);
console.log(sum);

// エラー例
// sumOfPos(123, 456);
// sumOfPos([123, "foobar"]);

/* コメント
エラー例1は、引数の数が不正のためコンパイルエラー。
エラー例2は、型定義していないため、
コンパイルエラーにならずに実行時エラーになってしまう。
*/
