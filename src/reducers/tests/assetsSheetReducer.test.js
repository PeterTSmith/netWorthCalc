import { assetsSheetReducer } from '../assetsSheetReducer.js';

/*describe('assetsSheetReducer: UPDATE_ASSETS_SHEET undefined state', () => {
    it('should return array with a retrieved balanceSheet object', () => {
        let testAction = {
            type: 'UPDATE_ASSETS_SHEET',
            payload: {
                listTitle: "Cash and Investments",
                name: ""
            }
        };
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
                }
            ],
            dateModified: 55
        };
        expect(assetsSheetReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});*/

describe('assetsSheetReducer: RETRIEVE_ASSET_SHEET undefined state', () => {
    it('should return array with a retrieved balanceSheet object', () => {
        let testAction = {
            type: 'RETRIEVE_ASSETS_SHEET',
            payload: {
                serverSheet: {
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
            }
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
        expect(assetsSheetReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetsSheetReducer: RETRIEVE_ASSET_SHEET defined state', () => {
    it('should return array with a retrieved balanceSheet object', () => {
        let testAction = {
            type: 'RETRIEVE_ASSETS_SHEET',
            payload: {
                serverSheet: {
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
        expect(assetsSheetReducer(state, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetsSheetReducer: unrelated action previous state undefined', () => {
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
        expect(assetsSheetReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('assetsSheetReducer: unrelated action previous state defined', () => {
    it('should return previous state', () => {
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