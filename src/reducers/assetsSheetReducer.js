import { getAssetsSheet, getAssetValues } from '../api/netWorthApi.js';

export function assetsSheetReducer(state = undefined, action) {
    if(!state){
        let initialState = getAssetsSheet();
        let initialValues = getAssetValues();
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
    if(action.type === 'UPDATE_ASSETS_SHEET') {
        return state;
    } else {
        return state;
    }
};