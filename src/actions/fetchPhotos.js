import { FETCH_PHOTOS_SUCCESS } from './types';

export const fetchPhotos = () => {
  return (dispatch) => {
    console.log('fetching photos');
    fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
    .then(res => res.json())
    .then(data => {
        dispatch({
          type: FETCH_PHOTOS_SUCCESS,
          payload: data
        })
        return data;
    })
    .catch(console.log)
  }
}