import createListFruits from './createListFruits';

export default function createGameData() {
  const quantityFruitInBox = 3;
  const quantityBox = 10;
  const quantityBoxPlaces = 12;
  const listFruits = createListFruits();
  var gameData = [];
  var temp = [];
  for (let i = 0; i < quantityBoxPlaces * quantityFruitInBox; i++) {
    listFruits[i] ? temp.push({'busy' : true, 'id' : 'fruitId_' + i, 'type' : listFruits[i]})
                  : temp.push({'busy' : false, 'id' : 'fruitId_' +  i, 'type' : ''});
    if (temp.length >= quantityFruitInBox &&
        i <= quantityFruitInBox * quantityBox) {
      gameData.push(({'busy' : true, 'id' : (i-2)/3, 'fruits' : temp}));
      temp = [];
    }
    if (temp.length >= quantityFruitInBox &&
        i > quantityFruitInBox * quantityBox) {
      gameData.push(({'busy' : false, 'id' : (i-2)/3, 'fruits' : temp}));
      temp = [];
    }
  }
  return {'gameData' : gameData};
}
