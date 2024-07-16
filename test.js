
import assert from 'node:assert/strict';
import test from 'node:test';
import Point from './index.js';

test('.convert', () => {
    assert.equal(Point.convert(new Point(20, 30)).equals(new Point(20, 30)), true);
    assert.equal(Point.convert([20, 30]).equals(new Point(20, 30)), true);
    assert.equal(Point.convert({x: 20, y: 30}).equals(new Point(20, 30)), true);
    assert.throws(() => Point.convert('somestring'));
});
test('#mag', () => {
    assert.equal(new Point(0, 2).mag(), 2);
    assert.equal(new Point(0, 0).mag(), 0);
    assert.equal(new Point(10, 0).mag(), 10);
});
test('#unit', () => {
    assert.deepEqual(new Point(0, 1000).unit(), new Point(0, 1));
});
test('#equals', () => {
    assert.equal((new Point(0, 0).equals(new Point(0, 0))), true, 'equal');
    assert.equal((new Point(0, 0).equals(new Point(0, 10))), false, 'not equal');
});
test('#dist', () => {
    assert.equal((new Point(0, 10).dist(new Point(0, 0))), 10);
    assert.equal((new Point(Math.sqrt(2), Math.sqrt(2)).dist(new Point(0, 0))), 2);
    assert.equal((new Point(0, 0).dist(new Point(0, 0))), 0);
});
test('#mult', () => {
    assert.equal((new Point(0, 0).mult(5)).equals(new Point(0, 0)), true);
    assert.equal((new Point(0, 1).mult(5)).equals(new Point(0, 5)), true);
    assert.equal((new Point(1, 1).mult(5)).equals(new Point(5, 5)), true);
});
test('#div', () => {
    assert.equal((new Point(0, 0).div(5)).equals(new Point(0, 0)), true);
    assert.equal((new Point(0, 1).div(5)).equals(new Point(0, 1 / 5)), true);
    assert.equal((new Point(1, 1).div(5)).equals(new Point(1 / 5, 1 / 5)), true);
});
test('#multByPoint', () => {
    assert.equal((new Point(0, 0).multByPoint(new Point(5, 5))).equals(new Point(0, 0)), true);
    assert.equal((new Point(0, 1).multByPoint(new Point(5, 5))).equals(new Point(0, 5)), true);
    assert.equal((new Point(1, 1).multByPoint(new Point(4, 5))).equals(new Point(4, 5)), true);
});
test('#divByPoint', () => {
    assert.equal((new Point(0, 0).divByPoint(new Point(5, 5))).equals(new Point(0, 0)), true);
    assert.equal((new Point(0, 1).divByPoint(new Point(5, 5))).equals(new Point(0, 1 / 5)), true);
    assert.equal((new Point(1, 1).divByPoint(new Point(4, 5))).equals(new Point(1 / 4, 1 / 5)), true);
});
test('#rotate', () => {
    assert.equal((new Point(0, 0).rotate(0)).equals(new Point(0, 0)), true);
    assert.deepEqual((new Point(0, 1).rotate(Math.PI / 2)).round(), new Point(-1, 0));
    assert.deepEqual((new Point(0, 1).rotate(Math.PI)).round(), new Point(-0, -1));
});
test('#rotateAround', () => {
    assert.deepEqual((new Point(2, 3).rotateAround(Math.PI / 2, new Point(2, 2))).round(), new Point(1, 2));
    assert.deepEqual((new Point(2, 3).rotateAround(Math.PI, new Point(2, 2))).round(), new Point(2, 1));
});
test('#round', () => {
    assert.equal((new Point(0, 0).round()).equals(new Point(0, 0)), true);
    assert.equal((new Point(0, 0.5).round()).equals(new Point(0, 1)), true);
    assert.equal((new Point(0.2, 0.2).round()).equals(new Point(0, 0)), true);
});
test('#angle', () => {
    assert.equal((new Point(0, 0).angle()), 0);
    assert.equal((new Point(10, 10).angle()), Math.PI / 4);
    assert.equal((new Point(0, 10).angle()), Math.PI / 2);
    assert.equal((new Point(10, 0).angle()), 0);
});
test('#angleTo', () => {
    const b = new Point(0, 0);
    assert.equal((new Point(0, 0).angleTo(b)), 0);
    assert.equal((new Point(10, 10).angleTo(b)), Math.PI / 4);
    assert.equal((new Point(0, 10).angleTo(b)), Math.PI / 2);
    assert.equal((new Point(10, 0).angleTo(b)), 0);
});
test('#angleWith', () => {
    const b = new Point(0, 0);
    assert.equal((new Point(0, 0).angleWith(b)), 0);
    assert.equal((new Point(10, 10).angleWith(b)), 0);
    assert.equal((new Point(0, 10).angleWith(b)), 0);
    assert.equal((new Point(10, 0).angleWith(b)), 0);
});
test('#angleWithSep', () => {
    assert.equal((new Point(0, 0).angleWithSep(0, 0)), 0);
    assert.equal((new Point(10, 10).angleWithSep(0, 0)), 0);
    assert.equal((new Point(0, 10).angleWithSep(0, 0)), 0);
    assert.equal((new Point(10, 0).angleWithSep(0, 0)), 0);
});
test('#matMult', () => {
    assert.equal((new Point(0, 0).matMult([0, 0, 0, 0])).equals(new Point(0, 0)), true);
    assert.deepEqual((new Point(1, 1).matMult([0, 0, 0, 0])), new Point(0, 0));
    assert.deepEqual((new Point(1, 1).matMult([1, 0, 1, 0])), new Point(1, 1));
    assert.deepEqual((new Point(1, 1).matMult([1, 0, 0, 0])), new Point(1, 0));
    assert.deepEqual((new Point(1, 1).matMult([0, 0, 1, 0])), new Point(0, 1));
    assert.deepEqual((new Point(1, 1).matMult([0, 0, 1, 2])), new Point(0, 3));
    assert.deepEqual((new Point(1, 1).matMult([1, 1, 1, 1])), new Point(2, 2));
});
test('#perp', () => {
    assert.deepEqual(new Point(0, 1000).perp(), new Point(-1000, 0));
});
test('#add', () => {
    assert.deepEqual(new Point(0, 0).add(new Point(10, 10)), new Point(10, 10));
});
test('#sub', () => {
    assert.deepEqual(new Point(0, 0).sub(new Point(10, 10)), new Point(-10, -10));
});
