define(function () {
  console.log('a 模块');
  const add = (a, b) => {
    const result = a + b;
    console.log('a模块的a + b :>> ', result);
    return result;
  };

  return {
    add,
  };
});
