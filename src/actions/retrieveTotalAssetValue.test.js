import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

import { retrieveTotalAssetValue } from './retrieveTotalAssetValue.js';
import axiosApi from '../api/netWorthApi.js';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.mock('axios');

describe('retrieveTotalAssetValue: totalAssetValue aka data = 0', () => {
    it('should return the expected totalAssetValue', () => {
        axios.get.mockResolvedValue({'data': 0});

        const store = mockStore({});

        return store.dispatch(retrieveTotalAssetValue(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_TOTAL_ASSET_VALUE',
                    payload: {
                        serverValue: 0
                    }
                }
            ]);
        });
    })
});

describe('retrieveTotalAssetValue: totalAssetValue aka data = 5', () => {
    it('should return the expected totalAssetValue', () => {
        axios.get.mockResolvedValue({'data': 5});

        const store = mockStore({});

        return store.dispatch(retrieveTotalAssetValue(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_TOTAL_ASSET_VALUE',
                    payload: {
                        serverValue: 5
                    }
                }
            ]);
        });
    })
});

describe('retrieveTotalAssetValue: docId = 1', () => {
    it('should return the expected totalAssetValue', () => {
        axios.get.mockResolvedValue({'data': 5});

        const store = mockStore({});

        return store.dispatch(retrieveTotalAssetValue(1)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_TOTAL_ASSET_VALUE',
                    payload: {
                        serverValue: 5
                    }
                }
            ]);
        });
    })
});