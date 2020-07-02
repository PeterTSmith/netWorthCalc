import { postLiabilityValues } from '../api/netWorthApi.js';

export function updateLiabilityValues(valueUpdate) {
    return async function(deploy) {
        let newValue = {
            docId: 0,
            fieldId: valueUpdate.id,
            value: valueUpdate.valueChange.newVal,
            valueType: "liability",
            dateModified: new Date().getTime()
        };
        await postLiabilityValues(newValue);

        deploy({
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: valueUpdate
            }
        });
    };
}