import { totalLiabilitiesReducer } from '../totalLiabilitiesReducer.js';

describe('totalLiabilitiesReducer: undefined state and zeroed valueUpdate', () => {
    it('should return the totalLiabilityValue = 0', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 0;
        expect(totalLiabilitiesReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: 0 state and zeroed valueUpdate', () => {
    it('should return the totalLiabilityValue = 0', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 0;
        expect(totalLiabilitiesReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: positive valueUpdate from undefined', () => {
    it('should return the totalLiabilityValue = 5', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 5;
        expect(totalLiabilitiesReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: positive valueUpdate from 0', () => {
    it('should return the totalLiabilityValue = 5', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 5;
        expect(totalLiabilitiesReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: positive valueUpdate from above 0', () => {
    it('should return the totalLiabilityValue = 6', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 6;
        expect(totalLiabilitiesReducer(1, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: positive valueUpdate from above 0 with positive prev and new', () => {
    it('should return the totalLiabilityValue = 6', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 4, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 5;
        expect(totalLiabilitiesReducer(4, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: negative valueUpdate to 0', () => {
    it('should return the totalLiabilityValue = 0', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 0;
        expect(totalLiabilitiesReducer(5, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: negative valueUpdate to above 0', () => {
    it('should return the totalLiabilityValue = 1', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 1;
        expect(totalLiabilitiesReducer(6, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: negative valueUpdate to above 0 with positive prev and new', () => {
    it('should return the totalLiabilityValue = 4', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 4}, dateModified: 0}
            }
        }
        let expectedStateValue = 4;
        expect(totalLiabilitiesReducer(5, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: previousState = undefined, type = RETRIEVE_TOTAL_LIABILITY_VALUE, action.payload = 1', () => {
    it('should return the totalLiabilityValue = 1', () => {
        let testAction = {
            type: 'RETRIEVE_TOTAL_LIABILITY_VALUE',
            payload: {
                serverValue: 1
            }
        }
        let expectedStateValue = 1;
        expect(totalLiabilitiesReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: previousState = 0, type = RETRIEVE_TOTAL_LIABILITY_VALUE, action.payload = 1', () => {
    it('should return the totalLiabilityValue = 1', () => {
        let testAction = {
            type: 'RETRIEVE_TOTAL_LIABILITY_VALUE',
            payload: {
                serverValue: 1
            }
        }
        let expectedStateValue = 1;
        expect(totalLiabilitiesReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: previousState = undefined, type = NEW_TYPE, action.payload = undefined', () => {
    it('should return the totalLiabilityValue = 0', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = 0;
        expect(totalLiabilitiesReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: previousState = 1, type = NEW_TYPE, action.payload = undefined', () => {
    it('should return the totalLiabilityValue = 1', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = 1;
        expect(totalLiabilitiesReducer(1, testAction)).toEqual(expectedStateValue);
    })
});

describe('totalLiabilitiesReducer: previousState = 1, type = NEW_TYPE, action.payload = 2', () => {
    it('should return the totalLiabilityValue = 1', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: 2
        }
        let expectedStateValue = 1;
        expect(totalLiabilitiesReducer(1, testAction)).toEqual(expectedStateValue);
    })
});