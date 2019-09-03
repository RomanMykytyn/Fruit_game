export function updateBox(oldPos, newPos, data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == oldPos) {
      data[i].busy = false;
      var fruitsInBox = data[i].fruits;
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == newPos) {
      data[i].busy = true;
      data[i].fruits = fruitsInBox;
    }
  }
  return data;
}
