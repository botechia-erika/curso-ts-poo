function fn<T>(value: T) {
  return value;
}

console.log(fn('a').toUpperCase());
console.log(fn(1).toFixed(2));
console.log(!fn({ a: true }).a);
