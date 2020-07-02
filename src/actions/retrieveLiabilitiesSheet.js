import { getLiabilitiesSheet } from '../api/netWorthApi.js';

export function retrieveLiabilitiesSheet(activeDocId) {
    return async function(deploy){
        let req = await getLiabilitiesSheet(activeDocId);

        deploy({
            type: 'RETRIEVE_LIABILITIES_SHEET',
            payload: {
                serverSheet: req.data
            }
        });
    }
}