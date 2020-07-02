import { getNetWorthValue } from '../api/netWorthApi.js';

export function retrieveNetWorthValue(activeDocId) {
    return async function(deploy) {
        let req = await getNetWorthValue(activeDocId);

        deploy({
            type: 'RETRIEVE_NET_WORTH_VALUE',
            payload: {
                serverValue: req.data
            }
        });
    }
}