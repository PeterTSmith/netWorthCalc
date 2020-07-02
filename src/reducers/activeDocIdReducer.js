export function activeDocIdReducer(state=0, action) {
    if(action.type === 'UPDATE_ACTIVE_DOC_ID') {
        console.log("hit");
        return action.payload;
    }
    return state;
}