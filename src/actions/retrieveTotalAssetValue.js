import { getTotalAssetValue } from '../api/netWorthApi.js';

export function retrieveTotalAssetValue () {
    return async function(deploy) {
        let req = await getTotalAssetValue();

        deploy({
            type: 'RETRIEVE_TOTAL_ASSET_VALUE',
            payload: {
                serverValue: req.data
            }
        });
    }
}