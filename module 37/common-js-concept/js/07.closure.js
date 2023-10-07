function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const result = stopWatch();
console.log(result());
