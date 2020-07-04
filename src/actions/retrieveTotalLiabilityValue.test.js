import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

import { retrieveTotalLiabilityValue } from './retrieveTotalLiabilityValue.js';
import axiosApi from '../api/netWorthApi.js';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.mock('axios');

describe('retrieveTotalLiabilityValue: totalLiabilityValue aka data = 0', () => {
    it('should return the expected totalLiabilityValue', () => {
        axios.get.mockResolvedValue({'data': 0});

        const store = mockStore({});

        return store.dispatch(retrieveTotalLiabilityValue(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_TOTAL_LIABILITY_VALUE',
                    payload: {
                        serverValue: 0
                    }
                }
            ]);
        });
    })
});

describe('retrieveTotalLiabilityValue: totalLiabilityValue aka data = 5', () => {
    it('should return the expected totalLiabilityValue', () => {
        axios.get.mockResolvedValue({'data': 5});

        const store = mockStore({});

        return store.dispatch(retrieveTotalLiabilityValue(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_TOTAL_LIABILITY_VALUE',
                    payload: {
                        serverValue: 5
                    }
                }
            ]);
        });
    })
});

describe('retrieveTotalLiabilityValue: docId = 1', () => {
    it('should return the expected totalLiabilityValue', () => {
        axios.get.mockResolvedValue({'data': 5});

        const store = mockStore({});

        return store.dispatch(retrieveTotalLiabilityValue(1)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_TOTAL_LIABILITY_VALUE',
                    payload: {
                        serverValue: 5
                    }
                }
            ]);
        });
    })
});