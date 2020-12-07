define(function () {
  console.log('b 模块');
  const add = (a, b) => {
    const result = a + b;
    console.log('b模块的a + b :>> ', result);
    return result;
  };

  return {
    add,
  };
});
