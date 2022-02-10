import { FIREBASE_MANAGER } from "../reducers/dbReducer"

export function managerDB(db) {
    return {type: FIREBASE_MANAGER, payload: db}
}