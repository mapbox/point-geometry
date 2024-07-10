/**
 * A standalone point geometry with useful accessor, comparison, and
 * modification methods.
 *
 * @example
 * const point = new Point(-77, 38);
 */
export default class Point {
    /**
     * Construct a point from an array if necessary, otherwise if the input
     * is already a Point, or an unknown type, return it unchanged
     * @param {[number, number] | Point} a any kind of input value
     * @return {Point} constructed point, or passed-through value.
     * @example
     * // this
     * var point = Point.convert([0, 1]);
     * // is equivalent to
     * var point = new Point(0, 1);
     */
    static convert(a: [number, number] | Point): Point;
    /**
     * @param {number} x the x-coordinate. This could be longitude or screen pixels, or any other sort of unit.
     * @param {number} y the y-coordinate. This could be latitude or screen pixels, or any other sort of unit.
     */
    constructor(x: number, y: number);
    x: number;
    y: number;
    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @return {Point} the clone
     */
    clone(): Point;
    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    add(p: Point): Point;
    /**
     * Subtract this point's x & y coordinates to from point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    sub(p: Point): Point;
    /**
     * Multiply this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    multByPoint(p: Point): Point;
    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    divByPoint(p: Point): Point;
    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {number} k factor
     * @return {Point} output point
     */
    mult(k: number): Point;
    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {number} k factor
     * @return {Point} output point
     */
    div(k: number): Point;
    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {number} a angle to rotate around, in radians
     * @return {Point} output point
     */
    rotate(a: number): Point;
    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} output point
     */
    rotateAround(a: number, p: Point): Point;
    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {[number, number, number, number]} m transformation matrix
     * @return {Point} output point
     */
    matMult(m: [number, number, number, number]): Point;
    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} unit vector point
     */
    unit(): Point;
    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} perpendicular point
     */
    perp(): Point;
    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @return {Point} rounded point
     */
    round(): Point;
    /**
     * Return the magnitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return {number} magnitude
     */
    mag(): number;
    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @return {boolean} whether the points are equal
     */
    equals(other: Point): boolean;
    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @return {number} distance
     */
    dist(p: Point): number;
    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @return {number} distance
     */
    distSqr(p: Point): number;
    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @return {number} angle
     */
    angle(): number;
    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @return {number} angle
     */
    angleTo(b: Point): number;
    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @return {number} angle
     */
    angleWith(b: Point): number;
    /**
     * Find the angle of the two vectors, solving the formula for
     * the cross product a x b = |a||b|sin(θ) for θ.
     * @param {number} x the x-coordinate
     * @param {number} y the y-coordinate
     * @return {number} the angle in radians
     */
    angleWithSep(x: number, y: number): number;
    /** @param {[number, number, number, number]} m */
    _matMult(m: [number, number, number, number]): this;
    /** @param {Point} p */
    _add(p: Point): this;
    /** @param {Point} p */
    _sub(p: Point): this;
    /** @param {number} k */
    _mult(k: number): this;
    /** @param {number} k */
    _div(k: number): this;
    /** @param {Point} p */
    _multByPoint(p: Point): this;
    /** @param {Point} p */
    _divByPoint(p: Point): this;
    _unit(): this;
    _perp(): this;
    /** @param {number} angle */
    _rotate(angle: number): this;
    /**
     * @param {number} angle
     * @param {Point} p
     */
    _rotateAround(angle: number, p: Point): this;
    _round(): this;
}
