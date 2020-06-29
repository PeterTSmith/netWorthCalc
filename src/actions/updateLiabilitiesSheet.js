export function updateLiabilitiesSheet(newRow) {
    return {
        type: 'UPDATE_LIABILITIES_SHEET',
        payload: newRow
    }
}