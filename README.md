# @mapbox/point-geometry

[![build status](https://secure.travis-ci.org/mapbox/point-geometry.png)](http://travis-ci.org/mapbox/point-geometry)

a point geometry with transforms

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install @mapbox/point-geometry
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Point

A standalone point geometry with useful accessor, comparison, and
modification methods.

#### Parameters

-   `x` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the x-coordinate. this could be longitude or screen
    pixels, or any other sort of unit.
-   `y` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the y-coordinate. this could be latitude or screen
    pixels, or any other sort of unit.

#### Examples

```javascript
var point = new Point(-77, 38);
```

#### clone

Clone this point, returning a new point that can be modified
without affecting the old one.

Returns **[Point](#point)** the clone

#### add

Add this point's x & y coordinates to another point,
yielding a new point.

##### Parameters

-   `p` **[Point](#point)** the other point

Returns **[Point](#point)** output point

#### sub

Subtract this point's x & y coordinates to from point,
yielding a new point.

##### Parameters

-   `p` **[Point](#point)** the other point

Returns **[Point](#point)** output point

#### multByPoint

Multiply this point's x & y coordinates by point,
yielding a new point.

##### Parameters

-   `p` **[Point](#point)** the other point

Returns **[Point](#point)** output point

#### divByPoint

Divide this point's x & y coordinates by point,
yielding a new point.

##### Parameters

-   `p` **[Point](#point)** the other point

Returns **[Point](#point)** output point

#### mult

Multiply this point's x & y coordinates by a factor,
yielding a new point.

##### Parameters

-   `k` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** factor

Returns **[Point](#point)** output point

#### div

Divide this point's x & y coordinates by a factor,
yielding a new point.

##### Parameters

-   `k` **[Point](#point)** factor

Returns **[Point](#point)** output point

#### rotate

Rotate this point around the 0, 0 origin by an angle a,
given in radians

##### Parameters

-   `a` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** angle to rotate around, in radians

Returns **[Point](#point)** output point

#### rotateAround

Rotate this point around p point by an angle a,
given in radians

##### Parameters

-   `a` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** angle to rotate around, in radians
-   `p` **[Point](#point)** Point to rotate around

Returns **[Point](#point)** output point

#### matMult

Multiply this point by a 4x1 transformation matrix

##### Parameters

-   `m` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>** transformation matrix

Returns **[Point](#point)** output point

#### unit

Calculate this point but as a unit vector from 0, 0, meaning
that the distance from the resulting point to the 0, 0
coordinate will be equal to 1 and the angle from the resulting
point to the 0, 0 coordinate will be the same as before.

Returns **[Point](#point)** unit vector point

#### perp

Compute a perpendicular point, where the new y coordinate
is the old x coordinate and the new x coordinate is the old y
coordinate multiplied by -1

Returns **[Point](#point)** perpendicular point

#### round

Return a version of this point with the x & y coordinates
rounded to integers.

Returns **[Point](#point)** rounded point

#### mag

Return the magnitude of this point: this is the Euclidean
distance from the 0, 0 coordinate to this point's x and y
coordinates.

Returns **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** magnitude

#### equals

Judge whether this point is equal to another point, returning
true or false.

##### Parameters

-   `other` **[Point](#point)** the other point

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether the points are equal

#### dist

Calculate the distance from this point to another point

##### Parameters

-   `p` **[Point](#point)** the other point

Returns **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** distance

#### distSqr

Calculate the distance from this point to another point,
without the square root step. Useful if you're comparing
relative distances.

##### Parameters

-   `p` **[Point](#point)** the other point

Returns **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** distance

#### angle

Get the angle from the 0, 0 coordinate to this point, in radians
coordinates.

Returns **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** angle

#### angleTo

Get the angle from this point to another point, in radians

##### Parameters

-   `b` **[Point](#point)** the other point

Returns **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** angle

#### angleWith

Get the angle between this point and another point, in radians

##### Parameters

-   `b` **[Point](#point)** the other point

Returns **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** angle

#### convert

Construct a point from an array or point-like object if necessary, otherwise if the input
is already a Point, or an unknown type, return it unchanged

##### Parameters

-   `a` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)> | [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [Point](#point))** any kind of input value

##### Examples

```javascript
// this
var point = Point.convert([0, 1]);
// and this
var point = Point.convert({x: 0, y: 1});
// are equivalent to
var point = new Point(0, 1);
```

Returns **[Point](#point)** constructed point, or passed-through value.
