export function totalAssetsReducer(state=0, action){
    if(action.type === 'UPDATE_ASSET_VALUES') {
        let prevVal = action.payload.valueChange.prevVal;
        let newVal = action.payload.valueChange.newVal;

        if(isNaN(prevVal) || prevVal === undefined){
            prevVal = 0;
        }

        if(isNaN(newVal) || newVal === undefined){
            newVal = 0;
        }

        let diff = newVal - prevVal;
        return state + diff;
    }
    return state;
}