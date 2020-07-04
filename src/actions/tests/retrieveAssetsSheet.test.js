import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

import { retrieveAssetsSheet } from '../retrieveAssetsSheet.js';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.mock('axios');

describe('retrieveAssetsSheet: assetsSheet basic with docId = 0', () => {
    it('should return the expected assetsSheet', () => {
        axios.get.mockResolvedValue({
            data: {
                title: "",
                content: [
                    {
                        title: "",
                        fields: [
                            {
                                id: 0,
                                name: ""
                            }
                        ]
                    }
                ],
                dateModified: 0
            }
        });

        const store = mockStore({});

        return store.dispatch(retrieveAssetsSheet(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_ASSETS_SHEET',
                    payload: {
                        serverSheet: {
                            title: "",
                            content: [
                                {
                                    title: "",
                                    fields: [
                                        {
                                            id: 0,
                                            name: ""
                                        }
                                    ]
                                }
                            ],
                            dateModified: 0
                        }
                    }
                }
            ]);
        });
    })
});

describe('retrieveAssetsSheet: assetsSheet basic with docId = 1', () => {
    it('should return the expected assetsSheet', () => {
        axios.get.mockResolvedValue({
            data: {
                title: "",
                content: [
                    {
                        title: "",
                        fields: [
                            {
                                id: 0,
                                name: ""
                            }
                        ]
                    }
                ],
                dateModified: 0
            }
        });

        const store = mockStore({});

        return store.dispatch(retrieveAssetsSheet(1)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_ASSETS_SHEET',
                    payload: {
                        serverSheet: {
                            title: "",
                            content: [
                                {
                                    title: "",
                                    fields: [
                                        {
                                            id: 0,
                                            name: ""
                                        }
                                    ]
                                }
                            ],
                            dateModified: 0
                        }
                    }
                }
            ]);
        });
    })
});

describe('retrieveAssetsSheet: assetsSheet typical', () => {
    it('should return the expected assetsSheet', () => {
        axios.get.mockResolvedValue({
            data: {
                title: "Assets",
                content: [
                    {
                        title: "Cash and Investments",
                        fields: [
                            {
                                id: 0,
                                name: "Chequing"
                            },
                            {
                                id: 1,
                                name: "Savings For Taxes"
                            },
                            {
                                id: 2,
                                name: "Rainy Day Fund"
                            },
                            {
                                id: 3,
                                name: "Savings For Fun"
                            },
                            {
                                id: 4,
                                name: "Savings For Travel"
                            },
                            {
                                id: 5,
                                name: "Savings For Personal Development"
                            },
                            {
                                id: 6,
                                name: "Investment 1"
                            },
                            {
                                id: 7,
                                name: "Investment 2"
                            },
                            {
                                id: 8,
                                name: "Investment 3"
                            },
                            {
                                id: 9,
                                name: "Investment 4"
                            },
                            {
                                id: 10,
                                name: "Investment 5"
                            }
                        ]
                    },
                    {
                        title: "Long Term Investments",
                        fields: [
                            {
                                id: 11,
                                name: "Primary Home"
                            },
                            {
                                id: 12,
                                name: "Second Home"
                            },
                            {
                                id: 13,
                                name: "Other"
                            }
                        ]
                    }
                ],
                dateModified: 0
            }
        });

        const store = mockStore({});

        return store.dispatch(retrieveAssetsSheet(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
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
                                        },
                                        {
                                            id: 1,
                                            name: "Savings For Taxes"
                                        },
                                        {
                                            id: 2,
                                            name: "Rainy Day Fund"
                                        },
                                        {
                                            id: 3,
                                            name: "Savings For Fun"
                                        },
                                        {
                                            id: 4,
                                            name: "Savings For Travel"
                                        },
                                        {
                                            id: 5,
                                            name: "Savings For Personal Development"
                                        },
                                        {
                                            id: 6,
                                            name: "Investment 1"
                                        },
                                        {
                                            id: 7,
                                            name: "Investment 2"
                                        },
                                        {
                                            id: 8,
                                            name: "Investment 3"
                                        },
                                        {
                                            id: 9,
                                            name: "Investment 4"
                                        },
                                        {
                                            id: 10,
                                            name: "Investment 5"
                                        }
                                    ]
                                },
                                {
                                    title: "Long Term Investments",
                                    fields: [
                                        {
                                            id: 11,
                                            name: "Primary Home"
                                        },
                                        {
                                            id: 12,
                                            name: "Second Home"
                                        },
                                        {
                                            id: 13,
                                            name: "Other"
                                        }
                                    ]
                                }
                            ],
                            dateModified: 0
                        }
                    }
                }
            ]);
        });
    })
});

describe('retrieveAssetsSheet: assetsSheet duplicates', () => {
    it('should return the expected assetsSheet', () => {
        axios.get.mockResolvedValue({
            data: {
                title: "Assets",
                content: [
                    {
                        title: "Cash and Investments",
                        fields: [
                            {
                                id: 0,
                                name: ""
                            },
                            {
                                id: 1,
                                name: "Savings For Taxes"
                            },
                            {
                                id: 2,
                                name: "Rainy Day Fund"
                            }
                        ]
                    },
                    {
                        title: "Cash and Investments",
                        fields: [
                            {
                                id: 0,
                                name: ""
                            },
                            {
                                id: 1,
                                name: "Savings For Taxes"
                            },
                            {
                                id: 2,
                                name: "Rainy Day Fund"
                            }
                        ]
                    }
                ],
                dateModified: 0
            }
        });

        const store = mockStore({});

        return store.dispatch(retrieveAssetsSheet(1)).then(() => {
            expect(store.getActions()).toEqual([
                {
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
                                            name: ""
                                        },
                                        {
                                            id: 1,
                                            name: "Savings For Taxes"
                                        },
                                        {
                                            id: 2,
                                            name: "Rainy Day Fund"
                                        }
                                    ]
                                },
                                {
                                    title: "Cash and Investments",
                                    fields: [
                                        {
                                            id: 0,
                                            name: ""
                                        },
                                        {
                                            id: 1,
                                            name: "Savings For Taxes"
                                        },
                                        {
                                            id: 2,
                                            name: "Rainy Day Fund"
                                        }
                                    ]
                                }
                            ],
                            dateModified: 0
                        }
                    }
                }
            ]);
        });
    })
});