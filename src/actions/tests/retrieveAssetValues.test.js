import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

import { retrieveAssetValues } from '../retrieveAssetValues.js';
import axiosApi from '../../api/netWorthApi.js';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.mock('axios');

describe('retrieveAssetValues: no assetValues', () => {
    it('should return the expected assetValues', () => {
        axios.get.mockResolvedValue({'data': [

        ]});

        const store = mockStore({});

        return store.dispatch(retrieveAssetValues(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_ASSET_VALUES',
                    payload: {
                        serverValues: []
                    }
                }
            ]);
        });
    })
});

describe('retrieveAssetValues: multiple values', () => {
    it('should return the expected assetValues', () => {
        axios.get.mockResolvedValue({'data': [
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            },
            {
                docId: 0,
                fieldId: 1,
                value: 56,
                valueType: "asset",
                dateModified: 0
            },
            {
                docId: 0,
                fieldId: 33,
                value: 31893,
                valueType: "asset",
                dateModified: 0
            }
        ]});

        const store = mockStore({});

        return store.dispatch(retrieveAssetValues(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_ASSET_VALUES',
                    payload: {
                        serverValues: [
                            {
                                docId: 0,
                                fieldId: 0,
                                value: 0,
                                valueType: "asset",
                                dateModified: 0
                            },
                            {
                                docId: 0,
                                fieldId: 1,
                                value: 56,
                                valueType: "asset",
                                dateModified: 0
                            },
                            {
                                docId: 0,
                                fieldId: 33,
                                value: 31893,
                                valueType: "asset",
                                dateModified: 0
                            }
                        ]
                    }
                }
            ]);
        });
    })
});