/*jshint esversion: 6*/



module.exports = (a) => {
  var score = 0;
  if (Array.isArray(a) !== true) {
    return false;
  } else if (a.length !== 10) {
    return false;
  } else {
    for (var i = 0; i < a.length; i++) {
      if (Array.isArray(a[i]) !== true) {
        return false;
      } else if (i < 9 && a[i].length > 2) {
        return false;
      } else if (i > 10) {
        return false;
      } else if (i === 9 && a[i].length > 3) {
        return false;
      } else {
        if (a[i][0] < 9 && a[i][0] + a[i][1] > 10) {
        return false;
        } else if (i < 9 && a[i][0] === 10) {
          score += 10;
        } else if (i === 9 && a[i][0] ===10 && a[i][1] === 10) {
          score += 20;
        }
      }
      for (var k = 0, b = a[i]; k < b.length; k++) {
        if (typeof (b[k]) !== 'number' || b[k] === null || isNaN(b[k]) === true) {
          return false;
        }
      }
    }
  }
  if (score === 110) {
    score += 190;
  }
  return score;
};
// var wat = module.exports([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10]]);
// console.log(wat);