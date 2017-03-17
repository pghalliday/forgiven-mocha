import {
  mocha,
} from '../../src';

describe('forgiven-mocha', () => {
  it('should export the mocha ui factory', () => {
    mocha.should.be.ok;
  });

  // TODO: this is an initial import of something that was working
  // more integration tests need to be created
});
