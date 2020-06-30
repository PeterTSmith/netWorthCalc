import { getLiabilitiesSheet, getLiabilityValues } from '../api/netWorthApi.js';

export function liabilitiesSheetReducer(state = undefined, action) {
    if(!state){
        let initialState = getLiabilitiesSheet();

        return initialState;
    }

    if(action.type === 'UPDATE_LIABILITIES_SHEET' && validateNewRow(action.payload.name)) {
        let newRow = { id: "", name: action.payload.name };
        newRow.id = calculateId(action.payload.name);

        let newState = {
            title: state.title,
            content: []
        };

        for(let list of state.content) {
            let newList = {
                title: list.title,
                fields: [...list.fields]
            }

            if(list.title === action.payload.listTitle){
                let suffix = calculateSuffix(newRow, list)
                if(suffix){
                    newRow.name = newRow.name + suffix;
                    newRow.id = newRow.id + suffix;
                }
                newList.fields.push(newRow);
            }

            newState.content.push(newList);
        }

        return newState;
    } else {
        return state;
    }
};

function validateNewRow(name) {
    for(let i = 0; i < name.length; i++){
        if(!(
            (name[i].charCodeAt(0) === 32)
        ||
            (name[i].charCodeAt(0) > 47 && name[i].charCodeAt(0) < 58)
        ||
            (name[i].charCodeAt(0) > 64 && name[i].charCodeAt(0) < 90)
        ||
            (name[i].charCodeAt(0) > 96 && name[i].charCodeAt(0) < 123)
        )){
            return false;
        }
    }

    return true;
}

function calculateId(name) {
    let processingId = [];
    for(let i = 0; i < name.length; i++){
        if(name[i].charCodeAt(0) !== 32){
            if(i > 0 && name[i-1] === ' ') {
                processingId.push(name[i].toUpperCase());
            } else {
                processingId.push(name[i].toLowerCase());
            }
        }
    }

    return processingId.join('');
}

function calculateSuffix(newRow, list) {
    let checkMatch = true;
    let suffix = undefined;
    while(checkMatch) {
        checkMatch = false
        for(let item of list.fields) {
            if(
                (!suffix && item.id === newRow.id)
            ||
                (suffix  && item.id === newRow.id + suffix)
            ){
                if(!suffix){
                    suffix = 1;
                }else{
                    suffix++;
                }
                checkMatch = true;
            }
        }
    }
    return suffix;
}