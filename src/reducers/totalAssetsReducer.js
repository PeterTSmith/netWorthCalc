export function totalAssetsReducer(state=0, action){
    if(action.type === 'UPDATE_ASSET_VALUES') {
        let prevVal = action.payload.valueUpdate.valueChange.prevVal;
        let newVal = action.payload.valueUpdate.valueChange.newVal;

        if(isNaN(prevVal) || prevVal === undefined){
            prevVal = 0;
        }

        if(isNaN(newVal) || newVal === undefined){
            newVal = 0;
        }

        let diff = newVal - prevVal;
        return state + diff;
    } else if(action.type === 'RETRIEVE_TOTAL_ASSET_VALUE') {
        return action.payload.serverValue;
    }
    return state;
}