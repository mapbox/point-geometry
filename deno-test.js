import { assert, fail, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Point } from "./Point.js";

Deno.test('.convert', (t) => {
    assert(Point.convert(new Point(20, 30)).equals(new Point(20, 30)));
    assert(Point.convert([20, 30]).equals(new Point(20, 30)));
    assertEquals(Point.convert('somestring'), 'somestring');
});
// vector operations
Deno.test('#mag', (t) => {
    Deno.test('gets the magnitude of a vector', function () {
        assertEquals(new Point(0, 2).mag(), 2);
        assertEquals(new Point(0, 0).mag(), 0);
        assertEquals(new Point(10, 0).mag(), 10);
        
    });
});
Deno.test('#unit', (t) => {
    Deno.test('calculates the unit vector', function () {
        assertEquals(new Point(0, 1000).unit(), new Point(0, 1));
        
    });
});
Deno.test('#equals', (t) => {
    assertEquals((new Point(0, 0).equals(new Point(0, 0))), true, 'equal');
    assertEquals((new Point(0, 0).equals(new Point(0, 10))), false, 'not equal');
    
});
Deno.test('#dist', (t) => {
    assertEquals((new Point(0, 10).dist(new Point(0, 0))), 10);
    assertEquals((new Point(Math.sqrt(2), Math.sqrt(2)).dist(new Point(0, 0))), 2);
    assertEquals((new Point(0, 0).dist(new Point(0, 0))), 0);
    
});
Deno.test('#mult', (t) => {
    assertEquals((new Point(0, 0).mult(5)).equals(new Point(0, 0)), true);
    assertEquals((new Point(0, 1).mult(5)).equals(new Point(0, 5)), true);
    assertEquals((new Point(1, 1).mult(5)).equals(new Point(5, 5)), true);
    
});
Deno.test('#div', (t) => {
    assertEquals((new Point(0, 0).div(5)).equals(new Point(0, 0)), true);
    assertEquals((new Point(0, 1).div(5)).equals(new Point(0, 1 / 5)), true);
    assertEquals((new Point(1, 1).div(5)).equals(new Point(1 / 5, 1 / 5)), true);
    
});
Deno.test('#multByPoint', (t) => {
    assertEquals((new Point(0, 0).multByPoint(new Point(5, 5))).equals(new Point(0, 0)), true);
    assertEquals((new Point(0, 1).multByPoint(new Point(5, 5))).equals(new Point(0, 5)), true);
    assertEquals((new Point(1, 1).multByPoint(new Point(4, 5))).equals(new Point(4, 5)), true);
    
});
Deno.test('#divByPoint', (t) => {
    assertEquals((new Point(0, 0).divByPoint(new Point(5, 5))).equals(new Point(0, 0)), true);
    assertEquals((new Point(0, 1).divByPoint(new Point(5, 5))).equals(new Point(0, 1 / 5)), true);
    assertEquals((new Point(1, 1).divByPoint(new Point(4, 5))).equals(new Point(1 / 4, 1 / 5)), true);
    
});
Deno.test('#rotate', (t) => {
    assert((new Point(0, 0).rotate(0)).equals(new Point(0, 0)));
    assertEquals((new Point(0, 1).rotate(Math.PI / 2)).round(), new Point(-1, 0));
    assertEquals((new Point(0, 1).rotate(Math.PI)).round(), new Point(-0, -1));
});
Deno.test('#rotateAround', (t) => {
    assertEquals((new Point(2, 3).rotateAround(Math.PI / 2, new Point(2, 2))).round(), new Point(1, 2));
    assertEquals((new Point(2, 3).rotateAround(Math.PI, new Point(2, 2))).round(), new Point(2, 1));
    
});
Deno.test('#round', (t) => {
    assertEquals((new Point(0, 0).round()).equals(new Point(0, 0)), true);
    assertEquals((new Point(0, 0.5).round()).equals(new Point(0, 1)), true);
    assertEquals((new Point(0.2, 0.2).round()).equals(new Point(0, 0)), true);
    
});
Deno.test('#angle', (t) => {
    assertEquals((new Point(0, 0).angle()), 0);
    assertEquals((new Point(10, 10).angle()), Math.PI / 4);
    assertEquals((new Point(0, 10).angle()), Math.PI / 2);
    assertEquals((new Point(10, 0).angle()), 0);
    
});
Deno.test('#angleTo', (t) => {
    var b = new Point(0, 0);
    assertEquals((new Point(0, 0).angleTo(b)), 0);
    assertEquals((new Point(10, 10).angleTo(b)), Math.PI / 4);
    assertEquals((new Point(0, 10).angleTo(b)), Math.PI / 2);
    assertEquals((new Point(10, 0).angleTo(b)), 0);
    
});
Deno.test('#angleWith', (t) => {
    var b = new Point(0, 0);
    assertEquals((new Point(0, 0).angleWith(b)), 0);
    assertEquals((new Point(10, 10).angleWith(b)), 0);
    assertEquals((new Point(0, 10).angleWith(b)), 0);
    assertEquals((new Point(10, 0).angleWith(b)), 0);
    
});
Deno.test('#angleWithSep', (t) => {
    assertEquals((new Point(0, 0).angleWithSep(0, 0)), 0);
    assertEquals((new Point(10, 10).angleWithSep(0, 0)), 0);
    assertEquals((new Point(0, 10).angleWithSep(0, 0)), 0);
    assertEquals((new Point(10, 0).angleWithSep(0, 0)), 0);
    
});
Deno.test('#matMult', (t) => {
    assertEquals((new Point(0, 0).matMult([0, 0, 0, 0])).equals(new Point(0, 0)), true);
    assertEquals((new Point(1, 1).matMult([0, 0, 0, 0])), new Point(0, 0));
    assertEquals((new Point(1, 1).matMult([1, 0, 1, 0])), new Point(1, 1));
    assertEquals((new Point(1, 1).matMult([1, 0, 0, 0])), new Point(1, 0));
    assertEquals((new Point(1, 1).matMult([0, 0, 1, 0])), new Point(0, 1));
    assertEquals((new Point(1, 1).matMult([0, 0, 1, 2])), new Point(0, 3));
    assertEquals((new Point(1, 1).matMult([1, 1, 1, 1])), new Point(2, 2));
    
});
Deno.test('#perp', (t) => {
    Deno.test('calculates a vector perpendicular to the given vector', function () {
        t.deepEqual(new Point(0, 1000).perp(), new Point(-1000, 0));
        
    });
});
Deno.test('#add', (t) => {
    Deno.test('adds two vectors', function () {
        t.deepEqual(new Point(0, 0).add(new Point(10, 10)), new Point(10, 10));
        
    });
});
Deno.test('#sub', (t) => {
    Deno.test('adds subtracts a vector from another', function () {
        t.deepEqual(new Point(0, 0).sub(new Point(10, 10)), new Point(-10, -10));
        
    });
});
