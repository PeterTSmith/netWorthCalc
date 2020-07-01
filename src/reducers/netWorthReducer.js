export function netWorthReducer(state=0, action) {
    if(action.type === 'UPDATE_ASSET_VALUES'
    || action.type === 'UPDATE_LIABILITY_VALUES') {
        let prevVal = action.payload.valueUpdate.valueChange.prevVal;
        let newVal = action.payload.valueUpdate.valueChange.newVal;
    
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
    } else if(action.type === 'RETRIEVE_NET_WORTH_VALUE') {
        return action.payload.serverValue
    }

    return state;
}