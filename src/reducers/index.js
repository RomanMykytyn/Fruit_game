import { combineReducers } from 'redux';


function gameData(state = [], action) {
    switch (action.type) {
        case 'GAME_UPDATE':
            return action.gameData;

        default:
            return state;
    }
}

export default combineReducers({
    gameData: gameData
});
