import { getLiabilityValues } from '../api/netWorthApi.js';

export function retrieveLiabilityValues() {
    return async function(deploy){
        let req = await getLiabilityValues();

        deploy({
            type: 'RETRIEVE_LIABILITY_VALUES',
            payload: {
                serverValues: req.data
            }
        });
    }
}