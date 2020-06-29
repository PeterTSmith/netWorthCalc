export function netWorthReducer(state=0, action) {
    if(action.type === 'UPDATE_ASSET_VALUES'
    || action.type === 'UPDATE_LIABILITY_VALUES') {
        let prevVal = action.payload.valueChange.prevVal;
        let newVal = action.payload.valueChange.newVal;
    
        if(isNaN(prevVal) || prevVal === undefined){
            prevVal = 0;
        }
    
        if(isNaN(newVal) || newVal === undefined){
            newVal = 0;
        }

        if(action.type === 'UPDATE_ASSET_VALUES'){
            return state + (newVal - prevVal)
        }else if(action.type === 'UPDATE_LIABILITY_VALUES'){
            return state - (newVal - prevVal)
        }
    }

    return state;
}