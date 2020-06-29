export function updateLiabilityValues(newValue) {
    return {
        type: 'UPDATE_LIABILITY_VALUES',
        payload: newValue
    }
}