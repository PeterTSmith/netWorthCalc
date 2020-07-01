export function updateLiabilitiesSheet(newField) {
    return {
        type: 'UPDATE_LIABILITIES_SHEET',
        payload: {
            newField: newField
        }
    };
}