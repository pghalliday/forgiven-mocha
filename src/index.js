function getFunction(base, {pending, only}) {
  if (pending) {
    return base.skip;
  } else if (only) {
    return base.only;
  }
  return base;
}

function setup({
  description,
  beforeEach: beforeEachCallback,
  afterEach: afterEachCallback,
  pending,
  only,
}, callback) {
  getFunction(describe, {pending, only})(description, () => {
    if (beforeEachCallback) {
      beforeEach(beforeEachCallback);
    }
    if (afterEachCallback) {
      afterEach(afterEachCallback);
    }
    callback(
      setup,
      test,
    );
  });
}

function test({description, test, pending, only}) {
  getFunction(it, {pending, only})(description, test);
}

export function mocha(params, callback) {
  return () => {
    setup(params, callback);
  };
}
