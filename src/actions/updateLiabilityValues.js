import { postLiabilityValues } from '../api/netWorthApi.js';

export function updateLiabilityValues(valueUpdate) {
    return async function(deploy) {
        await postLiabilityValues({
            id: valueUpdate.id,
            value: valueUpdate.valueChange.newVal,
            dateModified: valueUpdate.dateModified
        });

        deploy({
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: valueUpdate
            }
        });
    };
}