import { getAssetsSheet } from '../api/netWorthApi.js';

export function updateAssetsSheet(newField) {
    return async function(deploy){
        let req = await getAssetsSheet();

        deploy({
            type: 'UPDATE_ASSETS_SHEET',
            payload: {
                newField: newField,
                serverSheet: req.data
            }
        });
    }
}