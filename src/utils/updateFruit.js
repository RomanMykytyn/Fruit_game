export function updateFruit(oldPos, newPos, specieFruit, data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].fruits.length; j++) {
      if (data[i].fruits[j].id === oldPos) {
        data[i].fruits[j].busy = false;
      }
      if (data[i].fruits[j].id === newPos) {
        data[i].fruits[j].busy = true;
        data[i].fruits[j].type = specieFruit;
      }
    }
  }
  return data;
}
