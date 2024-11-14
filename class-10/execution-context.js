function foo() {
  var a = 10;

  if (true) {
    var b = 20;
    console.log(b); // ??
  }

  console.log(b); // ??
}

foo();
console.log(b); // ??
