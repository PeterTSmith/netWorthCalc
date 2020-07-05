export function assetValuesReducer(state=[], action) {
    if(action.type === 'UPDATE_ASSET_VALUES') {
        let inputVal = action.payload.valueUpdate.valueChange.newVal;

        if(isNaN(inputVal) || inputVal === undefined){
            inputVal = 0;
        }

        let newState = [];
        for(let stateItem of state) {
            let newItem = { ...stateItem };
            newState.push(newItem);
        }

        let inputItem = {
            docId: 0,
            fieldId: action.payload.valueUpdate.id,
            value: inputVal,
            valueType: "asset",
            dateModified: action.payload.valueUpdate.dateModified
        };

        let hit = false;
        for(let newItemIndex in newState) {
            if(newState[newItemIndex].fieldId === inputItem.fieldId) {
                newState[newItemIndex] = inputItem;
                hit = true;
            }
        }
        if(!hit) {
            newState.push(inputItem);
        }

        return newState;
    } else if(action.type === 'RETRIEVE_ASSET_VALUES') {
        return action.payload.serverValues;
    } else {
        return state;
    }
}