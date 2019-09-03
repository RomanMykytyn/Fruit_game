export function gameOver(data) {
  const totalShelf = 4;
  const totalBox = 12;
  var error = 0;
  for (let i = 0; i < totalShelf; i++) {
    var result = [];
    for (let j = (totalBox / totalShelf) * i; j <= ((totalBox / totalShelf) * (i + 1) - 1); j++) {
      for (let n = 0; n < data[j].fruits.length; n++) {
        if ( data[j].fruits[n].busy &&
             data[j].busy ) {
          result.push(data[j].fruits[n].type);
        }
        else {
          result.push('');
        }
      }
    }
    if ( !resultIsGood(result) ) {
      error++;
    }
    if (error > 1) {
      return false;
    }
  }
  return true;
}

function resultIsGood(result) {
  const sample = [['sLemon', 'sLemon', 'sLemon', 'mLemon', 'mLemon', 'mLemon', 'lLemon', 'lLemon', 'lLemon'],
                  ['sKivi', 'sKivi', 'sKivi', 'mKivi', 'mKivi', 'mKivi', 'lKivi', 'lKivi', 'lKivi'],
                  ['sOrange', 'sOrange', 'sOrange', 'mOrange', 'mOrange', 'mOrange', 'lOrange', 'lOrange', 'lOrange']];
  for (let i = 0; i < sample.length; i++) {
    for (let j = 0; j < sample[i].length; j++) {
      if (sample[i][j] !== result[j]) {
        break;
      }
      if (j === 8) {
        return true;
      }
    }
  }
  return false;
}
