export function assetValuesReducer(state={}, action) {
    if(action.type === 'UPDATE_ASSET_VALUES') {
        let newState = {...state};
        newState[action.payload.id] = action.payload.value;
        return newState;
    } else {
        return state;
    }
}