import { assetValuesReducer } from '../assetValuesReducer.js';

describe('assetValuesReducer: undefined state value update', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ];
        expect(assetValuesReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetValuesReducer: empty array state value update', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ];
        expect(assetValuesReducer([], testAction)).toEqual(expectedStateValue);
    })
});

describe('assetValuesReducer: overwrite single array', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let state = [{
            docId: 0,
            fieldId: 0,
            value: 55,
            valueType: "asset",
            dateModified: 0
        }];
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ];
        expect(assetValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetValuesReducer: overwrite multi array', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let state = [
            {
                docId: 0,
                fieldId: 0,
                value: 55,
                valueType: "asset",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 2,
                value: 1,
                valueType: "asset",
                dateModified: 0
            }
        ];
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 2,
                value: 1,
                valueType: "asset",
                dateModified: 0
            }
        ];
        expect(assetValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetValuesReducer: insert single array', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let state = [{
            docId: 0,
            fieldId: 1,
            value: 10,
            valueType: "asset",
            dateModified: 0
        }];
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 1,
                value: 10,
                valueType: "asset",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ];
        expect(assetValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetValuesReducer: insert multi array', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let state = [
            {
                docId: 0,
                fieldId: 1,
                value: 55,
                valueType: "asset",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 2,
                value: 1,
                valueType: "asset",
                dateModified: 0
            }
        ];
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 1,
                value: 55,
                valueType: "asset",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 2,
                value: 1,
                valueType: "asset",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ];
        expect(assetValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetValuesReducer: RETRIEVE_ASSET_VALUES undefined state', () => {
    it('should return array with a zeroed stateValue object', () => {
        let testAction = {
            type: 'RETRIEVE_ASSET_VALUES',
            payload: {
                serverValues: [
                    {
                        docId: 0,
                        fieldId: 0,
                        value: 0,
                        valueType: "asset",
                        dateModified: 0
                    }
                ]
            }
        }
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ];
        expect(assetValuesReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetValuesReducer: RETRIEVE_ASSET_VALUES defined state', () => {
    it('should return array with a zeroed stateValue object', () => {
        let testAction = {
            type: 'RETRIEVE_ASSET_VALUES',
            payload: {
                serverValues: [
                    {
                        docId: 0,
                        fieldId: 0,
                        value: 0,
                        valueType: "asset",
                        dateModified: 0
                    }
                ]
            }
        }
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ];
        let state = [
            {
                docId: 1,
                fieldId: 1,
                value: 1,
                valueType: "asset",
                dateModified: 1
            }, {
                docId: 2,
                fieldId: 2,
                value: 2,
                valueType: "asset",
                dateModified: 2
            }
        ]
        expect(assetValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetValuesReducer: unrelated action previous state undefined', () => {
    it('should return empty array', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = [];
        expect(assetValuesReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetValuesReducer: unrelated action previous state defined', () => {
    it('should return array with a zeroed stateValue object', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ];
        let state = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ]
        expect(assetValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});