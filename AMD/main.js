requirejs.config({
  baseUrl:'./lib',
  paths: {
    'a': 'a',
    'b': 'b',
    'c': 'c',
  },
});

requirejs(['a', 'b', 'c'], function (A, B, C) {
  console.log('A :>> ', A);
  A.add(1,2);
  B.add(1,2);
  C.add(1,2);
});
