import { getTotalLiabilityValue } from '../api/netWorthApi.js';

export function retrieveTotalLiabilityValue () {
    return async function(deploy) {
        let req = await getTotalLiabilityValue();

        deploy({
            type: 'RETRIEVE_TOTAL_LIABILITY_VALUE',
            payload: {
                serverValue: req.data
            }
        });
    }
}