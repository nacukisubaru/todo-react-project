import { connectDB } from "../../db/connect";
export const FIREBASE_MANAGER = "DB/FIREBASE_MANAGER";

const initialState = {
    db: {},
};

const db = connectDB();

export const dbReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIREBASE_MANAGER:
            return { ...state, db}
		default:
			return state 
    }
};
