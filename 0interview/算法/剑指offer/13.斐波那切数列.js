function fib(n) {
  f = [0, 1]
  for (let i = 2; i <= n; i++) {
    f.push(f[n - 1] + f[n - 2])
  }
  return f[n]
}