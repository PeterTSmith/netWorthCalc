export function activeDocIdReducer(state=0, action) {
    if(action.type === 'UPDATE_ACTIVE_DOC_ID') {
        return action.payload;
    }
    return state;
}