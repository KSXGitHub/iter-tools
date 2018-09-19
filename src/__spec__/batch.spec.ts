import assert from "static-type-assert";
import * as iter from "../index";

// sync, overload 1
assert<
  IterableIterator<[]>
>(iter.batch(0)([] as []));

assert<
  IterableIterator<[0, 1, 2]>
>(iter.batch(0)([0, 1, 2] as [0, 1, 2]));

assert<
  IterableIterator<number[]>
>(iter.batch(0)([0, 1, 2] as number[]));

assert<
  IterableIterator<string[]>
>(iter.batch(0)(""));

assert<
  IterableIterator<[]>
>(iter.batch(3)([] as []));

assert<
  IterableIterator<[0, 1]>
>(iter.batch(3)([0, 1] as [0, 1]));

assert<
  IterableIterator<[0, 1, 2]>
>(iter.batch(3)([0, 1, 2] as [0, 1, 2]));

assert<
  IterableIterator<[0, 1, 2] | [3, 4]>
>(iter.batch(3)([0, 1, 2, 3, 4] as [0, 1, 2, 3, 4]));

assert<
  IterableIterator<[0, 1, 2] | [3, 4, 5]>
>(iter.batch(3)([0, 1, 2, 3, 4, 5] as [0, 1, 2, 3, 4, 5]));

assert<
  IterableIterator<number[]>
>(iter.batch(3)([0, 1, 2] as number[]));

assert<
  IterableIterator<string[]>
>(iter.batch(3)(""));

assert<
  IterableIterator<[]>
>(iter.batch(0)([] as []));

assert<
  IterableIterator<[0, 1, 2]>
>(iter.batch(0)([0, 1, 2] as [0, 1, 2]));

assert<
  IterableIterator<number[]>
>(iter.batch(0)([0, 1, 2] as number[]));

assert<
  IterableIterator<string[]>
>(iter.batch(0)(""));

// sync, overload 2
assert<
  IterableIterator<[]>
>(iter.batch(3, [] as []));

assert<
  IterableIterator<[0, 1]>
>(iter.batch(3, [0, 1] as [0, 1]));

assert<
  IterableIterator<[0, 1, 2]>
>(iter.batch(3, [0, 1, 2] as [0, 1, 2]));

assert<
  IterableIterator<[0, 1, 2] | [3, 4]>
>(iter.batch(3, [0, 1, 2, 3, 4] as [0, 1, 2, 3, 4]));

assert<
  IterableIterator<[0, 1, 2] | [3, 4, 5]>
>(iter.batch(3, [0, 1, 2, 3, 4, 5] as [0, 1, 2, 3, 4, 5]));

assert<
  IterableIterator<number[]>
>(iter.batch(3, [0, 1, 2] as number[]));

assert<
  IterableIterator<string[]>
>(iter.batch(3, ""));

// async, overload 1
assert<
  AsyncIterableIterator<[]>
>(iter.asyncBatch(0)([] as []));

assert<
  AsyncIterableIterator<[0, 1, 2]>
>(iter.asyncBatch(0)([0, 1, 2] as [0, 1, 2]));

assert<
  AsyncIterableIterator<number[]>
>(iter.asyncBatch(0)([0, 1, 2] as number[]));

assert<
  AsyncIterableIterator<string[]>
>(iter.asyncBatch(0)(""));

assert<
  AsyncIterableIterator<[]>
>(iter.asyncBatch(3)([] as []));

assert<
  AsyncIterableIterator<[0, 1]>
>(iter.asyncBatch(3)([0, 1] as [0, 1]));

assert<
  AsyncIterableIterator<[0, 1, 2]>
>(iter.asyncBatch(3)([0, 1, 2] as [0, 1, 2]));

assert<
  AsyncIterableIterator<[0, 1, 2] | [3, 4]>
>(iter.asyncBatch(3)([0, 1, 2, 3, 4] as [0, 1, 2, 3, 4]));

assert<
  AsyncIterableIterator<[0, 1, 2] | [3, 4, 5]>
>(iter.asyncBatch(3)([0, 1, 2, 3, 4, 5] as [0, 1, 2, 3, 4, 5]));

assert<
  AsyncIterableIterator<number[]>
>(iter.asyncBatch(3)([0, 1, 2] as number[]));

assert<
  AsyncIterableIterator<string[]>
>(iter.asyncBatch(3)(""));

// async, overload 2
assert<
  AsyncIterableIterator<[]>
>(iter.asyncBatch(0, [] as []));

assert<
  AsyncIterableIterator<[0, 1, 2]>
>(iter.asyncBatch(0, [0, 1, 2] as [0, 1, 2]));

assert<
  AsyncIterableIterator<number[]>
>(iter.asyncBatch(0, [0, 1, 2] as number[]));

assert<
  AsyncIterableIterator<string[]>
>(iter.asyncBatch(0, ""));

assert<
  AsyncIterableIterator<[]>
>(iter.asyncBatch(3, [] as []));

assert<
  AsyncIterableIterator<[0, 1]>
>(iter.asyncBatch(3, [0, 1] as [0, 1]));

assert<
  AsyncIterableIterator<[0, 1, 2]>
>(iter.asyncBatch(3, [0, 1, 2] as [0, 1, 2]));

assert<
  AsyncIterableIterator<[0, 1, 2] | [3, 4]>
>(iter.asyncBatch(3, [0, 1, 2, 3, 4] as [0, 1, 2, 3, 4]));

assert<
  AsyncIterableIterator<[0, 1, 2] | [3, 4, 5]>
>(iter.asyncBatch(3, [0, 1, 2, 3, 4, 5] as [0, 1, 2, 3, 4, 5]));

assert<
  AsyncIterableIterator<number[]>
>(iter.asyncBatch(3, [0, 1, 2] as number[]));

assert<
  AsyncIterableIterator<string[]>
>(iter.asyncBatch(3, ""));
