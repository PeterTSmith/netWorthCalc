import { getAssetValues } from '../api/netWorthApi.js';

export function retrieveAssetValues (activeDocId) {
    return async function(deploy) {
        let req = await getAssetValues(activeDocId);

        deploy({
            type: 'RETRIEVE_ASSET_VALUES',
            payload: {
                serverValues: req.data
            }
        });
    }
}