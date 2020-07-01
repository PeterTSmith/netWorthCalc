export function updateAssetsSheet(newField) {
    return {
        type: 'UPDATE_ASSETS_SHEET',
        payload: {
            newField: newField
        }
    };
}