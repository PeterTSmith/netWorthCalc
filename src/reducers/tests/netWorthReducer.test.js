import { netWorthReducer } from '../netWorthReducer.js';

//UPDATE_ASSET_VALUES

describe('netWorthReducer: undefined state and zeroed valueUpdate', () => {
    it('should return the netWorthValue = 0', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 0;
        expect(netWorthReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: 0 state and zeroed valueUpdate', () => {
    it('should return the netWorthValue = 0', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 0;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: positive valueUpdate from undefined', () => {
    it('should return the netWorthValue = 5', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 5;
        expect(netWorthReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: positive valueUpdate from 0', () => {
    it('should return the netWorthValue = 5', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 5;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: positive valueUpdate with positive prev and new', () => {
    it('should return the netWorthValue = 6', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 4, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 1;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: positive valueUpdate from above 0', () => {
    it('should return the netWorthValue = 6', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 6;
        expect(netWorthReducer(1, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: positive valueUpdate from below 0', () => {
    it('should return the netWorthValue = 4', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = 4;
        expect(netWorthReducer(-1, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: negative valueUpdate from 0', () => {
    it('should return the netWorthValue = 0', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = -5;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: negative valueUpdate with positive prev and new', () => {
    it('should return the netWorthValue = -1', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 4}, dateModified: 0}
            }
        }
        let expectedStateValue = -1;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: negative valueUpdate from above 0', () => {
    it('should return the netWorthValue = -4', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = -4;
        expect(netWorthReducer(1, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: negative valueUpdate from below 0', () => {
    it('should return the netWorthValue = -6', () => {
        let testAction = {
            type: 'UPDATE_ASSET_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = -6;
        expect(netWorthReducer(-1, testAction)).toEqual(expectedStateValue);
    })
});

//UPDATE_LIABILITY_VALUES

describe('netWorthReducer: undefined state and zeroed valueUpdate', () => {
    it('should return the netWorthValue = 0', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 0;
        expect(netWorthReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: 0 state and zeroed valueUpdate', () => {
    it('should return the netWorthValue = 0', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 0;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: positive valueUpdate from undefined', () => {
    it('should return the netWorthValue = -5', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = -5;
        expect(netWorthReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: positive valueUpdate from 0', () => {
    it('should return the netWorthValue = -5', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = -5;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: positive valueUpdate with positive prev and new', () => {
    it('should return the netWorthValue = -1', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 4, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = -1;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: positive valueUpdate from above 0', () => {
    it('should return the netWorthValue = -4', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = -4;
        expect(netWorthReducer(1, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: positive valueUpdate from below 0', () => {
    it('should return the netWorthValue = -6', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 0, newVal: 5}, dateModified: 0}
            }
        }
        let expectedStateValue = -6;
        expect(netWorthReducer(-1, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: negative valueUpdate from 0', () => {
    it('should return the netWorthValue = -5', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 5;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: negative valueUpdate positive prev and new', () => {
    it('should return the netWorthValue = 1', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 4}, dateModified: 0}
            }
        }
        let expectedStateValue = 1;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: negative valueUpdate from above 0', () => {
    it('should return the netWorthValue = 6', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 6;
        expect(netWorthReducer(1, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: negative valueUpdate from below 0', () => {
    it('should return the netWorthValue = 4', () => {
        let testAction = {
            type: 'UPDATE_LIABILITY_VALUES',
            payload: {
                valueUpdate: {id: 0, valueChange: { prevVal: 5, newVal: 0}, dateModified: 0}
            }
        }
        let expectedStateValue = 4;
        expect(netWorthReducer(-1, testAction)).toEqual(expectedStateValue);
    })
});

//RETRIEVE_NET_WORTH_VALUE

describe('netWorthReducer: previousState = undefined, type = RETRIEVE_NET_WORTH_VALUE, action.payload = zeroed valueUpdate', () => {
    it('should return the netWorthValue = 0', () => {
        let testAction = {
            type: 'RETRIEVE_NET_WORTH_VALUE',
            payload: {
                serverValue: 0
            }
        }
        let expectedStateValue = 0;
        expect(netWorthReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: previousState = 0, type = RETRIEVE_NET_WORTH_VALUE, action.payload = zeroed valueUpdate', () => {
    it('should return the netWorthValue = 1', () => {
        let testAction = {
            type: 'RETRIEVE_NET_WORTH_VALUE',
            payload: {
                serverValue: 1
            }
        }
        let expectedStateValue = 1;
        expect(netWorthReducer(0, testAction)).toEqual(expectedStateValue);
    })
});

//NEW_TYPE

describe('netWorthReducer: previousState = 1, type = NEW_TYPE, action.payload = undefined', () => {
    it('should return the netWorthValue = 1', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: undefined
        }
        let expectedStateValue = 0;
        expect(netWorthReducer(undefined, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: previousState = 1, type = NEW_TYPE, action.payload = undefined', () => {
    it('should return the netWorthValue = 1', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: 0
        }
        let expectedStateValue = 1;
        expect(netWorthReducer(1, testAction)).toEqual(expectedStateValue);
    })
});

describe('netWorthReducer: previousState = 1, type = NEW_TYPE, action.payload = 2', () => {
    it('should return the netWorthValue = 1', () => {
        let testAction = {
            type: 'NEW_TYPE',
            payload: 2
        }
        let expectedStateValue = 1;
        expect(netWorthReducer(1, testAction)).toEqual(expectedStateValue);
    })
});