export function assetValuesReducer(state={}, action) {
    if(action.type === 'UPDATE_ASSET_VALUES') {
        let newVal = action.payload.valueChange.newVal;

        if(isNaN(newVal) || newVal === undefined){
            newVal = 0;
        }

        let newState = {...state};
        
        newState[action.payload.id] = parseInt(newVal);
        return newState;
    } else {
        return state;
    }
}