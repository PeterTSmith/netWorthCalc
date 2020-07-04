import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

import { retrieveLiabilityValues } from '../retrieveLiabilityValues.js';
import axiosApi from '../../api/netWorthApi.js';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.mock('axios');

describe('retrieveLiabilityValues: no liabilityValues', () => {
    it('should return the expected liabilityValues', () => {
        axios.get.mockResolvedValue({'data': [

        ]});

        const store = mockStore({});

        return store.dispatch(retrieveLiabilityValues(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_LIABILITY_VALUES',
                    payload: {
                        serverValues: []
                    }
                }
            ]);
        });
    })
});

describe('retrieveLiabilityValues: multiple values', () => {
    it('should return the expected liabilityValues', () => {
        axios.get.mockResolvedValue({'data': [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "liability",
                dateModified: 0
            },
            {
                docId: 0,
                fieldId: 1,
                value: 56,
                valueType: "liability",
                dateModified: 0
            },
            {
                docId: 0,
                fieldId: 33,
                value: 31893,
                valueType: "liability",
                dateModified: 0
            }
        ]});

        const store = mockStore({});

        return store.dispatch(retrieveLiabilityValues(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_LIABILITY_VALUES',
                    payload: {
                        serverValues: [
                            {
                                docId: 0,
                                fieldId: 0,
                                value: 0,
                                valueType: "liability",
                                dateModified: 0
                            },
                            {
                                docId: 0,
                                fieldId: 1,
                                value: 56,
                                valueType: "liability",
                                dateModified: 0
                            },
                            {
                                docId: 0,
                                fieldId: 33,
                                value: 31893,
                                valueType: "liability",
                                dateModified: 0
                            }
                        ]
                    }
                }
            ]);
        });
    })
});