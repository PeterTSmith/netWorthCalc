import { postAssetValues } from '../api/netWorthApi.js';

export function updateAssetValues(valueUpdate) {
    return async function(deploy) {
        await postAssetValues({
            id: valueUpdate.id,
            value: valueUpdate.valueChange.newVal,
            dateModified: valueUpdate.dateModified
        });

        deploy({
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: valueUpdate
            }
        });
    }
}