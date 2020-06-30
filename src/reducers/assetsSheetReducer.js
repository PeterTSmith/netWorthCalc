export function assetsSheetReducer(state = {}, action) {

    if(action.type === 'UPDATE_ASSETS_SHEET') {
        let serverSheet = action.payload.serverSheet;

        let prevSheet;
        if(serverSheet.dateModified <= state.dateModified) {
            prevSheet = state;
        }else{
            prevSheet = serverSheet;
        }

        let validNewField = validateNewField(action.payload.newField);

        if(validNewField
        || state.dateModified === undefined
        || serverSheet.dateModified >= state.dateModified) {

            let newState = {
                title: prevSheet.title,
                content: [],
                dateModified: new Date().getTime()
            };
    
            for(let list of prevSheet.content) {
                let newList = {
                    title: list.title,
                    fields: []
                }
                for(let field of list.fields){
                    newList.fields.push({...field});
                }
    
                if(validNewField && list.title === action.payload.newField.listTitle){
                    let newRow = { id: "", name: action.payload.newField.name };
                    newRow.id = calculateId(action.payload.newField.name);
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
        }else{
            return state;
        }
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