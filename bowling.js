/*jshint esversion: 6*/



module.exports = (a) => {
  var ten = true;
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
        var mem = 0;
        if (a[i][0] < 9 && a[i][0] + a[i][1] > 10) {
        return false;
        } else if (i < 9 && a[i][0] === 10) {
          ten = true;
          score += 10;
        } else if (a[i][0] < 10) {
          ten = false;
          score += a[i][0];
          score += a[i][1];
        } else if (i < 9 && a[i][0] === 0 && a[i][1] === 0) {
          score += 0;
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
  if (ten === true) {
    score += 190;
  }
  return score;
};
// var wat = module.exports([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10]]);
// console.log(wat);