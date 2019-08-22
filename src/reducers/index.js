import { combineReducers } from 'redux';


function itemsHasErrored(state = {}, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export default combineReducers({
    gameData: itemsHasErrored,
});
