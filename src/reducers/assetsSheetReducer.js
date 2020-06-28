import { getAssetSheet } from '../api/netWorthApi.js';

export const assetsSheetReducer = (state = {}, action) => {
    if(action.type === 'UPDATE_ASSETS_SHEET'){
        return getAssetSheet();
    }else{
        return state;
    }
};