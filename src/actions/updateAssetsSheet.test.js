import { updateAssetsSheet } from "./updateAssetsSheet.js"

describe('updateAssetsSheet: Empty name', () => {
    it('should return a valid balanceSheetField', () => {
        let expectedAction = {
            type: 'UPDATE_ASSETS_SHEET',
            payload: {
                listTitle: "Cash and Investments", name: ""
            }
        };
        expect(updateAssetsSheet({
            listTitle: "Cash and Investments",
            name: ""
        })).toEqual(expectedAction);
    })
});

describe('updateAssetsSheet: Empty listTitle', () => {
    it('should return a valid balanceSheetField', () => {
        let expectedAction = {
            type: 'UPDATE_ASSETS_SHEET',
            payload: {
                listTitle: "", name: "My New Value"
            }
        };
        expect(updateAssetsSheet({
            listTitle: "",
            name: "My New Value"
        })).toEqual(expectedAction);
    })
});

describe('updateAssetsSheet: Empty listTitle, Empty name', () => {
    it('should return a valid balanceSheetField', () => {
        let expectedAction = {
            type: 'UPDATE_ASSETS_SHEET',
            payload: {
                listTitle: "", name: ""
            }
        };
        expect(updateAssetsSheet({
            listTitle: "",
            name: ""
        })).toEqual(expectedAction);
    })
});

describe('updateAssetsSheet: Valid Field', () => {
    it('should return a valid balanceSheetField', () => {
        let expectedAction = {
            type: 'UPDATE_ASSETS_SHEET',
            payload: {
                listTitle: "Cash and Investments", name: "My New Value"
            }
        };
        expect(updateAssetsSheet({
            listTitle: "Cash and Investments",
            name: "My New Value"
        })).toEqual(expectedAction);
    })
});

describe('updateAssetsSheet: Invalid Field', () => {
    it('should return a valid balanceSheetField', () => {
        let expectedAction = {
            type: 'UPDATE_ASSETS_SHEET',
            payload: {
                listTitle: "Cash and Investments", name: "My New Value"
            }
        };
        expect(updateAssetsSheet({
            listTitle: "Cash and Investments",
            name: "My New Value"
        })).toEqual(expectedAction);
    })
});