import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {RemovePhoto} from '../actions/RemovePhoto';
import {fetchPhotos} from '../actions/fetchPhotos';

class PhotosList extends Component {

  componentWillMount() {
      const {fetchPhotosList} = this.props;
      fetchPhotosList();
  }

  render() {
      const {photosProps} = this.props;
      console.log(photosProps);
      return (
          <div className="list-container">
          <h2>Photo List</h2>
          {photosProps.photos.map((photo) => (
            <div className="photo-row" key={photo.id}>
              <div className="Photo_thumbnail">
                <img src={photo.thumbnailUrl} width="100px" alt="thumbnail"/>
              </div>
              <div className="photo-detail">
                <div><h3>Album Id: {photo.albumId}</h3></div>
                <div><b>Id:</b> {photo.id}</div>
                <div><b>Title:</b> {photo.title}</div>
                <div><span className="remove-btn" onClick={() => this.props.RemovePhotoFromList(photo.id)}>Remove</span></div>
              </div>
            </div>
          ))}
      </div>
      )
  }
}
  
const mapStateToProps = state => ({
  photosProps: state.photosState
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPhotosList: fetchPhotos,
    RemovePhotoFromList: RemovePhoto
}, dispatch)

  export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);