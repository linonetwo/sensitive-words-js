import { assert } from 'chai';
import { zhCN } from '../src';

describe('dict', () => {
  it('has words', () => {
    assert.deepEqual(zhCN.includes('性交'), true);
  });
});
