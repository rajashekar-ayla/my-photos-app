import { REMOVE_PHOTO } from './types';

export const RemovePhoto = (id) => {
    return (dispatch) => {
        console.log('removing photo');
        dispatch({
            type: REMOVE_PHOTO,
            payload: id
        })
    }
}