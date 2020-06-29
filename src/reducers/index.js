import { combineReducers } from 'redux';
import { assetsSheetReducer } from './assetsSheetReducer.js';
import { assetValuesReducer } from './assetValuesReducer.js';
import { totalAssetsReducer } from './totalAssetsReducer.js';
import { liabilitiesSheetReducer } from './liabilitiesSheetReducer.js';
import { liabilityValuesReducer } from './liabilityValuesReducer.js';
import { totalLiabilitiesReducer } from './totalLiabilitiesReducer.js';
import { netWorthReducer } from './netWorthReducer.js';

export default combineReducers({
    assetsSheet: assetsSheetReducer,
    assetValues: assetValuesReducer,
    totalAssets: totalAssetsReducer,
    liabilitiesSheet: liabilitiesSheetReducer,
    liabilityValues: liabilityValuesReducer,
    totalLiabilities: totalLiabilitiesReducer,
    netWorth: netWorthReducer 
});