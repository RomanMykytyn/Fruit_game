import shuffle from './shuffle';

export default function createListFruits() {
  const listFruits = ['Kivi', 'Lemon', 'Orange'];
  const listFruitsSize = ['s', 'm', 'l'];
  var arrayFruits = [];
  for (let n = 0; n < listFruits.length; n++) {
    for (let i = 0; i < listFruits.length; i++) {
      for (let j = 0; j < listFruitsSize.length; j++) {
        arrayFruits.push(listFruitsSize[j] + listFruits[i]);
      }
    }
  }
  return shuffle(arrayFruits);
}
