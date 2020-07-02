import { getLiabilityValues } from '../api/netWorthApi.js';

export function retrieveLiabilityValues(activeDocId) {
    return async function(deploy){
        let req = await getLiabilityValues(activeDocId);

        deploy({
            type: 'RETRIEVE_LIABILITY_VALUES',
            payload: {
                serverValues: req.data
            }
        });
    }
}