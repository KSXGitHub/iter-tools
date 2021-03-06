import iter from './iter'

const deprecationWarning = 'asyncIter() is deprecated! ' +
'If you were using it to cast a sync iterable to an async iterable, you should ' +
'use the new ensureAsyncIterable function instead. Otherwise it should be safe to remove the call.'
let warnedDeprecation = false
export const silence = () => (warnedDeprecation = true)

export default async function * asyncIter (iterable, ...args) {
  !warnedDeprecation && console.warn(deprecationWarning)
  warnedDeprecation = true

  if (iterable && iterable[Symbol.asyncIterator]) {
    yield * iterable
  } else {
    yield * iter(iterable)
  }
}
