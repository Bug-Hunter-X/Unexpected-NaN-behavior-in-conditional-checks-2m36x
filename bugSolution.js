function foo(x) {
  if (x === null) {
    return 0;
  } else if (x === undefined) {
    return 1;
  } else if (Number.isNaN(x)) {
    return 2; // Handle NaN explicitly
  }
  return x + 1;
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 1
console.log(foo(NaN)); // 2