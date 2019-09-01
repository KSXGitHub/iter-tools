/**
 * @generated-from ./regexp-exec-iter.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { GeneratorIterator } from '../../../internal/iterable';
import { regexpExecIter, toArray } from '../../..';
describe('regexpExecIter', () => {
  const getMatchesArray = (iter: GeneratorIterator<string>) =>
    toArray(iter).map(matches => matches[0]);

  it('should exec 1', () => {
    const re = /a+/g;
    const iter = regexpExecIter(re, ['aa', 'ba', 'cac']);
    expect(getMatchesArray(iter)).toEqual(['aa', 'a', 'a']);
  });
  it('should exec 2', () => {
    const re = /ca+t/g;
    const iter = regexpExecIter(re, ['caat', 'ca', 'dogcat']);
    expect(getMatchesArray(iter)).toEqual(['caat', 'cat']);
  });
  it('should exec 3', () => {
    const re = /ca+t/g;
    const iter = regexpExecIter(re, ['caa', 'a', 'tdogca', 't']);
    expect(getMatchesArray(iter)).toEqual(['caaat', 'cat']);
  });
  it('should exec 4', () => {
    const re = /ca+t/g;
    const iter = regexpExecIter(re, ['caa', 'a', 'tdogca', 'tcatx']);
    expect(getMatchesArray(iter)).toEqual(['caaat', 'cat', 'cat']);
  });
  it('can be curried', () => {
    const re = /a+/g;
    const aRE = regexpExecIter(re);
    const iter = aRE(['aa', 'ba', 'cac']);
    expect(getMatchesArray(iter)).toEqual(['aa', 'a', 'a']);
  });
  it('should exec (nothing to exec)', () => {
    const re = /a+/g;
    const iter = regexpExecIter(re, ['xbsd']);
    expect(getMatchesArray(iter)).toEqual([]);
  });
  it('should exec (no iterables)', () => {
    const re = /a+/g;
    const iter = regexpExecIter(re, null);
    expect(getMatchesArray(iter)).toEqual([]);
  });
});