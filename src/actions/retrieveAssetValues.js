import { getAssetValues } from '../api/netWorthApi.js';

export function retrieveAssetValues () {
    return async function(deploy) {
        let req = await getAssetValues();

        deploy({
            type: 'RETRIEVE_ASSET_VALUES',
            payload: {
                serverValues: req.data
            }
        });
    }
}