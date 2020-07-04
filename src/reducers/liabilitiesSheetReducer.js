export function liabilitiesSheetReducer(state = undefined, action) {

    if(state === undefined) {
        state = {
            title: "",
            content: [],
            dateModified: new Date().getTime()
        }
    }

    if(action.type === 'UPDATE_LIABILITIES_SHEET') {
        let prevSheet = state;

        let validNewField = validateNewField(action.payload);

        if(validNewField) {
            let newState = {
                title: prevSheet.title,
                content: [],
                dateModified: new Date().getTime()
            };
    
            let newFieldEntered = false;
            for(let list of prevSheet.content) {
                let newList = {
                    title: list.title,
                    fields: []
                }
                for(let field of list.fields){
                    newList.fields.push({...field});
                }
    
                if(list.title === action.payload.listTitle){
                    let newRow = { id: "", name: action.payload.name };
                    newRow.id = calculateId(action.payload.name);
                    let suffix = calculateSuffix(newRow, list)
                    if(suffix){
                        newRow.name = newRow.name + suffix;
                        newRow.id = newRow.id + suffix;
                    }
                    newList.fields.push(newRow);
                    newFieldEntered = true;
                }
    
                newState.content.push(newList);
            }

            if(!newFieldEntered) {
                let newList = {
                    title: action.payload.listTitle,
                    fields: []
                }

                newList.fields.push({
                    id: calculateId(action.payload.name),
                    name: action.payload.name
                });

                newState.content.push(newList);
            }

            return newState;
        }else{
            return state;
        }
    } else if(action.type === 'RETRIEVE_LIABILITIES_SHEET') {
        return action.payload.serverSheet;
    }
    return state;
};

function validateNewField(newField) {
    if(!newField){
        return false;
    }
    let name = newField.name;
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