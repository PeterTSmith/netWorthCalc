import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

import { retrieveNetWorthValue } from './retrieveNetWorthValue.js';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.mock('axios');

describe('retrieveNetWorthValue: netWorthValue aka data = 0', () => {
    it('should return the expected netWorthValue', () => {
        axios.get.mockResolvedValue({'data': 0});

        const store = mockStore({});

        return store.dispatch(retrieveNetWorthValue(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_NET_WORTH_VALUE',
                    payload: {
                        serverValue: 0
                    }
                }
            ]);
        });
    })
});

describe('retrieveNetWorthValue: netWorthValue aka data = 5', () => {
    it('should return the expected netWorthValue', () => {
        axios.get.mockResolvedValue({'data': 5});

        const store = mockStore({});

        return store.dispatch(retrieveNetWorthValue(0)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_NET_WORTH_VALUE',
                    payload: {
                        serverValue: 5
                    }
                }
            ]);
        });
    })
});

describe('retrieveNetWorthValue: docId = 1', () => {
    it('should return the expected netWorthValue', () => {
        axios.get.mockResolvedValue({'data': 5});

        const store = mockStore({});

        return store.dispatch(retrieveNetWorthValue(1)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'RETRIEVE_NET_WORTH_VALUE',
                    payload: {
                        serverValue: 5
                    }
                }
            ]);
        });
    })
});