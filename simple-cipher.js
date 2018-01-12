// console.log('abc'.codePointAt(2));

var arr = [];

for (var i = 0; i <= 'abcdefg'.length - 6; i++) {
  // console.log('abcdefg'.length);
  var str = 'abcdefg'.codePointAt(i);
  var pos = str + 2;
  var letter = String.fromCodePoint(pos);
  arr.push(letter[i]);
  console.log(arr);
}

// console.log(str); // 99
// console.log(pos); // 101
// console.log(letter);
// console.log(String.fromCodePoint(101)); //e
// hello from amy
