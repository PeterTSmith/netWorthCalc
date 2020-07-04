import { updateLiabilitiesSheet } from "../updateLiabilitiesSheet.js"

describe('updateLiabilitiesSheet: Empty name', () => {
    it('should return a valid balanceSheetField', () => {
        let expectedAction = {
            type: 'UPDATE_LIABILITIES_SHEET',
            payload: {
                listTitle: "Cash and Investments", name: ""
            }
        };
        expect(updateLiabilitiesSheet({
            listTitle: "Cash and Investments",
            name: ""
        })).toEqual(expectedAction);
    })
});

describe('updateLiabilitiesSheet: Empty listTitle', () => {
    it('should return a valid balanceSheetField', () => {
        let expectedAction = {
            type: 'UPDATE_LIABILITIES_SHEET',
            payload: {
                listTitle: "", name: "My New Value"
            }
        };
        expect(updateLiabilitiesSheet({
            listTitle: "",
            name: "My New Value"
        })).toEqual(expectedAction);
    })
});

describe('updateLiabilitiesSheet: Empty listTitle, Empty name', () => {
    it('should return a valid balanceSheetField', () => {
        let expectedAction = {
            type: 'UPDATE_LIABILITIES_SHEET',
            payload: {
                listTitle: "", name: ""
            }
        };
        expect(updateLiabilitiesSheet({
            listTitle: "",
            name: ""
        })).toEqual(expectedAction);
    })
});

describe('updateLiabilitiesSheet: Valid Field', () => {
    it('should return a valid balanceSheetField', () => {
        let expectedAction = {
            type: 'UPDATE_LIABILITIES_SHEET',
            payload: {
                listTitle: "Cash and Investments", name: "My New Value"
            }
        };
        expect(updateLiabilitiesSheet({
            listTitle: "Cash and Investments",
            name: "My New Value"
        })).toEqual(expectedAction);
    })
});

describe('updateLiabilitiesSheet: Invalid Field', () => {
    it('should return a valid balanceSheetField', () => {
        let expectedAction = {
            type: 'UPDATE_LIABILITIES_SHEET',
            payload: {
                listTitle: "Cash and Investments", name: "My New Value"
            }
        };
        expect(updateLiabilitiesSheet({
            listTitle: "Cash and Investments",
            name: "My New Value"
        })).toEqual(expectedAction);
    })
});