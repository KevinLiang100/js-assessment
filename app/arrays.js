exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {return i;}
    }
    return -1;
  },

  sum: function(arr) {
    return _.reduce(arr, function(memo, value) {return memo + value;})
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    // return arr1.concat(arr2);
    var result = [];
    arr1.forEach(function(currentValue) {
      result.push(currentValue);
    });
    arr2.forEach(function(currentValue) {
      result.push(currentValue);
    });
    return result;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var counter = 0;
    arr.forEach(function(currentValue) {
      if (currentValue === item) {counter++;}
    });
    return counter;
  },

  // Requested to work for array of numbers only
  duplicates: function(arr) {
    var encountered = {};
    var result = [];
    arr.forEach(function(currentValue) {
      encountered[currentValue] = encountered[currentValue] + 1 || 1;
    });
    for (var key in encountered) {
      if (encountered[key] > 1) {
        result.push(Number(key));
      }
    }
    return result;
  },

  square: function(arr) {
    arr.forEach(function(currentValue, index, array) {
      array[index] *= currentValue;
    });
    return arr;
  },

  findAllOccurrences: function(arr, target) {

  }
};
