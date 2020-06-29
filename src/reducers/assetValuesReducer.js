export function assetValuesReducer(state={}, action) {
    if(action.type === 'UPDATE_ASSET_VALUES') {
        let newState = {...state};
        if(action.payload.value === ""){
            newState[action.payload.id] = 0;
        }else{
            newState[action.payload.id] = parseInt(action.payload.value);
        }
        return newState;
    } else {
        return state;
    }
}