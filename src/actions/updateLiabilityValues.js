import { postLiabilityValues } from '../api/netWorthApi.js';

export function updateLiabilityValues(docId, valueUpdate) {
    return async function(deploy) {
        let newValue = {
            docId: docId,
            fieldId: valueUpdate.id,
            value: valueUpdate.valueChange.newVal,
            valueType: "liability",
            dateModified: valueUpdate.dateModified
        };
        await postLiabilityValues(docId, newValue);

        deploy({
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: valueUpdate
            }
        });
    };
}