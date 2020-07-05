import { totalAssetsReducer } from '../totalAssetsReducer.js';

describe('totalAssetsReducer: undefined state and zeroed valueUpdate', () => {
    it('should return the totalAssetValue = 0', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 0;
        expect(totalAssetsReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: 0 state and zeroed valueUpdate', () => {
    it('should return the totalAssetValue = 0', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 0;
        expect(totalAssetsReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: positive valueUpdate from undefined', () => {
    it('should return the totalAssetValue = 5', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 5;
        expect(totalAssetsReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: positive valueUpdate from 0', () => {
    it('should return the totalAssetValue = 5', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 5;
        expect(totalAssetsReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: positive valueUpdate from above 0', () => {
    it('should return the totalAssetValue = 6', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 6;
        expect(totalAssetsReducer(1, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: positive valueUpdate from above 0 with positive prev and new', () => {
    it('should return the totalAssetValue = 6', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 4, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 5;
        expect(totalAssetsReducer(4, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: negative valueUpdate to 0', () => {
    it('should return the totalAssetValue = 0', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 0;
        expect(totalAssetsReducer(5, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: negative valueUpdate to above 0', () => {
    it('should return the totalAssetValue = 1', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 1;
        expect(totalAssetsReducer(6, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: negative valueUpdate to above 0 with positive prev and new', () => {
    it('should return the totalAssetValue = 4', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 4}, dateModified: 0}
            }
        }
        let expectedStateValue = 4;
        expect(totalAssetsReducer(5, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: previousState = undefined, type = RETRIEVE_TOTAL_ASSET_VALUE, action.payload = 1', () => {
    it('should return the totalAssetValue = 1', () => {
        let testAction = {
            type: 'RETRIEVE_TOTAL_ASSET_VALUE',
            payload: {
                serverValue: 1
            }
        }
        let expectedStateValue = 1;
        expect(totalAssetsReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: previousState = 0, type = RETRIEVE_TOTAL_ASSET_VALUE, action.payload = 1', () => {
    it('should return the totalAssetValue = 1', () => {
        let testAction = {
            type: 'RETRIEVE_TOTAL_ASSET_VALUE',
            payload: {
                serverValue: 1
            }
        }
        let expectedStateValue = 1;
        expect(totalAssetsReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: previousState = undefined, type = NEW_TYPE, action.payload = undefined', () => {
    it('should return the totalAssetValue = 0', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = 0;
        expect(totalAssetsReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: previousState = 1, type = NEW_TYPE, action.payload = undefined', () => {
    it('should return the totalAssetValue = 1', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = 1;
        expect(totalAssetsReducer(1, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalAssetsReducer: previousState = 1, type = NEW_TYPE, action.payload = 2', () => {
    it('should return the totalAssetValue = 1', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: 2
        }
        let expectedStateValue = 1;
        expect(totalAssetsReducer(1, testAction)).toEqual(expectedStateValue);
    })
});