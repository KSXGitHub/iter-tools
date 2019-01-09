import map from './map'
import range from './range'
import permutations from './permutations'
import ensureIterable from './internal/ensure-iterable'
import factorial from './internal/factorial'

function isSorted (arr) {
  if (arr.length < 2) return true

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false
    }
  }
  return true
}

export default function combinations (iterable, r) {
  const arr = Array.from(ensureIterable(iterable))
  const len = arr.length
  r = typeof r === 'undefined' ? len : r
  return {
    * [Symbol.iterator] () {
      const mapToIndex = map((i) => arr[i])

      for (let indices of permutations(range(len), r)) {
        if (isSorted(indices)) {
          yield Array.from(mapToIndex(indices))
        }
      }
    },
    get length () {
      if (len === 0 || r === 0 || r > len) return 0
      return factorial(len) / (factorial(r) * factorial(len - r))
    }
  }
}
