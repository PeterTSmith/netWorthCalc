import { getLiabilitiesSheet } from '../api/netWorthApi.js';

export function retrieveLiabilitiesSheet(newField) {
    return async function(deploy){
        let req = await getLiabilitiesSheet();

        deploy({
            type: 'RETRIEVE_LIABILITIES_SHEET',
            payload: {
                serverSheet: req.data
            }
        });
    }
}