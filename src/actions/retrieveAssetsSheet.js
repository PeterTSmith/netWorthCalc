import { getAssetsSheet } from '../api/netWorthApi.js';

export function retrieveAssetsSheet(activeDocId) {
    return async function(deploy){
        let req = await getAssetsSheet(activeDocId);

        deploy({
            type: 'RETRIEVE_ASSETS_SHEET',
            payload: {
                serverSheet: req.data
            }
        });
    }
}