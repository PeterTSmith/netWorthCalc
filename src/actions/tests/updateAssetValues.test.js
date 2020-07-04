import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

import { updateAssetValues } from '../updateAssetValues.js';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.mock('axios');

describe("updateAssetValues: docId = 0, fieldId = 0, prevVal = 0, newVal = '0', dateModified = 0", () => {
    it('should return a valid new Value', () => {

        axios.post.mockImplementation((url, payload) => expect(payload).toEqual(
            {
                docId: 0,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ));

        const store = mockStore({});
        return store.dispatch(updateAssetValues(0, { id: 0, valueChange: { prevVal: 0, newVal: parseInt("0") }, dateModified: 0 })).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'UPDATE_ASSET_VALUES',
                    payload: {
                        valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
                    }
                }
            ]);
        });
    })
});

describe("updateAssetValues: docId = 1, fieldId = 0, prevVal = 0, newVal = '0', dateModified = 0", () => {
    it('should return a valid new Value', () => {

        axios.post.mockImplementation((url, payload) => expect(payload).toEqual(
            {
                docId: 1,
                fieldId: 0,
                value: 0,
                valueType: "asset",
                dateModified: 0
            }
        ));

        const store = mockStore({});
        return store.dispatch(updateAssetValues(1, { id: 0, valueChange: { prevVal: 0, newVal: parseInt("0") }, dateModified: 0 })).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: 'UPDATE_ASSET_VALUES',
                    payload: {
                        valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
                    }
                }
            ]);
        });
    })
});