const arr = [1, 2, 3, 4, 5];

// MAP
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    if (typeof cb != "function") {
      throw new TypeError(`${cb} is not a function`);
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
      result[i] = cb(this[i], i, this);
    }
    return result;
  };
}

// FILTER
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    if (typeof cb != "function") {
      throw new TypeError(`${cb} is not a function`);
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

// REDUCE
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initialValue = 0) {
    if (typeof cb != "function") {
      throw new TypeError(`${cb} is not a function`);
    }

    // Set the initial index and accumulator
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      acc = cb(acc, this[i], this);
    }
    return acc;
  };
}
