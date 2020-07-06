import { liabilitiesSheetReducer } from '../liabilitiesSheetReducer.js';

/*describe('liabilitiesSheetReducer: UPDATE_LIABILITIES_SHEET undefined state', () => {
    it('should return array with a retrieved balanceSheet object', () => {
        let testAction = {
            type: 'UPDATE_LIABILITIES_SHEET',
            payload: {
                listTitle: "Cash and Investments",
                name: ""
            }
        };
        let expectedStateValue = {
            title: "Liabilities",
            content: [
                {
                    title: "Cash and Investments",
                    fields: [
                        {
                            id: 0,
                            name: "Chequing"
                        }
                    ]
                }
            ],
            dateModified: 55
        };
        expect(liabilitiesSheetReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});*/

describe('liabilitiesSheetReducer: RETRIEVE_ASSET_SHEET undefined state', () => {
    it('should return array with a retrieved balanceSheet object', () => {
        let testAction = {
            type: 'RETRIEVE_LIABILITIES_SHEET',
            payload: {
                serverSheet: {
                    title: "Liabilities",
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
            }
        }
        let expectedStateValue = {
            title: "Liabilities",
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
        expect(liabilitiesSheetReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilitiesSheetReducer: RETRIEVE_ASSET_SHEET defined state', () => {
    it('should return array with a retrieved balanceSheet object', () => {
        let testAction = {
            type: 'RETRIEVE_LIABILITIES_SHEET',
            payload: {
                serverSheet: {
                    title: "Liabilities",
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
            }
        }

        let state = {
            title: "asdf",
            content: [
                {
                    title: "Cash and Investments",
                    fields: [
                        {
                            id: 23,
                            name: "Chequing"
                        }
                    ]
                }
            ],
            dateModified: 55
        }
        let expectedStateValue = {
            title: "Liabilities",
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
        expect(liabilitiesSheetReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilitiesSheetReducer: unrelated action previous state undefined', () => {
    it('should return previous state', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = {
            title: "",
            content: [],
            dateModified: 0
        };
        expect(liabilitiesSheetReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('liabilitiesSheetReducer: unrelated action previous state defined', () => {
    it('should return previous state', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = {
            title: "Liabilities",
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
            title: "Liabilities",
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
        expect(liabilitiesSheetReducer(state, testAction)).toEqual(expectedStateValue);
    })
});