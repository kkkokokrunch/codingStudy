function fib(n) {
  f = [0, 1]
  for (let i = 2; i <= n; i++) {
    f.push((f[i - 1] + f[i - 2]))
  }
  return f[n]
}
console.log(fib(5))