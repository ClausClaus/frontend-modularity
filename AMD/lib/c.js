define(function () {
  console.log('c 模块');
  const add = (a, b) => {
    const result = a + b;
    console.log('c模块的a + b :>> ', result);
    return result;
  };

  return {
    add,
  };
});
