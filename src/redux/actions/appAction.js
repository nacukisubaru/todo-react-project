import {MODAL} from "../reducers/appReducer"

export function toggleModal(isOpen) {
    return {type: MODAL, payload: isOpen}
}
