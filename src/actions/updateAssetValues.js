import { postAssetValues } from '../api/netWorthApi.js';

export function updateAssetValues(docId, valueUpdate) {
    return async function(deploy) {
        let newValue = {
            docId: docId,
            fieldId: valueUpdate.id,
            value: valueUpdate.valueChange.newVal,
            valueType: "asset",
            dateModified: valueUpdate.dateModified
        };
        await postAssetValues(docId, newValue);

        deploy({
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: valueUpdate
            }
        });
    }
}