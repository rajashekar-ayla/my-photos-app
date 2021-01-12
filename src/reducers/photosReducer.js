import { REMOVE_PHOTO, FETCH_PHOTOS_SUCCESS } from "../actions/types";

const intialState = {
  photos: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=intialState, action) => {
  switch(action.type){
    case FETCH_PHOTOS_SUCCESS:
    return {
        ...state,
        photos: action.payload
    }
    case REMOVE_PHOTO:
      return {
        ...state
      }
    default:
      return state;
  }
}