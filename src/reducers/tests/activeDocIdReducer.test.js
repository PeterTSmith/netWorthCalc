import { activeDocIdReducer } from '../activeDocIdReducer.js';

describe('activeDocIdReducer: previousState = undefined, type = UPDATE_ACTIVE_DOC_ID, action.payload = 1', () => {
    it('should return the docId = 1', () => {
        let testAction = {
            type: 'UPDATE_ACTIVE_DOC_ID',
            payload: 1
        }
        let expectedStateValue = 1;
        expect(activeDocIdReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('activeDocIdReducer: previousState = 0, type = UPDATE_ACTIVE_DOC_ID, action.payload = 1', () => {
    it('should return the docId = 1', () => {
        let testAction = {
            type: 'UPDATE_ACTIVE_DOC_ID',
            payload: 1
        }
        let expectedStateValue = 1;
        expect(activeDocIdReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('activeDocIdReducer: previousState = undefined, type = NEW_TYPE, action.payload = undefined', () => {
    it('should return the docId = 0', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = 0;
        expect(activeDocIdReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('activeDocIdReducer: previousState = 1, type = NEW_TYPE, action.payload = undefined', () => {
    it('should return the docId = 1', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = 1;
        expect(activeDocIdReducer(1, testAction)).toEqual(expectedStateValue);
    })
});