import { getTotalAssetValue } from '../api/netWorthApi.js';

export function retrieveTotalAssetValue(activeDocId) {
    return async function(deploy) {
        let req = await getTotalAssetValue(activeDocId);

        deploy({
            type: 'RETRIEVE_TOTAL_ASSET_VALUE',
            payload: {
                serverValue: req.data
            }
        });
    }
}