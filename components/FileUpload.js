import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const UPLOAD_MUTATION = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      id
      url
      filename
    }
  }
`;

class FileUpload extends React.Component {
  render() {
    return (
      <Mutation mutation={UPLOAD_MUTATION}>
        {(uploadFile, { loading, error }) => (
          <input
            type="file"
            accept="image/*"
            onChange={event => {
              this._uploadFile(event, uploadFile);
            }}
            onClick={event => {
              event.target.value = null;
            }}
          />
        )}
      </Mutation>
    );
  }

  _uploadFile = async (event, uploadFile) => {
    const files = event.target.files;
    const file = files[0];
    const uploadfile = await uploadFile({
      variables: {
        file
      }
    }).catch(error => {
      console.log(error);
    });

    // console.log(uploadfile);

    const imageUrl = uploadfile.data.uploadFile.url;
    const imageName = uploadfile.data.uploadFile.filename;
    this.props.addImageToCard({ imageUrl, imageName });
  };
}

export default FileUpload;
