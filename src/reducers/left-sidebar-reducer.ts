type Action = {
    type: string;
    payload: boolean;
};

function reducer(
    state: { expanded: boolean } = { expanded: false },
    action: Action
) {
    switch (action.type) {
        case "EXPAND":
            return {
                ...state,
                expanded: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
