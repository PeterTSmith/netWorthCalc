export function liabilityValuesReducer(state={}, action) {
    if(action.type === 'UPDATE_LIABILITY_VALUES') {
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