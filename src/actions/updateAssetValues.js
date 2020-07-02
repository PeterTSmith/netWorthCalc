import { postAssetValues } from '../api/netWorthApi.js';

export function updateAssetValues(valueUpdate) {
    return async function(deploy) {
        let newValue = {
            docId: 0,
            fieldId: valueUpdate.id,
            value: valueUpdate.valueChange.newVal,
            valueType: "asset",
            dateModified: new Date().getTime()
        };
        await postAssetValues(newValue);

        deploy({
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: valueUpdate
            }
        });
    }
}