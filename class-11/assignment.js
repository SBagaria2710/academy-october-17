function cachingFunction(complexCalculation) {
  // Modify this cache object and store data in the arg
  // also perform the complexCalculation on the arg
  window.cache = {};

  // Implement the closure-based caching mechanism here
  return function (arg) {
    if (window.cache[arg]) {
      return window.cache[arg];
    } else {
      const val = complexCalculation(arg);
      window.cache[arg] = val;
      return val;
    }
  };
}

function multiplyBy2(arg) {
  return arg * 2;
}

const cachedMultiplyBy2 = cachingFunction(multiplyBy2);
multiplyBy2(4); // 8 (multiplyBy2 execution)
multiplyBy2(4); // 8 (multiplyBy2 execution)

cachedMultiplyBy2(5); // 10 (multiplyBy2 execution)
cachedMultiplyBy2(10); // 20 (multiplyBy2 execution)
cachedMultiplyBy2(5); // 10 (From memory i.e, window.cache)
cachedMultiplyBy2(10); // 20 (From memory i.e, window.cache)
