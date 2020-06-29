export function updateAssetsSheet(newRow) {
    return {
        type: 'UPDATE_ASSETS_SHEET',
        payload: newRow
    };
}