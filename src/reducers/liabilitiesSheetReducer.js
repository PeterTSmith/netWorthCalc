import { getLiabilitiesSheet } from '../api/netWorthApi.js';

export const liabilitiesSheetReducer = (state = {}, action) => {
    if(action.type === 'UPDATE_LIABILITIES_SHEET'){
        return getLiabilitiesSheet();
    }else{
        return state;
    }
}