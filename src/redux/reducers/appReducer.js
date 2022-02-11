export const MODAL = "APP/MODAL";

const initialState = {
    isOpenModal: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL:
            return { ...state, isOpenModal: action.payload };
        default:
            return state;
    }
};
