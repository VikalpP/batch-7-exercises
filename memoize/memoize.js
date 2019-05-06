
const memoize = (fn,unused) => {
  debugger;
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) { 
      return cache[n];
    } 
    else { 
      let result = fn(n);
      cache[n] = result; 
      return result;
    }
  }
}

export {
  memoize,
};
