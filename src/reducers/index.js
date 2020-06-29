import { combineReducers } from 'redux';
import { assetsSheetReducer } from './assetsSheetReducer.js';
import { assetValuesReducer } from './assetValuesReducer.js';
import { liabilitiesSheetReducer } from './liabilitiesSheetReducer.js';
import { liabilityValuesReducer } from './liabilityValuesReducer.js';

export default combineReducers({
    assetsSheet: assetsSheetReducer,
    assetValues: assetValuesReducer,
    liabilitiesSheet: liabilitiesSheetReducer,
    liabilityValues: liabilityValuesReducer
});