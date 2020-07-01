import { getAssetsSheet } from '../api/netWorthApi.js';

export function retrieveAssetsSheet(newField) {
    return async function(deploy){
        let req = await getAssetsSheet();

        deploy({
            type: 'RETRIEVE_ASSETS_SHEET',
            payload: {
                serverSheet: req.data
            }
        });
    }
}