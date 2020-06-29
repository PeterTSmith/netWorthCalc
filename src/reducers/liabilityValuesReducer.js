export function liabilityValuesReducer(state={}, action) {
    if(action.type === 'UPDATE_LIABILITY_VALUES') {
        let newState = {...state};
        newState[action.payload.id] = action.payload.value;
        return newState;
    } else {
        return state;
    }
}