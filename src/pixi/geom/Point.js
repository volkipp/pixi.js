/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
 *
 * @class Point
 * @constructor
 * @param x {Number} position of the point on the x axis
 * @param y {Number} position of the point on the y axis
 * @param changed {Function} callback for if x or y change values
 */
PIXI.Point = function(x, y, changed)
{
    this._x = x || 0;
    this._y = y || 0;
    this.changed = changed;
};

/**
 * Creates a clone of this point
 *
 * @method clone
 * @return {Point} a copy of the point
 */
PIXI.Point.prototype.clone = function()
{
    return new PIXI.Point(this._x, this._y);
};

/**
 * Sets the point to a new x and y position.
 * If y is ommited, both x and y will be set to x.
 * 
 * @method set
 * @param [x=0] {Number} position of the point on the x axis
 * @param [y=0] {Number} position of the point on the y axis
 */
PIXI.Point.prototype.set = function(x, y)
{
    this.x = x || 0;
    this.y = y || ( (y !== 0) ? this.x : 0 ) ;
};

/**
 * @property x
 * @type Number
 * @default 0
 */
Object.defineProperty(PIXI.Point.prototype, 'x', {
    get: function() {
        return this._x;
    },
    set: function(value) {
        this._x = value;
        if (this.changed)
            this.changed();
    }
});

/**
 * @property y
 * @type Number
 * @default 0
 */
Object.defineProperty(PIXI.Point.prototype, 'y', {
    get: function() {
        return this._y;
    },
    set: function(value) {
        this._y = value;
        if (this.changed)
            this.changed();
    }
});

// constructor
PIXI.Point.prototype.constructor = PIXI.Point;