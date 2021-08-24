const sync = require('./sync');

test('[1,2,3],[1,2,3,4,5] should return [4,5]', () => {
    let answer = sync([1,2,3],[1,2,3,4,5]);
    expect(answer).toEqual([4,5]);
});