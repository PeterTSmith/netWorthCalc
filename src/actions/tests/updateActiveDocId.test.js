import { updateActiveDocId } from '../updateActiveDocId.js';

describe('updateActiveDocId: payload = 0', () => {
    it('should return a valid docId', () => {
        let expectedAction = {
            type: 'UPDATE_ACTIVE_DOC_ID',
            payload: 0
        }
        expect(updateActiveDocId(0)).toEqual(expectedAction);
    })
});

describe('updateActiveDocId: payload = 2', () => {
    it('should return a valid docId', () => {
        let expectedAction = {
            type: 'UPDATE_ACTIVE_DOC_ID',
            payload: 2
        }
        expect(updateActiveDocId(2)).toEqual(expectedAction);
    })
});