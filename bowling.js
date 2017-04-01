/*jshint esversion: 6*/



module.exports = (scores) => {
  var strike = false;
  var spare = false;
  var ten = false;
  var score = 0;
  if (Array.isArray(scores) !== true) {
    return false;
  } else if (scores.length !== 10) {
    return false;
  } else {
    for (var frame = 0; frame < scores.length; frame++) {
      if (Array.isArray(scores[frame]) !== true) {
        return false;
      } else if (frame < 9 && scores[frame].length > 2) {
        return false;
      } else if (frame > 10) {
        return false;
      } else if (frame === 9 && scores[frame].length > 3) {
        return false;
      } else {
        if (scores[frame][0] < 10 && scores[frame][1] < 10 && scores[frame][0] + scores[frame][1] > 10) {
        return false;
        } else if (frame < 9 && scores[frame][0] === 10 && scores[frame][1] !== undefined) {
          return false;
        } else if (frame < 9 && scores[frame][0] === 10) {
          ten = true;
          score += 10;
        } else if (frame <= 9 && scores[frame][0] === 0 && scores[frame][1] === 0) {
          score += 0;
        } else if (frame === 9 && scores[frame][0] === 10 && scores[frame][1] === 10) {
          score += 20;
        } else if (frame === 9 && scores[frame][0] === 10 && scores[frame][1] !== 10) {
          score += scores[frame][0];
          score += scores[frame][1];
          ten = false;
        } else if (frame === 9 && scores[frame][0] !== 10 && scores[frame][1] === 10) {
          score += scores[frame][0];
          score += scores[frame][1];
          ten = false;
        } else if (scores[frame][0] < 10 && scores[frame][1] < 10 && scores[frame][0] + scores[frame][1] <= 10) {
          score += scores[frame][0];
          score += scores[frame][1];
        }
      }
      for (var k = 0, b = scores[frame]; k < b.length; k++) {
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
var wat = module.exports([[10], [10], [10], [1, 1], [10], [10], [10], [10], [10], [10, 10]]);
console.log(wat);