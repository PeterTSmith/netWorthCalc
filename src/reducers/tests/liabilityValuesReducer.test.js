import { liabilityValuesReducer } from '../liabilityValuesReducer.js';

describe('liabilityValuesReducer: undefined state value update', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "liability",
                dateModified: 0
            }
        ];
        expect(liabilityValuesReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilityValuesReducer: empty array state value update', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "liability",
                dateModified: 0
            }
        ];
        expect(liabilityValuesReducer([], testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilityValuesReducer: overwrite single array', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let state = [{
            docId: 0,
            fieldId: 0,
            value: 55,
            valueType: "liability",
            dateModified: 0
        }];
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "liability",
                dateModified: 0
            }
        ];
        expect(liabilityValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilityValuesReducer: overwrite multi array', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let state = [
            {
                docId: 0,
                fieldId: 0,
                value: 55,
                valueType: "liability",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 2,
                value: 1,
                valueType: "liability",
                dateModified: 0
            }
        ];
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "liability",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 2,
                value: 1,
                valueType: "liability",
                dateModified: 0
            }
        ];
        expect(liabilityValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilityValuesReducer: insert single array', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let state = [{
            docId: 0,
            fieldId: 1,
            value: 10,
            valueType: "liability",
            dateModified: 0
        }];
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 1,
                value: 10,
                valueType: "liability",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "liability",
                dateModified: 0
            }
        ];
        expect(liabilityValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilityValuesReducer: insert multi array', () => {
    it('should return new array with zeroed value', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let state = [
            {
                docId: 0,
                fieldId: 1,
                value: 55,
                valueType: "liability",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 2,
                value: 1,
                valueType: "liability",
                dateModified: 0
            }
        ];
        let expectedStateValue = [
            {
                docId: 0,
                fieldId: 1,
                value: 55,
                valueType: "liability",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 2,
                value: 1,
                valueType: "liability",
                dateModified: 0
            },{
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "liability",
                dateModified: 0
            }
        ];
        expect(liabilityValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilityValuesReducer: RETRIEVE_LIABILITY_VALUES undefined state', () => {
    it('should return array with a zeroed stateValue object', () => {
        let testAction = {
            type: 'RETRIEVE_LIABILITY_VALUES',
            payload: {
                serverValues: [
                    {
                        docId: 0,
                        fieldId: 0,
                        value: 0,
                        valueType: "liability",
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
                valueType: "liability",
                dateModified: 0
            }
        ];
        expect(liabilityValuesReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilityValuesReducer: RETRIEVE_LIABILITY_VALUES defined state', () => {
    it('should return array with a zeroed stateValue object', () => {
        let testAction = {
            type: 'RETRIEVE_LIABILITY_VALUES',
            payload: {
                serverValues: [
                    {
                        docId: 0,
                        fieldId: 0,
                        value: 0,
                        valueType: "liability",
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
                valueType: "liability",
                dateModified: 0
            }
        ];
        let state = [
            {
                docId: 1,
                fieldId: 1,
                value: 1,
                valueType: "liability",
                dateModified: 1
            }, {
                docId: 2,
                fieldId: 2,
                value: 2,
                valueType: "liability",
                dateModified: 2
            }
        ]
        expect(liabilityValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilityValuesReducer: unrelated action previous state undefined', () => {
    it('should return empty array', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = [];
        expect(liabilityValuesReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilityValuesReducer: unrelated action previous state defined', () => {
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
                valueType: "liability",
                dateModified: 0
            }
        ];
        let state = [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "liability",
                dateModified: 0
            }
        ]
        expect(liabilityValuesReducer(state, testAction)).toEqual(expectedStateValue);
    })
});