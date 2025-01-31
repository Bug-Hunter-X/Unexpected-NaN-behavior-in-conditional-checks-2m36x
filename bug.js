function foo(x) {
  if (x === null) {
    return 0;
  } else if (x === undefined) {
    return 1;
  }
  return x + 1;
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 1
console.log(foo(NaN)); // NaN