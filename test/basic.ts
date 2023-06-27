import { assert } from 'chai';
import { filter } from '../src';

describe('filter', () => {
  it('filter', () => {
    assert.deepEqual(filter.filter('一次性交纳百元').words, ['性交']);
    assert.deepEqual(filter.filter('三大全国性交易市场布局渝中').words, ['性交', '性交易']);
    assert.deepEqual(filter.filter('阿拉斯加遭强暴风雪袭击致XX人死亡').words, ['阿拉', '强暴']);
    assert.deepEqual(filter.filter('杭州市长春药店').words, ['春药']);
    assert.deepEqual(filter.filter('台湾国中学生').words, ['台湾', '台湾国']);
    assert.deepEqual(filter.filter('挑战中共创辉煌').words, ['中共']);
    assert.deepEqual(filter.filter('构造过程中共建造了 n-1 个节点').words, ['中共']);
    assert.deepEqual(filter.filter('北京八大处女孩被害案').words, ['八大', '处女']);
    assert.deepEqual(filter.filter('刚刚在楼梯口交了一个朋友').words, ['口交']);
  });

  it('not matching', () => {
    assert.deepEqual(filter.filter('一次性生活补助').words, []);
  });

  it('replace', () => {
    assert.equal(filter.filter('一次性交纳百元').text, '一次**纳百元');
    assert.equal(filter.filter('三大全国性交易市场布局渝中').text, '三大全国***市场布局渝中');
    assert.equal(filter.filter('阿拉斯加遭强暴风雪袭击致XX人死亡').text, '**斯加遭**风雪袭击致XX人死亡');
    assert.equal(filter.filter('杭州市长春药店').text, '杭州市长**店');
    assert.equal(filter.filter('台湾国中学生').text, '***中学生');
    assert.equal(filter.filter('挑战中共创辉煌').text, '挑战**创辉煌');
    assert.equal(filter.filter('构造过程中共建造了 n-1 个节点').text, '构造过程**建造了 n-1 个节点');
    assert.equal(filter.filter('北京八大处女孩被害案').text, '北京****孩被害案');
    assert.equal(filter.filter('刚刚在楼梯口交了一个朋友').text, '刚刚在楼梯**了一个朋友');
  });
});
