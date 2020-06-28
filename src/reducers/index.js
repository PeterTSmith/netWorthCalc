import { combineReducers } from 'redux';
import { assetsSheetReducer } from './assetsSheetReducer.js';
import { liabilitiesSheetReducer } from './liabilitiesSheetReducer.js';

export default combineReducers({
    assets: assetsSheetReducer,
    liabilities: liabilitiesSheetReducer
});