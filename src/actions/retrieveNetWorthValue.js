import { getNetWorthValue } from '../api/netWorthApi.js';

export function retrieveNetWorthValue () {
    return async function(deploy) {
        let req = await getNetWorthValue();

        deploy({
            type: 'RETRIEVE_NET_WORTH_VALUE',
            payload: {
                serverValue: req.data
            }
        });
    }
}