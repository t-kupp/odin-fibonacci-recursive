function fibs(num) {
  let f0 = 0;
  let f1 = 1;
  let fibonaccis = [];

  for (let i = 0; i < num; i++) {
    fibonaccis.push(f0);
    let f3 = f0 + f1;
    f0 = f1;
    f1 = f3;
  }
  return fibonaccis;
}
