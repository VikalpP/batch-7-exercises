function counter() {
  var count = 1;
  return () => count++;
}

export { counter };
