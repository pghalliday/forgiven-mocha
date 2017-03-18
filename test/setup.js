// assertions
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.should();
global.expect = chai.expect;
global.sinon = sinon;

// forgiven
import {
  create,
} from 'forgiven';
import {
  mocha,
} from '../src';
global.given = create(mocha);
