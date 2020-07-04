import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

import { retrieveLiabilitiesSheet } from '../retrieveLiabilitiesSheet.js';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.mock('axios');

describe('retrieveLiabilitiesSheet: liabilitiesSheet basic with docId = 0', () => {
    it('should return the expected liabilitiesSheet', () => {
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

        return store.dispatch(retrieveLiabilitiesSheet(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_LIABILITIES_SHEET',
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

describe('retrieveLiabilitiesSheet: liabilitiesSheet basic with docId = 1', () => {
    it('should return the expected liabilitiesSheet', () => {
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

        return store.dispatch(retrieveLiabilitiesSheet(1)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_LIABILITIES_SHEET',
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

describe('retrieveLiabilitiesSheet: liabilitiesSheet typical', () => {
    it('should return the expected liabilitiesSheet', () => {
        axios.get.mockResolvedValue({
            data: {
                title: "Liabilities",
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

        return store.dispatch(retrieveLiabilitiesSheet(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
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

describe('retrieveLiabilitiesSheet: liabilitiesSheet duplicates', () => {
    it('should return the expected liabilitiesSheet', () => {
        axios.get.mockResolvedValue({
            data: {
                title: "Liabilities",
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

        return store.dispatch(retrieveLiabilitiesSheet(1)).then(() => {
            expect(store.getActions()).toEqual([
                {
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