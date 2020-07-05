import { assetsSheetReducer } from '../assetsSheetReducer.js';

describe('assetsSheetReducer: unrelated action previous state undefined', () => {
    it('should return empty array', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = {
            title: "",
            content: [],
            dateModified: 0
        };
        expect(assetsSheetReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetsSheetReducer: unrelated action previous state defined', () => {
    it('should return array with a zeroed stateValue object', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = {
            title: "Assets",
            content: [
                {
                    title: "Cash and Investments",
                    fields: [
                        {
                            id: 0,
                            name: "Chequing"
                        }
                    ]
                }, {
                    title: "Long Term Investments",
                    fields: [
                        {
                            id: 11,
                            name: "Primary Home"
                        }
                    ]
                }
            ],
            dateModified: 55
        };
        let state = {
            title: "Assets",
            content: [
                {
                    title: "Cash and Investments",
                    fields: [
                        {
                            id: 0,
                            name: "Chequing"
                        }
                    ]
                }, {
                    title: "Long Term Investments",
                    fields: [
                        {
                            id: 11,
                            name: "Primary Home"
                        }
                    ]
                }
            ],
            dateModified: 55
        }
        expect(assetsSheetReducer(state, testAction)).toEqual(expectedStateValue);
    })
});