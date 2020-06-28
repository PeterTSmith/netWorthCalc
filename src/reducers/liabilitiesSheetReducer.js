import { getLiabilitiesSheet, getLiabilityValues } from '../api/netWorthApi.js';

export function liabilitiesSheetReducer(state = undefined, action) {
    if(!state){
        let initialState = getLiabilitiesSheet();
        let initialValues = getLiabilityValues();
        for(let list of initialState.lists) {
            list.items.map(function(item) {
                item.value = undefined;
                for(let initialValue of initialValues){
                    if(item.id === initialValue.id) {
                        item.value = initialValue.value;
                    }
                }
            });
        }
        return initialState;
    }
    if(action.type === 'UPDATE_LIABILITIES_SHEET'){
        return state;
    } else {
        return state;
    }
}