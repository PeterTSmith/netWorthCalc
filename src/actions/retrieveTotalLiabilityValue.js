import { getTotalLiabilityValue } from '../api/netWorthApi.js';

export function retrieveTotalLiabilityValue(activeDocId) {
    return async function(deploy) {
        let req = await getTotalLiabilityValue(activeDocId);

        deploy({
            type: 'RETRIEVE_TOTAL_LIABILITY_VALUE',
            payload: {
                serverValue: req.data
            }
        });
    }
}