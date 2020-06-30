import { getLiabilitiesSheet } from '../api/netWorthApi.js';

export function updateLiabilitiesSheet(newField) {
    return async function(deploy) {
        let req = await getLiabilitiesSheet();

        deploy({
            type: 'UPDATE_LIABILITIES_SHEET',
            payload: {
                newField: newField,
                serverSheet: req.data
            }
        });
    }
}